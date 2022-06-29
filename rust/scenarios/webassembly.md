# Using Rust with Webassembly

Your goal is to create a WebAssembly module with rust, and load then execute it in a browser.

I found [this](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm) tutorial helpful.

[Here](https://rustwasm.github.io/docs/wasm-pack/quickstart.html) are the official Docs.

## Step 1 - wasm-pack

We need to install a rust package (a crate) called [wasm-pack](https://github.com/rustwasm/wasm-pack). Install it with cargo.

```bash
cargo install wasm-pack
```

__Notes__

- In the process of installing this, you're also getting the wasm-pack CLI.
  - So now, you can:
    - Generate a new wasm-pack project: `wasm-pack new hello-wasm`
    - Build your project: `wasm-pack build`
- Instead of the manual approach as we've done here, we could have used wasm-pack to scaffold out the project.

## Step 2 - Create your new project

This creates a new library in a subdirectory named `mazesolve-wasm` with everything you need to get going. In that folder will be your standard `/src/` directory and `Cargo.toml` file.

```bash
cargo new --lib mazesolve-wasm
```

- Cargo.toml is like node's package.json file. We'll use it to configure the build.
- It just generated `src/lib.rs` with some test code. Just delete everything inside that file.

## Step 3 - Write some starter code

Inside `src/lib.rs`, write:

```rust
use wasm_bindgen::prelude::*;

/// tells Rust that we want to call some externally
/// defined functions. The attribute says "wasm-bindgen
/// knows how to find these functions".
/// We're making it possible to invoke JS functions, within Rust.
#[wasm_bindgen]
extern {
    /// The (js) alert function takes one argument, a string named s
    pub fn alert(s: &str);
}

/// This attribute is not modifying an extern this time.
/// Instead, it's modifying a fn.
/// This mean, we want this (greet) Rust function to be
/// callable by JS.
/// These are the functions we're exposing to javascript.
#[wasm_bindgen]
pub fn greet(name: &str) {
    /// format! macro is used to concatenate strings, in this case.
    alert(&format!("Hello, {}!", name));
}
```

__Notes__

- `wasm-pack` uses `wasm-bindgen`, another tool, to provide a bridge between the types of JavaScript and Rust. It allows JavaScript to call a Rust API with a string, or a Rust function to catch a JavaScript exception.
- The bit inside the `#[ ]` is called an "attribute", and it modifies the next statement somehow.

## Step 4 - Compiling the code (configuration)

We need to configure the `Cargo.toml` file.

```toml
[package]
name = "mazesolve-wasm"
version = "0.1.0"
edition = "2021"
authors = ["Sarat <captainlonate@gmail.com>"]
description = "A starter project with wasm-pack"
license = "MIT/Apache-2.0"
repository = "https://github.com/captainlonate/mazesolve-wasm"

[lib]
crate-type = ["cdylib", "rlib"]

[dependencies]
wasm-bindgen = "0.2.63"
```

## Step 5 - Run the build command

Afterward, check the `/pkg/` directory to see a `mazesolve_wasm.js` file.

```bash
wasm-pack build --target web
```

__Notes__

This command:
- Compiles your Rust code to WebAssembly.
- Runs `wasm-bindgen` on that WebAssembly, generating a JavaScript file that wraps up that WebAssembly file into a module the browser can understand.
- Creates a `pkg/` directory and moves that JavaScript file and your WebAssembly code into it.
- Reads your Cargo.toml and produces an equivalent package.json.
- Copies your README.md (if you have one) into the package.

## Step 6 - Add the package to your web site

- Move the the `pkg/` directory into your project (you can rename it though)
- In your project, you simply:

```js
import init, { greet } from './webassembly/greet/mazesolve_wasm'

init()
  .then(() => {
    greet("WebAssembly")
  })
```

## Step 7 - xyzxyz

## Step 8 - xyzxyz