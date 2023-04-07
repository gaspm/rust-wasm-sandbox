# Rust and WebAssembly Sandbox

### Demonstration of using WebAssembly.

### Install Rust and Cargo
- **Rust:** multi-paradigm, high-level, general-purpose programming language (https://www.rust-lang.org/)
- **Cargo:** the Rust build tool and package manager (https://crates.io/)

### Installation
https://doc.rust-lang.org/cargo/getting-started/installation.html

---

### Init Cargo.toml file
`cargo init --name rust_wasm_starter --lib`

### Add Wasm BindGen Dependency

`cargo add wasm-bindgen`

Facilitating high-level interactions between Wasm modules and JavaScript.

### Add wasm-pack
`cargo install wasm-pack`

### Add the following to your Cargo.toml file:
```toml
[lib]
crate-type = ["cdylib", "rlib"]
```

### src/lib.rs
```rust
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn add(a: usize, b: usize) -> usize {
    return a + b
}
```

### Build wasm-pack
`wasm-pack build --release --target web`

### npm package initialization

`npm init`

### Install http-server
`npm i http-server --save`

### Edit package.json and add the start script
```json
{
  "scripts": {
    "start": "http-server -a localhost -p 5200"
  }
}
```

### Create index.js
```javascript
import init from "./pkg/wasm_poc_sandbox.js";
import {add} from "../pkg/wasm_poc_sandbox.js";

function run() {
    console.log(add(5, 5));
}

init().then(run)
```

### Create index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Rust Wasm Starter</title>
    <script type="module" src="./index.js"></script>
</head>
<body>
    See the result in the console.
</body>
</html>
```

### Run Server with APP
`npm run start`

---
### Troubleshooting

#### Fix Error `linker ‘cc’ not found` on Linux
`sudo apt-get update`

`sudo apt install gcc cmake`

#### WSL Net Connection
`sudo nano /etc/resolv.conf`
with the change of the nameserver to `8.8.8.8` or `1.1.1.1`