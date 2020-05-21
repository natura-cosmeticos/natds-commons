module.exports = {
  cacheDirectory: '.jest/cache',
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 55,
      functions: 70,
      lines: 75,
      statements: 75,
    },
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'node',
  ],
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js',
  ],
};
