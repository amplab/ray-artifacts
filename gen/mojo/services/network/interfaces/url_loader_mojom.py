# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import network_error_mojom
import url_request_mojom
import url_response_mojom

class UrlLoaderStatus(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('error', _descriptor.StructType(lambda: network_error_mojom.NetworkError, nullable=True), 0, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('is_loading', _descriptor.TYPE_BOOL, 1, 0)]),
    ],
  }


class UrlLoader(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Start',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('request', _descriptor.StructType(lambda: url_request_mojom.UrlRequest), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: url_response_mojom.UrlResponse), 0, 0),
          ],
        },
      },
      {
        'name': 'FollowRedirect',
        'ordinal': 1,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: url_response_mojom.UrlResponse), 0, 0),
          ],
        },
      },
      {
        'name': 'QueryStatus',
        'ordinal': 2,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('status', _descriptor.StructType(lambda: UrlLoaderStatus), 0, 0),
          ],
        },
      },
    ],
  }
