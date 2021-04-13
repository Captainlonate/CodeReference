# Vectors

## basic usage

```rust
let my_numbers = vec![1, 2, 3];
let my_numbers: Vec<i32> = vec![1, 2, 3];

let mut my_numbers_2 = Vec::new();
my_numbers_2.push(1);
my_numbers_2.push(2);
my_numbers_2.push(3);

my_numbers_2.pop();

my_numbers_2.len(); // which is 2

let two = my_numbers[1];
```

## iterating through a vector

_Using for...in to iterate over a vector moves the vector. So use & in the loop if you need to access it later._
```rust
let my_numbers = vec![1, 2, 3];
for num in my_numbers {
  println!("{:?}", num);
}
// Cannot do my_numbers.len() here because my_numbers was moved.
```