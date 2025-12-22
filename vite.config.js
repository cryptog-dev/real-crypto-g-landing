// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    // Visualize bundle size (only in build)
    visualizer({
      open: true,  // Opens the report in browser after build
      gzipSize: true,
      brotliSize: true,
    })
  ],
  build: {
    rollupOptions: {
      input: "index.html",
      output: {
        manualChunks: {
          // Split vendor code
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Split large dependencies
          ui: ['lucide-react', 'react-icons'],
          // Add more chunks as needed
        }
      }
    },
    // Enable minification
    minify: 'terser',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Disable source maps in production
    sourcemap: false,
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  }
});