module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['./**/*.{ts,tsx}'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/member-delimiter-style': [1, {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
    '@typescript-eslint/no-unused-vars': ['warn', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
      varsIgnorePattern: '^React$|^_$',
    }],
    curly: [1, 'all'],
    'brace-style': [1, '1tbs', { allowSingleLine: true }],
    'import/extensions': 'off',
    'no-mixed-operators': 'off',
    'react/jsx-uses-react': [1],
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-fragments': 'off',
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'react/sort-comp': [1, {
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        'everything-else',
        'render',
      ],
    }],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    ],
    'import/prefer-default-export': 0,
    'import/order': 0,
  },
};
