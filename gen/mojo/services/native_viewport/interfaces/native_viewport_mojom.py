# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import geometry_mojom
import context_provider_mojom
import native_viewport_event_dispatcher_mojom

class ViewportMetrics(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('size', _descriptor.StructType(lambda: geometry_mojom.Size), 0, 0),
      _descriptor.SingleFieldGroup('device_pixel_ratio', _descriptor.TYPE_FLOAT, 1, 0, default_value=1.0),
    ],
  }

class SurfaceConfiguration(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('red_bits', _descriptor.TYPE_UINT8, 0, 0, default_value=8),
      _descriptor.SingleFieldGroup('green_bits', _descriptor.TYPE_UINT8, 1, 0, default_value=8),
      _descriptor.SingleFieldGroup('blue_bits', _descriptor.TYPE_UINT8, 2, 0, default_value=8),
      _descriptor.SingleFieldGroup('alpha_bits', _descriptor.TYPE_UINT8, 3, 0, default_value=8),
      _descriptor.SingleFieldGroup('depth_bits', _descriptor.TYPE_UINT8, 4, 0),
      _descriptor.SingleFieldGroup('stencil_bits', _descriptor.TYPE_UINT8, 5, 0),
    ],
  }


class NativeViewport(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::NativeViewport',
    'version': 0,
    'methods': [
      {
        'name': 'Create',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('size', _descriptor.StructType(lambda: geometry_mojom.Size), 0, 0),
            _descriptor.SingleFieldGroup('requested_configuration', _descriptor.StructType(lambda: SurfaceConfiguration, nullable=True), 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('metrics', _descriptor.StructType(lambda: ViewportMetrics), 0, 0),
          ],
        },
      },
      {
        'name': 'Show',
        'ordinal': 1,
        'parameters': {
        },
      },
      {
        'name': 'Hide',
        'ordinal': 2,
        'parameters': {
        },
      },
      {
        'name': 'Close',
        'ordinal': 3,
        'parameters': {
        },
      },
      {
        'name': 'SetSize',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('size', _descriptor.StructType(lambda: geometry_mojom.Size), 0, 0),
          ],
        },
      },
      {
        'name': 'SetEventDispatcher',
        'ordinal': 5,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('dispatcher', _descriptor.InterfaceType(lambda: native_viewport_event_dispatcher_mojom.NativeViewportEventDispatcher), 0, 0),
          ],
        },
      },
      {
        'name': 'GetContextProvider',
        'ordinal': 6,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('provider', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
      },
      {
        'name': 'RequestMetrics',
        'ordinal': 7,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('metrics', _descriptor.StructType(lambda: ViewportMetrics), 0, 0),
          ],
        },
      },
    ],
  }
