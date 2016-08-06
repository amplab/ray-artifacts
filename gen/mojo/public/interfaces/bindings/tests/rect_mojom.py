# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

class Rect(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('x', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('y', _descriptor.TYPE_INT32, 1, 0),
      _descriptor.SingleFieldGroup('width', _descriptor.TYPE_INT32, 2, 0),
      _descriptor.SingleFieldGroup('height', _descriptor.TYPE_INT32, 3, 0),
    ],
  }

