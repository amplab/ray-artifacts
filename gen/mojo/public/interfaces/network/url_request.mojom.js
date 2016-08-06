// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/network/url_request.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/network/http_header.mojom",
], function(bindings, codec, connection, core, validator, http_header$) {

  function URLRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  URLRequest.CacheMode = {};
  URLRequest.CacheMode.DEFAULT = 0;
  URLRequest.CacheMode.BYPASS_CACHE = URLRequest.CacheMode.DEFAULT + 1;
  URLRequest.CacheMode.ONLY_FROM_CACHE = URLRequest.CacheMode.BYPASS_CACHE + 1;

  URLRequest.prototype.initDefaults_ = function() {
    this.url = null;
    this.method = "GET";
    this.headers = null;
    this.body = null;
    this.response_body_buffer_size = 0;
    this.auto_follow_redirects = false;
    this.cache_mode = URLRequest.CacheMode.DEFAULT;
  };
  URLRequest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLRequest.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLRequest.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLRequest.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLRequest.method
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLRequest.headers
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(http_header$.HttpHeader), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLRequest.body
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 4, codec.Handle, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  URLRequest.encodedSize = codec.kStructHeaderSize + 48;

  URLRequest.decode = function(decoder) {
    var packed;
    var val = new URLRequest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStruct(codec.String);
    val.method = decoder.decodeStruct(codec.String);
    val.headers = decoder.decodeArrayPointer(new codec.PointerTo(http_header$.HttpHeader));
    val.body = decoder.decodeArrayPointer(codec.Handle);
    val.response_body_buffer_size = decoder.decodeStruct(codec.Uint32);
    val.auto_follow_redirects = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.cache_mode = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  URLRequest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLRequest.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.url);
    encoder.encodeStruct(codec.String, val.method);
    encoder.encodeArrayPointer(new codec.PointerTo(http_header$.HttpHeader), val.headers);
    encoder.encodeArrayPointer(codec.Handle, val.body);
    encoder.encodeStruct(codec.Uint32, val.response_body_buffer_size);
    encoder.encodeStruct(codec.Uint8, val.auto_follow_redirects);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.cache_mode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };


  var exports = {};
  exports.URLRequest = URLRequest;


  return exports;
});
