Essentially, the purpose of this is to use only pointers for raylib structs, for use in FFI that only allows pointers, and not pass-by-value.

This explores a new direction for some ideas in [raybun](https://github.com/konsumer/raybun) and [raylib-pointers-ideas](https://github.com/konsumer/raylib-pointers-ideas).

```
# build pointer-only raylib
cmake -G Ninja -B build
cmake --build build

# test it in bunjs
bun test.js
```
