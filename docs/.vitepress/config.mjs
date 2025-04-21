import { defineConfig } from "vitepress"
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🚀卡泽湾2.0",
  description: "A VitePress Site",
  // lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],



    // lastUpdatedText: '最后更新于',
    // lastUpdated: {
    //   text: '最后更新于',
    //   formatOptions: {
    //     dateStyle: 'full',
    //     timeStyle: 'medium'
    //   }
    // },

    // sidebar: 'auto',  // 使用自动生成的侧边栏

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: getSidebar({ contentRoot: '/docs', contentDirs: ['posts'], collapsible: true, collapsed: false, useFrontmatter: false }),

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }, docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
  },

})
