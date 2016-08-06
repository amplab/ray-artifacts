# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

import http_header_mojom
import network_error_mojom

class UrlResponse(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('error', _descriptor.StructType(lambda: network_error_mojom.NetworkError, nullable=True), 0, 0),
      _descriptor.SingleFieldGroup('body', _descriptor.TYPE_NULLABLE_HANDLE, 1, 0),
      _descriptor.SingleFieldGroup('status_code', _descriptor.TYPE_UINT32, 3, 0),
      _descriptor.SingleFieldGroup('url', _descriptor.TYPE_NULLABLE_STRING, 2, 0),
      _descriptor.SingleFieldGroup('status_line', _descriptor.TYPE_NULLABLE_STRING, 4, 0),
      _descriptor.SingleFieldGroup('headers', _descriptor.GenericArrayType(_descriptor.StructType(lambda: http_header_mojom.HttpHeader), nullable=True), 5, 0),
      _descriptor.SingleFieldGroup('mime_type', _descriptor.TYPE_NULLABLE_STRING, 6, 0),
      _descriptor.SingleFieldGroup('charset', _descriptor.TYPE_NULLABLE_STRING, 7, 0),
      _descriptor.SingleFieldGroup('redirect_method', _descriptor.TYPE_NULLABLE_STRING, 8, 0),
      _descriptor.SingleFieldGroup('redirect_url', _descriptor.TYPE_NULLABLE_STRING, 9, 0),
      _descriptor.SingleFieldGroup('redirect_referrer', _descriptor.TYPE_NULLABLE_STRING, 10, 0),
    ],
  }

