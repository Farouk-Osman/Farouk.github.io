import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Farouk.github.io/', // مهم جداً عشان GitHub Pages يعرف المسار
})
