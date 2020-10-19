module.exports = {
  cacheDirectory: '<rootDir>/.jest/cache',
  collectCoverageFrom: [
    '<rootDir>/packages/natds-themes/**/*.js',
    '<rootDir>/packages/natds-token-search/**/*.js',
    '<rootDir>/packages/natds-icons/**/*.js',
    '!**/build/**',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/coverage/**',
    '!**/static/**',
    '!<rootDir>/packages/**/*.config.js',
    '!<rootDir>/packages/natds-themes/react-native/*.js',
    '!<rootDir>/packages/natds-token-search/src/styles/*.js',
    '!<rootDir>/packages/natds-token-search/src/index.js',
    '!<rootDir>/packages/natds-icons/regression/**',
    '!<rootDir>/packages/natds-icons/integration/**',
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
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/examples/',
    '/coverage/',
    '\\.snap$',
    '/packages/.*/build/.*',
    '/packages/.*/dist/.*',
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  verbose: true,
  watchPathIgnorePatterns: [
    '__file_snapshots__',
  ],
};
