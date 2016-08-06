# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection


class IntegerService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::examples::IntegerService',
    'version': 0,
    'methods': [
      {
        'name': 'Increment',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('value', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
    ],
  }

class IndirectIntegerService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::examples::IndirectIntegerService',
    'version': 0,
    'methods': [
      {
        'name': 'Set',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('service', _descriptor.InterfaceType(lambda: IntegerService, nullable=True), 0, 0),
          ],
        },
      },
      {
        'name': 'Get',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('service', _descriptor.InterfaceRequestType(nullable=True), 0, 0),
          ],
        },
      },
    ],
  }
