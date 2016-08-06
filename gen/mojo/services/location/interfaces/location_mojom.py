# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

class Location(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('time', _descriptor.TYPE_UINT64, 0, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('has_elapsed_real_time_nanos', _descriptor.TYPE_BOOL, 1, 0, default_value=False), _descriptor.FieldDescriptor('has_altitude', _descriptor.TYPE_BOOL, 5, 0, default_value=False), _descriptor.FieldDescriptor('has_speed', _descriptor.TYPE_BOOL, 7, 0, default_value=False), _descriptor.FieldDescriptor('has_bearing', _descriptor.TYPE_BOOL, 9, 0, default_value=False), _descriptor.FieldDescriptor('has_accuracy', _descriptor.TYPE_BOOL, 11, 0, default_value=False)]),
      _descriptor.SingleFieldGroup('speed', _descriptor.TYPE_FLOAT, 8, 0),
      _descriptor.SingleFieldGroup('elapsed_real_time_nanos', _descriptor.TYPE_UINT64, 2, 0),
      _descriptor.SingleFieldGroup('latitude', _descriptor.TYPE_DOUBLE, 3, 0),
      _descriptor.SingleFieldGroup('longitude', _descriptor.TYPE_DOUBLE, 4, 0),
      _descriptor.SingleFieldGroup('altitude', _descriptor.TYPE_DOUBLE, 6, 0),
      _descriptor.SingleFieldGroup('bearing', _descriptor.TYPE_FLOAT, 10, 0),
      _descriptor.SingleFieldGroup('accuracy', _descriptor.TYPE_FLOAT, 12, 0),
    ],
  }

