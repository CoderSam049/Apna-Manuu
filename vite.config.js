import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // 👈 This ensures relative paths for assets
  plugins: [react()],
  server: {
    port: 3001,
  },
});