# Typescript + React

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