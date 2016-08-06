# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

RUN_MESSAGE_ID = 4294967295
RUN_OR_CLOSE_PIPE_MESSAGE_ID = 4294967294

class RunMessageParams(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('reserved0', _descriptor.TYPE_UINT32, 0, 0),
      _descriptor.SingleFieldGroup('reserved1', _descriptor.TYPE_UINT32, 1, 0),
      _descriptor.SingleFieldGroup('query_version', _descriptor.StructType(lambda: QueryVersion), 2, 0),
    ],
  }

class RunResponseMessageParams(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('reserved0', _descriptor.TYPE_UINT32, 0, 0),
      _descriptor.SingleFieldGroup('reserved1', _descriptor.TYPE_UINT32, 1, 0),
      _descriptor.SingleFieldGroup('query_version_result', _descriptor.StructType(lambda: QueryVersionResult), 2, 0),
    ],
  }

class QueryVersion(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
  }

class QueryVersionResult(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('version', _descriptor.TYPE_UINT32, 0, 0),
    ],
  }

class RunOrClosePipeMessageParams(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('reserved0', _descriptor.TYPE_UINT32, 0, 0),
      _descriptor.SingleFieldGroup('reserved1', _descriptor.TYPE_UINT32, 1, 0),
      _descriptor.SingleFieldGroup('require_version', _descriptor.StructType(lambda: RequireVersion), 2, 0),
    ],
  }

class RequireVersion(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('version', _descriptor.TYPE_UINT32, 0, 0),
    ],
  }

