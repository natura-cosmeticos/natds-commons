module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": ["@naturacosmeticos/natura"],
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "settings": {
    "import/resolver": {
      "node": {
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
    }
  ]
}

