import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true
    // proxy: {
    //   "/index": "http://127.0.0.1:5000",
    //   "/api/todo": "http://127.0.0.1:5000", 
    //   "/api/todo_list": "http://127.0.0.1:5000",
    //   "/api/int": "http://127.0.0.1:5000",
    // }
  }
})
