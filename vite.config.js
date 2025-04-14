import { defineConfig } from 'vite'

export default defineConfig({
  // 强制预构建这些依赖
  optimizeDeps: {
    include: ['vitepress']
  },
  build: {
    // 确保使用ESM格式
    target: 'esnext'
  }
})