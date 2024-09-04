// Vector2, 2 components

unsigned int Vector2_size() {
  return sizeof(Vector2);
}
float Vector2_get_x(Vector2* p) {
  return p->x;
}
void Vector2_set_x(Vector2* p, float v) {
  p->x = v;
}
float Vector2_get_y(Vector2* p) {
  return p->y;
}
void Vector2_set_y(Vector2* p, float v) {
  p->y = v;
}

// Vector3, 3 components

unsigned int Vector3_size() {
  return sizeof(Vector3);
}
float Vector3_get_x(Vector3* p) {
  return p->x;
}
void Vector3_set_x(Vector3* p, float v) {
  p->x = v;
}
float Vector3_get_y(Vector3* p) {
  return p->y;
}
void Vector3_set_y(Vector3* p, float v) {
  p->y = v;
}
float Vector3_get_z(Vector3* p) {
  return p->z;
}
void Vector3_set_z(Vector3* p, float v) {
  p->z = v;
}

// Vector4, 4 components

unsigned int Vector4_size() {
  return sizeof(Vector4);
}
float Vector4_get_x(Vector4* p) {
  return p->x;
}
void Vector4_set_x(Vector4* p, float v) {
  p->x = v;
}
float Vector4_get_y(Vector4* p) {
  return p->y;
}
void Vector4_set_y(Vector4* p, float v) {
  p->y = v;
}
float Vector4_get_z(Vector4* p) {
  return p->z;
}
void Vector4_set_z(Vector4* p, float v) {
  p->z = v;
}
float Vector4_get_w(Vector4* p) {
  return p->w;
}
void Vector4_set_w(Vector4* p, float v) {
  p->w = v;
}

// Matrix, 4x4 components, column major, OpenGL style, right-handed

unsigned int Matrix_size() {
  return sizeof(Matrix);
}
float Matrix_get_m0(Matrix* p) {
  return p->m0;
}
void Matrix_set_m0(Matrix* p, float v) {
  p->m0 = v;
}
float Matrix_get_m4(Matrix* p) {
  return p->m4;
}
void Matrix_set_m4(Matrix* p, float v) {
  p->m4 = v;
}
float Matrix_get_m8(Matrix* p) {
  return p->m8;
}
void Matrix_set_m8(Matrix* p, float v) {
  p->m8 = v;
}
float Matrix_get_m12(Matrix* p) {
  return p->m12;
}
void Matrix_set_m12(Matrix* p, float v) {
  p->m12 = v;
}
float Matrix_get_m1(Matrix* p) {
  return p->m1;
}
void Matrix_set_m1(Matrix* p, float v) {
  p->m1 = v;
}
float Matrix_get_m5(Matrix* p) {
  return p->m5;
}
void Matrix_set_m5(Matrix* p, float v) {
  p->m5 = v;
}
float Matrix_get_m9(Matrix* p) {
  return p->m9;
}
void Matrix_set_m9(Matrix* p, float v) {
  p->m9 = v;
}
float Matrix_get_m13(Matrix* p) {
  return p->m13;
}
void Matrix_set_m13(Matrix* p, float v) {
  p->m13 = v;
}
float Matrix_get_m2(Matrix* p) {
  return p->m2;
}
void Matrix_set_m2(Matrix* p, float v) {
  p->m2 = v;
}
float Matrix_get_m6(Matrix* p) {
  return p->m6;
}
void Matrix_set_m6(Matrix* p, float v) {
  p->m6 = v;
}
float Matrix_get_m10(Matrix* p) {
  return p->m10;
}
void Matrix_set_m10(Matrix* p, float v) {
  p->m10 = v;
}
float Matrix_get_m14(Matrix* p) {
  return p->m14;
}
void Matrix_set_m14(Matrix* p, float v) {
  p->m14 = v;
}
float Matrix_get_m3(Matrix* p) {
  return p->m3;
}
void Matrix_set_m3(Matrix* p, float v) {
  p->m3 = v;
}
float Matrix_get_m7(Matrix* p) {
  return p->m7;
}
void Matrix_set_m7(Matrix* p, float v) {
  p->m7 = v;
}
float Matrix_get_m11(Matrix* p) {
  return p->m11;
}
void Matrix_set_m11(Matrix* p, float v) {
  p->m11 = v;
}
float Matrix_get_m15(Matrix* p) {
  return p->m15;
}
void Matrix_set_m15(Matrix* p, float v) {
  p->m15 = v;
}

