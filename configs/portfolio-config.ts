export type PortfolioProject = {
  key: string;
  name: string;
  year: number;
  placeholders: number;
};

export type PortfolioSection = {
  key: string;
  label: string;
  projects: PortfolioProject[];
};

export const portfolioConfig: PortfolioSection[] = [
  {
    key: "product",
    label: "Product",
    projects: [
      { key: "kleisa", name: "Kleisa", year: 2028, placeholders: 4 },
      { key: "sophia-js", name: "Sophia.js", year: 2027, placeholders: 3 },
      {
        key: "lofty-charts",
        name: "Lofty Charts",
        year: 2026,
        placeholders: 1,
      },
      {
        key: "elegant-icons",
        name: "Elegant Icons",
        year: 2026,
        placeholders: 1,
      },
      { key: "omelia-ui", name: "Omelia UI", year: 2025, placeholders: 2 },
    ],
  },
  {
    key: "branding",
    label: "Branding",
    projects: [
      {
        key: "omorfia-font",
        name: "Omorfia Font",
        year: 2028,
        placeholders: 3,
      },
    ],
  },
];
