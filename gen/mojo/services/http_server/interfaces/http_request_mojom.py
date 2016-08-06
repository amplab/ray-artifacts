# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

class HttpRequest(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('relative_url', _descriptor.TYPE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('method', _descriptor.TYPE_STRING, 1, 0, default_value="GET"),
      _descriptor.SingleFieldGroup('headers', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.TYPE_STRING, nullable=True), 2, 0),
      _descriptor.SingleFieldGroup('body', _descriptor.TYPE_NULLABLE_HANDLE, 3, 0),
    ],
  }

