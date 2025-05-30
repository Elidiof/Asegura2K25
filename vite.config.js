// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',          // ruta absoluta, segura para cualquier página interna
  plugins: [react()]
});
