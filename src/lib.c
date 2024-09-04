#include <stdlib.h>
#include "raylib.h"

#include "structTexture2D.h"
#include "structColor.h"

void* wrapped_alloc(size_t s) {
  return RL_MALLOC(s);
}

void wrapped_free(void* p) {
  RL_FREE(p);
}

void wrapped_ClearBackground(Color* color) {
  ClearBackground(*color);
}

void wrapped_DrawText(const char *text, int posX, int posY, int fontSize, Color* color) {
  DrawText(text, posX, posY, fontSize, *color);
}

void wrapped_LoadTexture(Texture2D* ret, const char *fileName) {
  *ret = LoadTexture(fileName);
}

// TODO
Color* wrapped_Fade1(Color* color, float alpha) {}


void wrapped_Fade2(Color* ret, Color* color, float alpha) {
  *ret = Fade(*color, alpha);
}