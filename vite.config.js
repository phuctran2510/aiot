import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.VITE_BASE ?? '/'

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'data-theory':  ['./src/data/theory'],
          'data-content': ['./src/data/content', './src/data/quiz',
                           './src/data/quiz_extra', './src/data/exercises',
                           './src/data/exercises_extra', './src/data/thesis',
                           './src/data/thesis_extra'],
          'data-labs':    ['./src/data/labs', './src/data/labs_extra',
                           './src/data/labs_all'],
        }
      }
    }
  }
})
