# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection


class AuthenticationAdminService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'authentication::AuthenticationAdminService',
    'version': 0,
    'methods': [
      {
        'name': 'GetOAuth2DeviceCode',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('scopes', _descriptor.GenericArrayType(_descriptor.TYPE_STRING), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('verification_url', _descriptor.TYPE_NULLABLE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('device_code', _descriptor.TYPE_NULLABLE_STRING, 1, 0),
            _descriptor.SingleFieldGroup('user_code', _descriptor.TYPE_NULLABLE_STRING, 2, 0),
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_NULLABLE_STRING, 3, 0),
          ],
        },
      },
      {
        'name': 'AddAccount',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('device_code', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('username', _descriptor.TYPE_NULLABLE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_NULLABLE_STRING, 1, 0),
          ],
        },
      },
      {
        'name': 'GetAllUsers',
        'ordinal': 2,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('usernames', _descriptor.GenericArrayType(_descriptor.TYPE_STRING), 0, 0),
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_NULLABLE_STRING, 1, 0),
          ],
        },
      },
    ],
  }
