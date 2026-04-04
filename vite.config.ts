import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// User GitHub Pages (https://USER.github.io/) uses base "/"; project pages need "/REPO/".
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
})
