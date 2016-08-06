// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/interface_control_messages.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {
  var kRunMessageId = 4294967295;
  var kRunOrClosePipeMessageId = 4294967294;

  function RunMessageParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RunMessageParams.prototype.initDefaults_ = function() {
    this.reserved0 = 0;
    this.reserved1 = 0;
    this.query_version = null;
  };
  RunMessageParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RunMessageParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, RunMessageParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate RunMessageParams.query_version
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, QueryVersion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RunMessageParams.encodedSize = codec.kStructHeaderSize + 16;

  RunMessageParams.decode = function(decoder) {
    var packed;
    var val = new RunMessageParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reserved0 = decoder.decodeStruct(codec.Uint32);
    val.reserved1 = decoder.decodeStruct(codec.Uint32);
    val.query_version = decoder.decodeStructPointer(QueryVersion);
    return val;
  };

  RunMessageParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RunMessageParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.reserved0);
    encoder.encodeStruct(codec.Uint32, val.reserved1);
    encoder.encodeStructPointer(QueryVersion, val.query_version);
  };

  function RunResponseMessageParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RunResponseMessageParams.prototype.initDefaults_ = function() {
    this.reserved0 = 0;
    this.reserved1 = 0;
    this.query_version_result = null;
  };
  RunResponseMessageParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RunResponseMessageParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, RunResponseMessageParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate RunResponseMessageParams.query_version_result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, QueryVersionResult, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RunResponseMessageParams.encodedSize = codec.kStructHeaderSize + 16;

  RunResponseMessageParams.decode = function(decoder) {
    var packed;
    var val = new RunResponseMessageParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reserved0 = decoder.decodeStruct(codec.Uint32);
    val.reserved1 = decoder.decodeStruct(codec.Uint32);
    val.query_version_result = decoder.decodeStructPointer(QueryVersionResult);
    return val;
  };

  RunResponseMessageParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RunResponseMessageParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.reserved0);
    encoder.encodeStruct(codec.Uint32, val.reserved1);
    encoder.encodeStructPointer(QueryVersionResult, val.query_version_result);
  };

  function QueryVersion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  QueryVersion.prototype.initDefaults_ = function() {
  };
  QueryVersion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  QueryVersion.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, QueryVersion.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  QueryVersion.encodedSize = codec.kStructHeaderSize + 0;

  QueryVersion.decode = function(decoder) {
    var packed;
    var val = new QueryVersion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  QueryVersion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(QueryVersion.encodedSize);
    encoder.writeUint32(0);
  };

  function QueryVersionResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  QueryVersionResult.prototype.initDefaults_ = function() {
    this.version = 0;
  };
  QueryVersionResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  QueryVersionResult.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, QueryVersionResult.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  QueryVersionResult.encodedSize = codec.kStructHeaderSize + 8;

  QueryVersionResult.decode = function(decoder) {
    var packed;
    var val = new QueryVersionResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.version = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  QueryVersionResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(QueryVersionResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.version);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function RunOrClosePipeMessageParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RunOrClosePipeMessageParams.prototype.initDefaults_ = function() {
    this.reserved0 = 0;
    this.reserved1 = 0;
    this.require_version = null;
  };
  RunOrClosePipeMessageParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RunOrClosePipeMessageParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, RunOrClosePipeMessageParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate RunOrClosePipeMessageParams.require_version
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, RequireVersion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RunOrClosePipeMessageParams.encodedSize = codec.kStructHeaderSize + 16;

  RunOrClosePipeMessageParams.decode = function(decoder) {
    var packed;
    var val = new RunOrClosePipeMessageParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reserved0 = decoder.decodeStruct(codec.Uint32);
    val.reserved1 = decoder.decodeStruct(codec.Uint32);
    val.require_version = decoder.decodeStructPointer(RequireVersion);
    return val;
  };

  RunOrClosePipeMessageParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RunOrClosePipeMessageParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.reserved0);
    encoder.encodeStruct(codec.Uint32, val.reserved1);
    encoder.encodeStructPointer(RequireVersion, val.require_version);
  };

  function RequireVersion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RequireVersion.prototype.initDefaults_ = function() {
    this.version = 0;
  };
  RequireVersion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RequireVersion.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, RequireVersion.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  RequireVersion.encodedSize = codec.kStructHeaderSize + 8;

  RequireVersion.decode = function(decoder) {
    var packed;
    var val = new RequireVersion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.version = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RequireVersion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RequireVersion.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.version);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };


  var exports = {};
  exports.kRunMessageId = kRunMessageId;
  exports.kRunOrClosePipeMessageId = kRunOrClosePipeMessageId;
  exports.RunMessageParams = RunMessageParams;
  exports.RunResponseMessageParams = RunResponseMessageParams;
  exports.QueryVersion = QueryVersion;
  exports.QueryVersionResult = QueryVersionResult;
  exports.RunOrClosePipeMessageParams = RunOrClosePipeMessageParams;
  exports.RequireVersion = RequireVersion;


  return exports;
});
