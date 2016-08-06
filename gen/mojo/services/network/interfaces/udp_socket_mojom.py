# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import network_error_mojom
import net_address_mojom


class UdpSocket(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'AllowAddressReuse',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('result', _descriptor.StructType(lambda: network_error_mojom.NetworkError), 0, 0),
          ],
        },
      },
      {
        'name': 'Bind',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('addr', _descriptor.StructType(lambda: net_address_mojom.NetAddress), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('result', _descriptor.StructType(lambda: network_error_mojom.NetworkError), 0, 0),
            _descriptor.SingleFieldGroup('bound_addr', _descriptor.StructType(lambda: net_address_mojom.NetAddress, nullable=True), 1, 0),
            _descriptor.SingleFieldGroup('receiver', _descriptor.InterfaceRequestType(nullable=True), 2, 0),
          ],
        },
      },
      {
        'name': 'Connect',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('remote_addr', _descriptor.StructType(lambda: net_address_mojom.NetAddress), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('result', _descriptor.StructType(lambda: network_error_mojom.NetworkError), 0, 0),
            _descriptor.SingleFieldGroup('local_addr', _descriptor.StructType(lambda: net_address_mojom.NetAddress, nullable=True), 1, 0),
            _descriptor.SingleFieldGroup('receiver', _descriptor.InterfaceRequestType(nullable=True), 2, 0),
          ],
        },
      },
      {
        'name': 'SetSendBufferSize',
        'ordinal': 3,
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
        'ordinal': 4,
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
        'name': 'NegotiateMaxPendingSendRequests',
        'ordinal': 5,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('requested_size', _descriptor.TYPE_UINT32, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('actual_size', _descriptor.TYPE_UINT32, 0, 0),
          ],
        },
      },
      {
        'name': 'ReceiveMore',
        'ordinal': 6,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('datagram_number', _descriptor.TYPE_UINT32, 0, 0),
          ],
        },
      },
      {
        'name': 'SendTo',
        'ordinal': 7,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('dest_addr', _descriptor.StructType(lambda: net_address_mojom.NetAddress, nullable=True), 0, 0),
            _descriptor.SingleFieldGroup('data', _descriptor.NativeArrayType('B'), 1, 0),
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

class UdpSocketReceiver(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'OnReceived',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('result', _descriptor.StructType(lambda: network_error_mojom.NetworkError), 0, 0),
            _descriptor.SingleFieldGroup('src_addr', _descriptor.StructType(lambda: net_address_mojom.NetAddress, nullable=True), 1, 0),
            _descriptor.SingleFieldGroup('data', _descriptor.NativeArrayType('B', nullable=True), 2, 0),
          ],
        },
      },
    ],
  }
