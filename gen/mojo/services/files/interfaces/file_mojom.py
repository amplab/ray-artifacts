# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import types_mojom


class File(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Close',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('err', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'Read',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('num_bytes_to_read', _descriptor.TYPE_UINT32, 0, 0),
            _descriptor.SingleFieldGroup('whence', _descriptor.TYPE_INT32, 2, 0),
            _descriptor.SingleFieldGroup('offset', _descriptor.TYPE_INT64, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('bytes_read', _descriptor.NativeArrayType('B', nullable=True), 1, 0),
          ],
        },
      },
      {
        'name': 'Write',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('bytes_to_write', _descriptor.NativeArrayType('B'), 0, 0),
            _descriptor.SingleFieldGroup('offset', _descriptor.TYPE_INT64, 1, 0),
            _descriptor.SingleFieldGroup('whence', _descriptor.TYPE_INT32, 2, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('num_bytes_written', _descriptor.TYPE_UINT32, 1, 0),
          ],
        },
      },
      {
        'name': 'ReadToStream',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('source', _descriptor.TYPE_HANDLE, 0, 0),
            _descriptor.SingleFieldGroup('whence', _descriptor.TYPE_INT32, 2, 0),
            _descriptor.SingleFieldGroup('offset', _descriptor.TYPE_INT64, 1, 0),
            _descriptor.SingleFieldGroup('num_bytes_to_read', _descriptor.TYPE_INT64, 3, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'WriteFromStream',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('sink', _descriptor.TYPE_HANDLE, 0, 0),
            _descriptor.SingleFieldGroup('whence', _descriptor.TYPE_INT32, 2, 0),
            _descriptor.SingleFieldGroup('offset', _descriptor.TYPE_INT64, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'Tell',
        'ordinal': 5,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('position', _descriptor.TYPE_INT64, 1, 0),
          ],
        },
      },
      {
        'name': 'Seek',
        'ordinal': 6,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('offset', _descriptor.TYPE_INT64, 0, 0),
            _descriptor.SingleFieldGroup('whence', _descriptor.TYPE_INT32, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('position', _descriptor.TYPE_INT64, 1, 0),
          ],
        },
      },
      {
        'name': 'Stat',
        'ordinal': 7,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('file_information', _descriptor.StructType(lambda: types_mojom.FileInformation, nullable=True), 1, 0),
          ],
        },
      },
      {
        'name': 'Truncate',
        'ordinal': 8,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('size', _descriptor.TYPE_INT64, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'Touch',
        'ordinal': 9,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('atime', _descriptor.StructType(lambda: types_mojom.TimespecOrNow, nullable=True), 0, 0),
            _descriptor.SingleFieldGroup('mtime', _descriptor.StructType(lambda: types_mojom.TimespecOrNow, nullable=True), 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'Dup',
        'ordinal': 10,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('file', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'Reopen',
        'ordinal': 11,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('file', _descriptor.InterfaceRequestType(), 0, 0),
            _descriptor.SingleFieldGroup('open_flags', _descriptor.TYPE_UINT32, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'AsBuffer',
        'ordinal': 12,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('buffer', _descriptor.TYPE_NULLABLE_HANDLE, 1, 0),
          ],
        },
      },
      {
        'name': 'Ioctl',
        'ordinal': 13,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('request', _descriptor.TYPE_UINT32, 0, 0),
            _descriptor.SingleFieldGroup('in_values', _descriptor.NativeArrayType('I', nullable=True), 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('out_values', _descriptor.NativeArrayType('I', nullable=True), 1, 0),
          ],
        },
      },
    ],
  }
