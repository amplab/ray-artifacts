# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import file_mojom
import types_mojom


class Process(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'native_support::Process',
    'version': 0,
    'methods': [
      {
        'name': 'Spawn',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('path', _descriptor.NativeArrayType('B'), 0, 0),
            _descriptor.SingleFieldGroup('argv', _descriptor.GenericArrayType(_descriptor.NativeArrayType('B'), nullable=True), 1, 0),
            _descriptor.SingleFieldGroup('envp', _descriptor.GenericArrayType(_descriptor.NativeArrayType('B'), nullable=True), 2, 0),
            _descriptor.SingleFieldGroup('stdin_file', _descriptor.InterfaceType(lambda: file_mojom.File, nullable=True), 3, 0),
            _descriptor.SingleFieldGroup('stdout_file', _descriptor.InterfaceType(lambda: file_mojom.File, nullable=True), 4, 0),
            _descriptor.SingleFieldGroup('stderr_file', _descriptor.InterfaceType(lambda: file_mojom.File, nullable=True), 5, 0),
            _descriptor.SingleFieldGroup('process_controller', _descriptor.InterfaceRequestType(), 6, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'SpawnWithTerminal',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('path', _descriptor.NativeArrayType('B'), 0, 0),
            _descriptor.SingleFieldGroup('argv', _descriptor.GenericArrayType(_descriptor.NativeArrayType('B'), nullable=True), 1, 0),
            _descriptor.SingleFieldGroup('envp', _descriptor.GenericArrayType(_descriptor.NativeArrayType('B'), nullable=True), 2, 0),
            _descriptor.SingleFieldGroup('terminal_file', _descriptor.InterfaceType(lambda: file_mojom.File), 3, 0),
            _descriptor.SingleFieldGroup('process_controller', _descriptor.InterfaceRequestType(), 4, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
    ],
  }

class ProcessController(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Wait',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('exit_status', _descriptor.TYPE_INT32, 1, 0),
          ],
        },
      },
      {
        'name': 'Kill',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('signal', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('error', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
    ],
  }
