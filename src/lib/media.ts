type AssetPointer = { url: string };
const pointers = import.meta.glob<AssetPointer>("../assets/imported/public/**/*.asset.json", { eager: true, import: "default" });
const media = new Map(Object.entries(pointers).map(([path, pointer]) => [path.replace("../assets/imported/public", "").replace(/\.asset\.json$/, ""), pointer.url]));
export function resolveMedia(path: string): string { return media.get(path) ?? path; }
export function mediaResponse(request: Request): Response {
  const path = decodeURIComponent(new URL(request.url).pathname);
  const url = media.get(path);
  return url ? new Response(null, { status: 302, headers: { Location: url, "Cache-Control": "public, max-age=86400" } }) : new Response("File not found", { status: 404 });
}
