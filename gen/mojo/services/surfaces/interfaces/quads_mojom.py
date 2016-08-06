# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import mojo_bindings.descriptor as _descriptor
import mojo_bindings.reflection as _reflection

import geometry_mojom
import surface_id_mojom

class YuvColorSpace(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('REC_601', 0),
    ('REC_709', 1),
    ('JPEG', 2),
  ]

class Material(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('CHECKERBOARD', 1),
    ('DEBUG_BORDER', 2),
    ('IO_SURFACE_CONTENT', 3),
    ('PICTURE_CONTENT', 4),
    ('RENDER_PASS', 5),
    ('SOLID_COLOR', 6),
    ('STREAM_VIDEO_CONTENT', 7),
    ('SURFACE_CONTENT', 8),
    ('TEXTURE_CONTENT', 9),
    ('TILED_CONTENT', 10),
    ('YUV_VIDEO_CONTENT', 11),
  ]

class SkXfermode(object):
  __metaclass__ = _reflection.MojoEnumType
  VALUES = [
    ('kClear_Mode', 0),
    ('kSrc_Mode', 1),
    ('kDst_Mode', 2),
    ('kSrcOver_Mode', 3),
    ('kDstOver_Mode', 4),
    ('kSrcIn_Mode', 5),
    ('kDstIn_Mode', 6),
    ('kSrcOut_Mode', 7),
    ('kDstOut_Mode', 8),
    ('kSrcATop_Mode', 9),
    ('kDstATop_Mode', 10),
    ('kXor_Mode', 11),
    ('kPlus_Mode', 12),
    ('kModulate_Mode', 13),
    ('kScreen_Mode', 14),
    ('kLastCoeffMode', 14),
    ('kOverlay_Mode', 15),
    ('kDarken_Mode', 16),
    ('kLighten_Mode', 17),
    ('kColorDodge_Mode', 18),
    ('kColorBurn_Mode', 19),
    ('kHardLight_Mode', 20),
    ('kSoftLight_Mode', 21),
    ('kDifference_Mode', 22),
    ('kExclusion_Mode', 23),
    ('kMultiply_Mode', 24),
    ('kLastSeparableMode', 24),
    ('kHue_Mode', 25),
    ('kSaturation_Mode', 26),
    ('kColor_Mode', 27),
    ('kLuminosity_Mode', 28),
    ('kLastMode', 28),
  ]

class Color(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('rgba', _descriptor.TYPE_UINT32, 0, 0),
    ],
  }

class CheckerboardQuadState(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
  }

class DebugBorderQuadState(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
  }

class IoSurfaceContentQuadState(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
  }

class RenderPassId(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('layer_id', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.SingleFieldGroup('index', _descriptor.TYPE_INT32, 1, 0),
    ],
  }

class RenderPassQuadState(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('render_pass_id', _descriptor.StructType(lambda: RenderPassId), 0, 0),
      _descriptor.SingleFieldGroup('mask_resource_id', _descriptor.TYPE_UINT32, 1, 0),
      _descriptor.SingleFieldGroup('mask_uv_scale', _descriptor.StructType(lambda: geometry_mojom.PointF), 2, 0),
      _descriptor.SingleFieldGroup('mask_texture_size', _descriptor.StructType(lambda: geometry_mojom.Size), 3, 0),
      _descriptor.SingleFieldGroup('filters_scale', _descriptor.StructType(lambda: geometry_mojom.PointF), 4, 0),
    ],
  }

class SolidColorQuadState(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('color', _descriptor.StructType(lambda: Color), 0, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('force_anti_aliasing_off', _descriptor.TYPE_BOOL, 1, 0)]),
    ],
  }

class SurfaceQuadState(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('surface', _descriptor.StructType(lambda: surface_id_mojom.SurfaceId), 0, 0),
    ],
  }

class TextureQuadState(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('resource_id', _descriptor.TYPE_UINT32, 0, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('premultiplied_alpha', _descriptor.TYPE_BOOL, 1, 0), _descriptor.FieldDescriptor('flipped', _descriptor.TYPE_BOOL, 6, 0), _descriptor.FieldDescriptor('nearest_neighbor', _descriptor.TYPE_BOOL, 7, 0)]),
      _descriptor.SingleFieldGroup('uv_top_left', _descriptor.StructType(lambda: geometry_mojom.PointF), 2, 0),
      _descriptor.SingleFieldGroup('uv_bottom_right', _descriptor.StructType(lambda: geometry_mojom.PointF), 3, 0),
      _descriptor.SingleFieldGroup('background_color', _descriptor.StructType(lambda: Color), 4, 0),
      _descriptor.SingleFieldGroup('vertex_opacity', _descriptor.NativeArrayType('f', length=4), 5, 0),
    ],
  }

class TileQuadState(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('tex_coord_rect', _descriptor.StructType(lambda: geometry_mojom.RectF), 0, 0),
      _descriptor.SingleFieldGroup('texture_size', _descriptor.StructType(lambda: geometry_mojom.Size), 1, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('swizzle_contents', _descriptor.TYPE_BOOL, 2, 0), _descriptor.FieldDescriptor('nearest_neighbor', _descriptor.TYPE_BOOL, 4, 0)]),
      _descriptor.SingleFieldGroup('resource_id', _descriptor.TYPE_UINT32, 3, 0),
    ],
  }

