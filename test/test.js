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
  LIGHTGRAY
} from './raylib'

InitWindow(800, 450, 'raylib [core] example - basic window')
SetTargetFPS(60)

while (!WindowShouldClose()) {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  DrawText('Congrats! You created your first window!', 190, 200, 20, LIGHTGRAY)
  EndDrawing()
}

CloseWindow()
