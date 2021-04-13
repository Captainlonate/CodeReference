# Enums

_Each option in an enum is called a "variant"_

## Basic Usage

```rust
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

_Enum variants can have data types and data associated with them._
```rust
enum PromoDiscount {
  NewUser,
  Holiday(String),
}

enum Discount {
  Percent(f64),
  Flat(i32),
  Promo(PromoDiscount),
}

fn main() {
  let discount = Discount::Percent(2.5);

  match discount {
    Discount::Flat(5) => println!("Flat Discount of exactly 5 dollars"),
    Discount::Flat(_) => println!("All other flat discounts"),
    Discount::Percent(other) => println!("Percent Discount {:?}", other),
    _ => ()
  };
}
```