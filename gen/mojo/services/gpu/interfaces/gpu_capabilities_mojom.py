# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

class GpuShaderPrecision(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('min_range', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('max_range', _descriptor.TYPE_INT32, 1, 0),
      _descriptor.SingleFieldGroup('precision', _descriptor.TYPE_INT32, 2, 0),
    ],
  }

class GpuPerStagePrecisions(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('low_int', _descriptor.StructType(lambda: GpuShaderPrecision), 0, 0),
      _descriptor.SingleFieldGroup('medium_int', _descriptor.StructType(lambda: GpuShaderPrecision), 1, 0),
      _descriptor.SingleFieldGroup('high_int', _descriptor.StructType(lambda: GpuShaderPrecision), 2, 0),
      _descriptor.SingleFieldGroup('low_float', _descriptor.StructType(lambda: GpuShaderPrecision), 3, 0),
      _descriptor.SingleFieldGroup('medium_float', _descriptor.StructType(lambda: GpuShaderPrecision), 4, 0),
      _descriptor.SingleFieldGroup('high_float', _descriptor.StructType(lambda: GpuShaderPrecision), 5, 0),
    ],
  }

class GpuCapabilities(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('vertex_shader_precisions', _descriptor.StructType(lambda: GpuPerStagePrecisions), 0, 0),
      _descriptor.SingleFieldGroup('fragment_shader_precisions', _descriptor.StructType(lambda: GpuPerStagePrecisions), 1, 0),
      _descriptor.SingleFieldGroup('max_combined_texture_image_units', _descriptor.TYPE_INT32, 2, 0),
      _descriptor.SingleFieldGroup('max_cube_map_texture_size', _descriptor.TYPE_INT32, 3, 0),
      _descriptor.SingleFieldGroup('max_fragment_uniform_vectors', _descriptor.TYPE_INT32, 4, 0),
      _descriptor.SingleFieldGroup('max_renderbuffer_size', _descriptor.TYPE_INT32, 5, 0),
      _descriptor.SingleFieldGroup('max_texture_image_units', _descriptor.TYPE_INT32, 6, 0),
      _descriptor.SingleFieldGroup('max_texture_size', _descriptor.TYPE_INT32, 7, 0),
      _descriptor.SingleFieldGroup('max_varying_vectors', _descriptor.TYPE_INT32, 8, 0),
      _descriptor.SingleFieldGroup('max_vertex_attribs', _descriptor.TYPE_INT32, 9, 0),
      _descriptor.SingleFieldGroup('max_vertex_texture_image_units', _descriptor.TYPE_INT32, 10, 0),
      _descriptor.SingleFieldGroup('max_vertex_uniform_vectors', _descriptor.TYPE_INT32, 11, 0),
      _descriptor.SingleFieldGroup('num_compressed_texture_formats', _descriptor.TYPE_INT32, 12, 0),
      _descriptor.SingleFieldGroup('num_shader_binary_formats', _descriptor.TYPE_INT32, 13, 0),
      _descriptor.SingleFieldGroup('bind_generates_resource_chromium', _descriptor.TYPE_INT32, 14, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('post_sub_buffer', _descriptor.TYPE_BOOL, 15, 0), _descriptor.FieldDescriptor('egl_image_external', _descriptor.TYPE_BOOL, 16, 0), _descriptor.FieldDescriptor('texture_format_bgra8888', _descriptor.TYPE_BOOL, 17, 0), _descriptor.FieldDescriptor('texture_format_etc1', _descriptor.TYPE_BOOL, 18, 0), _descriptor.FieldDescriptor('texture_format_etc1_npot', _descriptor.TYPE_BOOL, 19, 0), _descriptor.FieldDescriptor('texture_rectangle', _descriptor.TYPE_BOOL, 20, 0), _descriptor.FieldDescriptor('iosurface', _descriptor.TYPE_BOOL, 21, 0), _descriptor.FieldDescriptor('texture_usage', _descriptor.TYPE_BOOL, 22, 0)]),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('texture_storage', _descriptor.TYPE_BOOL, 23, 0), _descriptor.FieldDescriptor('discard_framebuffer', _descriptor.TYPE_BOOL, 24, 0), _descriptor.FieldDescriptor('sync_query', _descriptor.TYPE_BOOL, 25, 0), _descriptor.FieldDescriptor('image', _descriptor.TYPE_BOOL, 26, 0), _descriptor.FieldDescriptor('future_sync_points', _descriptor.TYPE_BOOL, 27, 0), _descriptor.FieldDescriptor('blend_equation_advanced', _descriptor.TYPE_BOOL, 28, 0), _descriptor.FieldDescriptor('blend_equation_advanced_coherent', _descriptor.TYPE_BOOL, 29, 0)]),
    ],
  }

