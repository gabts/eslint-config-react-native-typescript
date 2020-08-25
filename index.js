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
    // eslint
    "sort-keys": [1, "asc", { caseSensitive: false, natural: true }],

    // eslint-plugin-import
    "import/first": 1,
    "import/newline-after-import": 1,
    "import/no-cycle": 2,
    "import/no-duplicates": 1,
    "import/no-unresolved": 2,

    // eslint-plugin-import-order-alphabetical
    "import-order-alphabetical/order": 1,

    // eslint-plugin-react
    "react/prop-types": 0,

    // eslint-plugin-react-native
    "react-native/no-color-literals": 1,
    "react-native/no-inline-styles": 1,
    "react-native/no-single-element-style-arrays": 1,
    "react-native/no-unused-styles": 1
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
      plugins: ["@typescript-eslint/eslint-plugin", "typescript-sort-keys"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": [
          1,
          { allowExpressions: true, allowTypedFunctionExpressions: true }
        ],
        "@typescript-eslint/no-empty-interface": 1,
        "@typescript-eslint/no-unused-vars": [1, { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-use-before-define": 0,
        "no-unused-vars": 0,
        "typescript-sort-keys/interface": [
          2,
          "asc",
          { caseSensitive: false, natural: true }
        ],
        "typescript-sort-keys/string-enum": [
          2,
          "asc",
          { caseSensitive: false, natural: true }
        ]
      }
    }
  ]
};
