unsigned int Texture2D_size() {
  return sizeof(Texture2D);
}

unsigned int Texture2D_get_id(Texture2D* p) {
  return p->id;
}

void Texture2D_set_id(Texture2D* p, unsigned int v) {
  p->id = v;
}

int Texture2D_get_width(Texture2D* p) {
  return p->width;
}

void Texture2D_set_width(Texture2D* p, int v) {
  p->width = v;
}

int Texture2D_get_height(Texture2D* p) {
  return p->height;
}

void Texture2D_set_height(Texture2D* p, int v) {
  p->height = v;
}

int Texture2D_get_mipmaps(Texture2D* p) {
  return p->mipmaps;
}

void Texture2D_set_mipmaps(Texture2D* p, int v) {
  p->mipmaps = v;
}

int Texture2D_get_format(Texture2D* p) {
  return p->format;
}

void Texture2D_set_format(Texture2D* p, int v) {
  p->format = v;
}