# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import test_included_unions_mojom

class AnEnum(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('FIRST', 0),
    ('SECOND', 1),
  ]

class StructOfUnions(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('u', _descriptor.UnionType(lambda: ObjectUnion), 0, 0),
      _descriptor.SingleFieldGroup('a_ou', _descriptor.GenericArrayType(_descriptor.UnionType(lambda: ObjectUnion)), 1, 0),
      _descriptor.SingleFieldGroup('a_hu', _descriptor.GenericArrayType(_descriptor.UnionType(lambda: HandleUnion)), 2, 0),
      _descriptor.SingleFieldGroup('m_ou', _descriptor.MapType(_descriptor.TYPE_INT64, _descriptor.UnionType(lambda: ObjectUnion)), 3, 0),
      _descriptor.SingleFieldGroup('m_hu', _descriptor.MapType(_descriptor.TYPE_INT64, _descriptor.UnionType(lambda: HandleUnion)), 4, 0),
    ],
  }

class WrapperStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('object_union', _descriptor.UnionType(lambda: ObjectUnion, nullable=True), 0, 0),
      _descriptor.SingleFieldGroup('pod_union', _descriptor.UnionType(lambda: PodUnion, nullable=True), 1, 0),
      _descriptor.SingleFieldGroup('handle_union', _descriptor.UnionType(lambda: HandleUnion, nullable=True), 2, 0),
    ],
  }

class DummyStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f_int8', _descriptor.TYPE_INT8, 0, 0),
    ],
  }

class SmallStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('dummy_struct', _descriptor.StructType(lambda: DummyStruct, nullable=True), 0, 0),
      _descriptor.SingleFieldGroup('pod_union', _descriptor.UnionType(lambda: PodUnion, nullable=True), 1, 0),
      _descriptor.SingleFieldGroup('pod_union_array', _descriptor.GenericArrayType(_descriptor.UnionType(lambda: PodUnion), nullable=True), 2, 0),
      _descriptor.SingleFieldGroup('nullable_pod_union_array', _descriptor.GenericArrayType(_descriptor.UnionType(lambda: PodUnion, nullable=True), nullable=True), 3, 0),
      _descriptor.SingleFieldGroup('s_array', _descriptor.GenericArrayType(_descriptor.StructType(lambda: DummyStruct), nullable=True), 4, 0),
      _descriptor.SingleFieldGroup('pod_union_map', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.UnionType(lambda: PodUnion), nullable=True), 5, 0),
      _descriptor.SingleFieldGroup('nullable_pod_union_map', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.UnionType(lambda: PodUnion, nullable=True), nullable=True), 6, 0),
    ],
  }

class SmallStructNonNullableUnion(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('pod_union', _descriptor.UnionType(lambda: PodUnion), 0, 0),
    ],
  }

class StructNullObjectUnion(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('obj_union', _descriptor.UnionType(lambda: ObjectOnlyUnion, nullable=True), 0, 0),
    ],
  }

class SmallObjStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('obj_union', _descriptor.UnionType(lambda: ObjectUnion), 0, 0),
      _descriptor.SingleFieldGroup('f_int8', _descriptor.TYPE_INT8, 1, 0),
    ],
  }

class TryNonNullStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('nullable', _descriptor.StructType(lambda: DummyStruct, nullable=True), 0, 0),
      _descriptor.SingleFieldGroup('non_nullable', _descriptor.StructType(lambda: DummyStruct), 1, 0),
    ],
  }

class IncludingStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('a', _descriptor.UnionType(lambda: test_included_unions_mojom.IncludedUnion), 0, 0),
    ],
  }

class PodUnion(object):
  __metaclass__ = _reflection.MojoUnionType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f_int8', _descriptor.TYPE_INT8, 0, 0),
      _descriptor.SingleFieldGroup('f_int8_other', _descriptor.TYPE_INT8, 1, 0),
      _descriptor.SingleFieldGroup('f_uint8', _descriptor.TYPE_UINT8, 2, 0),
      _descriptor.SingleFieldGroup('f_int16', _descriptor.TYPE_INT16, 3, 0),
      _descriptor.SingleFieldGroup('f_uint16', _descriptor.TYPE_UINT16, 4, 0),
      _descriptor.SingleFieldGroup('f_int32', _descriptor.TYPE_INT32, 5, 0),
      _descriptor.SingleFieldGroup('f_uint32', _descriptor.TYPE_UINT32, 6, 0),
      _descriptor.SingleFieldGroup('f_int64', _descriptor.TYPE_INT64, 7, 0),
      _descriptor.SingleFieldGroup('f_uint64', _descriptor.TYPE_UINT64, 8, 0),
      _descriptor.SingleFieldGroup('f_float', _descriptor.TYPE_FLOAT, 9, 0),
      _descriptor.SingleFieldGroup('f_double', _descriptor.TYPE_DOUBLE, 10, 0),
      _descriptor.SingleFieldGroup('f_bool', _descriptor.TYPE_BOOL, 11, 0),
      _descriptor.SingleFieldGroup('f_enum', _descriptor.TYPE_INT32, 12, 0),
    ],
   }

