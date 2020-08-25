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
  collectCoverageFrom: [
    ...base.collectCoverageFrom,
    '!<rootDir>/config/react-native/static/index.js',
    '!<rootDir>/packages/natds-themes/config/react-native/static/index.js',
    '!<rootDir>/config/web/static/index.js',
    '!<rootDir>/packages/natds-themes/config/web/static/index.js',
    '!<rootDir>/react-native/index.js',
    '!<rootDir>/packages/natds-themes/react-native/index.js',
    '!<rootDir>/config/**/static/index.js',
    '!<rootDir>/packages/natds-themes/config/**/static/index.js',
    '!<rootDir>/dist/**/*.js',
    '!<rootDir>/packages/natds-themes/dist/**/index.js',
  ],
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
  testPatchIgnorePatterns: ignorePatterns,
  watchPathIgnorePatterns: [
    '__file_snapshots__',
  ],
};
