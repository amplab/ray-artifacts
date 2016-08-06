# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import tracing_mojom


class TraceProviderRegistry(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'tracing.TraceProviderRegistry',
    'version': 0,
    'methods': [
      {
        'name': 'RegisterTraceProvider',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('trace_provider', _descriptor.InterfaceType(lambda: tracing_mojom.TraceProvider), 0, 0),
          ],
        },
      },
    ],
  }
