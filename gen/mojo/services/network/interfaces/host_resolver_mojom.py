# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import network_error_mojom
import net_address_mojom


class HostResolver(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'GetHostAddresses',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('host', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('family', _descriptor.TYPE_INT32, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('result', _descriptor.StructType(lambda: network_error_mojom.NetworkError), 0, 0),
            _descriptor.SingleFieldGroup('addresses', _descriptor.GenericArrayType(_descriptor.StructType(lambda: net_address_mojom.NetAddress), nullable=True), 1, 0),
          ],
        },
      },
    ],
  }
