# Sundaes for Testing

## About

### App summary

1. Choose ice cream flavors and toppings and submit order.
2. Flavors and toppings come from server.
3. order is sent to server.

### Test

1. Test more complex user interaction (multiple form entry, moving through order phases, ...)
2. Test elements disappear from DOM
3. Simulate server response using mock-service-worker
4. Async app updates / awaitng DOM changes
5. Global state via context

## How this project was created

This project was created using this command:

```bash
yarn create vite sundae --template react-ts
```

and then following all of the steps below.

## Install Vitest, React Testing Library and React Bootstrap

```bash
yarn add -D vitest @vitest/ui eslint-plugin-vitest
yarn add -D jsdom @testing-library/jest-dom @testing-library/react eslint-plugin-jest-dom eslint-plugin-testing-library
yarn add bootstrap react-bootstrap
```

## Add Bootstrap

Add this line to `src/main.tsx` :

```ts
import 'bootstrap/dist/css/bootstrap.min.css';
```

## Update port to 3000

To match the expectation of the sundae server, and avoid CORS errors, add this to the property / value to the `defineConfig` argument in `vite.config.ts` :

```ts
server: {
  port: 3000,
  strictPort: true, // exit if port 3000 is in use
}
```

## Install future dependencies

For folks using this as a starter for adding React code, run these installs:

```bash
yarn add -D @testing-library/user-event msw
yarn add axios
```

### Add test script to package.json

```json
"test": "vitest --watch"
```

### Add a test setup file

To make [jest-dom matchers](https://github.com/testing-library/jest-dom#custom-matchers) available in all test files:

1. Create new file `src/setupTests.ts`
2. Add these contents.

```ts
import 'testing-library/jest-dom';
```

### Add Vitest and Testing Library plugins to ESLint

In `.eslintrc.cjs` :

Add these to the `extends` array:

```js
extends: [
  // ...
  'plugin:testing-library/react',
  'plugin:vitest/recommended',
]
```

This step avoids linting errors when using the `test()` and `expect()` Vitest globals without importing them first.

At the top, require the Vitest plugin:

```js
const vitest = require('eslint-plugin-vitest');
```

Then add this property / value to the top-level `module.exports` object:

```js
module.exports = {
  // ...
  global: {
    ...vitest.default.environments.env.globals,
  },
};
```

### Update a few ESLint rules

Add these to the `rules` object in `.eslintrc.cjs` :

```js
rules: {
  // ...
  'no-unused-vars': 'warn', // warning, not error
  'vitest/expect-expect': 'off', // eliminate distracting red squiggles while writing tests
}
```

### Add Automatic ESLint and Prettier formatting on save (skipped)

1. Install ESLint and Prettier extensions in VSCode if they're not already install.
2. Create `.vscode/settings.json` file.
3. Add these contents:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### Update vite configuration for tests

Add a reference to Vitest types using a [triple slach command](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) at the top of `vite.config.ts` file, if you are importing `defindConfig` from `vite` itself.

```js
/// <reference types="vitest" />
import { defineConfig } from 'vite';
```

Or using `defindConfig` from `vitest/config` you should follow this:

```js
import { defineConfig } from 'vitest/config';
```

Add this property / value to the `defineConfig` argument:

```js
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
    css: true,
  },
  // ...
});
```

### Command to run tests in watch mode

```bash
yarn test
```

## Reference

> Udemy course [React Testing Library with Jest / Vitest](https://www.udemy.com/course/react-testing-library/?couponCode=ST12MT030524)
