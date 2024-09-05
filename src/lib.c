#include <stdlib.h>
#include "raylib.h"

// utils for operating on structs
#include "./structs.h"

// this allows us to free anything that was allocated, last-frame
// max number of allocations you can do, per-frame
#define FRAME_ALLOC_SIZE 1024*512

int _frame_alloc_counter = 0;
void* _frame_allocated[FRAME_ALLOC_SIZE] = {};
bool running = false;

void* wrapped_alloc(size_t s) {
  void* p = RL_MALLOC(s);
  if (running) {
    _frame_allocated[_frame_alloc_counter] = p;
    _frame_alloc_counter = (_frame_alloc_counter + 1) % FRAME_ALLOC_SIZE;
  }
  return p;
}

void wrapped_free(void* p) {
  RL_FREE(p);
}

bool wrapped_WindowShouldClose() {
  running = true;
  for (int i=0;i<_frame_alloc_counter;i++) {
    wrapped_free(_frame_allocated[i]);
  }
  _frame_alloc_counter = 0;
  return WindowShouldClose();
}

// Set icon for window (single image, RGBA 32bit, only PLATFORM_DESKTOP)
void wrapped_SetWindowIcon(Image* image) {
  SetWindowIcon(*image);
}

// Set icon for window (multiple images, RGBA 32bit, only PLATFORM_DESKTOP)
void wrapped_SetWindowIcons(Image ** images, int count) {
  SetWindowIcons(*images, count);
}

// Get specified monitor position
Vector2* wrapped_GetMonitorPosition(int monitor) {
  Vector2* _ret = wrapped_alloc(sizeof(Vector2));
  *_ret = GetMonitorPosition(monitor);
  return _ret;
}

// Get window position XY on monitor
Vector2* wrapped_GetWindowPosition() {
  Vector2* _ret = wrapped_alloc(sizeof(Vector2));
  *_ret = GetWindowPosition();
  return _ret;
}

// Get window scale DPI factor
Vector2* wrapped_GetWindowScaleDPI() {
  Vector2* _ret = wrapped_alloc(sizeof(Vector2));
  *_ret = GetWindowScaleDPI();
  return _ret;
}

// Set background color (framebuffer clear color)
void wrapped_ClearBackground(Color* color) {
  ClearBackground(*color);
}

// Begin 2D mode with custom camera (2D)
void wrapped_BeginMode2D(Camera2D* camera) {
  BeginMode2D(*camera);
}

// Begin 3D mode with custom camera (3D)
void wrapped_BeginMode3D(Camera3D* camera) {
  BeginMode3D(*camera);
}

// Begin drawing to render texture
void wrapped_BeginTextureMode(RenderTexture2D* target) {
  BeginTextureMode(*target);
}

// Begin custom shader drawing
void wrapped_BeginShaderMode(Shader* shader) {
  BeginShaderMode(*shader);
}

// Begin stereo rendering (requires VR simulator)
void wrapped_BeginVrStereoMode(VrStereoConfig* config) {
  BeginVrStereoMode(*config);
}

// Load VR stereo config for VR simulator device parameters
VrStereoConfig* wrapped_LoadVrStereoConfig(VrDeviceInfo* device) {
  VrStereoConfig* _ret = wrapped_alloc(sizeof(VrStereoConfig));
  *_ret = LoadVrStereoConfig(*device);
  return _ret;
}

// Unload VR stereo config
void wrapped_UnloadVrStereoConfig(VrStereoConfig* config) {
  UnloadVrStereoConfig(*config);
}

// Load shader from files and bind default locations
Shader* wrapped_LoadShader(const char * vsFileName, const char * fsFileName) {
  Shader* _ret = wrapped_alloc(sizeof(Shader));
  *_ret = LoadShader(vsFileName, fsFileName);
  return _ret;
}

// Load shader from code strings and bind default locations
Shader* wrapped_LoadShaderFromMemory(const char * vsCode, const char * fsCode) {
  Shader* _ret = wrapped_alloc(sizeof(Shader));
  *_ret = LoadShaderFromMemory(vsCode, fsCode);
  return _ret;
}

// Check if a shader is ready
bool wrapped_IsShaderReady(Shader* shader) {
  return IsShaderReady(*shader);
}

// Get shader uniform location
int wrapped_GetShaderLocation(Shader* shader, const char * uniformName) {
  return GetShaderLocation(*shader, uniformName);
}

// Get shader attribute location
int wrapped_GetShaderLocationAttrib(Shader* shader, const char * attribName) {
  return GetShaderLocationAttrib(*shader, attribName);
}

// Set shader uniform value
void wrapped_SetShaderValue(Shader* shader, int locIndex, const void * value, int uniformType) {
  SetShaderValue(*shader, locIndex, value, uniformType);
}

// Set shader uniform value vector
void wrapped_SetShaderValueV(Shader* shader, int locIndex, const void * value, int uniformType, int count) {
  SetShaderValueV(*shader, locIndex, value, uniformType, count);
}

// Set shader uniform value (matrix 4x4)
void wrapped_SetShaderValueMatrix(Shader* shader, int locIndex, Matrix* mat) {
  SetShaderValueMatrix(*shader, locIndex, *mat);
}

// Set shader uniform value for texture (sampler2d)
void wrapped_SetShaderValueTexture(Shader* shader, int locIndex, Texture2D* texture) {
  SetShaderValueTexture(*shader, locIndex, *texture);
}

// Unload shader from GPU memory (VRAM)
void wrapped_UnloadShader(Shader* shader) {
  UnloadShader(*shader);
}

// Get a ray trace from mouse position
Ray* wrapped_GetMouseRay(Vector2* mousePosition, Camera* camera) {
  Ray* _ret = wrapped_alloc(sizeof(Ray));
  *_ret = GetMouseRay(*mousePosition, *camera);
  return _ret;
}

// Get camera transform matrix (view matrix)
Matrix* wrapped_GetCameraMatrix(Camera* camera) {
  Matrix* _ret = wrapped_alloc(sizeof(Matrix));
  *_ret = GetCameraMatrix(*camera);
  return _ret;
}

// Get camera 2d transform matrix
Matrix* wrapped_GetCameraMatrix2D(Camera2D* camera) {
  Matrix* _ret = wrapped_alloc(sizeof(Matrix));
  *_ret = GetCameraMatrix2D(*camera);
  return _ret;
}

// Get the screen space position for a 3d world space position
Vector2* wrapped_GetWorldToScreen(Vector3* position, Camera* camera) {
  Vector2* _ret = wrapped_alloc(sizeof(Vector2));
  *_ret = GetWorldToScreen(*position, *camera);
  return _ret;
}

// Get the world space position for a 2d camera screen space position
Vector2* wrapped_GetScreenToWorld2D(Vector2* position, Camera2D* camera) {
  Vector2* _ret = wrapped_alloc(sizeof(Vector2));
  *_ret = GetScreenToWorld2D(*position, *camera);
  return _ret;
}

// Get size position for a 3d world space position
Vector2* wrapped_GetWorldToScreenEx(Vector3* position, Camera* camera, int width, int height) {
  Vector2* _ret = wrapped_alloc(sizeof(Vector2));
  *_ret = GetWorldToScreenEx(*position, *camera, width, height);
  return _ret;
}

// Get the screen space position for a 2d camera world space position
Vector2* wrapped_GetWorldToScreen2D(Vector2* position, Camera2D* camera) {
  Vector2* _ret = wrapped_alloc(sizeof(Vector2));
  *_ret = GetWorldToScreen2D(*position, *camera);
  return _ret;
}

// Set custom trace log
void wrapped_SetTraceLogCallback(TraceLogCallback* callback) {
  SetTraceLogCallback(*callback);
}

// Set custom file binary data loader
void wrapped_SetLoadFileDataCallback(LoadFileDataCallback* callback) {
  SetLoadFileDataCallback(*callback);
}

// Set custom file binary data saver
void wrapped_SetSaveFileDataCallback(SaveFileDataCallback* callback) {
  SetSaveFileDataCallback(*callback);
}

// Set custom file text data loader
void wrapped_SetLoadFileTextCallback(LoadFileTextCallback* callback) {
  SetLoadFileTextCallback(*callback);
}

// Set custom file text data saver
void wrapped_SetSaveFileTextCallback(SaveFileTextCallback* callback) {
  SetSaveFileTextCallback(*callback);
}

// Load directory filepaths
FilePathList* wrapped_LoadDirectoryFiles(const char * dirPath) {
  FilePathList* _ret = wrapped_alloc(sizeof(FilePathList));
  *_ret = LoadDirectoryFiles(dirPath);
  return _ret;
}

// Load directory filepaths with extension filtering and recursive directory scan
FilePathList* wrapped_LoadDirectoryFilesEx(const char * basePath, const char * filter, bool scanSubdirs) {
  FilePathList* _ret = wrapped_alloc(sizeof(FilePathList));
  *_ret = LoadDirectoryFilesEx(basePath, filter, scanSubdirs);
  return _ret;
}

// Unload filepaths
void wrapped_UnloadDirectoryFiles(FilePathList* files) {
  UnloadDirectoryFiles(*files);
}

// Load dropped filepaths
FilePathList* wrapped_LoadDroppedFiles() {
  FilePathList* _ret = wrapped_alloc(sizeof(FilePathList));
  *_ret = LoadDroppedFiles();
  return _ret;
}

