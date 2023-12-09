import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  plugins: [react()],
  publicDir: resolve(__dirname, 'public'),
  server: {
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/lp/main/index.html'),
        sub: resolve(__dirname, 'src/lp/sub/index.html')
      }
    }
  }
})
