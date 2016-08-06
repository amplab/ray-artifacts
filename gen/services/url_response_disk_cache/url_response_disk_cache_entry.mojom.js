// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("services/url_response_disk_cache/url_response_disk_cache_entry.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/network/url_response.mojom",
], function(bindings, codec, connection, core, validator, url_response$) {

  function CacheKey(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheKey.prototype.initDefaults_ = function() {
    this.request_origin = null;
    this.url = null;
    this.timestamp = 0;
  };
  CacheKey.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheKey.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CacheKey.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate CacheKey.request_origin
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate CacheKey.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CacheKey.encodedSize = codec.kStructHeaderSize + 24;

  CacheKey.decode = function(decoder) {
    var packed;
    var val = new CacheKey();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request_origin = decoder.decodeStruct(codec.String);
    val.url = decoder.decodeStruct(codec.String);
    val.timestamp = decoder.decodeStruct(codec.Int64);
    return val;
  };

  CacheKey.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheKey.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.request_origin);
    encoder.encodeStruct(codec.String, val.url);
    encoder.encodeStruct(codec.Int64, val.timestamp);
  };

  function CacheEntry(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CacheEntry.prototype.initDefaults_ = function() {
    this.response = null;
    this.entry_directory = null;
    this.response_body_path = null;
    this.last_invalidation = 0;
  };
  CacheEntry.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CacheEntry.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CacheEntry.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate CacheEntry.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url_response$.URLResponse, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate CacheEntry.entry_directory
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate CacheEntry.response_body_path
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CacheEntry.encodedSize = codec.kStructHeaderSize + 32;

  CacheEntry.decode = function(decoder) {
    var packed;
    var val = new CacheEntry();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(url_response$.URLResponse);
    val.entry_directory = decoder.decodeStruct(codec.String);
    val.response_body_path = decoder.decodeStruct(codec.String);
    val.last_invalidation = decoder.decodeStruct(codec.Int64);
    return val;
  };

  CacheEntry.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CacheEntry.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url_response$.URLResponse, val.response);
    encoder.encodeStruct(codec.String, val.entry_directory);
    encoder.encodeStruct(codec.String, val.response_body_path);
    encoder.encodeStruct(codec.Int64, val.last_invalidation);
  };


  var exports = {};
  exports.CacheKey = CacheKey;
  exports.CacheEntry = CacheEntry;


  return exports;
});
