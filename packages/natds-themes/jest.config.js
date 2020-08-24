const base = require('../../jest.base.config');
const { displayName, name } = require('./package.json');

module.exports = {
  ...base,
  collectCoverageFrom: [
    '<rootDir>/**/**/*.js',
    '!<rootDir>/**/**/babel.config.js',
    '!<rootDir>/**/build/**/*.js',
    '!<rootDir>/**/dist/**/*.js',
    '!<rootDir>/**/rollup.config.js',
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
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js',
  ],
  watchPathIgnorePatterns: [
    '__file_snapshots__',
  ],
};
