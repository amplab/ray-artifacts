# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import sample_import_mojom
import sample_import2_mojom

TWELVE = 12

class Bar(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'enums': {
      'Type': [
          ('VERTICAL', 1),
          ('HORIZONTAL', 2),
          ('BOTH', 3),
          ('INVALID', 4),
        ],
    },
    'fields': [
      _descriptor.SingleFieldGroup('alpha', _descriptor.TYPE_UINT8, 0, 0, default_value=255),
      _descriptor.SingleFieldGroup('beta', _descriptor.TYPE_UINT8, 1, 0),
      _descriptor.SingleFieldGroup('gamma', _descriptor.TYPE_UINT8, 2, 0),
      _descriptor.SingleFieldGroup('type', _descriptor.TYPE_INT32, 3, 0, default_value=1),
    ],
  }

class Foo(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'constants': {
      'FOOBY': "Fooby",
    },
    'fields': [
      _descriptor.SingleFieldGroup('x', _descriptor.TYPE_INT32, 1, 0),
      _descriptor.SingleFieldGroup('y', _descriptor.TYPE_INT32, 2, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('a', _descriptor.TYPE_BOOL, 3, 0, default_value=True), _descriptor.FieldDescriptor('b', _descriptor.TYPE_BOOL, 4, 0), _descriptor.FieldDescriptor('c', _descriptor.TYPE_BOOL, 5, 0)]),
      _descriptor.SingleFieldGroup('source', _descriptor.TYPE_NULLABLE_HANDLE, 9, 0),
      _descriptor.SingleFieldGroup('bar', _descriptor.StructType(lambda: Bar, nullable=True), 6, 0),
      _descriptor.SingleFieldGroup('data', _descriptor.NativeArrayType('B', nullable=True), 8, 0),
      _descriptor.SingleFieldGroup('extra_bars', _descriptor.GenericArrayType(_descriptor.StructType(lambda: Bar), nullable=True), 7, 0),
      _descriptor.SingleFieldGroup('name', _descriptor.TYPE_STRING, 0, 0, default_value="Fooby"),
      _descriptor.SingleFieldGroup('input_streams', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE, nullable=True), 10, 0),
      _descriptor.SingleFieldGroup('output_streams', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE, nullable=True), 11, 0),
      _descriptor.SingleFieldGroup('array_of_array_of_bools', _descriptor.GenericArrayType(_descriptor.BooleanArrayType(), nullable=True), 12, 0),
      _descriptor.SingleFieldGroup('multi_array_of_strings', _descriptor.GenericArrayType(_descriptor.GenericArrayType(_descriptor.GenericArrayType(_descriptor.TYPE_STRING)), nullable=True), 13, 0),
      _descriptor.SingleFieldGroup('array_of_bools', _descriptor.BooleanArrayType(nullable=True), 14, 0),
    ],
  }

