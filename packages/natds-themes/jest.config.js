const base = require('../../jest.base.config');
const { displayName, name } = require('./package.json');

module.exports = {
  ...base,
  coveragePathIgnorePatterns: [
    ...base.coveragePathIgnorePatterns,
    '<rootDir>/packages/natds-themes/react-native/index.js',
  ],
  displayName,
  name,
  rootDir: '../../',
  watchPathIgnorePatterns: [
    '__file_snapshots__',
  ],
};
