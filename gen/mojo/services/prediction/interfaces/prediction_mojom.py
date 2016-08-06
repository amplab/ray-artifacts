# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

class PrevWordInfo(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('word', _descriptor.TYPE_STRING, 0, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('is_beginning_of_sentence', _descriptor.TYPE_BOOL, 1, 0)]),
    ],
  }

class PredictionInfo(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('previous_words', _descriptor.GenericArrayType(_descriptor.StructType(lambda: PrevWordInfo)), 0, 0),
      _descriptor.SingleFieldGroup('current_word', _descriptor.TYPE_STRING, 1, 0),
    ],
  }


class PredictionService(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'prediction::PredictionService',
    'version': 0,
    'methods': [
      {
        'name': 'GetPredictionList',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('prediction_info', _descriptor.StructType(lambda: PredictionInfo), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('prediction_list', _descriptor.GenericArrayType(_descriptor.TYPE_STRING, nullable=True), 0, 0),
          ],
        },
      },
    ],
  }
