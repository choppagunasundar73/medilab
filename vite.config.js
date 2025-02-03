import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    // Exclude native modules that cause build errors
    exclude: ['fsevents', 'lightningcss']
  },
  build: {
    rollupOptions: {
      // Mark problematic modules as external so they are not bundled
      external: ['fsevents', 'lightningcss']
    }
  }
})