class DefaultsTest(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('a0', _descriptor.TYPE_INT8, 0, 0, default_value=-12),
      _descriptor.SingleFieldGroup('a1', _descriptor.TYPE_UINT8, 1, 0, default_value=12),
      _descriptor.SingleFieldGroup('a2', _descriptor.TYPE_INT16, 2, 0, default_value=1234),
      _descriptor.SingleFieldGroup('a3', _descriptor.TYPE_UINT16, 3, 0, default_value=34567),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('a11', _descriptor.TYPE_BOOL, 11, 0, default_value=True), _descriptor.FieldDescriptor('a12', _descriptor.TYPE_BOOL, 12, 0, default_value=False)]),
      _descriptor.SingleFieldGroup('a4', _descriptor.TYPE_INT32, 4, 0, default_value=123456),
      _descriptor.SingleFieldGroup('a5', _descriptor.TYPE_UINT32, 5, 0, default_value=3456789012),
      _descriptor.SingleFieldGroup('a6', _descriptor.TYPE_INT64, 6, 0, default_value=-111111111111),
      _descriptor.SingleFieldGroup('a7', _descriptor.TYPE_UINT64, 7, 0, default_value=9999999999999999999),
      _descriptor.SingleFieldGroup('a8', _descriptor.TYPE_INT32, 8, 0, default_value=74565),
      _descriptor.SingleFieldGroup('a9', _descriptor.TYPE_INT32, 9, 0, default_value=-74565),
      _descriptor.SingleFieldGroup('a10', _descriptor.TYPE_INT32, 10, 0, default_value=1234),
      _descriptor.SingleFieldGroup('a13', _descriptor.TYPE_FLOAT, 13, 0, default_value=123.25),
      _descriptor.SingleFieldGroup('a14', _descriptor.TYPE_DOUBLE, 14, 0, default_value=1234567890.123),
      _descriptor.SingleFieldGroup('a15', _descriptor.TYPE_DOUBLE, 15, 0, default_value=10000000000.0),
      _descriptor.SingleFieldGroup('a16', _descriptor.TYPE_DOUBLE, 16, 0, default_value=-1.2e+20),
      _descriptor.SingleFieldGroup('a17', _descriptor.TYPE_DOUBLE, 17, 0, default_value=1.23e-20),
      _descriptor.SingleFieldGroup('a18', _descriptor.NativeArrayType('B'), 18, 0),
      _descriptor.SingleFieldGroup('a19', _descriptor.TYPE_STRING, 19, 0),
      _descriptor.SingleFieldGroup('a20', _descriptor.TYPE_INT32, 20, 0, default_value=3),
      _descriptor.SingleFieldGroup('a29', _descriptor.TYPE_FLOAT, 29, 0, default_value=float('inf')),
      _descriptor.SingleFieldGroup('a21', _descriptor.StructType(lambda: sample_import_mojom.Point), 21, 0),
      _descriptor.SingleFieldGroup('a22', _descriptor.StructType(lambda: sample_import2_mojom.Thing), 22, 0, default_value=True),
      _descriptor.SingleFieldGroup('a23', _descriptor.TYPE_UINT64, 23, 0, default_value=18446744073709551615),
      _descriptor.SingleFieldGroup('a24', _descriptor.TYPE_INT64, 24, 0, default_value=4886718345),
      _descriptor.SingleFieldGroup('a25', _descriptor.TYPE_INT64, 25, 0, default_value=-4886718345),
      _descriptor.SingleFieldGroup('a26', _descriptor.TYPE_DOUBLE, 26, 0, default_value=float('inf')),
      _descriptor.SingleFieldGroup('a27', _descriptor.TYPE_DOUBLE, 27, 0, default_value=float('-inf')),
      _descriptor.SingleFieldGroup('a28', _descriptor.TYPE_DOUBLE, 28, 0, default_value=float('nan')),
      _descriptor.SingleFieldGroup('a30', _descriptor.TYPE_FLOAT, 30, 0, default_value=float('-inf')),
      _descriptor.SingleFieldGroup('a31', _descriptor.TYPE_FLOAT, 31, 0, default_value=float('nan')),
    ],
  }

class StructWithHoleV1(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('v1', _descriptor.TYPE_INT32, 0, 0, default_value=1),
      _descriptor.SingleFieldGroup('v2', _descriptor.TYPE_INT64, 1, 0, default_value=2),
    ],
  }

class StructWithHoleV2(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('v1', _descriptor.TYPE_INT32, 0, 0, default_value=1),
      _descriptor.SingleFieldGroup('v3', _descriptor.TYPE_INT32, 2, 0, default_value=3),
      _descriptor.SingleFieldGroup('v2', _descriptor.TYPE_INT64, 1, 0, default_value=2),
    ],
  }

class NonNullableMapStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('map_field', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.TYPE_STRING), 0, 0),
    ],
  }


class Service(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Frobinate',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('foo', _descriptor.StructType(lambda: Foo, nullable=True), 0, 0),
            _descriptor.SingleFieldGroup('baz', _descriptor.TYPE_INT32, 1, 0),
            _descriptor.SingleFieldGroup('port', _descriptor.InterfaceType(lambda: Port, nullable=True), 2, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('result', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'GetPort',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('port', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
      },
    ],
  }

class Port(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'PostMessage',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('message_text', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('port', _descriptor.InterfaceType(lambda: Port), 1, 0),
          ],
        },
      },
    ],
  }