// Color, 4 components, R8G8B8A8 (32bit)

unsigned int Color_size() {
  return sizeof(Color);
}
unsigned char Color_get_r(Color* p) {
  return p->r;
}
void Color_set_r(Color* p, unsigned char v) {
  p->r = v;
}
unsigned char Color_get_g(Color* p) {
  return p->g;
}
void Color_set_g(Color* p, unsigned char v) {
  p->g = v;
}
unsigned char Color_get_b(Color* p) {
  return p->b;
}
void Color_set_b(Color* p, unsigned char v) {
  p->b = v;
}
unsigned char Color_get_a(Color* p) {
  return p->a;
}
void Color_set_a(Color* p, unsigned char v) {
  p->a = v;
}

// Rectangle, 4 components

unsigned int Rectangle_size() {
  return sizeof(Rectangle);
}
float Rectangle_get_x(Rectangle* p) {
  return p->x;
}
void Rectangle_set_x(Rectangle* p, float v) {
  p->x = v;
}
float Rectangle_get_y(Rectangle* p) {
  return p->y;
}
void Rectangle_set_y(Rectangle* p, float v) {
  p->y = v;
}
float Rectangle_get_width(Rectangle* p) {
  return p->width;
}
void Rectangle_set_width(Rectangle* p, float v) {
  p->width = v;
}
float Rectangle_get_height(Rectangle* p) {
  return p->height;
}
void Rectangle_set_height(Rectangle* p, float v) {
  p->height = v;
}

// Image, pixel data stored in CPU memory (RAM)

unsigned int Image_size() {
  return sizeof(Image);
}
void * Image_get_data(Image* p) {
  return p->data;
}
void Image_set_data(Image* p, void * v) {
  p->data = v;
}
int Image_get_width(Image* p) {
  return p->width;
}
void Image_set_width(Image* p, int v) {
  p->width = v;
}
int Image_get_height(Image* p) {
  return p->height;
}
void Image_set_height(Image* p, int v) {
  p->height = v;
}
int Image_get_mipmaps(Image* p) {
  return p->mipmaps;
}
void Image_set_mipmaps(Image* p, int v) {
  p->mipmaps = v;
}
int Image_get_format(Image* p) {
  return p->format;
}
void Image_set_format(Image* p, int v) {
  p->format = v;
}

// Texture, tex data stored in GPU memory (VRAM)

unsigned int Texture_size() {
  return sizeof(Texture);
}
unsigned int Texture_get_id(Texture* p) {
  return p->id;
}
void Texture_set_id(Texture* p, unsigned int v) {
  p->id = v;
}
int Texture_get_width(Texture* p) {
  return p->width;
}
void Texture_set_width(Texture* p, int v) {
  p->width = v;
}
int Texture_get_height(Texture* p) {
  return p->height;
}
void Texture_set_height(Texture* p, int v) {
  p->height = v;
}
int Texture_get_mipmaps(Texture* p) {
  return p->mipmaps;
}
void Texture_set_mipmaps(Texture* p, int v) {
  p->mipmaps = v;
}
int Texture_get_format(Texture* p) {
  return p->format;
}
void Texture_set_format(Texture* p, int v) {
  p->format = v;
}

// RenderTexture, fbo for texture rendering

unsigned int RenderTexture_size() {
  return sizeof(RenderTexture);
}
unsigned int RenderTexture_get_id(RenderTexture* p) {
  return p->id;
}
void RenderTexture_set_id(RenderTexture* p, unsigned int v) {
  p->id = v;
}

