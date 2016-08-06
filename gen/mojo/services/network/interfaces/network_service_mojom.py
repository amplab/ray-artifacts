# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import network_error_mojom
import cookie_store_mojom
import host_resolver_mojom
import http_server_mojom
import net_address_mojom
import tcp_bound_socket_mojom
import tcp_connected_socket_mojom
import udp_socket_mojom
import url_loader_mojom
import url_loader_interceptor_mojom
import web_socket_mojom


class NetworkService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::NetworkService',
    'version': 0,
    'methods': [
      {
        'name': 'CreateUrlLoader',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('loader', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
      },
      {
        'name': 'GetCookieStore',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('cookie_store', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
      },
      {
        'name': 'CreateWebSocket',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('socket', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
      },
      {
        'name': 'CreateTcpBoundSocket',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('local_address', _descriptor.StructType(lambda: net_address_mojom.NetAddress, nullable=True), 0, 0),
            _descriptor.SingleFieldGroup('bound_socket', _descriptor.InterfaceRequestType(), 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('result', _descriptor.StructType(lambda: network_error_mojom.NetworkError), 0, 0),
            _descriptor.SingleFieldGroup('bound_to', _descriptor.StructType(lambda: net_address_mojom.NetAddress, nullable=True), 1, 0),
          ],
        },
      },
      {
        'name': 'CreateTcpConnectedSocket',
        'ordinal': 4,
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
            _descriptor.SingleFieldGroup('local_address', _descriptor.StructType(lambda: net_address_mojom.NetAddress, nullable=True), 1, 0),
          ],
        },
      },
      {
        'name': 'CreateUdpSocket',
        'ordinal': 5,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('socket', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
      },
      {
        'name': 'CreateHttpServer',
        'ordinal': 6,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('local_address', _descriptor.StructType(lambda: net_address_mojom.NetAddress), 0, 0),
            _descriptor.SingleFieldGroup('delegate', _descriptor.InterfaceType(lambda: http_server_mojom.HttpServerDelegate), 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('result', _descriptor.StructType(lambda: network_error_mojom.NetworkError), 0, 0),
            _descriptor.SingleFieldGroup('bound_to', _descriptor.StructType(lambda: net_address_mojom.NetAddress, nullable=True), 1, 0),
          ],
        },
      },
      {
        'name': 'RegisterUrlLoaderInterceptor',
        'ordinal': 7,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('factory', _descriptor.InterfaceType(lambda: url_loader_interceptor_mojom.UrlLoaderInterceptorFactory), 0, 0),
          ],
        },
      },
      {
        'name': 'CreateHostResolver',
        'ordinal': 8,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('host_resolver', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
      },
    ],
  }
