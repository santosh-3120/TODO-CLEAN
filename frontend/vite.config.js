// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',          // 👈 makes Vite listen on 0.0.0.0
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,  // 👈 helps inside Docker
    },
  },
});
