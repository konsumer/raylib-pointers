// this will generate the bun FFI wrapper

import { writeFile } from 'fs/promises'
import { getAPI, blocklist } from './shared.js'

const { defines, structs, aliases, enums, callbacks, functions } = await getAPI()

const mapType = t => {
  if (t === 'bool') {
    return 'bool'
  }
  if (t === 'float') {
    return 'f32'
  }
  if (t === 'unsigned char') {
    return 'u8'
  }
  if (t === 'void *') {
    return 'ptr'
  }
  if (t === 'int') {
    return 'i32'
  }
  if (t === 'unsigned int') {
    return 'u32'
  }
  if (t.includes('[') || t.includes('*') || /[A-Z]/.test(t)) {
    return 'ptr'
  }
  return ''
}


let out = [`
// this uses bun FFI and provides an ergonomic interface for js

import { dlopen, FFIType, suffix, ptr } from 'bun:ffi'

`]

// TODO: Generate these
const structInfo = {
  "wrapped_alloc": {
    "args": [
      "u32"
    ],
    "returns": "ptr"
  },
  "wrapped_free": {
    "args": [
      "ptr"
    ],
    "returns": "void"
  },

  "DrawFPS": {
    "args": [
      "i32",
      "i32"
    ],
    "returns": "void"
  },
  "EndDrawing": {
    "args": [],
    "returns": "void"
  },
  "InitWindow": {
    "args": [
      "i32",
      "i32",
      "cstring"
    ],
    "returns": "void"
  },
  "SetTargetFPS": {
    "args": [
      "i32"
    ],
    "returns": "void"
  },
  "wrapped_Fade": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "ptr"
  },
  "wrapped_WindowShouldClose": {
    "args": [],
    "returns": "bool"
  },
  "BeginDrawing": {
    "args": [],
    "returns": "void"
  },
  "CloseWindow": {
    "args": [],
    "returns": "void"
  },
  "wrapped_ClearBackground": {
    "args": [
      "ptr"
    ],
    "returns": "void"
  },
  "wrapped_DrawText": {
    "args": [
      "cstring",
      "i32",
      "i32",
      "i32",
      "ptr"
    ],
    "returns": "void"
  },
}
const structWrappers = []

for (const {name, description, fields} of structs) {
  structInfo[`${name}_size`] = {
    "args": [],
    "returns": "u32"
  }

  structWrappers.push(`export class ${name} {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.${name}_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }
`)


  for (const field of fields) {
    const ret = mapType(field.type)
    if (ret === 'ptr') {
      // TODO: nested structs are not worked out yet
      continue
    }
    structInfo[`${name}_get_${field.name}`] = {
      "args": ["ptr"],
      "returns":ret
    }
    structInfo[`${name}_set_${field.name}`] = {
      "args": ["ptr", ret],
      "returns": 'void'
    }
    structWrappers.push(`  get ${field.name}() {
    return symbols.${name}_get_${field.name}(this._addr)
  }`)
    structWrappers.push(`  set ${field.name}(v) {
    return symbols.${name}_set_${field.name}(this._addr, v)
  }`)
  }

  structWrappers.push('}')
}

out.push(`const ffi = ${JSON.stringify(structInfo, null, 2)}`)

out.push(`
const { symbols } = dlopen(\`build/librlptr.\${suffix}\`, ffi)

// convert a string into a pointer to a buffer
const cstr = s => ptr(Buffer.from((s || '\0')))

// this lets us auto-free on every frame
export const alloc = symbols.wrapped_alloc
export const free = symbols.wrapped_free
export const WindowShouldClose = symbols.wrapped_WindowShouldClose
`)

out.push(...structWrappers)

const colors = defines.filter(d => d.type === 'COLOR').map(c => {
  const m = [...c.value.matchAll(/\{ ([0-9]+), ([0-9]+), ([0-9]+), ([0-9]+) \}/g)]
  return `export const ${c.name} = new Color({r: ${m[0][1]}, g: ${m[0][2]}, b: ${m[0][3]}, a: ${m[0][4]}}) // ${c.description}`
})

out.push(...colors)

// TODO: handle all the function-exports. this is just hardcodded for demo
out.push(`
// these don't need any wrapping
export const { CloseWindow, BeginDrawing, EndDrawing, SetTargetFPS, DrawFPS } = symbols

// these need a little adjustment
export const ClearBackground = color => symbols.wrapped_ClearBackground(color._addr)

export const DrawText = (text, posX, posY, fontSize, color) => symbols.wrapped_DrawText(cstr(text), posX, posY, fontSize, color._addr)

export const InitWindow = (width, height, title) => symbols.InitWindow(width, height, cstr(title))

// this is example with pointer param/return
export const Fade = (color, alpha) => new Color({}, symbols.wrapped_Fade(color._addr, alpha))
`)


await writeFile('raylib.js', out.join('\n'))