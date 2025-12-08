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
            label: 'Home',
            href: 'https://opendi.org'
          },
          {
            type: 'link',
            label: 'Glossary',
            href: 'https://opendi.org/OpenDI%20Glossary/'
          },
          {
            type: 'link',
            label: 'How to Contribute',
            href: 'https://opendi.org/How%20To%20Contribute/'
          }
        ]
      }
    ]

};

export default sidebars;