// Unload dropped filepaths
void wrapped_UnloadDroppedFiles(FilePathList* files) {
  UnloadDroppedFiles(*files);
}

// Get mouse position XY
Vector2* wrapped_GetMousePosition() {
  Vector2* _ret = wrapped_alloc(sizeof(Vector2));
  *_ret = GetMousePosition();
  return _ret;
}

// Get mouse delta between frames
Vector2* wrapped_GetMouseDelta() {
  Vector2* _ret = wrapped_alloc(sizeof(Vector2));
  *_ret = GetMouseDelta();
  return _ret;
}

// Get mouse wheel movement for both X and Y
Vector2* wrapped_GetMouseWheelMoveV() {
  Vector2* _ret = wrapped_alloc(sizeof(Vector2));
  *_ret = GetMouseWheelMoveV();
  return _ret;
}

// Get touch position XY for a touch point index (relative to screen size)
Vector2* wrapped_GetTouchPosition(int index) {
  Vector2* _ret = wrapped_alloc(sizeof(Vector2));
  *_ret = GetTouchPosition(index);
  return _ret;
}

// Get gesture drag vector
Vector2* wrapped_GetGestureDragVector() {
  Vector2* _ret = wrapped_alloc(sizeof(Vector2));
  *_ret = GetGestureDragVector();
  return _ret;
}

// Get gesture pinch delta
Vector2* wrapped_GetGesturePinchVector() {
  Vector2* _ret = wrapped_alloc(sizeof(Vector2));
  *_ret = GetGesturePinchVector();
  return _ret;
}

// Update camera position for selected mode
void wrapped_UpdateCamera(Camera ** camera, int mode) {
  UpdateCamera(*camera, mode);
}

// Update camera movement/rotation
void wrapped_UpdateCameraPro(Camera ** camera, Vector3* movement, Vector3* rotation, float zoom) {
  UpdateCameraPro(*camera, *movement, *rotation, zoom);
}

// Set texture and rectangle to be used on shapes drawing
void wrapped_SetShapesTexture(Texture2D* texture, Rectangle* source) {
  SetShapesTexture(*texture, *source);
}

// Draw a pixel
void wrapped_DrawPixel(int posX, int posY, Color* color) {
  DrawPixel(posX, posY, *color);
}

// Draw a pixel (Vector version)
void wrapped_DrawPixelV(Vector2* position, Color* color) {
  DrawPixelV(*position, *color);
}

// Draw a line
void wrapped_DrawLine(int startPosX, int startPosY, int endPosX, int endPosY, Color* color) {
  DrawLine(startPosX, startPosY, endPosX, endPosY, *color);
}

// Draw a line (using gl lines)
void wrapped_DrawLineV(Vector2* startPos, Vector2* endPos, Color* color) {
  DrawLineV(*startPos, *endPos, *color);
}

// Draw a line (using triangles/quads)
void wrapped_DrawLineEx(Vector2* startPos, Vector2* endPos, float thick, Color* color) {
  DrawLineEx(*startPos, *endPos, thick, *color);
}

// Draw lines sequence (using gl lines)
void wrapped_DrawLineStrip(Vector2 ** points, int pointCount, Color* color) {
  DrawLineStrip(*points, pointCount, *color);
}

// Draw a color-filled circle
void wrapped_DrawCircle(int centerX, int centerY, float radius, Color* color) {
  DrawCircle(centerX, centerY, radius, *color);
}

// Draw a piece of a circle
void wrapped_DrawCircleSector(Vector2* center, float radius, float startAngle, float endAngle, int segments, Color* color) {
  DrawCircleSector(*center, radius, startAngle, endAngle, segments, *color);
}

// Draw circle sector outline
void wrapped_DrawCircleSectorLines(Vector2* center, float radius, float startAngle, float endAngle, int segments, Color* color) {
  DrawCircleSectorLines(*center, radius, startAngle, endAngle, segments, *color);
}

// Draw a gradient-filled circle
void wrapped_DrawCircleGradient(int centerX, int centerY, float radius, Color* color1, Color* color2) {
  DrawCircleGradient(centerX, centerY, radius, *color1, *color2);
}

// Draw a color-filled circle (Vector version)
void wrapped_DrawCircleV(Vector2* center, float radius, Color* color) {
  DrawCircleV(*center, radius, *color);
}

// Draw circle outline
void wrapped_DrawCircleLines(int centerX, int centerY, float radius, Color* color) {
  DrawCircleLines(centerX, centerY, radius, *color);
}

// Draw ellipse
void wrapped_DrawEllipse(int centerX, int centerY, float radiusH, float radiusV, Color* color) {
  DrawEllipse(centerX, centerY, radiusH, radiusV, *color);
}

// Draw ellipse outline
void wrapped_DrawEllipseLines(int centerX, int centerY, float radiusH, float radiusV, Color* color) {
  DrawEllipseLines(centerX, centerY, radiusH, radiusV, *color);
}

// Draw ring
void wrapped_DrawRing(Vector2* center, float innerRadius, float outerRadius, float startAngle, float endAngle, int segments, Color* color) {
  DrawRing(*center, innerRadius, outerRadius, startAngle, endAngle, segments, *color);
}

// Draw ring outline
void wrapped_DrawRingLines(Vector2* center, float innerRadius, float outerRadius, float startAngle, float endAngle, int segments, Color* color) {
  DrawRingLines(*center, innerRadius, outerRadius, startAngle, endAngle, segments, *color);
}

// Draw a color-filled rectangle
void wrapped_DrawRectangle(int posX, int posY, int width, int height, Color* color) {
  DrawRectangle(posX, posY, width, height, *color);
}

// Draw a color-filled rectangle (Vector version)
void wrapped_DrawRectangleV(Vector2* position, Vector2* size, Color* color) {
  DrawRectangleV(*position, *size, *color);
}

// Draw a color-filled rectangle
void wrapped_DrawRectangleRec(Rectangle* rec, Color* color) {
  DrawRectangleRec(*rec, *color);
}

// Draw a color-filled rectangle with pro parameters
void wrapped_DrawRectanglePro(Rectangle* rec, Vector2* origin, float rotation, Color* color) {
  DrawRectanglePro(*rec, *origin, rotation, *color);
}

// Draw a vertical-gradient-filled rectangle
void wrapped_DrawRectangleGradientV(int posX, int posY, int width, int height, Color* color1, Color* color2) {
  DrawRectangleGradientV(posX, posY, width, height, *color1, *color2);
}

// Draw a horizontal-gradient-filled rectangle
void wrapped_DrawRectangleGradientH(int posX, int posY, int width, int height, Color* color1, Color* color2) {
  DrawRectangleGradientH(posX, posY, width, height, *color1, *color2);
}

// Draw a gradient-filled rectangle with custom vertex colors
void wrapped_DrawRectangleGradientEx(Rectangle* rec, Color* col1, Color* col2, Color* col3, Color* col4) {
  DrawRectangleGradientEx(*rec, *col1, *col2, *col3, *col4);
}

// Draw rectangle outline
void wrapped_DrawRectangleLines(int posX, int posY, int width, int height, Color* color) {
  DrawRectangleLines(posX, posY, width, height, *color);
}

// Draw rectangle outline with extended parameters
void wrapped_DrawRectangleLinesEx(Rectangle* rec, float lineThick, Color* color) {
  DrawRectangleLinesEx(*rec, lineThick, *color);
}

// Draw rectangle with rounded edges
void wrapped_DrawRectangleRounded(Rectangle* rec, float roundness, int segments, Color* color) {
  DrawRectangleRounded(*rec, roundness, segments, *color);
}

// Draw rectangle with rounded edges outline
void wrapped_DrawRectangleRoundedLines(Rectangle* rec, float roundness, int segments, float lineThick, Color* color) {
  DrawRectangleRoundedLines(*rec, roundness, segments, lineThick, *color);
}

// Draw a color-filled triangle (vertex in counter-clockwise order!)
void wrapped_DrawTriangle(Vector2* v1, Vector2* v2, Vector2* v3, Color* color) {
  DrawTriangle(*v1, *v2, *v3, *color);
}

// Draw triangle outline (vertex in counter-clockwise order!)
void wrapped_DrawTriangleLines(Vector2* v1, Vector2* v2, Vector2* v3, Color* color) {
  DrawTriangleLines(*v1, *v2, *v3, *color);
}

// Draw a triangle fan defined by points (first vertex is the center)
void wrapped_DrawTriangleFan(Vector2 ** points, int pointCount, Color* color) {
  DrawTriangleFan(*points, pointCount, *color);
}

// Draw a triangle strip defined by points
void wrapped_DrawTriangleStrip(Vector2 ** points, int pointCount, Color* color) {
  DrawTriangleStrip(*points, pointCount, *color);
}

// Draw a regular polygon (Vector version)
void wrapped_DrawPoly(Vector2* center, int sides, float radius, float rotation, Color* color) {
  DrawPoly(*center, sides, radius, rotation, *color);
}

// Draw a polygon outline of n sides
void wrapped_DrawPolyLines(Vector2* center, int sides, float radius, float rotation, Color* color) {
  DrawPolyLines(*center, sides, radius, rotation, *color);
}

// Draw a polygon outline of n sides with extended parameters
void wrapped_DrawPolyLinesEx(Vector2* center, int sides, float radius, float rotation, float lineThick, Color* color) {
  DrawPolyLinesEx(*center, sides, radius, rotation, lineThick, *color);
}

