# Data Types

Variables are immutable by default.

Rust has four primary scalar types: integers, floating-point numbers, Booleans, and characters.

### Integer
_Signed integers start with 'i', otherwise unsigned 'u'_

_Integers default to signed i32_
```
let two: i32 = 2;
let two = 2;
```

### Boolean
```
let t = true;
let f: bool = false;
```

### Float
_Floats default to f64_
```
let half: f32 = 0.5;
let half = 0.5;
```

### Char
_Characters are 4 bytes_
```
let c = 'C';
```

### String
__
```
let name = "Nathan";
```

### Compound Type: Tuple
```
let tup: (i32, f64, u8) = (500, 6.4, 1);
let tup2 = (500, 6.4, 1); // shorthand

let (x, y, z) = tup; // destructuring
let one = tup.2; // access with dot notation
```

### Compound Type: Array
```
let a = [1, 2, 3, 4, 5];
let b: [i32; 5] = [1, 2, 3, 4, 5];
let c = [3; 5]; // fills array with 3: [3, 3, 3, 3, 3]

let d: i32 = b[0];
```

### Constants
_Constants can be declared in any scope, including the global scope_

_The type of data must be annotated_
```
const MAX_POINTS: u32 = 100_000;
```

### Enums

_Each option in an enum is called a "variant"_
```
enum Direction {
  Up,
  Down,
  Right,
  Left
}

fn which_way(go: Direction) {
  match go {
    Direction::Up => "go up",
    Direction::Down => "go down",
    Direction::Right => "go right",
    Direction::Left => "go left",
  }
}
```

### Structs

_Each field in a struct must be populated_
```
struct ShippingBox {
  depth: i32,
  width: i32,
  height: i32,
}

let my_box = ShippingBox {
  depth: 3,
  width: 2,
  height: 5,
};

let tall = my_box.height;
```