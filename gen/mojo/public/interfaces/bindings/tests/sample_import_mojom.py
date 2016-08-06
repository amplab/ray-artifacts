# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class Shape(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('RECTANGLE', 1),
    ('CIRCLE', 2),
    ('TRIANGLE', 3),
    ('LAST', 3),
  ]

class AnotherShape(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('RECTANGLE', 10),
    ('CIRCLE', 11),
    ('TRIANGLE', 12),
  ]

class YetAnotherShape(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('RECTANGLE', 20),
    ('CIRCLE', 21),
    ('TRIANGLE', 22),
  ]

class Point(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('x', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('y', _descriptor.TYPE_INT32, 1, 0),
    ],
  }


class ImportedInterface(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'DoSomething',
        'ordinal': 0,
        'parameters': {
        },
      },
    ],
  }
