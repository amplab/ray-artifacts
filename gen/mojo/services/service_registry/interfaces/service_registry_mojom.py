# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import service_provider_mojom


class ServiceRegistry(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::ServiceRegistry',
    'version': 0,
    'methods': [
      {
        'name': 'AddServices',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('interface_names', _descriptor.GenericArrayType(_descriptor.TYPE_STRING), 0, 0),
            _descriptor.SingleFieldGroup('service_provider', _descriptor.InterfaceType(lambda: service_provider_mojom.ServiceProvider), 1, 0),
          ],
        },
      },
    ],
  }
