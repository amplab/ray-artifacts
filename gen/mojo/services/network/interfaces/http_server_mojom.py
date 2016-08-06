# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import http_connection_mojom


class HttpServerDelegate(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'OnConnected',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('connection', _descriptor.InterfaceType(lambda: http_connection_mojom.HttpConnection), 0, 0),
            _descriptor.SingleFieldGroup('delegate', _descriptor.InterfaceRequestType(), 1, 0),
          ],
        },
      },
    ],
  }
