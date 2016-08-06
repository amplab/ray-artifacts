# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class SensorType(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('ACCELEROMETER', 0),
    ('AMBIENT_TEMPERATURE', 1),
    ('GAME_ROTATION_VECTOR', 2),
    ('GEOMAGNETIC_ROTATION_VECTOR', 3),
    ('GRAVITY', 4),
    ('GYROSCOPE', 5),
    ('GYROSCOPE_UNCALIBRATED', 6),
    ('HEART_RATE', 7),
    ('LIGHT', 8),
    ('LINEAR_ACCELERATION', 9),
    ('MAGNETIC_FIELD', 10),
    ('MAGNETIC_FIELD_UNCALIBRATED', 11),
    ('PRESSURE', 12),
    ('PROXIMITY', 13),
    ('RELATIVE_HUMIDITY', 14),
    ('ROTATION_VECTOR', 15),
    ('SIGNIFICANT_MOTION', 16),
    ('STEP_COUNTER', 17),
    ('STEP_DETECTOR', 18),
  ]

class SensorData(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('accuracy', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('time_stamp', _descriptor.TYPE_INT64, 1, 0),
      _descriptor.SingleFieldGroup('values', _descriptor.NativeArrayType('f'), 2, 0),
    ],
  }


class SensorListener(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'OnAccuracyChanged',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('accuracy', _descriptor.TYPE_INT32, 0, 0),
          ],
        },
      },
      {
        'name': 'OnSensorChanged',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('data', _descriptor.StructType(lambda: SensorData), 0, 0),
          ],
        },
      },
    ],
  }

class SensorService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'sensors::SensorService',
    'version': 0,
    'methods': [
      {
        'name': 'AddListener',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('type', _descriptor.TYPE_INT32, 0, 0),
            _descriptor.SingleFieldGroup('listener', _descriptor.InterfaceType(lambda: SensorListener), 1, 0),
          ],
        },
      },
    ],
  }
