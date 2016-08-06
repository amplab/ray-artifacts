# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

OPEN_FLAG_READ = 1
OPEN_FLAG_WRITE = 2
OPEN_FLAG_CREATE = 4
OPEN_FLAG_EXCLUSIVE = 8
OPEN_FLAG_APPEND = 16
OPEN_FLAG_TRUNCATE = 32
DELETE_FLAG_FILE_ONLY = 1
DELETE_FLAG_DIRECTORY_ONLY = 2
DELETE_FLAG_RECURSIVE = 4

class Error(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('OK', 0),
    ('UNKNOWN', 1),
    ('INVALID_ARGUMENT', 2),
    ('PERMISSION_DENIED', 3),
    ('OUT_OF_RANGE', 4),
    ('UNIMPLEMENTED', 5),
    ('CLOSED', 6),
    ('UNAVAILABLE', 7),
    ('INTERNAL', 8),
  ]

class Whence(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('FROM_CURRENT', 0),
    ('FROM_START', 1),
    ('FROM_END', 2),
  ]

class FileType(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('UNKNOWN', 0),
    ('REGULAR_FILE', 1),
    ('DIRECTORY', 2),
  ]

class Timespec(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('seconds', _descriptor.TYPE_INT64, 0, 0),
      _descriptor.SingleFieldGroup('nanoseconds', _descriptor.TYPE_INT32, 1, 0),
    ],
  }

class TimespecOrNow(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('now', _descriptor.TYPE_BOOL, 0, 0)]),
      _descriptor.SingleFieldGroup('timespec', _descriptor.StructType(lambda: Timespec, nullable=True), 1, 0),
    ],
  }

class FileInformation(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('type', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('size', _descriptor.TYPE_INT64, 1, 0),
      _descriptor.SingleFieldGroup('atime', _descriptor.StructType(lambda: Timespec, nullable=True), 2, 0),
      _descriptor.SingleFieldGroup('mtime', _descriptor.StructType(lambda: Timespec, nullable=True), 3, 0),
    ],
  }

class DirectoryEntry(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('type', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('name', _descriptor.TYPE_STRING, 1, 0),
    ],
  }

