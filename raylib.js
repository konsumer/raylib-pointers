
// this uses bun FFI and provides an ergonomic interface for js

import { dlopen, FFIType, suffix, ptr } from 'bun:ffi'


const ffi = {
  "wrapped_alloc": {
    "args": [
      "u32"
    ],
    "returns": "ptr"
  },
  "wrapped_free": {
    "args": [
      "ptr"
    ],
    "returns": "void"
  },
  "DrawFPS": {
    "args": [
      "i32",
      "i32"
    ],
    "returns": "void"
  },
  "EndDrawing": {
    "args": [],
    "returns": "void"
  },
  "InitWindow": {
    "args": [
      "i32",
      "i32",
      "cstring"
    ],
    "returns": "void"
  },
  "SetTargetFPS": {
    "args": [
      "i32"
    ],
    "returns": "void"
  },
  "wrapped_Fade": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "ptr"
  },
  "wrapped_WindowShouldClose": {
    "args": [],
    "returns": "bool"
  },
  "BeginDrawing": {
    "args": [],
    "returns": "void"
  },
  "CloseWindow": {
    "args": [],
    "returns": "void"
  },
  "wrapped_ClearBackground": {
    "args": [
      "ptr"
    ],
    "returns": "void"
  },
  "wrapped_DrawText": {
    "args": [
      "cstring",
      "i32",
      "i32",
      "i32",
      "ptr"
    ],
    "returns": "void"
  },
  "Vector2_size": {
    "args": [],
    "returns": "u32"
  },
  "Vector2_get_x": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Vector2_set_x": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Vector2_get_y": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Vector2_set_y": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Vector3_size": {
    "args": [],
    "returns": "u32"
  },
  "Vector3_get_x": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Vector3_set_x": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Vector3_get_y": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Vector3_set_y": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Vector3_get_z": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Vector3_set_z": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Vector4_size": {
    "args": [],
    "returns": "u32"
  },
  "Vector4_get_x": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Vector4_set_x": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Vector4_get_y": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Vector4_set_y": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Vector4_get_z": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Vector4_set_z": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Vector4_get_w": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Vector4_set_w": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_size": {
    "args": [],
    "returns": "u32"
  },
  "Matrix_get_m0": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m0": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m4": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m4": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m8": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m8": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m12": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m12": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m1": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m1": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m5": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m5": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m9": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m9": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m13": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m13": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m2": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m2": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m6": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m6": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m10": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m10": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m14": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m14": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m3": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m3": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m7": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m7": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m11": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m11": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Matrix_get_m15": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Matrix_set_m15": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Color_size": {
    "args": [],
    "returns": "u32"
  },
  "Color_get_r": {
    "args": [
      "ptr"
    ],
    "returns": "u8"
  },
  "Color_set_r": {
    "args": [
      "ptr",
      "u8"
    ],
    "returns": "void"
  },
  "Color_get_g": {
    "args": [
      "ptr"
    ],
    "returns": "u8"
  },
  "Color_set_g": {
    "args": [
      "ptr",
      "u8"
    ],
    "returns": "void"
  },
  "Color_get_b": {
    "args": [
      "ptr"
    ],
    "returns": "u8"
  },
  "Color_set_b": {
    "args": [
      "ptr",
      "u8"
    ],
    "returns": "void"
  },
  "Color_get_a": {
    "args": [
      "ptr"
    ],
    "returns": "u8"
  },
  "Color_set_a": {
    "args": [
      "ptr",
      "u8"
    ],
    "returns": "void"
  },
  "Rectangle_size": {
    "args": [],
    "returns": "u32"
  },
  "Rectangle_get_x": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Rectangle_set_x": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Rectangle_get_y": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Rectangle_set_y": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Rectangle_get_width": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Rectangle_set_width": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Rectangle_get_height": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Rectangle_set_height": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Image_size": {
    "args": [],
    "returns": "u32"
  },
  "Image_get_width": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Image_set_width": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Image_get_height": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Image_set_height": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Image_get_mipmaps": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Image_set_mipmaps": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Image_get_format": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Image_set_format": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Texture_size": {
    "args": [],
    "returns": "u32"
  },
  "Texture_get_id": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "Texture_set_id": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  },
  "Texture_get_width": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Texture_set_width": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Texture_get_height": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Texture_set_height": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Texture_get_mipmaps": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Texture_set_mipmaps": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Texture_get_format": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Texture_set_format": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "RenderTexture_size": {
    "args": [],
    "returns": "u32"
  },
  "RenderTexture_get_id": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "RenderTexture_set_id": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  },
  "NPatchInfo_size": {
    "args": [],
    "returns": "u32"
  },
  "NPatchInfo_get_left": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "NPatchInfo_set_left": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "NPatchInfo_get_top": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "NPatchInfo_set_top": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "NPatchInfo_get_right": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "NPatchInfo_set_right": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "NPatchInfo_get_bottom": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "NPatchInfo_set_bottom": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "NPatchInfo_get_layout": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "NPatchInfo_set_layout": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "GlyphInfo_size": {
    "args": [],
    "returns": "u32"
  },
  "GlyphInfo_get_value": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "GlyphInfo_set_value": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "GlyphInfo_get_offsetX": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "GlyphInfo_set_offsetX": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "GlyphInfo_get_offsetY": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "GlyphInfo_set_offsetY": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "GlyphInfo_get_advanceX": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "GlyphInfo_set_advanceX": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Font_size": {
    "args": [],
    "returns": "u32"
  },
  "Font_get_baseSize": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Font_set_baseSize": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Font_get_glyphCount": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Font_set_glyphCount": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Font_get_glyphPadding": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Font_set_glyphPadding": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Camera3D_size": {
    "args": [],
    "returns": "u32"
  },
  "Camera3D_get_fovy": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Camera3D_set_fovy": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Camera3D_get_projection": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Camera3D_set_projection": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Camera2D_size": {
    "args": [],
    "returns": "u32"
  },
  "Camera2D_get_rotation": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Camera2D_set_rotation": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Camera2D_get_zoom": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "Camera2D_set_zoom": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Mesh_size": {
    "args": [],
    "returns": "u32"
  },
  "Mesh_get_vertexCount": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Mesh_set_vertexCount": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Mesh_get_triangleCount": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Mesh_set_triangleCount": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Mesh_get_vaoId": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "Mesh_set_vaoId": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  },
  "Shader_size": {
    "args": [],
    "returns": "u32"
  },
  "Shader_get_id": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "Shader_set_id": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  },
  "MaterialMap_size": {
    "args": [],
    "returns": "u32"
  },
  "MaterialMap_get_value": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "MaterialMap_set_value": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "Material_size": {
    "args": [],
    "returns": "u32"
  },
  "Transform_size": {
    "args": [],
    "returns": "u32"
  },
  "BoneInfo_size": {
    "args": [],
    "returns": "u32"
  },
  "BoneInfo_get_parent": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "BoneInfo_set_parent": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Model_size": {
    "args": [],
    "returns": "u32"
  },
  "Model_get_meshCount": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Model_set_meshCount": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Model_get_materialCount": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Model_set_materialCount": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Model_get_boneCount": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Model_set_boneCount": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "ModelAnimation_size": {
    "args": [],
    "returns": "u32"
  },
  "ModelAnimation_get_boneCount": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "ModelAnimation_set_boneCount": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "ModelAnimation_get_frameCount": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "ModelAnimation_set_frameCount": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "Ray_size": {
    "args": [],
    "returns": "u32"
  },
  "RayCollision_size": {
    "args": [],
    "returns": "u32"
  },
  "RayCollision_get_hit": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "RayCollision_set_hit": {
    "args": [
      "ptr",
      "bool"
    ],
    "returns": "void"
  },
  "RayCollision_get_distance": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "RayCollision_set_distance": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "BoundingBox_size": {
    "args": [],
    "returns": "u32"
  },
  "Wave_size": {
    "args": [],
    "returns": "u32"
  },
  "Wave_get_frameCount": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "Wave_set_frameCount": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  },
  "Wave_get_sampleRate": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "Wave_set_sampleRate": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  },
  "Wave_get_sampleSize": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "Wave_set_sampleSize": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  },
  "Wave_get_channels": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "Wave_set_channels": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  },
  "AudioStream_size": {
    "args": [],
    "returns": "u32"
  },
  "AudioStream_get_sampleRate": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "AudioStream_set_sampleRate": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  },
  "AudioStream_get_sampleSize": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "AudioStream_set_sampleSize": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  },
  "AudioStream_get_channels": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "AudioStream_set_channels": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  },
  "Sound_size": {
    "args": [],
    "returns": "u32"
  },
  "Sound_get_frameCount": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "Sound_set_frameCount": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  },
  "Music_size": {
    "args": [],
    "returns": "u32"
  },
  "Music_get_frameCount": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "Music_set_frameCount": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  },
  "Music_get_looping": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "Music_set_looping": {
    "args": [
      "ptr",
      "bool"
    ],
    "returns": "void"
  },
  "Music_get_ctxType": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "Music_set_ctxType": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "VrDeviceInfo_size": {
    "args": [],
    "returns": "u32"
  },
  "VrDeviceInfo_get_hResolution": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "VrDeviceInfo_set_hResolution": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "VrDeviceInfo_get_vResolution": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "VrDeviceInfo_set_vResolution": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "void"
  },
  "VrDeviceInfo_get_hScreenSize": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "VrDeviceInfo_set_hScreenSize": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "VrDeviceInfo_get_vScreenSize": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "VrDeviceInfo_set_vScreenSize": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "VrDeviceInfo_get_vScreenCenter": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "VrDeviceInfo_set_vScreenCenter": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "VrDeviceInfo_get_eyeToScreenDistance": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "VrDeviceInfo_set_eyeToScreenDistance": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "VrDeviceInfo_get_lensSeparationDistance": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "VrDeviceInfo_set_lensSeparationDistance": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "VrDeviceInfo_get_interpupillaryDistance": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "VrDeviceInfo_set_interpupillaryDistance": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "void"
  },
  "VrStereoConfig_size": {
    "args": [],
    "returns": "u32"
  },
  "FilePathList_size": {
    "args": [],
    "returns": "u32"
  },
  "FilePathList_get_capacity": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "FilePathList_set_capacity": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  },
  "FilePathList_get_count": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "FilePathList_set_count": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "void"
  }
}

