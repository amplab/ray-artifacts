# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import network_error_mojom
import net_address_mojom
import tcp_connected_socket_mojom
import tcp_server_socket_mojom


class TcpBoundSocket(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'StartListening',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('server', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('result', _descriptor.StructType(lambda: network_error_mojom.NetworkError), 0, 0),
          ],
        },
      },
      {
        'name': 'Connect',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('remote_address', _descriptor.StructType(lambda: net_address_mojom.NetAddress), 0, 0),
            _descriptor.SingleFieldGroup('send_stream', _descriptor.TYPE_HANDLE, 1, 0),
            _descriptor.SingleFieldGroup('receive_stream', _descriptor.TYPE_HANDLE, 2, 0),
            _descriptor.SingleFieldGroup('client_socket', _descriptor.InterfaceRequestType(), 3, 0),
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
