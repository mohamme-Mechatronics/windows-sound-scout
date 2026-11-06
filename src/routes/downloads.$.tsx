import { createFileRoute } from "@tanstack/react-router";
import { mediaResponse } from "@/lib/media";
export const Route = createFileRoute("/downloads/$")({ server: { handlers: { GET: ({ request }) => mediaResponse(request), HEAD: ({ request }) => mediaResponse(request) } } });
