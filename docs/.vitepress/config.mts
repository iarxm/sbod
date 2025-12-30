import { defineConfig } from 'vitepress'


export default defineConfig({

  title: "SurfingBodies",
  description: "Documentation for a performance surfing physical preperation system. A fundamental tool for high performance surfing.",
  base: '/sbod/',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://iarxm.github.io/sbod',
    lastModDateOnly: true,
  },

  head: [['link', { rel: 'icon', href: '/img/favicon.ico' }]],

  themeConfig: {

    repo: 'iarxm/sbod',
    logo: '/img/logo.png',
    nav: [
      { text: 'Docs', link: '/docs/index' }
    ],
   
    outline: [2,4],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Introduction', link: '/docs/index' },
          { 
            text: 'Getting Started',
            items: [
              { text: 'Practise', link: '/docs/get/index.html', },
              { text: 'Resources', link: '/docs/get/links.html', },
            ],
          },
          { text: 'Resources', link: '/docs/resources.html', },
          { text: 'Principles', link: '/docs/principles.html', },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iarxm/sbod' }
    ]
  }
})
