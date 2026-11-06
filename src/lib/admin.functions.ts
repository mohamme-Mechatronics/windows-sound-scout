import { createServerFn } from "@tanstack/react-start";

export const verifyAdminPassword = createServerFn({ method: "POST" })
  .inputValidator((data: { password: string }) => ({ password: String(data?.password ?? "") }))
  .handler(async ({ data }) => {
    const { validAdminPassword } = await import("@/lib/admin-password.server");
    return { ok: await validAdminPassword(data.password) };
  });
