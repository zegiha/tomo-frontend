import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(
    {
      svgrOptions: {
        icon: true,
      },
    }
  ),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@api", replacement: "/src/api" },
      { find: "@types", replacement: "/src/types" },
    ],
  },
})
