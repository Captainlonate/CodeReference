# Macros

## println!

_println! is an example of a macro, not a function_

```rust
let life = 42;
println!("{:?}", life);

// {:?} - Print in debugging mode (Might need to #[derive(Debug)])
```

## format!

_It's like println!, except it just stores it back into a string_

```rust
fn main() {
  let first_name = "Nathan";
  let last_name = "Drew";
  let full_name = format!("{}, {}", first_name, last_name);

  println!("Full: '{}'", full_name);
  println!("Full: '{:?}'", full_name);
}
```