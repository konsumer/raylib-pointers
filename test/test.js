// run with bun ./test/test.js

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
  Fade2,
  Color
} from './raylib'

InitWindow(800, 450, 'bun - raylib-pointer')
SetTargetFPS(60)

// this tests simple (Color) struct in/out
const f2 = Fade2(BLACK, 0.5)
console.log(`Fade BLACK to 0.5: { ${f2.r}, ${f2.g}, ${f2.b}, ${f2.a} }`)

let i = 0

while (!WindowShouldClose()) {
  // this tests the auto-free on every frame
  const c = new Color({ r: i++ % 255, g: ((127 - i) % 255) || 0, b: ((i - 127) % 255) || 0, a: 255 })

  BeginDrawing()
  ClearBackground(c)
  DrawText('Congrats! You created your first window!', 190, 200, 20, LIGHTGRAY)
  EndDrawing()
}

CloseWindow()
