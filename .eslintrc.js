const path = require("path");

module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": ["@naturacosmeticos/natura"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".ts"],
        "paths": ["packages/"]
      }
    }
  },
  "ignorePatterns": [
    ".eslintrc.js",
    "**/build/**",
    "**/dist/**",
  ],
  "rules": {
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true,
        "packageDir": __dirname,
      },
    ],
  },
  "overrides": [
    {
      "files": ['./packages/natds-themes/**/*.test.js'],
      "rules": {
        'max-lines-per-function': "off",
        'max-statements': "off"
      },
    },
    {
      "files": ['./packages/natds-storybook-themes/**/*.js'],
      "rules": {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
          },
        ],
      }
    },
    {
      "files": ['./packages/natds-storybook-themes/src/**/*.ts'],
      "rules": {
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
            packageDir: path.join(__dirname, 'packages', 'natds-storybook-themes'),
          },
        ],
      }
    }
  ]
}

