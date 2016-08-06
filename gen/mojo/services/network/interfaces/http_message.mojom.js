// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/network/interfaces/http_message.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/network/http_header.mojom",
], function(bindings, codec, connection, core, validator, http_header$) {

  function HttpRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpRequest.prototype.initDefaults_ = function() {
    this.method = "GET";
    this.url = null;
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

    
    // validate HttpRequest.method
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpRequest.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpRequest.headers
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(http_header$.HttpHeader), true, [0], 0);
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
    val.method = decoder.decodeStruct(codec.String);
    val.url = decoder.decodeStruct(codec.String);
    val.headers = decoder.decodeArrayPointer(new codec.PointerTo(http_header$.HttpHeader));
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
    encoder.encodeStruct(codec.String, val.method);
    encoder.encodeStruct(codec.String, val.url);
    encoder.encodeArrayPointer(new codec.PointerTo(http_header$.HttpHeader), val.headers);
    encoder.encodeStruct(codec.NullableHandle, val.body);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function HttpResponse(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpResponse.prototype.initDefaults_ = function() {
    this.status_code = 200;
    this.body = null;
    this.headers = null;
  };
  HttpResponse.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpResponse.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpResponse.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate HttpResponse.body
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpResponse.headers
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(http_header$.HttpHeader), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpResponse.encodedSize = codec.kStructHeaderSize + 16;

  HttpResponse.decode = function(decoder) {
    var packed;
    var val = new HttpResponse();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status_code = decoder.decodeStruct(codec.Uint32);
    val.body = decoder.decodeStruct(codec.NullableHandle);
    val.headers = decoder.decodeArrayPointer(new codec.PointerTo(http_header$.HttpHeader));
    return val;
  };

  HttpResponse.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpResponse.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.status_code);
    encoder.encodeStruct(codec.NullableHandle, val.body);
    encoder.encodeArrayPointer(new codec.PointerTo(http_header$.HttpHeader), val.headers);
  };


  var exports = {};
  exports.HttpRequest = HttpRequest;
  exports.HttpResponse = HttpResponse;


  return exports;
});
