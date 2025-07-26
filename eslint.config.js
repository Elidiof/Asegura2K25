import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'node:path';

const compat = new FlatCompat({
  baseDirectory: path.resolve(),
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.config({
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/recommended',
      'plugin:react-hooks/recommended',
      'plugin:tailwindcss/recommended',
      'prettier',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: { extensions: ['.js', '.jsx'] },
      },
    },
    plugins: ['react', 'react-hooks', 'import', 'jsx-a11y', 'tailwindcss', 'unused-imports'],
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  }),
];
