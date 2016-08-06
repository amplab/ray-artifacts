# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection


class Clipboard(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::Clipboard',
    'version': 0,
    'methods': [
      {
        'name': 'GetSequenceNumber',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('clipboard_type', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('sequence', _descriptor.TYPE_UINT64, 0, 0),
          ],
        },
      },
      {
        'name': 'GetAvailableMimeTypes',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('clipboard_types', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('types', _descriptor.GenericArrayType(_descriptor.TYPE_STRING), 0, 0),
          ],
        },
      },
      {
        'name': 'ReadMimeType',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('clipboard_type', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('mime_type', _descriptor.TYPE_STRING, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('data', _descriptor.NativeArrayType('B', nullable=True), 0, 0),
          ],
        },
      },
      {
        'name': 'WriteClipboardData',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('clipboard_type', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('data', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.NativeArrayType('B'), nullable=True), 1, 0),
          ],
        },
      },
    ],
  }
