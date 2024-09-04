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
  Fade2
} from './raylib'

InitWindow(800, 450, 'raylib [core] example - basic window')
SetTargetFPS(60)

while (!WindowShouldClose()) {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  DrawText('Congrats! You created your first window!', 190, 200, 20, LIGHTGRAY)
  EndDrawing()
  // this tests the allocation (and auto-free) being made on every single frame
  const f2 = Fade2(BLACK, 0.5)
  console.log(`Fade BLACK to 0.5: { ${f2.r}, ${f2.g}, ${f2.b}, ${f2.a} }`)
}

CloseWindow()
