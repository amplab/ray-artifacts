// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/network/network_error.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function NetworkError(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkError.prototype.initDefaults_ = function() {
    this.code = 0;
    this.description = null;
  };
  NetworkError.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkError.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkError.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate NetworkError.description
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkError.encodedSize = codec.kStructHeaderSize + 16;

  NetworkError.decode = function(decoder) {
    var packed;
    var val = new NetworkError();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.code = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.description = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  NetworkError.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkError.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.code);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.NullableString, val.description);
  };


  var exports = {};
  exports.NetworkError = NetworkError;


  return exports;
});
