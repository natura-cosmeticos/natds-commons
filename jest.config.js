const base = require('./jest.base.config');

module.exports = {
  ...base,
  cacheDirectory: '.jest/cache',
  projects: [
    '<rootDir>/packages/natds-themes',
    '<rootDir>/packages/natds-storybook-themes',
  ],
};
