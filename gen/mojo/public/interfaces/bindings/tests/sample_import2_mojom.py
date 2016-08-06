# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

import sample_import_mojom

class Color(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('RED', 0),
    ('BLACK', 1),
  ]

class Size(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('width', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('height', _descriptor.TYPE_INT32, 1, 0),
    ],
  }

class Thing(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('shape', _descriptor.TYPE_INT32, 0, 0, default_value=1),
      _descriptor.SingleFieldGroup('color', _descriptor.TYPE_INT32, 1, 0, default_value=1),
      _descriptor.SingleFieldGroup('location', _descriptor.StructType(lambda: sample_import_mojom.Point), 2, 0),
      _descriptor.SingleFieldGroup('size', _descriptor.StructType(lambda: Size), 3, 0),
    ],
  }

