# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection


class PingPongService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'js::PingPongService',
    'version': 0,
    'methods': [
      {
        'name': 'SetClient',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('client', _descriptor.InterfaceType(lambda: PingPongClient), 0, 0),
          ],
        },
      },
      {
        'name': 'Ping',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('ping_value', _descriptor.TYPE_UINT16, 0, 0),
          ],
        },
      },
      {
        'name': 'PingTargetUrl',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('url', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('count', _descriptor.TYPE_UINT16, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('ok', _descriptor.TYPE_BOOL, 0, 0)]),
          ],
        },
      },
      {
        'name': 'PingTargetService',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('service', _descriptor.InterfaceType(lambda: PingPongService), 0, 0),
            _descriptor.SingleFieldGroup('count', _descriptor.TYPE_UINT16, 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('ok', _descriptor.TYPE_BOOL, 0, 0)]),
          ],
        },
      },
      {
        'name': 'GetPingPongService',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('service', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
      },
      {
        'name': 'Quit',
        'ordinal': 5,
        'parameters': {
        },
      },
    ],
  }

class PingPongClient(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Pong',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('pong_value', _descriptor.TYPE_UINT16, 0, 0),
          ],
        },
      },
    ],
  }