// Check collision between two rectangles
bool wrapped_CheckCollisionRecs(Rectangle* rec1, Rectangle* rec2) {
  return CheckCollisionRecs(*rec1, *rec2);
}

// Check collision between two circles
bool wrapped_CheckCollisionCircles(Vector2* center1, float radius1, Vector2* center2, float radius2) {
  return CheckCollisionCircles(*center1, radius1, *center2, radius2);
}

// Check collision between circle and rectangle
bool wrapped_CheckCollisionCircleRec(Vector2* center, float radius, Rectangle* rec) {
  return CheckCollisionCircleRec(*center, radius, *rec);
}

// Check if point is inside rectangle
bool wrapped_CheckCollisionPointRec(Vector2* point, Rectangle* rec) {
  return CheckCollisionPointRec(*point, *rec);
}

// Check if point is inside circle
bool wrapped_CheckCollisionPointCircle(Vector2* point, Vector2* center, float radius) {
  return CheckCollisionPointCircle(*point, *center, radius);
}

// Check if point is inside a triangle
bool wrapped_CheckCollisionPointTriangle(Vector2* point, Vector2* p1, Vector2* p2, Vector2* p3) {
  return CheckCollisionPointTriangle(*point, *p1, *p2, *p3);
}

// Check if point is within a polygon described by array of vertices
bool wrapped_CheckCollisionPointPoly(Vector2* point, Vector2 ** points, int pointCount) {
  return CheckCollisionPointPoly(*point, *points, pointCount);
}

// Check the collision between two lines defined by two points each, returns collision point by reference
bool wrapped_CheckCollisionLines(Vector2* startPos1, Vector2* endPos1, Vector2* startPos2, Vector2* endPos2, Vector2 ** collisionPoint) {
  return CheckCollisionLines(*startPos1, *endPos1, *startPos2, *endPos2, *collisionPoint);
}

// Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold]
bool wrapped_CheckCollisionPointLine(Vector2* point, Vector2* p1, Vector2* p2, int threshold) {
  return CheckCollisionPointLine(*point, *p1, *p2, threshold);
}

// Get collision rectangle for two rectangles collision
Rectangle* wrapped_GetCollisionRec(Rectangle* rec1, Rectangle* rec2) {
  Rectangle* _ret = wrapped_alloc(sizeof(Rectangle));
  *_ret = GetCollisionRec(*rec1, *rec2);
  return _ret;
}

// Load image from file into CPU memory (RAM)
Image* wrapped_LoadImage(const char * fileName) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = LoadImage(fileName);
  return _ret;
}

// Load image from RAW file data
Image* wrapped_LoadImageRaw(const char * fileName, int width, int height, int format, int headerSize) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = LoadImageRaw(fileName, width, height, format, headerSize);
  return _ret;
}

// Load image from SVG file data or string with specified size
Image* wrapped_LoadImageSvg(const char * fileNameOrString, int width, int height) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = LoadImageSvg(fileNameOrString, width, height);
  return _ret;
}

// Load image sequence from file (frames appended to image.data)
Image* wrapped_LoadImageAnim(const char * fileName, int * frames) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = LoadImageAnim(fileName, frames);
  return _ret;
}

// Load image from memory buffer, fileType refers to extension: i.e. '.png'
Image* wrapped_LoadImageFromMemory(const char * fileType, const unsigned char * fileData, int dataSize) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = LoadImageFromMemory(fileType, fileData, dataSize);
  return _ret;
}

// Load image from GPU texture data
Image* wrapped_LoadImageFromTexture(Texture2D* texture) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = LoadImageFromTexture(*texture);
  return _ret;
}

// Load image from screen buffer and (screenshot)
Image* wrapped_LoadImageFromScreen() {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = LoadImageFromScreen();
  return _ret;
}

// Check if an image is ready
bool wrapped_IsImageReady(Image* image) {
  return IsImageReady(*image);
}

// Unload image from CPU memory (RAM)
void wrapped_UnloadImage(Image* image) {
  UnloadImage(*image);
}

// Export image data to file, returns true on success
bool wrapped_ExportImage(Image* image, const char * fileName) {
  return ExportImage(*image, fileName);
}

// Export image to memory buffer
unsigned char * wrapped_ExportImageToMemory(Image* image, const char * fileType, int * fileSize) {
  return ExportImageToMemory(*image, fileType, fileSize);
}

// Export image as code file defining an array of bytes, returns true on success
bool wrapped_ExportImageAsCode(Image* image, const char * fileName) {
  return ExportImageAsCode(*image, fileName);
}

// Generate image: plain color
Image* wrapped_GenImageColor(int width, int height, Color* color) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = GenImageColor(width, height, *color);
  return _ret;
}

// Generate image: linear gradient, direction in degrees [0..360], 0=Vertical gradient
Image* wrapped_GenImageGradientLinear(int width, int height, int direction, Color* start, Color* end) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = GenImageGradientLinear(width, height, direction, *start, *end);
  return _ret;
}

// Generate image: radial gradient
Image* wrapped_GenImageGradientRadial(int width, int height, float density, Color* inner, Color* outer) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = GenImageGradientRadial(width, height, density, *inner, *outer);
  return _ret;
}

// Generate image: square gradient
Image* wrapped_GenImageGradientSquare(int width, int height, float density, Color* inner, Color* outer) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = GenImageGradientSquare(width, height, density, *inner, *outer);
  return _ret;
}

// Generate image: checked
Image* wrapped_GenImageChecked(int width, int height, int checksX, int checksY, Color* col1, Color* col2) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = GenImageChecked(width, height, checksX, checksY, *col1, *col2);
  return _ret;
}

// Generate image: white noise
Image* wrapped_GenImageWhiteNoise(int width, int height, float factor) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = GenImageWhiteNoise(width, height, factor);
  return _ret;
}

// Generate image: perlin noise
Image* wrapped_GenImagePerlinNoise(int width, int height, int offsetX, int offsetY, float scale) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = GenImagePerlinNoise(width, height, offsetX, offsetY, scale);
  return _ret;
}

// Generate image: cellular algorithm, bigger tileSize means bigger cells
Image* wrapped_GenImageCellular(int width, int height, int tileSize) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = GenImageCellular(width, height, tileSize);
  return _ret;
}

// Generate image: grayscale image from text data
Image* wrapped_GenImageText(int width, int height, const char * text) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = GenImageText(width, height, text);
  return _ret;
}

// Create an image duplicate (useful for transformations)
Image* wrapped_ImageCopy(Image* image) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = ImageCopy(*image);
  return _ret;
}

// Create an image from another image piece
Image* wrapped_ImageFromImage(Image* image, Rectangle* rec) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = ImageFromImage(*image, *rec);
  return _ret;
}

// Create an image from text (default font)
Image* wrapped_ImageText(const char * text, int fontSize, Color* color) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = ImageText(text, fontSize, *color);
  return _ret;
}

// Create an image from text (custom sprite font)
Image* wrapped_ImageTextEx(Font* font, const char * text, float fontSize, float spacing, Color* tint) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = ImageTextEx(*font, text, fontSize, spacing, *tint);
  return _ret;
}

// Convert image data to desired format
void wrapped_ImageFormat(Image ** image, int newFormat) {
  ImageFormat(*image, newFormat);
}

// Convert image to POT (power-of-two)
void wrapped_ImageToPOT(Image ** image, Color* fill) {
  ImageToPOT(*image, *fill);
}

// Crop an image to a defined rectangle
void wrapped_ImageCrop(Image ** image, Rectangle* crop) {
  ImageCrop(*image, *crop);
}

// Crop image depending on alpha value
void wrapped_ImageAlphaCrop(Image ** image, float threshold) {
  ImageAlphaCrop(*image, threshold);
}

// Clear alpha channel to desired color
void wrapped_ImageAlphaClear(Image ** image, Color* color, float threshold) {
  ImageAlphaClear(*image, *color, threshold);
}

// Apply alpha mask to image
void wrapped_ImageAlphaMask(Image ** image, Image* alphaMask) {
  ImageAlphaMask(*image, *alphaMask);
}

// Premultiply alpha channel
void wrapped_ImageAlphaPremultiply(Image ** image) {
  ImageAlphaPremultiply(*image);
}

// Apply Gaussian blur using a box blur approximation
void wrapped_ImageBlurGaussian(Image ** image, int blurSize) {
  ImageBlurGaussian(*image, blurSize);
}

// Resize image (Bicubic scaling algorithm)
void wrapped_ImageResize(Image ** image, int newWidth, int newHeight) {
  ImageResize(*image, newWidth, newHeight);
}

// Resize image (Nearest-Neighbor scaling algorithm)
void wrapped_ImageResizeNN(Image ** image, int newWidth, int newHeight) {
  ImageResizeNN(*image, newWidth, newHeight);
}

// Resize canvas and fill with color
void wrapped_ImageResizeCanvas(Image ** image, int newWidth, int newHeight, int offsetX, int offsetY, Color* fill) {
  ImageResizeCanvas(*image, newWidth, newHeight, offsetX, offsetY, *fill);
}

// Compute all mipmap levels for a provided image
void wrapped_ImageMipmaps(Image ** image) {
  ImageMipmaps(*image);
}

