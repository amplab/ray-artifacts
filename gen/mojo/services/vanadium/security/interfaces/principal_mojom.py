# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class AppInstanceName(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('url', _descriptor.TYPE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('qualifier', _descriptor.TYPE_NULLABLE_STRING, 1, 0),
    ],
  }

class User(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('email', _descriptor.TYPE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('blessing', _descriptor.NativeArrayType('B'), 1, 0),
    ],
  }


class PrincipalService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'vanadium::PrincipalService',
    'version': 0,
    'methods': [
      {
        'name': 'Login',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('user', _descriptor.StructType(lambda: User, nullable=True), 0, 0),
          ],
        },
      },
      {
        'name': 'Logout',
        'ordinal': 1,
        'parameters': {
        },
      },
      {
        'name': 'GetUser',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('app', _descriptor.StructType(lambda: AppInstanceName, nullable=True), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('user', _descriptor.StructType(lambda: User, nullable=True), 0, 0),
          ],
        },
      },
      {
        'name': 'SetUser',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('user', _descriptor.StructType(lambda: User), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_NULLABLE_STRING, 0, 0),
          ],
        },
      },
      {
        'name': 'GetLoggedInUsers',
        'ordinal': 4,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('ids', _descriptor.GenericArrayType(_descriptor.StructType(lambda: User)), 0, 0),
          ],
        },
      },
    ],
  }
