import { access, readFile, writeFile } from 'fs/promises'

export const fileExists = f => access(f).then(() => true).catch(() => false)

export async function getAPI () {
  return JSON.parse(await readFile('build/_deps/raylib-src/parser/output/raylib_api.json'))
}

// TODO: probly should figure out problem with these
export const blocklist = [
  'DrawLineBezier',
  'DrawSplineBezierCubic',
  'DrawLineCatmullRom',
  'DrawSplineCatmullRom',
  'DrawSplineBezierCubic',
  'DrawLineBezierQuad',
  'DrawLineBezierCubic',
  'DrawLineBSpline'
]

// check if the function will be wrapped
export const isWrapped = f => {
  const returnPointer = /[A-Z]/.test(f.returnType)

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
