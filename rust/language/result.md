# Result Type

* A data type that contains one of two types of data:
  * "Successful" data
  * "Error" data
* Used in scenarios where an action needs to be taken, but has the possibility of failure
  * Copying a file
  * Connecting to a website

```rust
enum Result<T, E> {
  Ok(T),
  Err(E)
}
```

##

_Here is an example of using the ? operator to avoid a match expression to check for Err of the Result. The ? operator can extract the value from the Result's Ok(), or, immediately return the Err_

```rust
#[derive(Debug)]
enum MenuChoice {
  MainMenu,
  Start,
  Quit,
}

fn get_choice(input: &str) -> Result<MenuChoice, String> {
  match input {
    "mainmenu" => Ok(MenuChoice::MainMenu),
    "startmenu" => Ok(MenuChoice::Start),
    "quitmenu" => Ok(MenuChoice::Quit),
    _ => Err("Menu choice not found.".to_owned())
  }
}

fn print_choice(choice: &MenuChoice) {
  println!("choice = {:?}", choice);
}

// () represents the "unit type", which means "nothing"
fn pick_choice(input: &str) -> Result<(), String> {
  // The '?' will automatically return the Err from get_choice, if one is returned
  // Otherwise, it evaluates to the value within the Ok() of the result
  let choice: MenuChoice = get_choice(input)?;
  // Code can only continue if the above line did NOT return an Err
  print_choice(&choice);
  Ok(())
}

fn main() {
  // choice will always be a Result (Ok(()) or Err)
  let choice = pick_choice("mainmenu");
  println!("result = {:?}", choice);
}
```