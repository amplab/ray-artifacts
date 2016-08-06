# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

class EventType(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('UNKNOWN', 0),
    ('KEY_PRESSED', 1),
    ('KEY_RELEASED', 2),
    ('POINTER_CANCEL', 3),
    ('POINTER_DOWN', 4),
    ('POINTER_MOVE', 5),
    ('POINTER_UP', 6),
  ]

class EventFlags(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('NONE', 0),
    ('CAPS_LOCK_DOWN', 1),
    ('SHIFT_DOWN', 2),
    ('CONTROL_DOWN', 4),
    ('ALT_DOWN', 8),
    ('LEFT_MOUSE_BUTTON', 16),
    ('MIDDLE_MOUSE_BUTTON', 32),
    ('RIGHT_MOUSE_BUTTON', 64),
    ('COMMAND_DOWN', 128),
    ('EXTENDED', 256),
    ('IS_SYNTHESIZED', 512),
    ('ALTGR_DOWN', 1024),
    ('MOD3_DOWN', 2048),
  ]

class MouseEventFlags(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('IS_DOUBLE_CLICK', 65536),
    ('IS_TRIPLE_CLICK', 131072),
    ('IS_NON_CLIENT', 262144),
  ]

class PointerKind(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('TOUCH', 0),
    ('MOUSE', 1),
  ]

