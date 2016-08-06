// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("examples/serialization/serialization.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function MyStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MyStruct.prototype.initDefaults_ = function() {
    this.a = 0;
    this.b = 0;
    this.c = null;
  };
  MyStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MyStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MyStruct.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate MyStruct.c
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MyStruct.encodedSize = codec.kStructHeaderSize + 16;

  MyStruct.decode = function(decoder) {
    var packed;
    var val = new MyStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStruct(codec.Int32);
    val.b = decoder.decodeStruct(codec.Float);
    val.c = decoder.decodeStruct(codec.String);
    return val;
  };

  MyStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MyStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.a);
    encoder.encodeStruct(codec.Float, val.b);
    encoder.encodeStruct(codec.String, val.c);
  };


  var exports = {};
  exports.MyStruct = MyStruct;


  return exports;
});
