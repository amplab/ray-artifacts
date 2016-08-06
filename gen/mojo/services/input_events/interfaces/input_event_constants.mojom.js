// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/input_events/interfaces/input_event_constants.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {
  var EventType = {};
  EventType.UNKNOWN = 0;
  EventType.KEY_PRESSED = EventType.UNKNOWN + 1;
  EventType.KEY_RELEASED = EventType.KEY_PRESSED + 1;
  EventType.POINTER_CANCEL = EventType.KEY_RELEASED + 1;
  EventType.POINTER_DOWN = EventType.POINTER_CANCEL + 1;
  EventType.POINTER_MOVE = EventType.POINTER_DOWN + 1;
  EventType.POINTER_UP = EventType.POINTER_MOVE + 1;
  var EventFlags = {};
  EventFlags.NONE = 0;
  EventFlags.CAPS_LOCK_DOWN = 1;
  EventFlags.SHIFT_DOWN = 2;
  EventFlags.CONTROL_DOWN = 4;
  EventFlags.ALT_DOWN = 8;
  EventFlags.LEFT_MOUSE_BUTTON = 16;
  EventFlags.MIDDLE_MOUSE_BUTTON = 32;
  EventFlags.RIGHT_MOUSE_BUTTON = 64;
  EventFlags.COMMAND_DOWN = 128;
  EventFlags.EXTENDED = 256;
  EventFlags.IS_SYNTHESIZED = 512;
  EventFlags.ALTGR_DOWN = 1024;
  EventFlags.MOD3_DOWN = 2048;
  var MouseEventFlags = {};
  MouseEventFlags.IS_DOUBLE_CLICK = 65536;
  MouseEventFlags.IS_TRIPLE_CLICK = 131072;
  MouseEventFlags.IS_NON_CLIENT = 262144;
  var PointerKind = {};
  PointerKind.TOUCH = 0;
  PointerKind.MOUSE = PointerKind.TOUCH + 1;


  var exports = {};
  exports.EventType = EventType;
  exports.EventFlags = EventFlags;
  exports.MouseEventFlags = MouseEventFlags;
  exports.PointerKind = PointerKind;


  return exports;
});
