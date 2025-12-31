/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
//https://docusaurus.io/docs/sidebar

//MAIN!!!
const sidebars = {
    landingSidebar: [
      {
        type: 'doc',
        label: "Overview",
        id: 'index'
      },
      {
        type: 'category',
        label: "OpenDI API",
        link: {
          type: 'doc',
          id: 'api-source/api-category-index'
        },
        items: require("./docs/api/sidebar.ts"),
      },
      {
        type: 'category',
        label: 'Schemas',
        link: {
          type: 'doc',
          id: 'schemas/index'
        },
        items: [
          {
            type: 'doc',
            label: "Causal Decision Model: Full Schema",
            id: 'schemas/cdm-full-schema'
          }
        ]
      },
      {
        type: 'category',
        label: 'OpenDI',
        items: [
          {
            type: 'link',
            label: 'Main Site',
            href: 'https://opendi.org'
          },
          {
            type: 'link',
            label: 'Roles and User Stories',
            href: 'https://opendi-org.github.io/roles-user-stories/'
          },
          {
            type: 'link',
            label: 'API Specification',
            href: 'https://opendi-org.github.io/api-specification/'
          },
          {
            type: 'link',
            label: 'CDM Authoring Tool',
            href: 'https://opendi-org.github.io/cdd-authoring-tool'
          }
        ]
      }
    ]

};

export default sidebars;
