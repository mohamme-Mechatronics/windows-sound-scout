import { createFileRoute } from "@tanstack/react-router";
import { mediaResponse } from "@/lib/media";
export const Route = createFileRoute("/downloads/ACTES-windows-x64.zip")({ server: { handlers: { GET: ({ request }) => mediaResponse(request), HEAD: ({ request }) => mediaResponse(request) } } });
