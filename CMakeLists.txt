cmake_minimum_required(VERSION 3.18)

project(rlptr
  DESCRIPTION "Pointer-only version of raylib"
  HOMEPAGE_URL "https://github.com/konsumer/raylib-pointers2"
  VERSION 0.0.1
  LANGUAGES C
)

include(FetchContent)

# raylib
set(FETCHCONTENT_QUIET FALSE)
set(BUILD_EXAMPLES OFF CACHE BOOL "" FORCE) # don't build the supplied examples
set(BUILD_GAMES    OFF CACHE BOOL "" FORCE) # don't build the supplied example games
FetchContent_Declare(
    raylib
    # GIT_REPOSITORY "https://github.com/raysan5/raylib.git"
    # GIT_TAG "master"
    # GIT_PROGRESS TRUE
    URL https://github.com/raysan5/raylib/archive/refs/tags/5.0.tar.gz
)
FetchContent_MakeAvailable(raylib)

add_library (${PROJECT_NAME} SHARED src/lib.c)
target_link_libraries(${PROJECT_NAME} STATIC raylib)
set_property(TARGET ${PROJECT_NAME} PROPERTY POSITION_INDEPENDENT_CODE ON)
