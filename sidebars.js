/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
//https://docusaurus.io/docs/sidebar

//MAIN!!!
const sidebars = {
    landingSidebar: [
      {
        type: 'doc',
        label: "Schema",
        id: 'index'
      },
      {
        type: 'doc',
        label: "Sample Data",
        id: 'sample-data'
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
