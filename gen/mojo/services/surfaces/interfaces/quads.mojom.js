// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/surfaces/interfaces/quads.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/geometry/interfaces/geometry.mojom",
    "mojo/services/surfaces/interfaces/surface_id.mojom",
], function(bindings, codec, connection, core, validator, geometry$, surface_id$) {
  var YUVColorSpace = {};
  YUVColorSpace.REC_601 = 0;
  YUVColorSpace.REC_709 = YUVColorSpace.REC_601 + 1;
  YUVColorSpace.JPEG = YUVColorSpace.REC_709 + 1;
  var Material = {};
  Material.CHECKERBOARD = 1;
  Material.DEBUG_BORDER = Material.CHECKERBOARD + 1;
  Material.IO_SURFACE_CONTENT = Material.DEBUG_BORDER + 1;
  Material.PICTURE_CONTENT = Material.IO_SURFACE_CONTENT + 1;
  Material.RENDER_PASS = Material.PICTURE_CONTENT + 1;
  Material.SOLID_COLOR = Material.RENDER_PASS + 1;
  Material.STREAM_VIDEO_CONTENT = Material.SOLID_COLOR + 1;
  Material.SURFACE_CONTENT = Material.STREAM_VIDEO_CONTENT + 1;
  Material.TEXTURE_CONTENT = Material.SURFACE_CONTENT + 1;
  Material.TILED_CONTENT = Material.TEXTURE_CONTENT + 1;
  Material.YUV_VIDEO_CONTENT = Material.TILED_CONTENT + 1;
  var SkXfermode = {};
  SkXfermode.kClear_Mode = 0;
  SkXfermode.kSrc_Mode = SkXfermode.kClear_Mode + 1;
  SkXfermode.kDst_Mode = SkXfermode.kSrc_Mode + 1;
  SkXfermode.kSrcOver_Mode = SkXfermode.kDst_Mode + 1;
  SkXfermode.kDstOver_Mode = SkXfermode.kSrcOver_Mode + 1;
  SkXfermode.kSrcIn_Mode = SkXfermode.kDstOver_Mode + 1;
  SkXfermode.kDstIn_Mode = SkXfermode.kSrcIn_Mode + 1;
  SkXfermode.kSrcOut_Mode = SkXfermode.kDstIn_Mode + 1;
  SkXfermode.kDstOut_Mode = SkXfermode.kSrcOut_Mode + 1;
  SkXfermode.kSrcATop_Mode = SkXfermode.kDstOut_Mode + 1;
  SkXfermode.kDstATop_Mode = SkXfermode.kSrcATop_Mode + 1;
  SkXfermode.kXor_Mode = SkXfermode.kDstATop_Mode + 1;
  SkXfermode.kPlus_Mode = SkXfermode.kXor_Mode + 1;
  SkXfermode.kModulate_Mode = SkXfermode.kPlus_Mode + 1;
  SkXfermode.kScreen_Mode = SkXfermode.kModulate_Mode + 1;
  SkXfermode.kLastCoeffMode = SkXfermode.kScreen_Mode;
  SkXfermode.kOverlay_Mode = SkXfermode.kLastCoeffMode + 1;
  SkXfermode.kDarken_Mode = SkXfermode.kOverlay_Mode + 1;
  SkXfermode.kLighten_Mode = SkXfermode.kDarken_Mode + 1;
  SkXfermode.kColorDodge_Mode = SkXfermode.kLighten_Mode + 1;
  SkXfermode.kColorBurn_Mode = SkXfermode.kColorDodge_Mode + 1;
  SkXfermode.kHardLight_Mode = SkXfermode.kColorBurn_Mode + 1;
  SkXfermode.kSoftLight_Mode = SkXfermode.kHardLight_Mode + 1;
  SkXfermode.kDifference_Mode = SkXfermode.kSoftLight_Mode + 1;
  SkXfermode.kExclusion_Mode = SkXfermode.kDifference_Mode + 1;
  SkXfermode.kMultiply_Mode = SkXfermode.kExclusion_Mode + 1;
  SkXfermode.kLastSeparableMode = SkXfermode.kMultiply_Mode;
  SkXfermode.kHue_Mode = SkXfermode.kLastSeparableMode + 1;
  SkXfermode.kSaturation_Mode = SkXfermode.kHue_Mode + 1;
  SkXfermode.kColor_Mode = SkXfermode.kSaturation_Mode + 1;
  SkXfermode.kLuminosity_Mode = SkXfermode.kColor_Mode + 1;
  SkXfermode.kLastMode = SkXfermode.kLuminosity_Mode;

  function Color(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Color.prototype.initDefaults_ = function() {
    this.rgba = 0;
  };
  Color.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Color.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Color.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Color.encodedSize = codec.kStructHeaderSize + 8;

  Color.decode = function(decoder) {
    var packed;
    var val = new Color();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rgba = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Color.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Color.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.rgba);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CheckerboardQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CheckerboardQuadState.prototype.initDefaults_ = function() {
  };
  CheckerboardQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CheckerboardQuadState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CheckerboardQuadState.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CheckerboardQuadState.encodedSize = codec.kStructHeaderSize + 0;

  CheckerboardQuadState.decode = function(decoder) {
    var packed;
    var val = new CheckerboardQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CheckerboardQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CheckerboardQuadState.encodedSize);
    encoder.writeUint32(0);
  };

  function DebugBorderQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DebugBorderQuadState.prototype.initDefaults_ = function() {
  };
  DebugBorderQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DebugBorderQuadState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, DebugBorderQuadState.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DebugBorderQuadState.encodedSize = codec.kStructHeaderSize + 0;

  DebugBorderQuadState.decode = function(decoder) {
    var packed;
    var val = new DebugBorderQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  DebugBorderQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DebugBorderQuadState.encodedSize);
    encoder.writeUint32(0);
  };

  function IoSurfaceContentQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IoSurfaceContentQuadState.prototype.initDefaults_ = function() {
  };
  IoSurfaceContentQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IoSurfaceContentQuadState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, IoSurfaceContentQuadState.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  IoSurfaceContentQuadState.encodedSize = codec.kStructHeaderSize + 0;

  IoSurfaceContentQuadState.decode = function(decoder) {
    var packed;
    var val = new IoSurfaceContentQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  IoSurfaceContentQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IoSurfaceContentQuadState.encodedSize);
    encoder.writeUint32(0);
  };

  function RenderPassId(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RenderPassId.prototype.initDefaults_ = function() {
    this.layer_id = 0;
    this.index = 0;
  };
  RenderPassId.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RenderPassId.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, RenderPassId.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  RenderPassId.encodedSize = codec.kStructHeaderSize + 8;

  RenderPassId.decode = function(decoder) {
    var packed;
    var val = new RenderPassId();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.layer_id = decoder.decodeStruct(codec.Int32);
    val.index = decoder.decodeStruct(codec.Int32);
    return val;
  };

  RenderPassId.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RenderPassId.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.layer_id);
    encoder.encodeStruct(codec.Int32, val.index);
  };

  function RenderPassQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RenderPassQuadState.prototype.initDefaults_ = function() {
    this.render_pass_id = null;
    this.mask_resource_id = 0;
    this.mask_uv_scale = null;
    this.mask_texture_size = null;
    this.filters_scale = null;
  };
  RenderPassQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RenderPassQuadState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, RenderPassQuadState.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate RenderPassQuadState.render_pass_id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, RenderPassId, false);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate RenderPassQuadState.mask_uv_scale
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate RenderPassQuadState.mask_texture_size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate RenderPassQuadState.filters_scale
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RenderPassQuadState.encodedSize = codec.kStructHeaderSize + 40;

  RenderPassQuadState.decode = function(decoder) {
    var packed;
    var val = new RenderPassQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.render_pass_id = decoder.decodeStructPointer(RenderPassId);
    val.mask_resource_id = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.mask_uv_scale = decoder.decodeStructPointer(geometry$.PointF);
    val.mask_texture_size = decoder.decodeStructPointer(geometry$.Size);
    val.filters_scale = decoder.decodeStructPointer(geometry$.PointF);
    return val;
  };

  RenderPassQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RenderPassQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(RenderPassId, val.render_pass_id);
    encoder.encodeStruct(codec.Uint32, val.mask_resource_id);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.PointF, val.mask_uv_scale);
    encoder.encodeStructPointer(geometry$.Size, val.mask_texture_size);
    encoder.encodeStructPointer(geometry$.PointF, val.filters_scale);
  };

  function SolidColorQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SolidColorQuadState.prototype.initDefaults_ = function() {
    this.color = null;
    this.force_anti_aliasing_off = false;
  };
  SolidColorQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SolidColorQuadState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SolidColorQuadState.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SolidColorQuadState.color
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, Color, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SolidColorQuadState.encodedSize = codec.kStructHeaderSize + 16;

  SolidColorQuadState.decode = function(decoder) {
    var packed;
    var val = new SolidColorQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.color = decoder.decodeStructPointer(Color);
    val.force_anti_aliasing_off = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SolidColorQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SolidColorQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(Color, val.color);
    encoder.encodeStruct(codec.Uint8, val.force_anti_aliasing_off);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function SurfaceQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SurfaceQuadState.prototype.initDefaults_ = function() {
    this.surface = null;
  };
  SurfaceQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SurfaceQuadState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SurfaceQuadState.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SurfaceQuadState.surface
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, surface_id$.SurfaceId, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SurfaceQuadState.encodedSize = codec.kStructHeaderSize + 8;

  SurfaceQuadState.decode = function(decoder) {
    var packed;
    var val = new SurfaceQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.surface = decoder.decodeStructPointer(surface_id$.SurfaceId);
    return val;
  };

  SurfaceQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SurfaceQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(surface_id$.SurfaceId, val.surface);
  };

  function TextureQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TextureQuadState.prototype.initDefaults_ = function() {
    this.resource_id = 0;
    this.premultiplied_alpha = false;
    this.flipped = false;
    this.nearest_neighbor = false;
    this.uv_top_left = null;
    this.uv_bottom_right = null;
    this.background_color = null;
    this.vertex_opacity = null;
  };
  TextureQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TextureQuadState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TextureQuadState.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;





    
    // validate TextureQuadState.uv_top_left
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TextureQuadState.uv_bottom_right
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TextureQuadState.background_color
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, Color, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TextureQuadState.vertex_opacity
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 4, codec.Float, false, [4], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TextureQuadState.encodedSize = codec.kStructHeaderSize + 40;

  TextureQuadState.decode = function(decoder) {
    var packed;
    var val = new TextureQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.resource_id = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.premultiplied_alpha = (packed >> 0) & 1 ? true : false;
    val.flipped = (packed >> 1) & 1 ? true : false;
    val.nearest_neighbor = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.uv_top_left = decoder.decodeStructPointer(geometry$.PointF);
    val.uv_bottom_right = decoder.decodeStructPointer(geometry$.PointF);
    val.background_color = decoder.decodeStructPointer(Color);
    val.vertex_opacity = decoder.decodeArrayPointer(codec.Float);
    return val;
  };

  TextureQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TextureQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.resource_id);
    packed = 0;
    packed |= (val.premultiplied_alpha & 1) << 0
    packed |= (val.flipped & 1) << 1
    packed |= (val.nearest_neighbor & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.PointF, val.uv_top_left);
    encoder.encodeStructPointer(geometry$.PointF, val.uv_bottom_right);
    encoder.encodeStructPointer(Color, val.background_color);
    encoder.encodeArrayPointer(codec.Float, val.vertex_opacity);
  };

  function TileQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TileQuadState.prototype.initDefaults_ = function() {
    this.tex_coord_rect = null;
    this.texture_size = null;
    this.swizzle_contents = false;
    this.nearest_neighbor = false;
    this.resource_id = 0;
  };
  TileQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TileQuadState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TileQuadState.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TileQuadState.tex_coord_rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.RectF, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TileQuadState.texture_size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  TileQuadState.encodedSize = codec.kStructHeaderSize + 24;

  TileQuadState.decode = function(decoder) {
    var packed;
    var val = new TileQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.tex_coord_rect = decoder.decodeStructPointer(geometry$.RectF);
    val.texture_size = decoder.decodeStructPointer(geometry$.Size);
    packed = decoder.readUint8();
    val.swizzle_contents = (packed >> 0) & 1 ? true : false;
    val.nearest_neighbor = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.resource_id = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  TileQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TileQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.RectF, val.tex_coord_rect);
    encoder.encodeStructPointer(geometry$.Size, val.texture_size);
    packed = 0;
    packed |= (val.swizzle_contents & 1) << 0
    packed |= (val.nearest_neighbor & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.resource_id);
  };

  function StreamVideoQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StreamVideoQuadState.prototype.initDefaults_ = function() {
  };
  StreamVideoQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StreamVideoQuadState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StreamVideoQuadState.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StreamVideoQuadState.encodedSize = codec.kStructHeaderSize + 0;

  StreamVideoQuadState.decode = function(decoder) {
    var packed;
    var val = new StreamVideoQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  StreamVideoQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StreamVideoQuadState.encodedSize);
    encoder.writeUint32(0);
  };

  function YUVVideoQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  YUVVideoQuadState.prototype.initDefaults_ = function() {
    this.tex_coord_rect = null;
    this.y_plane_resource_id = 0;
    this.u_plane_resource_id = 0;
    this.v_plane_resource_id = 0;
    this.a_plane_resource_id = 0;
    this.color_space = 0;
  };
  YUVVideoQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  YUVVideoQuadState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, YUVVideoQuadState.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate YUVVideoQuadState.tex_coord_rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.RectF, false);
    if (err !== validator.validationError.NONE)
        return err;






    return validator.validationError.NONE;
  };

  YUVVideoQuadState.encodedSize = codec.kStructHeaderSize + 32;

  YUVVideoQuadState.decode = function(decoder) {
    var packed;
    var val = new YUVVideoQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.tex_coord_rect = decoder.decodeStructPointer(geometry$.RectF);
    val.y_plane_resource_id = decoder.decodeStruct(codec.Uint32);
    val.u_plane_resource_id = decoder.decodeStruct(codec.Uint32);
    val.v_plane_resource_id = decoder.decodeStruct(codec.Uint32);
    val.a_plane_resource_id = decoder.decodeStruct(codec.Uint32);
    val.color_space = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  YUVVideoQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(YUVVideoQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.RectF, val.tex_coord_rect);
    encoder.encodeStruct(codec.Uint32, val.y_plane_resource_id);
    encoder.encodeStruct(codec.Uint32, val.u_plane_resource_id);
    encoder.encodeStruct(codec.Uint32, val.v_plane_resource_id);
    encoder.encodeStruct(codec.Uint32, val.a_plane_resource_id);
    encoder.encodeStruct(codec.Int32, val.color_space);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Quad(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Quad.prototype.initDefaults_ = function() {
    this.material = 0;
    this.needs_blending = false;
    this.rect = null;
    this.opaque_rect = null;
    this.visible_rect = null;
    this.shared_quad_state_index = 0;
    this.checkerboard_quad_state = null;
    this.debug_border_quad_state = null;
    this.io_surface_quad_state = null;
    this.render_pass_quad_state = null;
    this.solid_color_quad_state = null;
    this.surface_quad_state = null;
    this.texture_quad_state = null;
    this.tile_quad_state = null;
    this.stream_video_quad_state = null;
    this.yuv_video_quad_state = null;
  };
  Quad.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Quad.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Quad.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate Quad.rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Quad.opaque_rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Quad.visible_rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate Quad.checkerboard_quad_state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, CheckerboardQuadState, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Quad.debug_border_quad_state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, DebugBorderQuadState, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Quad.io_surface_quad_state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, IoSurfaceContentQuadState, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Quad.render_pass_quad_state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 64, RenderPassQuadState, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Quad.solid_color_quad_state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 72, SolidColorQuadState, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Quad.surface_quad_state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 80, SurfaceQuadState, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Quad.texture_quad_state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 88, TextureQuadState, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Quad.tile_quad_state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 96, TileQuadState, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Quad.stream_video_quad_state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 104, StreamVideoQuadState, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Quad.yuv_video_quad_state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 112, YUVVideoQuadState, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Quad.encodedSize = codec.kStructHeaderSize + 120;

  Quad.decode = function(decoder) {
    var packed;
    var val = new Quad();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.material = decoder.decodeStruct(codec.Int32);
    val.needs_blending = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.rect = decoder.decodeStructPointer(geometry$.Rect);
    val.opaque_rect = decoder.decodeStructPointer(geometry$.Rect);
    val.visible_rect = decoder.decodeStructPointer(geometry$.Rect);
    val.shared_quad_state_index = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.checkerboard_quad_state = decoder.decodeStructPointer(CheckerboardQuadState);
    val.debug_border_quad_state = decoder.decodeStructPointer(DebugBorderQuadState);
    val.io_surface_quad_state = decoder.decodeStructPointer(IoSurfaceContentQuadState);
    val.render_pass_quad_state = decoder.decodeStructPointer(RenderPassQuadState);
    val.solid_color_quad_state = decoder.decodeStructPointer(SolidColorQuadState);
    val.surface_quad_state = decoder.decodeStructPointer(SurfaceQuadState);
    val.texture_quad_state = decoder.decodeStructPointer(TextureQuadState);
    val.tile_quad_state = decoder.decodeStructPointer(TileQuadState);
    val.stream_video_quad_state = decoder.decodeStructPointer(StreamVideoQuadState);
    val.yuv_video_quad_state = decoder.decodeStructPointer(YUVVideoQuadState);
    return val;
  };

  Quad.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Quad.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.material);
    encoder.encodeStruct(codec.Uint8, val.needs_blending);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.Rect, val.rect);
    encoder.encodeStructPointer(geometry$.Rect, val.opaque_rect);
    encoder.encodeStructPointer(geometry$.Rect, val.visible_rect);
    encoder.encodeStruct(codec.Uint32, val.shared_quad_state_index);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(CheckerboardQuadState, val.checkerboard_quad_state);
    encoder.encodeStructPointer(DebugBorderQuadState, val.debug_border_quad_state);
    encoder.encodeStructPointer(IoSurfaceContentQuadState, val.io_surface_quad_state);
    encoder.encodeStructPointer(RenderPassQuadState, val.render_pass_quad_state);
    encoder.encodeStructPointer(SolidColorQuadState, val.solid_color_quad_state);
    encoder.encodeStructPointer(SurfaceQuadState, val.surface_quad_state);
    encoder.encodeStructPointer(TextureQuadState, val.texture_quad_state);
    encoder.encodeStructPointer(TileQuadState, val.tile_quad_state);
    encoder.encodeStructPointer(StreamVideoQuadState, val.stream_video_quad_state);
    encoder.encodeStructPointer(YUVVideoQuadState, val.yuv_video_quad_state);
  };

  function SharedQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedQuadState.prototype.initDefaults_ = function() {
    this.content_to_target_transform = null;
    this.content_bounds = null;
    this.visible_content_rect = null;
    this.clip_rect = null;
    this.is_clipped = false;
    this.opacity = 0;
    this.blend_mode = 0;
    this.sorting_context_id = 0;
  };
  SharedQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedQuadState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SharedQuadState.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SharedQuadState.content_to_target_transform
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Transform, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SharedQuadState.content_bounds
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SharedQuadState.visible_content_rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SharedQuadState.clip_rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;





    return validator.validationError.NONE;
  };

  SharedQuadState.encodedSize = codec.kStructHeaderSize + 48;

  SharedQuadState.decode = function(decoder) {
    var packed;
    var val = new SharedQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.content_to_target_transform = decoder.decodeStructPointer(geometry$.Transform);
    val.content_bounds = decoder.decodeStructPointer(geometry$.Size);
    val.visible_content_rect = decoder.decodeStructPointer(geometry$.Rect);
    val.clip_rect = decoder.decodeStructPointer(geometry$.Rect);
    val.is_clipped = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.opacity = decoder.decodeStruct(codec.Float);
    val.blend_mode = decoder.decodeStruct(codec.Int32);
    val.sorting_context_id = decoder.decodeStruct(codec.Int32);
    return val;
  };

  SharedQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Transform, val.content_to_target_transform);
    encoder.encodeStructPointer(geometry$.Size, val.content_bounds);
    encoder.encodeStructPointer(geometry$.Rect, val.visible_content_rect);
    encoder.encodeStructPointer(geometry$.Rect, val.clip_rect);
    encoder.encodeStruct(codec.Uint8, val.is_clipped);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Float, val.opacity);
    encoder.encodeStruct(codec.Int32, val.blend_mode);
    encoder.encodeStruct(codec.Int32, val.sorting_context_id);
  };

  function Pass(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Pass.prototype.initDefaults_ = function() {
    this.id = 0;
    this.has_transparent_background = false;
    this.output_rect = null;
    this.damage_rect = null;
    this.transform_to_root_target = null;
    this.quads = null;
    this.shared_quad_states = null;
  };
  Pass.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Pass.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Pass.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate Pass.output_rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Pass.damage_rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Pass.transform_to_root_target
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.Transform, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Pass.quads
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(Quad), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Pass.shared_quad_states
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 8, new codec.PointerTo(SharedQuadState), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Pass.encodedSize = codec.kStructHeaderSize + 48;

  Pass.decode = function(decoder) {
    var packed;
    var val = new Pass();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Int32);
    val.has_transparent_background = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.output_rect = decoder.decodeStructPointer(geometry$.Rect);
    val.damage_rect = decoder.decodeStructPointer(geometry$.Rect);
    val.transform_to_root_target = decoder.decodeStructPointer(geometry$.Transform);
    val.quads = decoder.decodeArrayPointer(new codec.PointerTo(Quad));
    val.shared_quad_states = decoder.decodeArrayPointer(new codec.PointerTo(SharedQuadState));
    return val;
  };

  Pass.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Pass.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.id);
    encoder.encodeStruct(codec.Uint8, val.has_transparent_background);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.Rect, val.output_rect);
    encoder.encodeStructPointer(geometry$.Rect, val.damage_rect);
    encoder.encodeStructPointer(geometry$.Transform, val.transform_to_root_target);
    encoder.encodeArrayPointer(new codec.PointerTo(Quad), val.quads);
    encoder.encodeArrayPointer(new codec.PointerTo(SharedQuadState), val.shared_quad_states);
  };


  var exports = {};
  exports.YUVColorSpace = YUVColorSpace;
  exports.Material = Material;
  exports.SkXfermode = SkXfermode;
  exports.Color = Color;
  exports.CheckerboardQuadState = CheckerboardQuadState;
  exports.DebugBorderQuadState = DebugBorderQuadState;
  exports.IoSurfaceContentQuadState = IoSurfaceContentQuadState;
  exports.RenderPassId = RenderPassId;
  exports.RenderPassQuadState = RenderPassQuadState;
  exports.SolidColorQuadState = SolidColorQuadState;
  exports.SurfaceQuadState = SurfaceQuadState;
  exports.TextureQuadState = TextureQuadState;
  exports.TileQuadState = TileQuadState;
  exports.StreamVideoQuadState = StreamVideoQuadState;
  exports.YUVVideoQuadState = YUVVideoQuadState;
  exports.Quad = Quad;
  exports.SharedQuadState = SharedQuadState;
  exports.Pass = Pass;


  return exports;
});
