module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions/register",
  ],
  framework: "@storybook/react",
  core: {
    builder: "storybook-builder-vite",
  },
  features: {
    interactionsDebugger: true,
  },
  async viteFinal(config, { configType }) {
    config.optimizeDeps =
      configType === "PRODUCTION"
        ? config.optimizeDeps
        : {
            ...(config.optimizeDeps || {}),
            include: [...(config?.optimizeDeps?.include || []), "jest-mock"],
          };
    return config;
  },
};
