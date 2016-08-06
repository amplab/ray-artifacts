# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import rect_mojom

class StructOfStructs(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('nr', _descriptor.StructType(lambda: NamedRegion), 0, 0),
      _descriptor.SingleFieldGroup('a_nr', _descriptor.GenericArrayType(_descriptor.StructType(lambda: NamedRegion)), 1, 0),
      _descriptor.SingleFieldGroup('a_rp', _descriptor.GenericArrayType(_descriptor.StructType(lambda: RectPair)), 2, 0),
      _descriptor.SingleFieldGroup('m_ndfv', _descriptor.MapType(_descriptor.TYPE_INT64, _descriptor.StructType(lambda: NoDefaultFieldValues)), 3, 0),
      _descriptor.SingleFieldGroup('m_hs', _descriptor.MapType(_descriptor.TYPE_INT64, _descriptor.StructType(lambda: HandleStruct)), 4, 0),
    ],
  }

class NamedRegion(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('name', _descriptor.TYPE_NULLABLE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('rects', _descriptor.GenericArrayType(_descriptor.StructType(lambda: rect_mojom.Rect), nullable=True), 1, 0),
    ],
  }

class RectPair(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('first', _descriptor.StructType(lambda: rect_mojom.Rect, nullable=True), 0, 0),
      _descriptor.SingleFieldGroup('second', _descriptor.StructType(lambda: rect_mojom.Rect, nullable=True), 1, 0),
    ],
  }

class EmptyStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
  }

class HandleStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('h', _descriptor.TYPE_NULLABLE_HANDLE, 0, 0),
      _descriptor.SingleFieldGroup('array_h', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE), 1, 0),
    ],
  }

class NullableHandleStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('h', _descriptor.TYPE_NULLABLE_HANDLE, 0, 0),
      _descriptor.SingleFieldGroup('data', _descriptor.TYPE_INT32, 1, 0, default_value=1234),
    ],
  }

class NoDefaultFieldValues(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('f0', _descriptor.TYPE_BOOL, 0, 0)]),
      _descriptor.SingleFieldGroup('f1', _descriptor.TYPE_INT8, 1, 0),
      _descriptor.SingleFieldGroup('f2', _descriptor.TYPE_UINT8, 2, 0),
      _descriptor.SingleFieldGroup('f3', _descriptor.TYPE_INT16, 3, 0),
      _descriptor.SingleFieldGroup('f4', _descriptor.TYPE_UINT16, 4, 0),
      _descriptor.SingleFieldGroup('f5', _descriptor.TYPE_INT32, 5, 0),
      _descriptor.SingleFieldGroup('f6', _descriptor.TYPE_UINT32, 6, 0),
      _descriptor.SingleFieldGroup('f7', _descriptor.TYPE_INT64, 7, 0),
      _descriptor.SingleFieldGroup('f8', _descriptor.TYPE_UINT64, 8, 0),
      _descriptor.SingleFieldGroup('f9', _descriptor.TYPE_FLOAT, 9, 0),
      _descriptor.SingleFieldGroup('f13', _descriptor.TYPE_HANDLE, 13, 0),
      _descriptor.SingleFieldGroup('f10', _descriptor.TYPE_DOUBLE, 10, 0),
      _descriptor.SingleFieldGroup('f11', _descriptor.TYPE_STRING, 11, 0),
      _descriptor.SingleFieldGroup('f12', _descriptor.TYPE_NULLABLE_STRING, 12, 0),
      _descriptor.SingleFieldGroup('f14', _descriptor.TYPE_HANDLE, 14, 0),
      _descriptor.SingleFieldGroup('f15', _descriptor.TYPE_HANDLE, 15, 0),
      _descriptor.SingleFieldGroup('f16', _descriptor.TYPE_NULLABLE_HANDLE, 16, 0),
      _descriptor.SingleFieldGroup('f17', _descriptor.TYPE_NULLABLE_HANDLE, 17, 0),
      _descriptor.SingleFieldGroup('f18', _descriptor.TYPE_NULLABLE_HANDLE, 18, 0),
      _descriptor.SingleFieldGroup('f19', _descriptor.TYPE_HANDLE, 19, 0),
      _descriptor.SingleFieldGroup('f20', _descriptor.TYPE_NULLABLE_HANDLE, 20, 0),
      _descriptor.SingleFieldGroup('f21', _descriptor.TYPE_HANDLE, 21, 0),
      _descriptor.SingleFieldGroup('f22', _descriptor.TYPE_NULLABLE_HANDLE, 22, 0),
      _descriptor.SingleFieldGroup('f23', _descriptor.GenericArrayType(_descriptor.TYPE_STRING), 23, 0),
      _descriptor.SingleFieldGroup('f24', _descriptor.GenericArrayType(_descriptor.TYPE_NULLABLE_STRING), 24, 0),
      _descriptor.SingleFieldGroup('f25', _descriptor.GenericArrayType(_descriptor.TYPE_STRING, nullable=True), 25, 0),
      _descriptor.SingleFieldGroup('f26', _descriptor.GenericArrayType(_descriptor.TYPE_NULLABLE_STRING, nullable=True), 26, 0),
      _descriptor.SingleFieldGroup('f27', _descriptor.StructType(lambda: EmptyStruct), 27, 0),
      _descriptor.SingleFieldGroup('f28', _descriptor.StructType(lambda: EmptyStruct, nullable=True), 28, 0),
    ],
  }

