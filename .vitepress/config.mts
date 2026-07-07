import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "mds",
  
  title: "LazyChat - Documentation",
  description: "LazyChat docs",
  base: "/LazyChat-Docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Configuration', link: '/pages/config/setup'}
      // { text: 'API', link: '/pages/api/setup'}
    ],

    sidebar: [
      {
        text: 'Setup',
        items: [
          { text: 'Installation', link: '/pages/config/setup' },
          { text: 'Configuration', link: '/pages/config/config' }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License. Made by LazyCato0o.',},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LazyCat0/LazyChat' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      themeConfig: {
        nav: [
          {text: 'Главная', link: '/ru/'},
          {text: 'Конфигурация', link: '/ru/pages/config/setup'}
        ],
        footer: {
          message: 'Выпущено по лицензии MIT. Создано LazyCato0o.',},
        sidebar: [{
          text: 'Подготовка',
          items: [
              {text: 'Установка', link:'ru/pages/config/setup'},
              {text: 'Конфигурация', link:'ru/pages/config/config'}
          ]
        }]
      }
    },
    uk: {
      label: 'Українська',
      lang: 'uk',
      link: '/uk/',
      themeConfig: {
        nav: [
          {text: 'Головна', link: '/uk/'},
          {text: 'Конфигурація', link: '/uk/pages/config/setup'}
        ],
        sidebar: [{
          text: 'Підготовка',
          items: [
              {text: 'Встановлення', link:'uk/pages/config/setup'},
              {text: 'Конфігурація', link:'uk/pages/config/config'}
          ]
        }],
        footer: {
          message: 'Випущено за ліцензією MIT. Створено LazyCato0o. Переклала klliko',},
      }
    }
  }
})
