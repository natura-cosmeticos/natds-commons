module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": ["@naturacosmeticos/natura"],
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["packages"]
      }
    }
  },
  "ignorePatterns": [".eslintrc.js"],
  "rules": {
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "packages/natds-themes/**/*"
        ]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "always"
      }
    ]
  },
  "overrides": [
    {
      "files": ['./packages/natds-themes/**/*'],
      "rules": {
        'import/no-extraneous-dependencies': [
          2,
          {
            "devDependencies": true,
            "packageDir": __dirname,
          },
        ],
      },
    }
  ]
}

