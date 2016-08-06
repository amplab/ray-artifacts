# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection


class TestService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::test::TestService',
    'version': 0,
    'methods': [
      {
        'name': 'Ping',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
        },
      },
      {
        'name': 'ConnectToAppAndGetTime',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('app_url', _descriptor.TYPE_NULLABLE_STRING, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('time_usec', _descriptor.TYPE_INT64, 0, 0),
          ],
        },
      },
      {
        'name': 'StartTrackingRequests',
        'ordinal': 2,
        'parameters': {
        },
        'responses': {
        },
      },
    ],
  }

class TestTimeService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::test::TestTimeService',
    'version': 0,
    'methods': [
      {
        'name': 'GetPartyTime',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('time_usec', _descriptor.TYPE_INT64, 0, 0),
          ],
        },
      },
      {
        'name': 'StartTrackingRequests',
        'ordinal': 1,
        'parameters': {
        },
        'responses': {
        },
      },
    ],
  }
