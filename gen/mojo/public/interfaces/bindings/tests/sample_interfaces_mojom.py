# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

LONG = 4405

class Enum(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('VALUE', 0),
  ]


class Provider(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'EchoString',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('a', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('a', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
      {
        'name': 'EchoStrings',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('a', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('b', _descriptor.TYPE_STRING, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('a', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('b', _descriptor.TYPE_STRING, 1, 0),
          ],
        },
      },
      {
        'name': 'EchoMessagePipeHandle',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('a', _descriptor.TYPE_HANDLE, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('a', _descriptor.TYPE_HANDLE, 0, 0),
          ],
        },
      },
      {
        'name': 'EchoEnum',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('a', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('a', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'EchoInt',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('a', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('a', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
    ],
  }

class IntegerAccessor(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 3,
    'methods': [
      {
        'name': 'GetInteger',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('data', _descriptor.TYPE_INT64, 0, 0),
            _descriptor.SingleFieldGroup('type', _descriptor.TYPE_INT32, 1, 2),
          ],
        },
      },
      {
        'name': 'SetInteger',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('data', _descriptor.TYPE_INT64, 0, 0),
            _descriptor.SingleFieldGroup('type', _descriptor.TYPE_INT32, 1, 3),
          ],
        },
      },
    ],
  }

class SampleInterface(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'SampleMethod1',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('in1', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('in2', _descriptor.TYPE_NULLABLE_STRING, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('out1', _descriptor.TYPE_NULLABLE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('out2', _descriptor.TYPE_INT32, 1, 0),
          ],
        },
      },
      {
        'name': 'SampleMethod0',
        'ordinal': 0,
        'parameters': {
        },
      },
      {
        'name': 'SampleMethod2',
        'ordinal': 2,
        'parameters': {
        },
      },
    ],
  }
