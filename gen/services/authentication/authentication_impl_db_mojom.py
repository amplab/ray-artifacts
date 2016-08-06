# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

class Db(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('version', _descriptor.TYPE_UINT32, 0, 0),
      _descriptor.SingleFieldGroup('last_selected_accounts', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.TYPE_STRING), 1, 0),
    ],
  }

