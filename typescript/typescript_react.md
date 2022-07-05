# Typescript or React

## tsconfig.json

[tsconfig documentation](https://www.typescriptlang.org/tsconfig#files)

## Generate new project

```bash
npx create-react-app <appname> --template typescript
```

## Executing

### With Node

Manually

```json
"scripts": {
  "build": "npx tsc",
  "start": "node dist/index.js",
  "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
}
```

With ts-node, will compile and execute it.

```
ts-node index.ts
```

### tsconfig.json

```
"outDir": "./dist",   
```

### A new typescript node project

- `npm init -y`
- Add this to package.json
  - .
  ```json
  "scripts": {
    "start": "nodemon index.ts"
  }
  ```
- Install depdendencies
  - `npm install -D nodemon typescript ts-node @types/node`
- Make file
  - `echo "console.log('running');" > index.ts`
- Done
  - `npm start`