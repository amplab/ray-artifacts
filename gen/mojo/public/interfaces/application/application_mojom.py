# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import service_provider_mojom
import shell_mojom


class Application(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Initialize',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('shell', _descriptor.InterfaceType(lambda: shell_mojom.Shell), 0, 0),
            _descriptor.SingleFieldGroup('args', _descriptor.GenericArrayType(_descriptor.TYPE_STRING, nullable=True), 1, 0),
            _descriptor.SingleFieldGroup('url', _descriptor.TYPE_STRING, 2, 0),
          ],
        },
      },
      {
        'name': 'AcceptConnection',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('requestor_url', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('resolved_url', _descriptor.TYPE_STRING, 1, 0),
            _descriptor.SingleFieldGroup('services', _descriptor.InterfaceRequestType(), 2, 0),
          ],
        },
      },
      {
        'name': 'RequestQuit',
        'ordinal': 2,
        'parameters': {
        },
      },
    ],
  }
