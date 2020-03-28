module.exports = {
  extends: [
    "eslint:recommended",
    "@react-native-community/eslint-config",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-native-a11y/recommended",
    "prettier",
    "prettier/react"
  ],

  plugins: ["import", "import-order-alphabetical", "react-native-a11y"],

  rules: {
    // eslint-plugin-import
    "import/first": 1,
    "import/newline-after-import": 1,
    "import/no-cycle": 2,
    "import/no-duplicates": 1,
    "import/no-unresolved": 2,

    // eslint-plugin-import-order-alphabetical
    "import-order-alphabetical/order": 1
  },

  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint"
      ],
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint/eslint-plugin"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": [
          1,
          { allowExpressions: true, allowTypedFunctionExpressions: true }
        ],
        "@typescript-eslint/no-empty-interface": 1,
        "@typescript-eslint/no-unused-vars": [2, { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-use-before-define": 0,
        "no-unused-vars": 0
      }
    }
  ]
};
