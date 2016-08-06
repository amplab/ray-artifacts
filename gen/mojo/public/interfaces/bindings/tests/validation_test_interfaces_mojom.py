# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class BasicEnum(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('A', 0),
    ('B', 1),
    ('C', 0),
    ('D', -3),
    ('E', 10),
  ]

class StructA(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('i', _descriptor.TYPE_UINT64, 0, 0),
    ],
  }

class StructB(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('struct_a', _descriptor.StructType(lambda: StructA), 0, 0),
    ],
  }

class StructC(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('data', _descriptor.NativeArrayType('B'), 0, 0),
    ],
  }

class StructD(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('message_pipes', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE), 0, 0),
    ],
  }

class StructE(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('struct_d', _descriptor.StructType(lambda: StructD), 0, 0),
      _descriptor.SingleFieldGroup('data_pipe_consumer', _descriptor.TYPE_HANDLE, 1, 0),
    ],
  }

class StructF(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('fixed_size_array', _descriptor.NativeArrayType('B', length=3), 0, 0),
    ],
  }

class StructG(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('i', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('b', _descriptor.TYPE_BOOL, 3, 3)]),
      _descriptor.SingleFieldGroup('struct_a', _descriptor.StructType(lambda: StructA, nullable=True), 1, 1),
      _descriptor.SingleFieldGroup('str', _descriptor.TYPE_NULLABLE_STRING, 2, 3),
    ],
  }

class StructH(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('a', _descriptor.TYPE_BOOL, 0, 0)]),
      _descriptor.SingleFieldGroup('b', _descriptor.TYPE_UINT8, 1, 0),
      _descriptor.SingleFieldGroup('c', _descriptor.UnionType(lambda: UnionA, nullable=True), 2, 0),
      _descriptor.SingleFieldGroup('d', _descriptor.GenericArrayType(_descriptor.UnionType(lambda: UnionA), nullable=True), 3, 0),
      _descriptor.SingleFieldGroup('e', _descriptor.MapType(_descriptor.TYPE_UINT8, _descriptor.UnionType(lambda: UnionA), nullable=True), 4, 0),
    ],
  }

class BasicStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('a', _descriptor.TYPE_INT32, 0, 0),
    ],
  }

class StructWithEnum(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'enums': {
      'EnumWithin': [
          ('A', 0),
          ('B', 1),
          ('C', 2),
          ('D', 3),
        ],
    },
  }

class UnionA(object):
  __metaclass__ = _reflection.MojoUnionType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('a', _descriptor.TYPE_UINT16, 0, 0),
      _descriptor.SingleFieldGroup('b', _descriptor.TYPE_UINT32, 1, 0),
      _descriptor.SingleFieldGroup('c', _descriptor.StructType(lambda: StructA, nullable=True), 2, 0),
      _descriptor.SingleFieldGroup('d', _descriptor.NativeArrayType('B', nullable=True), 3, 0),
      _descriptor.SingleFieldGroup('e', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.TYPE_UINT8, nullable=True), 4, 0),
      _descriptor.SingleFieldGroup('f', _descriptor.UnionType(lambda: UnionB, nullable=True), 5, 0),
      _descriptor.SingleFieldGroup('g', _descriptor.StructType(lambda: StructA), 6, 0),
      _descriptor.SingleFieldGroup('h', _descriptor.NativeArrayType('B'), 7, 0),
      _descriptor.SingleFieldGroup('i', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.TYPE_UINT8), 8, 0),
      _descriptor.SingleFieldGroup('j', _descriptor.UnionType(lambda: UnionB), 9, 0),
    ],
   }

class UnionB(object):
  __metaclass__ = _reflection.MojoUnionType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('a', _descriptor.TYPE_UINT16, 0, 0),
      _descriptor.SingleFieldGroup('b', _descriptor.TYPE_UINT32, 1, 0),
      _descriptor.SingleFieldGroup('c', _descriptor.TYPE_UINT64, 2, 0),
      _descriptor.SingleFieldGroup('d', _descriptor.TYPE_UINT32, 3, 0),
    ],
   }


