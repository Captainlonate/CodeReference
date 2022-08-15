# Typescript `any` vs `unknown` vs `never`

- `unknown`, can still use `if` statements to narrow it's type before using it, and assign values to unknown variables.
- `never`, cannot assign values to a never variable.
- `any`

## unknown

```ts
function unknown_type () {
  let userInputUnk: unknown;
  let userNameStr: string;

  // No error assigning stuff to unknown variables
  userInputUnk = 5;
  userInputUnk = 'Drew';

  // Cannot do this, even though userInput technically is
  // holding 'Drew' right now.
  // If userInput were `any`, it would work though.
  // userName = userInputUnk; // error

  // However, this will work
  if (typeof userInputUnk === 'string') {
    userNameStr = userInputUnk;
  }
}
```

## never

```ts
function never_type () {
  let userInputUnk: never;

  // Cannot assign values to it
  // userInputUnk = 5; // error
  // userInputUnk = 'Drew'; // error

  // A good use for never, since code will stop executing
  // at the throw line.
  function throw_error(message: string): never {
    throw { message }
  }
  try {
    throw_error('Serious Problem!')
  } catch (ex) {}

  // Another good use for never, is a loop that
  // will never end.
  function infinite_loop(): never {
    while (true) {

    }
  }
}
```