class UnionOfUnions(object):
  __metaclass__ = _reflection.MojoUnionType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('u', _descriptor.UnionType(lambda: ObjectUnion), 0, 0),
      _descriptor.SingleFieldGroup('a_ou', _descriptor.GenericArrayType(_descriptor.UnionType(lambda: ObjectUnion)), 1, 0),
      _descriptor.SingleFieldGroup('a_hu', _descriptor.GenericArrayType(_descriptor.UnionType(lambda: HandleUnion)), 2, 0),
      _descriptor.SingleFieldGroup('m_ou', _descriptor.MapType(_descriptor.TYPE_INT64, _descriptor.UnionType(lambda: ObjectUnion)), 3, 0),
      _descriptor.SingleFieldGroup('m_hu', _descriptor.MapType(_descriptor.TYPE_INT64, _descriptor.UnionType(lambda: HandleUnion)), 4, 0),
    ],
   }

class ObjectUnion(object):
  __metaclass__ = _reflection.MojoUnionType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f_int8', _descriptor.TYPE_INT8, 0, 0),
      _descriptor.SingleFieldGroup('f_string', _descriptor.TYPE_STRING, 1, 0),
      _descriptor.SingleFieldGroup('f_dummy', _descriptor.StructType(lambda: DummyStruct), 2, 0),
      _descriptor.SingleFieldGroup('f_nullable', _descriptor.StructType(lambda: DummyStruct, nullable=True), 3, 0),
      _descriptor.SingleFieldGroup('f_array_int8', _descriptor.NativeArrayType('b'), 4, 0),
      _descriptor.SingleFieldGroup('f_map_int8', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.TYPE_INT8), 5, 0),
      _descriptor.SingleFieldGroup('f_pod_union', _descriptor.UnionType(lambda: PodUnion), 6, 0),
    ],
   }

class HandleUnion(object):
  __metaclass__ = _reflection.MojoUnionType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f_handle', _descriptor.TYPE_HANDLE, 0, 0),
      _descriptor.SingleFieldGroup('f_message_pipe', _descriptor.TYPE_HANDLE, 1, 0),
      _descriptor.SingleFieldGroup('f_data_pipe_consumer', _descriptor.TYPE_HANDLE, 2, 0),
      _descriptor.SingleFieldGroup('f_data_pipe_producer', _descriptor.TYPE_HANDLE, 3, 0),
      _descriptor.SingleFieldGroup('f_shared_buffer', _descriptor.TYPE_HANDLE, 4, 0),
      _descriptor.SingleFieldGroup('f_small_cache', _descriptor.InterfaceType(lambda: SmallCache), 5, 0),
    ],
   }

class ObjectOnlyUnion(object):
  __metaclass__ = _reflection.MojoUnionType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('dummy1', _descriptor.StructType(lambda: DummyStruct), 0, 0),
    ],
   }

class OldUnion(object):
  __metaclass__ = _reflection.MojoUnionType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f_int8', _descriptor.TYPE_INT8, 0, 0),
    ],
   }

class NewUnion(object):
  __metaclass__ = _reflection.MojoUnionType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('f_int8', _descriptor.TYPE_INT8, 0, 0),
      _descriptor.SingleFieldGroup('f_int16', _descriptor.TYPE_INT16, 1, 0),
    ],
   }


class SmallCache(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'SetIntValue',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('int_value', _descriptor.TYPE_INT64, 0, 0),
          ],
        },
      },
      {
        'name': 'GetIntValue',
        'ordinal': 1,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('int_value', _descriptor.TYPE_INT64, 0, 0),
          ],
        },
      },
    ],
  }

class UnionInterface(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Echo',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('in_val', _descriptor.UnionType(lambda: PodUnion), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('out_val', _descriptor.UnionType(lambda: PodUnion), 0, 0),
          ],
        },
      },
    ],
  }
