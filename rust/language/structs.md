# Structs

## Basic Usage

_Each field in a struct must be populated_
```rust
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

## impl

_Use an impl block to organize functionality related to a struct_

_Use &self to reference the struct on the left side of the ._

```rust
struct Temperature {
  degrees_f: f64
}

impl Temperature {
  fn freezing() -> Self {
    Self { degrees_f: 32.0 }
  }

  // Referencing self
  fn print_temp(&self) {
    println!("The temp is {:?}", self.degrees_f);
  }
}

fn main() {
  let freezing = Temperature::freezing();
  freezing.print_temp();
}
```

## Matching on a struct

_Use .. to ignore the other fields_

_Specify the value of a field to only match it_

```rust
struct Ticket {
  price: i32,
  event: String
}

fn main() {
  let concert = Ticket {
    price: 100,
    event: "Flogging Molly".to_owned()
  };

  match concert {
    Ticket {price: 50, event } => println!("A fifty dollar ticket for {:?}", event),
    Ticket {price, .. } => println!("The ticket cost {:?}", price),
  }
}
```