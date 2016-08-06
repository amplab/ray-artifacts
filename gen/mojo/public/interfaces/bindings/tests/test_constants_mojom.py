# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

BOOL_VALUE = True
INT8_VALUE = -2
UINT8_VALUE = 128
INT16_VALUE = -233
UINT16_VALUE = 44204
INT32_VALUE = -44204
UINT32_VALUE = 4294967295
INT64_VALUE = -9223372036854775807
UINT64_VALUE = 9999999999999999999
DOUBLE_VALUE = 3.14159
DOUBLE_INFINITY = float('inf')
DOUBLE_NEGATIVE_INFINITY = float('-inf')
DOUBLE_NA_N = float('nan')
FLOAT_VALUE = 2.71828
FLOAT_INFINITY = float('inf')
FLOAT_NEGATIVE_INFINITY = float('-inf')
FLOAT_NA_N = float('nan')

class StructWithConstants(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'constants': {
      'INT8_VALUE': 5,
      'FLOAT_VALUE': 765.432,
    },
  }


class InterfaceWithConstants(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
    ],
  }
