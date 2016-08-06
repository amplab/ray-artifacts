# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class ObjectInfo(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('name', _descriptor.TYPE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('size', _descriptor.TYPE_UINT64, 1, 0),
      _descriptor.SingleFieldGroup('create_time', _descriptor.TYPE_INT64, 2, 0),
      _descriptor.SingleFieldGroup('construct_duration', _descriptor.TYPE_INT64, 3, 0),
      _descriptor.SingleFieldGroup('creator_id', _descriptor.TYPE_INT64, 4, 0),
    ],
  }


class Plasma(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'plasma::service::Plasma',
    'version': 0,
    'methods': [
      {
        'name': 'CreateObject',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('object_id', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('size', _descriptor.TYPE_UINT64, 1, 0),
            _descriptor.SingleFieldGroup('name', _descriptor.TYPE_STRING, 2, 0),
            _descriptor.SingleFieldGroup('creator_id', _descriptor.TYPE_INT64, 3, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('buffer', _descriptor.TYPE_HANDLE, 0, 0),
          ],
        },
      },
      {
        'name': 'ResizeObject',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('object_id', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('new_size', _descriptor.TYPE_UINT64, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('buffer', _descriptor.TYPE_HANDLE, 0, 0),
          ],
        },
      },
      {
        'name': 'SealObject',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('object_id', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
      {
        'name': 'GetObject',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('object_id', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('block', _descriptor.TYPE_BOOL, 1, 0)]),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('buffer', _descriptor.TYPE_HANDLE, 0, 0),
            _descriptor.SingleFieldGroup('size', _descriptor.TYPE_UINT64, 1, 0),
          ],
        },
      },
      {
        'name': 'ListObjects',
        'ordinal': 4,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('info', _descriptor.GenericArrayType(_descriptor.StructType(lambda: ObjectInfo)), 0, 0),
          ],
        },
      },
    ],
  }
