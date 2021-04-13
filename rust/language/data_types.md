# Data Types

Variables are immutable by default.

Rust has four primary scalar types: integers, floating-point numbers, Booleans, and characters.

### Integer
_Signed integers start with 'i', otherwise unsigned 'u'_

_Integers default to signed i32_
```rust
let two: i32 = 2;
let two = 2;
```

### Boolean
```rust
let t = true;
let f: bool = false;
```

### Float
_Floats default to f64_
```rust
let half: f32 = 0.5;
let half = 0.5;
```

### Char
_Characters are 4 bytes_
```rust
let c = 'C';
```

### Compound Type: Tuple
```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);
let tup2 = (500, 6.4, 1); // shorthand

let (x, y, z) = tup; // destructuring
let one = tup.2; // access with dot notation
```

### Compound Type: Array
```rust
let a = [1, 2, 3, 4, 5];
let b: [i32; 5] = [1, 2, 3, 4, 5];
let c = [3; 5]; // fills array with 3: [3, 3, 3, 3, 3]

let d: i32 = b[0];
```

### Constants
_Constants can be declared in any scope, including the global scope_

_The type of data must be annotated_
```rust
const MAX_POINTS: u32 = 100_000;
```