class DefaultFieldValues(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'constants': {
      'FOO': "foo",
    },
    'fields': [
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('f0', _descriptor.TYPE_BOOL, 0, 0, default_value=True)]),
      _descriptor.SingleFieldGroup('f1', _descriptor.TYPE_INT8, 1, 0, default_value=100),
      _descriptor.SingleFieldGroup('f2', _descriptor.TYPE_UINT8, 2, 0, default_value=100),
      _descriptor.SingleFieldGroup('f3', _descriptor.TYPE_INT16, 3, 0, default_value=100),
      _descriptor.SingleFieldGroup('f4', _descriptor.TYPE_UINT16, 4, 0, default_value=100),
      _descriptor.SingleFieldGroup('f5', _descriptor.TYPE_INT32, 5, 0, default_value=100),
      _descriptor.SingleFieldGroup('f6', _descriptor.TYPE_UINT32, 6, 0, default_value=100),
      _descriptor.SingleFieldGroup('f7', _descriptor.TYPE_INT64, 7, 0, default_value=100),
      _descriptor.SingleFieldGroup('f8', _descriptor.TYPE_UINT64, 8, 0, default_value=100),
      _descriptor.SingleFieldGroup('f9', _descriptor.TYPE_FLOAT, 9, 0, default_value=100),
      _descriptor.SingleFieldGroup('f10', _descriptor.TYPE_FLOAT, 10, 0, default_value=100.0),
      _descriptor.SingleFieldGroup('f11', _descriptor.TYPE_DOUBLE, 11, 0, default_value=100),
      _descriptor.SingleFieldGroup('f12', _descriptor.TYPE_DOUBLE, 12, 0, default_value=100.0),
      _descriptor.SingleFieldGroup('f13', _descriptor.TYPE_STRING, 13, 0, default_value="foo"),
      _descriptor.SingleFieldGroup('f14', _descriptor.TYPE_NULLABLE_STRING, 14, 0, default_value="foo"),
      _descriptor.SingleFieldGroup('f15', _descriptor.StructType(lambda: rect_mojom.Rect), 15, 0, default_value=True),
      _descriptor.SingleFieldGroup('f16', _descriptor.StructType(lambda: rect_mojom.Rect, nullable=True), 16, 0, default_value=True),
    ],
  }

class ScopedConstants(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'constants': {
      'TEN': 10,
      'ALSO_TEN': 10,
    },
    'enums': {
      'EType': [
          ('E0', 0),
          ('E1', 1),
          ('E2', 10),
          ('E3', 10),
          ('E4', 11),
        ],
    },
    'fields': [
      _descriptor.SingleFieldGroup('f0', _descriptor.TYPE_INT32, 0, 0, default_value=0),
      _descriptor.SingleFieldGroup('f1', _descriptor.TYPE_INT32, 1, 0, default_value=1),
      _descriptor.SingleFieldGroup('f2', _descriptor.TYPE_INT32, 2, 0, default_value=10),
      _descriptor.SingleFieldGroup('f3', _descriptor.TYPE_INT32, 3, 0, default_value=10),
      _descriptor.SingleFieldGroup('f4', _descriptor.TYPE_INT32, 4, 0, default_value=11),
      _descriptor.SingleFieldGroup('f5', _descriptor.TYPE_INT32, 5, 0, default_value=10),
      _descriptor.SingleFieldGroup('f6', _descriptor.TYPE_INT32, 6, 0, default_value=10),
    ],
  }

