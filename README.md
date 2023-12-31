The idea here is that this is raylib, but all structs are pointers, and all struct-returns are moved to the first paramater of the function.

Currently, this is a minimal POC.

This is similar to what emscripten does, and should help with lower-to-the-ground wasm, but also make it easier to bind in bun (and more) which works better with pointers.

```
# install deps
npm i

# test out the code-generation
npm run generate

# full build of everything except wasm demo
npm run build

# build wasm that expects raylib-poinbters to be exposed in host
npm run build:wasm1

# load wasm1 in a node host and call InitGame/UpdateGame to make sure it's calling all the functions in your code
node src/test-wasm.js
```

You can see what I am trying to do in `src/test.c`, and similar will be implemented for other targets, like `src/test-bun.js`


The eventual goal is a pointer-based interface that will work on these targets:

- wasm1 - Wasm code - your code (written in something compiled to wasm) will import pointer-based functions from (native or web) host.
- wasm2 - Wasm runtime - a host (written in JS) will direclty call pointer-based raylib functions from wasm, which will call back into the wasm-host and use browser functions. The purpose of this is JS code written in browser that can call raylib functions.
- Bun FFI - Bun will import the DLL and call the functions in JS code.


### todo

This is not a perfect 1-to-1 mapping of regular C raylib, and a few things are still a WIP.

- names have `rp_` prefix (defined in generator) to prevent clashes. This may eventually be removed if the native raylib is not loaded (no `RP_NATIVE`.) There is probly some better C-way to do this with defines, so when `RP_NATIVE` is not defined, it will use the no-prefix names.
- vargs are not really supported in a lot of places (like over wasm boundary) so functions that use them might not work the same. `TraceLog` is a good example, and `TextFormat`. It is recommended to use the C-side WASI equivilants (`printf`, etc) if possible.
- I am still working on the wasm-build. It currently imports `malloc` which I think should be internal (and exported to host, instead.)
- I should make some sort of JS-side wrapper for arrays like `new FloatArray(32)`
- Fixed-length strings (`char[32]`) are considered arrays of uint8's. I need to make it so, for example, bun sees them as cstrings.
- I should update [raylib-wasm](https://github.com/konsumer/raylib-wasm) to use wasm2, once I figure it all out. I think it will be like emscripten-compile something like native, so it's essentially raylib with pointers on the JS-side, then add some nice helpers to work with that.