const base = require('./jest.base.config');

module.exports = {
  ...base,
  projects: [
    '<rootDir>/packages/natds-themes',
    '<rootDir>/packages/natds-storybook-themes',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
