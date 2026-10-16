import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from the custom domain https://fincore.codespanda.com/ (set in the repo's Pages settings),
// so the site lives at the domain root. If you go back to https://<user>.github.io/<repo>/,
// set base to '/<repo>/'.
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
})
