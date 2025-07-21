import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.ngrok-free.app',
      '.ngrok.io',
      'd21325e5c093.ngrok-free.app'
    ],
    host: true, // Allow external connections
    port: 3000,
  },
})
