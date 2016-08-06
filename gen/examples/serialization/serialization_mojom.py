# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

class MyStruct(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('a', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('b', _descriptor.TYPE_FLOAT, 1, 0),
      _descriptor.SingleFieldGroup('c', _descriptor.TYPE_STRING, 2, 0),
    ],
  }

