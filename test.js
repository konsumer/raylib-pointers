// run with bun test.js

import {
  ClearBackground,
  InitWindow,
  WindowShouldClose,
  BeginDrawing,
  EndDrawing,
  CloseWindow,
  DrawText,
  SetTargetFPS,
  RAYWHITE,
  LIGHTGRAY,
  BLACK,
  Fade,
  Color
} from './raylib_bun'

InitWindow(800, 450, 'bun - raylib-pointer')
SetTargetFPS(60)

// these test simple (Color) struct in/out
const f1 = Fade(BLACK, 0.5)
console.log(`Fade BLACK to 0.5: { ${f1.r}, ${f1.g}, ${f1.b}, ${f1.a} }`)

let i = 0

while (!WindowShouldClose()) {
  // this tests the auto-free on every frame, since lots of new colors are allocated here
  const c = new Color({ r: i++ % 255, g: ((127 - i) % 255) || 0, b: ((i - 127) % 255) || 0, a: 255 })

  BeginDrawing()
  ClearBackground(c)
  DrawText('Congrats! You created your first window!', 190, 200, 20, LIGHTGRAY)
  EndDrawing()
}

CloseWindow()
