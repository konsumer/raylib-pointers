// this will generate the bun FFI wrapper

import { writeFile } from 'fs/promises'
import api from './api.json'

const { defines, structs, aliases, enums, callbacks, unwrapped, wrapped, struct_utils } = api

// map the arg/return type to bun ffi syntax
const mapType = t => {
  if (t === 'void' || !t) {
    return 'void'
  }
  if (t === 'bool') {
    return 'bool'
  }
  if (t === 'float') {
    return 'f32'
  }
  if (t === 'unsigned char') {
    return 'u8'
  }
  if (t.includes('*')) {
    return 'ptr'
  }
  if (t === 'int') {
    return 'i32'
  }
  if (t === 'unsigned int') {
    return 'u32'
  }
  if (t.includes('[') || t.includes('*') || /^[A-Z]/.test(t)) {
    return 'ptr'
  }
  if (t === 'char') {
    return 'char'
  }
  if (t === 'double') {
    return 'double'
  }
  if (t === 'long') {
    return 'i32'
  }

  console.log('unhandled type', t)

  return ''
}

// convert api-info format to bun FFI-object
function processFunctionFFI (f) {
  const returns = mapType(f.returnType)
  const out = {
    args: f.params.map(p => mapType(p.type))
  }
  if (returns !== 'void') {
    out.returns = returns
  }
  return out
}

const rlVersion = defines.find(d => d.name === 'RAYLIB_VERSION').value

const out = [`// this uses bun FFI and provides an ergonomic interface for js
// Generated at ${new Date().toISOString()} for raylib ${rlVersion}

import { dlopen, FFIType, suffix, ptr } from 'bun:ffi'

`]

const ffiInfo = {}

const blocklist = [
  // variadic-params is not supported
  'TraceLog',
  'TextFormat'
]

// TODO: these structs have nested structs, which I have not worked out yet, C-side
const blocklistStructs = [
  'RenderTexture',
  'NPatchInfo',
  'GlyphInfo',
  'Font',
  'Camera3D',
  'Camera2D',
  'MaterialMap',
  'Material',
  'Transform',
  'BoneInfo',
  'Model',
  'ModelAnimation',
  'Ray',
  'RayCollision',
  'BoundingBox',
  'AudioStream',
  'Sound',
  'Music',
  'VrDeviceInfo',
  'VrStereoConfig',
  'AutomationEvent',
  'AutomationEventList'
]

for (const f of unwrapped) {
  if (blocklist.includes(f.name)) {
    continue
  }
  ffiInfo[f.name] = processFunctionFFI(f)
}

for (const f of wrapped) {
  if (blocklist.includes(f.name)) {
    continue
  }
  ffiInfo[f.name] = processFunctionFFI(f)
}

for (const f of struct_utils) {
  ffiInfo[f.name] = processFunctionFFI(f)
}

// remove any struct-utils for problem-structs
for (const n of Object.keys(ffiInfo)) {
  for (const t of blocklistStructs) {
    if (n === `${t}_size` || n.startsWith(`${t}_get`) || n.startsWith(`${t}_set`)) {
      delete ffiInfo[n]
    }
  }
}

out.push(`const ffi = ${JSON.stringify(ffiInfo, null, 2)}`)

out.push(`
const { symbols } = dlopen(\`build/librlptr.\${suffix}\`, ffi)

// convert a string into a pointer to a buffer
const cstr = s => ptr(Buffer.from((s || '\0')))

`)

// TODO: this is temporary until I get codegen for functions
out.push(`
export const alloc = symbols.wrapped_alloc
export const free = symbols.wrapped_free
export const WindowShouldClose = symbols.wrapped_WindowShouldClose

// these don't need any wrapping
export const { CloseWindow, BeginDrawing, EndDrawing, SetTargetFPS, DrawFPS } = symbols

// these need a little adjustment
export const ClearBackground = color => symbols.wrapped_ClearBackground(color._addr)

export const DrawText = (text, posX, posY, fontSize, color) => symbols.wrapped_DrawText(cstr(text), posX, posY, fontSize, color._addr)

export const InitWindow = (width, height, title) => symbols.InitWindow(width, height, cstr(title))

// this is example with pointer param/return
export const Fade = (color, alpha) => new Color({}, symbols.wrapped_Fade(color._addr, alpha))
`)

const structWrappers = []
for (const { name, description, fields } of structs) {
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
    structWrappers.push(`  get ${field.name}() {
    return symbols.${name}_get_${field.name}(this._addr)
  }`)
    structWrappers.push(`  set ${field.name}(v) {
    return symbols.${name}_set_${field.name}(this._addr, v)
  }`)
  }
  structWrappers.push('}')
}
out.push(...structWrappers)

const colors = defines.filter(d => d.type === 'COLOR').map(c => {
  const m = [...c.value.matchAll(/\{ ([0-9]+), ([0-9]+), ([0-9]+), ([0-9]+) \}/g)]
  return `export const ${c.name} = new Color({r: ${m[0][1]}, g: ${m[0][2]}, b: ${m[0][3]}, a: ${m[0][4]}}) // ${c.description}`
})
out.push(...colors)

// TODO: handle non-macro, non-color defines

// TODO: add wrapped/unwrapped exports

await writeFile('raylib_bun.js', out.join('\n'))
