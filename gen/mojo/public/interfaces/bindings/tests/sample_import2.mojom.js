// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/sample_import2.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/bindings/tests/sample_import.mojom",
], function(bindings, codec, connection, core, validator, sample_import$) {
  var Color = {};
  Color.RED = 0;
  Color.BLACK = Color.RED + 1;

  function Size(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Size.prototype.initDefaults_ = function() {
    this.width = 0;
    this.height = 0;
  };
  Size.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Size.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Size.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  Size.encodedSize = codec.kStructHeaderSize + 8;

  Size.decode = function(decoder) {
    var packed;
    var val = new Size();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.width = decoder.decodeStruct(codec.Int32);
    val.height = decoder.decodeStruct(codec.Int32);
    return val;
  };

  Size.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Size.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.width);
    encoder.encodeStruct(codec.Int32, val.height);
  };

  function Thing(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Thing.prototype.initDefaults_ = function() {
    this.shape = sample_import$.Shape.RECTANGLE;
    this.color = Color.BLACK;
    this.location = null;
    this.size = null;
  };
  Thing.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Thing.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Thing.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate Thing.location
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, sample_import$.Point, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Thing.size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, Size, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Thing.encodedSize = codec.kStructHeaderSize + 24;

  Thing.decode = function(decoder) {
    var packed;
    var val = new Thing();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.shape = decoder.decodeStruct(codec.Int32);
    val.color = decoder.decodeStruct(codec.Int32);
    val.location = decoder.decodeStructPointer(sample_import$.Point);
    val.size = decoder.decodeStructPointer(Size);
    return val;
  };

  Thing.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Thing.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.shape);
    encoder.encodeStruct(codec.Int32, val.color);
    encoder.encodeStructPointer(sample_import$.Point, val.location);
    encoder.encodeStructPointer(Size, val.size);
  };


  var exports = {};
  exports.Color = Color;
  exports.Size = Size;
  exports.Thing = Thing;


  return exports;
});
