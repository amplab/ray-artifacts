# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import url_request_mojom

class Target(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('DEFAULT', 0),
    ('SOURCE_NODE', 1),
    ('NEW_NODE', 2),
  ]


class NavigatorHost(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::NavigatorHost',
    'version': 0,
    'methods': [
      {
        'name': 'RequestNavigate',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('target', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('request', _descriptor.StructType(lambda: url_request_mojom.UrlRequest), 1, 0),
          ],
        },
      },
      {
        'name': 'RequestNavigateHistory',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('delta', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'DidNavigateLocally',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('url', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
    ],
  }
