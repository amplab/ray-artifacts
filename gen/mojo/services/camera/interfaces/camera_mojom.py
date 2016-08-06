# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class Photo(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('unique_id', _descriptor.TYPE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('content', _descriptor.TYPE_HANDLE, 1, 0),
    ],
  }


class CameraRollService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::CameraRollService',
    'version': 0,
    'methods': [
      {
        'name': 'Update',
        'ordinal': 0,
        'parameters': {
        },
      },
      {
        'name': 'GetCount',
        'ordinal': 1,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('num_photos', _descriptor.TYPE_UINT32, 0, 0),
          ],
        },
      },
      {
        'name': 'GetPhoto',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('index', _descriptor.TYPE_UINT32, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('photo', _descriptor.StructType(lambda: Photo, nullable=True), 0, 0),
          ],
        },
      },
    ],
  }

class CameraService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::CameraService',
    'version': 0,
    'methods': [
      {
        'name': 'GetLatestFrame',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('content', _descriptor.TYPE_NULLABLE_HANDLE, 0, 0),
          ],
        },
      },
    ],
  }