const { symbols } = dlopen(`build/librlptr.${suffix}`, ffi)

// convert a string into a pointer to a buffer
const cstr = s => ptr(Buffer.from((s || ' ')))

// this lets us auto-free on every frame
export const alloc = symbols.wrapped_alloc
export const free = symbols.wrapped_free
export const WindowShouldClose = symbols.wrapped_WindowShouldClose

export class Vector2 {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Vector2_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get x() {
    return symbols.Vector2_get_x(this._addr)
  }
  set x(v) {
    return symbols.Vector2_set_x(this._addr, v)
  }
  get y() {
    return symbols.Vector2_get_y(this._addr)
  }
  set y(v) {
    return symbols.Vector2_set_y(this._addr, v)
  }
}
export class Vector3 {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Vector3_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get x() {
    return symbols.Vector3_get_x(this._addr)
  }
  set x(v) {
    return symbols.Vector3_set_x(this._addr, v)
  }
  get y() {
    return symbols.Vector3_get_y(this._addr)
  }
  set y(v) {
    return symbols.Vector3_set_y(this._addr, v)
  }
  get z() {
    return symbols.Vector3_get_z(this._addr)
  }
  set z(v) {
    return symbols.Vector3_set_z(this._addr, v)
  }
}
export class Vector4 {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Vector4_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get x() {
    return symbols.Vector4_get_x(this._addr)
  }
  set x(v) {
    return symbols.Vector4_set_x(this._addr, v)
  }
  get y() {
    return symbols.Vector4_get_y(this._addr)
  }
  set y(v) {
    return symbols.Vector4_set_y(this._addr, v)
  }
  get z() {
    return symbols.Vector4_get_z(this._addr)
  }
  set z(v) {
    return symbols.Vector4_set_z(this._addr, v)
  }
  get w() {
    return symbols.Vector4_get_w(this._addr)
  }
  set w(v) {
    return symbols.Vector4_set_w(this._addr, v)
  }
}
export class Matrix {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Matrix_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get m0() {
    return symbols.Matrix_get_m0(this._addr)
  }
  set m0(v) {
    return symbols.Matrix_set_m0(this._addr, v)
  }
  get m4() {
    return symbols.Matrix_get_m4(this._addr)
  }
  set m4(v) {
    return symbols.Matrix_set_m4(this._addr, v)
  }
  get m8() {
    return symbols.Matrix_get_m8(this._addr)
  }
  set m8(v) {
    return symbols.Matrix_set_m8(this._addr, v)
  }
  get m12() {
    return symbols.Matrix_get_m12(this._addr)
  }
  set m12(v) {
    return symbols.Matrix_set_m12(this._addr, v)
  }
  get m1() {
    return symbols.Matrix_get_m1(this._addr)
  }
  set m1(v) {
    return symbols.Matrix_set_m1(this._addr, v)
  }
  get m5() {
    return symbols.Matrix_get_m5(this._addr)
  }
  set m5(v) {
    return symbols.Matrix_set_m5(this._addr, v)
  }
  get m9() {
    return symbols.Matrix_get_m9(this._addr)
  }
  set m9(v) {
    return symbols.Matrix_set_m9(this._addr, v)
  }
  get m13() {
    return symbols.Matrix_get_m13(this._addr)
  }
  set m13(v) {
    return symbols.Matrix_set_m13(this._addr, v)
  }
  get m2() {
    return symbols.Matrix_get_m2(this._addr)
  }
  set m2(v) {
    return symbols.Matrix_set_m2(this._addr, v)
  }
  get m6() {
    return symbols.Matrix_get_m6(this._addr)
  }
  set m6(v) {
    return symbols.Matrix_set_m6(this._addr, v)
  }
  get m10() {
    return symbols.Matrix_get_m10(this._addr)
  }
  set m10(v) {
    return symbols.Matrix_set_m10(this._addr, v)
  }
  get m14() {
    return symbols.Matrix_get_m14(this._addr)
  }
  set m14(v) {
    return symbols.Matrix_set_m14(this._addr, v)
  }
  get m3() {
    return symbols.Matrix_get_m3(this._addr)
  }
  set m3(v) {
    return symbols.Matrix_set_m3(this._addr, v)
  }
  get m7() {
    return symbols.Matrix_get_m7(this._addr)
  }
  set m7(v) {
    return symbols.Matrix_set_m7(this._addr, v)
  }
  get m11() {
    return symbols.Matrix_get_m11(this._addr)
  }
  set m11(v) {
    return symbols.Matrix_set_m11(this._addr, v)
  }
  get m15() {
    return symbols.Matrix_get_m15(this._addr)
  }
  set m15(v) {
    return symbols.Matrix_set_m15(this._addr, v)
  }
}
export class Color {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Color_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get r() {
    return symbols.Color_get_r(this._addr)
  }
  set r(v) {
    return symbols.Color_set_r(this._addr, v)
  }
  get g() {
    return symbols.Color_get_g(this._addr)
  }
  set g(v) {
    return symbols.Color_set_g(this._addr, v)
  }
  get b() {
    return symbols.Color_get_b(this._addr)
  }
  set b(v) {
    return symbols.Color_set_b(this._addr, v)
  }
  get a() {
    return symbols.Color_get_a(this._addr)
  }
  set a(v) {
    return symbols.Color_set_a(this._addr, v)
  }
}
export class Rectangle {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Rectangle_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get x() {
    return symbols.Rectangle_get_x(this._addr)
  }
  set x(v) {
    return symbols.Rectangle_set_x(this._addr, v)
  }
  get y() {
    return symbols.Rectangle_get_y(this._addr)
  }
  set y(v) {
    return symbols.Rectangle_set_y(this._addr, v)
  }
  get width() {
    return symbols.Rectangle_get_width(this._addr)
  }
  set width(v) {
    return symbols.Rectangle_set_width(this._addr, v)
  }
  get height() {
    return symbols.Rectangle_get_height(this._addr)
  }
  set height(v) {
    return symbols.Rectangle_set_height(this._addr, v)
  }
}
export class Image {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Image_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get width() {
    return symbols.Image_get_width(this._addr)
  }
  set width(v) {
    return symbols.Image_set_width(this._addr, v)
  }
  get height() {
    return symbols.Image_get_height(this._addr)
  }
  set height(v) {
    return symbols.Image_set_height(this._addr, v)
  }
  get mipmaps() {
    return symbols.Image_get_mipmaps(this._addr)
  }
  set mipmaps(v) {
    return symbols.Image_set_mipmaps(this._addr, v)
  }
  get format() {
    return symbols.Image_get_format(this._addr)
  }
  set format(v) {
    return symbols.Image_set_format(this._addr, v)
  }
}
export class Texture {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Texture_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get id() {
    return symbols.Texture_get_id(this._addr)
  }
  set id(v) {
    return symbols.Texture_set_id(this._addr, v)
  }
  get width() {
    return symbols.Texture_get_width(this._addr)
  }
  set width(v) {
    return symbols.Texture_set_width(this._addr, v)
  }
  get height() {
    return symbols.Texture_get_height(this._addr)
  }
  set height(v) {
    return symbols.Texture_set_height(this._addr, v)
  }
  get mipmaps() {
    return symbols.Texture_get_mipmaps(this._addr)
  }
  set mipmaps(v) {
    return symbols.Texture_set_mipmaps(this._addr, v)
  }
  get format() {
    return symbols.Texture_get_format(this._addr)
  }
  set format(v) {
    return symbols.Texture_set_format(this._addr, v)
  }
}
export class RenderTexture {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.RenderTexture_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get id() {
    return symbols.RenderTexture_get_id(this._addr)
  }
  set id(v) {
    return symbols.RenderTexture_set_id(this._addr, v)
  }
}
export class NPatchInfo {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.NPatchInfo_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get left() {
    return symbols.NPatchInfo_get_left(this._addr)
  }
  set left(v) {
    return symbols.NPatchInfo_set_left(this._addr, v)
  }
  get top() {
    return symbols.NPatchInfo_get_top(this._addr)
  }
  set top(v) {
    return symbols.NPatchInfo_set_top(this._addr, v)
  }
  get right() {
    return symbols.NPatchInfo_get_right(this._addr)
  }
  set right(v) {
    return symbols.NPatchInfo_set_right(this._addr, v)
  }
  get bottom() {
    return symbols.NPatchInfo_get_bottom(this._addr)
  }
  set bottom(v) {
    return symbols.NPatchInfo_set_bottom(this._addr, v)
  }
  get layout() {
    return symbols.NPatchInfo_get_layout(this._addr)
  }
  set layout(v) {
    return symbols.NPatchInfo_set_layout(this._addr, v)
  }
}
export class GlyphInfo {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.GlyphInfo_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get value() {
    return symbols.GlyphInfo_get_value(this._addr)
  }
  set value(v) {
    return symbols.GlyphInfo_set_value(this._addr, v)
  }
  get offsetX() {
    return symbols.GlyphInfo_get_offsetX(this._addr)
  }
  set offsetX(v) {
    return symbols.GlyphInfo_set_offsetX(this._addr, v)
  }
  get offsetY() {
    return symbols.GlyphInfo_get_offsetY(this._addr)
  }
  set offsetY(v) {
    return symbols.GlyphInfo_set_offsetY(this._addr, v)
  }
  get advanceX() {
    return symbols.GlyphInfo_get_advanceX(this._addr)
  }
  set advanceX(v) {
    return symbols.GlyphInfo_set_advanceX(this._addr, v)
  }
}
export class Font {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Font_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get baseSize() {
    return symbols.Font_get_baseSize(this._addr)
  }
  set baseSize(v) {
    return symbols.Font_set_baseSize(this._addr, v)
  }
  get glyphCount() {
    return symbols.Font_get_glyphCount(this._addr)
  }
  set glyphCount(v) {
    return symbols.Font_set_glyphCount(this._addr, v)
  }
  get glyphPadding() {
    return symbols.Font_get_glyphPadding(this._addr)
  }
  set glyphPadding(v) {
    return symbols.Font_set_glyphPadding(this._addr, v)
  }
}
export class Camera3D {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Camera3D_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get fovy() {
    return symbols.Camera3D_get_fovy(this._addr)
  }
  set fovy(v) {
    return symbols.Camera3D_set_fovy(this._addr, v)
  }
  get projection() {
    return symbols.Camera3D_get_projection(this._addr)
  }
  set projection(v) {
    return symbols.Camera3D_set_projection(this._addr, v)
  }
}
export class Camera2D {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Camera2D_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get rotation() {
    return symbols.Camera2D_get_rotation(this._addr)
  }
  set rotation(v) {
    return symbols.Camera2D_set_rotation(this._addr, v)
  }
  get zoom() {
    return symbols.Camera2D_get_zoom(this._addr)
  }
  set zoom(v) {
    return symbols.Camera2D_set_zoom(this._addr, v)
  }
}
export class Mesh {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Mesh_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get vertexCount() {
    return symbols.Mesh_get_vertexCount(this._addr)
  }
  set vertexCount(v) {
    return symbols.Mesh_set_vertexCount(this._addr, v)
  }
  get triangleCount() {
    return symbols.Mesh_get_triangleCount(this._addr)
  }
  set triangleCount(v) {
    return symbols.Mesh_set_triangleCount(this._addr, v)
  }
  get vaoId() {
    return symbols.Mesh_get_vaoId(this._addr)
  }
  set vaoId(v) {
    return symbols.Mesh_set_vaoId(this._addr, v)
  }
}
export class Shader {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Shader_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get id() {
    return symbols.Shader_get_id(this._addr)
  }
  set id(v) {
    return symbols.Shader_set_id(this._addr, v)
  }
}
export class MaterialMap {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.MaterialMap_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get value() {
    return symbols.MaterialMap_get_value(this._addr)
  }
  set value(v) {
    return symbols.MaterialMap_set_value(this._addr, v)
  }
}
export class Material {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Material_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

}
export class Transform {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Transform_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

}
export class BoneInfo {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.BoneInfo_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get parent() {
    return symbols.BoneInfo_get_parent(this._addr)
  }
  set parent(v) {
    return symbols.BoneInfo_set_parent(this._addr, v)
  }
}
export class Model {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Model_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get meshCount() {
    return symbols.Model_get_meshCount(this._addr)
  }
  set meshCount(v) {
    return symbols.Model_set_meshCount(this._addr, v)
  }
  get materialCount() {
    return symbols.Model_get_materialCount(this._addr)
  }
  set materialCount(v) {
    return symbols.Model_set_materialCount(this._addr, v)
  }
  get boneCount() {
    return symbols.Model_get_boneCount(this._addr)
  }
  set boneCount(v) {
    return symbols.Model_set_boneCount(this._addr, v)
  }
}
export class ModelAnimation {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.ModelAnimation_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get boneCount() {
    return symbols.ModelAnimation_get_boneCount(this._addr)
  }
  set boneCount(v) {
    return symbols.ModelAnimation_set_boneCount(this._addr, v)
  }
  get frameCount() {
    return symbols.ModelAnimation_get_frameCount(this._addr)
  }
  set frameCount(v) {
    return symbols.ModelAnimation_set_frameCount(this._addr, v)
  }
}
export class Ray {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Ray_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

}
export class RayCollision {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.RayCollision_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get hit() {
    return symbols.RayCollision_get_hit(this._addr)
  }
  set hit(v) {
    return symbols.RayCollision_set_hit(this._addr, v)
  }
  get distance() {
    return symbols.RayCollision_get_distance(this._addr)
  }
  set distance(v) {
    return symbols.RayCollision_set_distance(this._addr, v)
  }
}
export class BoundingBox {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.BoundingBox_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

}
export class Wave {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Wave_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get frameCount() {
    return symbols.Wave_get_frameCount(this._addr)
  }
  set frameCount(v) {
    return symbols.Wave_set_frameCount(this._addr, v)
  }
  get sampleRate() {
    return symbols.Wave_get_sampleRate(this._addr)
  }
  set sampleRate(v) {
    return symbols.Wave_set_sampleRate(this._addr, v)
  }
  get sampleSize() {
    return symbols.Wave_get_sampleSize(this._addr)
  }
  set sampleSize(v) {
    return symbols.Wave_set_sampleSize(this._addr, v)
  }
  get channels() {
    return symbols.Wave_get_channels(this._addr)
  }
  set channels(v) {
    return symbols.Wave_set_channels(this._addr, v)
  }
}
export class AudioStream {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.AudioStream_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get sampleRate() {
    return symbols.AudioStream_get_sampleRate(this._addr)
  }
  set sampleRate(v) {
    return symbols.AudioStream_set_sampleRate(this._addr, v)
  }
  get sampleSize() {
    return symbols.AudioStream_get_sampleSize(this._addr)
  }
  set sampleSize(v) {
    return symbols.AudioStream_set_sampleSize(this._addr, v)
  }
  get channels() {
    return symbols.AudioStream_get_channels(this._addr)
  }
  set channels(v) {
    return symbols.AudioStream_set_channels(this._addr, v)
  }
}
export class Sound {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Sound_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get frameCount() {
    return symbols.Sound_get_frameCount(this._addr)
  }
  set frameCount(v) {
    return symbols.Sound_set_frameCount(this._addr, v)
  }
}
export class Music {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.Music_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get frameCount() {
    return symbols.Music_get_frameCount(this._addr)
  }
  set frameCount(v) {
    return symbols.Music_set_frameCount(this._addr, v)
  }
  get looping() {
    return symbols.Music_get_looping(this._addr)
  }
  set looping(v) {
    return symbols.Music_set_looping(this._addr, v)
  }
  get ctxType() {
    return symbols.Music_get_ctxType(this._addr)
  }
  set ctxType(v) {
    return symbols.Music_set_ctxType(this._addr, v)
  }
}
export class VrDeviceInfo {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.VrDeviceInfo_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get hResolution() {
    return symbols.VrDeviceInfo_get_hResolution(this._addr)
  }
  set hResolution(v) {
    return symbols.VrDeviceInfo_set_hResolution(this._addr, v)
  }
  get vResolution() {
    return symbols.VrDeviceInfo_get_vResolution(this._addr)
  }
  set vResolution(v) {
    return symbols.VrDeviceInfo_set_vResolution(this._addr, v)
  }
  get hScreenSize() {
    return symbols.VrDeviceInfo_get_hScreenSize(this._addr)
  }
  set hScreenSize(v) {
    return symbols.VrDeviceInfo_set_hScreenSize(this._addr, v)
  }
  get vScreenSize() {
    return symbols.VrDeviceInfo_get_vScreenSize(this._addr)
  }
  set vScreenSize(v) {
    return symbols.VrDeviceInfo_set_vScreenSize(this._addr, v)
  }
  get vScreenCenter() {
    return symbols.VrDeviceInfo_get_vScreenCenter(this._addr)
  }
  set vScreenCenter(v) {
    return symbols.VrDeviceInfo_set_vScreenCenter(this._addr, v)
  }
  get eyeToScreenDistance() {
    return symbols.VrDeviceInfo_get_eyeToScreenDistance(this._addr)
  }
  set eyeToScreenDistance(v) {
    return symbols.VrDeviceInfo_set_eyeToScreenDistance(this._addr, v)
  }
  get lensSeparationDistance() {
    return symbols.VrDeviceInfo_get_lensSeparationDistance(this._addr)
  }
  set lensSeparationDistance(v) {
    return symbols.VrDeviceInfo_set_lensSeparationDistance(this._addr, v)
  }
  get interpupillaryDistance() {
    return symbols.VrDeviceInfo_get_interpupillaryDistance(this._addr)
  }
  set interpupillaryDistance(v) {
    return symbols.VrDeviceInfo_set_interpupillaryDistance(this._addr, v)
  }
}
export class VrStereoConfig {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.VrStereoConfig_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

}
export class FilePathList {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.FilePathList_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get capacity() {
    return symbols.FilePathList_get_capacity(this._addr)
  }
  set capacity(v) {
    return symbols.FilePathList_set_capacity(this._addr, v)
  }
  get count() {
    return symbols.FilePathList_get_count(this._addr)
  }
  set count(v) {
    return symbols.FilePathList_set_count(this._addr, v)
  }
}
export const LIGHTGRAY = new Color({r: 200, g: 200, b: 200, a: 255}) // Light Gray
export const GRAY = new Color({r: 130, g: 130, b: 130, a: 255}) // Gray
export const DARKGRAY = new Color({r: 80, g: 80, b: 80, a: 255}) // Dark Gray
export const YELLOW = new Color({r: 253, g: 249, b: 0, a: 255}) // Yellow
export const GOLD = new Color({r: 255, g: 203, b: 0, a: 255}) // Gold
export const ORANGE = new Color({r: 255, g: 161, b: 0, a: 255}) // Orange
export const PINK = new Color({r: 255, g: 109, b: 194, a: 255}) // Pink
export const RED = new Color({r: 230, g: 41, b: 55, a: 255}) // Red
export const MAROON = new Color({r: 190, g: 33, b: 55, a: 255}) // Maroon
export const GREEN = new Color({r: 0, g: 228, b: 48, a: 255}) // Green
export const LIME = new Color({r: 0, g: 158, b: 47, a: 255}) // Lime
export const DARKGREEN = new Color({r: 0, g: 117, b: 44, a: 255}) // Dark Green
export const SKYBLUE = new Color({r: 102, g: 191, b: 255, a: 255}) // Sky Blue
export const BLUE = new Color({r: 0, g: 121, b: 241, a: 255}) // Blue
export const DARKBLUE = new Color({r: 0, g: 82, b: 172, a: 255}) // Dark Blue
export const PURPLE = new Color({r: 200, g: 122, b: 255, a: 255}) // Purple
export const VIOLET = new Color({r: 135, g: 60, b: 190, a: 255}) // Violet
export const DARKPURPLE = new Color({r: 112, g: 31, b: 126, a: 255}) // Dark Purple
export const BEIGE = new Color({r: 211, g: 176, b: 131, a: 255}) // Beige
export const BROWN = new Color({r: 127, g: 106, b: 79, a: 255}) // Brown
export const DARKBROWN = new Color({r: 76, g: 63, b: 47, a: 255}) // Dark Brown
export const WHITE = new Color({r: 255, g: 255, b: 255, a: 255}) // White
export const BLACK = new Color({r: 0, g: 0, b: 0, a: 255}) // Black
export const BLANK = new Color({r: 0, g: 0, b: 0, a: 0}) // Blank (Transparent)
export const MAGENTA = new Color({r: 255, g: 0, b: 255, a: 255}) // Magenta
export const RAYWHITE = new Color({r: 245, g: 245, b: 245, a: 255}) // My own White (raylib logo)

// these don't need any wrapping
export const { CloseWindow, BeginDrawing, EndDrawing, SetTargetFPS, DrawFPS } = symbols

// these need a little adjustment
export const ClearBackground = color => symbols.wrapped_ClearBackground(color._addr)

export const DrawText = (text, posX, posY, fontSize, color) => symbols.wrapped_DrawText(cstr(text), posX, posY, fontSize, color._addr)

export const InitWindow = (width, height, title) => symbols.InitWindow(width, height, cstr(title))

// this is example with pointer param/return
export const Fade = (color, alpha) => new Color({}, symbols.wrapped_Fade(color._addr, alpha))
