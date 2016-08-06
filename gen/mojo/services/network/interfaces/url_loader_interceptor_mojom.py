# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import url_request_mojom
import url_response_mojom

class UrlLoaderInterceptorResponse(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('request', _descriptor.StructType(lambda: url_request_mojom.UrlRequest, nullable=True), 0, 0),
      _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: url_response_mojom.UrlResponse, nullable=True), 1, 0),
    ],
  }


class UrlLoaderInterceptorFactory(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'Create',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('interceptor', _descriptor.InterfaceRequestType(), 0, 0),
          ],
        },
      },
    ],
  }

class UrlLoaderInterceptor(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': None,
    'version': 0,
    'methods': [
      {
        'name': 'InterceptRequest',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('request', _descriptor.StructType(lambda: url_request_mojom.UrlRequest), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: UrlLoaderInterceptorResponse), 0, 0),
          ],
        },
      },
      {
        'name': 'InterceptFollowRedirect',
        'ordinal': 1,
        'parameters': {
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: UrlLoaderInterceptorResponse, nullable=True), 0, 0),
          ],
        },
      },
      {
        'name': 'InterceptResponse',
        'ordinal': 2,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: url_response_mojom.UrlResponse), 0, 0),
          ],
        },
        'responses': {
          'fields': [
            _descriptor.SingleFieldGroup('response', _descriptor.StructType(lambda: UrlLoaderInterceptorResponse, nullable=True), 0, 0),
          ],
        },
      },
    ],
  }
