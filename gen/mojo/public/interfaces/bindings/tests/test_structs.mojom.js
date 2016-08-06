// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/test_structs.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/bindings/tests/rect.mojom",
], function(bindings, codec, connection, core, validator, rect$) {

  function StructOfStructs(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructOfStructs.prototype.initDefaults_ = function() {
    this.nr = null;
    this.a_nr = null;
    this.a_rp = null;
    this.m_ndfv = null;
    this.m_hs = null;
  };
  StructOfStructs.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructOfStructs.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructOfStructs.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructOfStructs.nr
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, NamedRegion, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructOfStructs.a_nr
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(NamedRegion), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructOfStructs.a_rp
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(RectPair), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructOfStructs.m_ndfv
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 24, false, codec.Int64, new codec.PointerTo(NoDefaultFieldValues), false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructOfStructs.m_hs
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 32, false, codec.Int64, new codec.PointerTo(HandleStruct), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructOfStructs.encodedSize = codec.kStructHeaderSize + 40;

  StructOfStructs.decode = function(decoder) {
    var packed;
    var val = new StructOfStructs();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.nr = decoder.decodeStructPointer(NamedRegion);
    val.a_nr = decoder.decodeArrayPointer(new codec.PointerTo(NamedRegion));
    val.a_rp = decoder.decodeArrayPointer(new codec.PointerTo(RectPair));
    val.m_ndfv = decoder.decodeMapPointer(codec.Int64, new codec.PointerTo(NoDefaultFieldValues));
    val.m_hs = decoder.decodeMapPointer(codec.Int64, new codec.PointerTo(HandleStruct));
    return val;
  };

  StructOfStructs.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructOfStructs.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(NamedRegion, val.nr);
    encoder.encodeArrayPointer(new codec.PointerTo(NamedRegion), val.a_nr);
    encoder.encodeArrayPointer(new codec.PointerTo(RectPair), val.a_rp);
    encoder.encodeMapPointer(codec.Int64, new codec.PointerTo(NoDefaultFieldValues), val.m_ndfv);
    encoder.encodeMapPointer(codec.Int64, new codec.PointerTo(HandleStruct), val.m_hs);
  };

  function NamedRegion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NamedRegion.prototype.initDefaults_ = function() {
    this.name = null;
    this.rects = null;
  };
  NamedRegion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NamedRegion.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NamedRegion.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NamedRegion.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NamedRegion.rects
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(rect$.Rect), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NamedRegion.encodedSize = codec.kStructHeaderSize + 16;

  NamedRegion.decode = function(decoder) {
    var packed;
    var val = new NamedRegion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.NullableString);
    val.rects = decoder.decodeArrayPointer(new codec.PointerTo(rect$.Rect));
    return val;
  };

  NamedRegion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NamedRegion.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.name);
    encoder.encodeArrayPointer(new codec.PointerTo(rect$.Rect), val.rects);
  };

  function RectPair(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RectPair.prototype.initDefaults_ = function() {
    this.first = null;
    this.second = null;
  };
  RectPair.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RectPair.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, RectPair.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate RectPair.first
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, rect$.Rect, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate RectPair.second
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, rect$.Rect, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RectPair.encodedSize = codec.kStructHeaderSize + 16;

  RectPair.decode = function(decoder) {
    var packed;
    var val = new RectPair();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.first = decoder.decodeStructPointer(rect$.Rect);
    val.second = decoder.decodeStructPointer(rect$.Rect);
    return val;
  };

  RectPair.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RectPair.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(rect$.Rect, val.first);
    encoder.encodeStructPointer(rect$.Rect, val.second);
  };

  function EmptyStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EmptyStruct.prototype.initDefaults_ = function() {
  };
  EmptyStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EmptyStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, EmptyStruct.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EmptyStruct.encodedSize = codec.kStructHeaderSize + 0;

  EmptyStruct.decode = function(decoder) {
    var packed;
    var val = new EmptyStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  EmptyStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EmptyStruct.encodedSize);
    encoder.writeUint32(0);
  };

  function HandleStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HandleStruct.prototype.initDefaults_ = function() {
    this.h = null;
    this.array_h = null;
  };
  HandleStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HandleStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HandleStruct.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HandleStruct.h
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HandleStruct.array_h
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, codec.Handle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HandleStruct.encodedSize = codec.kStructHeaderSize + 16;

  HandleStruct.decode = function(decoder) {
    var packed;
    var val = new HandleStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.h = decoder.decodeStruct(codec.NullableHandle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.array_h = decoder.decodeArrayPointer(codec.Handle);
    return val;
  };

  HandleStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HandleStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableHandle, val.h);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Handle, val.array_h);
  };

  function NullableHandleStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NullableHandleStruct.prototype.initDefaults_ = function() {
    this.h = null;
    this.data = 1234;
  };
  NullableHandleStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NullableHandleStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NullableHandleStruct.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NullableHandleStruct.h
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  NullableHandleStruct.encodedSize = codec.kStructHeaderSize + 8;

  NullableHandleStruct.decode = function(decoder) {
    var packed;
    var val = new NullableHandleStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.h = decoder.decodeStruct(codec.NullableHandle);
    val.data = decoder.decodeStruct(codec.Int32);
    return val;
  };

  NullableHandleStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NullableHandleStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableHandle, val.h);
    encoder.encodeStruct(codec.Int32, val.data);
  };

  function NoDefaultFieldValues(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NoDefaultFieldValues.prototype.initDefaults_ = function() {
    this.f0 = false;
    this.f1 = 0;
    this.f2 = 0;
    this.f3 = 0;
    this.f4 = 0;
    this.f5 = 0;
    this.f6 = 0;
    this.f7 = 0;
    this.f8 = 0;
    this.f9 = 0;
    this.f13 = null;
    this.f10 = 0;
    this.f11 = null;
    this.f12 = null;
    this.f14 = null;
    this.f15 = null;
    this.f16 = null;
    this.f17 = null;
    this.f18 = null;
    this.f19 = null;
    this.f20 = null;
    this.f21 = null;
    this.f22 = null;
    this.f23 = null;
    this.f24 = null;
    this.f25 = null;
    this.f26 = null;
    this.f27 = null;
    this.f28 = null;
  };
  NoDefaultFieldValues.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NoDefaultFieldValues.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NoDefaultFieldValues.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;











    
    // validate NoDefaultFieldValues.f13
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 36, false)
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate NoDefaultFieldValues.f11
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f12
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f14
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 64, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f15
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 68, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f16
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 72, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f17
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 76, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f18
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 80, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f19
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 84, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f20
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 88, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f21
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 92, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f22
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 96, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f23
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 104, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f24
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 112, 8, codec.NullableString, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f25
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 120, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f26
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 128, 8, codec.NullableString, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f27
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 136, EmptyStruct, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NoDefaultFieldValues.f28
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 144, EmptyStruct, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NoDefaultFieldValues.encodedSize = codec.kStructHeaderSize + 152;

  NoDefaultFieldValues.decode = function(decoder) {
    var packed;
    var val = new NoDefaultFieldValues();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f0 = decoder.decodeStruct(codec.Uint8);
    val.f1 = decoder.decodeStruct(codec.Int8);
    val.f2 = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    val.f3 = decoder.decodeStruct(codec.Int16);
    val.f4 = decoder.decodeStruct(codec.Uint16);
    val.f5 = decoder.decodeStruct(codec.Int32);
    val.f6 = decoder.decodeStruct(codec.Uint32);
    val.f7 = decoder.decodeStruct(codec.Int64);
    val.f8 = decoder.decodeStruct(codec.Uint64);
    val.f9 = decoder.decodeStruct(codec.Float);
    val.f13 = decoder.decodeStruct(codec.Handle);
    val.f10 = decoder.decodeStruct(codec.Double);
    val.f11 = decoder.decodeStruct(codec.String);
    val.f12 = decoder.decodeStruct(codec.NullableString);
    val.f14 = decoder.decodeStruct(codec.Handle);
    val.f15 = decoder.decodeStruct(codec.Handle);
    val.f16 = decoder.decodeStruct(codec.NullableHandle);
    val.f17 = decoder.decodeStruct(codec.NullableHandle);
    val.f18 = decoder.decodeStruct(codec.NullableHandle);
    val.f19 = decoder.decodeStruct(codec.Handle);
    val.f20 = decoder.decodeStruct(codec.NullableHandle);
    val.f21 = decoder.decodeStruct(codec.Handle);
    val.f22 = decoder.decodeStruct(codec.NullableHandle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.f23 = decoder.decodeArrayPointer(codec.String);
    val.f24 = decoder.decodeArrayPointer(codec.NullableString);
    val.f25 = decoder.decodeArrayPointer(codec.String);
    val.f26 = decoder.decodeArrayPointer(codec.NullableString);
    val.f27 = decoder.decodeStructPointer(EmptyStruct);
    val.f28 = decoder.decodeStructPointer(EmptyStruct);
    return val;
  };

  NoDefaultFieldValues.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NoDefaultFieldValues.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.f0);
    encoder.encodeStruct(codec.Int8, val.f1);
    encoder.encodeStruct(codec.Uint8, val.f2);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int16, val.f3);
    encoder.encodeStruct(codec.Uint16, val.f4);
    encoder.encodeStruct(codec.Int32, val.f5);
    encoder.encodeStruct(codec.Uint32, val.f6);
    encoder.encodeStruct(codec.Int64, val.f7);
    encoder.encodeStruct(codec.Uint64, val.f8);
    encoder.encodeStruct(codec.Float, val.f9);
    encoder.encodeStruct(codec.Handle, val.f13);
    encoder.encodeStruct(codec.Double, val.f10);
    encoder.encodeStruct(codec.String, val.f11);
    encoder.encodeStruct(codec.NullableString, val.f12);
    encoder.encodeStruct(codec.Handle, val.f14);
    encoder.encodeStruct(codec.Handle, val.f15);
    encoder.encodeStruct(codec.NullableHandle, val.f16);
    encoder.encodeStruct(codec.NullableHandle, val.f17);
    encoder.encodeStruct(codec.NullableHandle, val.f18);
    encoder.encodeStruct(codec.Handle, val.f19);
    encoder.encodeStruct(codec.NullableHandle, val.f20);
    encoder.encodeStruct(codec.Handle, val.f21);
    encoder.encodeStruct(codec.NullableHandle, val.f22);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.String, val.f23);
    encoder.encodeArrayPointer(codec.NullableString, val.f24);
    encoder.encodeArrayPointer(codec.String, val.f25);
    encoder.encodeArrayPointer(codec.NullableString, val.f26);
    encoder.encodeStructPointer(EmptyStruct, val.f27);
    encoder.encodeStructPointer(EmptyStruct, val.f28);
  };

  function DefaultFieldValues(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DefaultFieldValues.kFoo = "foo";
  DefaultFieldValues.prototype.initDefaults_ = function() {
    this.f0 = true;
    this.f1 = 100;
    this.f2 = 100;
    this.f3 = 100;
    this.f4 = 100;
    this.f5 = 100;
    this.f6 = 100;
    this.f7 = 100;
    this.f8 = 100;
    this.f9 = 100;
    this.f10 = 100.0;
    this.f11 = 100;
    this.f12 = 100.0;
    this.f13 = DefaultFieldValues.kFoo;
    this.f14 = DefaultFieldValues.kFoo;
    this.f15 = new rect$.Rect();
    this.f16 = new rect$.Rect();
  };
  DefaultFieldValues.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DefaultFieldValues.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, DefaultFieldValues.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;














    
    // validate DefaultFieldValues.f13
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate DefaultFieldValues.f14
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 64, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate DefaultFieldValues.f15
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 72, rect$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate DefaultFieldValues.f16
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 80, rect$.Rect, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DefaultFieldValues.encodedSize = codec.kStructHeaderSize + 88;

  DefaultFieldValues.decode = function(decoder) {
    var packed;
    var val = new DefaultFieldValues();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f0 = decoder.decodeStruct(codec.Uint8);
    val.f1 = decoder.decodeStruct(codec.Int8);
    val.f2 = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    val.f3 = decoder.decodeStruct(codec.Int16);
    val.f4 = decoder.decodeStruct(codec.Uint16);
    val.f5 = decoder.decodeStruct(codec.Int32);
    val.f6 = decoder.decodeStruct(codec.Uint32);
    val.f7 = decoder.decodeStruct(codec.Int64);
    val.f8 = decoder.decodeStruct(codec.Uint64);
    val.f9 = decoder.decodeStruct(codec.Float);
    val.f10 = decoder.decodeStruct(codec.Float);
    val.f11 = decoder.decodeStruct(codec.Double);
    val.f12 = decoder.decodeStruct(codec.Double);
    val.f13 = decoder.decodeStruct(codec.String);
    val.f14 = decoder.decodeStruct(codec.NullableString);
    val.f15 = decoder.decodeStructPointer(rect$.Rect);
    val.f16 = decoder.decodeStructPointer(rect$.Rect);
    return val;
  };

  DefaultFieldValues.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DefaultFieldValues.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.f0);
    encoder.encodeStruct(codec.Int8, val.f1);
    encoder.encodeStruct(codec.Uint8, val.f2);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int16, val.f3);
    encoder.encodeStruct(codec.Uint16, val.f4);
    encoder.encodeStruct(codec.Int32, val.f5);
    encoder.encodeStruct(codec.Uint32, val.f6);
    encoder.encodeStruct(codec.Int64, val.f7);
    encoder.encodeStruct(codec.Uint64, val.f8);
    encoder.encodeStruct(codec.Float, val.f9);
    encoder.encodeStruct(codec.Float, val.f10);
    encoder.encodeStruct(codec.Double, val.f11);
    encoder.encodeStruct(codec.Double, val.f12);
    encoder.encodeStruct(codec.String, val.f13);
    encoder.encodeStruct(codec.NullableString, val.f14);
    encoder.encodeStructPointer(rect$.Rect, val.f15);
    encoder.encodeStructPointer(rect$.Rect, val.f16);
  };

  function ScopedConstants(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  ScopedConstants.EType = {};
  ScopedConstants.EType.E0 = 0;
  ScopedConstants.EType.E1 = ScopedConstants.EType.E0 + 1;
  ScopedConstants.EType.E2 = 10;
  ScopedConstants.EType.E3 = ScopedConstants.EType.E2;
  ScopedConstants.EType.E4 = ScopedConstants.EType.E3 + 1;

  ScopedConstants.TEN = 10;
  ScopedConstants.ALSO_TEN = ScopedConstants.TEN;
  ScopedConstants.prototype.initDefaults_ = function() {
    this.f0 = ScopedConstants.EType.E0;
    this.f1 = ScopedConstants.EType.E1;
    this.f2 = ScopedConstants.EType.E2;
    this.f3 = ScopedConstants.EType.E3;
    this.f4 = ScopedConstants.EType.E4;
    this.f5 = ScopedConstants.TEN;
    this.f6 = ScopedConstants.ALSO_TEN;
  };
  ScopedConstants.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ScopedConstants.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ScopedConstants.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;








    return validator.validationError.NONE;
  };

  ScopedConstants.encodedSize = codec.kStructHeaderSize + 32;

  ScopedConstants.decode = function(decoder) {
    var packed;
    var val = new ScopedConstants();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f0 = decoder.decodeStruct(codec.Int32);
    val.f1 = decoder.decodeStruct(codec.Int32);
    val.f2 = decoder.decodeStruct(codec.Int32);
    val.f3 = decoder.decodeStruct(codec.Int32);
    val.f4 = decoder.decodeStruct(codec.Int32);
    val.f5 = decoder.decodeStruct(codec.Int32);
    val.f6 = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ScopedConstants.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ScopedConstants.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.f0);
    encoder.encodeStruct(codec.Int32, val.f1);
    encoder.encodeStruct(codec.Int32, val.f2);
    encoder.encodeStruct(codec.Int32, val.f3);
    encoder.encodeStruct(codec.Int32, val.f4);
    encoder.encodeStruct(codec.Int32, val.f5);
    encoder.encodeStruct(codec.Int32, val.f6);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function MapKeyTypes(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MapKeyTypes.prototype.initDefaults_ = function() {
    this.f0 = null;
    this.f1 = null;
    this.f2 = null;
    this.f3 = null;
    this.f4 = null;
    this.f5 = null;
    this.f6 = null;
    this.f7 = null;
    this.f8 = null;
    this.f9 = null;
    this.f10 = null;
    this.f11 = null;
  };
  MapKeyTypes.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MapKeyTypes.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MapKeyTypes.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapKeyTypes.f0
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.PackedBool, codec.PackedBool, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapKeyTypes.f1
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 8, false, codec.Int8, codec.Int8, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapKeyTypes.f2
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 16, false, codec.Uint8, codec.Uint8, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapKeyTypes.f3
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 24, false, codec.Int16, codec.Int16, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapKeyTypes.f4
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 32, false, codec.Uint16, codec.Uint16, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapKeyTypes.f5
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 40, false, codec.Int32, codec.Int32, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapKeyTypes.f6
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 48, false, codec.Uint32, codec.Uint32, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapKeyTypes.f7
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 56, false, codec.Int64, codec.Int64, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapKeyTypes.f8
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 64, false, codec.Uint64, codec.Uint64, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapKeyTypes.f9
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 72, false, codec.Float, codec.Float, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapKeyTypes.f10
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 80, false, codec.Double, codec.Double, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapKeyTypes.f11
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 88, false, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MapKeyTypes.encodedSize = codec.kStructHeaderSize + 96;

  MapKeyTypes.decode = function(decoder) {
    var packed;
    var val = new MapKeyTypes();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f0 = decoder.decodeMapPointer(codec.PackedBool, codec.PackedBool);
    val.f1 = decoder.decodeMapPointer(codec.Int8, codec.Int8);
    val.f2 = decoder.decodeMapPointer(codec.Uint8, codec.Uint8);
    val.f3 = decoder.decodeMapPointer(codec.Int16, codec.Int16);
    val.f4 = decoder.decodeMapPointer(codec.Uint16, codec.Uint16);
    val.f5 = decoder.decodeMapPointer(codec.Int32, codec.Int32);
    val.f6 = decoder.decodeMapPointer(codec.Uint32, codec.Uint32);
    val.f7 = decoder.decodeMapPointer(codec.Int64, codec.Int64);
    val.f8 = decoder.decodeMapPointer(codec.Uint64, codec.Uint64);
    val.f9 = decoder.decodeMapPointer(codec.Float, codec.Float);
    val.f10 = decoder.decodeMapPointer(codec.Double, codec.Double);
    val.f11 = decoder.decodeMapPointer(codec.String, codec.String);
    return val;
  };

  MapKeyTypes.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MapKeyTypes.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.PackedBool, codec.PackedBool, val.f0);
    encoder.encodeMapPointer(codec.Int8, codec.Int8, val.f1);
    encoder.encodeMapPointer(codec.Uint8, codec.Uint8, val.f2);
    encoder.encodeMapPointer(codec.Int16, codec.Int16, val.f3);
    encoder.encodeMapPointer(codec.Uint16, codec.Uint16, val.f4);
    encoder.encodeMapPointer(codec.Int32, codec.Int32, val.f5);
    encoder.encodeMapPointer(codec.Uint32, codec.Uint32, val.f6);
    encoder.encodeMapPointer(codec.Int64, codec.Int64, val.f7);
    encoder.encodeMapPointer(codec.Uint64, codec.Uint64, val.f8);
    encoder.encodeMapPointer(codec.Float, codec.Float, val.f9);
    encoder.encodeMapPointer(codec.Double, codec.Double, val.f10);
    encoder.encodeMapPointer(codec.String, codec.String, val.f11);
  };

  function MapValueTypes(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MapValueTypes.prototype.initDefaults_ = function() {
    this.f0 = null;
    this.f1 = null;
    this.f2 = null;
    this.f3 = null;
    this.f4 = null;
    this.f5 = null;
    this.f6 = null;
    this.f7 = null;
    this.f8 = null;
    this.f9 = null;
    this.f10 = null;
    this.f11 = null;
  };
  MapValueTypes.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MapValueTypes.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MapValueTypes.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapValueTypes.f0
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, new codec.ArrayOf(codec.String), false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapValueTypes.f1
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 8, false, codec.String, new codec.NullableArrayOf(codec.String), true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapValueTypes.f2
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 16, false, codec.String, new codec.ArrayOf(codec.NullableString), false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapValueTypes.f3
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 24, false, codec.String, new codec.ArrayOf(codec.String, 2), false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapValueTypes.f4
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 32, false, codec.String, new codec.ArrayOf(new codec.NullableArrayOf(codec.String, 2)), false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapValueTypes.f5
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 40, false, codec.String, new codec.ArrayOf(new codec.ArrayOf(codec.String, 2), 1), false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapValueTypes.f6
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 48, false, codec.String, new codec.NullablePointerTo(rect$.Rect), true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapValueTypes.f7
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 56, false, codec.String, new codec.MapOf(codec.String, codec.String), false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapValueTypes.f8
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 64, false, codec.String, new codec.ArrayOf(new codec.MapOf(codec.String, codec.String)), false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapValueTypes.f9
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 72, false, codec.String, codec.Handle, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapValueTypes.f10
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 80, false, codec.String, new codec.ArrayOf(codec.Handle), false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MapValueTypes.f11
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 88, false, codec.String, new codec.MapOf(codec.String, codec.Handle), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MapValueTypes.encodedSize = codec.kStructHeaderSize + 96;

  MapValueTypes.decode = function(decoder) {
    var packed;
    var val = new MapValueTypes();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f0 = decoder.decodeMapPointer(codec.String, new codec.ArrayOf(codec.String));
    val.f1 = decoder.decodeMapPointer(codec.String, new codec.NullableArrayOf(codec.String));
    val.f2 = decoder.decodeMapPointer(codec.String, new codec.ArrayOf(codec.NullableString));
    val.f3 = decoder.decodeMapPointer(codec.String, new codec.ArrayOf(codec.String, 2));
    val.f4 = decoder.decodeMapPointer(codec.String, new codec.ArrayOf(new codec.NullableArrayOf(codec.String, 2)));
    val.f5 = decoder.decodeMapPointer(codec.String, new codec.ArrayOf(new codec.ArrayOf(codec.String, 2), 1));
    val.f6 = decoder.decodeMapPointer(codec.String, new codec.NullablePointerTo(rect$.Rect));
    val.f7 = decoder.decodeMapPointer(codec.String, new codec.MapOf(codec.String, codec.String));
    val.f8 = decoder.decodeMapPointer(codec.String, new codec.ArrayOf(new codec.MapOf(codec.String, codec.String)));
    val.f9 = decoder.decodeMapPointer(codec.String, codec.Handle);
    val.f10 = decoder.decodeMapPointer(codec.String, new codec.ArrayOf(codec.Handle));
    val.f11 = decoder.decodeMapPointer(codec.String, new codec.MapOf(codec.String, codec.Handle));
    return val;
  };

  MapValueTypes.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MapValueTypes.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, new codec.ArrayOf(codec.String), val.f0);
    encoder.encodeMapPointer(codec.String, new codec.NullableArrayOf(codec.String), val.f1);
    encoder.encodeMapPointer(codec.String, new codec.ArrayOf(codec.NullableString), val.f2);
    encoder.encodeMapPointer(codec.String, new codec.ArrayOf(codec.String, 2), val.f3);
    encoder.encodeMapPointer(codec.String, new codec.ArrayOf(new codec.NullableArrayOf(codec.String, 2)), val.f4);
    encoder.encodeMapPointer(codec.String, new codec.ArrayOf(new codec.ArrayOf(codec.String, 2), 1), val.f5);
    encoder.encodeMapPointer(codec.String, new codec.NullablePointerTo(rect$.Rect), val.f6);
    encoder.encodeMapPointer(codec.String, new codec.MapOf(codec.String, codec.String), val.f7);
    encoder.encodeMapPointer(codec.String, new codec.ArrayOf(new codec.MapOf(codec.String, codec.String)), val.f8);
    encoder.encodeMapPointer(codec.String, codec.Handle, val.f9);
    encoder.encodeMapPointer(codec.String, new codec.ArrayOf(codec.Handle), val.f10);
    encoder.encodeMapPointer(codec.String, new codec.MapOf(codec.String, codec.Handle), val.f11);
  };

  function ArrayValueTypes(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ArrayValueTypes.prototype.initDefaults_ = function() {
    this.f0 = null;
    this.f1 = null;
    this.f2 = null;
    this.f3 = null;
    this.f4 = null;
    this.f5 = null;
  };
  ArrayValueTypes.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ArrayValueTypes.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ArrayValueTypes.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ArrayValueTypes.f0
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Int8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ArrayValueTypes.f1
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 2, codec.Int16, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ArrayValueTypes.f2
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, codec.Int32, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ArrayValueTypes.f3
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, codec.Int64, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ArrayValueTypes.f4
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 4, codec.Float, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ArrayValueTypes.f5
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 8, codec.Double, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ArrayValueTypes.encodedSize = codec.kStructHeaderSize + 48;

  ArrayValueTypes.decode = function(decoder) {
    var packed;
    var val = new ArrayValueTypes();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f0 = decoder.decodeArrayPointer(codec.Int8);
    val.f1 = decoder.decodeArrayPointer(codec.Int16);
    val.f2 = decoder.decodeArrayPointer(codec.Int32);
    val.f3 = decoder.decodeArrayPointer(codec.Int64);
    val.f4 = decoder.decodeArrayPointer(codec.Float);
    val.f5 = decoder.decodeArrayPointer(codec.Double);
    return val;
  };

  ArrayValueTypes.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ArrayValueTypes.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Int8, val.f0);
    encoder.encodeArrayPointer(codec.Int16, val.f1);
    encoder.encodeArrayPointer(codec.Int32, val.f2);
    encoder.encodeArrayPointer(codec.Int64, val.f3);
    encoder.encodeArrayPointer(codec.Float, val.f4);
    encoder.encodeArrayPointer(codec.Double, val.f5);
  };

  function FloatNumberValues(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FloatNumberValues.V0 = Infinity;
  FloatNumberValues.V1 = -Infinity;
  FloatNumberValues.V2 = NaN;
  FloatNumberValues.V3 = Infinity;
  FloatNumberValues.V4 = -Infinity;
  FloatNumberValues.V5 = NaN;
  FloatNumberValues.V6 = 0;
  FloatNumberValues.V7 = 1234567890.123;
  FloatNumberValues.V8 = 1.2e+20;
  FloatNumberValues.V9 = -1.2e+20;
  FloatNumberValues.prototype.initDefaults_ = function() {
    this.f0 = FloatNumberValues.V0;
    this.f1 = FloatNumberValues.V1;
    this.f2 = FloatNumberValues.V2;
    this.f3 = FloatNumberValues.V3;
    this.f4 = FloatNumberValues.V4;
    this.f5 = FloatNumberValues.V5;
    this.f6 = FloatNumberValues.V6;
    this.f7 = FloatNumberValues.V7;
    this.f8 = FloatNumberValues.V8;
    this.f9 = FloatNumberValues.V9;
  };
  FloatNumberValues.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FloatNumberValues.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FloatNumberValues.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;











    return validator.validationError.NONE;
  };

  FloatNumberValues.encodedSize = codec.kStructHeaderSize + 64;

  FloatNumberValues.decode = function(decoder) {
    var packed;
    var val = new FloatNumberValues();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f0 = decoder.decodeStruct(codec.Double);
    val.f1 = decoder.decodeStruct(codec.Double);
    val.f2 = decoder.decodeStruct(codec.Double);
    val.f3 = decoder.decodeStruct(codec.Float);
    val.f4 = decoder.decodeStruct(codec.Float);
    val.f5 = decoder.decodeStruct(codec.Float);
    val.f6 = decoder.decodeStruct(codec.Float);
    val.f7 = decoder.decodeStruct(codec.Double);
    val.f8 = decoder.decodeStruct(codec.Double);
    val.f9 = decoder.decodeStruct(codec.Double);
    return val;
  };

  FloatNumberValues.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FloatNumberValues.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Double, val.f0);
    encoder.encodeStruct(codec.Double, val.f1);
    encoder.encodeStruct(codec.Double, val.f2);
    encoder.encodeStruct(codec.Float, val.f3);
    encoder.encodeStruct(codec.Float, val.f4);
    encoder.encodeStruct(codec.Float, val.f5);
    encoder.encodeStruct(codec.Float, val.f6);
    encoder.encodeStruct(codec.Double, val.f7);
    encoder.encodeStruct(codec.Double, val.f8);
    encoder.encodeStruct(codec.Double, val.f9);
  };

  function IntegerNumberValues(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IntegerNumberValues.V0 = -128;
  IntegerNumberValues.V1 = -1;
  IntegerNumberValues.V2 = 0;
  IntegerNumberValues.V3 = 42;
  IntegerNumberValues.V4 = 127;
  IntegerNumberValues.V5 = -32768;
  IntegerNumberValues.V6 = -1;
  IntegerNumberValues.V7 = 0;
  IntegerNumberValues.V8 = 12345;
  IntegerNumberValues.V9 = 32767;
  IntegerNumberValues.V10 = -2147483648;
  IntegerNumberValues.V11 = -1;
  IntegerNumberValues.V12 = 0;
  IntegerNumberValues.V13 = 1234567890;
  IntegerNumberValues.V14 = 2147483647;
  IntegerNumberValues.V15 = -9007199254740991;
  IntegerNumberValues.V16 = -1;
  IntegerNumberValues.V17 = 0;
  IntegerNumberValues.V18 = 1234567890123456;
  IntegerNumberValues.V19 = 9007199254740991;
  IntegerNumberValues.prototype.initDefaults_ = function() {
    this.f0 = IntegerNumberValues.V0;
    this.f1 = IntegerNumberValues.V1;
    this.f2 = IntegerNumberValues.V2;
    this.f3 = IntegerNumberValues.V3;
    this.f4 = IntegerNumberValues.V4;
    this.f5 = IntegerNumberValues.V5;
    this.f6 = IntegerNumberValues.V6;
    this.f7 = IntegerNumberValues.V7;
    this.f8 = IntegerNumberValues.V8;
    this.f9 = IntegerNumberValues.V9;
    this.f10 = IntegerNumberValues.V10;
    this.f11 = IntegerNumberValues.V11;
    this.f12 = IntegerNumberValues.V12;
    this.f13 = IntegerNumberValues.V13;
    this.f14 = IntegerNumberValues.V14;
    this.f15 = IntegerNumberValues.V15;
    this.f16 = IntegerNumberValues.V16;
    this.f17 = IntegerNumberValues.V17;
    this.f18 = IntegerNumberValues.V18;
    this.f19 = IntegerNumberValues.V19;
  };
  IntegerNumberValues.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IntegerNumberValues.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, IntegerNumberValues.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;





















    return validator.validationError.NONE;
  };

  IntegerNumberValues.encodedSize = codec.kStructHeaderSize + 80;

  IntegerNumberValues.decode = function(decoder) {
    var packed;
    var val = new IntegerNumberValues();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f0 = decoder.decodeStruct(codec.Int8);
    val.f1 = decoder.decodeStruct(codec.Int8);
    val.f2 = decoder.decodeStruct(codec.Int8);
    val.f3 = decoder.decodeStruct(codec.Int8);
    val.f4 = decoder.decodeStruct(codec.Int8);
    decoder.skip(1);
    val.f5 = decoder.decodeStruct(codec.Int16);
    val.f6 = decoder.decodeStruct(codec.Int16);
    val.f7 = decoder.decodeStruct(codec.Int16);
    val.f8 = decoder.decodeStruct(codec.Int16);
    val.f9 = decoder.decodeStruct(codec.Int16);
    val.f10 = decoder.decodeStruct(codec.Int32);
    val.f11 = decoder.decodeStruct(codec.Int32);
    val.f12 = decoder.decodeStruct(codec.Int32);
    val.f13 = decoder.decodeStruct(codec.Int32);
    val.f14 = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.f15 = decoder.decodeStruct(codec.Int64);
    val.f16 = decoder.decodeStruct(codec.Int64);
    val.f17 = decoder.decodeStruct(codec.Int64);
    val.f18 = decoder.decodeStruct(codec.Int64);
    val.f19 = decoder.decodeStruct(codec.Int64);
    return val;
  };

  IntegerNumberValues.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IntegerNumberValues.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int8, val.f0);
    encoder.encodeStruct(codec.Int8, val.f1);
    encoder.encodeStruct(codec.Int8, val.f2);
    encoder.encodeStruct(codec.Int8, val.f3);
    encoder.encodeStruct(codec.Int8, val.f4);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int16, val.f5);
    encoder.encodeStruct(codec.Int16, val.f6);
    encoder.encodeStruct(codec.Int16, val.f7);
    encoder.encodeStruct(codec.Int16, val.f8);
    encoder.encodeStruct(codec.Int16, val.f9);
    encoder.encodeStruct(codec.Int32, val.f10);
    encoder.encodeStruct(codec.Int32, val.f11);
    encoder.encodeStruct(codec.Int32, val.f12);
    encoder.encodeStruct(codec.Int32, val.f13);
    encoder.encodeStruct(codec.Int32, val.f14);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int64, val.f15);
    encoder.encodeStruct(codec.Int64, val.f16);
    encoder.encodeStruct(codec.Int64, val.f17);
    encoder.encodeStruct(codec.Int64, val.f18);
    encoder.encodeStruct(codec.Int64, val.f19);
  };

  function UnsignedNumberValues(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UnsignedNumberValues.V0 = 0;
  UnsignedNumberValues.V1 = 42;
  UnsignedNumberValues.V2 = 255;
  UnsignedNumberValues.V3 = 0;
  UnsignedNumberValues.V4 = 12345;
  UnsignedNumberValues.V5 = 65535;
  UnsignedNumberValues.V6 = 0;
  UnsignedNumberValues.V7 = 1234567890;
  UnsignedNumberValues.V8 = 4294967295;
  UnsignedNumberValues.V9 = 0;
  UnsignedNumberValues.V10 = 1234567890123456;
  UnsignedNumberValues.V11 = 9007199254740991;
  UnsignedNumberValues.prototype.initDefaults_ = function() {
    this.f0 = UnsignedNumberValues.V0;
    this.f1 = UnsignedNumberValues.V1;
    this.f2 = UnsignedNumberValues.V2;
    this.f3 = UnsignedNumberValues.V3;
    this.f4 = UnsignedNumberValues.V4;
    this.f5 = UnsignedNumberValues.V5;
    this.f6 = UnsignedNumberValues.V6;
    this.f7 = UnsignedNumberValues.V7;
    this.f8 = UnsignedNumberValues.V8;
    this.f9 = UnsignedNumberValues.V9;
    this.f10 = UnsignedNumberValues.V10;
    this.f11 = UnsignedNumberValues.V11;
  };
  UnsignedNumberValues.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UnsignedNumberValues.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, UnsignedNumberValues.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;













    return validator.validationError.NONE;
  };

  UnsignedNumberValues.encodedSize = codec.kStructHeaderSize + 48;

  UnsignedNumberValues.decode = function(decoder) {
    var packed;
    var val = new UnsignedNumberValues();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f0 = decoder.decodeStruct(codec.Uint8);
    val.f1 = decoder.decodeStruct(codec.Uint8);
    val.f2 = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    val.f3 = decoder.decodeStruct(codec.Uint16);
    val.f4 = decoder.decodeStruct(codec.Uint16);
    val.f5 = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    val.f6 = decoder.decodeStruct(codec.Uint32);
    val.f7 = decoder.decodeStruct(codec.Uint32);
    val.f8 = decoder.decodeStruct(codec.Uint32);
    val.f9 = decoder.decodeStruct(codec.Uint64);
    val.f10 = decoder.decodeStruct(codec.Uint64);
    val.f11 = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  UnsignedNumberValues.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UnsignedNumberValues.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.f0);
    encoder.encodeStruct(codec.Uint8, val.f1);
    encoder.encodeStruct(codec.Uint8, val.f2);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint16, val.f3);
    encoder.encodeStruct(codec.Uint16, val.f4);
    encoder.encodeStruct(codec.Uint16, val.f5);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.f6);
    encoder.encodeStruct(codec.Uint32, val.f7);
    encoder.encodeStruct(codec.Uint32, val.f8);
    encoder.encodeStruct(codec.Uint64, val.f9);
    encoder.encodeStruct(codec.Uint64, val.f10);
    encoder.encodeStruct(codec.Uint64, val.f11);
  };

  function BitArrayValues(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BitArrayValues.prototype.initDefaults_ = function() {
    this.f0 = null;
    this.f1 = null;
    this.f2 = null;
    this.f3 = null;
    this.f4 = null;
    this.f5 = null;
    this.f6 = null;
  };
  BitArrayValues.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BitArrayValues.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, BitArrayValues.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate BitArrayValues.f0
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.PackedBool, false, [1], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate BitArrayValues.f1
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.PackedBool, false, [7], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate BitArrayValues.f2
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.PackedBool, false, [9], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate BitArrayValues.f3
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 1, codec.PackedBool, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate BitArrayValues.f4
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.ArrayOf(codec.PackedBool), false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate BitArrayValues.f5
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 8, new codec.NullableArrayOf(codec.PackedBool), false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate BitArrayValues.f6
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 48, 8, new codec.NullableArrayOf(codec.PackedBool, 2), false, [0, 2], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BitArrayValues.encodedSize = codec.kStructHeaderSize + 56;

  BitArrayValues.decode = function(decoder) {
    var packed;
    var val = new BitArrayValues();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f0 = decoder.decodeArrayPointer(codec.PackedBool);
    val.f1 = decoder.decodeArrayPointer(codec.PackedBool);
    val.f2 = decoder.decodeArrayPointer(codec.PackedBool);
    val.f3 = decoder.decodeArrayPointer(codec.PackedBool);
    val.f4 = decoder.decodeArrayPointer(new codec.ArrayOf(codec.PackedBool));
    val.f5 = decoder.decodeArrayPointer(new codec.NullableArrayOf(codec.PackedBool));
    val.f6 = decoder.decodeArrayPointer(new codec.NullableArrayOf(codec.PackedBool, 2));
    return val;
  };

  BitArrayValues.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BitArrayValues.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.PackedBool, val.f0);
    encoder.encodeArrayPointer(codec.PackedBool, val.f1);
    encoder.encodeArrayPointer(codec.PackedBool, val.f2);
    encoder.encodeArrayPointer(codec.PackedBool, val.f3);
    encoder.encodeArrayPointer(new codec.ArrayOf(codec.PackedBool), val.f4);
    encoder.encodeArrayPointer(new codec.NullableArrayOf(codec.PackedBool), val.f5);
    encoder.encodeArrayPointer(new codec.NullableArrayOf(codec.PackedBool, 2), val.f6);
  };

  function MultiVersionStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MultiVersionStruct.prototype.initDefaults_ = function() {
    this.f_int32 = 0;
    this.f_message_pipe = null;
    this.f_rect = null;
    this.f_string = null;
    this.f_array = null;
    this.f_bool = false;
    this.f_int16 = 0;
  };
  MultiVersionStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MultiVersionStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MultiVersionStruct.encodedSize, 9);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate MultiVersionStruct.f_message_pipe
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MultiVersionStruct.f_rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, rect$.Rect, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MultiVersionStruct.f_string
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MultiVersionStruct.f_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 1, codec.Int8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  MultiVersionStruct.encodedSize = codec.kStructHeaderSize + 40;

  MultiVersionStruct.decode = function(decoder) {
    var packed;
    var val = new MultiVersionStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f_int32 = decoder.decodeStruct(codec.Int32);
    val.f_message_pipe = decoder.decodeStruct(codec.NullableHandle);
    val.f_rect = decoder.decodeStructPointer(rect$.Rect);
    val.f_string = decoder.decodeStruct(codec.NullableString);
    val.f_array = decoder.decodeArrayPointer(codec.Int8);
    val.f_bool = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    val.f_int16 = decoder.decodeStruct(codec.Int16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MultiVersionStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MultiVersionStruct.encodedSize);
    encoder.writeUint32(9);
    encoder.encodeStruct(codec.Int32, val.f_int32);
    encoder.encodeStruct(codec.NullableHandle, val.f_message_pipe);
    encoder.encodeStructPointer(rect$.Rect, val.f_rect);
    encoder.encodeStruct(codec.NullableString, val.f_string);
    encoder.encodeArrayPointer(codec.Int8, val.f_array);
    encoder.encodeStruct(codec.Uint8, val.f_bool);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int16, val.f_int16);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function MultiVersionStructV0(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MultiVersionStructV0.prototype.initDefaults_ = function() {
    this.f_int32 = 0;
  };
  MultiVersionStructV0.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MultiVersionStructV0.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MultiVersionStructV0.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  MultiVersionStructV0.encodedSize = codec.kStructHeaderSize + 8;

  MultiVersionStructV0.decode = function(decoder) {
    var packed;
    var val = new MultiVersionStructV0();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f_int32 = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MultiVersionStructV0.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MultiVersionStructV0.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.f_int32);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function MultiVersionStructV1(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MultiVersionStructV1.prototype.initDefaults_ = function() {
    this.f_int32 = 0;
    this.f_rect = null;
  };
  MultiVersionStructV1.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MultiVersionStructV1.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MultiVersionStructV1.encodedSize, 1);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate MultiVersionStructV1.f_rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, rect$.Rect, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MultiVersionStructV1.encodedSize = codec.kStructHeaderSize + 16;

  MultiVersionStructV1.decode = function(decoder) {
    var packed;
    var val = new MultiVersionStructV1();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f_int32 = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.f_rect = decoder.decodeStructPointer(rect$.Rect);
    return val;
  };

  MultiVersionStructV1.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MultiVersionStructV1.encodedSize);
    encoder.writeUint32(1);
    encoder.encodeStruct(codec.Int32, val.f_int32);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(rect$.Rect, val.f_rect);
  };

  function MultiVersionStructV3(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MultiVersionStructV3.prototype.initDefaults_ = function() {
    this.f_int32 = 0;
    this.f_rect = null;
    this.f_string = null;
  };
  MultiVersionStructV3.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MultiVersionStructV3.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MultiVersionStructV3.encodedSize, 3);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate MultiVersionStructV3.f_rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, rect$.Rect, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MultiVersionStructV3.f_string
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MultiVersionStructV3.encodedSize = codec.kStructHeaderSize + 24;

  MultiVersionStructV3.decode = function(decoder) {
    var packed;
    var val = new MultiVersionStructV3();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f_int32 = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.f_rect = decoder.decodeStructPointer(rect$.Rect);
    val.f_string = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  MultiVersionStructV3.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MultiVersionStructV3.encodedSize);
    encoder.writeUint32(3);
    encoder.encodeStruct(codec.Int32, val.f_int32);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(rect$.Rect, val.f_rect);
    encoder.encodeStruct(codec.NullableString, val.f_string);
  };

  function MultiVersionStructV5(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MultiVersionStructV5.prototype.initDefaults_ = function() {
    this.f_int32 = 0;
    this.f_rect = null;
    this.f_string = null;
    this.f_array = null;
  };
  MultiVersionStructV5.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MultiVersionStructV5.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MultiVersionStructV5.encodedSize, 5);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate MultiVersionStructV5.f_rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, rect$.Rect, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MultiVersionStructV5.f_string
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MultiVersionStructV5.f_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 1, codec.Int8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MultiVersionStructV5.encodedSize = codec.kStructHeaderSize + 32;

  MultiVersionStructV5.decode = function(decoder) {
    var packed;
    var val = new MultiVersionStructV5();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f_int32 = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.f_rect = decoder.decodeStructPointer(rect$.Rect);
    val.f_string = decoder.decodeStruct(codec.NullableString);
    val.f_array = decoder.decodeArrayPointer(codec.Int8);
    return val;
  };

  MultiVersionStructV5.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MultiVersionStructV5.encodedSize);
    encoder.writeUint32(5);
    encoder.encodeStruct(codec.Int32, val.f_int32);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(rect$.Rect, val.f_rect);
    encoder.encodeStruct(codec.NullableString, val.f_string);
    encoder.encodeArrayPointer(codec.Int8, val.f_array);
  };

  function MultiVersionStructV7(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MultiVersionStructV7.prototype.initDefaults_ = function() {
    this.f_int32 = 0;
    this.f_message_pipe = null;
    this.f_rect = null;
    this.f_string = null;
    this.f_array = null;
    this.f_bool = false;
  };
  MultiVersionStructV7.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MultiVersionStructV7.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MultiVersionStructV7.encodedSize, 7);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate MultiVersionStructV7.f_message_pipe
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MultiVersionStructV7.f_rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, rect$.Rect, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MultiVersionStructV7.f_string
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MultiVersionStructV7.f_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 1, codec.Int8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  MultiVersionStructV7.encodedSize = codec.kStructHeaderSize + 40;

  MultiVersionStructV7.decode = function(decoder) {
    var packed;
    var val = new MultiVersionStructV7();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f_int32 = decoder.decodeStruct(codec.Int32);
    val.f_message_pipe = decoder.decodeStruct(codec.NullableHandle);
    val.f_rect = decoder.decodeStructPointer(rect$.Rect);
    val.f_string = decoder.decodeStruct(codec.NullableString);
    val.f_array = decoder.decodeArrayPointer(codec.Int8);
    val.f_bool = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MultiVersionStructV7.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MultiVersionStructV7.encodedSize);
    encoder.writeUint32(7);
    encoder.encodeStruct(codec.Int32, val.f_int32);
    encoder.encodeStruct(codec.NullableHandle, val.f_message_pipe);
    encoder.encodeStructPointer(rect$.Rect, val.f_rect);
    encoder.encodeStruct(codec.NullableString, val.f_string);
    encoder.encodeArrayPointer(codec.Int8, val.f_array);
    encoder.encodeStruct(codec.Uint8, val.f_bool);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ContainsInterface(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContainsInterface.prototype.initDefaults_ = function() {
    this.some_interface = null;
  };
  ContainsInterface.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContainsInterface.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContainsInterface.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContainsInterface.some_interface
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContainsInterface.encodedSize = codec.kStructHeaderSize + 8;

  ContainsInterface.decode = function(decoder) {
    var packed;
    var val = new ContainsInterface();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.some_interface = decoder.decodeStruct(codec.Interface);
    return val;
  };

  ContainsInterface.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContainsInterface.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Interface, val.some_interface);
  };

  function ContainsOther(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContainsOther.prototype.initDefaults_ = function() {
    this.other = 0;
  };
  ContainsOther.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContainsOther.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContainsOther.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ContainsOther.encodedSize = codec.kStructHeaderSize + 8;

  ContainsOther.decode = function(decoder) {
    var packed;
    var val = new ContainsOther();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.other = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ContainsOther.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContainsOther.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.other);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ContainsInterfaceRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContainsInterfaceRequest.prototype.initDefaults_ = function() {
    this.req = null;
    this.nullable_req = null;
  };
  ContainsInterfaceRequest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContainsInterfaceRequest.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContainsInterfaceRequest.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContainsInterfaceRequest.req
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContainsInterfaceRequest.nullable_req
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContainsInterfaceRequest.encodedSize = codec.kStructHeaderSize + 8;

  ContainsInterfaceRequest.decode = function(decoder) {
    var packed;
    var val = new ContainsInterfaceRequest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.req = decoder.decodeStruct(codec.Handle);
    val.nullable_req = decoder.decodeStruct(codec.Handle);
    return val;
  };

  ContainsInterfaceRequest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContainsInterfaceRequest.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.req);
    encoder.encodeStruct(codec.Handle, val.nullable_req);
  };

  function DartKeywordStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  DartKeywordStruct.Keywords = {};
  DartKeywordStruct.Keywords.AWAIT = 0;
  DartKeywordStruct.Keywords.IS = DartKeywordStruct.Keywords.AWAIT + 1;
  DartKeywordStruct.Keywords.RETHROW = DartKeywordStruct.Keywords.IS + 1;

  DartKeywordStruct.prototype.initDefaults_ = function() {
    this.await = 0;
    this.is = 0;
    this.rethrow = 0;
  };
  DartKeywordStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DartKeywordStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, DartKeywordStruct.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  DartKeywordStruct.encodedSize = codec.kStructHeaderSize + 16;

  DartKeywordStruct.decode = function(decoder) {
    var packed;
    var val = new DartKeywordStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.await = decoder.decodeStruct(codec.Int32);
    val.is = decoder.decodeStruct(codec.Int32);
    val.rethrow = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DartKeywordStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DartKeywordStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.await);
    encoder.encodeStruct(codec.Int32, val.is);
    encoder.encodeStruct(codec.Int32, val.rethrow);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function SomeInterface_SomeMethod_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SomeInterface_SomeMethod_Params.prototype.initDefaults_ = function() {
    this.pair = null;
  };
  SomeInterface_SomeMethod_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SomeInterface_SomeMethod_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SomeInterface_SomeMethod_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SomeInterface_SomeMethod_Params.pair
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, RectPair, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SomeInterface_SomeMethod_Params.encodedSize = codec.kStructHeaderSize + 8;

  SomeInterface_SomeMethod_Params.decode = function(decoder) {
    var packed;
    var val = new SomeInterface_SomeMethod_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pair = decoder.decodeStructPointer(RectPair);
    return val;
  };

  SomeInterface_SomeMethod_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SomeInterface_SomeMethod_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(RectPair, val.pair);
  };

  function SomeInterface_SomeMethod_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SomeInterface_SomeMethod_ResponseParams.prototype.initDefaults_ = function() {
    this.other_pair = null;
  };
  SomeInterface_SomeMethod_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SomeInterface_SomeMethod_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SomeInterface_SomeMethod_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SomeInterface_SomeMethod_ResponseParams.other_pair
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, RectPair, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SomeInterface_SomeMethod_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  SomeInterface_SomeMethod_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SomeInterface_SomeMethod_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.other_pair = decoder.decodeStructPointer(RectPair);
    return val;
  };

  SomeInterface_SomeMethod_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SomeInterface_SomeMethod_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(RectPair, val.other_pair);
  };


  function UnionOfStructs(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  UnionOfStructs.Tags = {
    nr: 0,
    a_nr: 1,
    a_rp: 2,
    m_ndfv: 3,
    m_hs: 4,
  };
  
  UnionOfStructs.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  UnionOfStructs.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }
  
    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }
  
    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }
  
    var fields = [
        "nr",
        "a_nr",
        "a_rp",
        "m_ndfv",
        "m_hs",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a UnionOfStructs member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(UnionOfStructs.prototype, "nr", {
    get: function() {
      if (this.$tag != UnionOfStructs.Tags.nr) {
        throw new ReferenceError(
            "UnionOfStructs.nr is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionOfStructs.Tags.nr;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionOfStructs.prototype, "a_nr", {
    get: function() {
      if (this.$tag != UnionOfStructs.Tags.a_nr) {
        throw new ReferenceError(
            "UnionOfStructs.a_nr is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionOfStructs.Tags.a_nr;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionOfStructs.prototype, "a_rp", {
    get: function() {
      if (this.$tag != UnionOfStructs.Tags.a_rp) {
        throw new ReferenceError(
            "UnionOfStructs.a_rp is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionOfStructs.Tags.a_rp;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionOfStructs.prototype, "m_ndfv", {
    get: function() {
      if (this.$tag != UnionOfStructs.Tags.m_ndfv) {
        throw new ReferenceError(
            "UnionOfStructs.m_ndfv is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionOfStructs.Tags.m_ndfv;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionOfStructs.prototype, "m_hs", {
    get: function() {
      if (this.$tag != UnionOfStructs.Tags.m_hs) {
        throw new ReferenceError(
            "UnionOfStructs.m_hs is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionOfStructs.Tags.m_hs;
      this.$data = value;
    }
  });
  
  
    UnionOfStructs.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }
    
      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case UnionOfStructs.Tags.nr:
          encoder.encodeStructPointer(NamedRegion, val.nr);
          break;
        case UnionOfStructs.Tags.a_nr:
          encoder.encodeArrayPointer(new codec.PointerTo(NamedRegion), val.a_nr);
          break;
        case UnionOfStructs.Tags.a_rp:
          encoder.encodeArrayPointer(new codec.PointerTo(RectPair), val.a_rp);
          break;
        case UnionOfStructs.Tags.m_ndfv:
          encoder.encodeMapPointer(codec.Int64, new codec.PointerTo(NoDefaultFieldValues), val.m_ndfv);
          break;
        case UnionOfStructs.Tags.m_hs:
          encoder.encodeMapPointer(codec.Int64, new codec.PointerTo(HandleStruct), val.m_hs);
          break;
      }
      encoder.align();
    };
  
  
    UnionOfStructs.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new UnionOfStructs();
      var tag = decoder.readUint32();
      switch (tag) {
        case UnionOfStructs.Tags.nr:
          result.nr = decoder.decodeStructPointer(NamedRegion);
          break;
        case UnionOfStructs.Tags.a_nr:
          result.a_nr = decoder.decodeArrayPointer(new codec.PointerTo(NamedRegion));
          break;
        case UnionOfStructs.Tags.a_rp:
          result.a_rp = decoder.decodeArrayPointer(new codec.PointerTo(RectPair));
          break;
        case UnionOfStructs.Tags.m_ndfv:
          result.m_ndfv = decoder.decodeMapPointer(codec.Int64, new codec.PointerTo(NoDefaultFieldValues));
          break;
        case UnionOfStructs.Tags.m_hs:
          result.m_hs = decoder.decodeMapPointer(codec.Int64, new codec.PointerTo(HandleStruct));
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    UnionOfStructs.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case UnionOfStructs.Tags.nr:
          
    
    // validate UnionOfStructs.nr
    err = messageValidator.validateStructPointer(data_offset, NamedRegion, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionOfStructs.Tags.a_nr:
          
    
    // validate UnionOfStructs.a_nr
    err = messageValidator.validateArrayPointer(data_offset, 8, new codec.PointerTo(NamedRegion), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionOfStructs.Tags.a_rp:
          
    
    // validate UnionOfStructs.a_rp
    err = messageValidator.validateArrayPointer(data_offset, 8, new codec.PointerTo(RectPair), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionOfStructs.Tags.m_ndfv:
          
    
    // validate UnionOfStructs.m_ndfv
    err = messageValidator.validateMapPointer(data_offset, false, codec.Int64, new codec.PointerTo(NoDefaultFieldValues), false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionOfStructs.Tags.m_hs:
          
    
    // validate UnionOfStructs.m_hs
    err = messageValidator.validateMapPointer(data_offset, false, codec.Int64, new codec.PointerTo(HandleStruct), false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  UnionOfStructs.encodedSize = 16;
  var kSomeInterface_SomeMethod_Name = 0;

  function SomeInterfaceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  SomeInterfaceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  SomeInterfaceProxy.prototype.someMethod = function(pair) {
    var params = new SomeInterface_SomeMethod_Params();
    params.pair = pair;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kSomeInterface_SomeMethod_Name,
          codec.align(SomeInterface_SomeMethod_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SomeInterface_SomeMethod_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SomeInterface_SomeMethod_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function SomeInterfaceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  SomeInterfaceStub.prototype = Object.create(bindings.StubBase.prototype);
  SomeInterfaceStub.prototype.someMethod = function(pair) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.someMethod && bindings.StubBindings(this).delegate.someMethod(pair);
  }

  SomeInterfaceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  SomeInterfaceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSomeInterface_SomeMethod_Name:
      var params = reader.decodeStruct(SomeInterface_SomeMethod_Params);
      return this.someMethod(params.pair).then(function(response) {
        var responseParams =
            new SomeInterface_SomeMethod_ResponseParams();
        responseParams.other_pair = response.other_pair;
        var builder = new codec.MessageWithRequestIDBuilder(
            kSomeInterface_SomeMethod_Name,
            codec.align(SomeInterface_SomeMethod_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SomeInterface_SomeMethod_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateSomeInterfaceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSomeInterface_SomeMethod_Name:
        if (message.expectsResponse())
          paramsClass = SomeInterface_SomeMethod_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSomeInterfaceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kSomeInterface_SomeMethod_Name:
        if (message.isResponse())
          paramsClass = SomeInterface_SomeMethod_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var SomeInterface = {
    name: null,
    proxyClass: SomeInterfaceProxy,
    stubClass: SomeInterfaceStub,
    validateRequest: validateSomeInterfaceRequest,
    validateResponse: validateSomeInterfaceResponse,
  };
  SomeInterfaceStub.prototype.validator = validateSomeInterfaceRequest;
  SomeInterfaceProxy.prototype.validator = validateSomeInterfaceResponse;


  var exports = {};
  exports.StructOfStructs = StructOfStructs;
  exports.NamedRegion = NamedRegion;
  exports.RectPair = RectPair;
  exports.EmptyStruct = EmptyStruct;
  exports.HandleStruct = HandleStruct;
  exports.NullableHandleStruct = NullableHandleStruct;
  exports.NoDefaultFieldValues = NoDefaultFieldValues;
  exports.DefaultFieldValues = DefaultFieldValues;
  exports.ScopedConstants = ScopedConstants;
  exports.MapKeyTypes = MapKeyTypes;
  exports.MapValueTypes = MapValueTypes;
  exports.ArrayValueTypes = ArrayValueTypes;
  exports.FloatNumberValues = FloatNumberValues;
  exports.IntegerNumberValues = IntegerNumberValues;
  exports.UnsignedNumberValues = UnsignedNumberValues;
  exports.BitArrayValues = BitArrayValues;
  exports.MultiVersionStruct = MultiVersionStruct;
  exports.MultiVersionStructV0 = MultiVersionStructV0;
  exports.MultiVersionStructV1 = MultiVersionStructV1;
  exports.MultiVersionStructV3 = MultiVersionStructV3;
  exports.MultiVersionStructV5 = MultiVersionStructV5;
  exports.MultiVersionStructV7 = MultiVersionStructV7;
  exports.ContainsInterface = ContainsInterface;
  exports.ContainsOther = ContainsOther;
  exports.ContainsInterfaceRequest = ContainsInterfaceRequest;
  exports.DartKeywordStruct = DartKeywordStruct;
  exports.UnionOfStructs = UnionOfStructs;
  exports.SomeInterface = SomeInterface;


  return exports;
});
