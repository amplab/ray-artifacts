# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import location_mojom


class LocationService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::LocationService',
    'version': 0,
    'methods': [
      {
        'name': 'GetNextLocation',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('priority', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('location', _descriptor.StructType(lambda: location_mojom.Location, nullable=True), 0, 0),
          ],
        },
      },
    ],
  }
