import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  base: command === 'build' || mode === 'production' ? '/stellar-spiral-react/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Garante que o 404.html seja copiado para a raiz do build
    rollupOptions: {
      input: {
        main: './index.html',
        404: './public/404.html'
      }
    }
  },
}))
