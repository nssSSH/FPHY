import { defineConfig } from 'vitepress'

export default defineConfig({

  base: '/FPHY/',
  
  title: 'FPHY',
  description: 'Free Programming Heck Yeah!',

  themeConfig: {
    nav: [
      { text: 'Career', link: '/career/' },
      { text: 'Languages', link: '/languages/' },
      { text: 'CS Fundamentals', link: '/cs-fundamentals/' },
      { text: 'Tools', link: '/tools/' }
    ],

    sidebar: [
      {
        text: 'Learning',
        items: [
          { text: 'Career', link: '/career/' },
          { text: 'Cloud', link: '/cloud/' },
          { text: 'Communities', link: '/communities/' },
          { text: 'CS Fundamentals', link: '/cs-fundamentals/' },
          { text: 'Databases', link: '/databases/' },
          { text: 'Languages', link: '/languages/' },
          { text: 'Learning', link: '/learning/' },
          { text: 'Tools', link: '/tools/' }
        ]
      }
    ]
  }
})
