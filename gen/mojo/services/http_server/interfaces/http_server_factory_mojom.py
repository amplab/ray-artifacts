# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import http_server_mojom
import net_address_mojom


class HttpServerFactory(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'http_server::HttpServerFactory',
    'version': 0,
    'methods': [
      {
        'name': 'CreateHttpServer',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('server_request', _descriptor.InterfaceRequestType(), 0, 0),
            _descriptor.SingleFieldGroup('local_address', _descriptor.StructType(lambda: net_address_mojom.NetAddress, nullable=True), 1, 0),
          ],
        },
      },
    ],
  }
