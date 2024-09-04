unsigned int Color_size() {
  return sizeof(Color);
}

unsigned char Color_get_r(Color* t) {
  return t->r;
}

void Color_set_r(Color* t, unsigned char v) {
  t->r = v;
}

unsigned char Color_get_g(Color* t) {
  return t->g;
}

void Color_set_g(Color* t, unsigned char v) {
  t->g = v;
}

unsigned char Color_get_b(Color* t) {
  return t->b;
}

void Color_set_b(Color* t, unsigned char v) {
  t->b = v;
}

unsigned char Color_get_a(Color* t) {
  return t->a;
}

void Color_set_a(Color* t, unsigned char v) {
  t->a = v;
}