# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import network_error_mojom


class WebSocket(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Connect',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('url', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('protocols', _descriptor.GenericArrayType(_descriptor.TYPE_STRING), 1, 0),
            _descriptor.SingleFieldGroup('origin', _descriptor.TYPE_STRING, 2, 0),
            _descriptor.SingleFieldGroup('send_stream', _descriptor.TYPE_HANDLE, 3, 0),
            _descriptor.SingleFieldGroup('client', _descriptor.InterfaceType(lambda: WebSocketClient), 4, 0),
          ],
        },
      },
      {
        'name': 'Send',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('fin', _descriptor.TYPE_BOOL, 0, 0)]),
            _descriptor.SingleFieldGroup('type', _descriptor.TYPE_INT32, 1, 0),
            _descriptor.SingleFieldGroup('num_bytes', _descriptor.TYPE_UINT32, 2, 0),
          ],
        },
      },
      {
        'name': 'FlowControl',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('quota', _descriptor.TYPE_INT64, 0, 0),
          ],
        },
      },
      {
        'name': 'Close',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('code', _descriptor.TYPE_UINT16, 0, 0),
            _descriptor.SingleFieldGroup('reason', _descriptor.TYPE_STRING, 1, 0),
          ],
        },
      },
    ],
  }

class WebSocketClient(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'DidConnect',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('selected_subprotocol', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('extensions', _descriptor.TYPE_STRING, 1, 0),
            _descriptor.SingleFieldGroup('receive_stream', _descriptor.TYPE_HANDLE, 2, 0),
          ],
        },
      },
      {
        'name': 'DidReceiveData',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('fin', _descriptor.TYPE_BOOL, 0, 0)]),
            _descriptor.SingleFieldGroup('type', _descriptor.TYPE_INT32, 1, 0),
            _descriptor.SingleFieldGroup('num_bytes', _descriptor.TYPE_UINT32, 2, 0),
          ],
        },
      },
      {
        'name': 'DidReceiveFlowControl',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('quota', _descriptor.TYPE_INT64, 0, 0),
          ],
        },
      },
      {
        'name': 'DidFail',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('message', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
      {
        'name': 'DidClose',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('was_clean', _descriptor.TYPE_BOOL, 0, 0)]),
            _descriptor.SingleFieldGroup('code', _descriptor.TYPE_UINT16, 1, 0),
            _descriptor.SingleFieldGroup('reason', _descriptor.TYPE_STRING, 2, 0),
          ],
        },
      },
    ],
  }
