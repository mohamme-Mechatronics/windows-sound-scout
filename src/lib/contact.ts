/** Single destination for all business contact and admin handoffs. */
export const BUSINESS_PHONE = "777687107";
export const BUSINESS_WHATSAPP = "967777687107";
export const BUSINESS_EMAIL = "mohammedqumash3@gmail.com";

export function businessMailto(subject: string, fields: Record<string, string>) {
  const body = Object.entries(fields).map(([key, value]) => `${key}: ${value}`).join("\n");
  return `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}