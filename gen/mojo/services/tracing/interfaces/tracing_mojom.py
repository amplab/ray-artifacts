# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection


class TraceProvider(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'tracing::TraceProvider',
    'version': 0,
    'methods': [
      {
        'name': 'StartTracing',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('categories', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('recorder', _descriptor.InterfaceType(lambda: TraceRecorder), 1, 0),
          ],
        },
      },
      {
        'name': 'StopTracing',
        'ordinal': 1,
        'parameters': {
        },
      },
    ],
  }

class TraceRecorder(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Record',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('json', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
    ],
  }

class TraceCollector(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'tracing::TraceCollector',
    'version': 0,
    'methods': [
      {
        'name': 'Start',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('stream', _descriptor.TYPE_HANDLE, 0, 0),
            _descriptor.SingleFieldGroup('categories', _descriptor.TYPE_STRING, 1, 0),
          ],
        },
      },
      {
        'name': 'StopAndFlush',
        'ordinal': 1,
        'parameters': {
        },
      },
    ],
  }
