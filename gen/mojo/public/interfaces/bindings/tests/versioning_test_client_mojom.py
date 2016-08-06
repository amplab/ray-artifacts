# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class Department(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('SALES', 0),
    ('DEV', 1),
  ]

class Employee(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('employee_id', _descriptor.TYPE_UINT64, 0, 0),
      _descriptor.SingleFieldGroup('name', _descriptor.TYPE_STRING, 1, 0),
      _descriptor.SingleFieldGroup('department', _descriptor.TYPE_INT32, 2, 0),
    ],
  }


class HumanResourceDatabase(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::test::versioning::HumanResourceDatabase',
    'version': 2,
    'methods': [
      {
        'name': 'AddEmployee',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('employee', _descriptor.StructType(lambda: Employee), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('success', _descriptor.TYPE_BOOL, 0, 0)]),
          ],
        },
      },
      {
        'name': 'QueryEmployee',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('id', _descriptor.TYPE_UINT64, 0, 0),
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('retrieve_finger_print', _descriptor.TYPE_BOOL, 1, 1)]),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('employee', _descriptor.StructType(lambda: Employee, nullable=True), 0, 0),
            _descriptor.SingleFieldGroup('finger_print', _descriptor.NativeArrayType('B', nullable=True), 1, 1),
          ],
        },
      },
      {
        'name': 'AttachFingerPrint',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('id', _descriptor.TYPE_UINT64, 0, 0),
            _descriptor.SingleFieldGroup('finger_print', _descriptor.NativeArrayType('B'), 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.BooleanGroup([_descriptor.FieldDescriptor('success', _descriptor.TYPE_BOOL, 0, 0)]),
          ],
        },
      },
      {
        'name': 'ListEmployeeIds',
        'ordinal': 3,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('ids', _descriptor.GenericArrayType(_descriptor.TYPE_UINT64, nullable=True), 0, 0),
          ],
        },
      },
    ],
  }
