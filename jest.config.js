module.exports = {
  cacheDirectory: '<rootDir>/.jest/cache',
  collectCoverageFrom: [
    '<rootDir>/packages/natds-themes/**/*.js',
    '<rootDir>/packages/natds-token-search/**/*.js',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: [
    'build',
    'node_modules',
    'dist',
    'coverage',
    'static',
    '/packages/.*.config.js',
    'natds-themes/react-native',
    'natds-token-search/src/styles',
    'natds-token-search/src/index',
  ],
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
    '/packages/.*/build',
    '/packages/.*/dist',
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  verbose: true,
  watchPathIgnorePatterns: [
    '__file_snapshots__',
  ],
};
