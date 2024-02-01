import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development',
  // includeAssets: ['favicon.svg'],
  registerType: 'autoUpdate',
  workbox: {
    clientsClaim: true,
    skipWaiting: true
  //   globPatterns: ['**/*.{js,css,html}'],
  },
  manifest: {
    name: 'Pfadinamen Finder',
    short_name: 'Pfadinamen Finder',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
  devOptions: {
    enabled: true,
    type: 'module',
    navigateFallback: 'index.html',
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    VitePWA(pwaOptions)
  ],
});
