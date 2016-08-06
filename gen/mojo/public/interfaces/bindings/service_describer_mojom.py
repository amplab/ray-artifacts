# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import mojom_types_mojom


class ServiceDescriber(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::bindings::types::ServiceDescriber',
    'version': 0,
    'methods': [
      {
        'name': 'DescribeService',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('interface_name', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('description_request', _descriptor.InterfaceRequestType(), 1, 0),
          ],
        },
      },
    ],
  }

class ServiceDescription(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'GetTopLevelInterface',
        'ordinal': 0,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('mojom_interface', _descriptor.StructType(lambda: mojom_types_mojom.MojomInterface), 0, 0),
          ],
        },
      },
      {
        'name': 'GetTypeDefinition',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('type_key', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('type', _descriptor.UnionType(lambda: mojom_types_mojom.UserDefinedType, nullable=True), 0, 0),
          ],
        },
      },
      {
        'name': 'GetAllTypeDefinitions',
        'ordinal': 2,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('definitions', _descriptor.MapType(_descriptor.TYPE_STRING, _descriptor.UnionType(lambda: mojom_types_mojom.UserDefinedType), nullable=True), 0, 0),
          ],
        },
      },
    ],
  }
