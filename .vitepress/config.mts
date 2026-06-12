import { defineConfig } from 'vitepress'

export default defineConfig({

  base: '/FPHY/',
  
  title: 'FPHY',
  description: 'Free Programming Heck Yeah!',

  themeConfig: {
    nav: [
      { text: 'Beginner\'s Post', link: '/beginner-posts/' },
      { text: 'Privacy', link: '/privacy/'}
    ],

    sidebar: [
      {
        text: 'Categories',
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