// Dither image data to 16bpp or lower (Floyd-Steinberg dithering)
void wrapped_ImageDither(Image ** image, int rBpp, int gBpp, int bBpp, int aBpp) {
  ImageDither(*image, rBpp, gBpp, bBpp, aBpp);
}

// Flip image vertically
void wrapped_ImageFlipVertical(Image ** image) {
  ImageFlipVertical(*image);
}

// Flip image horizontally
void wrapped_ImageFlipHorizontal(Image ** image) {
  ImageFlipHorizontal(*image);
}

// Rotate image by input angle in degrees (-359 to 359)
void wrapped_ImageRotate(Image ** image, int degrees) {
  ImageRotate(*image, degrees);
}

// Rotate image clockwise 90deg
void wrapped_ImageRotateCW(Image ** image) {
  ImageRotateCW(*image);
}

// Rotate image counter-clockwise 90deg
void wrapped_ImageRotateCCW(Image ** image) {
  ImageRotateCCW(*image);
}

// Modify image color: tint
void wrapped_ImageColorTint(Image ** image, Color* color) {
  ImageColorTint(*image, *color);
}

// Modify image color: invert
void wrapped_ImageColorInvert(Image ** image) {
  ImageColorInvert(*image);
}

// Modify image color: grayscale
void wrapped_ImageColorGrayscale(Image ** image) {
  ImageColorGrayscale(*image);
}

// Modify image color: contrast (-100 to 100)
void wrapped_ImageColorContrast(Image ** image, float contrast) {
  ImageColorContrast(*image, contrast);
}

// Modify image color: brightness (-255 to 255)
void wrapped_ImageColorBrightness(Image ** image, int brightness) {
  ImageColorBrightness(*image, brightness);
}

// Modify image color: replace color
void wrapped_ImageColorReplace(Image ** image, Color* color, Color* replace) {
  ImageColorReplace(*image, *color, *replace);
}

// Load color data from image as a Color array (RGBA - 32bit)
Color ** wrapped_LoadImageColors(Image* image) {
  Color ** _ret = wrapped_alloc(sizeof(Color *));
  *_ret = LoadImageColors(*image);
  return _ret;
}

// Load colors palette from image as a Color array (RGBA - 32bit)
Color ** wrapped_LoadImagePalette(Image* image, int maxPaletteSize, int * colorCount) {
  Color ** _ret = wrapped_alloc(sizeof(Color *));
  *_ret = LoadImagePalette(*image, maxPaletteSize, colorCount);
  return _ret;
}

// Unload color data loaded with LoadImageColors()
void wrapped_UnloadImageColors(Color ** colors) {
  UnloadImageColors(*colors);
}

// Unload colors palette loaded with LoadImagePalette()
void wrapped_UnloadImagePalette(Color ** colors) {
  UnloadImagePalette(*colors);
}

// Get image alpha border rectangle
Rectangle* wrapped_GetImageAlphaBorder(Image* image, float threshold) {
  Rectangle* _ret = wrapped_alloc(sizeof(Rectangle));
  *_ret = GetImageAlphaBorder(*image, threshold);
  return _ret;
}

// Get image pixel color at (x, y) position
Color* wrapped_GetImageColor(Image* image, int x, int y) {
  Color* _ret = wrapped_alloc(sizeof(Color));
  *_ret = GetImageColor(*image, x, y);
  return _ret;
}

// Clear image background with given color
void wrapped_ImageClearBackground(Image ** dst, Color* color) {
  ImageClearBackground(*dst, *color);
}

// Draw pixel within an image
void wrapped_ImageDrawPixel(Image ** dst, int posX, int posY, Color* color) {
  ImageDrawPixel(*dst, posX, posY, *color);
}

// Draw pixel within an image (Vector version)
void wrapped_ImageDrawPixelV(Image ** dst, Vector2* position, Color* color) {
  ImageDrawPixelV(*dst, *position, *color);
}

// Draw line within an image
void wrapped_ImageDrawLine(Image ** dst, int startPosX, int startPosY, int endPosX, int endPosY, Color* color) {
  ImageDrawLine(*dst, startPosX, startPosY, endPosX, endPosY, *color);
}

// Draw line within an image (Vector version)
void wrapped_ImageDrawLineV(Image ** dst, Vector2* start, Vector2* end, Color* color) {
  ImageDrawLineV(*dst, *start, *end, *color);
}

// Draw a filled circle within an image
void wrapped_ImageDrawCircle(Image ** dst, int centerX, int centerY, int radius, Color* color) {
  ImageDrawCircle(*dst, centerX, centerY, radius, *color);
}

// Draw a filled circle within an image (Vector version)
void wrapped_ImageDrawCircleV(Image ** dst, Vector2* center, int radius, Color* color) {
  ImageDrawCircleV(*dst, *center, radius, *color);
}

// Draw circle outline within an image
void wrapped_ImageDrawCircleLines(Image ** dst, int centerX, int centerY, int radius, Color* color) {
  ImageDrawCircleLines(*dst, centerX, centerY, radius, *color);
}

// Draw circle outline within an image (Vector version)
void wrapped_ImageDrawCircleLinesV(Image ** dst, Vector2* center, int radius, Color* color) {
  ImageDrawCircleLinesV(*dst, *center, radius, *color);
}

// Draw rectangle within an image
void wrapped_ImageDrawRectangle(Image ** dst, int posX, int posY, int width, int height, Color* color) {
  ImageDrawRectangle(*dst, posX, posY, width, height, *color);
}

// Draw rectangle within an image (Vector version)
void wrapped_ImageDrawRectangleV(Image ** dst, Vector2* position, Vector2* size, Color* color) {
  ImageDrawRectangleV(*dst, *position, *size, *color);
}

// Draw rectangle within an image
void wrapped_ImageDrawRectangleRec(Image ** dst, Rectangle* rec, Color* color) {
  ImageDrawRectangleRec(*dst, *rec, *color);
}

// Draw rectangle lines within an image
void wrapped_ImageDrawRectangleLines(Image ** dst, Rectangle* rec, int thick, Color* color) {
  ImageDrawRectangleLines(*dst, *rec, thick, *color);
}

// Draw a source image within a destination image (tint applied to source)
void wrapped_ImageDraw(Image ** dst, Image* src, Rectangle* srcRec, Rectangle* dstRec, Color* tint) {
  ImageDraw(*dst, *src, *srcRec, *dstRec, *tint);
}

// Draw text (using default font) within an image (destination)
void wrapped_ImageDrawText(Image ** dst, const char * text, int posX, int posY, int fontSize, Color* color) {
  ImageDrawText(*dst, text, posX, posY, fontSize, *color);
}

// Draw text (custom sprite font) within an image (destination)
void wrapped_ImageDrawTextEx(Image ** dst, Font* font, const char * text, Vector2* position, float fontSize, float spacing, Color* tint) {
  ImageDrawTextEx(*dst, *font, text, *position, fontSize, spacing, *tint);
}

// Load texture from file into GPU memory (VRAM)
Texture2D* wrapped_LoadTexture(const char * fileName) {
  Texture2D* _ret = wrapped_alloc(sizeof(Texture2D));
  *_ret = LoadTexture(fileName);
  return _ret;
}

// Load texture from image data
Texture2D* wrapped_LoadTextureFromImage(Image* image) {
  Texture2D* _ret = wrapped_alloc(sizeof(Texture2D));
  *_ret = LoadTextureFromImage(*image);
  return _ret;
}

// Load cubemap from image, multiple image cubemap layouts supported
TextureCubemap* wrapped_LoadTextureCubemap(Image* image, int layout) {
  TextureCubemap* _ret = wrapped_alloc(sizeof(TextureCubemap));
  *_ret = LoadTextureCubemap(*image, layout);
  return _ret;
}

// Load texture for rendering (framebuffer)
RenderTexture2D* wrapped_LoadRenderTexture(int width, int height) {
  RenderTexture2D* _ret = wrapped_alloc(sizeof(RenderTexture2D));
  *_ret = LoadRenderTexture(width, height);
  return _ret;
}

// Check if a texture is ready
bool wrapped_IsTextureReady(Texture2D* texture) {
  return IsTextureReady(*texture);
}

// Unload texture from GPU memory (VRAM)
void wrapped_UnloadTexture(Texture2D* texture) {
  UnloadTexture(*texture);
}

// Check if a render texture is ready
bool wrapped_IsRenderTextureReady(RenderTexture2D* target) {
  return IsRenderTextureReady(*target);
}

// Unload render texture from GPU memory (VRAM)
void wrapped_UnloadRenderTexture(RenderTexture2D* target) {
  UnloadRenderTexture(*target);
}

// Update GPU texture with new data
void wrapped_UpdateTexture(Texture2D* texture, const void * pixels) {
  UpdateTexture(*texture, pixels);
}

// Update GPU texture rectangle with new data
void wrapped_UpdateTextureRec(Texture2D* texture, Rectangle* rec, const void * pixels) {
  UpdateTextureRec(*texture, *rec, pixels);
}

// Generate GPU mipmaps for a texture
void wrapped_GenTextureMipmaps(Texture2D ** texture) {
  GenTextureMipmaps(*texture);
}

// Set texture scaling filter mode
void wrapped_SetTextureFilter(Texture2D* texture, int filter) {
  SetTextureFilter(*texture, filter);
}

