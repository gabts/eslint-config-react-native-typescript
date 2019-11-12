# 🕵️ eslint-config-react-native-typescript

> Extensible ESLint configuration for React Native projects written in TypeScript.

## ⭐ Features

- Recommended React, React Hooks and React Native rules in a single config!
- Non-intrusive rules, only yells at you for your own good!
- Nib any cyclic imports the the bud before they cause issues with import/export linting!
- Screen reader friendier apps thanks to linting common Accessibility issues!
- Plays nice together with [Prettier](https://github.com/prettier/prettier)!

## Installation

```sh
yarn add eslint-config-react-native-typescript
```

Extend the config in your `.eslintrc` file.

```json
{
  "extends": ["react-native-typescript"]
}
```

## Configuration

Simply override any rule by assigning new settings below the extends section in your `.eslintrc` file.

```json
{
  "extends": ["react-native-typescript"],
  "rules": {
    "no-console": 2
  }
}
```

## Dependencies

This configuration is the result of a combination of multiple other configurations and plugins. Please explore them further and feel free to extend any additional rules you might find as detailed above.

- [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
- [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native)
- [eslint-plugin-react-native-a11y](https://github.com/FormidableLabs/eslint-plugin-react-native-a11y)

## Changelog

Changes between versions are documented [here](./CHANGELOG).

## License

[MIT](./LICENSE).
