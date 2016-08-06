// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/log/interfaces/entry.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {
  var kLogLevelVerbose = -1;
  var kLogLevelInfo = 0;
  var kLogLevelWarning = 1;
  var kLogLevelError = 2;
  var kLogLevelFatal = 3;

  function Entry(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Entry.prototype.initDefaults_ = function() {
    this.timestamp = 0;
    this.log_level = 0;
    this.source_line = 0;
    this.message = null;
    this.source_file = null;
  };
  Entry.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Entry.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Entry.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;




    
    // validate Entry.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Entry.source_file
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Entry.encodedSize = codec.kStructHeaderSize + 32;

  Entry.decode = function(decoder) {
    var packed;
    var val = new Entry();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.timestamp = decoder.decodeStruct(codec.Int64);
    val.log_level = decoder.decodeStruct(codec.Int32);
    val.source_line = decoder.decodeStruct(codec.Uint32);
    val.message = decoder.decodeStruct(codec.NullableString);
    val.source_file = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  Entry.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Entry.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.timestamp);
    encoder.encodeStruct(codec.Int32, val.log_level);
    encoder.encodeStruct(codec.Uint32, val.source_line);
    encoder.encodeStruct(codec.NullableString, val.message);
    encoder.encodeStruct(codec.NullableString, val.source_file);
  };


  var exports = {};
  exports.kLogLevelVerbose = kLogLevelVerbose;
  exports.kLogLevelInfo = kLogLevelInfo;
  exports.kLogLevelWarning = kLogLevelWarning;
  exports.kLogLevelError = kLogLevelError;
  exports.kLogLevelFatal = kLogLevelFatal;
  exports.Entry = Entry;


  return exports;
});
