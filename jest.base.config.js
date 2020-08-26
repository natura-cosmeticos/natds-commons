module.exports = {
  cacheDirectory: '.jest/cache',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/**/**/*.js',
    '!<rootDir>/**/**/.eslintrc.js',
    '!<rootDir>/**/**/*.config.js',
    '!<rootDir>/**/build/**/*.js',
    '!<rootDir>/**/coverage/lcov-report/*',
    '!<rootDir>/**/dist/**/*.js',
    '!/config/react-native/static/index.js',
    '!<rootDir>/packages/natds-themes/config/react-native/static/index.js',
    '!/config/web/static/index.js',
    '!<rootDir>/packages/natds-themes/config/web/static/index.js',
    '!<rootDir>/packages/natds-themes/react-native/index.js',
    '!<rootDir>/packages/natds-themes/config/**/static/index.js',
    '!/dist/**/*.js',
    '!/packages/natds-themes/dist/**/index.js',
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
