# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import http_request_mojom
import http_response_mojom


class HttpServer(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'SetHandler',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('pattern', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('handler', _descriptor.InterfaceType(lambda: HttpHandler), 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('success', _descriptor.TYPE_BOOL, 0, 0)]),
          ],
        },
      },
      {
        'name': 'GetPort',
        'ordinal': 1,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('port', _descriptor.TYPE_UINT16, 0, 0),
          ],
        },
      },
    ],
  }

class HttpHandler(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'HandleRequest',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('request', _descriptor.StructType(lambda: http_request_mojom.HttpRequest), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: http_response_mojom.HttpResponse), 0, 0),
          ],
        },
      },
    ],
  }