// NPatchInfo, n-patch layout info

unsigned int NPatchInfo_size() {
  return sizeof(NPatchInfo);
}
int NPatchInfo_get_left(NPatchInfo* p) {
  return p->left;
}
void NPatchInfo_set_left(NPatchInfo* p, int v) {
  p->left = v;
}
int NPatchInfo_get_top(NPatchInfo* p) {
  return p->top;
}
void NPatchInfo_set_top(NPatchInfo* p, int v) {
  p->top = v;
}
int NPatchInfo_get_right(NPatchInfo* p) {
  return p->right;
}
void NPatchInfo_set_right(NPatchInfo* p, int v) {
  p->right = v;
}
int NPatchInfo_get_bottom(NPatchInfo* p) {
  return p->bottom;
}
void NPatchInfo_set_bottom(NPatchInfo* p, int v) {
  p->bottom = v;
}
int NPatchInfo_get_layout(NPatchInfo* p) {
  return p->layout;
}
void NPatchInfo_set_layout(NPatchInfo* p, int v) {
  p->layout = v;
}

// GlyphInfo, font characters glyphs info

unsigned int GlyphInfo_size() {
  return sizeof(GlyphInfo);
}
int GlyphInfo_get_value(GlyphInfo* p) {
  return p->value;
}
void GlyphInfo_set_value(GlyphInfo* p, int v) {
  p->value = v;
}
int GlyphInfo_get_offsetX(GlyphInfo* p) {
  return p->offsetX;
}
void GlyphInfo_set_offsetX(GlyphInfo* p, int v) {
  p->offsetX = v;
}
int GlyphInfo_get_offsetY(GlyphInfo* p) {
  return p->offsetY;
}
void GlyphInfo_set_offsetY(GlyphInfo* p, int v) {
  p->offsetY = v;
}
int GlyphInfo_get_advanceX(GlyphInfo* p) {
  return p->advanceX;
}
void GlyphInfo_set_advanceX(GlyphInfo* p, int v) {
  p->advanceX = v;
}

// Font, font texture and GlyphInfo array data

unsigned int Font_size() {
  return sizeof(Font);
}
int Font_get_baseSize(Font* p) {
  return p->baseSize;
}
void Font_set_baseSize(Font* p, int v) {
  p->baseSize = v;
}
int Font_get_glyphCount(Font* p) {
  return p->glyphCount;
}
void Font_set_glyphCount(Font* p, int v) {
  p->glyphCount = v;
}
int Font_get_glyphPadding(Font* p) {
  return p->glyphPadding;
}
void Font_set_glyphPadding(Font* p, int v) {
  p->glyphPadding = v;
}

// Camera, defines position/orientation in 3d space

unsigned int Camera3D_size() {
  return sizeof(Camera3D);
}
float Camera3D_get_fovy(Camera3D* p) {
  return p->fovy;
}
void Camera3D_set_fovy(Camera3D* p, float v) {
  p->fovy = v;
}
int Camera3D_get_projection(Camera3D* p) {
  return p->projection;
}
void Camera3D_set_projection(Camera3D* p, int v) {
  p->projection = v;
}

// Camera2D, defines position/orientation in 2d space

unsigned int Camera2D_size() {
  return sizeof(Camera2D);
}
float Camera2D_get_rotation(Camera2D* p) {
  return p->rotation;
}
void Camera2D_set_rotation(Camera2D* p, float v) {
  p->rotation = v;
}
float Camera2D_get_zoom(Camera2D* p) {
  return p->zoom;
}
void Camera2D_set_zoom(Camera2D* p, float v) {
  p->zoom = v;
}

// Mesh, vertex data and vao/vbo

