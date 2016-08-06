# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection


class TestService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'shell.TestService',
    'version': 0,
    'methods': [
      {
        'name': 'Test',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('test_string', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
        'responses': {
        },
      },
    ],
  }

class TestA(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'shell.TestA',
    'version': 0,
    'methods': [
      {
        'name': 'CallB',
        'ordinal': 0,
        'parameters': {
        },
      },
    ],
  }

class TestB(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'shell.TestB',
    'version': 0,
    'methods': [
      {
        'name': 'B',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
        },
      },
    ],
  }

class TestC(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'shell.TestC',
    'version': 0,
    'methods': [
      {
        'name': 'C',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
        },
      },
    ],
  }
