# Rust and WebAssembly PoC Sandbox
Demonstration of using WebAssembly.

### Install Rust and Cargo
- Rust is a multi-paradigm, high-level, general-purpose programming language. (https://www.rust-lang.org/)
- Cargo: the Rust build tool and package manager

### Installation
https://doc.rust-lang.org/cargo/getting-started/installation.html

#### Windows Subsystem for Linux
`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

---

### Init Cargo.toml file
`cargo init --name wasm_poc_sandbox --lib`

### Add Wasm BindGen Dependency

`cargo add wasm-bindgen`

Facilitating high-level interactions between Wasm modules and JavaScript.

### Add wasm-pack
`cargo install wasm-pack`

### Add the following to your Cargo.toml file:
```
[lib]
crate-type = ["cdylib", "rlib"]
```

### src/lib.rs
```
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn add(a: usize, b: usize) -> usize {
    return a + b
}
```

### Build wasm-pack
`wasm-pack build`

### npm package initialization

`npm init`

### Install http-server
`npm i http-server --save`

### Edit package.json add start script
```
"scripts": {
  "start": "http-server -a localhost -p 4200"
}
```

---
### Troubleshooting

#### Fix Rust Error “linker ‘cc’ not found” on Linux
`sudo apt-get update`

`sudo apt install gcc cmake`

#### WSL INTERNET Connection
`sudo nano /etc/resolv.conf`
with the change of the nameserver to **8.8.8.8** or **1.1.1.1**