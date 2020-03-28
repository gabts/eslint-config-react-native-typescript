# 🕵️ eslint-config-react-native-typescript

ESLint configuration for React Native projects written in TypeScript.

## ⭐ Features

- Based on [@react-native-community/eslint-config](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community) but with extended ruleset.
- Leaves formatting to Prettier with [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).
- Checks for cyclic imports/exports with [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import).
- Enforces consistent import order with [eslint-plugin-import-order-alphabetical](https://github.com/janpaul123/eslint-plugin-import-order-alphabetical).
- Ensures accessible applications with [eslint-plugin-react-native-a11y](https://github.com/FormidableLabs/eslint-plugin-react-native-a11y).

## 🔩 Installation

```sh
yarn add eslint-config-react-native-typescript
```

Extend the config in your `.eslintrc` file.

```json
{
  "extends": "react-native-typescript"
}
```

## 🧙 Configuration

Simply override any rule by assigning new settings below the extends section in your `.eslintrc` file.

```json
{
  "extends": "react-native-typescript",
  "rules": {
    "no-console": 2
  }
}
```

## 🧶 Dependencies

Your project needs ESLint and TypeScript installed for this config to work correctly.

```sh
yarn add typescript eslint
```

## 📝 Changelog

Changes between versions are documented [here](./CHANGELOG.md).

## 📜 License

[MIT](./LICENSE)
