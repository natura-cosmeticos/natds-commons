module.exports = {
  cacheDirectory: '.jest/cache',
  collectCoverageFrom: [
    '<rootDir>/**/**/*.js',
    '!<rootDir>/**/**/babel.config.js',
    '!<rootDir>/**/build/**/*.js',
    '!<rootDir>/**/dist/**/*.js',
    '!<rootDir>/**/jest.config.js',
    '!<rootDir>/**/rollup.config.js',
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
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  verbose: true,
};