// Set texture wrapping mode
void wrapped_SetTextureWrap(Texture2D* texture, int wrap) {
  SetTextureWrap(*texture, wrap);
}

// Draw a Texture2D
void wrapped_DrawTexture(Texture2D* texture, int posX, int posY, Color* tint) {
  DrawTexture(*texture, posX, posY, *tint);
}

// Draw a Texture2D with position defined as Vector2
void wrapped_DrawTextureV(Texture2D* texture, Vector2* position, Color* tint) {
  DrawTextureV(*texture, *position, *tint);
}

// Draw a Texture2D with extended parameters
void wrapped_DrawTextureEx(Texture2D* texture, Vector2* position, float rotation, float scale, Color* tint) {
  DrawTextureEx(*texture, *position, rotation, scale, *tint);
}

// Draw a part of a texture defined by a rectangle
void wrapped_DrawTextureRec(Texture2D* texture, Rectangle* source, Vector2* position, Color* tint) {
  DrawTextureRec(*texture, *source, *position, *tint);
}

// Draw a part of a texture defined by a rectangle with 'pro' parameters
void wrapped_DrawTexturePro(Texture2D* texture, Rectangle* source, Rectangle* dest, Vector2* origin, float rotation, Color* tint) {
  DrawTexturePro(*texture, *source, *dest, *origin, rotation, *tint);
}

// Draws a texture (or part of it) that stretches or shrinks nicely
void wrapped_DrawTextureNPatch(Texture2D* texture, NPatchInfo* nPatchInfo, Rectangle* dest, Vector2* origin, float rotation, Color* tint) {
  DrawTextureNPatch(*texture, *nPatchInfo, *dest, *origin, rotation, *tint);
}

// Get color with alpha applied, alpha goes from 0.0f to 1.0f
Color* wrapped_Fade(Color* color, float alpha) {
  Color* _ret = wrapped_alloc(sizeof(Color));
  *_ret = Fade(*color, alpha);
  return _ret;
}

// Get hexadecimal value for a Color
int wrapped_ColorToInt(Color* color) {
  return ColorToInt(*color);
}

// Get Color normalized as float [0..1]
Vector4* wrapped_ColorNormalize(Color* color) {
  Vector4* _ret = wrapped_alloc(sizeof(Vector4));
  *_ret = ColorNormalize(*color);
  return _ret;
}

// Get Color from normalized values [0..1]
Color* wrapped_ColorFromNormalized(Vector4* normalized) {
  Color* _ret = wrapped_alloc(sizeof(Color));
  *_ret = ColorFromNormalized(*normalized);
  return _ret;
}

// Get HSV values for a Color, hue [0..360], saturation/value [0..1]
Vector3* wrapped_ColorToHSV(Color* color) {
  Vector3* _ret = wrapped_alloc(sizeof(Vector3));
  *_ret = ColorToHSV(*color);
  return _ret;
}

// Get a Color from HSV values, hue [0..360], saturation/value [0..1]
Color* wrapped_ColorFromHSV(float hue, float saturation, float value) {
  Color* _ret = wrapped_alloc(sizeof(Color));
  *_ret = ColorFromHSV(hue, saturation, value);
  return _ret;
}

// Get color multiplied with another color
Color* wrapped_ColorTint(Color* color, Color* tint) {
  Color* _ret = wrapped_alloc(sizeof(Color));
  *_ret = ColorTint(*color, *tint);
  return _ret;
}

// Get color with brightness correction, brightness factor goes from -1.0f to 1.0f
Color* wrapped_ColorBrightness(Color* color, float factor) {
  Color* _ret = wrapped_alloc(sizeof(Color));
  *_ret = ColorBrightness(*color, factor);
  return _ret;
}

// Get color with contrast correction, contrast values between -1.0f and 1.0f
Color* wrapped_ColorContrast(Color* color, float contrast) {
  Color* _ret = wrapped_alloc(sizeof(Color));
  *_ret = ColorContrast(*color, contrast);
  return _ret;
}

// Get color with alpha applied, alpha goes from 0.0f to 1.0f
Color* wrapped_ColorAlpha(Color* color, float alpha) {
  Color* _ret = wrapped_alloc(sizeof(Color));
  *_ret = ColorAlpha(*color, alpha);
  return _ret;
}

// Get src alpha-blended into dst color with tint
Color* wrapped_ColorAlphaBlend(Color* dst, Color* src, Color* tint) {
  Color* _ret = wrapped_alloc(sizeof(Color));
  *_ret = ColorAlphaBlend(*dst, *src, *tint);
  return _ret;
}

// Get Color structure from hexadecimal value
Color* wrapped_GetColor(unsigned int hexValue) {
  Color* _ret = wrapped_alloc(sizeof(Color));
  *_ret = GetColor(hexValue);
  return _ret;
}

// Get Color from a source pixel pointer of certain format
Color* wrapped_GetPixelColor(void * srcPtr, int format) {
  Color* _ret = wrapped_alloc(sizeof(Color));
  *_ret = GetPixelColor(srcPtr, format);
  return _ret;
}

// Set color formatted into destination pixel pointer
void wrapped_SetPixelColor(void * dstPtr, Color* color, int format) {
  SetPixelColor(dstPtr, *color, format);
}

// Get the default Font
Font* wrapped_GetFontDefault() {
  Font* _ret = wrapped_alloc(sizeof(Font));
  *_ret = GetFontDefault();
  return _ret;
}

// Load font from file into GPU memory (VRAM)
Font* wrapped_LoadFont(const char * fileName) {
  Font* _ret = wrapped_alloc(sizeof(Font));
  *_ret = LoadFont(fileName);
  return _ret;
}

// Load font from file with extended parameters, use NULL for codepoints and 0 for codepointCount to load the default character setFont
Font* wrapped_LoadFontEx(const char * fileName, int fontSize, int * codepoints, int codepointCount) {
  Font* _ret = wrapped_alloc(sizeof(Font));
  *_ret = LoadFontEx(fileName, fontSize, codepoints, codepointCount);
  return _ret;
}

// Load font from Image (XNA style)
Font* wrapped_LoadFontFromImage(Image* image, Color* key, int firstChar) {
  Font* _ret = wrapped_alloc(sizeof(Font));
  *_ret = LoadFontFromImage(*image, *key, firstChar);
  return _ret;
}

// Load font from memory buffer, fileType refers to extension: i.e. '.ttf'
Font* wrapped_LoadFontFromMemory(const char * fileType, const unsigned char * fileData, int dataSize, int fontSize, int * codepoints, int codepointCount) {
  Font* _ret = wrapped_alloc(sizeof(Font));
  *_ret = LoadFontFromMemory(fileType, fileData, dataSize, fontSize, codepoints, codepointCount);
  return _ret;
}

// Check if a font is ready
bool wrapped_IsFontReady(Font* font) {
  return IsFontReady(*font);
}

// Load font data for further use
GlyphInfo ** wrapped_LoadFontData(const unsigned char * fileData, int dataSize, int fontSize, int * codepoints, int codepointCount, int type) {
  GlyphInfo ** _ret = wrapped_alloc(sizeof(GlyphInfo *));
  *_ret = LoadFontData(fileData, dataSize, fontSize, codepoints, codepointCount, type);
  return _ret;
}

// Generate image font atlas using chars info
Image* wrapped_GenImageFontAtlas(const GlyphInfo ** glyphs, Rectangle *** glyphRecs, int glyphCount, int fontSize, int padding, int packMethod) {
  Image* _ret = wrapped_alloc(sizeof(Image));
  *_ret = GenImageFontAtlas(glyphs, *glyphRecs, glyphCount, fontSize, padding, packMethod);
  return _ret;
}

// Unload font chars info data (RAM)
void wrapped_UnloadFontData(GlyphInfo ** glyphs, int glyphCount) {
  UnloadFontData(*glyphs, glyphCount);
}

// Unload font from GPU memory (VRAM)
void wrapped_UnloadFont(Font* font) {
  UnloadFont(*font);
}

// Export font as code file, returns true on success
bool wrapped_ExportFontAsCode(Font* font, const char * fileName) {
  return ExportFontAsCode(*font, fileName);
}

// Draw text (using default font)
void wrapped_DrawText(const char * text, int posX, int posY, int fontSize, Color* color) {
  DrawText(text, posX, posY, fontSize, *color);
}

// Draw text using font and additional parameters
void wrapped_DrawTextEx(Font* font, const char * text, Vector2* position, float fontSize, float spacing, Color* tint) {
  DrawTextEx(*font, text, *position, fontSize, spacing, *tint);
}

// Draw text using Font and pro parameters (rotation)
void wrapped_DrawTextPro(Font* font, const char * text, Vector2* position, Vector2* origin, float rotation, float fontSize, float spacing, Color* tint) {
  DrawTextPro(*font, text, *position, *origin, rotation, fontSize, spacing, *tint);
}

// Draw one character (codepoint)
void wrapped_DrawTextCodepoint(Font* font, int codepoint, Vector2* position, float fontSize, Color* tint) {
  DrawTextCodepoint(*font, codepoint, *position, fontSize, *tint);
}

// Draw multiple character (codepoint)
void wrapped_DrawTextCodepoints(Font* font, const int * codepoints, int codepointCount, Vector2* position, float fontSize, float spacing, Color* tint) {
  DrawTextCodepoints(*font, codepoints, codepointCount, *position, fontSize, spacing, *tint);
}

