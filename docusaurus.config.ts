import type {Config} from '@docusaurus/types';
import type {Options as ClassicOptions, ThemeConfig} from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ML Course',
  tagline: 'Learn Machine Learning',
  favicon: 'img/favicon.ico',

  url: 'https://dap-fs.github.io',
  baseUrl: '/Test20/',

  organizationName: 'DAP-FS',
  projectName: 'Test20',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies ClassicOptions,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'ML Course',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
      ],
    },
  } satisfies ThemeConfig,
};

export default config;
