import { allowsOfflineWorker, isOfflineMedia, OFFLINE_MEDIA_CACHE } from "./offline-policy";

/** Single registrar; preview must never be controlled by the offline worker. */
export async function startOffline() {
  if (!("serviceWorker" in navigator)) return;
  const eligible = allowsOfflineWorker(location.hostname, import.meta.env.PROD, window.self !== window.top, location.search);
  if (!eligible) {
    for (const registration of await navigator.serviceWorker.getRegistrations()) {
      if ([registration.active, registration.waiting, registration.installing].some(worker => worker && new URL(worker.scriptURL).pathname === "/sw.js")) await registration.unregister();
    }
    return;
  }
  await navigator.serviceWorker.register("/sw.js");
  await navigator.serviceWorker.ready;
  void navigator.storage?.persist?.().catch(() => false);
  const pending = new Set<string>();
  const save = async (source: string) => {
    const url = new URL(source, location.origin);
    if (!isOfflineMedia(url, location.origin) || pending.has(url.href)) return;
    pending.add(url.href);
    try {
      const cache = await caches.open(OFFLINE_MEDIA_CACHE);
      if (await cache.match(url.href)) return;
      // A complete GET is required: a player's 206 range response cannot be
      // stored as the reusable full video by Cache Storage.
      const response = await fetch(url.href);
      if (response.ok && response.status === 200) await cache.put(url.href, response);
    } catch { /* Offline or full storage: leave the item eligible for retry. */ }
    finally { pending.delete(url.href); }
  };
  const onLoad = (event: Event) => {
    const element = event.target;
    if (element instanceof HTMLMediaElement || element instanceof HTMLImageElement) void save(element.currentSrc || element.src);
  };
  document.addEventListener("loadstart", onLoad, true);
  document.addEventListener("load", onLoad, true);
  document.addEventListener("click", event => {
    const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (link instanceof HTMLAnchorElement) void save(link.href);
  }, true);
  document.querySelectorAll("img,video,audio").forEach(element => {
    if (element instanceof HTMLImageElement || element instanceof HTMLMediaElement) void save(element.currentSrc || element.src);
  });
  // Cache the public entry document after worker activation; private API
  // responses and POST requests are deliberately never cached.
  if (navigator.onLine) {
    void (async () => {
      const response = await fetch("/", { credentials: "omit" });
      if (response.status === 200) await (await caches.open("actes-public-pages-v1")).put(new URL("/", location.origin).href, response);
    })().catch(() => {});
  }
}