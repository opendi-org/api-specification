// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenDI - API Specification (DRAFT)',
  tagline: 'Early working draft of API Specification and Schemas for the upcoming OpenDI standards.',
  favicon: 'img/opendi-icon-small.png',

  // Set the production url of your site here
  url: 'http://opendi.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/api-specification/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'opendi-org', // Usually your GitHub org/user name.
  projectName: 'api-specification', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Schema-plugin allows use of @theme/JSONSchemaEditor or @theme/JSONSchemaViewer
  // OpenAPI-docs allows OpenAPI plugin to use its theming
  themes: ["docusaurus-json-schema-plugin", "docusaurus-theme-openapi-docs"],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          docItemComponent: "@theme/ApiItem",

          //Set up "Edit this page" option at the bottom of each page
          //Available params given here: https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-docs#EditUrlFunction
          editUrl: ({version, versionDocsDirPath, docPath}) => {
            if (version !== 'current') //Only allow page editing when on the "Next" (dev) version
            {
              return undefined;
            }
            return "https://github.com/opendi-org/api-specification/tree/dev/" + versionDocsDirPath + "/" + docPath;
          },

          routeBasePath: '/'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "openapi", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          OpenDIApi: {
            specPath: "docs/api-source/api.json",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OpenDI',
        logo: {
          alt: 'OpenDI Logo',
          src: 'img/opendi-icon.png',
          href: 'https://opendi.org'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'landingSidebar',
            position: 'left',
            label: 'API Specification (DRAFT)',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            'aria-label': 'GitHub Repo',
            className: 'navbar--github-link',
            href: 'https://github.com/opendi-org/api-specification',
            position: 'right',
          },
          {
            'aria-label': 'Discord Invite',
            className: 'navbar--discord-link',
            href: 'https://discord.gg/FtAX3JStJz',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: 'http://opendi.org',
              },
              {
                label: 'Roles and User Stories',
                href: 'http://roles-user-stories.opendi.org'
              },
              {
                label: 'API Specification',
                href: 'http://opendi.org/api-specification'
              },
            ],
          },
          {
            title: 'Get Involved',
            items: [
              {
                label: 'OpenDI Discord',
                href: 'https://discord.gg/FtAX3JStJz',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/opendi-org',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['json']
      },
    }),
};

export default config;
