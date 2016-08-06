# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import context_provider_mojom
import viewport_parameter_listener_mojom
import surfaces_mojom


class Display(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'SubmitFrame',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('frame', _descriptor.StructType(lambda: surfaces_mojom.Frame), 0, 0),
          ],
        },
        'responses': {
        },
      },
    ],
  }

class DisplayFactory(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::DisplayFactory',
    'version': 0,
    'methods': [
      {
        'name': 'Create',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('context_provider', _descriptor.InterfaceType(lambda: context_provider_mojom.ContextProvider), 0, 0),
            _descriptor.SingleFieldGroup('returner', _descriptor.InterfaceType(lambda: surfaces_mojom.ResourceReturner, nullable=True), 1, 0),
            _descriptor.SingleFieldGroup('display_request', _descriptor.InterfaceRequestType(), 2, 0),
          ],
        },
      },
    ],
  }
