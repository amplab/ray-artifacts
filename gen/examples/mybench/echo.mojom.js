// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("examples/mybench/echo.mojom", [
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
    this.ms_since_epoch = 0;
    this.num_bytes = 0;
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



    return validator.validationError.NONE;
  };

  ObjectInfo.encodedSize = codec.kStructHeaderSize + 16;

  ObjectInfo.decode = function(decoder) {
    var packed;
    var val = new ObjectInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.ms_since_epoch = decoder.decodeStruct(codec.Int64);
    val.num_bytes = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  ObjectInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ObjectInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.ms_since_epoch);
    encoder.encodeStruct(codec.Uint64, val.num_bytes);
  };

  function Echo_EchoString_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Echo_EchoString_Params.prototype.initDefaults_ = function() {
    this.value = 0;
  };
  Echo_EchoString_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Echo_EchoString_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Echo_EchoString_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Echo_EchoString_Params.encodedSize = codec.kStructHeaderSize + 8;

  Echo_EchoString_Params.decode = function(decoder) {
    var packed;
    var val = new Echo_EchoString_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Echo_EchoString_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Echo_EchoString_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.value);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Echo_EchoString_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Echo_EchoString_ResponseParams.prototype.initDefaults_ = function() {
    this.value = 0;
  };
  Echo_EchoString_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Echo_EchoString_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Echo_EchoString_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Echo_EchoString_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Echo_EchoString_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Echo_EchoString_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Echo_EchoString_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Echo_EchoString_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.value);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Echo_BuildObject_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Echo_BuildObject_Params.prototype.initDefaults_ = function() {
    this.object_id = 0;
    this.size = 0;
  };
  Echo_BuildObject_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Echo_BuildObject_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Echo_BuildObject_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  Echo_BuildObject_Params.encodedSize = codec.kStructHeaderSize + 16;

  Echo_BuildObject_Params.decode = function(decoder) {
    var packed;
    var val = new Echo_BuildObject_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.object_id = decoder.decodeStruct(codec.Int64);
    val.size = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  Echo_BuildObject_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Echo_BuildObject_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.object_id);
    encoder.encodeStruct(codec.Uint64, val.size);
  };

  function Echo_BuildObject_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Echo_BuildObject_ResponseParams.prototype.initDefaults_ = function() {
    this.buffer = null;
  };
  Echo_BuildObject_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Echo_BuildObject_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Echo_BuildObject_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Echo_BuildObject_ResponseParams.buffer
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Echo_BuildObject_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Echo_BuildObject_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Echo_BuildObject_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.buffer = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Echo_BuildObject_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Echo_BuildObject_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.buffer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Echo_ListObjects_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Echo_ListObjects_Params.prototype.initDefaults_ = function() {
  };
  Echo_ListObjects_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Echo_ListObjects_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Echo_ListObjects_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Echo_ListObjects_Params.encodedSize = codec.kStructHeaderSize + 0;

  Echo_ListObjects_Params.decode = function(decoder) {
    var packed;
    var val = new Echo_ListObjects_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Echo_ListObjects_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Echo_ListObjects_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function Echo_ListObjects_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Echo_ListObjects_ResponseParams.prototype.initDefaults_ = function() {
    this.info = null;
  };
  Echo_ListObjects_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Echo_ListObjects_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Echo_ListObjects_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Echo_ListObjects_ResponseParams.info
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(ObjectInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Echo_ListObjects_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Echo_ListObjects_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Echo_ListObjects_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeArrayPointer(new codec.PointerTo(ObjectInfo));
    return val;
  };

  Echo_ListObjects_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Echo_ListObjects_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(ObjectInfo), val.info);
  };

  var kEcho_EchoString_Name = 0;
  var kEcho_BuildObject_Name = 1;
  var kEcho_ListObjects_Name = 2;

  function EchoProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  EchoProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  EchoProxy.prototype.echoString = function(value) {
    var params = new Echo_EchoString_Params();
    params.value = value;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kEcho_EchoString_Name,
          codec.align(Echo_EchoString_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Echo_EchoString_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Echo_EchoString_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  EchoProxy.prototype.buildObject = function(object_id, size) {
    var params = new Echo_BuildObject_Params();
    params.object_id = object_id;
    params.size = size;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kEcho_BuildObject_Name,
          codec.align(Echo_BuildObject_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Echo_BuildObject_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Echo_BuildObject_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  EchoProxy.prototype.listObjects = function() {
    var params = new Echo_ListObjects_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kEcho_ListObjects_Name,
          codec.align(Echo_ListObjects_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Echo_ListObjects_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Echo_ListObjects_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function EchoStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  EchoStub.prototype = Object.create(bindings.StubBase.prototype);
  EchoStub.prototype.echoString = function(value) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.echoString && bindings.StubBindings(this).delegate.echoString(value);
  }
  EchoStub.prototype.buildObject = function(object_id, size) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.buildObject && bindings.StubBindings(this).delegate.buildObject(object_id, size);
  }
  EchoStub.prototype.listObjects = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.listObjects && bindings.StubBindings(this).delegate.listObjects();
  }

  EchoStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  EchoStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kEcho_EchoString_Name:
      var params = reader.decodeStruct(Echo_EchoString_Params);
      return this.echoString(params.value).then(function(response) {
        var responseParams =
            new Echo_EchoString_ResponseParams();
        responseParams.value = response.value;
        var builder = new codec.MessageWithRequestIDBuilder(
            kEcho_EchoString_Name,
            codec.align(Echo_EchoString_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Echo_EchoString_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kEcho_BuildObject_Name:
      var params = reader.decodeStruct(Echo_BuildObject_Params);
      return this.buildObject(params.object_id, params.size).then(function(response) {
        var responseParams =
            new Echo_BuildObject_ResponseParams();
        responseParams.buffer = response.buffer;
        var builder = new codec.MessageWithRequestIDBuilder(
            kEcho_BuildObject_Name,
            codec.align(Echo_BuildObject_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Echo_BuildObject_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kEcho_ListObjects_Name:
      var params = reader.decodeStruct(Echo_ListObjects_Params);
      return this.listObjects().then(function(response) {
        var responseParams =
            new Echo_ListObjects_ResponseParams();
        responseParams.info = response.info;
        var builder = new codec.MessageWithRequestIDBuilder(
            kEcho_ListObjects_Name,
            codec.align(Echo_ListObjects_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Echo_ListObjects_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateEchoRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kEcho_EchoString_Name:
        if (message.expectsResponse())
          paramsClass = Echo_EchoString_Params;
      break;
      case kEcho_BuildObject_Name:
        if (message.expectsResponse())
          paramsClass = Echo_BuildObject_Params;
      break;
      case kEcho_ListObjects_Name:
        if (message.expectsResponse())
          paramsClass = Echo_ListObjects_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateEchoResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kEcho_EchoString_Name:
        if (message.isResponse())
          paramsClass = Echo_EchoString_ResponseParams;
        break;
      case kEcho_BuildObject_Name:
        if (message.isResponse())
          paramsClass = Echo_BuildObject_ResponseParams;
        break;
      case kEcho_ListObjects_Name:
        if (message.isResponse())
          paramsClass = Echo_ListObjects_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Echo = {
    name: 'mojo::examples::Echo',
    proxyClass: EchoProxy,
    stubClass: EchoStub,
    validateRequest: validateEchoRequest,
    validateResponse: validateEchoResponse,
  };
  EchoStub.prototype.validator = validateEchoRequest;
  EchoProxy.prototype.validator = validateEchoResponse;


  var exports = {};
  exports.ObjectInfo = ObjectInfo;
  exports.Echo = Echo;


  return exports;
});
