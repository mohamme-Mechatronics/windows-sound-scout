import { describe, expect, it } from "vitest";
import { allowsOfflineWorker, isOfflineMedia } from "../lib/offline-policy";
describe("offline boundaries", () => {
  it("permits installed production Android web app", () => {
    expect(allowsOfflineWorker("windows-sound-scout.lovable.app", true, false, "")).toBe(true);
  });
  it("never controls development, iframe, preview or kill-switch sessions", () => {
    expect(allowsOfflineWorker("localhost", false, false, "")).toBe(false);
    expect(allowsOfflineWorker("windows-sound-scout.lovable.app", true, true, "")).toBe(false);
    expect(allowsOfflineWorker("id-preview--abc.lovable.app", true, false, "")).toBe(false);
    expect(allowsOfflineWorker("preview-v2--abc.lovable.app", true, false, "")).toBe(false);
    expect(allowsOfflineWorker("project--abc-dev.lovable.app", true, false, "")).toBe(false);
    expect(allowsOfflineWorker("windows-sound-scout.lovable.app", true, false, "?sw=off")).toBe(false);
  });
  it("saves opened sounds, videos and documents but not private APIs", () => {
    const origin = "https://windows-sound-scout.lovable.app";
    for (const path of ["/audio/welcome.mp3", "/videos/product.mp4", "/catalogs/panel.pdf", "/__l5e/assets-v1/id/file.pdf"]) expect(isOfflineMedia(new URL(path, origin), origin)).toBe(true);
    expect(isOfflineMedia(new URL("/api/public/orders", origin), origin)).toBe(false);
    expect(isOfflineMedia(new URL("https://example.com/private.pdf"), origin)).toBe(false);
  });
});