class InterfaceA(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
    ],
  }

class BoundsCheckTestInterface(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'this.is.the.service.name.for.BoundsCheckTestInterface',
    'version': 0,
    'methods': [
      {
        'name': 'Method0',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.TYPE_UINT8, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.TYPE_UINT8, 0, 0),
          ],
        },
      },
      {
        'name': 'Method1',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.TYPE_UINT8, 0, 0),
          ],
        },
      },
    ],
  }

class ConformanceTestInterface(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Method0',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.TYPE_FLOAT, 0, 0),
          ],
        },
      },
      {
        'name': 'Method1',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.StructType(lambda: StructA), 0, 0),
          ],
        },
      },
      {
        'name': 'Method2',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.StructType(lambda: StructB), 0, 0),
            _descriptor.SingleFieldGroup('param1', _descriptor.StructType(lambda: StructA), 1, 0),
          ],
        },
      },
      {
        'name': 'Method3',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.BooleanArrayType(), 0, 0),
          ],
        },
      },
      {
        'name': 'Method4',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.StructType(lambda: StructC), 0, 0),
            _descriptor.SingleFieldGroup('param1', _descriptor.NativeArrayType('B'), 1, 0),
          ],
        },
      },
      {
        'name': 'Method5',
        'ordinal': 5,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.StructType(lambda: StructE), 0, 0),
            _descriptor.SingleFieldGroup('param1', _descriptor.TYPE_HANDLE, 1, 0),
          ],
        },
      },
      {
        'name': 'Method6',
        'ordinal': 6,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.GenericArrayType(_descriptor.NativeArrayType('B')), 0, 0),
          ],
        },
      },
      {
        'name': 'Method7',
        'ordinal': 7,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.StructType(lambda: StructF), 0, 0),
            _descriptor.SingleFieldGroup('param1', _descriptor.GenericArrayType(_descriptor.NativeArrayType('B', nullable=True, length=3), length=2), 1, 0),
          ],
        },
      },
      {
        'name': 'Method8',
        'ordinal': 8,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.GenericArrayType(_descriptor.GenericArrayType(_descriptor.TYPE_STRING, nullable=True)), 0, 0),
          ],
        },
      },
      {
        'name': 'Method9',
        'ordinal': 9,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.GenericArrayType(_descriptor.GenericArrayType(_descriptor.TYPE_NULLABLE_HANDLE), nullable=True), 0, 0),
          ],
        },
      },
      {
        'name': 'Method10',
        'ordinal': 10,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.TYPE_UINT8), 0, 0),
          ],
        },
      },
      {
        'name': 'Method11',
        'ordinal': 11,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.StructType(lambda: StructG), 0, 0),
          ],
        },
      },
      {
        'name': 'Method12',
        'ordinal': 12,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.TYPE_FLOAT, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.TYPE_FLOAT, 0, 0),
          ],
        },
      },
      {
        'name': 'Method13',
        'ordinal': 13,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.InterfaceType(lambda: InterfaceA, nullable=True), 0, 0),
            _descriptor.SingleFieldGroup('param1', _descriptor.TYPE_UINT32, 1, 0),
            _descriptor.SingleFieldGroup('param2', _descriptor.InterfaceType(lambda: InterfaceA, nullable=True), 2, 0),
          ],
        },
      },
      {
        'name': 'Method14',
        'ordinal': 14,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.UnionType(lambda: UnionA), 0, 0),
          ],
        },
      },
      {
        'name': 'Method15',
        'ordinal': 15,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.StructType(lambda: StructH), 0, 0),
          ],
        },
      },
    ],
  }

class IntegrationTestInterface(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Method0',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.StructType(lambda: BasicStruct), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('param0', _descriptor.NativeArrayType('B'), 0, 0),
          ],
        },
      },
    ],
  }
