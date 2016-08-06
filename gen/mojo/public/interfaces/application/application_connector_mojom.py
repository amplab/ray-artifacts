# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import service_provider_mojom


class ApplicationConnector(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'ConnectToApplication',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('application_url', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('services', _descriptor.InterfaceRequestType(), 1, 0),
          ],
        },
      },
      {
        'name': 'Duplicate',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('application_connector_request', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
      },
    ],
  }
