import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
   build: {
    outDir: 'dist/client',  // Client assets here
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  ssr: {
    outDir: 'dist/server',
    noExternal: ['pdfjs-dist'],
    external: ['gsap/Draggable', 'gsap', 'gsap/ScrollTrigger', '@notionhq/client']
    // Or try adding it to external if you want Node to ignore it:
    // external: ['pdfjs-dist']
  },
   define: {
    global: 'globalThis', // Fix React legacy warning
  },
  optimizeDeps: {
    include: ['gsap', 'gsap/Draggable'],
  },
  resolve: {
    alias: {
      "@": resolve(dirname(fileURLToPath(import.meta.url)), "./src"),
      '@components': resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
      '@constants': resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
      '@store': resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
      '@hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
      '@windows': resolve(dirname(fileURLToPath(import.meta.url)), 'src/windows')
    }
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
    include: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
    // Mock react-pdf automatically
    // mockReset: true,
    // Vitest auto-mocks modules in __mocks__
    deps: {
      optimizer: {
        web: ['react-pdf', 'pdfjs-dist']
      }
    }
  },
})
