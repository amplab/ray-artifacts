# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

import http_header_mojom

class UrlRequest(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'enums': {
      'CacheMode': [
          ('DEFAULT', 0),
          ('BYPASS_CACHE', 1),
          ('ONLY_FROM_CACHE', 2),
        ],
    },
    'fields': [
      _descriptor.SingleFieldGroup('url', _descriptor.TYPE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('method', _descriptor.TYPE_STRING, 1, 0, default_value="GET"),
      _descriptor.SingleFieldGroup('headers', _descriptor.GenericArrayType(_descriptor.StructType(lambda: http_header_mojom.HttpHeader), nullable=True), 2, 0),
      _descriptor.SingleFieldGroup('body', _descriptor.GenericArrayType(_descriptor.TYPE_HANDLE, nullable=True), 3, 0),
      _descriptor.SingleFieldGroup('response_body_buffer_size', _descriptor.TYPE_UINT32, 4, 0, default_value=0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('auto_follow_redirects', _descriptor.TYPE_BOOL, 5, 0, default_value=False)]),
      _descriptor.SingleFieldGroup('cache_mode', _descriptor.TYPE_INT32, 6, 0, default_value=0),
    ],
  }

