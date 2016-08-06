# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class EnumWithReference(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('k_STEREO_AND_KEYBOARD_MIC', 30),
    ('k_MAX', 30),
  ]

class EnumWithLowercase(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('PlanarF16', 0),
    ('PlanarF32', 1),
  ]

class EnumWithNumbers(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('k_2_1', 4),
  ]

class EnumWithK(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('K', 0),
  ]

class EnumWithInternalAllCaps(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('STANDARD', 0),
    ('FULLSCREEN', 1),
    ('IMMERSIVE', 2),
  ]

class NormalEnum(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('FIRST', 0),
    ('SECOND', 1),
  ]

class CamelCaseTestEnum(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('BOOL_THING', 0),
    ('DOUBLE_THING', 1),
    ('FLOAT_THING', 2),
    ('INT8_THING', 3),
    ('INT16THING', 4),
    ('INT32_TH1NG', 5),
    ('INT64_Th1ng', 6),
    ('UINT8T_h1ng', 7),
    ('UINT16t_h1NG', 8),
    ('UINT32_TH1ng', 9),
    ('UINT64_TH1NG', 10),
  ]

class Edge(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('v', _descriptor.StructType(lambda: Vertex, nullable=True), 0, 0),
    ],
  }

class Vertex(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('e', _descriptor.StructType(lambda: EmptyStruct, nullable=True), 0, 0),
    ],
  }

class EmptyStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
  }

class A(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('b', _descriptor.StructType(lambda: B, nullable=True), 0, 0),
    ],
  }

class B(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('a', _descriptor.StructType(lambda: A, nullable=True), 0, 0),
    ],
  }

class StructWithHandleCalledHandles(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('handles', _descriptor.TYPE_HANDLE, 0, 0),
    ],
  }

class StructWithArrayOfHandlesCalledHandles(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('handles', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE), 0, 0),
    ],
  }

class StructWithInterfaceCalledHandles(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('handles', _descriptor.InterfaceType(lambda: TestInterface), 0, 0),
    ],
  }

class ContainsArrayOfEnum(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('array_of_enums', _descriptor.GenericArrayType(_descriptor.TYPE_INT32), 0, 0),
    ],
  }


class CheckMethodWithEmptyResponse(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'WithoutParameterAndEmptyResponse',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
        },
      },
      {
        'name': 'WithParameterAndEmptyResponse',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('b', _descriptor.TYPE_BOOL, 0, 0)]),
          ],
        },
        'responses': {
        },
      },
    ],
  }

class CheckNameCollision(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'WithNameCollision',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('message', _descriptor.TYPE_BOOL, 0, 0), _descriptor.FieldDescriptor('response', _descriptor.TYPE_BOOL, 1, 0)]),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('message', _descriptor.TYPE_BOOL, 0, 0), _descriptor.FieldDescriptor('response', _descriptor.TYPE_BOOL, 1, 0)]),
          ],
        },
      },
    ],
  }

class CheckEnumCaps(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'SetEnumWithInternalAllCaps',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('e', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
    ],
  }

class TestInterface(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'SomeMessage',
        'ordinal': 0,
        'parameters': {
        },
      },
    ],
  }

class Regression551(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Get',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('key_prefixes', _descriptor.GenericArrayType(_descriptor.TYPE_STRING), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('result', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
    ],
  }

class ServiceName(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'ServiceName',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('service_name', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
    ],
  }
