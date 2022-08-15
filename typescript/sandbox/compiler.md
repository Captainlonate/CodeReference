# Typescript compiler

## Install

__First install `typescript`__

```bash
npm install --save typescript
```

__Now init the project with a `tsconfig.json`__

```bash
npx tsc --init
```

## tsc

```bash
# Compile code - One file, one time
# This will not actually run your code. It will just
# compile it into a ./sandbox.js file, one time.
npx tsc ./sandbox.ts

# Watch Mode - Recompile on save
# This will not actually run your code. It will just
# compile it into a ./sandbox.js file.
npx tsc -w ./sandbox.ts

# Compile multiple files
# The project needs to be initialized with `npx tsc --init`, first.
# If you have two .ts files, you will get two .js files.
# It will look in subdirectories automatically by default.
npx tsc
npx tsc -w 
```

## [tsconfig.json](https://www.typescriptlang.org/tsconfig#lib)

```json
{
  // When you run `npx tsc`, do not compile these files.
  // If you don't specify "exclude": at all, then "node_modules"
  // is excluded by default.
  // What happens if you combine with "include"?
  // They work together. "exclude" will filter down "include".
  // Like, "include" a folder, but "exclude" some subfolder of it.
  "exclude": [
    "*.dev.ts",
    // Any file, in any folder, with this extension
    "**/*.sandbox.ts",
    "node_modules"
  ],
  // The opposite of "exclude": [].
  // This is a white-list. List it, or it won't be compiled.
  "include": [
    "main.ts"
  ],
  //
  "compilerOptions": {
    // typescript also compiles your ts into older js (like babel)
    // If you target ES2019, it will transpile `??` for older environments.
    // If you target ES2020, it will NOT transpile `??`.
    "target": "ES2019",
    // This is what allows typescript to know about (not error out) global
    //  objects and types such as `Math`, `document`, `console`, and `Map`.
    // Leave it commented and it uses defaults.
    "lib": [],
    // Specify the folder for the generated .js files.
    // It will create the folder if it does not exist.
    // The folder structure will be replicated as well.
    "outDir": "./dist",
    // If commented out, the rootmost directory where a .ts file is found,
    //  will become the root directory in the generated output folder.
    // So, if you have ./file.ts and ./src/other.ts, then your ./dist will
    //  have ./dist/file.js and ./dist/src/other.js.
    // Typescript will complain if you have .ts files in ./, but rootDir is ./src
    "rootDir": "./src",
    // Removes comments in the generated .js files. By default you WILL
    // have comments in your .js files.
    "removeComments": true,
    // Check if the files are correct, but don't actually write any .js files.
    "noEmit": true,
    // If true: If you have a typescript error in your code, and you run `tsc`,
    // then it will NOT generate any .js files.
    // Default is false.
    "noEmitOnError": true,
    // Quick note about "strict": true,
    // It's like saying, "default everything to strict, unless I specifically
    //  choose otherwise on a per-case basis."
    "strict": true
  }
}
```