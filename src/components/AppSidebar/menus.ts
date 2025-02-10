import { title } from "process";

export const menus = {
    versions: ["1.0.1"],
    navMain: [
        {
            title: "Configuration",
            url: "#",
            isActive: true,
            items: [
                {
                    title: "Pages",
                    url: "#pages",
                    isActive: false,
                },
                {
                    title: "Column",
                    url: "#column",
                    isActive: false,
                },
                {
                    title: 'Setting',
                    url: "#setting",
                    isActive: false,
                }
            ]
        },
      {
        title: "Header",
        url: "#",
        isActive: false,
        items: [
          {
            title: "Simple",
            url: "#header-simple",
            isActive: false,
          },
          {
            title: "Multi Layers",
            url: "#header-multiLayers",
            isActive: false,
          },
          {
            title: "Mega Menu",
            url: "#header-megaMenu",
            isActive: false,
          },
          {
            title: "Menus",
            url: "#header-menus",
            isActive: false,
          },
          {
            title: "Tabs",
            url: "#header-tabs",
            isActive: false,
          },
        ],
      },
      {
        title: "Footer",
        url: "#",
        isActive: false,
        items: [
          {
            title: "Simple",
            url: "#footer-simple",
            isActive: false,
          },
          {
            title: "Common",
            url: "#footer-common",
            isActive: false,
          },
          {
            title: "Center Links",
            url: "#footer-centerLinks",
            isActive: false,
          },
          {
            title: "Only Social Links",
            url: "#footer-onlySocialLinks",
            isActive: false,
          },
          
        ],
      }
    ],
  };