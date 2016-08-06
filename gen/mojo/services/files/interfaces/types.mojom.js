// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/files/interfaces/types.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {
  var kOpenFlagRead = 1;
  var kOpenFlagWrite = 2;
  var kOpenFlagCreate = 4;
  var kOpenFlagExclusive = 8;
  var kOpenFlagAppend = 16;
  var kOpenFlagTruncate = 32;
  var kDeleteFlagFileOnly = 1;
  var kDeleteFlagDirectoryOnly = 2;
  var kDeleteFlagRecursive = 4;
  var Error = {};
  Error.OK = 0;
  Error.UNKNOWN = Error.OK + 1;
  Error.INVALID_ARGUMENT = Error.UNKNOWN + 1;
  Error.PERMISSION_DENIED = Error.INVALID_ARGUMENT + 1;
  Error.OUT_OF_RANGE = Error.PERMISSION_DENIED + 1;
  Error.UNIMPLEMENTED = Error.OUT_OF_RANGE + 1;
  Error.CLOSED = Error.UNIMPLEMENTED + 1;
  Error.UNAVAILABLE = Error.CLOSED + 1;
  Error.INTERNAL = Error.UNAVAILABLE + 1;
  var Whence = {};
  Whence.FROM_CURRENT = 0;
  Whence.FROM_START = Whence.FROM_CURRENT + 1;
  Whence.FROM_END = Whence.FROM_START + 1;
  var FileType = {};
  FileType.UNKNOWN = 0;
  FileType.REGULAR_FILE = FileType.UNKNOWN + 1;
  FileType.DIRECTORY = FileType.REGULAR_FILE + 1;

  function Timespec(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Timespec.prototype.initDefaults_ = function() {
    this.seconds = 0;
    this.nanoseconds = 0;
  };
  Timespec.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Timespec.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Timespec.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  Timespec.encodedSize = codec.kStructHeaderSize + 16;

  Timespec.decode = function(decoder) {
    var packed;
    var val = new Timespec();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.seconds = decoder.decodeStruct(codec.Int64);
    val.nanoseconds = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Timespec.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Timespec.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.seconds);
    encoder.encodeStruct(codec.Int32, val.nanoseconds);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function TimespecOrNow(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TimespecOrNow.prototype.initDefaults_ = function() {
    this.now = false;
    this.timespec = null;
  };
  TimespecOrNow.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TimespecOrNow.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TimespecOrNow.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate TimespecOrNow.timespec
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, Timespec, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TimespecOrNow.encodedSize = codec.kStructHeaderSize + 16;

  TimespecOrNow.decode = function(decoder) {
    var packed;
    var val = new TimespecOrNow();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.now = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.timespec = decoder.decodeStructPointer(Timespec);
    return val;
  };

  TimespecOrNow.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TimespecOrNow.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.now);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(Timespec, val.timespec);
  };

  function FileInformation(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileInformation.prototype.initDefaults_ = function() {
    this.type = 0;
    this.size = 0;
    this.atime = null;
    this.mtime = null;
  };
  FileInformation.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileInformation.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FileInformation.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate FileInformation.atime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, Timespec, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate FileInformation.mtime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, Timespec, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileInformation.encodedSize = codec.kStructHeaderSize + 32;

  FileInformation.decode = function(decoder) {
    var packed;
    var val = new FileInformation();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.size = decoder.decodeStruct(codec.Int64);
    val.atime = decoder.decodeStructPointer(Timespec);
    val.mtime = decoder.decodeStructPointer(Timespec);
    return val;
  };

  FileInformation.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileInformation.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int64, val.size);
    encoder.encodeStructPointer(Timespec, val.atime);
    encoder.encodeStructPointer(Timespec, val.mtime);
  };

  function DirectoryEntry(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DirectoryEntry.prototype.initDefaults_ = function() {
    this.type = 0;
    this.name = null;
  };
  DirectoryEntry.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DirectoryEntry.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, DirectoryEntry.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate DirectoryEntry.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DirectoryEntry.encodedSize = codec.kStructHeaderSize + 16;

  DirectoryEntry.decode = function(decoder) {
    var packed;
    var val = new DirectoryEntry();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.name = decoder.decodeStruct(codec.String);
    return val;
  };

  DirectoryEntry.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DirectoryEntry.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.name);
  };


  var exports = {};
  exports.kOpenFlagRead = kOpenFlagRead;
  exports.kOpenFlagWrite = kOpenFlagWrite;
  exports.kOpenFlagCreate = kOpenFlagCreate;
  exports.kOpenFlagExclusive = kOpenFlagExclusive;
  exports.kOpenFlagAppend = kOpenFlagAppend;
  exports.kOpenFlagTruncate = kOpenFlagTruncate;
  exports.kDeleteFlagFileOnly = kDeleteFlagFileOnly;
  exports.kDeleteFlagDirectoryOnly = kDeleteFlagDirectoryOnly;
  exports.kDeleteFlagRecursive = kDeleteFlagRecursive;
  exports.Error = Error;
  exports.Whence = Whence;
  exports.FileType = FileType;
  exports.Timespec = Timespec;
  exports.TimespecOrNow = TimespecOrNow;
  exports.FileInformation = FileInformation;
  exports.DirectoryEntry = DirectoryEntry;


  return exports;
});
