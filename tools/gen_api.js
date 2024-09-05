// this will generate API info about all the new wrapped stuff & utils
// it's basically the same as the stuff parser generates in raylib
// but I add my wrappers and and struct-utils

import { writeFile, readFile } from 'fs/promises'

// check if the function will be wrapped
const isWrapped = f => {
  const returnPointer = /^[A-Z]/.test(f.returnType)

  // do any params need to be converted to pointers?
  let paramPointer = false

  for (const p of (f.params || [])) {
    if (/[A-Z]/.test(p.type)) {
      paramPointer = true
      break
    }
  }
  return returnPointer || paramPointer
}

export const blocklist = [
  // this is blocked because I add wrapped_WindowShouldClose manually
  'WindowShouldClose',

  // TODO: I think these are not available in the current version, but for some reason are referenced
  'LoadAutomationEventList',
  'UnloadAutomationEventList',
  'ExportAutomationEventList',
  'SetAutomationEventList',
  'PlayAutomationEventList',
  'PlayAutomationEvent',
  'DrawLineBezier',
  'DrawCircleLinesV',
  'DrawSplineLinear',
  'DrawSplineBasis',
  'DrawSplineCatmullRom',
  'DrawSplineBezierQuadratic',
  'DrawSplineBezierCubic',
  'DrawSplineSegmentLinear',
  'DrawSplineSegmentBasis',
  'DrawSplineSegmentCatmullRom',
  'DrawSplineSegmentBezierQuadratic',
  'DrawSplineSegmentBezierCubic',
  'GetSplinePointLinear',
  'GetSplinePointBasis',
  'GetSplinePointCatmullRom',
  'GetSplinePointBezierQuad',
  'GetSplinePointBezierCubic'
]

const blocklistStructs = [
]

const { defines, structs, aliases, enums, callbacks, functions } = JSON.parse(await readFile('build/_deps/raylib-src/parser/output/raylib_api.json'))

const wrapped = []
const unwrapped = []
const struct_utils = []

for (const { name, description, fields } of structs) {
  if (blocklistStructs.includes(name)) {
    continue
  }

  struct_utils.push({
    name: `${name}_size`,
    description: `Get byte-size of ${name} struct`,
    returnType: 'unsigned int',
    params: []
  })
  for (const field of fields) {
    struct_utils.push({
      name: `${name}_get_${field.name}`,
      description: `Getter for ${name}->${field.name}`,
      returnType: field.type,
      params: [
        { name: 'obj', type: `${field.name}*` }
      ]
    })
    struct_utils.push({
      name: `${name}_set_${field.name}`,
      description: `Setter for ${name}->${field.name}`,
      returnType: 'void',
      params: [
        { name: 'obj', type: `${field.name}*` },
        { name: 'v', type: field.type }
      ]
    })
  }
}

for (const f of functions) {
  if (blocklist.includes(f.name)) {
    continue
  }
  if (isWrapped(f)) {
    wrapped.push({
      name: `wrapped_${f.name}`,
      description: f.description,
      original: f.name,
      returnType: /[A-Z]/.test(f.returnType) ? `${f.returnType}*` : f.returnType,
      params: (f.params || []).map(p => {
        return {
          ...p,
          type: /[A-Z]/.test(p.type) ? `${p.type}*` : p.type
        }
      })
    })
  } else {
    f.params ||= []
    unwrapped.push(f)
  }
}

// these are my additions (per-frame alloc/free)

wrapped.push({
  name: 'wrapped_alloc',
  original: 'alloc',
  description: 'Allocate memory, cleared on every WindowShouldClose call (your frame update-loop)',
  returnType: 'void*',
  params: [{
    name: 'size',
    type: 'unsigned int',
    description: 'The size (in bytes) to allocate'
  }]
})

wrapped.push({
  name: 'wrapped_free',
  original: 'free',
  description: 'Clear allocated memory. If it was not allocated (or has already been freed) this will error.',
  returnType: 'void',
  params: [{
    name: 'pointer',
    type: 'void*',
    description: 'The pointer to free'
  }]
})

wrapped.push({
  name: 'wrapped_WindowShouldClose',
  original: 'WindowShouldClose',
  description: 'Check if application should close (KEY_ESCAPE pressed or windows close icon clicked.) This also clears memory that was allocated since last call.',
  returnType: 'bool',
  params: []
})

await writeFile('tools/api.json', JSON.stringify({ unwrapped, wrapped, struct_utils, defines, structs, aliases, enums, callbacks, functions }, null, 2))
