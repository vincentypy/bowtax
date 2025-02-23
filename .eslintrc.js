module.exports = {
  "parserOptions": {
    "target": 2020,
    "sourceType": "module"
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "jsx-a11y"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": [
      "off"
    ],
    "camelcase": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",

    "no-unused-vars": "off",
    "no-undef": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off"

  },
  "reportUnusedDisableDirectives": true
}
