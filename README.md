Essentially, the purpose of this is to use only pointers for raylib structs, for use in FFI that only allows pointers, and not pass-by-value.

This explores a new direction for some ideas in [raylib-pointers](https://github.com/konsumer/raylib-pointers) and [raybun](https://github.com/konsumer/raybun).

```
# build poointer-only raylib
cmake -G Ninja -B build
cmake --build build

# test it in bunjs
bun ./test/test.js
```