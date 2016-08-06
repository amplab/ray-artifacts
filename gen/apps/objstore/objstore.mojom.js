// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("apps/objstore/objstore.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function ObjStore_BuildObject_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ObjStore_BuildObject_Params.prototype.initDefaults_ = function() {
    this.object_id = 0;
    this.size = 0;
  };
  ObjStore_BuildObject_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ObjStore_BuildObject_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ObjStore_BuildObject_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  ObjStore_BuildObject_Params.encodedSize = codec.kStructHeaderSize + 16;

  ObjStore_BuildObject_Params.decode = function(decoder) {
    var packed;
    var val = new ObjStore_BuildObject_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.object_id = decoder.decodeStruct(codec.Int64);
    val.size = decoder.decodeStruct(codec.Int64);
    return val;
  };

  ObjStore_BuildObject_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ObjStore_BuildObject_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.object_id);
    encoder.encodeStruct(codec.Int64, val.size);
  };

  function ObjStore_BuildObject_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ObjStore_BuildObject_ResponseParams.prototype.initDefaults_ = function() {
    this.buffer = null;
  };
  ObjStore_BuildObject_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ObjStore_BuildObject_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ObjStore_BuildObject_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ObjStore_BuildObject_ResponseParams.buffer
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ObjStore_BuildObject_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ObjStore_BuildObject_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ObjStore_BuildObject_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.buffer = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ObjStore_BuildObject_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ObjStore_BuildObject_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.buffer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kObjStore_BuildObject_Name = 0;

  function ObjStoreProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ObjStoreProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ObjStoreProxy.prototype.buildObject = function(object_id, size) {
    var params = new ObjStore_BuildObject_Params();
    params.object_id = object_id;
    params.size = size;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kObjStore_BuildObject_Name,
          codec.align(ObjStore_BuildObject_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ObjStore_BuildObject_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ObjStore_BuildObject_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ObjStoreStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ObjStoreStub.prototype = Object.create(bindings.StubBase.prototype);
  ObjStoreStub.prototype.buildObject = function(object_id, size) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.buildObject && bindings.StubBindings(this).delegate.buildObject(object_id, size);
  }

  ObjStoreStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ObjStoreStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kObjStore_BuildObject_Name:
      var params = reader.decodeStruct(ObjStore_BuildObject_Params);
      return this.buildObject(params.object_id, params.size).then(function(response) {
        var responseParams =
            new ObjStore_BuildObject_ResponseParams();
        responseParams.buffer = response.buffer;
        var builder = new codec.MessageWithRequestIDBuilder(
            kObjStore_BuildObject_Name,
            codec.align(ObjStore_BuildObject_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ObjStore_BuildObject_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateObjStoreRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kObjStore_BuildObject_Name:
        if (message.expectsResponse())
          paramsClass = ObjStore_BuildObject_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateObjStoreResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kObjStore_BuildObject_Name:
        if (message.isResponse())
          paramsClass = ObjStore_BuildObject_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ObjStore = {
    name: 'mojo::apps::ObjStore',
    proxyClass: ObjStoreProxy,
    stubClass: ObjStoreStub,
    validateRequest: validateObjStoreRequest,
    validateResponse: validateObjStoreResponse,
  };
  ObjStoreStub.prototype.validator = validateObjStoreRequest;
  ObjStoreProxy.prototype.validator = validateObjStoreResponse;


  var exports = {};
  exports.ObjStore = ObjStore;


  return exports;
});
