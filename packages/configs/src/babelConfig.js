module.exports = api => {
  api.cache(true);
  return {
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      'babel-plugin-styled-components',
    ],
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            browsers: ['last 2 versions', 'safari >= 7', 'ie >= 11'],
            node: 'current',
          },
        },
      ],
    ],
  };
};
