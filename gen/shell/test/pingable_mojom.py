# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection


class Pingable(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'Pingable',
    'version': 0,
    'methods': [
      {
        'name': 'Ping',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('message', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('app_url', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('connection_url', _descriptor.TYPE_STRING, 1, 0),
            _descriptor.SingleFieldGroup('message', _descriptor.TYPE_STRING, 2, 0),
          ],
        },
      },
    ],
  }
