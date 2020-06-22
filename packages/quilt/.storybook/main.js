module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-docs',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /stories\/.*\.(ts|tsx)$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    });
    return config;
  },
};
