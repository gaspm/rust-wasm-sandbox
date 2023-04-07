import init from "./pkg/wasm_poc_sandbox.js";
import {add} from '../pkg/wasm_poc_sandbox.js';

function run() {
    console.log(add(5, 5));
}

init().then(run)