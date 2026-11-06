import { afterEach, describe, expect, it, vi } from "vitest";
import { isVoiceOn, isVoicePlatform, setVoiceOn } from "@/lib/voice-guide";

afterEach(() => { localStorage.clear(); vi.restoreAllMocks(); });

describe("Voice guide on phones", () => {
  it("allows audio on Android browsers", () => {
    vi.spyOn(navigator, "userAgent", "get").mockReturnValue("Mozilla/5.0 (Linux; Android 14) Mobile");
    expect(isVoicePlatform()).toBe(true);
  });
  it("allows audio on iPhone browsers", () => {
    vi.spyOn(navigator, "userAgent", "get").mockReturnValue("Mozilla/5.0 (iPhone) Mobile Safari");
    expect(isVoicePlatform()).toBe(true);
  });
  it("respects the saved mute preference", () => {
    setVoiceOn(false);
    expect(isVoiceOn()).toBe(false);
  });
});