// Measure string size for Font
Vector2* wrapped_MeasureTextEx(Font* font, const char * text, float fontSize, float spacing) {
  Vector2* _ret = wrapped_alloc(sizeof(Vector2));
  *_ret = MeasureTextEx(*font, text, fontSize, spacing);
  return _ret;
}

// Get glyph index position in font for a codepoint (unicode character), fallback to '?' if not found
int wrapped_GetGlyphIndex(Font* font, int codepoint) {
  return GetGlyphIndex(*font, codepoint);
}

// Get glyph font info data for a codepoint (unicode character), fallback to '?' if not found
GlyphInfo* wrapped_GetGlyphInfo(Font* font, int codepoint) {
  GlyphInfo* _ret = wrapped_alloc(sizeof(GlyphInfo));
  *_ret = GetGlyphInfo(*font, codepoint);
  return _ret;
}

// Get glyph rectangle in font atlas for a codepoint (unicode character), fallback to '?' if not found
Rectangle* wrapped_GetGlyphAtlasRec(Font* font, int codepoint) {
  Rectangle* _ret = wrapped_alloc(sizeof(Rectangle));
  *_ret = GetGlyphAtlasRec(*font, codepoint);
  return _ret;
}

// Draw a line in 3D world space
void wrapped_DrawLine3D(Vector3* startPos, Vector3* endPos, Color* color) {
  DrawLine3D(*startPos, *endPos, *color);
}

// Draw a point in 3D space, actually a small line
void wrapped_DrawPoint3D(Vector3* position, Color* color) {
  DrawPoint3D(*position, *color);
}

// Draw a circle in 3D world space
void wrapped_DrawCircle3D(Vector3* center, float radius, Vector3* rotationAxis, float rotationAngle, Color* color) {
  DrawCircle3D(*center, radius, *rotationAxis, rotationAngle, *color);
}

// Draw a color-filled triangle (vertex in counter-clockwise order!)
void wrapped_DrawTriangle3D(Vector3* v1, Vector3* v2, Vector3* v3, Color* color) {
  DrawTriangle3D(*v1, *v2, *v3, *color);
}

// Draw a triangle strip defined by points
void wrapped_DrawTriangleStrip3D(Vector3 ** points, int pointCount, Color* color) {
  DrawTriangleStrip3D(*points, pointCount, *color);
}

// Draw cube
void wrapped_DrawCube(Vector3* position, float width, float height, float length, Color* color) {
  DrawCube(*position, width, height, length, *color);
}

// Draw cube (Vector version)
void wrapped_DrawCubeV(Vector3* position, Vector3* size, Color* color) {
  DrawCubeV(*position, *size, *color);
}

// Draw cube wires
void wrapped_DrawCubeWires(Vector3* position, float width, float height, float length, Color* color) {
  DrawCubeWires(*position, width, height, length, *color);
}

// Draw cube wires (Vector version)
void wrapped_DrawCubeWiresV(Vector3* position, Vector3* size, Color* color) {
  DrawCubeWiresV(*position, *size, *color);
}

// Draw sphere
void wrapped_DrawSphere(Vector3* centerPos, float radius, Color* color) {
  DrawSphere(*centerPos, radius, *color);
}

// Draw sphere with extended parameters
void wrapped_DrawSphereEx(Vector3* centerPos, float radius, int rings, int slices, Color* color) {
  DrawSphereEx(*centerPos, radius, rings, slices, *color);
}

// Draw sphere wires
void wrapped_DrawSphereWires(Vector3* centerPos, float radius, int rings, int slices, Color* color) {
  DrawSphereWires(*centerPos, radius, rings, slices, *color);
}

// Draw a cylinder/cone
void wrapped_DrawCylinder(Vector3* position, float radiusTop, float radiusBottom, float height, int slices, Color* color) {
  DrawCylinder(*position, radiusTop, radiusBottom, height, slices, *color);
}

// Draw a cylinder with base at startPos and top at endPos
void wrapped_DrawCylinderEx(Vector3* startPos, Vector3* endPos, float startRadius, float endRadius, int sides, Color* color) {
  DrawCylinderEx(*startPos, *endPos, startRadius, endRadius, sides, *color);
}

// Draw a cylinder/cone wires
void wrapped_DrawCylinderWires(Vector3* position, float radiusTop, float radiusBottom, float height, int slices, Color* color) {
  DrawCylinderWires(*position, radiusTop, radiusBottom, height, slices, *color);
}

// Draw a cylinder wires with base at startPos and top at endPos
void wrapped_DrawCylinderWiresEx(Vector3* startPos, Vector3* endPos, float startRadius, float endRadius, int sides, Color* color) {
  DrawCylinderWiresEx(*startPos, *endPos, startRadius, endRadius, sides, *color);
}

// Draw a capsule with the center of its sphere caps at startPos and endPos
void wrapped_DrawCapsule(Vector3* startPos, Vector3* endPos, float radius, int slices, int rings, Color* color) {
  DrawCapsule(*startPos, *endPos, radius, slices, rings, *color);
}

// Draw capsule wireframe with the center of its sphere caps at startPos and endPos
void wrapped_DrawCapsuleWires(Vector3* startPos, Vector3* endPos, float radius, int slices, int rings, Color* color) {
  DrawCapsuleWires(*startPos, *endPos, radius, slices, rings, *color);
}

// Draw a plane XZ
void wrapped_DrawPlane(Vector3* centerPos, Vector2* size, Color* color) {
  DrawPlane(*centerPos, *size, *color);
}

// Draw a ray line
void wrapped_DrawRay(Ray* ray, Color* color) {
  DrawRay(*ray, *color);
}

// Load model from files (meshes and materials)
Model* wrapped_LoadModel(const char * fileName) {
  Model* _ret = wrapped_alloc(sizeof(Model));
  *_ret = LoadModel(fileName);
  return _ret;
}

// Load model from generated mesh (default material)
Model* wrapped_LoadModelFromMesh(Mesh* mesh) {
  Model* _ret = wrapped_alloc(sizeof(Model));
  *_ret = LoadModelFromMesh(*mesh);
  return _ret;
}

// Check if a model is ready
bool wrapped_IsModelReady(Model* model) {
  return IsModelReady(*model);
}

// Unload model (including meshes) from memory (RAM and/or VRAM)
void wrapped_UnloadModel(Model* model) {
  UnloadModel(*model);
}

// Compute model bounding box limits (considers all meshes)
BoundingBox* wrapped_GetModelBoundingBox(Model* model) {
  BoundingBox* _ret = wrapped_alloc(sizeof(BoundingBox));
  *_ret = GetModelBoundingBox(*model);
  return _ret;
}

// Draw a model (with texture if set)
void wrapped_DrawModel(Model* model, Vector3* position, float scale, Color* tint) {
  DrawModel(*model, *position, scale, *tint);
}

// Draw a model with extended parameters
void wrapped_DrawModelEx(Model* model, Vector3* position, Vector3* rotationAxis, float rotationAngle, Vector3* scale, Color* tint) {
  DrawModelEx(*model, *position, *rotationAxis, rotationAngle, *scale, *tint);
}

// Draw a model wires (with texture if set)
void wrapped_DrawModelWires(Model* model, Vector3* position, float scale, Color* tint) {
  DrawModelWires(*model, *position, scale, *tint);
}

// Draw a model wires (with texture if set) with extended parameters
void wrapped_DrawModelWiresEx(Model* model, Vector3* position, Vector3* rotationAxis, float rotationAngle, Vector3* scale, Color* tint) {
  DrawModelWiresEx(*model, *position, *rotationAxis, rotationAngle, *scale, *tint);
}

// Draw bounding box (wires)
void wrapped_DrawBoundingBox(BoundingBox* box, Color* color) {
  DrawBoundingBox(*box, *color);
}

// Draw a billboard texture
void wrapped_DrawBillboard(Camera* camera, Texture2D* texture, Vector3* position, float size, Color* tint) {
  DrawBillboard(*camera, *texture, *position, size, *tint);
}

// Draw a billboard texture defined by source
void wrapped_DrawBillboardRec(Camera* camera, Texture2D* texture, Rectangle* source, Vector3* position, Vector2* size, Color* tint) {
  DrawBillboardRec(*camera, *texture, *source, *position, *size, *tint);
}

// Draw a billboard texture defined by source and rotation
void wrapped_DrawBillboardPro(Camera* camera, Texture2D* texture, Rectangle* source, Vector3* position, Vector3* up, Vector2* size, Vector2* origin, float rotation, Color* tint) {
  DrawBillboardPro(*camera, *texture, *source, *position, *up, *size, *origin, rotation, *tint);
}

// Upload mesh vertex data in GPU and provide VAO/VBO ids
void wrapped_UploadMesh(Mesh ** mesh, bool dynamic) {
  UploadMesh(*mesh, dynamic);
}

// Update mesh vertex data in GPU for a specific buffer index
void wrapped_UpdateMeshBuffer(Mesh* mesh, int index, const void * data, int dataSize, int offset) {
  UpdateMeshBuffer(*mesh, index, data, dataSize, offset);
}

// Unload mesh data from CPU and GPU
void wrapped_UnloadMesh(Mesh* mesh) {
  UnloadMesh(*mesh);
}

