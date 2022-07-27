# Jest

[expect() matchers](https://jestjs.io/docs/expect#tomatchobjectobject)

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

