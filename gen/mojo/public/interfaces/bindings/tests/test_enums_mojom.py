# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

class TestEnum(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('TEST', 0),
    ('V', 1),
    ('FOO', 2),
    ('BAR', 3),
  ]

class TestEnum2(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('TEST', 0),
    ('V', 1),
    ('FOO', 2),
    ('BAR', 3),
  ]