// Draw a 3d mesh with material and transform
void wrapped_DrawMesh(Mesh* mesh, Material* material, Matrix* transform) {
  DrawMesh(*mesh, *material, *transform);
}

// Draw multiple mesh instances with material and different transforms
void wrapped_DrawMeshInstanced(Mesh* mesh, Material* material, const Matrix ** transforms, int instances) {
  DrawMeshInstanced(*mesh, *material, transforms, instances);
}

// Export mesh data to file, returns true on success
bool wrapped_ExportMesh(Mesh* mesh, const char * fileName) {
  return ExportMesh(*mesh, fileName);
}

// Compute mesh bounding box limits
BoundingBox* wrapped_GetMeshBoundingBox(Mesh* mesh) {
  BoundingBox* _ret = wrapped_alloc(sizeof(BoundingBox));
  *_ret = GetMeshBoundingBox(*mesh);
  return _ret;
}

// Compute mesh tangents
void wrapped_GenMeshTangents(Mesh ** mesh) {
  GenMeshTangents(*mesh);
}

// Generate polygonal mesh
Mesh* wrapped_GenMeshPoly(int sides, float radius) {
  Mesh* _ret = wrapped_alloc(sizeof(Mesh));
  *_ret = GenMeshPoly(sides, radius);
  return _ret;
}

// Generate plane mesh (with subdivisions)
Mesh* wrapped_GenMeshPlane(float width, float length, int resX, int resZ) {
  Mesh* _ret = wrapped_alloc(sizeof(Mesh));
  *_ret = GenMeshPlane(width, length, resX, resZ);
  return _ret;
}

// Generate cuboid mesh
Mesh* wrapped_GenMeshCube(float width, float height, float length) {
  Mesh* _ret = wrapped_alloc(sizeof(Mesh));
  *_ret = GenMeshCube(width, height, length);
  return _ret;
}

// Generate sphere mesh (standard sphere)
Mesh* wrapped_GenMeshSphere(float radius, int rings, int slices) {
  Mesh* _ret = wrapped_alloc(sizeof(Mesh));
  *_ret = GenMeshSphere(radius, rings, slices);
  return _ret;
}

// Generate half-sphere mesh (no bottom cap)
Mesh* wrapped_GenMeshHemiSphere(float radius, int rings, int slices) {
  Mesh* _ret = wrapped_alloc(sizeof(Mesh));
  *_ret = GenMeshHemiSphere(radius, rings, slices);
  return _ret;
}

// Generate cylinder mesh
Mesh* wrapped_GenMeshCylinder(float radius, float height, int slices) {
  Mesh* _ret = wrapped_alloc(sizeof(Mesh));
  *_ret = GenMeshCylinder(radius, height, slices);
  return _ret;
}

// Generate cone/pyramid mesh
Mesh* wrapped_GenMeshCone(float radius, float height, int slices) {
  Mesh* _ret = wrapped_alloc(sizeof(Mesh));
  *_ret = GenMeshCone(radius, height, slices);
  return _ret;
}

// Generate torus mesh
Mesh* wrapped_GenMeshTorus(float radius, float size, int radSeg, int sides) {
  Mesh* _ret = wrapped_alloc(sizeof(Mesh));
  *_ret = GenMeshTorus(radius, size, radSeg, sides);
  return _ret;
}

// Generate trefoil knot mesh
Mesh* wrapped_GenMeshKnot(float radius, float size, int radSeg, int sides) {
  Mesh* _ret = wrapped_alloc(sizeof(Mesh));
  *_ret = GenMeshKnot(radius, size, radSeg, sides);
  return _ret;
}

// Generate heightmap mesh from image data
Mesh* wrapped_GenMeshHeightmap(Image* heightmap, Vector3* size) {
  Mesh* _ret = wrapped_alloc(sizeof(Mesh));
  *_ret = GenMeshHeightmap(*heightmap, *size);
  return _ret;
}

// Generate cubes-based map mesh from image data
Mesh* wrapped_GenMeshCubicmap(Image* cubicmap, Vector3* cubeSize) {
  Mesh* _ret = wrapped_alloc(sizeof(Mesh));
  *_ret = GenMeshCubicmap(*cubicmap, *cubeSize);
  return _ret;
}

// Load materials from model file
Material ** wrapped_LoadMaterials(const char * fileName, int * materialCount) {
  Material ** _ret = wrapped_alloc(sizeof(Material *));
  *_ret = LoadMaterials(fileName, materialCount);
  return _ret;
}

// Load default material (Supports: DIFFUSE, SPECULAR, NORMAL maps)
Material* wrapped_LoadMaterialDefault() {
  Material* _ret = wrapped_alloc(sizeof(Material));
  *_ret = LoadMaterialDefault();
  return _ret;
}

// Check if a material is ready
bool wrapped_IsMaterialReady(Material* material) {
  return IsMaterialReady(*material);
}

// Unload material from GPU memory (VRAM)
void wrapped_UnloadMaterial(Material* material) {
  UnloadMaterial(*material);
}

// Set texture for a material map type (MATERIAL_MAP_DIFFUSE, MATERIAL_MAP_SPECULAR...)
void wrapped_SetMaterialTexture(Material ** material, int mapType, Texture2D* texture) {
  SetMaterialTexture(*material, mapType, *texture);
}

// Set material for a mesh
void wrapped_SetModelMeshMaterial(Model ** model, int meshId, int materialId) {
  SetModelMeshMaterial(*model, meshId, materialId);
}

// Load model animations from file
ModelAnimation ** wrapped_LoadModelAnimations(const char * fileName, int * animCount) {
  ModelAnimation ** _ret = wrapped_alloc(sizeof(ModelAnimation *));
  *_ret = LoadModelAnimations(fileName, animCount);
  return _ret;
}

// Update model animation pose
void wrapped_UpdateModelAnimation(Model* model, ModelAnimation* anim, int frame) {
  UpdateModelAnimation(*model, *anim, frame);
}

// Unload animation data
void wrapped_UnloadModelAnimation(ModelAnimation* anim) {
  UnloadModelAnimation(*anim);
}

// Unload animation array data
void wrapped_UnloadModelAnimations(ModelAnimation ** animations, int animCount) {
  UnloadModelAnimations(*animations, animCount);
}

// Check model animation skeleton match
bool wrapped_IsModelAnimationValid(Model* model, ModelAnimation* anim) {
  return IsModelAnimationValid(*model, *anim);
}

// Check collision between two spheres
bool wrapped_CheckCollisionSpheres(Vector3* center1, float radius1, Vector3* center2, float radius2) {
  return CheckCollisionSpheres(*center1, radius1, *center2, radius2);
}

// Check collision between two bounding boxes
bool wrapped_CheckCollisionBoxes(BoundingBox* box1, BoundingBox* box2) {
  return CheckCollisionBoxes(*box1, *box2);
}

// Check collision between box and sphere
bool wrapped_CheckCollisionBoxSphere(BoundingBox* box, Vector3* center, float radius) {
  return CheckCollisionBoxSphere(*box, *center, radius);
}

// Get collision info between ray and sphere
RayCollision* wrapped_GetRayCollisionSphere(Ray* ray, Vector3* center, float radius) {
  RayCollision* _ret = wrapped_alloc(sizeof(RayCollision));
  *_ret = GetRayCollisionSphere(*ray, *center, radius);
  return _ret;
}

// Get collision info between ray and box
RayCollision* wrapped_GetRayCollisionBox(Ray* ray, BoundingBox* box) {
  RayCollision* _ret = wrapped_alloc(sizeof(RayCollision));
  *_ret = GetRayCollisionBox(*ray, *box);
  return _ret;
}

// Get collision info between ray and mesh
RayCollision* wrapped_GetRayCollisionMesh(Ray* ray, Mesh* mesh, Matrix* transform) {
  RayCollision* _ret = wrapped_alloc(sizeof(RayCollision));
  *_ret = GetRayCollisionMesh(*ray, *mesh, *transform);
  return _ret;
}

// Get collision info between ray and triangle
RayCollision* wrapped_GetRayCollisionTriangle(Ray* ray, Vector3* p1, Vector3* p2, Vector3* p3) {
  RayCollision* _ret = wrapped_alloc(sizeof(RayCollision));
  *_ret = GetRayCollisionTriangle(*ray, *p1, *p2, *p3);
  return _ret;
}

// Get collision info between ray and quad
RayCollision* wrapped_GetRayCollisionQuad(Ray* ray, Vector3* p1, Vector3* p2, Vector3* p3, Vector3* p4) {
  RayCollision* _ret = wrapped_alloc(sizeof(RayCollision));
  *_ret = GetRayCollisionQuad(*ray, *p1, *p2, *p3, *p4);
  return _ret;
}

// Load wave data from file
Wave* wrapped_LoadWave(const char * fileName) {
  Wave* _ret = wrapped_alloc(sizeof(Wave));
  *_ret = LoadWave(fileName);
  return _ret;
}

// Load wave from memory buffer, fileType refers to extension: i.e. '.wav'
Wave* wrapped_LoadWaveFromMemory(const char * fileType, const unsigned char * fileData, int dataSize) {
  Wave* _ret = wrapped_alloc(sizeof(Wave));
  *_ret = LoadWaveFromMemory(fileType, fileData, dataSize);
  return _ret;
}

// Checks if wave data is ready
bool wrapped_IsWaveReady(Wave* wave) {
  return IsWaveReady(*wave);
}

