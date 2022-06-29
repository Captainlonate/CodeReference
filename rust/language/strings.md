# Strings

* Two commonly used types of strings
  * `String` - owned
  * `&str` - borrowed String slice
* Must use an owned `String` to store in a struct
* Use &str when passing to a function

## Automatically borrowed

_When creating strings in the usual way, they are automatically borrowed._
`let emp_name = "Nathan";`

## Passing to a function
__
```
fn print_it(data: &str) {
  println!("{:?}", data)
}

fn main() {
  // One way to create an owned string
  let owned_string = "owned string".to_owned();
  // Another way to create an owned string
  let another_owned = String::from("another");

  // Must pass strings to functions by reference
  print_it("a string slice"); // automatically borrowed
  print_it(&owned_string);
  print_it(&another_owned);
}
```

## Storing in a struct
_The following will NOT work._

_The reason it will not work is because the struct declared the string as borrowed. The struct is responsible for cleaning up the memory, but it cannot delete the string, because it does not own it. But, either does main()._

```
// Won't work
struct Employee {
  name: &str,
}

fn main() {
  let emp_name = "Nathan";
  // This will not work!
  let emp = Employee {
    name: emp_name
  };
}
```

_The following will work. main() owns the String, then moves it into the struct, who is now allowed to delete it later._
```
// Will work
struct Employee {
  name: String // an Owned string
}

fn main() {
  let emp_name = "Nathan".to_owned();
  let emp_name = String::from("Lough");
  let emp = Employee {
    name: emp_name
  };
  let emp2 = Employee {
    name: "Drew".to_owned()
  };
}
```

## Building a string

_To add a character to a string:_

```rust
for row in maze {
    let mut str = String::new();
    for col in row {
        // Use str.push() to add a char
        str.push(col);
    }
    println!("Str: {:?}", str)
}
```