unsigned int Mesh_size() {
  return sizeof(Mesh);
}
int Mesh_get_vertexCount(Mesh* p) {
  return p->vertexCount;
}
void Mesh_set_vertexCount(Mesh* p, int v) {
  p->vertexCount = v;
}
int Mesh_get_triangleCount(Mesh* p) {
  return p->triangleCount;
}
void Mesh_set_triangleCount(Mesh* p, int v) {
  p->triangleCount = v;
}
float * Mesh_get_vertices(Mesh* p) {
  return p->vertices;
}
void Mesh_set_vertices(Mesh* p, float * v) {
  p->vertices = v;
}
float * Mesh_get_texcoords(Mesh* p) {
  return p->texcoords;
}
void Mesh_set_texcoords(Mesh* p, float * v) {
  p->texcoords = v;
}
float * Mesh_get_texcoords2(Mesh* p) {
  return p->texcoords2;
}
void Mesh_set_texcoords2(Mesh* p, float * v) {
  p->texcoords2 = v;
}
float * Mesh_get_normals(Mesh* p) {
  return p->normals;
}
void Mesh_set_normals(Mesh* p, float * v) {
  p->normals = v;
}
float * Mesh_get_tangents(Mesh* p) {
  return p->tangents;
}
void Mesh_set_tangents(Mesh* p, float * v) {
  p->tangents = v;
}
unsigned char * Mesh_get_colors(Mesh* p) {
  return p->colors;
}
void Mesh_set_colors(Mesh* p, unsigned char * v) {
  p->colors = v;
}
unsigned short * Mesh_get_indices(Mesh* p) {
  return p->indices;
}
void Mesh_set_indices(Mesh* p, unsigned short * v) {
  p->indices = v;
}
float * Mesh_get_animVertices(Mesh* p) {
  return p->animVertices;
}
void Mesh_set_animVertices(Mesh* p, float * v) {
  p->animVertices = v;
}
float * Mesh_get_animNormals(Mesh* p) {
  return p->animNormals;
}
void Mesh_set_animNormals(Mesh* p, float * v) {
  p->animNormals = v;
}
unsigned char * Mesh_get_boneIds(Mesh* p) {
  return p->boneIds;
}
void Mesh_set_boneIds(Mesh* p, unsigned char * v) {
  p->boneIds = v;
}
float * Mesh_get_boneWeights(Mesh* p) {
  return p->boneWeights;
}
void Mesh_set_boneWeights(Mesh* p, float * v) {
  p->boneWeights = v;
}
unsigned int Mesh_get_vaoId(Mesh* p) {
  return p->vaoId;
}
void Mesh_set_vaoId(Mesh* p, unsigned int v) {
  p->vaoId = v;
}
unsigned int * Mesh_get_vboId(Mesh* p) {
  return p->vboId;
}
void Mesh_set_vboId(Mesh* p, unsigned int * v) {
  p->vboId = v;
}

// Shader

unsigned int Shader_size() {
  return sizeof(Shader);
}
unsigned int Shader_get_id(Shader* p) {
  return p->id;
}
void Shader_set_id(Shader* p, unsigned int v) {
  p->id = v;
}
int * Shader_get_locs(Shader* p) {
  return p->locs;
}
void Shader_set_locs(Shader* p, int * v) {
  p->locs = v;
}

// MaterialMap

unsigned int MaterialMap_size() {
  return sizeof(MaterialMap);
}
float MaterialMap_get_value(MaterialMap* p) {
  return p->value;
}
void MaterialMap_set_value(MaterialMap* p, float v) {
  p->value = v;
}

// Material, includes shader and maps

unsigned int Material_size() {
  return sizeof(Material);
}

// Transform, vertex transformation data

unsigned int Transform_size() {
  return sizeof(Transform);
}

// Bone, skeletal animation bone

unsigned int BoneInfo_size() {
  return sizeof(BoneInfo);
}
int BoneInfo_get_parent(BoneInfo* p) {
  return p->parent;
}
void BoneInfo_set_parent(BoneInfo* p, int v) {
  p->parent = v;
}

