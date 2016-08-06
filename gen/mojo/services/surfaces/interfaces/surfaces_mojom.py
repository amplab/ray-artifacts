# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import geometry_mojom
import quads_mojom
import surface_id_mojom

class ResourceFormat(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('RGBA_8888', 0),
    ('RGBA_4444', 1),
    ('BGRA_8888', 2),
    ('ALPHA_8', 3),
    ('LUMINANCE_8', 4),
    ('RGB_565', 5),
    ('ETC1', 6),
  ]

class Mailbox(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('name', _descriptor.NativeArrayType('b', length=64), 0, 0),
    ],
  }

class MailboxHolder(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('mailbox', _descriptor.StructType(lambda: Mailbox), 0, 0),
      _descriptor.SingleFieldGroup('texture_target', _descriptor.TYPE_UINT32, 1, 0),
      _descriptor.SingleFieldGroup('sync_point', _descriptor.TYPE_UINT32, 2, 0),
    ],
  }

class TransferableResource(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('id', _descriptor.TYPE_UINT32, 0, 0),
      _descriptor.SingleFieldGroup('format', _descriptor.TYPE_INT32, 1, 0),
      _descriptor.SingleFieldGroup('filter', _descriptor.TYPE_UINT32, 2, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('is_repeated', _descriptor.TYPE_BOOL, 5, 0), _descriptor.FieldDescriptor('is_software', _descriptor.TYPE_BOOL, 6, 0)]),
      _descriptor.SingleFieldGroup('size', _descriptor.StructType(lambda: geometry_mojom.Size), 3, 0),
      _descriptor.SingleFieldGroup('mailbox_holder', _descriptor.StructType(lambda: MailboxHolder), 4, 0),
    ],
  }

class ReturnedResource(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('id', _descriptor.TYPE_UINT32, 0, 0),
      _descriptor.SingleFieldGroup('sync_point', _descriptor.TYPE_UINT32, 1, 0),
      _descriptor.SingleFieldGroup('count', _descriptor.TYPE_INT32, 2, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('lost', _descriptor.TYPE_BOOL, 3, 0)]),
    ],
  }

class Frame(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('resources', _descriptor.GenericArrayType(_descriptor.StructType(lambda: TransferableResource)), 0, 0),
      _descriptor.SingleFieldGroup('passes', _descriptor.GenericArrayType(_descriptor.StructType(lambda: quads_mojom.Pass)), 1, 0),
    ],
  }


class ResourceReturner(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'ReturnResources',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('resources', _descriptor.GenericArrayType(_descriptor.StructType(lambda: ReturnedResource)), 0, 0),
          ],
        },
      },
    ],
  }

class Surface(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::Surface',
    'version': 0,
    'methods': [
      {
        'name': 'GetIdNamespace',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('id_namespace', _descriptor.TYPE_UINT32, 0, 0),
          ],
        },
      },
      {
        'name': 'SetResourceReturner',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('returner', _descriptor.InterfaceType(lambda: ResourceReturner), 0, 0),
          ],
        },
      },
      {
        'name': 'CreateSurface',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('id_local', _descriptor.TYPE_UINT32, 0, 0),
          ],
        },
      },
      {
        'name': 'SubmitFrame',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('id_local', _descriptor.TYPE_UINT32, 0, 0),
            _descriptor.SingleFieldGroup('frame', _descriptor.StructType(lambda: Frame), 1, 0),
          ],
        },
        'responses': {
        },
      },
      {
        'name': 'DestroySurface',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('id_local', _descriptor.TYPE_UINT32, 0, 0),
          ],
        },
      },
    ],
  }
