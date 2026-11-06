// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [VitePWA({
    strategies: "generateSW",
    outDir: "dist/client",
    filename: "sw.js",
    injectRegister: null,
    registerType: "autoUpdate",
    manifest: false,
    devOptions: { enabled: false },
    workbox: {
      globDirectory: "dist/client",
      globPatterns: ["**/*.{js,css,webmanifest,json}"],
      maximumFileSizeToCacheInBytes: 12 * 1024 * 1024,
      navigateFallback: null,
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: ({ request, url }) => request.mode === "navigate" && ["/", "/hithium", "/lipower", "/pylontech", "/suntech", "/downloads"].includes(url.pathname),
          handler: "NetworkFirst",
          options: { cacheName: "actes-public-pages-v1", cacheableResponse: { statuses: [200] } },
        },
        {
          urlPattern: ({ url, sameOrigin }) => sameOrigin && /^\/(?:__l5e\/assets-v1\/|audio\/|fonts\/|catalogs\/|videos\/|media\/|brand\/)/.test(url.pathname),
          handler: "CacheFirst",
          options: { cacheName: "actes-opened-media-v1", cacheableResponse: { statuses: [200] }, rangeRequests: true },
        },
        {
          urlPattern: ({ url, sameOrigin }) => sameOrigin && /^\/assets\/.+[-.][a-zA-Z0-9_-]{8,}\.(?:js|css)$/.test(url.pathname),
          handler: "CacheFirst",
          options: { cacheName: "actes-hashed-assets-v1", cacheableResponse: { statuses: [200] } },
        },
      ],
    },
  })],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
