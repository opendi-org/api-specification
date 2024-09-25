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
          type: "generated-index",
          title: "OpenDI API",
          description: "This is the work-in-progress standard API definition for OpenDI-compliant software systems.",
          slug: "/api",
        },
        items: require("./docs/api/sidebar.ts"),
      },
      {
        type: 'category',
        label: 'Schemas',
        items: [
          {
            type: 'doc',
            label: "Causal Decision Model: Full Schema",
            id: 'cdm-full-schema'
          },
          {
            type: 'doc',
            label: "Sample Data",
            id: 'sample-data'
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
