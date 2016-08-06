# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class ServiceStats(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('num_new_requests', _descriptor.TYPE_UINT64, 0, 0),
      _descriptor.SingleFieldGroup('health', _descriptor.TYPE_DOUBLE, 1, 0),
    ],
  }

class ServiceReport(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('service_name', _descriptor.TYPE_NULLABLE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('total_requests', _descriptor.TYPE_UINT64, 1, 0),
      _descriptor.SingleFieldGroup('mean_health', _descriptor.TYPE_DOUBLE, 2, 0),
    ],
  }


class TestTrackedRequestService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::test::TestTrackedRequestService',
    'version': 0,
    'methods': [
      {
        'name': 'GetReport',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('report', _descriptor.GenericArrayType(_descriptor.StructType(lambda: ServiceReport, nullable=True), nullable=True), 0, 0),
          ],
        },
      },
    ],
  }

class TestRequestTracker(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::test::TestRequestTracker',
    'version': 0,
    'methods': [
      {
        'name': 'SetNameAndReturnId',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('service_name', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('id', _descriptor.TYPE_UINT64, 0, 0),
          ],
        },
      },
      {
        'name': 'RecordStats',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('client_id', _descriptor.TYPE_UINT64, 0, 0),
            _descriptor.SingleFieldGroup('stats', _descriptor.StructType(lambda: ServiceStats, nullable=True), 1, 0),
          ],
        },
      },
    ],
  }
