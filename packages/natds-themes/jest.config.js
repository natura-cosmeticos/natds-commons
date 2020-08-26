const base = require('../../jest.base.config');
const { displayName, name } = require('./package.json');

const ignorePatterns = [
  '/node_modules/',
  '/config/react-native/static/',
  '/config/web/static/',
  '/react-native/',
];

module.exports = {
  ...base,
  coveragePathIgnorePatterns: ignorePatterns,
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
  testPathIgnorePatterns: ignorePatterns,
  watchPathIgnorePatterns: [
    '__file_snapshots__',
  ],
};
