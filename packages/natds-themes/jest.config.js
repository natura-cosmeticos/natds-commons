const { displayName, name } = require('./package.json');

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/packages/natds-themes/**/*.js',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/packages/natds-themes/build/',
    '<rootDir>/packages/natds-themes/dist/',
    '<rootDir>/packages/natds-themes/.*(.config.js)',
    '<rootDir>/packages/natds-themes/react-native/',
    '<rootDir>/packages/natds-themes/.*/static/',
  ],
  displayName,
  name,
  rootDir: '../../',
  setupFilesAfterEnv: [
    '<rootDir>/packages/natds-themes/jest.setup.js',
  ],
  watchPathIgnorePatterns: [
    '__file_snapshots__',
  ],
};
