# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

class Struct1(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('i', _descriptor.TYPE_UINT8, 0, 0),
    ],
  }

class Struct2(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('hdl', _descriptor.TYPE_HANDLE, 0, 0),
    ],
  }

class Struct3(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('struct_1', _descriptor.StructType(lambda: Struct1), 0, 0),
    ],
  }

class Struct4(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('data', _descriptor.GenericArrayType(_descriptor.StructType(lambda: Struct1)), 0, 0),
    ],
  }

class Struct5(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('pair', _descriptor.GenericArrayType(_descriptor.StructType(lambda: Struct1), length=2), 0, 0),
    ],
  }

class Struct6(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('str', _descriptor.TYPE_STRING, 0, 0),
    ],
  }

class StructOfNullables(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('hdl', _descriptor.TYPE_NULLABLE_HANDLE, 0, 0),
      _descriptor.SingleFieldGroup('struct_1', _descriptor.StructType(lambda: Struct1, nullable=True), 1, 0),
      _descriptor.SingleFieldGroup('str', _descriptor.TYPE_NULLABLE_STRING, 2, 0),
    ],
  }

