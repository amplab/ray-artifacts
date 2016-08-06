# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class EchoArgs(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('si64', _descriptor.TYPE_INT64, 0, 0),
      _descriptor.SingleFieldGroup('si32', _descriptor.TYPE_INT32, 1, 0),
      _descriptor.SingleFieldGroup('si16', _descriptor.TYPE_INT16, 2, 0),
      _descriptor.SingleFieldGroup('si8', _descriptor.TYPE_INT8, 3, 0),
      _descriptor.SingleFieldGroup('ui8', _descriptor.TYPE_UINT8, 7, 0),
      _descriptor.SingleFieldGroup('ui64', _descriptor.TYPE_UINT64, 4, 0),
      _descriptor.SingleFieldGroup('ui32', _descriptor.TYPE_UINT32, 5, 0),
      _descriptor.SingleFieldGroup('ui16', _descriptor.TYPE_UINT16, 6, 0),
      _descriptor.SingleFieldGroup('float_val', _descriptor.TYPE_FLOAT, 8, 0),
      _descriptor.SingleFieldGroup('float_inf', _descriptor.TYPE_FLOAT, 9, 0),
      _descriptor.SingleFieldGroup('float_nan', _descriptor.TYPE_FLOAT, 10, 0),
      _descriptor.SingleFieldGroup('message_handle', _descriptor.TYPE_NULLABLE_HANDLE, 16, 0),
      _descriptor.SingleFieldGroup('double_val', _descriptor.TYPE_DOUBLE, 11, 0),
      _descriptor.SingleFieldGroup('double_inf', _descriptor.TYPE_DOUBLE, 12, 0),
      _descriptor.SingleFieldGroup('double_nan', _descriptor.TYPE_DOUBLE, 13, 0),
      _descriptor.SingleFieldGroup('name', _descriptor.TYPE_NULLABLE_STRING, 14, 0),
      _descriptor.SingleFieldGroup('string_array', _descriptor.GenericArrayType(_descriptor.TYPE_STRING, nullable=True), 15, 0),
      _descriptor.SingleFieldGroup('data_handle', _descriptor.TYPE_NULLABLE_HANDLE, 17, 0),
    ],
  }

class EchoArgsList(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('next', _descriptor.StructType(lambda: EchoArgsList, nullable=True), 0, 0),
      _descriptor.SingleFieldGroup('item', _descriptor.StructType(lambda: EchoArgs, nullable=True), 1, 0),
    ],
  }


class CppSide(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'StartTest',
        'ordinal': 88888888,
        'parameters': {
        },
      },
      {
        'name': 'TestFinished',
        'ordinal': 99999999,
        'parameters': {
        },
      },
      {
        'name': 'PingResponse',
        'ordinal': 100000000,
        'parameters': {
        },
      },
      {
        'name': 'EchoResponse',
        'ordinal': 100000001,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('list', _descriptor.StructType(lambda: EchoArgsList), 0, 0),
          ],
        },
      },
      {
        'name': 'BitFlipResponse',
        'ordinal': 100000002,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('arg', _descriptor.StructType(lambda: EchoArgsList), 0, 0),
          ],
        },
      },
      {
        'name': 'BackPointerResponse',
        'ordinal': 100000003,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('arg', _descriptor.StructType(lambda: EchoArgsList), 0, 0),
          ],
        },
      },
    ],
  }

class JsSide(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'SetCppSide',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('cpp', _descriptor.InterfaceType(lambda: CppSide), 0, 0),
          ],
        },
      },
      {
        'name': 'Ping',
        'ordinal': 1,
        'parameters': {
        },
      },
      {
        'name': 'Echo',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('num_iterations', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('arg', _descriptor.StructType(lambda: EchoArgs), 1, 0),
          ],
        },
      },
      {
        'name': 'BitFlip',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('arg', _descriptor.StructType(lambda: EchoArgs), 0, 0),
          ],
        },
      },
      {
        'name': 'BackPointer',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('arg', _descriptor.StructType(lambda: EchoArgs), 0, 0),
          ],
        },
      },
    ],
  }
