# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection


class ObjStore(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::apps::ObjStore',
    'version': 0,
    'methods': [
      {
        'name': 'BuildObject',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('object_id', _descriptor.TYPE_INT64, 0, 0),
            _descriptor.SingleFieldGroup('size', _descriptor.TYPE_INT64, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('buffer', _descriptor.TYPE_HANDLE, 0, 0),
          ],
        },
      },
    ],
  }
