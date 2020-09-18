const { displayName, name } = require('./package.json');

module.exports = {
  collectCoverageFrom: [
    './**/*.js',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    './build/',
    './coverage/',
    './dist/',
    './.*(.config.js)',
    './react-native/',
    './.*/static/',
  ],
  displayName,
  name,
  rootDir: '.',
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
  watchPathIgnorePatterns: [
    '__file_snapshots__',
  ],
};
