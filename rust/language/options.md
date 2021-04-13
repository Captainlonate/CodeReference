# Options

## Check if an option has value or not

`my_option.is_some()`, `my_options.is_none()`

## Example: Returning options from functions to lookup item in vectors.

```rust
struct GroceryItem {
  name: String,
  price: f64
}

fn get_price (items: &Vec<GroceryItem>, name: &str) -> Option<f64> {
  for item in items {
    if item.name == name {
      return Some(item.price);
    }
  }

  return None
}

const EXPENSIVE_PRICE: f64 = 5.0;

fn main() {
  let items: Vec<GroceryItem> = vec![
    GroceryItem { name: "Apples".to_owned(), price: 3.99 },
    GroceryItem { name: "Bananas".to_owned(), price: 3.75 },
    GroceryItem { name: "Magazine".to_owned(), price: 6.50 },
  ];

  println!("Magazine price: {:?}", get_price(&items, "Magazine"));
  println!("Bananas price: {:?}", get_price(&items, "Bananas"));
  println!("Toilet Paper price: {:?}", get_price(&items, "Toilet Paper"));

  let magazine_price = get_price(&items, "Magazine");
  if magazine_price.is_some() {
    if magazine_price.unwrap() > EXPENSIVE_PRICE {
      println!("Very expensive!");
    } else {
      println!("Cheap!");
    }
  } else {
    println!("Product couldn't be found!")
  }
}
```