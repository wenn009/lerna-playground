module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 'warn',
  },
};
