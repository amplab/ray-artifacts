# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

class CredentialType(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('DOWNSCOPED_OAUTH_REFRESH_TOKEN', 1),
  ]

class AuthProvider(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('GOOGLE', 1),
  ]

class Credentials(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('auth_provider', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('credential_type', _descriptor.TYPE_INT32, 2, 0),
      _descriptor.SingleFieldGroup('token', _descriptor.TYPE_STRING, 1, 0),
      _descriptor.SingleFieldGroup('scopes', _descriptor.TYPE_STRING, 3, 0),
    ],
  }

class CredentialStore(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('version', _descriptor.TYPE_UINT32, 0, 0),
      _descriptor.SingleFieldGroup('credentials', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.StructType(lambda: Credentials)), 1, 0),
    ],
  }

