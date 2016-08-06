# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import sample_import_mojom

class Request(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('x', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('pipe', _descriptor.TYPE_NULLABLE_HANDLE, 1, 0),
      _descriptor.SingleFieldGroup('more_pipes', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE, nullable=True), 2, 0),
      _descriptor.SingleFieldGroup('obj', _descriptor.InterfaceType(lambda: sample_import_mojom.ImportedInterface, nullable=True), 3, 0),
    ],
  }

class Response(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('x', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('pipe', _descriptor.TYPE_NULLABLE_HANDLE, 1, 0),
    ],
  }


class NamedObject(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'sample::NamedObject',
    'version': 0,
    'methods': [
      {
        'name': 'SetName',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('name', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
      {
        'name': 'GetName',
        'ordinal': 1,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('name', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
    ],
  }

class Factory(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'DoStuff',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('request', _descriptor.StructType(lambda: Request), 0, 0),
            _descriptor.SingleFieldGroup('pipe', _descriptor.TYPE_NULLABLE_HANDLE, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: Response), 0, 0),
            _descriptor.SingleFieldGroup('text', _descriptor.TYPE_STRING, 1, 0),
          ],
        },
      },
      {
        'name': 'DoStuff2',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('pipe', _descriptor.TYPE_HANDLE, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('text', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
      {
        'name': 'CreateNamedObject',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('obj', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
      },
      {
        'name': 'RequestImportedInterface',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('obj', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('obj', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
      },
      {
        'name': 'TakeImportedInterface',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('obj', _descriptor.InterfaceType(lambda: sample_import_mojom.ImportedInterface), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('obj', _descriptor.InterfaceType(lambda: sample_import_mojom.ImportedInterface), 0, 0),
          ],
        },
      },
    ],
  }
