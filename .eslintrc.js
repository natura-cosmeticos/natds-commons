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
  "ignorePatterns": [".eslintrc.js"]
}
