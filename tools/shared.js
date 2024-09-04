import { access, readFile, writeFile } from 'fs/promises';

export const fileExists = f => access(f).then(() => true).catch(() => false)

export async function getAPI(){
  return JSON.parse(await readFile('build/_deps/raylib-src/parser/output/raylib_api.json'))
}