class MapKeyTypes(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f0', _descriptor.MapType(_descriptor.TYPE_BOOL, _descriptor.TYPE_BOOL), 0, 0),
      _descriptor.SingleFieldGroup('f1', _descriptor.MapType(_descriptor.TYPE_INT8, _descriptor.TYPE_INT8), 1, 0),
      _descriptor.SingleFieldGroup('f2', _descriptor.MapType(_descriptor.TYPE_UINT8, _descriptor.TYPE_UINT8), 2, 0),
      _descriptor.SingleFieldGroup('f3', _descriptor.MapType(_descriptor.TYPE_INT16, _descriptor.TYPE_INT16), 3, 0),
      _descriptor.SingleFieldGroup('f4', _descriptor.MapType(_descriptor.TYPE_UINT16, _descriptor.TYPE_UINT16), 4, 0),
      _descriptor.SingleFieldGroup('f5', _descriptor.MapType(_descriptor.TYPE_INT32, _descriptor.TYPE_INT32), 5, 0),
      _descriptor.SingleFieldGroup('f6', _descriptor.MapType(_descriptor.TYPE_UINT32, _descriptor.TYPE_UINT32), 6, 0),
      _descriptor.SingleFieldGroup('f7', _descriptor.MapType(_descriptor.TYPE_INT64, _descriptor.TYPE_INT64), 7, 0),
      _descriptor.SingleFieldGroup('f8', _descriptor.MapType(_descriptor.TYPE_UINT64, _descriptor.TYPE_UINT64), 8, 0),
      _descriptor.SingleFieldGroup('f9', _descriptor.MapType(_descriptor.TYPE_FLOAT, _descriptor.TYPE_FLOAT), 9, 0),
      _descriptor.SingleFieldGroup('f10', _descriptor.MapType(_descriptor.TYPE_DOUBLE, _descriptor.TYPE_DOUBLE), 10, 0),
      _descriptor.SingleFieldGroup('f11', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.TYPE_STRING), 11, 0),
    ],
  }

class MapValueTypes(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f0', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.GenericArrayType(_descriptor.TYPE_STRING)), 0, 0),
      _descriptor.SingleFieldGroup('f1', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.GenericArrayType(_descriptor.TYPE_STRING, nullable=True)), 1, 0),
      _descriptor.SingleFieldGroup('f2', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.GenericArrayType(_descriptor.TYPE_NULLABLE_STRING)), 2, 0),
      _descriptor.SingleFieldGroup('f3', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.GenericArrayType(_descriptor.TYPE_STRING, length=2)), 3, 0),
      _descriptor.SingleFieldGroup('f4', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.GenericArrayType(_descriptor.GenericArrayType(_descriptor.TYPE_STRING, nullable=True, length=2))), 4, 0),
      _descriptor.SingleFieldGroup('f5', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.GenericArrayType(_descriptor.GenericArrayType(_descriptor.TYPE_STRING, length=2), length=1)), 5, 0),
      _descriptor.SingleFieldGroup('f6', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.StructType(lambda: rect_mojom.Rect, nullable=True)), 6, 0),
      _descriptor.SingleFieldGroup('f7', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.TYPE_STRING)), 7, 0),
      _descriptor.SingleFieldGroup('f8', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.GenericArrayType(_descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.TYPE_STRING))), 8, 0),
      _descriptor.SingleFieldGroup('f9', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.TYPE_HANDLE), 9, 0),
      _descriptor.SingleFieldGroup('f10', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE)), 10, 0),
      _descriptor.SingleFieldGroup('f11', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.TYPE_HANDLE)), 11, 0),
    ],
  }

