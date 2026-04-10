import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
        host: '0.0.0.0', // Use 'localhost' instead of a specific IP
        port: 5173, // Ensure this matches the port you're using
        allowedHosts: true
    },
})
