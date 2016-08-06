# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

import url_response_mojom

class CacheKey(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('request_origin', _descriptor.TYPE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('url', _descriptor.TYPE_STRING, 1, 0),
      _descriptor.SingleFieldGroup('timestamp', _descriptor.TYPE_INT64, 2, 0),
    ],
  }

class CacheEntry(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: url_response_mojom.UrlResponse), 0, 0),
      _descriptor.SingleFieldGroup('entry_directory', _descriptor.TYPE_STRING, 1, 0),
      _descriptor.SingleFieldGroup('response_body_path', _descriptor.TYPE_STRING, 2, 0),
      _descriptor.SingleFieldGroup('last_invalidation', _descriptor.TYPE_INT64, 3, 0),
    ],
  }