class ArrayValueTypes(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f0', _descriptor.NativeArrayType('b'), 0, 0),
      _descriptor.SingleFieldGroup('f1', _descriptor.NativeArrayType('h'), 1, 0),
      _descriptor.SingleFieldGroup('f2', _descriptor.NativeArrayType('i'), 2, 0),
      _descriptor.SingleFieldGroup('f3', _descriptor.GenericArrayType(_descriptor.TYPE_INT64), 3, 0),
      _descriptor.SingleFieldGroup('f4', _descriptor.NativeArrayType('f'), 4, 0),
      _descriptor.SingleFieldGroup('f5', _descriptor.NativeArrayType('d'), 5, 0),
    ],
  }

class FloatNumberValues(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'constants': {
      'V0': float('inf'),
      'V1': float('-inf'),
      'V2': float('nan'),
      'V3': float('inf'),
      'V4': float('-inf'),
      'V5': float('nan'),
      'V6': 0,
      'V7': 1234567890.123,
      'V8': 1.2e+20,
      'V9': -1.2e+20,
    },
    'fields': [
      _descriptor.SingleFieldGroup('f0', _descriptor.TYPE_DOUBLE, 0, 0, default_value=float('inf')),
      _descriptor.SingleFieldGroup('f1', _descriptor.TYPE_DOUBLE, 1, 0, default_value=float('-inf')),
      _descriptor.SingleFieldGroup('f2', _descriptor.TYPE_DOUBLE, 2, 0, default_value=float('nan')),
      _descriptor.SingleFieldGroup('f3', _descriptor.TYPE_FLOAT, 3, 0, default_value=float('inf')),
      _descriptor.SingleFieldGroup('f4', _descriptor.TYPE_FLOAT, 4, 0, default_value=float('-inf')),
      _descriptor.SingleFieldGroup('f5', _descriptor.TYPE_FLOAT, 5, 0, default_value=float('nan')),
      _descriptor.SingleFieldGroup('f6', _descriptor.TYPE_FLOAT, 6, 0, default_value=0.0),
      _descriptor.SingleFieldGroup('f7', _descriptor.TYPE_DOUBLE, 7, 0, default_value=1234567890.123),
      _descriptor.SingleFieldGroup('f8', _descriptor.TYPE_DOUBLE, 8, 0, default_value=1.2e+20),
      _descriptor.SingleFieldGroup('f9', _descriptor.TYPE_DOUBLE, 9, 0, default_value=-1.2e+20),
    ],
  }

class IntegerNumberValues(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'constants': {
      'V0': -128,
      'V1': -1,
      'V2': 0,
      'V3': 42,
      'V4': 127,
      'V5': -32768,
      'V6': -1,
      'V7': 0,
      'V8': 12345,
      'V9': 32767,
      'V10': -2147483648,
      'V11': -1,
      'V12': 0,
      'V13': 1234567890,
      'V14': 2147483647,
      'V15': -9007199254740991,
      'V16': -1,
      'V17': 0,
      'V18': 1234567890123456,
      'V19': 9007199254740991,
    },
    'fields': [
      _descriptor.SingleFieldGroup('f0', _descriptor.TYPE_INT8, 0, 0, default_value=-128),
      _descriptor.SingleFieldGroup('f1', _descriptor.TYPE_INT8, 1, 0, default_value=-1),
      _descriptor.SingleFieldGroup('f2', _descriptor.TYPE_INT8, 2, 0, default_value=0),
      _descriptor.SingleFieldGroup('f3', _descriptor.TYPE_INT8, 3, 0, default_value=42),
      _descriptor.SingleFieldGroup('f4', _descriptor.TYPE_INT8, 4, 0, default_value=127),
      _descriptor.SingleFieldGroup('f5', _descriptor.TYPE_INT16, 5, 0, default_value=-32768),
      _descriptor.SingleFieldGroup('f6', _descriptor.TYPE_INT16, 6, 0, default_value=-1),
      _descriptor.SingleFieldGroup('f7', _descriptor.TYPE_INT16, 7, 0, default_value=0),
      _descriptor.SingleFieldGroup('f8', _descriptor.TYPE_INT16, 8, 0, default_value=12345),
      _descriptor.SingleFieldGroup('f9', _descriptor.TYPE_INT16, 9, 0, default_value=32767),
      _descriptor.SingleFieldGroup('f10', _descriptor.TYPE_INT32, 10, 0, default_value=-2147483648),
      _descriptor.SingleFieldGroup('f11', _descriptor.TYPE_INT32, 11, 0, default_value=-1),
      _descriptor.SingleFieldGroup('f12', _descriptor.TYPE_INT32, 12, 0, default_value=0),
      _descriptor.SingleFieldGroup('f13', _descriptor.TYPE_INT32, 13, 0, default_value=1234567890),
      _descriptor.SingleFieldGroup('f14', _descriptor.TYPE_INT32, 14, 0, default_value=2147483647),
      _descriptor.SingleFieldGroup('f15', _descriptor.TYPE_INT64, 15, 0, default_value=-9007199254740991),
      _descriptor.SingleFieldGroup('f16', _descriptor.TYPE_INT64, 16, 0, default_value=-1),
      _descriptor.SingleFieldGroup('f17', _descriptor.TYPE_INT64, 17, 0, default_value=0),
      _descriptor.SingleFieldGroup('f18', _descriptor.TYPE_INT64, 18, 0, default_value=1234567890123456),
      _descriptor.SingleFieldGroup('f19', _descriptor.TYPE_INT64, 19, 0, default_value=9007199254740991),
    ],
  }

