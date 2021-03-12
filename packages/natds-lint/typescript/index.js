module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
      tsx: 'never',
    }],
  }
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx']
      }
    },
    'import/extensions': ['.ts', '.tsx'],
  },
}
