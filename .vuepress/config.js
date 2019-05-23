module.exports = {
  theme: 'yubisaki',
  title: 'ぼどげとかさうなとか',
  description: 'higituneが日常とメモ書きに使う場所',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  ga: 'UA-140732528-1', // Google Analytics ID
  serviceWorker: true,
  evergreen: true,
  markdown: {
    anchor: { permalink: true },
    toc: { includeLevel: [1, 2] }
  },
  themeConfig: {
    github: 'higitune',
    evergreen: true,
    serviceWorker: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'TAGS', link: '/tag/' },
      { text: 'GitHub', link: 'https://github.com/higitune' }
    ],
    footer: 'MIT Licensed | Copyright © 2019-present higitune'
  },
}
