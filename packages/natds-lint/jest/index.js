module.exports = {
  extends: [
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {},
  env: {
    'jest/globals': true,
  },
}
