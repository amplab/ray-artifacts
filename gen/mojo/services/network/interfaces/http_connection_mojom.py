# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import network_error_mojom
import http_message_mojom
import web_socket_mojom


class HttpConnection(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'SetSendBufferSize',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('size', _descriptor.TYPE_UINT32, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('result', _descriptor.StructType(lambda: network_error_mojom.NetworkError), 0, 0),
          ],
        },
      },
      {
        'name': 'SetReceiveBufferSize',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('size', _descriptor.TYPE_UINT32, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('result', _descriptor.StructType(lambda: network_error_mojom.NetworkError), 0, 0),
          ],
        },
      },
    ],
  }

class HttpConnectionDelegate(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'OnReceivedRequest',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('request', _descriptor.StructType(lambda: http_message_mojom.HttpRequest), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: http_message_mojom.HttpResponse), 0, 0),
          ],
        },
      },
      {
        'name': 'OnReceivedWebSocketRequest',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('request', _descriptor.StructType(lambda: http_message_mojom.HttpRequest), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('web_socket', _descriptor.InterfaceRequestType(nullable=True), 0, 0),
            _descriptor.SingleFieldGroup('send_stream', _descriptor.TYPE_NULLABLE_HANDLE, 1, 0),
            _descriptor.SingleFieldGroup('client', _descriptor.InterfaceType(lambda: web_socket_mojom.WebSocketClient, nullable=True), 2, 0),
          ],
        },
      },
    ],
  }
