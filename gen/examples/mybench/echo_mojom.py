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
      _descriptor.SingleFieldGroup('ms_since_epoch', _descriptor.TYPE_INT64, 0, 0),
      _descriptor.SingleFieldGroup('num_bytes', _descriptor.TYPE_UINT64, 1, 0),
    ],
  }


class Echo(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::examples::Echo',
    'version': 0,
    'methods': [
      {
        'name': 'EchoString',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('value', _descriptor.TYPE_UINT32, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('value', _descriptor.TYPE_UINT32, 0, 0),
          ],
        },
      },
      {
        'name': 'BuildObject',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('object_id', _descriptor.TYPE_INT64, 0, 0),
            _descriptor.SingleFieldGroup('size', _descriptor.TYPE_UINT64, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('buffer', _descriptor.TYPE_HANDLE, 0, 0),
          ],
        },
      },
      {
        'name': 'ListObjects',
        'ordinal': 2,
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
