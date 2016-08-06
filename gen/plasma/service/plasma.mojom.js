// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("plasma/service/plasma.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function ObjectInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ObjectInfo.prototype.initDefaults_ = function() {
    this.name = null;
    this.size = 0;
    this.create_time = 0;
    this.construct_duration = 0;
    this.creator_id = 0;
  };
  ObjectInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ObjectInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ObjectInfo.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ObjectInfo.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;





    return validator.validationError.NONE;
  };

  ObjectInfo.encodedSize = codec.kStructHeaderSize + 40;

  ObjectInfo.decode = function(decoder) {
    var packed;
    var val = new ObjectInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    val.size = decoder.decodeStruct(codec.Uint64);
    val.create_time = decoder.decodeStruct(codec.Int64);
    val.construct_duration = decoder.decodeStruct(codec.Int64);
    val.creator_id = decoder.decodeStruct(codec.Int64);
    return val;
  };

  ObjectInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ObjectInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.Uint64, val.size);
    encoder.encodeStruct(codec.Int64, val.create_time);
    encoder.encodeStruct(codec.Int64, val.construct_duration);
    encoder.encodeStruct(codec.Int64, val.creator_id);
  };

  function Plasma_CreateObject_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Plasma_CreateObject_Params.prototype.initDefaults_ = function() {
    this.object_id = null;
    this.size = 0;
    this.name = null;
    this.creator_id = 0;
  };
  Plasma_CreateObject_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Plasma_CreateObject_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Plasma_CreateObject_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Plasma_CreateObject_Params.object_id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate Plasma_CreateObject_Params.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Plasma_CreateObject_Params.encodedSize = codec.kStructHeaderSize + 32;

  Plasma_CreateObject_Params.decode = function(decoder) {
    var packed;
    var val = new Plasma_CreateObject_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.object_id = decoder.decodeStruct(codec.String);
    val.size = decoder.decodeStruct(codec.Uint64);
    val.name = decoder.decodeStruct(codec.String);
    val.creator_id = decoder.decodeStruct(codec.Int64);
    return val;
  };

  Plasma_CreateObject_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Plasma_CreateObject_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.object_id);
    encoder.encodeStruct(codec.Uint64, val.size);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.Int64, val.creator_id);
  };

  function Plasma_CreateObject_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Plasma_CreateObject_ResponseParams.prototype.initDefaults_ = function() {
    this.buffer = null;
  };
  Plasma_CreateObject_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Plasma_CreateObject_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Plasma_CreateObject_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Plasma_CreateObject_ResponseParams.buffer
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Plasma_CreateObject_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Plasma_CreateObject_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Plasma_CreateObject_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.buffer = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Plasma_CreateObject_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Plasma_CreateObject_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.buffer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Plasma_ResizeObject_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Plasma_ResizeObject_Params.prototype.initDefaults_ = function() {
    this.object_id = null;
    this.new_size = 0;
  };
  Plasma_ResizeObject_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Plasma_ResizeObject_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Plasma_ResizeObject_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Plasma_ResizeObject_Params.object_id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Plasma_ResizeObject_Params.encodedSize = codec.kStructHeaderSize + 16;

  Plasma_ResizeObject_Params.decode = function(decoder) {
    var packed;
    var val = new Plasma_ResizeObject_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.object_id = decoder.decodeStruct(codec.String);
    val.new_size = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  Plasma_ResizeObject_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Plasma_ResizeObject_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.object_id);
    encoder.encodeStruct(codec.Uint64, val.new_size);
  };

  function Plasma_ResizeObject_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Plasma_ResizeObject_ResponseParams.prototype.initDefaults_ = function() {
    this.buffer = null;
  };
  Plasma_ResizeObject_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Plasma_ResizeObject_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Plasma_ResizeObject_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Plasma_ResizeObject_ResponseParams.buffer
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Plasma_ResizeObject_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Plasma_ResizeObject_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Plasma_ResizeObject_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.buffer = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Plasma_ResizeObject_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Plasma_ResizeObject_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.buffer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Plasma_SealObject_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Plasma_SealObject_Params.prototype.initDefaults_ = function() {
    this.object_id = null;
  };
  Plasma_SealObject_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Plasma_SealObject_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Plasma_SealObject_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Plasma_SealObject_Params.object_id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Plasma_SealObject_Params.encodedSize = codec.kStructHeaderSize + 8;

  Plasma_SealObject_Params.decode = function(decoder) {
    var packed;
    var val = new Plasma_SealObject_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.object_id = decoder.decodeStruct(codec.String);
    return val;
  };

  Plasma_SealObject_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Plasma_SealObject_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.object_id);
  };

  function Plasma_GetObject_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Plasma_GetObject_Params.prototype.initDefaults_ = function() {
    this.object_id = null;
    this.block = false;
  };
  Plasma_GetObject_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Plasma_GetObject_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Plasma_GetObject_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Plasma_GetObject_Params.object_id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Plasma_GetObject_Params.encodedSize = codec.kStructHeaderSize + 16;

  Plasma_GetObject_Params.decode = function(decoder) {
    var packed;
    var val = new Plasma_GetObject_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.object_id = decoder.decodeStruct(codec.String);
    val.block = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Plasma_GetObject_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Plasma_GetObject_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.object_id);
    encoder.encodeStruct(codec.Uint8, val.block);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Plasma_GetObject_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Plasma_GetObject_ResponseParams.prototype.initDefaults_ = function() {
    this.buffer = null;
    this.size = 0;
  };
  Plasma_GetObject_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Plasma_GetObject_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Plasma_GetObject_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Plasma_GetObject_ResponseParams.buffer
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Plasma_GetObject_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Plasma_GetObject_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Plasma_GetObject_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.buffer = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.size = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  Plasma_GetObject_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Plasma_GetObject_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.buffer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint64, val.size);
  };

  function Plasma_ListObjects_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Plasma_ListObjects_Params.prototype.initDefaults_ = function() {
  };
  Plasma_ListObjects_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Plasma_ListObjects_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Plasma_ListObjects_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Plasma_ListObjects_Params.encodedSize = codec.kStructHeaderSize + 0;

  Plasma_ListObjects_Params.decode = function(decoder) {
    var packed;
    var val = new Plasma_ListObjects_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Plasma_ListObjects_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Plasma_ListObjects_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function Plasma_ListObjects_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Plasma_ListObjects_ResponseParams.prototype.initDefaults_ = function() {
    this.info = null;
  };
  Plasma_ListObjects_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Plasma_ListObjects_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Plasma_ListObjects_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Plasma_ListObjects_ResponseParams.info
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(ObjectInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Plasma_ListObjects_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Plasma_ListObjects_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Plasma_ListObjects_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeArrayPointer(new codec.PointerTo(ObjectInfo));
    return val;
  };

  Plasma_ListObjects_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Plasma_ListObjects_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(ObjectInfo), val.info);
  };

  var kPlasma_CreateObject_Name = 0;
  var kPlasma_ResizeObject_Name = 1;
  var kPlasma_SealObject_Name = 2;
  var kPlasma_GetObject_Name = 3;
  var kPlasma_ListObjects_Name = 4;

  function PlasmaProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  PlasmaProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  PlasmaProxy.prototype.createObject = function(object_id, size, name, creator_id) {
    var params = new Plasma_CreateObject_Params();
    params.object_id = object_id;
    params.size = size;
    params.name = name;
    params.creator_id = creator_id;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kPlasma_CreateObject_Name,
          codec.align(Plasma_CreateObject_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Plasma_CreateObject_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Plasma_CreateObject_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PlasmaProxy.prototype.resizeObject = function(object_id, new_size) {
    var params = new Plasma_ResizeObject_Params();
    params.object_id = object_id;
    params.new_size = new_size;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kPlasma_ResizeObject_Name,
          codec.align(Plasma_ResizeObject_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Plasma_ResizeObject_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Plasma_ResizeObject_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PlasmaProxy.prototype.sealObject = function(object_id) {
    var params = new Plasma_SealObject_Params();
    params.object_id = object_id;
    var builder = new codec.MessageBuilder(
        kPlasma_SealObject_Name,
        codec.align(Plasma_SealObject_Params.encodedSize));
    builder.encodeStruct(Plasma_SealObject_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PlasmaProxy.prototype.getObject = function(object_id, block) {
    var params = new Plasma_GetObject_Params();
    params.object_id = object_id;
    params.block = block;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kPlasma_GetObject_Name,
          codec.align(Plasma_GetObject_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Plasma_GetObject_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Plasma_GetObject_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PlasmaProxy.prototype.listObjects = function() {
    var params = new Plasma_ListObjects_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kPlasma_ListObjects_Name,
          codec.align(Plasma_ListObjects_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Plasma_ListObjects_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Plasma_ListObjects_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PlasmaStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  PlasmaStub.prototype = Object.create(bindings.StubBase.prototype);
  PlasmaStub.prototype.createObject = function(object_id, size, name, creator_id) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.createObject && bindings.StubBindings(this).delegate.createObject(object_id, size, name, creator_id);
  }
  PlasmaStub.prototype.resizeObject = function(object_id, new_size) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.resizeObject && bindings.StubBindings(this).delegate.resizeObject(object_id, new_size);
  }
  PlasmaStub.prototype.sealObject = function(object_id) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.sealObject && bindings.StubBindings(this).delegate.sealObject(object_id);
  }
  PlasmaStub.prototype.getObject = function(object_id, block) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getObject && bindings.StubBindings(this).delegate.getObject(object_id, block);
  }
  PlasmaStub.prototype.listObjects = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.listObjects && bindings.StubBindings(this).delegate.listObjects();
  }

  PlasmaStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPlasma_SealObject_Name:
      var params = reader.decodeStruct(Plasma_SealObject_Params);
      this.sealObject(params.object_id);
      return true;
    default:
      return false;
    }
  };

  PlasmaStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPlasma_CreateObject_Name:
      var params = reader.decodeStruct(Plasma_CreateObject_Params);
      return this.createObject(params.object_id, params.size, params.name, params.creator_id).then(function(response) {
        var responseParams =
            new Plasma_CreateObject_ResponseParams();
        responseParams.buffer = response.buffer;
        var builder = new codec.MessageWithRequestIDBuilder(
            kPlasma_CreateObject_Name,
            codec.align(Plasma_CreateObject_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Plasma_CreateObject_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kPlasma_ResizeObject_Name:
      var params = reader.decodeStruct(Plasma_ResizeObject_Params);
      return this.resizeObject(params.object_id, params.new_size).then(function(response) {
        var responseParams =
            new Plasma_ResizeObject_ResponseParams();
        responseParams.buffer = response.buffer;
        var builder = new codec.MessageWithRequestIDBuilder(
            kPlasma_ResizeObject_Name,
            codec.align(Plasma_ResizeObject_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Plasma_ResizeObject_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kPlasma_GetObject_Name:
      var params = reader.decodeStruct(Plasma_GetObject_Params);
      return this.getObject(params.object_id, params.block).then(function(response) {
        var responseParams =
            new Plasma_GetObject_ResponseParams();
        responseParams.buffer = response.buffer;
        responseParams.size = response.size;
        var builder = new codec.MessageWithRequestIDBuilder(
            kPlasma_GetObject_Name,
            codec.align(Plasma_GetObject_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Plasma_GetObject_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kPlasma_ListObjects_Name:
      var params = reader.decodeStruct(Plasma_ListObjects_Params);
      return this.listObjects().then(function(response) {
        var responseParams =
            new Plasma_ListObjects_ResponseParams();
        responseParams.info = response.info;
        var builder = new codec.MessageWithRequestIDBuilder(
            kPlasma_ListObjects_Name,
            codec.align(Plasma_ListObjects_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Plasma_ListObjects_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validatePlasmaRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPlasma_CreateObject_Name:
        if (message.expectsResponse())
          paramsClass = Plasma_CreateObject_Params;
      break;
      case kPlasma_ResizeObject_Name:
        if (message.expectsResponse())
          paramsClass = Plasma_ResizeObject_Params;
      break;
      case kPlasma_SealObject_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Plasma_SealObject_Params;
      break;
      case kPlasma_GetObject_Name:
        if (message.expectsResponse())
          paramsClass = Plasma_GetObject_Params;
      break;
      case kPlasma_ListObjects_Name:
        if (message.expectsResponse())
          paramsClass = Plasma_ListObjects_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePlasmaResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPlasma_CreateObject_Name:
        if (message.isResponse())
          paramsClass = Plasma_CreateObject_ResponseParams;
        break;
      case kPlasma_ResizeObject_Name:
        if (message.isResponse())
          paramsClass = Plasma_ResizeObject_ResponseParams;
        break;
      case kPlasma_GetObject_Name:
        if (message.isResponse())
          paramsClass = Plasma_GetObject_ResponseParams;
        break;
      case kPlasma_ListObjects_Name:
        if (message.isResponse())
          paramsClass = Plasma_ListObjects_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Plasma = {
    name: 'plasma::service::Plasma',
    proxyClass: PlasmaProxy,
    stubClass: PlasmaStub,
    validateRequest: validatePlasmaRequest,
    validateResponse: validatePlasmaResponse,
  };
  PlasmaStub.prototype.validator = validatePlasmaRequest;
  PlasmaProxy.prototype.validator = validatePlasmaResponse;


  var exports = {};
  exports.ObjectInfo = ObjectInfo;
  exports.Plasma = Plasma;


  return exports;
});