// Model, meshes, materials and animation data

unsigned int Model_size() {
  return sizeof(Model);
}
int Model_get_meshCount(Model* p) {
  return p->meshCount;
}
void Model_set_meshCount(Model* p, int v) {
  p->meshCount = v;
}
int Model_get_materialCount(Model* p) {
  return p->materialCount;
}
void Model_set_materialCount(Model* p, int v) {
  p->materialCount = v;
}
int * Model_get_meshMaterial(Model* p) {
  return p->meshMaterial;
}
void Model_set_meshMaterial(Model* p, int * v) {
  p->meshMaterial = v;
}
int Model_get_boneCount(Model* p) {
  return p->boneCount;
}
void Model_set_boneCount(Model* p, int v) {
  p->boneCount = v;
}

// ModelAnimation

unsigned int ModelAnimation_size() {
  return sizeof(ModelAnimation);
}
int ModelAnimation_get_boneCount(ModelAnimation* p) {
  return p->boneCount;
}
void ModelAnimation_set_boneCount(ModelAnimation* p, int v) {
  p->boneCount = v;
}
int ModelAnimation_get_frameCount(ModelAnimation* p) {
  return p->frameCount;
}
void ModelAnimation_set_frameCount(ModelAnimation* p, int v) {
  p->frameCount = v;
}

// Ray, ray for raycasting

unsigned int Ray_size() {
  return sizeof(Ray);
}

// RayCollision, ray hit information

unsigned int RayCollision_size() {
  return sizeof(RayCollision);
}
bool RayCollision_get_hit(RayCollision* p) {
  return p->hit;
}
void RayCollision_set_hit(RayCollision* p, bool v) {
  p->hit = v;
}
float RayCollision_get_distance(RayCollision* p) {
  return p->distance;
}
void RayCollision_set_distance(RayCollision* p, float v) {
  p->distance = v;
}

// BoundingBox

unsigned int BoundingBox_size() {
  return sizeof(BoundingBox);
}

// Wave, audio wave data

unsigned int Wave_size() {
  return sizeof(Wave);
}
unsigned int Wave_get_frameCount(Wave* p) {
  return p->frameCount;
}
void Wave_set_frameCount(Wave* p, unsigned int v) {
  p->frameCount = v;
}
unsigned int Wave_get_sampleRate(Wave* p) {
  return p->sampleRate;
}
void Wave_set_sampleRate(Wave* p, unsigned int v) {
  p->sampleRate = v;
}
unsigned int Wave_get_sampleSize(Wave* p) {
  return p->sampleSize;
}
void Wave_set_sampleSize(Wave* p, unsigned int v) {
  p->sampleSize = v;
}
unsigned int Wave_get_channels(Wave* p) {
  return p->channels;
}
void Wave_set_channels(Wave* p, unsigned int v) {
  p->channels = v;
}
void * Wave_get_data(Wave* p) {
  return p->data;
}
void Wave_set_data(Wave* p, void * v) {
  p->data = v;
}

// AudioStream, custom audio stream

unsigned int AudioStream_size() {
  return sizeof(AudioStream);
}
unsigned int AudioStream_get_sampleRate(AudioStream* p) {
  return p->sampleRate;
}
void AudioStream_set_sampleRate(AudioStream* p, unsigned int v) {
  p->sampleRate = v;
}
unsigned int AudioStream_get_sampleSize(AudioStream* p) {
  return p->sampleSize;
}
void AudioStream_set_sampleSize(AudioStream* p, unsigned int v) {
  p->sampleSize = v;
}
unsigned int AudioStream_get_channels(AudioStream* p) {
  return p->channels;
}
void AudioStream_set_channels(AudioStream* p, unsigned int v) {
  p->channels = v;
}

// Sound

unsigned int Sound_size() {
  return sizeof(Sound);
}
unsigned int Sound_get_frameCount(Sound* p) {
  return p->frameCount;
}
void Sound_set_frameCount(Sound* p, unsigned int v) {
  p->frameCount = v;
}

