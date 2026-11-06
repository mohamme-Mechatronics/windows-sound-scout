// @vitest-environment node
import { afterEach, describe, expect, it, vi } from "vitest";
import { checkAdminPassword, validAdminPassword } from "@/lib/admin-password.server";

afterEach(() => vi.unstubAllEnvs());

describe("Configured admin password", () => {
  it("accepts only the current encrypted setting", async () => {
    vi.stubEnv("ADMIN_PASSWORD", "test-only-current-credential");
    expect(await validAdminPassword("test-only-current-credential")).toBe(true);
    expect(await validAdminPassword("test-only-previous-credential")).toBe(false);
    await expect(checkAdminPassword("test-only-previous-credential")).rejects.toThrow("Unauthorized");
  });
  it("revokes previous credentials when the setting changes", async () => {
    vi.stubEnv("ADMIN_PASSWORD", "test-only-replaced-credential");
    expect(await validAdminPassword("test-only-current-credential")).toBe(false);
  });
  it("denies access without a configured password", async () => {
    vi.stubEnv("ADMIN_PASSWORD", "");
    expect(await validAdminPassword("anything")).toBe(false);
  });
});