# Hashmap

* Collection that stores data as key-value pairs
  * Data is located using the "key"
  * The data is the "value"

## Use it

`use std::collections::HashMap`

## Basic Usage

_Make it mutable_

```rust
// mutable
let mut people = HashMap::new();
people.insert("Susan", 21);
people.insert("Ed", 13);
people.insert("Will", 14);
people.insert("Susan", 21);

people.remove("Susan");

match people.get("Ed") {
  Some(age) => println!("age = {:?}", age),
  None => println!("not found"),
}
```

## Iteration

_Data is stored in random order._

```rust
for (person, age) in people.iter() {

}

for person in people.keys() {

}

for age in people.values() {

}
```

## You can use structs too

_An example using a struct as the value_

```rust
use std::collections::HashMap;

#[derive(Debug)]
struct Contents {
  content: String
}

fn main() {
  let mut lockers = HashMap::new();
  lockers.insert(
    1001,
    Contents {
      content: "stuff".to_owned(),
    },
  );
  lockers.insert(
    2312,
    Contents {
      content: "shirt".to_owned(),
    },
  );
  lockers.insert(
    4456,
    Contents {
      content: "gym shorts".to_owned(),
    },
  );

  for (locker_number, content) in lockers.iter() {
    println!("Key: {:?}, val: {:?}", locker_number, content);
  }
}
```

## A complete example

_Using a hashmap to store stock items and quantities_

```rust
use std::collections::HashMap;

fn main() {
  let mut stock = HashMap::new();

  stock.insert("Chair", 5);
  stock.insert("Table", 2);
  stock.insert("Computer", 0);
  stock.insert("Bed", 3);

  // item_name and quantity are automatically borrowed...
  for (item_name, quantity) in stock.iter() {
    // ...therefor we must compare the borrowed quantity with &0
    let stock_string = if quantity == &0 {
      "Out of stock".to_owned()
    } else {
      format!("{}", quantity)
    };

    println!("Item '{}': {}", item_name, stock_string);
  }

}
```