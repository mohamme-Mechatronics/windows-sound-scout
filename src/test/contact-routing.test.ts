import { describe, expect, it } from "vitest";
import { BUSINESS_PHONE, BUSINESS_WHATSAPP, BUSINESS_EMAIL, businessMailto } from "@/lib/contact";
import { runBot } from "@/lib/bot-engine.js";

describe("Business contact routing", () => {
  it("uses the requested local phone", () => {
    expect(BUSINESS_PHONE).toBe("777687107");
    expect(BUSINESS_WHATSAPP).toBe("967777687107");
  });
  it("sends form enquiries only to the requested email", () => {
    expect(BUSINESS_EMAIL).toBe("mohammedqumash3@gmail.com");
    const destination = new URL(businessMailto("استفسار", { الاسم: "عميل" }));
    expect(destination.pathname).toBe("mohammedqumash3@gmail.com");
    expect(destination.searchParams.has("cc")).toBe(false);
    expect(destination.searchParams.has("bcc")).toBe(false);
  });
  it("routes the sales handoff exclusively to the new number", () => {
    const result = runBot({ step: "qnext_ask", customer_name: "عميل", city: "عدن" }, {
      phone: "967711111111", text: "sales_contact", message_id: "contact-test", phone_number_id: "test",
    });
    const payloads = result?.extra_payloads ?? [];
    expect(payloads.length).toBeGreaterThan(0);
    expect(payloads.map((payload) => typeof payload === "object" && payload !== null && "to" in payload ? payload.to : undefined)).toEqual(["967777687107"]);
  });
});