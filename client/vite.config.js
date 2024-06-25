import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
    proxy: {
      "/api/login" : "http://127.0.0.1:2000",
      "/get_user" : "http://127.0.0.1:2000",
      "/api/show" : "http://127.0.0.1:2000",
      "/api/logout" : "http://127.0.0.1:2000"
    }
  }
})