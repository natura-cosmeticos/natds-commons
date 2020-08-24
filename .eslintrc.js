const path = require("path");

module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": ["@naturacosmeticos/natura"],
  "ignorePatterns": [
    ".eslintrc.js",
    "**/build/**",
    "**/dist/**",
    "**/node_modules/**",
    "packages/natds-themes/react-native"
  ],
  "overrides": [
    {
      "files": ['./packages/natds-themes/**/*.test.js'],
      "rules": {
        'max-lines-per-function': "off",
        'max-statements': "off"
      },
    },
    {
      "files": ['./packages/natds-storybook-themes/src/**/*.{js,ts}'],
      rules: {
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            ts: "never"
          }
        ],
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
            packageDir: path.join(__dirname, 'packages', 'natds-storybook-themes'),
          },
        ],
      },
    },
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "rules": {
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true,
        "packageDir": __dirname,
      },
    ],
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".ts"],
        "paths": ["packages/"]
      }
    }
  },
}
