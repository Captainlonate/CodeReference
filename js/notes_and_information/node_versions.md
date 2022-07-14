## Node Versions

_Most javascript features are actually the result of upgrading V8 engine. So, if you're looking for a specific feature, it's best to find the Node version (even minor version), that introduces the V8 version that supports the javascript syntax._

### nvm

```bash
nvm ls-remote --lts
# Use the latest version of a major, don't add minor version
# Will go straight to 14.20
nvm install 14
# Print out which V8 version your current nodejs version is using
node -p process.versions.v8
```
### 12 (latest 12.22.12 'Erbium')

- V8 Engine, version 7.8
- npm 6.14.16

### 14 (latest 14.20 'Fermium')

https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V14.md

- V8 Engine, version 8.4
- npm 6.14.17 (npm version doesn't seem to have changed much since 12)
- Nullish coalescing operator ??
- Optional Chaining ?.
- Some stuff on Intl.
- Some updates to Streams
- crypto.randomUUID
- 14.8, top level await IF YOU USE ES MODULES (.mjs, package.json type: "module")

### 16 (latest 16.16 'Gallium')

https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V16.md#16.0.0

- V8 Engine, version 9.4
- npm v8.11
- New format for package-lock.json
- Timers that return promises rather than take callbacks, so you can use await setTimeout(5000)
- Regex Match indices
- Array.prototype.at
- Object.hasOwn