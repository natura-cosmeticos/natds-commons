module.exports = {
  extends: [
    './rules/react-hooks.js',
    './rules/react',
  ].map(require.resolve),
  rules: {},
}
