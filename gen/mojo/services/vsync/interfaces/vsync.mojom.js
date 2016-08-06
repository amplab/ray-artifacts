// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/vsync/interfaces/vsync.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function VSyncProvider_AwaitVSync_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VSyncProvider_AwaitVSync_Params.prototype.initDefaults_ = function() {
  };
  VSyncProvider_AwaitVSync_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VSyncProvider_AwaitVSync_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, VSyncProvider_AwaitVSync_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VSyncProvider_AwaitVSync_Params.encodedSize = codec.kStructHeaderSize + 0;

  VSyncProvider_AwaitVSync_Params.decode = function(decoder) {
    var packed;
    var val = new VSyncProvider_AwaitVSync_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VSyncProvider_AwaitVSync_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VSyncProvider_AwaitVSync_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function VSyncProvider_AwaitVSync_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VSyncProvider_AwaitVSync_ResponseParams.prototype.initDefaults_ = function() {
    this.time_stamp = 0;
  };
  VSyncProvider_AwaitVSync_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VSyncProvider_AwaitVSync_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, VSyncProvider_AwaitVSync_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VSyncProvider_AwaitVSync_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VSyncProvider_AwaitVSync_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VSyncProvider_AwaitVSync_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.time_stamp = decoder.decodeStruct(codec.Int64);
    return val;
  };

  VSyncProvider_AwaitVSync_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VSyncProvider_AwaitVSync_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.time_stamp);
  };

  var kVSyncProvider_AwaitVSync_Name = 0;

  function VSyncProviderProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  VSyncProviderProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  VSyncProviderProxy.prototype.awaitVSync = function() {
    var params = new VSyncProvider_AwaitVSync_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kVSyncProvider_AwaitVSync_Name,
          codec.align(VSyncProvider_AwaitVSync_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VSyncProvider_AwaitVSync_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VSyncProvider_AwaitVSync_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function VSyncProviderStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  VSyncProviderStub.prototype = Object.create(bindings.StubBase.prototype);
  VSyncProviderStub.prototype.awaitVSync = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.awaitVSync && bindings.StubBindings(this).delegate.awaitVSync();
  }

  VSyncProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  VSyncProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVSyncProvider_AwaitVSync_Name:
      var params = reader.decodeStruct(VSyncProvider_AwaitVSync_Params);
      return this.awaitVSync().then(function(response) {
        var responseParams =
            new VSyncProvider_AwaitVSync_ResponseParams();
        responseParams.time_stamp = response.time_stamp;
        var builder = new codec.MessageWithRequestIDBuilder(
            kVSyncProvider_AwaitVSync_Name,
            codec.align(VSyncProvider_AwaitVSync_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VSyncProvider_AwaitVSync_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateVSyncProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVSyncProvider_AwaitVSync_Name:
        if (message.expectsResponse())
          paramsClass = VSyncProvider_AwaitVSync_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVSyncProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kVSyncProvider_AwaitVSync_Name:
        if (message.isResponse())
          paramsClass = VSyncProvider_AwaitVSync_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var VSyncProvider = {
    name: 'vsync::VSyncProvider',
    proxyClass: VSyncProviderProxy,
    stubClass: VSyncProviderStub,
    validateRequest: validateVSyncProviderRequest,
    validateResponse: validateVSyncProviderResponse,
  };
  VSyncProviderStub.prototype.validator = validateVSyncProviderRequest;
  VSyncProviderProxy.prototype.validator = validateVSyncProviderResponse;


  var exports = {};
  exports.VSyncProvider = VSyncProvider;


  return exports;
});
