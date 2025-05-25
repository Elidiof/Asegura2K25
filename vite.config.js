// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, existsSync } from 'fs'

// Plugin para copiar _redirects de public a dist
function copyRedirects() {
  return {
    name: 'copy-redirects',
    closeBundle() {
      const from = resolve(__dirname, 'public/_redirects')
      const to = resolve(__dirname, 'dist/_redirects')
      if (existsSync(from)) copyFileSync(from, to)
    }
  }
}

export default defineConfig({
  plugins: [react(), copyRedirects()],
  base: './'
})
