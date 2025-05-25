import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Fuerza que todos los imports de JS/CSS/imagenes sean relativos
  base: './',
  plugins: [react()]
});
