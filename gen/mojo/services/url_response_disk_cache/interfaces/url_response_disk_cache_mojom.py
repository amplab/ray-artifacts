# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import url_response_mojom


class UrlResponseDiskCache(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::URLResponseDiskCache',
    'version': 0,
    'methods': [
      {
        'name': 'Get',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('url', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: url_response_mojom.UrlResponse, nullable=True), 0, 0),
            _descriptor.SingleFieldGroup('file_path', _descriptor.NativeArrayType('B', nullable=True), 1, 0),
            _descriptor.SingleFieldGroup('cache_dir_path', _descriptor.NativeArrayType('B', nullable=True), 2, 0),
          ],
        },
      },
      {
        'name': 'Validate',
        'ordinal': 1,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('url', _descriptor.TYPE_STRING, 0, 0),
          ],
        },
      },
      {
        'name': 'Update',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: url_response_mojom.UrlResponse), 0, 0),
          ],
        },
      },
      {
        'name': 'UpdateAndGet',
        'ordinal': 3,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: url_response_mojom.UrlResponse), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('file_path', _descriptor.NativeArrayType('B', nullable=True), 0, 0),
            _descriptor.SingleFieldGroup('cache_dir_path', _descriptor.NativeArrayType('B', nullable=True), 1, 0),
          ],
        },
      },
      {
        'name': 'UpdateAndGetExtracted',
        'ordinal': 4,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: url_response_mojom.UrlResponse), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('extracted_dir_path', _descriptor.NativeArrayType('B', nullable=True), 0, 0),
            _descriptor.SingleFieldGroup('cache_dir_path', _descriptor.NativeArrayType('B', nullable=True), 1, 0),
          ],
        },
      },
    ],
  }
