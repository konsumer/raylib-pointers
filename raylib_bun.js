// this uses bun FFI and provides an ergonomic interface for js
// Generated at 2024-09-05T01:15:16.387Z for raylib 5.0

import { dlopen, FFIType, suffix, ptr } from 'bun:ffi'


const ffi = {
  "InitWindow": {
    "args": [
      "i32",
      "i32",
      "ptr"
    ]
  },
  "CloseWindow": {
    "args": []
  },
  "IsWindowReady": {
    "args": [],
    "returns": "bool"
  },
  "IsWindowFullscreen": {
    "args": [],
    "returns": "bool"
  },
  "IsWindowHidden": {
    "args": [],
    "returns": "bool"
  },
  "IsWindowMinimized": {
    "args": [],
    "returns": "bool"
  },
  "IsWindowMaximized": {
    "args": [],
    "returns": "bool"
  },
  "IsWindowFocused": {
    "args": [],
    "returns": "bool"
  },
  "IsWindowResized": {
    "args": [],
    "returns": "bool"
  },
  "IsWindowState": {
    "args": [
      "u32"
    ],
    "returns": "bool"
  },
  "SetWindowState": {
    "args": [
      "u32"
    ]
  },
  "ClearWindowState": {
    "args": [
      "u32"
    ]
  },
  "ToggleFullscreen": {
    "args": []
  },
  "ToggleBorderlessWindowed": {
    "args": []
  },
  "MaximizeWindow": {
    "args": []
  },
  "MinimizeWindow": {
    "args": []
  },
  "RestoreWindow": {
    "args": []
  },
  "SetWindowTitle": {
    "args": [
      "ptr"
    ]
  },
  "SetWindowPosition": {
    "args": [
      "i32",
      "i32"
    ]
  },
  "SetWindowMonitor": {
    "args": [
      "i32"
    ]
  },
  "SetWindowMinSize": {
    "args": [
      "i32",
      "i32"
    ]
  },
  "SetWindowMaxSize": {
    "args": [
      "i32",
      "i32"
    ]
  },
  "SetWindowSize": {
    "args": [
      "i32",
      "i32"
    ]
  },
  "SetWindowOpacity": {
    "args": [
      "f32"
    ]
  },
  "SetWindowFocused": {
    "args": []
  },
  "GetWindowHandle": {
    "args": [],
    "returns": "ptr"
  },
  "GetScreenWidth": {
    "args": [],
    "returns": "i32"
  },
  "GetScreenHeight": {
    "args": [],
    "returns": "i32"
  },
  "GetRenderWidth": {
    "args": [],
    "returns": "i32"
  },
  "GetRenderHeight": {
    "args": [],
    "returns": "i32"
  },
  "GetMonitorCount": {
    "args": [],
    "returns": "i32"
  },
  "GetCurrentMonitor": {
    "args": [],
    "returns": "i32"
  },
  "GetMonitorWidth": {
    "args": [
      "i32"
    ],
    "returns": "i32"
  },
  "GetMonitorHeight": {
    "args": [
      "i32"
    ],
    "returns": "i32"
  },
  "GetMonitorPhysicalWidth": {
    "args": [
      "i32"
    ],
    "returns": "i32"
  },
  "GetMonitorPhysicalHeight": {
    "args": [
      "i32"
    ],
    "returns": "i32"
  },
  "GetMonitorRefreshRate": {
    "args": [
      "i32"
    ],
    "returns": "i32"
  },
  "GetMonitorName": {
    "args": [
      "i32"
    ],
    "returns": "ptr"
  },
  "SetClipboardText": {
    "args": [
      "ptr"
    ]
  },
  "GetClipboardText": {
    "args": [],
    "returns": "ptr"
  },
  "EnableEventWaiting": {
    "args": []
  },
  "DisableEventWaiting": {
    "args": []
  },
  "ShowCursor": {
    "args": []
  },
  "HideCursor": {
    "args": []
  },
  "IsCursorHidden": {
    "args": [],
    "returns": "bool"
  },
  "EnableCursor": {
    "args": []
  },
  "DisableCursor": {
    "args": []
  },
  "IsCursorOnScreen": {
    "args": [],
    "returns": "bool"
  },
  "BeginDrawing": {
    "args": []
  },
  "EndDrawing": {
    "args": []
  },
  "EndMode2D": {
    "args": []
  },
  "EndMode3D": {
    "args": []
  },
  "EndTextureMode": {
    "args": []
  },
  "EndShaderMode": {
    "args": []
  },
  "BeginBlendMode": {
    "args": [
      "i32"
    ]
  },
  "EndBlendMode": {
    "args": []
  },
  "BeginScissorMode": {
    "args": [
      "i32",
      "i32",
      "i32",
      "i32"
    ]
  },
  "EndScissorMode": {
    "args": []
  },
  "EndVrStereoMode": {
    "args": []
  },
  "SetTargetFPS": {
    "args": [
      "i32"
    ]
  },
  "GetFrameTime": {
    "args": [],
    "returns": "f32"
  },
  "GetTime": {
    "args": [],
    "returns": "double"
  },
  "GetFPS": {
    "args": [],
    "returns": "i32"
  },
  "SwapScreenBuffer": {
    "args": []
  },
  "PollInputEvents": {
    "args": []
  },
  "WaitTime": {
    "args": [
      "double"
    ]
  },
  "SetRandomSeed": {
    "args": [
      "u32"
    ]
  },
  "GetRandomValue": {
    "args": [
      "i32",
      "i32"
    ],
    "returns": "i32"
  },
  "LoadRandomSequence": {
    "args": [
      "u32",
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "UnloadRandomSequence": {
    "args": [
      "ptr"
    ]
  },
  "TakeScreenshot": {
    "args": [
      "ptr"
    ]
  },
  "SetConfigFlags": {
    "args": [
      "u32"
    ]
  },
  "OpenURL": {
    "args": [
      "ptr"
    ]
  },
  "SetTraceLogLevel": {
    "args": [
      "i32"
    ]
  },
  "MemAlloc": {
    "args": [
      "u32"
    ],
    "returns": "ptr"
  },
  "MemRealloc": {
    "args": [
      "ptr",
      "u32"
    ],
    "returns": "ptr"
  },
  "MemFree": {
    "args": [
      "ptr"
    ]
  },
  "LoadFileData": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "UnloadFileData": {
    "args": [
      "ptr"
    ]
  },
  "SaveFileData": {
    "args": [
      "ptr",
      "ptr",
      "i32"
    ],
    "returns": "bool"
  },
  "ExportDataAsCode": {
    "args": [
      "ptr",
      "i32",
      "ptr"
    ],
    "returns": "bool"
  },
  "LoadFileText": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "UnloadFileText": {
    "args": [
      "ptr"
    ]
  },
  "SaveFileText": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "FileExists": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "DirectoryExists": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "IsFileExtension": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "GetFileLength": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "GetFileExtension": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "GetFileName": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "GetFileNameWithoutExt": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "GetDirectoryPath": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "GetPrevDirectoryPath": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "GetWorkingDirectory": {
    "args": [],
    "returns": "ptr"
  },
  "GetApplicationDirectory": {
    "args": [],
    "returns": "ptr"
  },
  "ChangeDirectory": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "IsPathFile": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "IsFileDropped": {
    "args": [],
    "returns": "bool"
  },
  "GetFileModTime": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "CompressData": {
    "args": [
      "ptr",
      "i32",
      "ptr"
    ],
    "returns": "ptr"
  },
  "DecompressData": {
    "args": [
      "ptr",
      "i32",
      "ptr"
    ],
    "returns": "ptr"
  },
  "EncodeDataBase64": {
    "args": [
      "ptr",
      "i32",
      "ptr"
    ],
    "returns": "ptr"
  },
  "DecodeDataBase64": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "SetAutomationEventBaseFrame": {
    "args": [
      "i32"
    ]
  },
  "StartAutomationEventRecording": {
    "args": []
  },
  "StopAutomationEventRecording": {
    "args": []
  },
  "IsKeyPressed": {
    "args": [
      "i32"
    ],
    "returns": "bool"
  },
  "IsKeyPressedRepeat": {
    "args": [
      "i32"
    ],
    "returns": "bool"
  },
  "IsKeyDown": {
    "args": [
      "i32"
    ],
    "returns": "bool"
  },
  "IsKeyReleased": {
    "args": [
      "i32"
    ],
    "returns": "bool"
  },
  "IsKeyUp": {
    "args": [
      "i32"
    ],
    "returns": "bool"
  },
  "GetKeyPressed": {
    "args": [],
    "returns": "i32"
  },
  "GetCharPressed": {
    "args": [],
    "returns": "i32"
  },
  "SetExitKey": {
    "args": [
      "i32"
    ]
  },
  "IsGamepadAvailable": {
    "args": [
      "i32"
    ],
    "returns": "bool"
  },
  "GetGamepadName": {
    "args": [
      "i32"
    ],
    "returns": "ptr"
  },
  "IsGamepadButtonPressed": {
    "args": [
      "i32",
      "i32"
    ],
    "returns": "bool"
  },
  "IsGamepadButtonDown": {
    "args": [
      "i32",
      "i32"
    ],
    "returns": "bool"
  },
  "IsGamepadButtonReleased": {
    "args": [
      "i32",
      "i32"
    ],
    "returns": "bool"
  },
  "IsGamepadButtonUp": {
    "args": [
      "i32",
      "i32"
    ],
    "returns": "bool"
  },
  "GetGamepadButtonPressed": {
    "args": [],
    "returns": "i32"
  },
  "GetGamepadAxisCount": {
    "args": [
      "i32"
    ],
    "returns": "i32"
  },
  "GetGamepadAxisMovement": {
    "args": [
      "i32",
      "i32"
    ],
    "returns": "f32"
  },
  "SetGamepadMappings": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "IsMouseButtonPressed": {
    "args": [
      "i32"
    ],
    "returns": "bool"
  },
  "IsMouseButtonDown": {
    "args": [
      "i32"
    ],
    "returns": "bool"
  },
  "IsMouseButtonReleased": {
    "args": [
      "i32"
    ],
    "returns": "bool"
  },
  "IsMouseButtonUp": {
    "args": [
      "i32"
    ],
    "returns": "bool"
  },
  "GetMouseX": {
    "args": [],
    "returns": "i32"
  },
  "GetMouseY": {
    "args": [],
    "returns": "i32"
  },
  "SetMousePosition": {
    "args": [
      "i32",
      "i32"
    ]
  },
  "SetMouseOffset": {
    "args": [
      "i32",
      "i32"
    ]
  },
  "SetMouseScale": {
    "args": [
      "f32",
      "f32"
    ]
  },
  "GetMouseWheelMove": {
    "args": [],
    "returns": "f32"
  },
  "SetMouseCursor": {
    "args": [
      "i32"
    ]
  },
  "GetTouchX": {
    "args": [],
    "returns": "i32"
  },
  "GetTouchY": {
    "args": [],
    "returns": "i32"
  },
  "GetTouchPointId": {
    "args": [
      "i32"
    ],
    "returns": "i32"
  },
  "GetTouchPointCount": {
    "args": [],
    "returns": "i32"
  },
  "SetGesturesEnabled": {
    "args": [
      "u32"
    ]
  },
  "IsGestureDetected": {
    "args": [
      "u32"
    ],
    "returns": "bool"
  },
  "GetGestureDetected": {
    "args": [],
    "returns": "i32"
  },
  "GetGestureHoldDuration": {
    "args": [],
    "returns": "f32"
  },
  "GetGestureDragAngle": {
    "args": [],
    "returns": "f32"
  },
  "GetGesturePinchAngle": {
    "args": [],
    "returns": "f32"
  },
  "GetPixelDataSize": {
    "args": [
      "i32",
      "i32",
      "i32"
    ],
    "returns": "i32"
  },
  "DrawFPS": {
    "args": [
      "i32",
      "i32"
    ]
  },
  "SetTextLineSpacing": {
    "args": [
      "i32"
    ]
  },
  "MeasureText": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "i32"
  },
  "LoadUTF8": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "ptr"
  },
  "UnloadUTF8": {
    "args": [
      "ptr"
    ]
  },
  "LoadCodepoints": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "UnloadCodepoints": {
    "args": [
      "ptr"
    ]
  },
  "GetCodepointCount": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "GetCodepoint": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "i32"
  },
  "GetCodepointNext": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "i32"
  },
  "GetCodepointPrevious": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "i32"
  },
  "CodepointToUTF8": {
    "args": [
      "i32",
      "ptr"
    ],
    "returns": "ptr"
  },
  "TextCopy": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "i32"
  },
  "TextIsEqual": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "TextLength": {
    "args": [
      "ptr"
    ],
    "returns": "u32"
  },
  "TextSubtext": {
    "args": [
      "ptr",
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "TextReplace": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "TextInsert": {
    "args": [
      "ptr",
      "ptr",
      "i32"
    ],
    "returns": "ptr"
  },
  "TextJoin": {
    "args": [
      "ptr",
      "i32",
      "ptr"
    ],
    "returns": "ptr"
  },
  "TextSplit": {
    "args": [
      "ptr",
      "char",
      "ptr"
    ],
    "returns": "ptr"
  },
  "TextAppend": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "TextFindIndex": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "i32"
  },
  "TextToUpper": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "TextToLower": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "TextToPascal": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "TextToInteger": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "DrawGrid": {
    "args": [
      "i32",
      "f32"
    ]
  },
  "InitAudioDevice": {
    "args": []
  },
  "CloseAudioDevice": {
    "args": []
  },
  "IsAudioDeviceReady": {
    "args": [],
    "returns": "bool"
  },
  "SetMasterVolume": {
    "args": [
      "f32"
    ]
  },
  "GetMasterVolume": {
    "args": [],
    "returns": "f32"
  },
  "UnloadWaveSamples": {
    "args": [
      "ptr"
    ]
  },
  "SetAudioStreamBufferSizeDefault": {
    "args": [
      "i32"
    ]
  },
  "wrapped_SetWindowIcon": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_SetWindowIcons": {
    "args": [
      "ptr",
      "i32"
    ]
  },
  "wrapped_GetMonitorPosition": {
    "args": [
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_GetWindowPosition": {
    "args": [],
    "returns": "ptr"
  },
  "wrapped_GetWindowScaleDPI": {
    "args": [],
    "returns": "ptr"
  },
  "wrapped_ClearBackground": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_BeginMode2D": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_BeginMode3D": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_BeginTextureMode": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_BeginShaderMode": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_BeginVrStereoMode": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_LoadVrStereoConfig": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_UnloadVrStereoConfig": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_LoadShader": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadShaderFromMemory": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_IsShaderReady": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_GetShaderLocation": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "i32"
  },
  "wrapped_GetShaderLocationAttrib": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "i32"
  },
  "wrapped_SetShaderValue": {
    "args": [
      "ptr",
      "i32",
      "ptr",
      "i32"
    ]
  },
  "wrapped_SetShaderValueV": {
    "args": [
      "ptr",
      "i32",
      "ptr",
      "i32",
      "i32"
    ]
  },
  "wrapped_SetShaderValueMatrix": {
    "args": [
      "ptr",
      "i32",
      "ptr"
    ]
  },
  "wrapped_SetShaderValueTexture": {
    "args": [
      "ptr",
      "i32",
      "ptr"
    ]
  },
  "wrapped_UnloadShader": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_GetMouseRay": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GetCameraMatrix": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GetCameraMatrix2D": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GetWorldToScreen": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GetScreenToWorld2D": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GetWorldToScreenEx": {
    "args": [
      "ptr",
      "ptr",
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_GetWorldToScreen2D": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_SetTraceLogCallback": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_SetLoadFileDataCallback": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_SetSaveFileDataCallback": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_SetLoadFileTextCallback": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_SetSaveFileTextCallback": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_LoadDirectoryFiles": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadDirectoryFilesEx": {
    "args": [
      "ptr",
      "ptr",
      "bool"
    ],
    "returns": "ptr"
  },
  "wrapped_UnloadDirectoryFiles": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_LoadDroppedFiles": {
    "args": [],
    "returns": "ptr"
  },
  "wrapped_UnloadDroppedFiles": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_GetMousePosition": {
    "args": [],
    "returns": "ptr"
  },
  "wrapped_GetMouseDelta": {
    "args": [],
    "returns": "ptr"
  },
  "wrapped_GetMouseWheelMoveV": {
    "args": [],
    "returns": "ptr"
  },
  "wrapped_GetTouchPosition": {
    "args": [
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_GetGestureDragVector": {
    "args": [],
    "returns": "ptr"
  },
  "wrapped_GetGesturePinchVector": {
    "args": [],
    "returns": "ptr"
  },
  "wrapped_UpdateCamera": {
    "args": [
      "ptr",
      "i32"
    ]
  },
  "wrapped_UpdateCameraPro": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "f32"
    ]
  },
  "wrapped_SetShapesTexture": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawPixel": {
    "args": [
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawPixelV": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawLine": {
    "args": [
      "i32",
      "i32",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawLineV": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawLineEx": {
    "args": [
      "ptr",
      "ptr",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawLineStrip": {
    "args": [
      "ptr",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawCircle": {
    "args": [
      "i32",
      "i32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawCircleSector": {
    "args": [
      "ptr",
      "f32",
      "f32",
      "f32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawCircleSectorLines": {
    "args": [
      "ptr",
      "f32",
      "f32",
      "f32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawCircleGradient": {
    "args": [
      "i32",
      "i32",
      "f32",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawCircleV": {
    "args": [
      "ptr",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawCircleLines": {
    "args": [
      "i32",
      "i32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawEllipse": {
    "args": [
      "i32",
      "i32",
      "f32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawEllipseLines": {
    "args": [
      "i32",
      "i32",
      "f32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawRing": {
    "args": [
      "ptr",
      "f32",
      "f32",
      "f32",
      "f32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawRingLines": {
    "args": [
      "ptr",
      "f32",
      "f32",
      "f32",
      "f32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawRectangle": {
    "args": [
      "i32",
      "i32",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawRectangleV": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawRectangleRec": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawRectanglePro": {
    "args": [
      "ptr",
      "ptr",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawRectangleGradientV": {
    "args": [
      "i32",
      "i32",
      "i32",
      "i32",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawRectangleGradientH": {
    "args": [
      "i32",
      "i32",
      "i32",
      "i32",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawRectangleGradientEx": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawRectangleLines": {
    "args": [
      "i32",
      "i32",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawRectangleLinesEx": {
    "args": [
      "ptr",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawRectangleRounded": {
    "args": [
      "ptr",
      "f32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawRectangleRoundedLines": {
    "args": [
      "ptr",
      "f32",
      "i32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawTriangle": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawTriangleLines": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawTriangleFan": {
    "args": [
      "ptr",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawTriangleStrip": {
    "args": [
      "ptr",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawPoly": {
    "args": [
      "ptr",
      "i32",
      "f32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawPolyLines": {
    "args": [
      "ptr",
      "i32",
      "f32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawPolyLinesEx": {
    "args": [
      "ptr",
      "i32",
      "f32",
      "f32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_CheckCollisionRecs": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_CheckCollisionCircles": {
    "args": [
      "ptr",
      "f32",
      "ptr",
      "f32"
    ],
    "returns": "bool"
  },
  "wrapped_CheckCollisionCircleRec": {
    "args": [
      "ptr",
      "f32",
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_CheckCollisionPointRec": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_CheckCollisionPointCircle": {
    "args": [
      "ptr",
      "ptr",
      "f32"
    ],
    "returns": "bool"
  },
  "wrapped_CheckCollisionPointTriangle": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_CheckCollisionPointPoly": {
    "args": [
      "ptr",
      "ptr",
      "i32"
    ],
    "returns": "bool"
  },
  "wrapped_CheckCollisionLines": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_CheckCollisionPointLine": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "i32"
    ],
    "returns": "bool"
  },
  "wrapped_GetCollisionRec": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadImage": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadImageRaw": {
    "args": [
      "ptr",
      "i32",
      "i32",
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadImageSvg": {
    "args": [
      "ptr",
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadImageAnim": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadImageFromMemory": {
    "args": [
      "ptr",
      "ptr",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadImageFromTexture": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadImageFromScreen": {
    "args": [],
    "returns": "ptr"
  },
  "wrapped_IsImageReady": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_UnloadImage": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_ExportImage": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_ExportImageToMemory": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_ExportImageAsCode": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_GenImageColor": {
    "args": [
      "i32",
      "i32",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GenImageGradientLinear": {
    "args": [
      "i32",
      "i32",
      "i32",
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GenImageGradientRadial": {
    "args": [
      "i32",
      "i32",
      "f32",
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GenImageGradientSquare": {
    "args": [
      "i32",
      "i32",
      "f32",
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GenImageChecked": {
    "args": [
      "i32",
      "i32",
      "i32",
      "i32",
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GenImageWhiteNoise": {
    "args": [
      "i32",
      "i32",
      "f32"
    ],
    "returns": "ptr"
  },
  "wrapped_GenImagePerlinNoise": {
    "args": [
      "i32",
      "i32",
      "i32",
      "i32",
      "f32"
    ],
    "returns": "ptr"
  },
  "wrapped_GenImageCellular": {
    "args": [
      "i32",
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_GenImageText": {
    "args": [
      "i32",
      "i32",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_ImageCopy": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_ImageFromImage": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_ImageText": {
    "args": [
      "ptr",
      "i32",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_ImageTextEx": {
    "args": [
      "ptr",
      "ptr",
      "f32",
      "f32",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_ImageFormat": {
    "args": [
      "ptr",
      "i32"
    ]
  },
  "wrapped_ImageToPOT": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_ImageCrop": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_ImageAlphaCrop": {
    "args": [
      "ptr",
      "f32"
    ]
  },
  "wrapped_ImageAlphaClear": {
    "args": [
      "ptr",
      "ptr",
      "f32"
    ]
  },
  "wrapped_ImageAlphaMask": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_ImageAlphaPremultiply": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_ImageBlurGaussian": {
    "args": [
      "ptr",
      "i32"
    ]
  },
  "wrapped_ImageResize": {
    "args": [
      "ptr",
      "i32",
      "i32"
    ]
  },
  "wrapped_ImageResizeNN": {
    "args": [
      "ptr",
      "i32",
      "i32"
    ]
  },
  "wrapped_ImageResizeCanvas": {
    "args": [
      "ptr",
      "i32",
      "i32",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_ImageMipmaps": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_ImageDither": {
    "args": [
      "ptr",
      "i32",
      "i32",
      "i32",
      "i32"
    ]
  },
  "wrapped_ImageFlipVertical": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_ImageFlipHorizontal": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_ImageRotate": {
    "args": [
      "ptr",
      "i32"
    ]
  },
  "wrapped_ImageRotateCW": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_ImageRotateCCW": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_ImageColorTint": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_ImageColorInvert": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_ImageColorGrayscale": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_ImageColorContrast": {
    "args": [
      "ptr",
      "f32"
    ]
  },
  "wrapped_ImageColorBrightness": {
    "args": [
      "ptr",
      "i32"
    ]
  },
  "wrapped_ImageColorReplace": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_LoadImageColors": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadImagePalette": {
    "args": [
      "ptr",
      "i32",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_UnloadImageColors": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_UnloadImagePalette": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_GetImageAlphaBorder": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "ptr"
  },
  "wrapped_GetImageColor": {
    "args": [
      "ptr",
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_ImageClearBackground": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_ImageDrawPixel": {
    "args": [
      "ptr",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_ImageDrawPixelV": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_ImageDrawLine": {
    "args": [
      "ptr",
      "i32",
      "i32",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_ImageDrawLineV": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_ImageDrawCircle": {
    "args": [
      "ptr",
      "i32",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_ImageDrawCircleV": {
    "args": [
      "ptr",
      "ptr",
      "i32",
      "ptr"
    ]
  },
  "wrapped_ImageDrawCircleLines": {
    "args": [
      "ptr",
      "i32",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_ImageDrawCircleLinesV": {
    "args": [
      "ptr",
      "ptr",
      "i32",
      "ptr"
    ]
  },
  "wrapped_ImageDrawRectangle": {
    "args": [
      "ptr",
      "i32",
      "i32",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_ImageDrawRectangleV": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_ImageDrawRectangleRec": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_ImageDrawRectangleLines": {
    "args": [
      "ptr",
      "ptr",
      "i32",
      "ptr"
    ]
  },
  "wrapped_ImageDraw": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_ImageDrawText": {
    "args": [
      "ptr",
      "ptr",
      "i32",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_ImageDrawTextEx": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr",
      "f32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_LoadTexture": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadTextureFromImage": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadTextureCubemap": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadRenderTexture": {
    "args": [
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_IsTextureReady": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_UnloadTexture": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_IsRenderTextureReady": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_UnloadRenderTexture": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_UpdateTexture": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_UpdateTextureRec": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_GenTextureMipmaps": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_SetTextureFilter": {
    "args": [
      "ptr",
      "i32"
    ]
  },
  "wrapped_SetTextureWrap": {
    "args": [
      "ptr",
      "i32"
    ]
  },
  "wrapped_DrawTexture": {
    "args": [
      "ptr",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawTextureV": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawTextureEx": {
    "args": [
      "ptr",
      "ptr",
      "f32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawTextureRec": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawTexturePro": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawTextureNPatch": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr",
      "f32",
      "ptr"
    ]
  },
  "wrapped_Fade": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "ptr"
  },
  "wrapped_ColorToInt": {
    "args": [
      "ptr"
    ],
    "returns": "i32"
  },
  "wrapped_ColorNormalize": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_ColorFromNormalized": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_ColorToHSV": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_ColorFromHSV": {
    "args": [
      "f32",
      "f32",
      "f32"
    ],
    "returns": "ptr"
  },
  "wrapped_ColorTint": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_ColorBrightness": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "ptr"
  },
  "wrapped_ColorContrast": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "ptr"
  },
  "wrapped_ColorAlpha": {
    "args": [
      "ptr",
      "f32"
    ],
    "returns": "ptr"
  },
  "wrapped_ColorAlphaBlend": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GetColor": {
    "args": [
      "u32"
    ],
    "returns": "ptr"
  },
  "wrapped_GetPixelColor": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_SetPixelColor": {
    "args": [
      "ptr",
      "ptr",
      "i32"
    ]
  },
  "wrapped_GetFontDefault": {
    "args": [],
    "returns": "ptr"
  },
  "wrapped_LoadFont": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadFontEx": {
    "args": [
      "ptr",
      "i32",
      "ptr",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadFontFromImage": {
    "args": [
      "ptr",
      "ptr",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadFontFromMemory": {
    "args": [
      "ptr",
      "ptr",
      "i32",
      "i32",
      "ptr",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_IsFontReady": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_LoadFontData": {
    "args": [
      "ptr",
      "i32",
      "i32",
      "ptr",
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_GenImageFontAtlas": {
    "args": [
      "ptr",
      "ptr",
      "i32",
      "i32",
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_UnloadFontData": {
    "args": [
      "ptr",
      "i32"
    ]
  },
  "wrapped_UnloadFont": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_ExportFontAsCode": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_DrawText": {
    "args": [
      "ptr",
      "i32",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawTextEx": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "f32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawTextPro": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr",
      "f32",
      "f32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawTextCodepoint": {
    "args": [
      "ptr",
      "i32",
      "ptr",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawTextCodepoints": {
    "args": [
      "ptr",
      "ptr",
      "i32",
      "ptr",
      "f32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_MeasureTextEx": {
    "args": [
      "ptr",
      "ptr",
      "f32",
      "f32"
    ],
    "returns": "ptr"
  },
  "wrapped_GetGlyphIndex": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "i32"
  },
  "wrapped_GetGlyphInfo": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_GetGlyphAtlasRec": {
    "args": [
      "ptr",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_DrawLine3D": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawPoint3D": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawCircle3D": {
    "args": [
      "ptr",
      "f32",
      "ptr",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawTriangle3D": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawTriangleStrip3D": {
    "args": [
      "ptr",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawCube": {
    "args": [
      "ptr",
      "f32",
      "f32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawCubeV": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawCubeWires": {
    "args": [
      "ptr",
      "f32",
      "f32",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawCubeWiresV": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawSphere": {
    "args": [
      "ptr",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawSphereEx": {
    "args": [
      "ptr",
      "f32",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawSphereWires": {
    "args": [
      "ptr",
      "f32",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawCylinder": {
    "args": [
      "ptr",
      "f32",
      "f32",
      "f32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawCylinderEx": {
    "args": [
      "ptr",
      "ptr",
      "f32",
      "f32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawCylinderWires": {
    "args": [
      "ptr",
      "f32",
      "f32",
      "f32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawCylinderWiresEx": {
    "args": [
      "ptr",
      "ptr",
      "f32",
      "f32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawCapsule": {
    "args": [
      "ptr",
      "ptr",
      "f32",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawCapsuleWires": {
    "args": [
      "ptr",
      "ptr",
      "f32",
      "i32",
      "i32",
      "ptr"
    ]
  },
  "wrapped_DrawPlane": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawRay": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_LoadModel": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadModelFromMesh": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_IsModelReady": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_UnloadModel": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_GetModelBoundingBox": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_DrawModel": {
    "args": [
      "ptr",
      "ptr",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawModelEx": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "f32",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawModelWires": {
    "args": [
      "ptr",
      "ptr",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawModelWiresEx": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "f32",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawBoundingBox": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawBillboard": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "f32",
      "ptr"
    ]
  },
  "wrapped_DrawBillboardRec": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawBillboardPro": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr",
      "ptr",
      "ptr",
      "ptr",
      "f32",
      "ptr"
    ]
  },
  "wrapped_UploadMesh": {
    "args": [
      "ptr",
      "bool"
    ]
  },
  "wrapped_UpdateMeshBuffer": {
    "args": [
      "ptr",
      "i32",
      "ptr",
      "i32",
      "i32"
    ]
  },
  "wrapped_UnloadMesh": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_DrawMesh": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DrawMeshInstanced": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "i32"
    ]
  },
  "wrapped_ExportMesh": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_GetMeshBoundingBox": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GenMeshTangents": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_GenMeshPoly": {
    "args": [
      "i32",
      "f32"
    ],
    "returns": "ptr"
  },
  "wrapped_GenMeshPlane": {
    "args": [
      "f32",
      "f32",
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_GenMeshCube": {
    "args": [
      "f32",
      "f32",
      "f32"
    ],
    "returns": "ptr"
  },
  "wrapped_GenMeshSphere": {
    "args": [
      "f32",
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_GenMeshHemiSphere": {
    "args": [
      "f32",
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_GenMeshCylinder": {
    "args": [
      "f32",
      "f32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_GenMeshCone": {
    "args": [
      "f32",
      "f32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_GenMeshTorus": {
    "args": [
      "f32",
      "f32",
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_GenMeshKnot": {
    "args": [
      "f32",
      "f32",
      "i32",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_GenMeshHeightmap": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GenMeshCubicmap": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadMaterials": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadMaterialDefault": {
    "args": [],
    "returns": "ptr"
  },
  "wrapped_IsMaterialReady": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_UnloadMaterial": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_SetMaterialTexture": {
    "args": [
      "ptr",
      "i32",
      "ptr"
    ]
  },
  "wrapped_SetModelMeshMaterial": {
    "args": [
      "ptr",
      "i32",
      "i32"
    ]
  },
  "wrapped_LoadModelAnimations": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_UpdateModelAnimation": {
    "args": [
      "ptr",
      "ptr",
      "i32"
    ]
  },
  "wrapped_UnloadModelAnimation": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_UnloadModelAnimations": {
    "args": [
      "ptr",
      "i32"
    ]
  },
  "wrapped_IsModelAnimationValid": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_CheckCollisionSpheres": {
    "args": [
      "ptr",
      "f32",
      "ptr",
      "f32"
    ],
    "returns": "bool"
  },
  "wrapped_CheckCollisionBoxes": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_CheckCollisionBoxSphere": {
    "args": [
      "ptr",
      "ptr",
      "f32"
    ],
    "returns": "bool"
  },
  "wrapped_GetRayCollisionSphere": {
    "args": [
      "ptr",
      "ptr",
      "f32"
    ],
    "returns": "ptr"
  },
  "wrapped_GetRayCollisionBox": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GetRayCollisionMesh": {
    "args": [
      "ptr",
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GetRayCollisionTriangle": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_GetRayCollisionQuad": {
    "args": [
      "ptr",
      "ptr",
      "ptr",
      "ptr",
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadWave": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadWaveFromMemory": {
    "args": [
      "ptr",
      "ptr",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_IsWaveReady": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_LoadSound": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadSoundFromWave": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadSoundAlias": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_IsSoundReady": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_UpdateSound": {
    "args": [
      "ptr",
      "ptr",
      "i32"
    ]
  },
  "wrapped_UnloadWave": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_UnloadSound": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_UnloadSoundAlias": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_ExportWave": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_ExportWaveAsCode": {
    "args": [
      "ptr",
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_PlaySound": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_StopSound": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_PauseSound": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_ResumeSound": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_IsSoundPlaying": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_SetSoundVolume": {
    "args": [
      "ptr",
      "f32"
    ]
  },
  "wrapped_SetSoundPitch": {
    "args": [
      "ptr",
      "f32"
    ]
  },
  "wrapped_SetSoundPan": {
    "args": [
      "ptr",
      "f32"
    ]
  },
  "wrapped_WaveCopy": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_WaveCrop": {
    "args": [
      "ptr",
      "i32",
      "i32"
    ]
  },
  "wrapped_WaveFormat": {
    "args": [
      "ptr",
      "i32",
      "i32",
      "i32"
    ]
  },
  "wrapped_LoadWaveSamples": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadMusicStream": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "wrapped_LoadMusicStreamFromMemory": {
    "args": [
      "ptr",
      "ptr",
      "i32"
    ],
    "returns": "ptr"
  },
  "wrapped_IsMusicReady": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_UnloadMusicStream": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_PlayMusicStream": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_IsMusicStreamPlaying": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_UpdateMusicStream": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_StopMusicStream": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_PauseMusicStream": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_ResumeMusicStream": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_SeekMusicStream": {
    "args": [
      "ptr",
      "f32"
    ]
  },
  "wrapped_SetMusicVolume": {
    "args": [
      "ptr",
      "f32"
    ]
  },
  "wrapped_SetMusicPitch": {
    "args": [
      "ptr",
      "f32"
    ]
  },
  "wrapped_SetMusicPan": {
    "args": [
      "ptr",
      "f32"
    ]
  },
  "wrapped_GetMusicTimeLength": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "wrapped_GetMusicTimePlayed": {
    "args": [
      "ptr"
    ],
    "returns": "f32"
  },
  "wrapped_LoadAudioStream": {
    "args": [
      "u32",
      "u32",
      "u32"
    ],
    "returns": "ptr"
  },
  "wrapped_IsAudioStreamReady": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_UnloadAudioStream": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_UpdateAudioStream": {
    "args": [
      "ptr",
      "ptr",
      "i32"
    ]
  },
  "wrapped_IsAudioStreamProcessed": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_PlayAudioStream": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_PauseAudioStream": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_ResumeAudioStream": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_IsAudioStreamPlaying": {
    "args": [
      "ptr"
    ],
    "returns": "bool"
  },
  "wrapped_StopAudioStream": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_SetAudioStreamVolume": {
    "args": [
      "ptr",
      "f32"
    ]
  },
  "wrapped_SetAudioStreamPitch": {
    "args": [
      "ptr",
      "f32"
    ]
  },
  "wrapped_SetAudioStreamPan": {
    "args": [
      "ptr",
      "f32"
    ]
  },
  "wrapped_SetAudioStreamCallback": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_AttachAudioStreamProcessor": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_DetachAudioStreamProcessor": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "wrapped_AttachAudioMixedProcessor": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_DetachAudioMixedProcessor": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_alloc": {
    "args": [
      "u32"
    ],
    "returns": "ptr"
  },
  "wrapped_free": {
    "args": [
      "ptr"
    ]
  },
  "wrapped_WindowShouldClose": {
    "args": [],
    "returns": "bool"
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  "Image_size": {
    "args": [],
    "returns": "u32"
  },
  "Image_get_data": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Image_set_data": {
    "args": [
      "ptr",
      "ptr"
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  "Mesh_get_vertices": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Mesh_set_vertices": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "Mesh_get_texcoords": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Mesh_set_texcoords": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "Mesh_get_texcoords2": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Mesh_set_texcoords2": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "Mesh_get_normals": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Mesh_set_normals": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "Mesh_get_tangents": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Mesh_set_tangents": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "Mesh_get_colors": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Mesh_set_colors": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "Mesh_get_indices": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Mesh_set_indices": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "Mesh_get_animVertices": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Mesh_set_animVertices": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "Mesh_get_animNormals": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Mesh_set_animNormals": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "Mesh_get_boneIds": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Mesh_set_boneIds": {
    "args": [
      "ptr",
      "ptr"
    ]
  },
  "Mesh_get_boneWeights": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Mesh_set_boneWeights": {
    "args": [
      "ptr",
      "ptr"
    ]
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
    ]
  },
  "Mesh_get_vboId": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Mesh_set_vboId": {
    "args": [
      "ptr",
      "ptr"
    ]
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
    ]
  },
  "Shader_get_locs": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Shader_set_locs": {
    "args": [
      "ptr",
      "ptr"
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  "Wave_get_data": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "Wave_set_data": {
    "args": [
      "ptr",
      "ptr"
    ]
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
    ]
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
    ]
  },
  "FilePathList_get_paths": {
    "args": [
      "ptr"
    ],
    "returns": "ptr"
  },
  "FilePathList_set_paths": {
    "args": [
      "ptr",
      "ptr"
    ]
  }
}

const { symbols } = dlopen(`build/librlptr.${suffix}`, ffi)

// convert a string into a pointer to a buffer
const cstr = s => ptr(Buffer.from((s || ' ')))



export const alloc = symbols.wrapped_alloc
export const free = symbols.wrapped_free
export const WindowShouldClose = symbols.wrapped_WindowShouldClose

// these don't need any wrapping
export const { CloseWindow, BeginDrawing, EndDrawing, SetTargetFPS, DrawFPS } = symbols

// these need a little adjustment
export const ClearBackground = color => symbols.wrapped_ClearBackground(color._addr)

export const DrawText = (text, posX, posY, fontSize, color) => symbols.wrapped_DrawText(cstr(text), posX, posY, fontSize, color._addr)

export const InitWindow = (width, height, title) => symbols.InitWindow(width, height, cstr(title))

// this is example with pointer param/return
export const Fade = (color, alpha) => new Color({}, symbols.wrapped_Fade(color._addr, alpha))

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
export class AutomationEvent {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.AutomationEvent_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get frame() {
    return symbols.AutomationEvent_get_frame(this._addr)
  }
  set frame(v) {
    return symbols.AutomationEvent_set_frame(this._addr, v)
  }
  get type() {
    return symbols.AutomationEvent_get_type(this._addr)
  }
  set type(v) {
    return symbols.AutomationEvent_set_type(this._addr, v)
  }
}
export class AutomationEventList {
  constructor (init = {}, address) {
    this._addr = address || alloc(symbols.AutomationEventList_size())
    for (const k of Object.keys(init)) {
      this[k] = init[k]
    }
  }

  get capacity() {
    return symbols.AutomationEventList_get_capacity(this._addr)
  }
  set capacity(v) {
    return symbols.AutomationEventList_set_capacity(this._addr, v)
  }
  get count() {
    return symbols.AutomationEventList_get_count(this._addr)
  }
  set count(v) {
    return symbols.AutomationEventList_set_count(this._addr, v)
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