/// <reference types="svelte" />

// Fixes error: "Cannot find module ../../rust/Cargo.toml or its corresponding type declarations"
// Source: https://github.com/rustwasm/wasm-bindgen/issues/182#issuecomment-487928242
declare module "*.toml" {
  const value: typeof import('../rust');
  export default value;
}