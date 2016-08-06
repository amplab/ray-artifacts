# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class NotificationData(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('title', _descriptor.TYPE_NULLABLE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('text', _descriptor.TYPE_NULLABLE_STRING, 1, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('play_sound', _descriptor.TYPE_BOOL, 2, 0), _descriptor.FieldDescriptor('vibrate', _descriptor.TYPE_BOOL, 3, 0), _descriptor.FieldDescriptor('set_lights', _descriptor.TYPE_BOOL, 4, 0)]),
    ],
  }


class NotificationClient(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'OnSelected',
        'ordinal': 0,
        'parameters': {
        },
      },
      {
        'name': 'OnDismissed',
        'ordinal': 1,
        'parameters': {
        },
      },
    ],
  }

class Notification(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Update',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('notification_data', _descriptor.StructType(lambda: NotificationData), 0, 0),
          ],
        },
      },
      {
        'name': 'Cancel',
        'ordinal': 1,
        'parameters': {
        },
      },
    ],
  }

class NotificationService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'notifications::NotificationService',
    'version': 0,
    'methods': [
      {
        'name': 'Post',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('notification_data', _descriptor.StructType(lambda: NotificationData), 0, 0),
            _descriptor.SingleFieldGroup('client', _descriptor.InterfaceType(lambda: NotificationClient, nullable=True), 1, 0),
            _descriptor.SingleFieldGroup('notification', _descriptor.InterfaceRequestType(nullable=True), 2, 0),
          ],
        },
      },
    ],
  }
