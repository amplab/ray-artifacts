# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

LOG_LEVEL_VERBOSE = -1
LOG_LEVEL_INFO = 0
LOG_LEVEL_WARNING = 1
LOG_LEVEL_ERROR = 2
LOG_LEVEL_FATAL = 3

class Entry(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('timestamp', _descriptor.TYPE_INT64, 0, 0),
      _descriptor.SingleFieldGroup('log_level', _descriptor.TYPE_INT32, 1, 0),
      _descriptor.SingleFieldGroup('source_line', _descriptor.TYPE_UINT32, 4, 0, default_value=0),
      _descriptor.SingleFieldGroup('message', _descriptor.TYPE_NULLABLE_STRING, 2, 0),
      _descriptor.SingleFieldGroup('source_file', _descriptor.TYPE_NULLABLE_STRING, 3, 0),
    ],
  }

