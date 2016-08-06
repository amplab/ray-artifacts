# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import entry_mojom


class Log(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::log::Log',
    'version': 0,
    'methods': [
      {
        'name': 'AddEntry',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('entry', _descriptor.StructType(lambda: entry_mojom.Entry), 0, 0),
          ],
        },
      },
    ],
  }
