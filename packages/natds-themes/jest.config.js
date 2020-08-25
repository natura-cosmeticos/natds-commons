const base = require('../../jest.base.config');
const { displayName, name } = require('./package.json');

module.exports = {
  ...base,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/config/react-native/static/',
    '<rootDir>/config/web/static/',
    '<rootDir>/react-native/',
  ],
  displayName,
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
  name,
  rootDir: '.',
  setupFiles: ['core-js'],
  setupFilesAfterEnv: ['../../jest.setup.js'],
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js',
  ],
  watchPathIgnorePatterns: [
    '__file_snapshots__',
  ],
};
