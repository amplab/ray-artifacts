# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import location_mojom

class LocationType(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'constants': {
      'ROOFTOP': "ROOFTOP",
      'RANGE_INTERPOLATED': "RANGE_INTERPOLATED",
      'GEOMETRIC_CENTER': "GEOMETRIC_CENTER",
      'APPROXIMATE': "APPROXIMATE",
    },
  }

class Bounds(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('northeast', _descriptor.StructType(lambda: location_mojom.Location), 0, 0),
      _descriptor.SingleFieldGroup('southwest', _descriptor.StructType(lambda: location_mojom.Location), 1, 0),
    ],
  }

class ComponentRestrictions(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('administrative_area', _descriptor.TYPE_NULLABLE_STRING, 0, 0),
      _descriptor.SingleFieldGroup('country', _descriptor.TYPE_NULLABLE_STRING, 1, 0),
      _descriptor.SingleFieldGroup('locality', _descriptor.TYPE_NULLABLE_STRING, 2, 0),
      _descriptor.SingleFieldGroup('postal_code', _descriptor.TYPE_NULLABLE_STRING, 3, 0),
      _descriptor.SingleFieldGroup('route', _descriptor.TYPE_NULLABLE_STRING, 4, 0),
    ],
  }

class Options(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('restrictions', _descriptor.StructType(lambda: ComponentRestrictions, nullable=True), 0, 0),
      _descriptor.SingleFieldGroup('location', _descriptor.StructType(lambda: location_mojom.Location, nullable=True), 1, 0),
      _descriptor.SingleFieldGroup('region', _descriptor.TYPE_NULLABLE_STRING, 2, 0),
    ],
  }

class Geometry(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('location', _descriptor.StructType(lambda: location_mojom.Location), 0, 0),
      _descriptor.SingleFieldGroup('location_type', _descriptor.StructType(lambda: LocationType), 1, 0),
      _descriptor.SingleFieldGroup('viewport', _descriptor.StructType(lambda: Bounds), 2, 0),
      _descriptor.SingleFieldGroup('bounds', _descriptor.StructType(lambda: Bounds, nullable=True), 3, 0),
    ],
  }

class Result(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('partial_match', _descriptor.TYPE_BOOL, 0, 0)]),
      _descriptor.SingleFieldGroup('geometry', _descriptor.StructType(lambda: Geometry), 1, 0),
      _descriptor.SingleFieldGroup('formatted_address', _descriptor.TYPE_STRING, 2, 0),
      _descriptor.SingleFieldGroup('types', _descriptor.GenericArrayType(_descriptor.TYPE_STRING), 3, 0),
    ],
  }

class Status(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'constants': {
      'OK': "OK",
      'ZERO_RESULTS': "ZERO_RESULTS",
      'OVER_QUERY_LIMIT': "OVER_QUERY_LIMIT",
      'REQUEST_DENIED': "REQUEST_DENIED",
      'INVALID_REQUEST': "INVALID_REQUEST",
    },
  }


class Geocoder(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'AddressToLocation',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('address', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('options', _descriptor.StructType(lambda: Options, nullable=True), 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('status', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('results', _descriptor.GenericArrayType(_descriptor.StructType(lambda: Result), nullable=True), 1, 0),
          ],
        },
      },
      {
        'name': 'LocationToAddress',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('location', _descriptor.StructType(lambda: location_mojom.Location), 0, 0),
            _descriptor.SingleFieldGroup('options', _descriptor.StructType(lambda: Options, nullable=True), 1, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('status', _descriptor.TYPE_STRING, 0, 0),
            _descriptor.SingleFieldGroup('results', _descriptor.GenericArrayType(_descriptor.StructType(lambda: Result), nullable=True), 1, 0),
          ],
        },
      },
    ],
  }
