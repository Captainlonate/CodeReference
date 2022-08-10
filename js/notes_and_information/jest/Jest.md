# Jest

[expect() matchers](https://jestjs.io/docs/expect#tomatchobjectobject)

[React-testing-library CheatSheet](https://testing-library.com/docs/react-testing-library/cheatsheet)

[jest-dom Custom Matchers](https://github.com/testing-library/jest-dom)

[List of accessibility roles](https://www.w3.org/TR/html-aria/#docconformance)

### Install

```bash
npm install --save-dev jest supertest
npx jest --init
```

__With NodeJS, Jest will not support ESModules (import/export) out of the box. No, not even if you set `"type": "module"` in package.json.__

What you have to do is:

1) Set `transform: {},` in jest.config.mjs
2) Execute jest with: `NODE_OPTIONS=--experimental-vm-modules npx jest`
3) In your test files, import jest with `import {jest} from '@jest/globals'`

But the bigger issue is that even with all this, [jest doesn't support some things](https://jestjs.io/docs/ecmascript-modules#differences-between-esm-and-commonjs), such as `jest.mock`. So, it seems with NodeJS, it's best to just use commonjs.

[Here](https://jestjs.io/docs/getting-started#using-typescript) are some notes about using Jest with TypeScript.

### Matchers


### react-testing-library

__Test a click. You can use `fireEvent`. The docs say that for complicated user interactions, use the `user-event` [library](https://testing-library.com/docs/user-event/intro).__

```js
import {render, fireEvent, screen} from '@testing-library/react'

test('laskfd', () => {
  render(<App />)
  const button = screen.getByRole('button', name: { 'Change to orange' })
  expect(button).toHaveStyle({ backgroundColor: 'green' })
  fireEvent.click(button)
  expect(button).toHaveStyle({ backgroundColor: 'orange' })
  expect(button.textContent).toBe('Change to green')
})
```

## RTL Syntax

`command [All] By QueryType`

_getAllByRole()_ or _getByAltText()_

__Commands__

- `get`: Expect the element to be in the DOM
- `query`: Expect the element NOT to be in the DOM
- `await find`: Expect elements to appear asynchronous

__QueryType__

- `Role`
- `AltText` (images, area, input)
- `Title`
- `TestId`
- `Text` (display elements)
- Form Elements
  - `PlaceholderText`
  - `LabelText`
  - `DisplayValue`