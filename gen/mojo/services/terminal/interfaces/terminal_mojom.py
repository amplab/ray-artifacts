# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import file_mojom
import types_mojom
import terminal_client_mojom


class Terminal(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::terminal::Terminal',
    'version': 0,
    'methods': [
      {
        'name': 'Connect',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('terminal_file', _descriptor.InterfaceRequestType(), 0, 0),
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('force', _descriptor.TYPE_BOOL, 1, 0)]),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'ConnectToClient',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('terminal_client', _descriptor.InterfaceType(lambda: terminal_client_mojom.TerminalClient), 0, 0),
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('force', _descriptor.TYPE_BOOL, 1, 0)]),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'GetSize',
        'ordinal': 2,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('rows', _descriptor.TYPE_UINT32, 1, 0),
            _descriptor.SingleFieldGroup('columns', _descriptor.TYPE_UINT32, 2, 0),
          ],
        },
      },
      {
        'name': 'SetSize',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('rows', _descriptor.TYPE_UINT32, 0, 0),
            _descriptor.SingleFieldGroup('columns', _descriptor.TYPE_UINT32, 1, 0),
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('reset', _descriptor.TYPE_BOOL, 2, 0)]),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('rows', _descriptor.TYPE_UINT32, 1, 0),
            _descriptor.SingleFieldGroup('columns', _descriptor.TYPE_UINT32, 2, 0),
          ],
        },
      },
    ],
  }
