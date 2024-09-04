// this will generate raylib-pointers

import { writeFile } from 'fs/promises'
import { getAPI } from './shared.js'

const { defines, structs, aliases, enums, callbacks, functions } = await getAPI()

let out = []

for (const {name, description, fields} of structs) {
  out.push(`// ${description}

unsigned int ${name}_size() {
  return sizeof(${name});
}`)
  for (const field of fields) {
    if (field.type.includes('[')) {
      // TODO: add utils for arrays
    } else if (/[A-Z]/.test(field.type)) { // cheap way to detect raylib stuff
      // TODO: add utils for nested structs
    } else {
      out.push(`${field.type} ${name}_get_${field.name}(${name}* p) {\n  return p->${field.name};\n}`)
      out.push(`void ${name}_set_${field.name}(${name}* p, ${field.type} v) {\n  p->${field.name} = v;\n}`)
    }
  }
  out.push('')
}

await writeFile('src/structs.h', out.join('\n'))

out = [`
#include <stdlib.h>
#include "raylib.h"

// utils for operating on structs
#include "./structs.h"

// this allows us to free anything that was allocated, last-frame
// max number of allocations you can do, per-frame
#define FRAME_ALLOC_SIZE 1024*512

int _frame_alloc_counter = 0;
void* _frame_allocated[FRAME_ALLOC_SIZE] = {};
bool running = false;

void* wrapped_alloc(size_t s) {
  void* p = RL_MALLOC(s);
  if (running) {
    _frame_allocated[_frame_alloc_counter] = p;
    _frame_alloc_counter = (_frame_alloc_counter + 1) % FRAME_ALLOC_SIZE;
  }
  return p;
}

void wrapped_free(void* p) {
  RL_FREE(p);
}

bool wrapped_WindowShouldClose() {
  running = true;
  for (int i=0;i<_frame_alloc_counter;i++) {
    wrapped_free(_frame_allocated[i]);
  }
  _frame_alloc_counter = 0;
  return WindowShouldClose();
}
`]

// TODO: probly should figure out problem with these
const blocklist = [
  'DrawLineBezier',
  'DrawSplineBezierCubic',
  'DrawLineCatmullRom',
  'DrawSplineCatmullRom',
  'DrawSplineBezierCubic',
  'DrawLineBezierQuad',
  'DrawLineBezierCubic',
  'DrawLineBSpline'
]

for (let { name, description, returnType, params=[] } of functions) {
  if (blocklist.includes(name)) {
    continue
  }

  // does return need to be converted to a pointer?
  const returnPointer = /[A-Z]/.test(returnType)

  // do any params need to be converted to pointers?
  let paramPointer = false

  const inputParams = params.map(p => {
    if (/[A-Z]/.test(p.type)) {
      paramPointer = true
      return `${p.type.trim()}* ${p.name}`
    } else {
       return `${p.type} ${p.name}`
    }
  })

  const callParams = params.map(p => {
    if (/[A-Z]/.test(p.type)) {
      paramPointer = true
      return `*${p.name}`
    } else {
       return p.name
    }
  })

  if (paramPointer || returnPointer) {
    out.push(`// ${description}`)
    if (returnPointer) {
      out.push(`${returnType}* wrapped_${name}(${inputParams.join(', ')}) {`)
      out.push(`  ${returnType}* _ret = wrapped_alloc(sizeof(${returnType}));`)
      out.push(`  *_ret = ${name}(${callParams.join(', ')});`)
      out.push('  return _ret;')
    } else {
      out.push(`${returnType} wrapped_${name}(${inputParams.join(', ')}) {`)
      if (returnType === 'void'){
        out.push(`  ${name}(${callParams.join(', ')});`)
      }else{
        out.push(`  return ${name}(${callParams.join(', ')});`)
      }
    }
    out.push('}\n')
  }
}

await writeFile('src/lib.c', out.join('\n'))
