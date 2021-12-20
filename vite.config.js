import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      styles: resolve(__dirname, 'src/styles'),
      hooks: resolve(__dirname, 'src/hooks'),
      components: resolve(__dirname, 'src/components'),
      utils: resolve(__dirname, 'src/utils'),
      api: resolve(__dirname, 'src/api'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: (content, loaderContext) => {
          return "@import 'styles/mixins.scss';" + content
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3002,
    proxy: {
      '/devApi': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/devApi/, '/'),
      },
    },
  },
})
