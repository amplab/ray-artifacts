# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import gpu_capabilities_mojom

class CommandBufferState(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('num_entries', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('get_offset', _descriptor.TYPE_INT32, 1, 0),
      _descriptor.SingleFieldGroup('put_offset', _descriptor.TYPE_INT32, 2, 0),
      _descriptor.SingleFieldGroup('token', _descriptor.TYPE_INT32, 3, 0),
      _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 4, 0),
      _descriptor.SingleFieldGroup('context_lost_reason', _descriptor.TYPE_INT32, 5, 0),
      _descriptor.SingleFieldGroup('generation', _descriptor.TYPE_UINT32, 6, 0),
    ],
  }


class CommandBufferSyncClient(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'DidInitialize',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('success', _descriptor.TYPE_BOOL, 0, 0)]),
            _descriptor.SingleFieldGroup('capabilities', _descriptor.StructType(lambda: gpu_capabilities_mojom.GpuCapabilities), 1, 0),
          ],
        },
      },
      {
        'name': 'DidMakeProgress',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('state', _descriptor.StructType(lambda: CommandBufferState), 0, 0),
          ],
        },
      },
    ],
  }

class CommandBufferSyncPointClient(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'DidInsertSyncPoint',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('sync_point', _descriptor.TYPE_UINT32, 0, 0),
          ],
        },
      },
    ],
  }

class CommandBufferLostContextObserver(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'DidLoseContext',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('context_lost_reason', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
    ],
  }

class CommandBuffer(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Initialize',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('sync_client', _descriptor.InterfaceType(lambda: CommandBufferSyncClient), 0, 0),
            _descriptor.SingleFieldGroup('sync_point_client', _descriptor.InterfaceType(lambda: CommandBufferSyncPointClient), 1, 0),
            _descriptor.SingleFieldGroup('lost_observer', _descriptor.InterfaceType(lambda: CommandBufferLostContextObserver), 2, 0),
            _descriptor.SingleFieldGroup('shared_state', _descriptor.TYPE_HANDLE, 3, 0),
          ],
        },
      },
      {
        'name': 'SetGetBuffer',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('buffer', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'Flush',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('put_offset', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'MakeProgress',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('last_get_offset', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'RegisterTransferBuffer',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('id', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('transfer_buffer', _descriptor.TYPE_HANDLE, 1, 0),
            _descriptor.SingleFieldGroup('size', _descriptor.TYPE_UINT32, 2, 0),
          ],
        },
      },
      {
        'name': 'DestroyTransferBuffer',
        'ordinal': 5,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('id', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'InsertSyncPoint',
        'ordinal': 6,
        'parameters': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('retire', _descriptor.TYPE_BOOL, 0, 0)]),
          ],
        },
      },
      {
        'name': 'RetireSyncPoint',
        'ordinal': 7,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('sync_point', _descriptor.TYPE_UINT32, 0, 0),
          ],
        },
      },
      {
        'name': 'Echo',
        'ordinal': 8,
        'parameters': {
        },
        'responses': {
        },
      },
    ],
  }
