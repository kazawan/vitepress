#!/usr/bin/env node

// 这个文件帮助处理 ESM 相关的导入问题
import { createServer } from 'vitepress'

createServer().then(() => {
  console.log('VitePress server started')
}).catch(err => {
  console.error('Failed to start VitePress server:', err)
  process.exit(1)
})