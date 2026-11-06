import { createFileRoute } from "@tanstack/react-router";
import { mediaResponse } from "@/lib/media";
export const Route = createFileRoute("/catalogs/$")({ server: { handlers: { GET: ({ request }) => mediaResponse(request), HEAD: ({ request }) => mediaResponse(request) } } });
