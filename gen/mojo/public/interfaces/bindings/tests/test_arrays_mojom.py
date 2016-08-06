# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class StructWithInterface(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('iptr', _descriptor.InterfaceType(lambda: TestInterface), 0, 0),
    ],
  }

class StructWithInterfaceArray(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('structs_array', _descriptor.GenericArrayType(_descriptor.StructType(lambda: StructWithInterface)), 0, 0),
      _descriptor.SingleFieldGroup('structs_nullable_array', _descriptor.GenericArrayType(_descriptor.StructType(lambda: StructWithInterface), nullable=True), 1, 0),
      _descriptor.SingleFieldGroup('nullable_structs_array', _descriptor.GenericArrayType(_descriptor.StructType(lambda: StructWithInterface, nullable=True)), 2, 0),
      _descriptor.SingleFieldGroup('nullable_structs_nullable_array', _descriptor.GenericArrayType(_descriptor.StructType(lambda: StructWithInterface, nullable=True), nullable=True), 3, 0),
    ],
  }

class StructWithDataPipeConsumers(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('handles_array', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE), 0, 0),
      _descriptor.SingleFieldGroup('handles_nullable_array', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE, nullable=True), 1, 0),
      _descriptor.SingleFieldGroup('nullable_handles_array', _descriptor.GenericArrayType(_descriptor.TYPE_NULLABLE_HANDLE), 2, 0),
      _descriptor.SingleFieldGroup('nullable_handles_nullable_array', _descriptor.GenericArrayType(_descriptor.TYPE_NULLABLE_HANDLE, nullable=True), 3, 0),
    ],
  }

class StructWithDataPipeProducers(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('handles_array', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE), 0, 0),
      _descriptor.SingleFieldGroup('handles_nullable_array', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE, nullable=True), 1, 0),
      _descriptor.SingleFieldGroup('nullable_handles_array', _descriptor.GenericArrayType(_descriptor.TYPE_NULLABLE_HANDLE), 2, 0),
      _descriptor.SingleFieldGroup('nullable_handles_nullable_array', _descriptor.GenericArrayType(_descriptor.TYPE_NULLABLE_HANDLE, nullable=True), 3, 0),
    ],
  }

class StructWithSharedBuffers(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('handles_array', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE), 0, 0),
      _descriptor.SingleFieldGroup('handles_nullable_array', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE, nullable=True), 1, 0),
      _descriptor.SingleFieldGroup('nullable_handles_array', _descriptor.GenericArrayType(_descriptor.TYPE_NULLABLE_HANDLE), 2, 0),
      _descriptor.SingleFieldGroup('nullable_handles_nullable_array', _descriptor.GenericArrayType(_descriptor.TYPE_NULLABLE_HANDLE, nullable=True), 3, 0),
    ],
  }

class StructWithMessagePipes(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('handles_array', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE), 0, 0),
      _descriptor.SingleFieldGroup('handles_nullable_array', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE, nullable=True), 1, 0),
      _descriptor.SingleFieldGroup('nullable_handles_array', _descriptor.GenericArrayType(_descriptor.TYPE_NULLABLE_HANDLE), 2, 0),
      _descriptor.SingleFieldGroup('nullable_handles_nullable_array', _descriptor.GenericArrayType(_descriptor.TYPE_NULLABLE_HANDLE, nullable=True), 3, 0),
    ],
  }

class StructWithHandles(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('handles_array', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE), 0, 0),
      _descriptor.SingleFieldGroup('handles_nullable_array', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE, nullable=True), 1, 0),
      _descriptor.SingleFieldGroup('nullable_handles_array', _descriptor.GenericArrayType(_descriptor.TYPE_NULLABLE_HANDLE), 2, 0),
      _descriptor.SingleFieldGroup('nullable_handles_nullable_array', _descriptor.GenericArrayType(_descriptor.TYPE_NULLABLE_HANDLE, nullable=True), 3, 0),
    ],
  }

class StructWithInterfaceRequests(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('req_array', _descriptor.GenericArrayType(_descriptor.InterfaceRequestType()), 0, 0),
      _descriptor.SingleFieldGroup('req_nullable_array', _descriptor.GenericArrayType(_descriptor.InterfaceRequestType(), nullable=True), 1, 0),
      _descriptor.SingleFieldGroup('nullable_req_array', _descriptor.GenericArrayType(_descriptor.InterfaceRequestType(nullable=True)), 2, 0),
      _descriptor.SingleFieldGroup('nullable_req_nullable_array', _descriptor.GenericArrayType(_descriptor.InterfaceRequestType(nullable=True), nullable=True), 3, 0),
    ],
  }


class TestInterface(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Foo',
        'ordinal': 0,
        'parameters': {
        },
      },
    ],
  }
