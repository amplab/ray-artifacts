# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection


class AssetBundle(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::asset_bundle::AssetBundle',
    'version': 0,
    'methods': [
      {
        'name': 'GetAsStream',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('asset_name', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('asset_data', _descriptor.TYPE_HANDLE, 0, 0),
          ],
        },
      },
    ],
  }

class AssetUnpacker(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::asset_bundle::AssetUnpacker',
    'version': 0,
    'methods': [
      {
        'name': 'UnpackZipStream',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('zipped_assets', _descriptor.TYPE_HANDLE, 0, 0),
            _descriptor.SingleFieldGroup('asset_bundle', _descriptor.InterfaceRequestType(), 1, 0),
          ],
        },
      },
    ],
  }
