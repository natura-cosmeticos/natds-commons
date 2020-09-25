module.exports = {
  cacheDirectory: '<rootDir>/.jest/cache',
  collectCoverageFrom: [
    '<rootDir>/packages/natds-themes/*/**/*.js',
    '<rootDir>/packages/natds-token-search/*/**/*.js',
  ],
  coveragePathIgnorePatterns: [
    'build',
    'node_modules',
    'dist',
    'coverage',
    'static',
    'natds-themes/react-native',
    'natds-token-search/src/styles',
    'natds-token-search/src/index',
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
  testMatch: [
    '**/?(*.)+(spec|test).js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/examples/',
    '/coverage/',
    '\\.snap$',
    '/packages/.*/build',
    '/packages/.*/dist',
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
  watchPathIgnorePatterns: [
    '__file_snapshots__',
  ],
  verbose: true,
};
