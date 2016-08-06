# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class SystemUiVisibility(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('STANDARD', 0),
    ('FULLSCREEN', 1),
    ('IMMERSIVE', 2),
  ]

class ScreenOrientation(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('UNSPECIFIED', 0),
    ('LANDSCAPE', 1),
    ('PORTRAIT', 2),
    ('NOSENSOR', 3),
  ]

class HapticFeedbackType(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('LONG_PRESS', 0),
    ('VIRTUAL_KEY', 1),
    ('KEYBOARD_TAP', 2),
    ('CLOCK_TICK', 3),
  ]

class AuralFeedbackType(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('CLICK', 0),
    ('NAVIGATION_LEFT', 1),
    ('NAVIGATION_UP', 2),
    ('NAVIGATION_RIGHT', 3),
    ('NAVIGATION_DOWN', 4),
  ]

class StringExtra(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('name', _descriptor.TYPE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('value', _descriptor.TYPE_STRING, 1, 0),
    ],
  }

class ComponentName(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('package_name', _descriptor.TYPE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('class_name', _descriptor.TYPE_STRING, 1, 0),
    ],
  }

class Intent(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('action', _descriptor.TYPE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('url', _descriptor.TYPE_STRING, 1, 0),
      _descriptor.SingleFieldGroup('flags', _descriptor.TYPE_UINT32, 2, 0),
      _descriptor.SingleFieldGroup('component', _descriptor.StructType(lambda: ComponentName, nullable=True), 3, 0),
      _descriptor.SingleFieldGroup('string_extras', _descriptor.GenericArrayType(_descriptor.StructType(lambda: StringExtra), nullable=True), 4, 0),
      _descriptor.SingleFieldGroup('type', _descriptor.TYPE_NULLABLE_STRING, 5, 0),
    ],
  }

class TaskDescription(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('label', _descriptor.TYPE_NULLABLE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('primary_color', _descriptor.TYPE_UINT32, 1, 0),
    ],
  }


class Activity(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'activity::Activity',
    'version': 0,
    'methods': [
      {
        'name': 'GetUserFeedback',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('user_feedback', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
      },
      {
        'name': 'StartActivity',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('intent', _descriptor.StructType(lambda: Intent), 0, 0),
          ],
        },
      },
      {
        'name': 'FinishCurrentActivity',
        'ordinal': 2,
        'parameters': {
        },
      },
      {
        'name': 'SetTaskDescription',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('description', _descriptor.StructType(lambda: TaskDescription), 0, 0),
          ],
        },
      },
      {
        'name': 'SetSystemUiVisibility',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('visibility', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'SetRequestedOrientation',
        'ordinal': 5,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('orientation', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
    ],
  }

class PathService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'activity::PathService',
    'version': 0,
    'methods': [
      {
        'name': 'GetAppDataDir',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('path', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
      {
        'name': 'GetFilesDir',
        'ordinal': 1,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('path', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
      {
        'name': 'GetCacheDir',
        'ordinal': 2,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('path', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
    ],
  }

class UserFeedback(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'PerformHapticFeedback',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('type', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'PerformAuralFeedback',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('type', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
    ],
  }
