// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Configure public base path for bundled assets.
  // Allows overriding via the VITE_BASE_URL environment variable.
  base: process.env.VITE_BASE_URL || './',
  plugins: [react()]
});
