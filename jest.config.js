module.exports = {
  cacheDirectory: '.jest/cache',
  collectCoverageFrom: [
    '<rootDir>/packages/**/**/*.js',
    '!<rootDir>/packages/**/**/babel.config.js',
    '!<rootDir>/packages/**/build/**/*.js',
    '!<rootDir>/packages/**/dist/**/*.js',
    '!<rootDir>/packages/**/rollup.config.js'
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
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
