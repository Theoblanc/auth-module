module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["prettier"],
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  extends: [
    "airbnb-typescript/base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "@typescript-eslint/interface-name-prefix": 0,
    "no-await-in-loop": "off",
  },
};
