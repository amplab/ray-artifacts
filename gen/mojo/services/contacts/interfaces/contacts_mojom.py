# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class Contact(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('id', _descriptor.TYPE_INT64, 0, 0),
      _descriptor.SingleFieldGroup('name', _descriptor.TYPE_STRING, 1, 0),
    ],
  }


class ContactsService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'contacts::ContactsService',
    'version': 0,
    'methods': [
      {
        'name': 'GetCount',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('filter', _descriptor.TYPE_NULLABLE_STRING, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('count', _descriptor.TYPE_UINT64, 0, 0),
          ],
        },
      },
      {
        'name': 'Get',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('filter', _descriptor.TYPE_NULLABLE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('offset', _descriptor.TYPE_UINT32, 1, 0),
            _descriptor.SingleFieldGroup('limit', _descriptor.TYPE_UINT32, 2, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('contacts', _descriptor.GenericArrayType(_descriptor.StructType(lambda: Contact)), 0, 0),
          ],
        },
      },
      {
        'name': 'GetEmails',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('id', _descriptor.TYPE_INT64, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('emails', _descriptor.GenericArrayType(_descriptor.TYPE_STRING), 0, 0),
          ],
        },
      },
      {
        'name': 'GetPhoto',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('id', _descriptor.TYPE_INT64, 0, 0),
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('high_resolution', _descriptor.TYPE_BOOL, 1, 0)]),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('photo_url', _descriptor.TYPE_NULLABLE_STRING, 0, 0),
          ],
        },
      },
    ],
  }