// Load sound from file
Sound* wrapped_LoadSound(const char * fileName) {
  Sound* _ret = wrapped_alloc(sizeof(Sound));
  *_ret = LoadSound(fileName);
  return _ret;
}

// Load sound from wave data
Sound* wrapped_LoadSoundFromWave(Wave* wave) {
  Sound* _ret = wrapped_alloc(sizeof(Sound));
  *_ret = LoadSoundFromWave(*wave);
  return _ret;
}

// Create a new sound that shares the same sample data as the source sound, does not own the sound data
Sound* wrapped_LoadSoundAlias(Sound* source) {
  Sound* _ret = wrapped_alloc(sizeof(Sound));
  *_ret = LoadSoundAlias(*source);
  return _ret;
}

// Checks if a sound is ready
bool wrapped_IsSoundReady(Sound* sound) {
  return IsSoundReady(*sound);
}

// Update sound buffer with new data
void wrapped_UpdateSound(Sound* sound, const void * data, int sampleCount) {
  UpdateSound(*sound, data, sampleCount);
}

// Unload wave data
void wrapped_UnloadWave(Wave* wave) {
  UnloadWave(*wave);
}

// Unload sound
void wrapped_UnloadSound(Sound* sound) {
  UnloadSound(*sound);
}

// Unload a sound alias (does not deallocate sample data)
void wrapped_UnloadSoundAlias(Sound* alias) {
  UnloadSoundAlias(*alias);
}

// Export wave data to file, returns true on success
bool wrapped_ExportWave(Wave* wave, const char * fileName) {
  return ExportWave(*wave, fileName);
}

// Export wave sample data to code (.h), returns true on success
bool wrapped_ExportWaveAsCode(Wave* wave, const char * fileName) {
  return ExportWaveAsCode(*wave, fileName);
}

// Play a sound
void wrapped_PlaySound(Sound* sound) {
  PlaySound(*sound);
}

// Stop playing a sound
void wrapped_StopSound(Sound* sound) {
  StopSound(*sound);
}

// Pause a sound
void wrapped_PauseSound(Sound* sound) {
  PauseSound(*sound);
}

// Resume a paused sound
void wrapped_ResumeSound(Sound* sound) {
  ResumeSound(*sound);
}

// Check if a sound is currently playing
bool wrapped_IsSoundPlaying(Sound* sound) {
  return IsSoundPlaying(*sound);
}

// Set volume for a sound (1.0 is max level)
void wrapped_SetSoundVolume(Sound* sound, float volume) {
  SetSoundVolume(*sound, volume);
}

// Set pitch for a sound (1.0 is base level)
void wrapped_SetSoundPitch(Sound* sound, float pitch) {
  SetSoundPitch(*sound, pitch);
}

// Set pan for a sound (0.5 is center)
void wrapped_SetSoundPan(Sound* sound, float pan) {
  SetSoundPan(*sound, pan);
}

// Copy a wave to a new wave
Wave* wrapped_WaveCopy(Wave* wave) {
  Wave* _ret = wrapped_alloc(sizeof(Wave));
  *_ret = WaveCopy(*wave);
  return _ret;
}

// Crop a wave to defined samples range
void wrapped_WaveCrop(Wave ** wave, int initSample, int finalSample) {
  WaveCrop(*wave, initSample, finalSample);
}

// Convert wave data to desired format
void wrapped_WaveFormat(Wave ** wave, int sampleRate, int sampleSize, int channels) {
  WaveFormat(*wave, sampleRate, sampleSize, channels);
}

// Load samples data from wave as a 32bit float data array
float * wrapped_LoadWaveSamples(Wave* wave) {
  return LoadWaveSamples(*wave);
}

// Load music stream from file
Music* wrapped_LoadMusicStream(const char * fileName) {
  Music* _ret = wrapped_alloc(sizeof(Music));
  *_ret = LoadMusicStream(fileName);
  return _ret;
}

// Load music stream from data
Music* wrapped_LoadMusicStreamFromMemory(const char * fileType, const unsigned char * data, int dataSize) {
  Music* _ret = wrapped_alloc(sizeof(Music));
  *_ret = LoadMusicStreamFromMemory(fileType, data, dataSize);
  return _ret;
}

// Checks if a music stream is ready
bool wrapped_IsMusicReady(Music* music) {
  return IsMusicReady(*music);
}

// Unload music stream
void wrapped_UnloadMusicStream(Music* music) {
  UnloadMusicStream(*music);
}

// Start music playing
void wrapped_PlayMusicStream(Music* music) {
  PlayMusicStream(*music);
}

// Check if music is playing
bool wrapped_IsMusicStreamPlaying(Music* music) {
  return IsMusicStreamPlaying(*music);
}

// Updates buffers for music streaming
void wrapped_UpdateMusicStream(Music* music) {
  UpdateMusicStream(*music);
}

// Stop music playing
void wrapped_StopMusicStream(Music* music) {
  StopMusicStream(*music);
}

// Pause music playing
void wrapped_PauseMusicStream(Music* music) {
  PauseMusicStream(*music);
}

// Resume playing paused music
void wrapped_ResumeMusicStream(Music* music) {
  ResumeMusicStream(*music);
}

// Seek music to a position (in seconds)
void wrapped_SeekMusicStream(Music* music, float position) {
  SeekMusicStream(*music, position);
}

// Set volume for music (1.0 is max level)
void wrapped_SetMusicVolume(Music* music, float volume) {
  SetMusicVolume(*music, volume);
}

// Set pitch for a music (1.0 is base level)
void wrapped_SetMusicPitch(Music* music, float pitch) {
  SetMusicPitch(*music, pitch);
}

// Set pan for a music (0.5 is center)
void wrapped_SetMusicPan(Music* music, float pan) {
  SetMusicPan(*music, pan);
}

// Get music time length (in seconds)
float wrapped_GetMusicTimeLength(Music* music) {
  return GetMusicTimeLength(*music);
}

// Get current music time played (in seconds)
float wrapped_GetMusicTimePlayed(Music* music) {
  return GetMusicTimePlayed(*music);
}

// Load audio stream (to stream raw audio pcm data)
AudioStream* wrapped_LoadAudioStream(unsigned int sampleRate, unsigned int sampleSize, unsigned int channels) {
  AudioStream* _ret = wrapped_alloc(sizeof(AudioStream));
  *_ret = LoadAudioStream(sampleRate, sampleSize, channels);
  return _ret;
}

// Checks if an audio stream is ready
bool wrapped_IsAudioStreamReady(AudioStream* stream) {
  return IsAudioStreamReady(*stream);
}

// Unload audio stream and free memory
void wrapped_UnloadAudioStream(AudioStream* stream) {
  UnloadAudioStream(*stream);
}

// Update audio stream buffers with data
void wrapped_UpdateAudioStream(AudioStream* stream, const void * data, int frameCount) {
  UpdateAudioStream(*stream, data, frameCount);
}

// Check if any audio stream buffers requires refill
bool wrapped_IsAudioStreamProcessed(AudioStream* stream) {
  return IsAudioStreamProcessed(*stream);
}

// Play audio stream
void wrapped_PlayAudioStream(AudioStream* stream) {
  PlayAudioStream(*stream);
}

// Pause audio stream
void wrapped_PauseAudioStream(AudioStream* stream) {
  PauseAudioStream(*stream);
}

// Resume audio stream
void wrapped_ResumeAudioStream(AudioStream* stream) {
  ResumeAudioStream(*stream);
}

// Check if audio stream is playing
bool wrapped_IsAudioStreamPlaying(AudioStream* stream) {
  return IsAudioStreamPlaying(*stream);
}

// Stop audio stream
void wrapped_StopAudioStream(AudioStream* stream) {
  StopAudioStream(*stream);
}

// Set volume for audio stream (1.0 is max level)
void wrapped_SetAudioStreamVolume(AudioStream* stream, float volume) {
  SetAudioStreamVolume(*stream, volume);
}

// Set pitch for audio stream (1.0 is base level)
void wrapped_SetAudioStreamPitch(AudioStream* stream, float pitch) {
  SetAudioStreamPitch(*stream, pitch);
}

// Set pan for audio stream (0.5 is centered)
void wrapped_SetAudioStreamPan(AudioStream* stream, float pan) {
  SetAudioStreamPan(*stream, pan);
}

// Audio thread callback to request new data
void wrapped_SetAudioStreamCallback(AudioStream* stream, AudioCallback* callback) {
  SetAudioStreamCallback(*stream, *callback);
}

// Attach audio stream processor to stream, receives the samples as <float>s
void wrapped_AttachAudioStreamProcessor(AudioStream* stream, AudioCallback* processor) {
  AttachAudioStreamProcessor(*stream, *processor);
}

// Detach audio stream processor from stream
void wrapped_DetachAudioStreamProcessor(AudioStream* stream, AudioCallback* processor) {
  DetachAudioStreamProcessor(*stream, *processor);
}

// Attach audio stream processor to the entire audio pipeline, receives the samples as <float>s
void wrapped_AttachAudioMixedProcessor(AudioCallback* processor) {
  AttachAudioMixedProcessor(*processor);
}

// Detach audio stream processor from the entire audio pipeline
void wrapped_DetachAudioMixedProcessor(AudioCallback* processor) {
  DetachAudioMixedProcessor(*processor);
}
