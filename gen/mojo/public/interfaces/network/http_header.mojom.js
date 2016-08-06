// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/network/http_header.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function HttpHeader(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpHeader.prototype.initDefaults_ = function() {
    this.name = null;
    this.value = null;
  };
  HttpHeader.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpHeader.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpHeader.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpHeader.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpHeader.value
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpHeader.encodedSize = codec.kStructHeaderSize + 16;

  HttpHeader.decode = function(decoder) {
    var packed;
    var val = new HttpHeader();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    val.value = decoder.decodeStruct(codec.String);
    return val;
  };

  HttpHeader.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpHeader.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.value);
  };


  var exports = {};
  exports.HttpHeader = HttpHeader;


  return exports;
});
