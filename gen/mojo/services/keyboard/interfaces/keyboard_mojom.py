# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import native_viewport_event_dispatcher_mojom

class SubmitAction(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('DONE', 0),
  ]

class KeyboardType(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('TEXT', 0),
    ('NUMBER', 1),
    ('PHONE', 2),
    ('DATETIME', 3),
  ]

class CompletionData(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('id', _descriptor.TYPE_INT64, 0, 0),
      _descriptor.SingleFieldGroup('position', _descriptor.TYPE_INT32, 1, 0),
      _descriptor.SingleFieldGroup('text', _descriptor.TYPE_STRING, 2, 0),
      _descriptor.SingleFieldGroup('label', _descriptor.TYPE_STRING, 3, 0),
    ],
  }

class CorrectionData(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('offset', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('old_text', _descriptor.TYPE_STRING, 1, 0),
      _descriptor.SingleFieldGroup('new_text', _descriptor.TYPE_STRING, 2, 0),
    ],
  }


class KeyboardClient(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'CommitCompletion',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('completion', _descriptor.StructType(lambda: CompletionData), 0, 0),
          ],
        },
      },
      {
        'name': 'CommitCorrection',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('correction', _descriptor.StructType(lambda: CorrectionData), 0, 0),
          ],
        },
      },
      {
        'name': 'CommitText',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('text', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('new_cursor_position', _descriptor.TYPE_INT32, 1, 0),
          ],
        },
      },
      {
        'name': 'DeleteSurroundingText',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('before_length', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('after_length', _descriptor.TYPE_INT32, 1, 0),
          ],
        },
      },
      {
        'name': 'SetComposingRegion',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('start', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('end', _descriptor.TYPE_INT32, 1, 0),
          ],
        },
      },
      {
        'name': 'SetComposingText',
        'ordinal': 5,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('text', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('new_cursor_position', _descriptor.TYPE_INT32, 1, 0),
          ],
        },
      },
      {
        'name': 'SetSelection',
        'ordinal': 6,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('start', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('end', _descriptor.TYPE_INT32, 1, 0),
          ],
        },
      },
      {
        'name': 'Submit',
        'ordinal': 7,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('action', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
    ],
  }

class KeyboardService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'keyboard::KeyboardService',
    'version': 0,
    'methods': [
      {
        'name': 'Show',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('client', _descriptor.InterfaceType(lambda: KeyboardClient), 0, 0),
            _descriptor.SingleFieldGroup('type', _descriptor.TYPE_INT32, 1, 0),
          ],
        },
      },
      {
        'name': 'ShowByRequest',
        'ordinal': 1,
        'parameters': {
        },
      },
      {
        'name': 'Hide',
        'ordinal': 2,
        'parameters': {
        },
      },
      {
        'name': 'SetText',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('text', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
      {
        'name': 'SetSelection',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('start', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('end', _descriptor.TYPE_INT32, 1, 0),
          ],
        },
      },
    ],
  }

class KeyboardServiceFactory(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'keyboard::KeyboardServiceFactory',
    'version': 0,
    'methods': [
      {
        'name': 'CreateKeyboardService',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('key_event_dispatcher', _descriptor.InterfaceRequestType(), 0, 0),
            _descriptor.SingleFieldGroup('service_request', _descriptor.InterfaceRequestType(), 1, 0),
          ],
        },
      },
    ],
  }
