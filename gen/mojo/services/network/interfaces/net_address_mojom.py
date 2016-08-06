# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

class NetAddressFamily(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('UNSPECIFIED', 0),
    ('IPV4', 1),
    ('IPV6', 2),
  ]

class NetAddressIPv4(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('port', _descriptor.TYPE_UINT16, 0, 0),
      _descriptor.SingleFieldGroup('addr', _descriptor.NativeArrayType('B', length=4), 1, 0),
    ],
  }

class NetAddressIPv6(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('port', _descriptor.TYPE_UINT16, 0, 0),
      _descriptor.SingleFieldGroup('addr', _descriptor.NativeArrayType('B', length=16), 1, 0),
    ],
  }

class NetAddress(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('family', _descriptor.TYPE_INT32, 0, 0, default_value=0),
      _descriptor.SingleFieldGroup('ipv4', _descriptor.StructType(lambda: NetAddressIPv4, nullable=True), 1, 0),
      _descriptor.SingleFieldGroup('ipv6', _descriptor.StructType(lambda: NetAddressIPv6, nullable=True), 2, 0),
    ],
  }

