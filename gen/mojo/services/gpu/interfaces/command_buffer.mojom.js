// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/gpu/interfaces/command_buffer.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/gpu/interfaces/gpu_capabilities.mojom",
], function(bindings, codec, connection, core, validator, gpu_capabilities$) {

  function CommandBufferState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBufferState.prototype.initDefaults_ = function() {
    this.num_entries = 0;
    this.get_offset = 0;
    this.put_offset = 0;
    this.token = 0;
    this.error = 0;
    this.context_lost_reason = 0;
    this.generation = 0;
  };
  CommandBufferState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBufferState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBufferState.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;








    return validator.validationError.NONE;
  };

  CommandBufferState.encodedSize = codec.kStructHeaderSize + 32;

  CommandBufferState.decode = function(decoder) {
    var packed;
    var val = new CommandBufferState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.num_entries = decoder.decodeStruct(codec.Int32);
    val.get_offset = decoder.decodeStruct(codec.Int32);
    val.put_offset = decoder.decodeStruct(codec.Int32);
    val.token = decoder.decodeStruct(codec.Int32);
    val.error = decoder.decodeStruct(codec.Int32);
    val.context_lost_reason = decoder.decodeStruct(codec.Int32);
    val.generation = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CommandBufferState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBufferState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.num_entries);
    encoder.encodeStruct(codec.Int32, val.get_offset);
    encoder.encodeStruct(codec.Int32, val.put_offset);
    encoder.encodeStruct(codec.Int32, val.token);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.encodeStruct(codec.Int32, val.context_lost_reason);
    encoder.encodeStruct(codec.Uint32, val.generation);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CommandBufferSyncClient_DidInitialize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBufferSyncClient_DidInitialize_Params.prototype.initDefaults_ = function() {
    this.success = false;
    this.capabilities = null;
  };
  CommandBufferSyncClient_DidInitialize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBufferSyncClient_DidInitialize_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBufferSyncClient_DidInitialize_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate CommandBufferSyncClient_DidInitialize_Params.capabilities
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, gpu_capabilities$.GpuCapabilities, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CommandBufferSyncClient_DidInitialize_Params.encodedSize = codec.kStructHeaderSize + 16;

  CommandBufferSyncClient_DidInitialize_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBufferSyncClient_DidInitialize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.success = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.capabilities = decoder.decodeStructPointer(gpu_capabilities$.GpuCapabilities);
    return val;
  };

  CommandBufferSyncClient_DidInitialize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBufferSyncClient_DidInitialize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.success);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(gpu_capabilities$.GpuCapabilities, val.capabilities);
  };

  function CommandBufferSyncClient_DidMakeProgress_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBufferSyncClient_DidMakeProgress_Params.prototype.initDefaults_ = function() {
    this.state = null;
  };
  CommandBufferSyncClient_DidMakeProgress_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBufferSyncClient_DidMakeProgress_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBufferSyncClient_DidMakeProgress_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate CommandBufferSyncClient_DidMakeProgress_Params.state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CommandBufferState, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CommandBufferSyncClient_DidMakeProgress_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBufferSyncClient_DidMakeProgress_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBufferSyncClient_DidMakeProgress_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStructPointer(CommandBufferState);
    return val;
  };

  CommandBufferSyncClient_DidMakeProgress_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBufferSyncClient_DidMakeProgress_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CommandBufferState, val.state);
  };

  function CommandBufferSyncPointClient_DidInsertSyncPoint_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBufferSyncPointClient_DidInsertSyncPoint_Params.prototype.initDefaults_ = function() {
    this.sync_point = 0;
  };
  CommandBufferSyncPointClient_DidInsertSyncPoint_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBufferSyncPointClient_DidInsertSyncPoint_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBufferSyncPointClient_DidInsertSyncPoint_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CommandBufferSyncPointClient_DidInsertSyncPoint_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBufferSyncPointClient_DidInsertSyncPoint_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBufferSyncPointClient_DidInsertSyncPoint_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sync_point = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CommandBufferSyncPointClient_DidInsertSyncPoint_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBufferSyncPointClient_DidInsertSyncPoint_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.sync_point);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CommandBufferLostContextObserver_DidLoseContext_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBufferLostContextObserver_DidLoseContext_Params.prototype.initDefaults_ = function() {
    this.context_lost_reason = 0;
  };
  CommandBufferLostContextObserver_DidLoseContext_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBufferLostContextObserver_DidLoseContext_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBufferLostContextObserver_DidLoseContext_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CommandBufferLostContextObserver_DidLoseContext_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBufferLostContextObserver_DidLoseContext_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBufferLostContextObserver_DidLoseContext_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.context_lost_reason = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CommandBufferLostContextObserver_DidLoseContext_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBufferLostContextObserver_DidLoseContext_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.context_lost_reason);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CommandBuffer_Initialize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_Initialize_Params.prototype.initDefaults_ = function() {
    this.sync_client = null;
    this.sync_point_client = null;
    this.lost_observer = null;
    this.shared_state = null;
  };
  CommandBuffer_Initialize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_Initialize_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBuffer_Initialize_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate CommandBuffer_Initialize_Params.sync_client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate CommandBuffer_Initialize_Params.sync_point_client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate CommandBuffer_Initialize_Params.lost_observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 16, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate CommandBuffer_Initialize_Params.shared_state
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CommandBuffer_Initialize_Params.encodedSize = codec.kStructHeaderSize + 32;

  CommandBuffer_Initialize_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_Initialize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sync_client = decoder.decodeStruct(codec.Interface);
    val.sync_point_client = decoder.decodeStruct(codec.Interface);
    val.lost_observer = decoder.decodeStruct(codec.Interface);
    val.shared_state = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CommandBuffer_Initialize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_Initialize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Interface, val.sync_client);
    encoder.encodeStruct(codec.Interface, val.sync_point_client);
    encoder.encodeStruct(codec.Interface, val.lost_observer);
    encoder.encodeStruct(codec.Handle, val.shared_state);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CommandBuffer_SetGetBuffer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_SetGetBuffer_Params.prototype.initDefaults_ = function() {
    this.buffer = 0;
  };
  CommandBuffer_SetGetBuffer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_SetGetBuffer_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBuffer_SetGetBuffer_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CommandBuffer_SetGetBuffer_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBuffer_SetGetBuffer_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_SetGetBuffer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.buffer = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CommandBuffer_SetGetBuffer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_SetGetBuffer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.buffer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CommandBuffer_Flush_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_Flush_Params.prototype.initDefaults_ = function() {
    this.put_offset = 0;
  };
  CommandBuffer_Flush_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_Flush_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBuffer_Flush_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CommandBuffer_Flush_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBuffer_Flush_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_Flush_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.put_offset = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CommandBuffer_Flush_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_Flush_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.put_offset);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CommandBuffer_MakeProgress_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_MakeProgress_Params.prototype.initDefaults_ = function() {
    this.last_get_offset = 0;
  };
  CommandBuffer_MakeProgress_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_MakeProgress_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBuffer_MakeProgress_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CommandBuffer_MakeProgress_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBuffer_MakeProgress_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_MakeProgress_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.last_get_offset = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CommandBuffer_MakeProgress_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_MakeProgress_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.last_get_offset);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CommandBuffer_RegisterTransferBuffer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_RegisterTransferBuffer_Params.prototype.initDefaults_ = function() {
    this.id = 0;
    this.transfer_buffer = null;
    this.size = 0;
  };
  CommandBuffer_RegisterTransferBuffer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_RegisterTransferBuffer_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBuffer_RegisterTransferBuffer_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate CommandBuffer_RegisterTransferBuffer_Params.transfer_buffer
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CommandBuffer_RegisterTransferBuffer_Params.encodedSize = codec.kStructHeaderSize + 16;

  CommandBuffer_RegisterTransferBuffer_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_RegisterTransferBuffer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Int32);
    val.transfer_buffer = decoder.decodeStruct(codec.Handle);
    val.size = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CommandBuffer_RegisterTransferBuffer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_RegisterTransferBuffer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.id);
    encoder.encodeStruct(codec.Handle, val.transfer_buffer);
    encoder.encodeStruct(codec.Uint32, val.size);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CommandBuffer_DestroyTransferBuffer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_DestroyTransferBuffer_Params.prototype.initDefaults_ = function() {
    this.id = 0;
  };
  CommandBuffer_DestroyTransferBuffer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_DestroyTransferBuffer_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBuffer_DestroyTransferBuffer_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CommandBuffer_DestroyTransferBuffer_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBuffer_DestroyTransferBuffer_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_DestroyTransferBuffer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CommandBuffer_DestroyTransferBuffer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_DestroyTransferBuffer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.id);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CommandBuffer_InsertSyncPoint_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_InsertSyncPoint_Params.prototype.initDefaults_ = function() {
    this.retire = false;
  };
  CommandBuffer_InsertSyncPoint_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_InsertSyncPoint_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBuffer_InsertSyncPoint_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CommandBuffer_InsertSyncPoint_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBuffer_InsertSyncPoint_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_InsertSyncPoint_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.retire = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CommandBuffer_InsertSyncPoint_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_InsertSyncPoint_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.retire);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CommandBuffer_RetireSyncPoint_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_RetireSyncPoint_Params.prototype.initDefaults_ = function() {
    this.sync_point = 0;
  };
  CommandBuffer_RetireSyncPoint_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_RetireSyncPoint_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBuffer_RetireSyncPoint_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CommandBuffer_RetireSyncPoint_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBuffer_RetireSyncPoint_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_RetireSyncPoint_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sync_point = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CommandBuffer_RetireSyncPoint_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_RetireSyncPoint_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.sync_point);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CommandBuffer_Echo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_Echo_Params.prototype.initDefaults_ = function() {
  };
  CommandBuffer_Echo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_Echo_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBuffer_Echo_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CommandBuffer_Echo_Params.encodedSize = codec.kStructHeaderSize + 0;

  CommandBuffer_Echo_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_Echo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CommandBuffer_Echo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_Echo_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function CommandBuffer_Echo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_Echo_ResponseParams.prototype.initDefaults_ = function() {
  };
  CommandBuffer_Echo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_Echo_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CommandBuffer_Echo_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CommandBuffer_Echo_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  CommandBuffer_Echo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_Echo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CommandBuffer_Echo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_Echo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };

  var kCommandBufferSyncClient_DidInitialize_Name = 0;
  var kCommandBufferSyncClient_DidMakeProgress_Name = 1;

  function CommandBufferSyncClientProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  CommandBufferSyncClientProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  CommandBufferSyncClientProxy.prototype.didInitialize = function(success, capabilities) {
    var params = new CommandBufferSyncClient_DidInitialize_Params();
    params.success = success;
    params.capabilities = capabilities;
    var builder = new codec.MessageBuilder(
        kCommandBufferSyncClient_DidInitialize_Name,
        codec.align(CommandBufferSyncClient_DidInitialize_Params.encodedSize));
    builder.encodeStruct(CommandBufferSyncClient_DidInitialize_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferSyncClientProxy.prototype.didMakeProgress = function(state) {
    var params = new CommandBufferSyncClient_DidMakeProgress_Params();
    params.state = state;
    var builder = new codec.MessageBuilder(
        kCommandBufferSyncClient_DidMakeProgress_Name,
        codec.align(CommandBufferSyncClient_DidMakeProgress_Params.encodedSize));
    builder.encodeStruct(CommandBufferSyncClient_DidMakeProgress_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CommandBufferSyncClientStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  CommandBufferSyncClientStub.prototype = Object.create(bindings.StubBase.prototype);
  CommandBufferSyncClientStub.prototype.didInitialize = function(success, capabilities) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.didInitialize && bindings.StubBindings(this).delegate.didInitialize(success, capabilities);
  }
  CommandBufferSyncClientStub.prototype.didMakeProgress = function(state) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.didMakeProgress && bindings.StubBindings(this).delegate.didMakeProgress(state);
  }

  CommandBufferSyncClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCommandBufferSyncClient_DidInitialize_Name:
      var params = reader.decodeStruct(CommandBufferSyncClient_DidInitialize_Params);
      this.didInitialize(params.success, params.capabilities);
      return true;
    case kCommandBufferSyncClient_DidMakeProgress_Name:
      var params = reader.decodeStruct(CommandBufferSyncClient_DidMakeProgress_Params);
      this.didMakeProgress(params.state);
      return true;
    default:
      return false;
    }
  };

  CommandBufferSyncClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateCommandBufferSyncClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCommandBufferSyncClient_DidInitialize_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBufferSyncClient_DidInitialize_Params;
      break;
      case kCommandBufferSyncClient_DidMakeProgress_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBufferSyncClient_DidMakeProgress_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCommandBufferSyncClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CommandBufferSyncClient = {
    name: null,
    proxyClass: CommandBufferSyncClientProxy,
    stubClass: CommandBufferSyncClientStub,
    validateRequest: validateCommandBufferSyncClientRequest,
    validateResponse: null,
  };
  CommandBufferSyncClientStub.prototype.validator = validateCommandBufferSyncClientRequest;
  CommandBufferSyncClientProxy.prototype.validator = null;

  var kCommandBufferSyncPointClient_DidInsertSyncPoint_Name = 0;

  function CommandBufferSyncPointClientProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  CommandBufferSyncPointClientProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  CommandBufferSyncPointClientProxy.prototype.didInsertSyncPoint = function(sync_point) {
    var params = new CommandBufferSyncPointClient_DidInsertSyncPoint_Params();
    params.sync_point = sync_point;
    var builder = new codec.MessageBuilder(
        kCommandBufferSyncPointClient_DidInsertSyncPoint_Name,
        codec.align(CommandBufferSyncPointClient_DidInsertSyncPoint_Params.encodedSize));
    builder.encodeStruct(CommandBufferSyncPointClient_DidInsertSyncPoint_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CommandBufferSyncPointClientStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  CommandBufferSyncPointClientStub.prototype = Object.create(bindings.StubBase.prototype);
  CommandBufferSyncPointClientStub.prototype.didInsertSyncPoint = function(sync_point) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.didInsertSyncPoint && bindings.StubBindings(this).delegate.didInsertSyncPoint(sync_point);
  }

  CommandBufferSyncPointClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCommandBufferSyncPointClient_DidInsertSyncPoint_Name:
      var params = reader.decodeStruct(CommandBufferSyncPointClient_DidInsertSyncPoint_Params);
      this.didInsertSyncPoint(params.sync_point);
      return true;
    default:
      return false;
    }
  };

  CommandBufferSyncPointClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateCommandBufferSyncPointClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCommandBufferSyncPointClient_DidInsertSyncPoint_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBufferSyncPointClient_DidInsertSyncPoint_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCommandBufferSyncPointClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CommandBufferSyncPointClient = {
    name: null,
    proxyClass: CommandBufferSyncPointClientProxy,
    stubClass: CommandBufferSyncPointClientStub,
    validateRequest: validateCommandBufferSyncPointClientRequest,
    validateResponse: null,
  };
  CommandBufferSyncPointClientStub.prototype.validator = validateCommandBufferSyncPointClientRequest;
  CommandBufferSyncPointClientProxy.prototype.validator = null;

  var kCommandBufferLostContextObserver_DidLoseContext_Name = 0;

  function CommandBufferLostContextObserverProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  CommandBufferLostContextObserverProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  CommandBufferLostContextObserverProxy.prototype.didLoseContext = function(context_lost_reason) {
    var params = new CommandBufferLostContextObserver_DidLoseContext_Params();
    params.context_lost_reason = context_lost_reason;
    var builder = new codec.MessageBuilder(
        kCommandBufferLostContextObserver_DidLoseContext_Name,
        codec.align(CommandBufferLostContextObserver_DidLoseContext_Params.encodedSize));
    builder.encodeStruct(CommandBufferLostContextObserver_DidLoseContext_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CommandBufferLostContextObserverStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  CommandBufferLostContextObserverStub.prototype = Object.create(bindings.StubBase.prototype);
  CommandBufferLostContextObserverStub.prototype.didLoseContext = function(context_lost_reason) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.didLoseContext && bindings.StubBindings(this).delegate.didLoseContext(context_lost_reason);
  }

  CommandBufferLostContextObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCommandBufferLostContextObserver_DidLoseContext_Name:
      var params = reader.decodeStruct(CommandBufferLostContextObserver_DidLoseContext_Params);
      this.didLoseContext(params.context_lost_reason);
      return true;
    default:
      return false;
    }
  };

  CommandBufferLostContextObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateCommandBufferLostContextObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCommandBufferLostContextObserver_DidLoseContext_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBufferLostContextObserver_DidLoseContext_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCommandBufferLostContextObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CommandBufferLostContextObserver = {
    name: null,
    proxyClass: CommandBufferLostContextObserverProxy,
    stubClass: CommandBufferLostContextObserverStub,
    validateRequest: validateCommandBufferLostContextObserverRequest,
    validateResponse: null,
  };
  CommandBufferLostContextObserverStub.prototype.validator = validateCommandBufferLostContextObserverRequest;
  CommandBufferLostContextObserverProxy.prototype.validator = null;

  var kCommandBuffer_Initialize_Name = 0;
  var kCommandBuffer_SetGetBuffer_Name = 1;
  var kCommandBuffer_Flush_Name = 2;
  var kCommandBuffer_MakeProgress_Name = 3;
  var kCommandBuffer_RegisterTransferBuffer_Name = 4;
  var kCommandBuffer_DestroyTransferBuffer_Name = 5;
  var kCommandBuffer_InsertSyncPoint_Name = 6;
  var kCommandBuffer_RetireSyncPoint_Name = 7;
  var kCommandBuffer_Echo_Name = 8;

  function CommandBufferProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  CommandBufferProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  CommandBufferProxy.prototype.initialize = function(sync_client, sync_point_client, lost_observer, shared_state) {
    var params = new CommandBuffer_Initialize_Params();
    params.sync_client = core.isHandle(sync_client) ? sync_client : connection.bindImpl(sync_client, CommandBufferSyncClient);
    params.sync_point_client = core.isHandle(sync_point_client) ? sync_point_client : connection.bindImpl(sync_point_client, CommandBufferSyncPointClient);
    params.lost_observer = core.isHandle(lost_observer) ? lost_observer : connection.bindImpl(lost_observer, CommandBufferLostContextObserver);
    params.shared_state = shared_state;
    var builder = new codec.MessageBuilder(
        kCommandBuffer_Initialize_Name,
        codec.align(CommandBuffer_Initialize_Params.encodedSize));
    builder.encodeStruct(CommandBuffer_Initialize_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferProxy.prototype.setGetBuffer = function(buffer) {
    var params = new CommandBuffer_SetGetBuffer_Params();
    params.buffer = buffer;
    var builder = new codec.MessageBuilder(
        kCommandBuffer_SetGetBuffer_Name,
        codec.align(CommandBuffer_SetGetBuffer_Params.encodedSize));
    builder.encodeStruct(CommandBuffer_SetGetBuffer_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferProxy.prototype.flush = function(put_offset) {
    var params = new CommandBuffer_Flush_Params();
    params.put_offset = put_offset;
    var builder = new codec.MessageBuilder(
        kCommandBuffer_Flush_Name,
        codec.align(CommandBuffer_Flush_Params.encodedSize));
    builder.encodeStruct(CommandBuffer_Flush_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferProxy.prototype.makeProgress = function(last_get_offset) {
    var params = new CommandBuffer_MakeProgress_Params();
    params.last_get_offset = last_get_offset;
    var builder = new codec.MessageBuilder(
        kCommandBuffer_MakeProgress_Name,
        codec.align(CommandBuffer_MakeProgress_Params.encodedSize));
    builder.encodeStruct(CommandBuffer_MakeProgress_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferProxy.prototype.registerTransferBuffer = function(id, transfer_buffer, size) {
    var params = new CommandBuffer_RegisterTransferBuffer_Params();
    params.id = id;
    params.transfer_buffer = transfer_buffer;
    params.size = size;
    var builder = new codec.MessageBuilder(
        kCommandBuffer_RegisterTransferBuffer_Name,
        codec.align(CommandBuffer_RegisterTransferBuffer_Params.encodedSize));
    builder.encodeStruct(CommandBuffer_RegisterTransferBuffer_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferProxy.prototype.destroyTransferBuffer = function(id) {
    var params = new CommandBuffer_DestroyTransferBuffer_Params();
    params.id = id;
    var builder = new codec.MessageBuilder(
        kCommandBuffer_DestroyTransferBuffer_Name,
        codec.align(CommandBuffer_DestroyTransferBuffer_Params.encodedSize));
    builder.encodeStruct(CommandBuffer_DestroyTransferBuffer_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferProxy.prototype.insertSyncPoint = function(retire) {
    var params = new CommandBuffer_InsertSyncPoint_Params();
    params.retire = retire;
    var builder = new codec.MessageBuilder(
        kCommandBuffer_InsertSyncPoint_Name,
        codec.align(CommandBuffer_InsertSyncPoint_Params.encodedSize));
    builder.encodeStruct(CommandBuffer_InsertSyncPoint_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferProxy.prototype.retireSyncPoint = function(sync_point) {
    var params = new CommandBuffer_RetireSyncPoint_Params();
    params.sync_point = sync_point;
    var builder = new codec.MessageBuilder(
        kCommandBuffer_RetireSyncPoint_Name,
        codec.align(CommandBuffer_RetireSyncPoint_Params.encodedSize));
    builder.encodeStruct(CommandBuffer_RetireSyncPoint_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferProxy.prototype.echo = function() {
    var params = new CommandBuffer_Echo_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kCommandBuffer_Echo_Name,
          codec.align(CommandBuffer_Echo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CommandBuffer_Echo_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CommandBuffer_Echo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function CommandBufferStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  CommandBufferStub.prototype = Object.create(bindings.StubBase.prototype);
  CommandBufferStub.prototype.initialize = function(sync_client, sync_point_client, lost_observer, shared_state) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.initialize && bindings.StubBindings(this).delegate.initialize(connection.bindHandleToProxy(sync_client, CommandBufferSyncClient), connection.bindHandleToProxy(sync_point_client, CommandBufferSyncPointClient), connection.bindHandleToProxy(lost_observer, CommandBufferLostContextObserver), shared_state);
  }
  CommandBufferStub.prototype.setGetBuffer = function(buffer) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.setGetBuffer && bindings.StubBindings(this).delegate.setGetBuffer(buffer);
  }
  CommandBufferStub.prototype.flush = function(put_offset) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.flush && bindings.StubBindings(this).delegate.flush(put_offset);
  }
  CommandBufferStub.prototype.makeProgress = function(last_get_offset) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.makeProgress && bindings.StubBindings(this).delegate.makeProgress(last_get_offset);
  }
  CommandBufferStub.prototype.registerTransferBuffer = function(id, transfer_buffer, size) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.registerTransferBuffer && bindings.StubBindings(this).delegate.registerTransferBuffer(id, transfer_buffer, size);
  }
  CommandBufferStub.prototype.destroyTransferBuffer = function(id) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.destroyTransferBuffer && bindings.StubBindings(this).delegate.destroyTransferBuffer(id);
  }
  CommandBufferStub.prototype.insertSyncPoint = function(retire) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.insertSyncPoint && bindings.StubBindings(this).delegate.insertSyncPoint(retire);
  }
  CommandBufferStub.prototype.retireSyncPoint = function(sync_point) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.retireSyncPoint && bindings.StubBindings(this).delegate.retireSyncPoint(sync_point);
  }
  CommandBufferStub.prototype.echo = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.echo && bindings.StubBindings(this).delegate.echo();
  }

  CommandBufferStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCommandBuffer_Initialize_Name:
      var params = reader.decodeStruct(CommandBuffer_Initialize_Params);
      this.initialize(params.sync_client, params.sync_point_client, params.lost_observer, params.shared_state);
      return true;
    case kCommandBuffer_SetGetBuffer_Name:
      var params = reader.decodeStruct(CommandBuffer_SetGetBuffer_Params);
      this.setGetBuffer(params.buffer);
      return true;
    case kCommandBuffer_Flush_Name:
      var params = reader.decodeStruct(CommandBuffer_Flush_Params);
      this.flush(params.put_offset);
      return true;
    case kCommandBuffer_MakeProgress_Name:
      var params = reader.decodeStruct(CommandBuffer_MakeProgress_Params);
      this.makeProgress(params.last_get_offset);
      return true;
    case kCommandBuffer_RegisterTransferBuffer_Name:
      var params = reader.decodeStruct(CommandBuffer_RegisterTransferBuffer_Params);
      this.registerTransferBuffer(params.id, params.transfer_buffer, params.size);
      return true;
    case kCommandBuffer_DestroyTransferBuffer_Name:
      var params = reader.decodeStruct(CommandBuffer_DestroyTransferBuffer_Params);
      this.destroyTransferBuffer(params.id);
      return true;
    case kCommandBuffer_InsertSyncPoint_Name:
      var params = reader.decodeStruct(CommandBuffer_InsertSyncPoint_Params);
      this.insertSyncPoint(params.retire);
      return true;
    case kCommandBuffer_RetireSyncPoint_Name:
      var params = reader.decodeStruct(CommandBuffer_RetireSyncPoint_Params);
      this.retireSyncPoint(params.sync_point);
      return true;
    default:
      return false;
    }
  };

  CommandBufferStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCommandBuffer_Echo_Name:
      var params = reader.decodeStruct(CommandBuffer_Echo_Params);
      return this.echo().then(function(response) {
        var responseParams =
            new CommandBuffer_Echo_ResponseParams();
        var builder = new codec.MessageWithRequestIDBuilder(
            kCommandBuffer_Echo_Name,
            codec.align(CommandBuffer_Echo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CommandBuffer_Echo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateCommandBufferRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCommandBuffer_Initialize_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBuffer_Initialize_Params;
      break;
      case kCommandBuffer_SetGetBuffer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBuffer_SetGetBuffer_Params;
      break;
      case kCommandBuffer_Flush_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBuffer_Flush_Params;
      break;
      case kCommandBuffer_MakeProgress_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBuffer_MakeProgress_Params;
      break;
      case kCommandBuffer_RegisterTransferBuffer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBuffer_RegisterTransferBuffer_Params;
      break;
      case kCommandBuffer_DestroyTransferBuffer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBuffer_DestroyTransferBuffer_Params;
      break;
      case kCommandBuffer_InsertSyncPoint_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBuffer_InsertSyncPoint_Params;
      break;
      case kCommandBuffer_RetireSyncPoint_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBuffer_RetireSyncPoint_Params;
      break;
      case kCommandBuffer_Echo_Name:
        if (message.expectsResponse())
          paramsClass = CommandBuffer_Echo_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCommandBufferResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCommandBuffer_Echo_Name:
        if (message.isResponse())
          paramsClass = CommandBuffer_Echo_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CommandBuffer = {
    name: null,
    proxyClass: CommandBufferProxy,
    stubClass: CommandBufferStub,
    validateRequest: validateCommandBufferRequest,
    validateResponse: validateCommandBufferResponse,
  };
  CommandBufferStub.prototype.validator = validateCommandBufferRequest;
  CommandBufferProxy.prototype.validator = validateCommandBufferResponse;


  var exports = {};
  exports.CommandBufferState = CommandBufferState;
  exports.CommandBufferSyncClient = CommandBufferSyncClient;
  exports.CommandBufferSyncPointClient = CommandBufferSyncPointClient;
  exports.CommandBufferLostContextObserver = CommandBufferLostContextObserver;
  exports.CommandBuffer = CommandBuffer;


  return exports;
});
