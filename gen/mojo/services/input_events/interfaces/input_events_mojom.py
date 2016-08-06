# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

import geometry_mojom
import input_event_constants_mojom
import input_key_codes_mojom

class KeyData(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('key_code', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('is_char', _descriptor.TYPE_BOOL, 1, 0)]),
      _descriptor.SingleFieldGroup('character', _descriptor.TYPE_UINT16, 2, 0),
      _descriptor.SingleFieldGroup('windows_key_code', _descriptor.TYPE_INT32, 3, 0),
      _descriptor.SingleFieldGroup('native_key_code', _descriptor.TYPE_INT32, 4, 0),
      _descriptor.SingleFieldGroup('text', _descriptor.TYPE_UINT16, 5, 0),
      _descriptor.SingleFieldGroup('unmodified_text', _descriptor.TYPE_UINT16, 6, 0),
    ],
  }

class PointerData(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('pointer_id', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('kind', _descriptor.TYPE_INT32, 1, 0),
      _descriptor.SingleFieldGroup('x', _descriptor.TYPE_FLOAT, 2, 0),
      _descriptor.SingleFieldGroup('y', _descriptor.TYPE_FLOAT, 3, 0),
      _descriptor.SingleFieldGroup('screen_x', _descriptor.TYPE_FLOAT, 4, 0),
      _descriptor.SingleFieldGroup('screen_y', _descriptor.TYPE_FLOAT, 5, 0),
      _descriptor.SingleFieldGroup('pressure', _descriptor.TYPE_FLOAT, 6, 0),
      _descriptor.SingleFieldGroup('radius_major', _descriptor.TYPE_FLOAT, 7, 0),
      _descriptor.SingleFieldGroup('radius_minor', _descriptor.TYPE_FLOAT, 8, 0),
      _descriptor.SingleFieldGroup('orientation', _descriptor.TYPE_FLOAT, 9, 0),
      _descriptor.SingleFieldGroup('horizontal_wheel', _descriptor.TYPE_FLOAT, 10, 0),
      _descriptor.SingleFieldGroup('vertical_wheel', _descriptor.TYPE_FLOAT, 11, 0),
    ],
  }

class Event(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('action', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('flags', _descriptor.TYPE_INT32, 1, 0),
      _descriptor.SingleFieldGroup('time_stamp', _descriptor.TYPE_INT64, 2, 0),
      _descriptor.SingleFieldGroup('key_data', _descriptor.StructType(lambda: KeyData, nullable=True), 3, 0),
      _descriptor.SingleFieldGroup('pointer_data', _descriptor.StructType(lambda: PointerData, nullable=True), 4, 0),
    ],
  }

