# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import file_mojom
import types_mojom


class Directory(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Read',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('directory_contents', _descriptor.GenericArrayType(_descriptor.StructType(lambda: types_mojom.DirectoryEntry), nullable=True), 1, 0),
          ],
        },
      },
      {
        'name': 'Stat',
        'ordinal': 1,
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
        'name': 'Touch',
        'ordinal': 2,
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
        'name': 'OpenFile',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('path', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('file', _descriptor.InterfaceRequestType(nullable=True), 1, 0),
            _descriptor.SingleFieldGroup('open_flags', _descriptor.TYPE_UINT32, 2, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'OpenDirectory',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('path', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('directory', _descriptor.InterfaceRequestType(nullable=True), 1, 0),
            _descriptor.SingleFieldGroup('open_flags', _descriptor.TYPE_UINT32, 2, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'Rename',
        'ordinal': 5,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('path', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('new_path', _descriptor.TYPE_STRING, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'Delete',
        'ordinal': 6,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('path', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('delete_flags', _descriptor.TYPE_UINT32, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
    ],
  }
