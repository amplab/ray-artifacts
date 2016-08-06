// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/network/url_response.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/network/http_header.mojom",
    "mojo/public/interfaces/network/network_error.mojom",
], function(bindings, codec, connection, core, validator, http_header$, network_error$) {

  function URLResponse(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLResponse.prototype.initDefaults_ = function() {
    this.error = null;
    this.body = null;
    this.status_code = 0;
    this.url = null;
    this.status_line = null;
    this.headers = null;
    this.mime_type = null;
    this.charset = null;
    this.redirect_method = null;
    this.redirect_url = null;
    this.redirect_referrer = null;
  };
  URLResponse.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLResponse.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLResponse.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponse.error
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_error$.NetworkError, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponse.body
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate URLResponse.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponse.status_line
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponse.headers
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(http_header$.HttpHeader), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponse.mime_type
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponse.charset
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponse.redirect_method
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponse.redirect_url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 64, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponse.redirect_referrer
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 72, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLResponse.encodedSize = codec.kStructHeaderSize + 80;

  URLResponse.decode = function(decoder) {
    var packed;
    var val = new URLResponse();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStructPointer(network_error$.NetworkError);
    val.body = decoder.decodeStruct(codec.NullableHandle);
    val.status_code = decoder.decodeStruct(codec.Uint32);
    val.url = decoder.decodeStruct(codec.NullableString);
    val.status_line = decoder.decodeStruct(codec.NullableString);
    val.headers = decoder.decodeArrayPointer(new codec.PointerTo(http_header$.HttpHeader));
    val.mime_type = decoder.decodeStruct(codec.NullableString);
    val.charset = decoder.decodeStruct(codec.NullableString);
    val.redirect_method = decoder.decodeStruct(codec.NullableString);
    val.redirect_url = decoder.decodeStruct(codec.NullableString);
    val.redirect_referrer = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  URLResponse.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLResponse.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_error$.NetworkError, val.error);
    encoder.encodeStruct(codec.NullableHandle, val.body);
    encoder.encodeStruct(codec.Uint32, val.status_code);
    encoder.encodeStruct(codec.NullableString, val.url);
    encoder.encodeStruct(codec.NullableString, val.status_line);
    encoder.encodeArrayPointer(new codec.PointerTo(http_header$.HttpHeader), val.headers);
    encoder.encodeStruct(codec.NullableString, val.mime_type);
    encoder.encodeStruct(codec.NullableString, val.charset);
    encoder.encodeStruct(codec.NullableString, val.redirect_method);
    encoder.encodeStruct(codec.NullableString, val.redirect_url);
    encoder.encodeStruct(codec.NullableString, val.redirect_referrer);
  };


  var exports = {};
  exports.URLResponse = URLResponse;


  return exports;
});