// Music, audio stream, anything longer than ~10 seconds should be streamed

unsigned int Music_size() {
  return sizeof(Music);
}
unsigned int Music_get_frameCount(Music* p) {
  return p->frameCount;
}
void Music_set_frameCount(Music* p, unsigned int v) {
  p->frameCount = v;
}
bool Music_get_looping(Music* p) {
  return p->looping;
}
void Music_set_looping(Music* p, bool v) {
  p->looping = v;
}
int Music_get_ctxType(Music* p) {
  return p->ctxType;
}
void Music_set_ctxType(Music* p, int v) {
  p->ctxType = v;
}
void * Music_get_ctxData(Music* p) {
  return p->ctxData;
}
void Music_set_ctxData(Music* p, void * v) {
  p->ctxData = v;
}

// VrDeviceInfo, Head-Mounted-Display device parameters

unsigned int VrDeviceInfo_size() {
  return sizeof(VrDeviceInfo);
}
int VrDeviceInfo_get_hResolution(VrDeviceInfo* p) {
  return p->hResolution;
}
void VrDeviceInfo_set_hResolution(VrDeviceInfo* p, int v) {
  p->hResolution = v;
}
int VrDeviceInfo_get_vResolution(VrDeviceInfo* p) {
  return p->vResolution;
}
void VrDeviceInfo_set_vResolution(VrDeviceInfo* p, int v) {
  p->vResolution = v;
}
float VrDeviceInfo_get_hScreenSize(VrDeviceInfo* p) {
  return p->hScreenSize;
}
void VrDeviceInfo_set_hScreenSize(VrDeviceInfo* p, float v) {
  p->hScreenSize = v;
}
float VrDeviceInfo_get_vScreenSize(VrDeviceInfo* p) {
  return p->vScreenSize;
}
void VrDeviceInfo_set_vScreenSize(VrDeviceInfo* p, float v) {
  p->vScreenSize = v;
}
float VrDeviceInfo_get_vScreenCenter(VrDeviceInfo* p) {
  return p->vScreenCenter;
}
void VrDeviceInfo_set_vScreenCenter(VrDeviceInfo* p, float v) {
  p->vScreenCenter = v;
}
float VrDeviceInfo_get_eyeToScreenDistance(VrDeviceInfo* p) {
  return p->eyeToScreenDistance;
}
void VrDeviceInfo_set_eyeToScreenDistance(VrDeviceInfo* p, float v) {
  p->eyeToScreenDistance = v;
}
float VrDeviceInfo_get_lensSeparationDistance(VrDeviceInfo* p) {
  return p->lensSeparationDistance;
}
void VrDeviceInfo_set_lensSeparationDistance(VrDeviceInfo* p, float v) {
  p->lensSeparationDistance = v;
}
float VrDeviceInfo_get_interpupillaryDistance(VrDeviceInfo* p) {
  return p->interpupillaryDistance;
}
void VrDeviceInfo_set_interpupillaryDistance(VrDeviceInfo* p, float v) {
  p->interpupillaryDistance = v;
}

// VrStereoConfig, VR stereo rendering configuration for simulator

unsigned int VrStereoConfig_size() {
  return sizeof(VrStereoConfig);
}

// File path list

unsigned int FilePathList_size() {
  return sizeof(FilePathList);
}
unsigned int FilePathList_get_capacity(FilePathList* p) {
  return p->capacity;
}
void FilePathList_set_capacity(FilePathList* p, unsigned int v) {
  p->capacity = v;
}
unsigned int FilePathList_get_count(FilePathList* p) {
  return p->count;
}
void FilePathList_set_count(FilePathList* p, unsigned int v) {
  p->count = v;
}
char ** FilePathList_get_paths(FilePathList* p) {
  return p->paths;
}
void FilePathList_set_paths(FilePathList* p, char ** v) {
  p->paths = v;
}
