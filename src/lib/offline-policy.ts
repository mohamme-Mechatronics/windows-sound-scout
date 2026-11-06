const previewLabel = /^(?:id-preview|preview)(?:-[a-z0-9]+)?--.+$/;
export function allowsOfflineWorker(hostname: string, production: boolean, framed: boolean, search: string) {
  const host = hostname.toLowerCase();
  if (!production || framed || new URLSearchParams(search).get("sw") === "off") return false;
  if (["lovableproject.com", "lovableproject-dev.com", "beta.lovable.dev"].some(domain => host === domain || host.endsWith(`.${domain}`))) return false;
  if (["lovable.app", "gpt-eng.com", "gptengineer.run"].some(domain => host.endsWith(`.${domain}`))) {
    const label = host.split(".")[0] ?? "";
    if (previewLabel.test(label) || /^project--.+-dev$/.test(label)) return false;
  }
  return true;
}
export const OFFLINE_MEDIA_CACHE = "actes-opened-media-v1";
export function isOfflineMedia(url: URL, origin: string) {
  return url.origin === origin && /^\/(?:__l5e\/assets-v1\/|audio\/|fonts\/|catalogs\/|videos\/|media\/|brand\/)/.test(url.pathname);
}