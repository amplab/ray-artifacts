# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class FlogDescription(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('log_id', _descriptor.TYPE_UINT32, 0, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('open', _descriptor.TYPE_BOOL, 2, 0)]),
      _descriptor.SingleFieldGroup('label', _descriptor.TYPE_STRING, 1, 0),
    ],
  }

class FlogEntry(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('time_us', _descriptor.TYPE_INT64, 0, 0),
      _descriptor.SingleFieldGroup('log_id', _descriptor.TYPE_UINT32, 1, 0),
      _descriptor.SingleFieldGroup('channel_id', _descriptor.TYPE_UINT32, 2, 0),
      _descriptor.SingleFieldGroup('details', _descriptor.UnionType(lambda: FlogEntryDetails, nullable=True), 3, 0),
    ],
  }

class FlogChannelCreationEntryDetails(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('type_name', _descriptor.TYPE_STRING, 0, 0),
    ],
  }

class FlogChannelMessageEntryDetails(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('data', _descriptor.NativeArrayType('B'), 0, 0),
    ],
  }

class FlogChannelDeletionEntryDetails(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
  }

class FlogEntryDetails(object):
  __metaclass__ = _reflection.MojoUnionType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('channel_creation', _descriptor.StructType(lambda: FlogChannelCreationEntryDetails), 0, 0),
      _descriptor.SingleFieldGroup('channel_message', _descriptor.StructType(lambda: FlogChannelMessageEntryDetails), 1, 0),
      _descriptor.SingleFieldGroup('channel_deletion', _descriptor.StructType(lambda: FlogChannelDeletionEntryDetails), 2, 0),
    ],
   }


class FlogService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::flog::FlogService',
    'version': 0,
    'methods': [
      {
        'name': 'CreateLogger',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('logger', _descriptor.InterfaceRequestType(), 0, 0),
            _descriptor.SingleFieldGroup('label', _descriptor.TYPE_STRING, 1, 0),
          ],
        },
      },
      {
        'name': 'GetLogDescriptions',
        'ordinal': 1,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('descriptions', _descriptor.GenericArrayType(_descriptor.StructType(lambda: FlogDescription)), 0, 0),
          ],
        },
      },
      {
        'name': 'CreateReader',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('reader', _descriptor.InterfaceRequestType(), 0, 0),
            _descriptor.SingleFieldGroup('log_id', _descriptor.TYPE_UINT32, 1, 0),
          ],
        },
      },
    ],
  }

class FlogLogger(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'LogChannelCreation',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('time_us', _descriptor.TYPE_INT64, 0, 0),
            _descriptor.SingleFieldGroup('channel_id', _descriptor.TYPE_UINT32, 1, 0),
            _descriptor.SingleFieldGroup('type_name', _descriptor.TYPE_STRING, 2, 0),
          ],
        },
      },
      {
        'name': 'LogChannelMessage',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('time_us', _descriptor.TYPE_INT64, 0, 0),
            _descriptor.SingleFieldGroup('channel_id', _descriptor.TYPE_UINT32, 1, 0),
            _descriptor.SingleFieldGroup('data', _descriptor.NativeArrayType('B'), 2, 0),
          ],
        },
      },
      {
        'name': 'LogChannelDeletion',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('time_us', _descriptor.TYPE_INT64, 0, 0),
            _descriptor.SingleFieldGroup('channel_id', _descriptor.TYPE_UINT32, 1, 0),
          ],
        },
      },
    ],
  }

class FlogReader(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'GetEntries',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('start_index', _descriptor.TYPE_UINT32, 0, 0),
            _descriptor.SingleFieldGroup('max_count', _descriptor.TYPE_UINT32, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('entries', _descriptor.GenericArrayType(_descriptor.StructType(lambda: FlogEntry)), 0, 0),
          ],
        },
      },
    ],
  }
