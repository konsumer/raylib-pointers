// this uses bun FFI and provides an ergonomic interface for js

import { dlopen, FFIType, suffix, ptr } from 'bun:ffi'

// this is sort of from https://raw.githubusercontent.com/konsumer/raybun/main/raylib/ffi.json
// and provides basic "export as-is" stuff, I also override some with _wrapped for pointer-based counterparts
import ffi from './ffi.json'

const { symbols } = dlopen(`build/librlptr.${suffix}`, ffi)

// convert a string into a pointer to a buffer
const cstr = s => ptr(Buffer.from((s || '\0')))

// these allow host to manage mem
// it also sets up WindowShouldClose to free anyting created in that frame
const frameAllocated = []
let running = false

export const alloc = size => {
  const p = symbols.wrapped_alloc(size)
  if (running) {
    frameAllocated.push(p)
  }
  return p
}

export const free = symbols.wrapped_free

export const WindowShouldClose = () => {
  running = true
  let p
  while (p = frameAllocated.pop()) {
    free(p)
  }
  return symbols.WindowShouldClose()
}

// this makes a struct-pointer act more like a plain js object
export class Color {
  constructor (init = { r: 0, g: 0, b: 0, a: 0 }, address) {
    // this could also be done with hard-coded sizes (to avoid Color_size)
    this._addr = address || alloc(symbols.Color_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get r () {
    return symbols.Color_get_r(this._addr)
  }

  set r (v) {
    symbols.Color_set_r(this._addr, v)
  }

  get g () {
    return symbols.Color_get_g(this._addr)
  }

  set g (v) {
    symbols.Color_set_g(this._addr, v)
  }

  get b () {
    return symbols.Color_get_b(this._addr)
  }

  set b (v) {
    symbols.Color_set_b(this._addr, v)
  }

  get a () {
    return symbols.Color_get_a(this._addr)
  }

  set a (v) {
    symbols.Color_set_a(this._addr, v)
  }

  free () {
    free(this._addr)
  }
}

export const LIGHTGRAY = new Color({ r: 200, g: 200, b: 200, a: 255 }) // Light Gray
export const GRAY = new Color({ r: 130, g: 130, b: 130, a: 255 }) // Gray
export const DARKGRAY = new Color({ r: 80, g: 80, b: 80, a: 255 }) // Dark Gray
export const YELLOW = new Color({ r: 253, g: 249, b: 0, a: 255 }) // Yellow
export const GOLD = new Color({ r: 255, g: 203, b: 0, a: 255 }) // Gold
export const ORANGE = new Color({ r: 255, g: 161, b: 0, a: 255 }) // Orange
export const PINK = new Color({ r: 255, g: 109, b: 194, a: 255 }) // Pink
export const RED = new Color({ r: 230, g: 41, b: 55, a: 255 }) // Red
export const MAROON = new Color({ r: 190, g: 33, b: 55, a: 255 }) // Maroon
export const GREEN = new Color({ r: 0, g: 228, b: 48, a: 255 }) // Green
export const LIME = new Color({ r: 0, g: 158, b: 47, a: 255 }) // Lime
export const DARKGREEN = new Color({ r: 0, g: 117, b: 44, a: 255 }) // Dark Green
export const SKYBLUE = new Color({ r: 102, g: 191, b: 255, a: 255 }) // Sky Blue
export const BLUE = new Color({ r: 0, g: 121, b: 241, a: 255 }) // Blue
export const DARKBLUE = new Color({ r: 0, g: 82, b: 172, a: 255 }) // Dark Blue
export const PURPLE = new Color({ r: 200, g: 122, b: 255, a: 255 }) // Purple
export const VIOLET = new Color({ r: 135, g: 60, b: 190, a: 255 }) // Violet
export const DARKPURPLE = new Color({ r: 112, g: 31, b: 126, a: 255 }) // Dark Purple
export const BEIGE = new Color({ r: 211, g: 176, b: 131, a: 255 }) // Beige
export const BROWN = new Color({ r: 127, g: 106, b: 79, a: 255 }) // Brown
export const DARKBROWN = new Color({ r: 76, g: 63, b: 47, a: 255 }) // Dark Brown
export const WHITE = new Color({ r: 255, g: 255, b: 255, a: 255 }) // White
export const BLACK = new Color({ r: 0, g: 0, b: 0, a: 255 }) // Black
export const BLANK = new Color({ r: 0, g: 0, b: 0, a: 0 }) // Blank (Transparent)
export const MAGENTA = new Color({ r: 255, g: 0, b: 255, a: 255 }) // Magenta
export const RAYWHITE = new Color({ r: 245, g: 245, b: 245, a: 255 }) // My own White (raylib logo)

// these don't need any wrapping
export const { CloseWindow, BeginDrawing, EndDrawing, SetTargetFPS, DrawFPS } = symbols

// these need a little adjustment
export const ClearBackground = color => symbols.wrapped_ClearBackground(color._addr)

export const DrawText = (text, posX, posY, fontSize, color) => symbols.wrapped_DrawText(cstr(text), posX, posY, fontSize, color._addr)

export const InitWindow = (width, height, title) => symbols.InitWindow(width, height, cstr(title))

// this is example with ret-first
export const Fade2 = (color, alpha) => {
  const ret = new Color()
  symbols.wrapped_Fade2(ret._addr, color._addr, alpha)
  return ret
}