class StreamVideoQuadState(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
  }

class YuvVideoQuadState(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('tex_coord_rect', _descriptor.StructType(lambda: geometry_mojom.RectF), 0, 0),
      _descriptor.SingleFieldGroup('y_plane_resource_id', _descriptor.TYPE_UINT32, 1, 0),
      _descriptor.SingleFieldGroup('u_plane_resource_id', _descriptor.TYPE_UINT32, 2, 0),
      _descriptor.SingleFieldGroup('v_plane_resource_id', _descriptor.TYPE_UINT32, 3, 0),
      _descriptor.SingleFieldGroup('a_plane_resource_id', _descriptor.TYPE_UINT32, 4, 0),
      _descriptor.SingleFieldGroup('color_space', _descriptor.TYPE_INT32, 5, 0),
    ],
  }

class Quad(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('material', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('needs_blending', _descriptor.TYPE_BOOL, 4, 0)]),
      _descriptor.SingleFieldGroup('rect', _descriptor.StructType(lambda: geometry_mojom.Rect), 1, 0),
      _descriptor.SingleFieldGroup('opaque_rect', _descriptor.StructType(lambda: geometry_mojom.Rect), 2, 0),
      _descriptor.SingleFieldGroup('visible_rect', _descriptor.StructType(lambda: geometry_mojom.Rect), 3, 0),
      _descriptor.SingleFieldGroup('shared_quad_state_index', _descriptor.TYPE_UINT32, 5, 0),
      _descriptor.SingleFieldGroup('checkerboard_quad_state', _descriptor.StructType(lambda: CheckerboardQuadState, nullable=True), 6, 0),
      _descriptor.SingleFieldGroup('debug_border_quad_state', _descriptor.StructType(lambda: DebugBorderQuadState, nullable=True), 7, 0),
      _descriptor.SingleFieldGroup('io_surface_quad_state', _descriptor.StructType(lambda: IoSurfaceContentQuadState, nullable=True), 8, 0),
      _descriptor.SingleFieldGroup('render_pass_quad_state', _descriptor.StructType(lambda: RenderPassQuadState, nullable=True), 9, 0),
      _descriptor.SingleFieldGroup('solid_color_quad_state', _descriptor.StructType(lambda: SolidColorQuadState, nullable=True), 10, 0),
      _descriptor.SingleFieldGroup('surface_quad_state', _descriptor.StructType(lambda: SurfaceQuadState, nullable=True), 11, 0),
      _descriptor.SingleFieldGroup('texture_quad_state', _descriptor.StructType(lambda: TextureQuadState, nullable=True), 12, 0),
      _descriptor.SingleFieldGroup('tile_quad_state', _descriptor.StructType(lambda: TileQuadState, nullable=True), 13, 0),
      _descriptor.SingleFieldGroup('stream_video_quad_state', _descriptor.StructType(lambda: StreamVideoQuadState, nullable=True), 14, 0),
      _descriptor.SingleFieldGroup('yuv_video_quad_state', _descriptor.StructType(lambda: YuvVideoQuadState, nullable=True), 15, 0),
    ],
  }

class SharedQuadState(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('content_to_target_transform', _descriptor.StructType(lambda: geometry_mojom.Transform), 0, 0),
      _descriptor.SingleFieldGroup('content_bounds', _descriptor.StructType(lambda: geometry_mojom.Size), 1, 0),
      _descriptor.SingleFieldGroup('visible_content_rect', _descriptor.StructType(lambda: geometry_mojom.Rect), 2, 0),
      _descriptor.SingleFieldGroup('clip_rect', _descriptor.StructType(lambda: geometry_mojom.Rect), 3, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('is_clipped', _descriptor.TYPE_BOOL, 4, 0)]),
      _descriptor.SingleFieldGroup('opacity', _descriptor.TYPE_FLOAT, 5, 0),
      _descriptor.SingleFieldGroup('blend_mode', _descriptor.TYPE_INT32, 6, 0),
      _descriptor.SingleFieldGroup('sorting_context_id', _descriptor.TYPE_INT32, 7, 0),
    ],
  }

class Pass(object):
  __metaclass__ = _reflection.MojoStructType
  DESCRIPTOR = {
    'fields': [
      _descriptor.SingleFieldGroup('id', _descriptor.TYPE_INT32, 0, 0),
      _descriptor.BooleanGroup([_descriptor.FieldDescriptor('has_transparent_background', _descriptor.TYPE_BOOL, 4, 0)]),
      _descriptor.SingleFieldGroup('output_rect', _descriptor.StructType(lambda: geometry_mojom.Rect), 1, 0),
      _descriptor.SingleFieldGroup('damage_rect', _descriptor.StructType(lambda: geometry_mojom.Rect), 2, 0),
      _descriptor.SingleFieldGroup('transform_to_root_target', _descriptor.StructType(lambda: geometry_mojom.Transform), 3, 0),
      _descriptor.SingleFieldGroup('quads', _descriptor.GenericArrayType(_descriptor.StructType(lambda: Quad)), 5, 0),
      _descriptor.SingleFieldGroup('shared_quad_states', _descriptor.GenericArrayType(_descriptor.StructType(lambda: SharedQuadState)), 6, 0),
    ],
  }

