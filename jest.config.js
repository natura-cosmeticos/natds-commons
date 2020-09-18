module.exports = {
  cacheDirectory: '.jest/cache',
  collectCoverageFrom: [
    '<rootDir>/packages/natds-themes/**/*.js',
    '<rootDir>/packages/natds-tokens-search/**/*.js',
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
  projects: [
    '<rootDir>/packages/natds-themes/jest.config.js',
    '<rootDir>/packages/natds-token-search/jest.config.js',
  ],
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js',
  ],
  verbose: true,
};
