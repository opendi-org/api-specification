import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/opendi-decision-modeling-api",
    },
    {
      type: "category",
      label: "Models",
      link: {
        type: "doc",
        id: "api/models",
      },
      items: [
        {
          type: "doc",
          id: "api/get-several-models",
          label: "Get several models",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-a-new-model",
          label: "Create a new model",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-an-existing-model",
          label: "Update an existing model",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/get-a-model-reduced",
          label: "Get a model (reduced)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-a-model-complete",
          label: "Get a model (complete)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Model Components",
      link: {
        type: "doc",
        id: "api/components",
      },
      items: [
        {
          type: "doc",
          id: "api/get-several-components",
          label: "Get several components",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-several-evaluatable-components",
          label: "Get several evaluatable components",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/retrieve-an-evaluatable-component",
          label: "Retrieve an evaluatable component",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-several-diagram-components",
          label: "Get several diagram components",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/retrieve-a-diagram-component",
          label: "Retrieve a diagram component",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Simulations",
      link: {
        type: "doc",
        id: "api/simulations",
      },
      items: [
        {
          type: "doc",
          id: "api/get-several-simulations",
          label: "Get several simulations",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Simulation Results",
      link: {
        type: "doc",
        id: "api/results",
      },
      items: [
        {
          type: "doc",
          id: "api/get-several-results",
          label: "Get several results",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Processors",
      link: {
        type: "doc",
        id: "api/processors",
      },
      items: [
        {
          type: "doc",
          id: "api/get-several-processors",
          label: "Get several processors",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
