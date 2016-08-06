# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

class Point(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('x', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('y', _descriptor.TYPE_INT32, 1, 0),
    ],
  }

class PointF(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('x', _descriptor.TYPE_FLOAT, 0, 0),
      _descriptor.SingleFieldGroup('y', _descriptor.TYPE_FLOAT, 1, 0),
    ],
  }

class Size(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('width', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('height', _descriptor.TYPE_INT32, 1, 0),
    ],
  }

class Rect(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('x', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('y', _descriptor.TYPE_INT32, 1, 0),
      _descriptor.SingleFieldGroup('width', _descriptor.TYPE_INT32, 2, 0),
      _descriptor.SingleFieldGroup('height', _descriptor.TYPE_INT32, 3, 0),
    ],
  }

class RectF(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('x', _descriptor.TYPE_FLOAT, 0, 0),
      _descriptor.SingleFieldGroup('y', _descriptor.TYPE_FLOAT, 1, 0),
      _descriptor.SingleFieldGroup('width', _descriptor.TYPE_FLOAT, 2, 0),
      _descriptor.SingleFieldGroup('height', _descriptor.TYPE_FLOAT, 3, 0),
    ],
  }

class RRectF(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('x', _descriptor.TYPE_FLOAT, 0, 0),
      _descriptor.SingleFieldGroup('y', _descriptor.TYPE_FLOAT, 1, 0),
      _descriptor.SingleFieldGroup('width', _descriptor.TYPE_FLOAT, 2, 0),
      _descriptor.SingleFieldGroup('height', _descriptor.TYPE_FLOAT, 3, 0),
      _descriptor.SingleFieldGroup('top_left_radius_x', _descriptor.TYPE_FLOAT, 4, 0),
      _descriptor.SingleFieldGroup('top_left_radius_y', _descriptor.TYPE_FLOAT, 5, 0),
      _descriptor.SingleFieldGroup('top_right_radius_x', _descriptor.TYPE_FLOAT, 6, 0),
      _descriptor.SingleFieldGroup('top_right_radius_y', _descriptor.TYPE_FLOAT, 7, 0),
      _descriptor.SingleFieldGroup('bottom_left_radius_x', _descriptor.TYPE_FLOAT, 8, 0),
      _descriptor.SingleFieldGroup('bottom_left_radius_y', _descriptor.TYPE_FLOAT, 9, 0),
      _descriptor.SingleFieldGroup('bottom_right_radius_x', _descriptor.TYPE_FLOAT, 10, 0),
      _descriptor.SingleFieldGroup('bottom_right_radius_y', _descriptor.TYPE_FLOAT, 11, 0),
    ],
  }

class Transform(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('matrix', _descriptor.NativeArrayType('f', length=16), 0, 0),
    ],
  }

