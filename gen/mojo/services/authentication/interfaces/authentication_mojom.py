# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection


class AuthenticationService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'authentication::AuthenticationService',
    'version': 0,
    'methods': [
      {
        'name': 'SelectAccount',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('return_last_selected', _descriptor.TYPE_BOOL, 0, 0)]),
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
        'name': 'GetOAuth2Token',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('username', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('scopes', _descriptor.GenericArrayType(_descriptor.TYPE_STRING), 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('token', _descriptor.TYPE_NULLABLE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_NULLABLE_STRING, 1, 0),
          ],
        },
      },
      {
        'name': 'ClearOAuth2Token',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('token', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
    ],
  }
