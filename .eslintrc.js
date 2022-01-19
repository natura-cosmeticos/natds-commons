const path = require("path");

module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "jest": true,
    "browser": true,
  },
  extends: [
    '@naturacosmeticos/eslint-config-natds/base',
    '@naturacosmeticos/eslint-config-natds/jest',
  ],
  "ignorePatterns": [
    ".eslintrc.js",
    "**/build/**",
    "**/dist/**",
    "**/node_modules/**",
    "packages/natds-token-search/tokens",
  ],
  "overrides": [
    {
      "files": ['./packages/natds-storybook-themes/src/**/*.{js,ts}'],
      rules: {
        "import/extensions": ["error", "ignorePackages", { ts: "never" }],
        "import/no-extraneous-dependencies": ["error", {
          devDependencies: true,
          packageDir: path.join(__dirname, 'packages', 'natds-storybook-themes'),
        },
        ],
      },
    },
    {
      files: ['./packages/natds-token-search/src/store/tokens.js'],
      rules: {
        "import/extensions": "off",
      },
    },
    {
      "files": ['./packages/natds-themes/**/*.js'],
      rules: {
        "import/no-extraneous-dependencies": ["error", {
          devDependencies: true,
          packageDir: path.join(__dirname, 'packages', 'natds-themes'),
        },
        ],
      },
    },
    {
      "files": ['./packages/natds-icons/**/*.js'],
      rules: {
        "import/extensions": "off",
        "import/no-extraneous-dependencies": ["error", {
          devDependencies: true,
          packageDir: path.join(__dirname, 'packages', 'natds-icons'),
        },
        ],
      },
    },
    {
      "files": ['./packages/natds-lint/**/*.js'],
      rules: {
        "import/extensions": "off",
        "import/no-extraneous-dependencies": ["error", {
          devDependencies: true,
          packageDir: path.join(__dirname, 'packages', 'natds-lint'),
        },
        ],
      },
    },
    {
      "files": [
        './packages/natds-token-search/src/**/*.js',
        './packages/natds-token-search/__tests__/testHelpers.js'
      ],
      rules: {
        "import/no-extraneous-dependencies": ["error", {
          devDependencies: true,
          packageDir: path.join(__dirname, 'packages', 'natds-token-search'),
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
    "import/no-extraneous-dependencies": ["error", {
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
