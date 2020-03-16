module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": [
      "airbnb",
      "prettier",
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "@typescript-eslint",
      "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
        1, { "extensions": [".js", ".jsx", ".ts", ".tsx"]}
    ],
    "import/prefer-default-export": 0,
    "react/prop-types": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
}