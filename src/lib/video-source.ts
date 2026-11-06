import { resolveMedia } from "@/lib/media";
/** Videos stream on demand; opening the app never downloads the whole catalog. */
export function warmVideos(_urls: string[]) {}
export function useResolvedVideoSrc(src: string): string { return resolveMedia(src); }
