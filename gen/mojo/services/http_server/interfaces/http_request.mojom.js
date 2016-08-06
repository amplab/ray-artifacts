// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/http_server/interfaces/http_request.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function HttpRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpRequest.prototype.initDefaults_ = function() {
    this.relative_url = null;
    this.method = "GET";
    this.headers = null;
    this.body = null;
  };
  HttpRequest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpRequest.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpRequest.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpRequest.relative_url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpRequest.method
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpRequest.headers
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 16, true, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpRequest.body
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpRequest.encodedSize = codec.kStructHeaderSize + 32;

  HttpRequest.decode = function(decoder) {
    var packed;
    var val = new HttpRequest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.relative_url = decoder.decodeStruct(codec.String);
    val.method = decoder.decodeStruct(codec.String);
    val.headers = decoder.decodeMapPointer(codec.String, codec.String);
    val.body = decoder.decodeStruct(codec.NullableHandle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HttpRequest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpRequest.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.relative_url);
    encoder.encodeStruct(codec.String, val.method);
    encoder.encodeMapPointer(codec.String, codec.String, val.headers);
    encoder.encodeStruct(codec.NullableHandle, val.body);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };


  var exports = {};
  exports.HttpRequest = HttpRequest;


  return exports;
});
