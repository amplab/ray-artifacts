// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/serialization_test_structs.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function Struct1(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Struct1.prototype.initDefaults_ = function() {
    this.i = 0;
  };
  Struct1.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Struct1.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Struct1.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Struct1.encodedSize = codec.kStructHeaderSize + 8;

  Struct1.decode = function(decoder) {
    var packed;
    var val = new Struct1();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.i = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Struct1.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Struct1.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.i);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Struct2(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Struct2.prototype.initDefaults_ = function() {
    this.hdl = null;
  };
  Struct2.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Struct2.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Struct2.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Struct2.hdl
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Struct2.encodedSize = codec.kStructHeaderSize + 8;

  Struct2.decode = function(decoder) {
    var packed;
    var val = new Struct2();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hdl = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Struct2.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Struct2.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.hdl);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Struct3(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Struct3.prototype.initDefaults_ = function() {
    this.struct_1 = null;
  };
  Struct3.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Struct3.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Struct3.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Struct3.struct_1
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, Struct1, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Struct3.encodedSize = codec.kStructHeaderSize + 8;

  Struct3.decode = function(decoder) {
    var packed;
    var val = new Struct3();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.struct_1 = decoder.decodeStructPointer(Struct1);
    return val;
  };

  Struct3.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Struct3.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(Struct1, val.struct_1);
  };

  function Struct4(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Struct4.prototype.initDefaults_ = function() {
    this.data = null;
  };
  Struct4.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Struct4.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Struct4.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Struct4.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(Struct1), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Struct4.encodedSize = codec.kStructHeaderSize + 8;

  Struct4.decode = function(decoder) {
    var packed;
    var val = new Struct4();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data = decoder.decodeArrayPointer(new codec.PointerTo(Struct1));
    return val;
  };

  Struct4.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Struct4.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(Struct1), val.data);
  };

  function Struct5(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Struct5.prototype.initDefaults_ = function() {
    this.pair = null;
  };
  Struct5.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Struct5.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Struct5.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Struct5.pair
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(Struct1), false, [2], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Struct5.encodedSize = codec.kStructHeaderSize + 8;

  Struct5.decode = function(decoder) {
    var packed;
    var val = new Struct5();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pair = decoder.decodeArrayPointer(new codec.PointerTo(Struct1));
    return val;
  };

  Struct5.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Struct5.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(Struct1), val.pair);
  };

  function Struct6(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Struct6.prototype.initDefaults_ = function() {
    this.str = null;
  };
  Struct6.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Struct6.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Struct6.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Struct6.str
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Struct6.encodedSize = codec.kStructHeaderSize + 8;

  Struct6.decode = function(decoder) {
    var packed;
    var val = new Struct6();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.str = decoder.decodeStruct(codec.String);
    return val;
  };

  Struct6.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Struct6.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.str);
  };

  function StructOfNullables(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructOfNullables.prototype.initDefaults_ = function() {
    this.hdl = null;
    this.struct_1 = null;
    this.str = null;
  };
  StructOfNullables.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructOfNullables.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructOfNullables.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructOfNullables.hdl
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructOfNullables.struct_1
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, Struct1, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructOfNullables.str
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructOfNullables.encodedSize = codec.kStructHeaderSize + 24;

  StructOfNullables.decode = function(decoder) {
    var packed;
    var val = new StructOfNullables();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hdl = decoder.decodeStruct(codec.NullableHandle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.struct_1 = decoder.decodeStructPointer(Struct1);
    val.str = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  StructOfNullables.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructOfNullables.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableHandle, val.hdl);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(Struct1, val.struct_1);
    encoder.encodeStruct(codec.NullableString, val.str);
  };


  var exports = {};
  exports.Struct1 = Struct1;
  exports.Struct2 = Struct2;
  exports.Struct3 = Struct3;
  exports.Struct4 = Struct4;
  exports.Struct5 = Struct5;
  exports.Struct6 = Struct6;
  exports.StructOfNullables = StructOfNullables;


  return exports;
});