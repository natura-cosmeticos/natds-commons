const base = require('../../jest.base.config');
const { displayName, name } = require('./package.json');

module.exports = {
  ...base,
  collectCoverageFrom: [
    ...base.collectCoverageFrom,
    '!<rootDir>/config/**/static/index.js',
    '!<rootDir>/dist/**/*.js',
    '!<rootDir>/react-native/*.js',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/config/react-native/static/',
    '/config/web/static/',
    '/react-native/',
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
