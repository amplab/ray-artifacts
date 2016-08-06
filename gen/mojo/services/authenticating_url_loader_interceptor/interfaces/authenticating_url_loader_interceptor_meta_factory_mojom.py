# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection
import mojo_bindings.interface_reflection as _interface_reflection

import authentication_mojom
import url_loader_interceptor_mojom


class AuthenticatingUrlLoaderInterceptorMetaFactory(object):
  __metaclass__ = _interface_reflection.MojoInterfaceType
  DESCRIPTOR = {
    'fully_qualified_name': 'mojo::AuthenticatingURLLoaderInterceptorMetaFactory',
    'version': 0,
    'methods': [
      {
        'name': 'CreateUrlLoaderInterceptorFactory',
        'ordinal': 0,
        'parameters': {
          'fields': [
            _descriptor.SingleFieldGroup('factory_request', _descriptor.InterfaceRequestType(), 0, 0),
            _descriptor.SingleFieldGroup('authentication_service', _descriptor.InterfaceType(lambda: authentication_mojom.AuthenticationService), 1, 0),
          ],
        },
      },
    ],
  }
