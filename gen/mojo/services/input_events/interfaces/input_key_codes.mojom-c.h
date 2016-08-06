// This file was auto-generated by the C bindings generator.

#ifndef MOJO_SERVICES_INPUT_EVENTS_INTERFACES_INPUT_KEY_CODES_MOJOM_C_H_
#define MOJO_SERVICES_INPUT_EVENTS_INTERFACES_INPUT_KEY_CODES_MOJOM_C_H_

#include <assert.h>
#include <math.h>
#include <stdbool.h>
#include <stdint.h>

#include "mojo/public/c/bindings/array.h"
#include "mojo/public/c/bindings/buffer.h"
#include "mojo/public/c/bindings/interface.h"
#include "mojo/public/c/bindings/lib/type_table.h"
#include "mojo/public/c/bindings/map.h"
#include "mojo/public/c/bindings/string.h"
#include "mojo/public/c/bindings/validation.h"
#include "mojo/public/c/system/handle.h"

// Imports.


// Forward declarations for structs.
// Forward declarations for unions.
// Top level constants.


// Top level enums.
typedef uint32_t mojo_KeyboardCode;
enum mojo_KeyboardCode_Enum {
  mojo_KeyboardCode_BACK = 8,
  mojo_KeyboardCode_TAB = 9,
  mojo_KeyboardCode_CLEAR = 12,
  mojo_KeyboardCode_RETURN = 13,
  mojo_KeyboardCode_SHIFT = 16,
  mojo_KeyboardCode_CONTROL = 17,
  mojo_KeyboardCode_MENU = 18,
  mojo_KeyboardCode_PAUSE = 19,
  mojo_KeyboardCode_CAPITAL = 20,
  mojo_KeyboardCode_KANA = 21,
  mojo_KeyboardCode_HANGUL = 21,
  mojo_KeyboardCode_JUNJA = 23,
  mojo_KeyboardCode_FINAL = 24,
  mojo_KeyboardCode_HANJA = 25,
  mojo_KeyboardCode_KANJI = 25,
  mojo_KeyboardCode_ESCAPE = 27,
  mojo_KeyboardCode_CONVERT = 28,
  mojo_KeyboardCode_NONCONVERT = 29,
  mojo_KeyboardCode_ACCEPT = 30,
  mojo_KeyboardCode_MODECHANGE = 31,
  mojo_KeyboardCode_SPACE = 32,
  mojo_KeyboardCode_PRIOR = 33,
  mojo_KeyboardCode_NEXT = 34,
  mojo_KeyboardCode_END = 35,
  mojo_KeyboardCode_HOME = 36,
  mojo_KeyboardCode_LEFT = 37,
  mojo_KeyboardCode_UP = 38,
  mojo_KeyboardCode_RIGHT = 39,
  mojo_KeyboardCode_DOWN = 40,
  mojo_KeyboardCode_SELECT = 41,
  mojo_KeyboardCode_PRINT = 42,
  mojo_KeyboardCode_EXECUTE = 43,
  mojo_KeyboardCode_SNAPSHOT = 44,
  mojo_KeyboardCode_INSERT = 45,
  mojo_KeyboardCode_DELETE = 46,
  mojo_KeyboardCode_HELP = 47,
  mojo_KeyboardCode_NUM_0 = 48,
  mojo_KeyboardCode_NUM_1 = 49,
  mojo_KeyboardCode_NUM_2 = 50,
  mojo_KeyboardCode_NUM_3 = 51,
  mojo_KeyboardCode_NUM_4 = 52,
  mojo_KeyboardCode_NUM_5 = 53,
  mojo_KeyboardCode_NUM_6 = 54,
  mojo_KeyboardCode_NUM_7 = 55,
  mojo_KeyboardCode_NUM_8 = 56,
  mojo_KeyboardCode_NUM_9 = 57,
  mojo_KeyboardCode_A = 65,
  mojo_KeyboardCode_B = 66,
  mojo_KeyboardCode_C = 67,
  mojo_KeyboardCode_D = 68,
  mojo_KeyboardCode_E = 69,
  mojo_KeyboardCode_F = 70,
  mojo_KeyboardCode_G = 71,
  mojo_KeyboardCode_H = 72,
  mojo_KeyboardCode_I = 73,
  mojo_KeyboardCode_J = 74,
  mojo_KeyboardCode_K = 75,
  mojo_KeyboardCode_L = 76,
  mojo_KeyboardCode_M = 77,
  mojo_KeyboardCode_N = 78,
  mojo_KeyboardCode_O = 79,
  mojo_KeyboardCode_P = 80,
  mojo_KeyboardCode_Q = 81,
  mojo_KeyboardCode_R = 82,
  mojo_KeyboardCode_S = 83,
  mojo_KeyboardCode_T = 84,
  mojo_KeyboardCode_U = 85,
  mojo_KeyboardCode_V = 86,
  mojo_KeyboardCode_W = 87,
  mojo_KeyboardCode_X = 88,
  mojo_KeyboardCode_Y = 89,
  mojo_KeyboardCode_Z = 90,
  mojo_KeyboardCode_LWIN = 91,
  mojo_KeyboardCode_COMMAND = 91,
  mojo_KeyboardCode_RWIN = 92,
  mojo_KeyboardCode_APPS = 93,
  mojo_KeyboardCode_SLEEP = 95,
  mojo_KeyboardCode_NUMPAD0 = 96,
  mojo_KeyboardCode_NUMPAD1 = 97,
  mojo_KeyboardCode_NUMPAD2 = 98,
  mojo_KeyboardCode_NUMPAD3 = 99,
  mojo_KeyboardCode_NUMPAD4 = 100,
  mojo_KeyboardCode_NUMPAD5 = 101,
  mojo_KeyboardCode_NUMPAD6 = 102,
  mojo_KeyboardCode_NUMPAD7 = 103,
  mojo_KeyboardCode_NUMPAD8 = 104,
  mojo_KeyboardCode_NUMPAD9 = 105,
  mojo_KeyboardCode_MULTIPLY = 106,
  mojo_KeyboardCode_ADD = 107,
  mojo_KeyboardCode_SEPARATOR = 108,
  mojo_KeyboardCode_SUBTRACT = 109,
  mojo_KeyboardCode_DECIMAL = 110,
  mojo_KeyboardCode_DIVIDE = 111,
  mojo_KeyboardCode_F1 = 112,
  mojo_KeyboardCode_F2 = 113,
  mojo_KeyboardCode_F3 = 114,
  mojo_KeyboardCode_F4 = 115,
  mojo_KeyboardCode_F5 = 116,
  mojo_KeyboardCode_F6 = 117,
  mojo_KeyboardCode_F7 = 118,
  mojo_KeyboardCode_F8 = 119,
  mojo_KeyboardCode_F9 = 120,
  mojo_KeyboardCode_F10 = 121,
  mojo_KeyboardCode_F11 = 122,
  mojo_KeyboardCode_F12 = 123,
  mojo_KeyboardCode_F13 = 124,
  mojo_KeyboardCode_F14 = 125,
  mojo_KeyboardCode_F15 = 126,
  mojo_KeyboardCode_F16 = 127,
  mojo_KeyboardCode_F17 = 128,
  mojo_KeyboardCode_F18 = 129,
  mojo_KeyboardCode_F19 = 130,
  mojo_KeyboardCode_F20 = 131,
  mojo_KeyboardCode_F21 = 132,
  mojo_KeyboardCode_F22 = 133,
  mojo_KeyboardCode_F23 = 134,
  mojo_KeyboardCode_F24 = 135,
  mojo_KeyboardCode_NUMLOCK = 144,
  mojo_KeyboardCode_SCROLL = 145,
  mojo_KeyboardCode_LSHIFT = 160,
  mojo_KeyboardCode_RSHIFT = 161,
  mojo_KeyboardCode_LCONTROL = 162,
  mojo_KeyboardCode_RCONTROL = 163,
  mojo_KeyboardCode_LMENU = 164,
  mojo_KeyboardCode_RMENU = 165,
  mojo_KeyboardCode_BROWSER_BACK = 166,
  mojo_KeyboardCode_BROWSER_FORWARD = 167,
  mojo_KeyboardCode_BROWSER_REFRESH = 168,
  mojo_KeyboardCode_BROWSER_STOP = 169,
  mojo_KeyboardCode_BROWSER_SEARCH = 170,
  mojo_KeyboardCode_BROWSER_FAVORITES = 171,
  mojo_KeyboardCode_BROWSER_HOME = 172,
  mojo_KeyboardCode_VOLUME_MUTE = 173,
  mojo_KeyboardCode_VOLUME_DOWN = 174,
  mojo_KeyboardCode_VOLUME_UP = 175,
  mojo_KeyboardCode_MEDIA_NEXT_TRACK = 176,
  mojo_KeyboardCode_MEDIA_PREV_TRACK = 177,
  mojo_KeyboardCode_MEDIA_STOP = 178,
  mojo_KeyboardCode_MEDIA_PLAY_PAUSE = 179,
  mojo_KeyboardCode_MEDIA_LAUNCH_MAIL = 180,
  mojo_KeyboardCode_MEDIA_LAUNCH_MEDIA_SELECT = 181,
  mojo_KeyboardCode_MEDIA_LAUNCH_APP1 = 182,
  mojo_KeyboardCode_MEDIA_LAUNCH_APP2 = 183,
  mojo_KeyboardCode_OEM_1 = 186,
  mojo_KeyboardCode_OEM_PLUS = 187,
  mojo_KeyboardCode_OEM_COMMA = 188,
  mojo_KeyboardCode_OEM_MINUS = 189,
  mojo_KeyboardCode_OEM_PERIOD = 190,
  mojo_KeyboardCode_OEM_2 = 191,
  mojo_KeyboardCode_OEM_3 = 192,
  mojo_KeyboardCode_OEM_4 = 219,
  mojo_KeyboardCode_OEM_5 = 220,
  mojo_KeyboardCode_OEM_6 = 221,
  mojo_KeyboardCode_OEM_7 = 222,
  mojo_KeyboardCode_OEM_8 = 223,
  mojo_KeyboardCode_OEM_102 = 226,
  mojo_KeyboardCode_PROCESSKEY = 229,
  mojo_KeyboardCode_PACKET = 231,
  mojo_KeyboardCode_DBE_SBCSCHAR = 243,
  mojo_KeyboardCode_DBE_DBCSCHAR = 244,
  mojo_KeyboardCode_ATTN = 246,
  mojo_KeyboardCode_CRSEL = 247,
  mojo_KeyboardCode_EXSEL = 248,
  mojo_KeyboardCode_EREOF = 249,
  mojo_KeyboardCode_PLAY = 250,
  mojo_KeyboardCode_ZOOM = 251,
  mojo_KeyboardCode_NONAME = 252,
  mojo_KeyboardCode_PA1 = 253,
  mojo_KeyboardCode_OEM_CLEAR = 254,
  mojo_KeyboardCode_UNKNOWN = 0,
  mojo_KeyboardCode_ALTGR = 225,
  
  mojo_KeyboardCode__UNKNOWN__ = 0xFFFFFFFF,
};



// Union definitions.


// Struct definitions.


// Interface definitions.


// Type tables declarations for structs and unions.





#endif  // MOJO_SERVICES_INPUT_EVENTS_INTERFACES_INPUT_KEY_CODES_MOJOM_C_H_