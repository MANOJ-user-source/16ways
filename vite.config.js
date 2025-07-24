import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    ...(command === 'serve' && {
      server: {
        port: 5173,
        strictPort: true,
        cors: true,
        allowedHosts: ['.ngrok-free.app'],
        host: true
      }
    })
  };
});
