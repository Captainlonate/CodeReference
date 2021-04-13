# Ownership Memory Model

_Data is initially owned by the function where it is created_

_If the data is passed to a function, it is "moved"._

_When a function completes, memory it owns is "dropped"_

_By default, data is "moved" to new functions._

_You can let a function "borrow" memory by using the &_

_Note that this does not affect scalar values, like i32 (You can still do it though.)_

```rust
struct Book {
    pages: i32,
    rating: i32,
}

// This function will borrow the Book
fn display_pages(book: &Book) {
    println!("Pages: {:?}", book.pages);
}

// This function will borrow the Book
fn display_rating(book: &Book) {
    println!("Pages: {:?}", book.rating);
}

fn main() {
    let book = Book {
        pages: 1000,
        rating: 5,
    };
    // If we tried to "move" the book instead, it would not compile
    display_pages(&book);
    display_rating(&book);
}
```