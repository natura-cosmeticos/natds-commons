const { displayName, name } = require('./package.json');

module.exports = {
  collectCoverageFrom: [
    './**/*.js',
  ],
  coveragePathIgnorePatterns: [
    './node_modules/',
    './coverage/',
    './.*(.config.js)',
    './dist/',
    './.cache',
  ],
  displayName,
  name,
  rootDir: '.',
  transform: {
    '\\.js$': ['babel-jest', { cwd: __dirname }],
  },
};
