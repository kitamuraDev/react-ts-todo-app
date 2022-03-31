module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    tsconfigRootDir: __dirname,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'simple-import-sort',
    'jsx-a11y',
  ],
  rules: {
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'func-style': ['error', 'expression'],
    'no-void': ['error', { allowAsStatement: true }],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    // jsx-a11y
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    // import
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-use-before-define': 'off', // react-scripts 4.0.3の環境下では'off'にしないと'import React from react'でエラーになる
    // @typescript-eslint
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '_',
        varsIgnorePattern: '_',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: ['typeAlias', 'typeParameter'], format: ['PascalCase'] },
      { selector: ['property', 'method'], format: ['camelCase'] },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['no', 'is', 'has', 'should'],
        filter: { regex: '^_', match: false },
      },
    ],
    // react
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
      },
    ],
  },

  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
