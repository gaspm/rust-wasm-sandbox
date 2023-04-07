import init from "./pkg/rust_wasm_starter.js";
import {add} from "../pkg/rust_wasm_starter.js";

function run() {
    console.log(add(5, 5));
}

init().then(run)