class UnsignedNumberValues(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'constants': {
      'V0': 0,
      'V1': 42,
      'V2': 255,
      'V3': 0,
      'V4': 12345,
      'V5': 65535,
      'V6': 0,
      'V7': 1234567890,
      'V8': 4294967295,
      'V9': 0,
      'V10': 1234567890123456,
      'V11': 9007199254740991,
    },
    'fields': [
      _descriptor.SingleFieldGroup('f0', _descriptor.TYPE_UINT8, 0, 0, default_value=0),
      _descriptor.SingleFieldGroup('f1', _descriptor.TYPE_UINT8, 1, 0, default_value=42),
      _descriptor.SingleFieldGroup('f2', _descriptor.TYPE_UINT8, 2, 0, default_value=255),
      _descriptor.SingleFieldGroup('f3', _descriptor.TYPE_UINT16, 3, 0, default_value=0),
      _descriptor.SingleFieldGroup('f4', _descriptor.TYPE_UINT16, 4, 0, default_value=12345),
      _descriptor.SingleFieldGroup('f5', _descriptor.TYPE_UINT16, 5, 0, default_value=65535),
      _descriptor.SingleFieldGroup('f6', _descriptor.TYPE_UINT32, 6, 0, default_value=0),
      _descriptor.SingleFieldGroup('f7', _descriptor.TYPE_UINT32, 7, 0, default_value=1234567890),
      _descriptor.SingleFieldGroup('f8', _descriptor.TYPE_UINT32, 8, 0, default_value=4294967295),
      _descriptor.SingleFieldGroup('f9', _descriptor.TYPE_UINT64, 9, 0, default_value=0),
      _descriptor.SingleFieldGroup('f10', _descriptor.TYPE_UINT64, 10, 0, default_value=1234567890123456),
      _descriptor.SingleFieldGroup('f11', _descriptor.TYPE_UINT64, 11, 0, default_value=9007199254740991),
    ],
  }

class BitArrayValues(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f0', _descriptor.BooleanArrayType(length=1), 0, 0),
      _descriptor.SingleFieldGroup('f1', _descriptor.BooleanArrayType(length=7), 1, 0),
      _descriptor.SingleFieldGroup('f2', _descriptor.BooleanArrayType(length=9), 2, 0),
      _descriptor.SingleFieldGroup('f3', _descriptor.BooleanArrayType(), 3, 0),
      _descriptor.SingleFieldGroup('f4', _descriptor.GenericArrayType(_descriptor.BooleanArrayType()), 4, 0),
      _descriptor.SingleFieldGroup('f5', _descriptor.GenericArrayType(_descriptor.BooleanArrayType(nullable=True)), 5, 0),
      _descriptor.SingleFieldGroup('f6', _descriptor.GenericArrayType(_descriptor.BooleanArrayType(nullable=True, length=2)), 6, 0),
    ],
  }

class MultiVersionStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f_int32', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('f_message_pipe', _descriptor.TYPE_NULLABLE_HANDLE, 4, 7),
      _descriptor.SingleFieldGroup('f_rect', _descriptor.StructType(lambda: rect_mojom.Rect, nullable=True), 1, 1),
      _descriptor.SingleFieldGroup('f_string', _descriptor.TYPE_NULLABLE_STRING, 2, 3),
      _descriptor.SingleFieldGroup('f_array', _descriptor.NativeArrayType('b', nullable=True), 3, 5),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('f_bool', _descriptor.TYPE_BOOL, 5, 7)]),
      _descriptor.SingleFieldGroup('f_int16', _descriptor.TYPE_INT16, 6, 9),
    ],
  }

class MultiVersionStructV0(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f_int32', _descriptor.TYPE_INT32, 0, 0),
    ],
  }

class MultiVersionStructV1(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f_int32', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('f_rect', _descriptor.StructType(lambda: rect_mojom.Rect, nullable=True), 1, 1),
    ],
  }

class MultiVersionStructV3(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f_int32', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('f_rect', _descriptor.StructType(lambda: rect_mojom.Rect, nullable=True), 1, 1),
      _descriptor.SingleFieldGroup('f_string', _descriptor.TYPE_NULLABLE_STRING, 2, 3),
    ],
  }

class MultiVersionStructV5(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f_int32', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('f_rect', _descriptor.StructType(lambda: rect_mojom.Rect, nullable=True), 1, 1),
      _descriptor.SingleFieldGroup('f_string', _descriptor.TYPE_NULLABLE_STRING, 2, 3),
      _descriptor.SingleFieldGroup('f_array', _descriptor.NativeArrayType('b', nullable=True), 3, 5),
    ],
  }

class MultiVersionStructV7(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f_int32', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('f_message_pipe', _descriptor.TYPE_NULLABLE_HANDLE, 4, 7),
      _descriptor.SingleFieldGroup('f_rect', _descriptor.StructType(lambda: rect_mojom.Rect, nullable=True), 1, 1),
      _descriptor.SingleFieldGroup('f_string', _descriptor.TYPE_NULLABLE_STRING, 2, 3),
      _descriptor.SingleFieldGroup('f_array', _descriptor.NativeArrayType('b', nullable=True), 3, 5),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('f_bool', _descriptor.TYPE_BOOL, 5, 7)]),
    ],
  }

class ContainsInterface(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('some_interface', _descriptor.InterfaceType(lambda: SomeInterface), 0, 0),
    ],
  }

class ContainsOther(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('other', _descriptor.TYPE_INT32, 0, 0),
    ],
  }

class ContainsInterfaceRequest(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('req', _descriptor.InterfaceRequestType(), 0, 0),
      _descriptor.SingleFieldGroup('nullable_req', _descriptor.InterfaceRequestType(nullable=True), 1, 0),
    ],
  }

class DartKeywordStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'enums': {
      'Keywords': [
          ('AWAIT', 0),
          ('IS', 1),
          ('RETHROW', 2),
        ],
    },
    'fields': [
      _descriptor.SingleFieldGroup('await', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('is', _descriptor.TYPE_INT32, 1, 0),
      _descriptor.SingleFieldGroup('rethrow', _descriptor.TYPE_INT32, 2, 0),
    ],
  }

class UnionOfStructs(object):
  __metaclass__ = _reflection.MojoUnionType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('nr', _descriptor.StructType(lambda: NamedRegion), 0, 0),
      _descriptor.SingleFieldGroup('a_nr', _descriptor.GenericArrayType(_descriptor.StructType(lambda: NamedRegion)), 1, 0),
      _descriptor.SingleFieldGroup('a_rp', _descriptor.GenericArrayType(_descriptor.StructType(lambda: RectPair)), 2, 0),
      _descriptor.SingleFieldGroup('m_ndfv', _descriptor.MapType(_descriptor.TYPE_INT64, _descriptor.StructType(lambda: NoDefaultFieldValues)), 3, 0),
      _descriptor.SingleFieldGroup('m_hs', _descriptor.MapType(_descriptor.TYPE_INT64, _descriptor.StructType(lambda: HandleStruct)), 4, 0),
    ],
   }


class SomeInterface(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'SomeMethod',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('pair', _descriptor.StructType(lambda: RectPair), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('other_pair', _descriptor.StructType(lambda: RectPair), 0, 0),
          ],
        },
      },
    ],
  }
