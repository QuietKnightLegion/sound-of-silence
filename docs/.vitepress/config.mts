import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "寂静之声",
  description: "被消失的播客节目",
  head: [
    [
      'link', { rel: 'icon', href: 'images/favicon.webp' }
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: [
      {
        text: '播客',
        items: [
          { text: '剩余价值SurplusValue', link: '/podcasts/surplusvalue' },
          { text: '展开讲讲', link: '/podcasts/zhankaijiangjiang' },
          { text: '反派影评', link: '/podcasts/fanpaiyingping' },
          { text: 'Steve说', link: '/podcasts/steve' },
          { text: '翻转电台', link: '/podcasts/flipradio' },
          { text: '塔可冲司机', link: '/podcasts/tarkochonsky' },
          { text: '海马星球', link: '/podcasts/seahorseplanet' },
        ]
      },
      {
        text: '',
        items: [
          { text: '支持', link: '/support' },
          { text: '协作编辑', link: '/collaborate' },
          // { text: '捐赠', link: '/donate' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    outline: { 
      label: '本页目录',
    },
    returnToTopLabel: '回到顶部'
  },
  cleanUrls: true,
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
})
