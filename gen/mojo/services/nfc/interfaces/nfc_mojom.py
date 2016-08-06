# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class NfcData(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('data', _descriptor.NativeArrayType('B', nullable=True), 0, 0),
    ],
  }


class NfcTransmission(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Cancel',
        'ordinal': 0,
        'parameters': {
        },
      },
    ],
  }

class NfcReceiver(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'nfc::NfcReceiver',
    'version': 0,
    'methods': [
      {
        'name': 'OnReceivedNfcData',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('nfc_data', _descriptor.StructType(lambda: NfcData), 0, 0),
          ],
        },
      },
    ],
  }

class Nfc(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'nfc::Nfc',
    'version': 0,
    'methods': [
      {
        'name': 'TransmitOnNextConnection',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('nfc_data', _descriptor.StructType(lambda: NfcData), 0, 0),
            _descriptor.SingleFieldGroup('transmission', _descriptor.InterfaceRequestType(nullable=True), 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('success', _descriptor.TYPE_BOOL, 0, 0)]),
          ],
        },
      },
      {
        'name': 'Register',
        'ordinal': 1,
        'parameters': {
        },
      },
      {
        'name': 'Unregister',
        'ordinal': 2,
        'parameters': {
        },
      },
    ],
  }
