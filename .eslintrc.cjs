const vitest = require('eslint-plugin-vitest');

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:vitest/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'no-unused-vars': 'warn', // warning, not error
    'vitest/expect-expect': 'off', // eliminate distracting red squiggles while writing tests
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  global: {
    ...vitest.default.environments.env.globals,
  },
};
