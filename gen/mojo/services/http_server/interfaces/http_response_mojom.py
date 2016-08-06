# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

class HttpResponse(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('status_code', _descriptor.TYPE_UINT32, 0, 0, default_value=200),
      _descriptor.SingleFieldGroup('body', _descriptor.TYPE_NULLABLE_HANDLE, 1, 0),
      _descriptor.SingleFieldGroup('content_length', _descriptor.TYPE_INT64, 2, 0, default_value=0),
      _descriptor.SingleFieldGroup('content_type', _descriptor.TYPE_STRING, 3, 0, default_value="text/html; charset=utf-8"),
      _descriptor.SingleFieldGroup('custom_headers', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.TYPE_STRING, nullable=True), 4, 0),
    ],
  }

