// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/flog/interfaces/flog.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function FlogDescription(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlogDescription.prototype.initDefaults_ = function() {
    this.log_id = 0;
    this.open = false;
    this.label = null;
  };
  FlogDescription.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlogDescription.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FlogDescription.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate FlogDescription.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FlogDescription.encodedSize = codec.kStructHeaderSize + 16;

  FlogDescription.decode = function(decoder) {
    var packed;
    var val = new FlogDescription();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.log_id = decoder.decodeStruct(codec.Uint32);
    val.open = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.label = decoder.decodeStruct(codec.String);
    return val;
  };

  FlogDescription.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlogDescription.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.log_id);
    encoder.encodeStruct(codec.Uint8, val.open);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.label);
  };

  function FlogEntry(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlogEntry.prototype.initDefaults_ = function() {
    this.time_us = 0;
    this.log_id = 0;
    this.channel_id = 0;
    this.details = null;
  };
  FlogEntry.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlogEntry.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FlogEntry.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;




    // validate FlogEntry.details
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 16, FlogEntryDetails, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FlogEntry.encodedSize = codec.kStructHeaderSize + 32;

  FlogEntry.decode = function(decoder) {
    var packed;
    var val = new FlogEntry();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.time_us = decoder.decodeStruct(codec.Int64);
    val.log_id = decoder.decodeStruct(codec.Uint32);
    val.channel_id = decoder.decodeStruct(codec.Uint32);
    val.details = decoder.decodeStruct(FlogEntryDetails);
    return val;
  };

  FlogEntry.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlogEntry.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.time_us);
    encoder.encodeStruct(codec.Uint32, val.log_id);
    encoder.encodeStruct(codec.Uint32, val.channel_id);
    encoder.encodeStruct(FlogEntryDetails, val.details);
  };

  function FlogChannelCreationEntryDetails(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlogChannelCreationEntryDetails.prototype.initDefaults_ = function() {
    this.type_name = null;
  };
  FlogChannelCreationEntryDetails.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlogChannelCreationEntryDetails.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FlogChannelCreationEntryDetails.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate FlogChannelCreationEntryDetails.type_name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FlogChannelCreationEntryDetails.encodedSize = codec.kStructHeaderSize + 8;

  FlogChannelCreationEntryDetails.decode = function(decoder) {
    var packed;
    var val = new FlogChannelCreationEntryDetails();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type_name = decoder.decodeStruct(codec.String);
    return val;
  };

  FlogChannelCreationEntryDetails.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlogChannelCreationEntryDetails.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.type_name);
  };

  function FlogChannelMessageEntryDetails(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlogChannelMessageEntryDetails.prototype.initDefaults_ = function() {
    this.data = null;
  };
  FlogChannelMessageEntryDetails.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlogChannelMessageEntryDetails.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FlogChannelMessageEntryDetails.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate FlogChannelMessageEntryDetails.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FlogChannelMessageEntryDetails.encodedSize = codec.kStructHeaderSize + 8;

  FlogChannelMessageEntryDetails.decode = function(decoder) {
    var packed;
    var val = new FlogChannelMessageEntryDetails();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  FlogChannelMessageEntryDetails.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlogChannelMessageEntryDetails.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.data);
  };

  function FlogChannelDeletionEntryDetails(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlogChannelDeletionEntryDetails.prototype.initDefaults_ = function() {
  };
  FlogChannelDeletionEntryDetails.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlogChannelDeletionEntryDetails.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FlogChannelDeletionEntryDetails.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FlogChannelDeletionEntryDetails.encodedSize = codec.kStructHeaderSize + 0;

  FlogChannelDeletionEntryDetails.decode = function(decoder) {
    var packed;
    var val = new FlogChannelDeletionEntryDetails();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  FlogChannelDeletionEntryDetails.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlogChannelDeletionEntryDetails.encodedSize);
    encoder.writeUint32(0);
  };

  function FlogService_CreateLogger_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlogService_CreateLogger_Params.prototype.initDefaults_ = function() {
    this.logger = null;
    this.label = null;
  };
  FlogService_CreateLogger_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlogService_CreateLogger_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FlogService_CreateLogger_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate FlogService_CreateLogger_Params.logger
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate FlogService_CreateLogger_Params.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FlogService_CreateLogger_Params.encodedSize = codec.kStructHeaderSize + 16;

  FlogService_CreateLogger_Params.decode = function(decoder) {
    var packed;
    var val = new FlogService_CreateLogger_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.logger = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.label = decoder.decodeStruct(codec.String);
    return val;
  };

  FlogService_CreateLogger_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlogService_CreateLogger_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.logger);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.label);
  };

  function FlogService_GetLogDescriptions_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlogService_GetLogDescriptions_Params.prototype.initDefaults_ = function() {
  };
  FlogService_GetLogDescriptions_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlogService_GetLogDescriptions_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FlogService_GetLogDescriptions_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FlogService_GetLogDescriptions_Params.encodedSize = codec.kStructHeaderSize + 0;

  FlogService_GetLogDescriptions_Params.decode = function(decoder) {
    var packed;
    var val = new FlogService_GetLogDescriptions_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  FlogService_GetLogDescriptions_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlogService_GetLogDescriptions_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function FlogService_GetLogDescriptions_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlogService_GetLogDescriptions_ResponseParams.prototype.initDefaults_ = function() {
    this.descriptions = null;
  };
  FlogService_GetLogDescriptions_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlogService_GetLogDescriptions_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FlogService_GetLogDescriptions_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate FlogService_GetLogDescriptions_ResponseParams.descriptions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(FlogDescription), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FlogService_GetLogDescriptions_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FlogService_GetLogDescriptions_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FlogService_GetLogDescriptions_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.descriptions = decoder.decodeArrayPointer(new codec.PointerTo(FlogDescription));
    return val;
  };

  FlogService_GetLogDescriptions_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlogService_GetLogDescriptions_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(FlogDescription), val.descriptions);
  };

  function FlogService_CreateReader_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlogService_CreateReader_Params.prototype.initDefaults_ = function() {
    this.reader = null;
    this.log_id = 0;
  };
  FlogService_CreateReader_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlogService_CreateReader_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FlogService_CreateReader_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate FlogService_CreateReader_Params.reader
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FlogService_CreateReader_Params.encodedSize = codec.kStructHeaderSize + 8;

  FlogService_CreateReader_Params.decode = function(decoder) {
    var packed;
    var val = new FlogService_CreateReader_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reader = decoder.decodeStruct(codec.Handle);
    val.log_id = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  FlogService_CreateReader_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlogService_CreateReader_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.reader);
    encoder.encodeStruct(codec.Uint32, val.log_id);
  };

  function FlogLogger_LogChannelCreation_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlogLogger_LogChannelCreation_Params.prototype.initDefaults_ = function() {
    this.time_us = 0;
    this.channel_id = 0;
    this.type_name = null;
  };
  FlogLogger_LogChannelCreation_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlogLogger_LogChannelCreation_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FlogLogger_LogChannelCreation_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate FlogLogger_LogChannelCreation_Params.type_name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FlogLogger_LogChannelCreation_Params.encodedSize = codec.kStructHeaderSize + 24;

  FlogLogger_LogChannelCreation_Params.decode = function(decoder) {
    var packed;
    var val = new FlogLogger_LogChannelCreation_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.time_us = decoder.decodeStruct(codec.Int64);
    val.channel_id = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.type_name = decoder.decodeStruct(codec.String);
    return val;
  };

  FlogLogger_LogChannelCreation_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlogLogger_LogChannelCreation_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.time_us);
    encoder.encodeStruct(codec.Uint32, val.channel_id);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.type_name);
  };

  function FlogLogger_LogChannelMessage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlogLogger_LogChannelMessage_Params.prototype.initDefaults_ = function() {
    this.time_us = 0;
    this.channel_id = 0;
    this.data = null;
  };
  FlogLogger_LogChannelMessage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlogLogger_LogChannelMessage_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FlogLogger_LogChannelMessage_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate FlogLogger_LogChannelMessage_Params.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FlogLogger_LogChannelMessage_Params.encodedSize = codec.kStructHeaderSize + 24;

  FlogLogger_LogChannelMessage_Params.decode = function(decoder) {
    var packed;
    var val = new FlogLogger_LogChannelMessage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.time_us = decoder.decodeStruct(codec.Int64);
    val.channel_id = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.data = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  FlogLogger_LogChannelMessage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlogLogger_LogChannelMessage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.time_us);
    encoder.encodeStruct(codec.Uint32, val.channel_id);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint8, val.data);
  };

  function FlogLogger_LogChannelDeletion_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlogLogger_LogChannelDeletion_Params.prototype.initDefaults_ = function() {
    this.time_us = 0;
    this.channel_id = 0;
  };
  FlogLogger_LogChannelDeletion_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlogLogger_LogChannelDeletion_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FlogLogger_LogChannelDeletion_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  FlogLogger_LogChannelDeletion_Params.encodedSize = codec.kStructHeaderSize + 16;

  FlogLogger_LogChannelDeletion_Params.decode = function(decoder) {
    var packed;
    var val = new FlogLogger_LogChannelDeletion_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.time_us = decoder.decodeStruct(codec.Int64);
    val.channel_id = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FlogLogger_LogChannelDeletion_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlogLogger_LogChannelDeletion_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.time_us);
    encoder.encodeStruct(codec.Uint32, val.channel_id);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function FlogReader_GetEntries_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlogReader_GetEntries_Params.prototype.initDefaults_ = function() {
    this.start_index = 0;
    this.max_count = 0;
  };
  FlogReader_GetEntries_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlogReader_GetEntries_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FlogReader_GetEntries_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  FlogReader_GetEntries_Params.encodedSize = codec.kStructHeaderSize + 8;

  FlogReader_GetEntries_Params.decode = function(decoder) {
    var packed;
    var val = new FlogReader_GetEntries_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.start_index = decoder.decodeStruct(codec.Uint32);
    val.max_count = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  FlogReader_GetEntries_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlogReader_GetEntries_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.start_index);
    encoder.encodeStruct(codec.Uint32, val.max_count);
  };

  function FlogReader_GetEntries_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlogReader_GetEntries_ResponseParams.prototype.initDefaults_ = function() {
    this.entries = null;
  };
  FlogReader_GetEntries_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlogReader_GetEntries_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, FlogReader_GetEntries_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate FlogReader_GetEntries_ResponseParams.entries
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(FlogEntry), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FlogReader_GetEntries_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FlogReader_GetEntries_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FlogReader_GetEntries_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.entries = decoder.decodeArrayPointer(new codec.PointerTo(FlogEntry));
    return val;
  };

  FlogReader_GetEntries_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlogReader_GetEntries_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(FlogEntry), val.entries);
  };


  function FlogEntryDetails(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  FlogEntryDetails.Tags = {
    channel_creation: 0,
    channel_message: 1,
    channel_deletion: 2,
  };
  
  FlogEntryDetails.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  FlogEntryDetails.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }
  
    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }
  
    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }
  
    var fields = [
        "channel_creation",
        "channel_message",
        "channel_deletion",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a FlogEntryDetails member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(FlogEntryDetails.prototype, "channel_creation", {
    get: function() {
      if (this.$tag != FlogEntryDetails.Tags.channel_creation) {
        throw new ReferenceError(
            "FlogEntryDetails.channel_creation is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = FlogEntryDetails.Tags.channel_creation;
      this.$data = value;
    }
  });
  Object.defineProperty(FlogEntryDetails.prototype, "channel_message", {
    get: function() {
      if (this.$tag != FlogEntryDetails.Tags.channel_message) {
        throw new ReferenceError(
            "FlogEntryDetails.channel_message is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = FlogEntryDetails.Tags.channel_message;
      this.$data = value;
    }
  });
  Object.defineProperty(FlogEntryDetails.prototype, "channel_deletion", {
    get: function() {
      if (this.$tag != FlogEntryDetails.Tags.channel_deletion) {
        throw new ReferenceError(
            "FlogEntryDetails.channel_deletion is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = FlogEntryDetails.Tags.channel_deletion;
      this.$data = value;
    }
  });
  
  
    FlogEntryDetails.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }
    
      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case FlogEntryDetails.Tags.channel_creation:
          encoder.encodeStructPointer(FlogChannelCreationEntryDetails, val.channel_creation);
          break;
        case FlogEntryDetails.Tags.channel_message:
          encoder.encodeStructPointer(FlogChannelMessageEntryDetails, val.channel_message);
          break;
        case FlogEntryDetails.Tags.channel_deletion:
          encoder.encodeStructPointer(FlogChannelDeletionEntryDetails, val.channel_deletion);
          break;
      }
      encoder.align();
    };
  
  
    FlogEntryDetails.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new FlogEntryDetails();
      var tag = decoder.readUint32();
      switch (tag) {
        case FlogEntryDetails.Tags.channel_creation:
          result.channel_creation = decoder.decodeStructPointer(FlogChannelCreationEntryDetails);
          break;
        case FlogEntryDetails.Tags.channel_message:
          result.channel_message = decoder.decodeStructPointer(FlogChannelMessageEntryDetails);
          break;
        case FlogEntryDetails.Tags.channel_deletion:
          result.channel_deletion = decoder.decodeStructPointer(FlogChannelDeletionEntryDetails);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    FlogEntryDetails.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case FlogEntryDetails.Tags.channel_creation:
          
    
    // validate FlogEntryDetails.channel_creation
    err = messageValidator.validateStructPointer(data_offset, FlogChannelCreationEntryDetails, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case FlogEntryDetails.Tags.channel_message:
          
    
    // validate FlogEntryDetails.channel_message
    err = messageValidator.validateStructPointer(data_offset, FlogChannelMessageEntryDetails, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case FlogEntryDetails.Tags.channel_deletion:
          
    
    // validate FlogEntryDetails.channel_deletion
    err = messageValidator.validateStructPointer(data_offset, FlogChannelDeletionEntryDetails, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  FlogEntryDetails.encodedSize = 16;
  var kFlogService_CreateLogger_Name = 0;
  var kFlogService_GetLogDescriptions_Name = 1;
  var kFlogService_CreateReader_Name = 2;

  function FlogServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  FlogServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  FlogServiceProxy.prototype.createLogger = function(logger, label) {
    var params = new FlogService_CreateLogger_Params();
    params.logger = core.isHandle(logger) ? logger : connection.bindProxy(logger, FlogLogger);
    params.label = label;
    var builder = new codec.MessageBuilder(
        kFlogService_CreateLogger_Name,
        codec.align(FlogService_CreateLogger_Params.encodedSize));
    builder.encodeStruct(FlogService_CreateLogger_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FlogServiceProxy.prototype.getLogDescriptions = function() {
    var params = new FlogService_GetLogDescriptions_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kFlogService_GetLogDescriptions_Name,
          codec.align(FlogService_GetLogDescriptions_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FlogService_GetLogDescriptions_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FlogService_GetLogDescriptions_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FlogServiceProxy.prototype.createReader = function(reader, log_id) {
    var params = new FlogService_CreateReader_Params();
    params.reader = core.isHandle(reader) ? reader : connection.bindProxy(reader, FlogReader);
    params.log_id = log_id;
    var builder = new codec.MessageBuilder(
        kFlogService_CreateReader_Name,
        codec.align(FlogService_CreateReader_Params.encodedSize));
    builder.encodeStruct(FlogService_CreateReader_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function FlogServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  FlogServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  FlogServiceStub.prototype.createLogger = function(logger, label) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.createLogger && bindings.StubBindings(this).delegate.createLogger(connection.bindHandleToStub(logger, FlogLogger), label);
  }
  FlogServiceStub.prototype.getLogDescriptions = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getLogDescriptions && bindings.StubBindings(this).delegate.getLogDescriptions();
  }
  FlogServiceStub.prototype.createReader = function(reader, log_id) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.createReader && bindings.StubBindings(this).delegate.createReader(connection.bindHandleToStub(reader, FlogReader), log_id);
  }

  FlogServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFlogService_CreateLogger_Name:
      var params = reader.decodeStruct(FlogService_CreateLogger_Params);
      this.createLogger(params.logger, params.label);
      return true;
    case kFlogService_CreateReader_Name:
      var params = reader.decodeStruct(FlogService_CreateReader_Params);
      this.createReader(params.reader, params.log_id);
      return true;
    default:
      return false;
    }
  };

  FlogServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFlogService_GetLogDescriptions_Name:
      var params = reader.decodeStruct(FlogService_GetLogDescriptions_Params);
      return this.getLogDescriptions().then(function(response) {
        var responseParams =
            new FlogService_GetLogDescriptions_ResponseParams();
        responseParams.descriptions = response.descriptions;
        var builder = new codec.MessageWithRequestIDBuilder(
            kFlogService_GetLogDescriptions_Name,
            codec.align(FlogService_GetLogDescriptions_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FlogService_GetLogDescriptions_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateFlogServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFlogService_CreateLogger_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FlogService_CreateLogger_Params;
      break;
      case kFlogService_GetLogDescriptions_Name:
        if (message.expectsResponse())
          paramsClass = FlogService_GetLogDescriptions_Params;
      break;
      case kFlogService_CreateReader_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FlogService_CreateReader_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFlogServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFlogService_GetLogDescriptions_Name:
        if (message.isResponse())
          paramsClass = FlogService_GetLogDescriptions_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FlogService = {
    name: 'mojo::flog::FlogService',
    proxyClass: FlogServiceProxy,
    stubClass: FlogServiceStub,
    validateRequest: validateFlogServiceRequest,
    validateResponse: validateFlogServiceResponse,
  };
  FlogServiceStub.prototype.validator = validateFlogServiceRequest;
  FlogServiceProxy.prototype.validator = validateFlogServiceResponse;

  var kFlogLogger_LogChannelCreation_Name = 0;
  var kFlogLogger_LogChannelMessage_Name = 1;
  var kFlogLogger_LogChannelDeletion_Name = 2;

  function FlogLoggerProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  FlogLoggerProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  FlogLoggerProxy.prototype.logChannelCreation = function(time_us, channel_id, type_name) {
    var params = new FlogLogger_LogChannelCreation_Params();
    params.time_us = time_us;
    params.channel_id = channel_id;
    params.type_name = type_name;
    var builder = new codec.MessageBuilder(
        kFlogLogger_LogChannelCreation_Name,
        codec.align(FlogLogger_LogChannelCreation_Params.encodedSize));
    builder.encodeStruct(FlogLogger_LogChannelCreation_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FlogLoggerProxy.prototype.logChannelMessage = function(time_us, channel_id, data) {
    var params = new FlogLogger_LogChannelMessage_Params();
    params.time_us = time_us;
    params.channel_id = channel_id;
    params.data = data;
    var builder = new codec.MessageBuilder(
        kFlogLogger_LogChannelMessage_Name,
        codec.align(FlogLogger_LogChannelMessage_Params.encodedSize));
    builder.encodeStruct(FlogLogger_LogChannelMessage_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FlogLoggerProxy.prototype.logChannelDeletion = function(time_us, channel_id) {
    var params = new FlogLogger_LogChannelDeletion_Params();
    params.time_us = time_us;
    params.channel_id = channel_id;
    var builder = new codec.MessageBuilder(
        kFlogLogger_LogChannelDeletion_Name,
        codec.align(FlogLogger_LogChannelDeletion_Params.encodedSize));
    builder.encodeStruct(FlogLogger_LogChannelDeletion_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function FlogLoggerStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  FlogLoggerStub.prototype = Object.create(bindings.StubBase.prototype);
  FlogLoggerStub.prototype.logChannelCreation = function(time_us, channel_id, type_name) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.logChannelCreation && bindings.StubBindings(this).delegate.logChannelCreation(time_us, channel_id, type_name);
  }
  FlogLoggerStub.prototype.logChannelMessage = function(time_us, channel_id, data) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.logChannelMessage && bindings.StubBindings(this).delegate.logChannelMessage(time_us, channel_id, data);
  }
  FlogLoggerStub.prototype.logChannelDeletion = function(time_us, channel_id) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.logChannelDeletion && bindings.StubBindings(this).delegate.logChannelDeletion(time_us, channel_id);
  }

  FlogLoggerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFlogLogger_LogChannelCreation_Name:
      var params = reader.decodeStruct(FlogLogger_LogChannelCreation_Params);
      this.logChannelCreation(params.time_us, params.channel_id, params.type_name);
      return true;
    case kFlogLogger_LogChannelMessage_Name:
      var params = reader.decodeStruct(FlogLogger_LogChannelMessage_Params);
      this.logChannelMessage(params.time_us, params.channel_id, params.data);
      return true;
    case kFlogLogger_LogChannelDeletion_Name:
      var params = reader.decodeStruct(FlogLogger_LogChannelDeletion_Params);
      this.logChannelDeletion(params.time_us, params.channel_id);
      return true;
    default:
      return false;
    }
  };

  FlogLoggerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateFlogLoggerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFlogLogger_LogChannelCreation_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FlogLogger_LogChannelCreation_Params;
      break;
      case kFlogLogger_LogChannelMessage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FlogLogger_LogChannelMessage_Params;
      break;
      case kFlogLogger_LogChannelDeletion_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FlogLogger_LogChannelDeletion_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFlogLoggerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var FlogLogger = {
    name: null,
    proxyClass: FlogLoggerProxy,
    stubClass: FlogLoggerStub,
    validateRequest: validateFlogLoggerRequest,
    validateResponse: null,
  };
  FlogLoggerStub.prototype.validator = validateFlogLoggerRequest;
  FlogLoggerProxy.prototype.validator = null;

  var kFlogReader_GetEntries_Name = 0;

  function FlogReaderProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  FlogReaderProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  FlogReaderProxy.prototype.getEntries = function(start_index, max_count) {
    var params = new FlogReader_GetEntries_Params();
    params.start_index = start_index;
    params.max_count = max_count;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kFlogReader_GetEntries_Name,
          codec.align(FlogReader_GetEntries_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FlogReader_GetEntries_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FlogReader_GetEntries_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FlogReaderStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  FlogReaderStub.prototype = Object.create(bindings.StubBase.prototype);
  FlogReaderStub.prototype.getEntries = function(start_index, max_count) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getEntries && bindings.StubBindings(this).delegate.getEntries(start_index, max_count);
  }

  FlogReaderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  FlogReaderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFlogReader_GetEntries_Name:
      var params = reader.decodeStruct(FlogReader_GetEntries_Params);
      return this.getEntries(params.start_index, params.max_count).then(function(response) {
        var responseParams =
            new FlogReader_GetEntries_ResponseParams();
        responseParams.entries = response.entries;
        var builder = new codec.MessageWithRequestIDBuilder(
            kFlogReader_GetEntries_Name,
            codec.align(FlogReader_GetEntries_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FlogReader_GetEntries_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateFlogReaderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFlogReader_GetEntries_Name:
        if (message.expectsResponse())
          paramsClass = FlogReader_GetEntries_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFlogReaderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFlogReader_GetEntries_Name:
        if (message.isResponse())
          paramsClass = FlogReader_GetEntries_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FlogReader = {
    name: null,
    proxyClass: FlogReaderProxy,
    stubClass: FlogReaderStub,
    validateRequest: validateFlogReaderRequest,
    validateResponse: validateFlogReaderResponse,
  };
  FlogReaderStub.prototype.validator = validateFlogReaderRequest;
  FlogReaderProxy.prototype.validator = validateFlogReaderResponse;


  var exports = {};
  exports.FlogDescription = FlogDescription;
  exports.FlogEntry = FlogEntry;
  exports.FlogChannelCreationEntryDetails = FlogChannelCreationEntryDetails;
  exports.FlogChannelMessageEntryDetails = FlogChannelMessageEntryDetails;
  exports.FlogChannelDeletionEntryDetails = FlogChannelDeletionEntryDetails;
  exports.FlogEntryDetails = FlogEntryDetails;
  exports.FlogService = FlogService;
  exports.FlogLogger = FlogLogger;
  exports.FlogReader = FlogReader;


  return exports;
});
