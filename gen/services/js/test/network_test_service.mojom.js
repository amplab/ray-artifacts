// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("services/js/test/network_test_service.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function NetworkTestService_GetFileSize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkTestService_GetFileSize_Params.prototype.initDefaults_ = function() {
    this.url = null;
  };
  NetworkTestService_GetFileSize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkTestService_GetFileSize_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkTestService_GetFileSize_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkTestService_GetFileSize_Params.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkTestService_GetFileSize_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkTestService_GetFileSize_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkTestService_GetFileSize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStruct(codec.String);
    return val;
  };

  NetworkTestService_GetFileSize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkTestService_GetFileSize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.url);
  };

  function NetworkTestService_GetFileSize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkTestService_GetFileSize_ResponseParams.prototype.initDefaults_ = function() {
    this.ok = false;
    this.size = 0;
  };
  NetworkTestService_GetFileSize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkTestService_GetFileSize_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkTestService_GetFileSize_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  NetworkTestService_GetFileSize_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NetworkTestService_GetFileSize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkTestService_GetFileSize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.ok = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.size = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  NetworkTestService_GetFileSize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkTestService_GetFileSize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.ok);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint64, val.size);
  };

  function NetworkTestService_Quit_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkTestService_Quit_Params.prototype.initDefaults_ = function() {
  };
  NetworkTestService_Quit_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkTestService_Quit_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkTestService_Quit_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkTestService_Quit_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkTestService_Quit_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkTestService_Quit_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkTestService_Quit_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkTestService_Quit_Params.encodedSize);
    encoder.writeUint32(0);
  };

  var kNetworkTestService_GetFileSize_Name = 0;
  var kNetworkTestService_Quit_Name = 1;

  function NetworkTestServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  NetworkTestServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  NetworkTestServiceProxy.prototype.getFileSize = function(url) {
    var params = new NetworkTestService_GetFileSize_Params();
    params.url = url;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kNetworkTestService_GetFileSize_Name,
          codec.align(NetworkTestService_GetFileSize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkTestService_GetFileSize_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkTestService_GetFileSize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkTestServiceProxy.prototype.quit = function() {
    var params = new NetworkTestService_Quit_Params();
    var builder = new codec.MessageBuilder(
        kNetworkTestService_Quit_Name,
        codec.align(NetworkTestService_Quit_Params.encodedSize));
    builder.encodeStruct(NetworkTestService_Quit_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NetworkTestServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  NetworkTestServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  NetworkTestServiceStub.prototype.getFileSize = function(url) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getFileSize && bindings.StubBindings(this).delegate.getFileSize(url);
  }
  NetworkTestServiceStub.prototype.quit = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.quit && bindings.StubBindings(this).delegate.quit();
  }

  NetworkTestServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkTestService_Quit_Name:
      var params = reader.decodeStruct(NetworkTestService_Quit_Params);
      this.quit();
      return true;
    default:
      return false;
    }
  };

  NetworkTestServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkTestService_GetFileSize_Name:
      var params = reader.decodeStruct(NetworkTestService_GetFileSize_Params);
      return this.getFileSize(params.url).then(function(response) {
        var responseParams =
            new NetworkTestService_GetFileSize_ResponseParams();
        responseParams.ok = response.ok;
        responseParams.size = response.size;
        var builder = new codec.MessageWithRequestIDBuilder(
            kNetworkTestService_GetFileSize_Name,
            codec.align(NetworkTestService_GetFileSize_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkTestService_GetFileSize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateNetworkTestServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNetworkTestService_GetFileSize_Name:
        if (message.expectsResponse())
          paramsClass = NetworkTestService_GetFileSize_Params;
      break;
      case kNetworkTestService_Quit_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkTestService_Quit_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNetworkTestServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNetworkTestService_GetFileSize_Name:
        if (message.isResponse())
          paramsClass = NetworkTestService_GetFileSize_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NetworkTestService = {
    name: 'js::NetworkTestService',
    proxyClass: NetworkTestServiceProxy,
    stubClass: NetworkTestServiceStub,
    validateRequest: validateNetworkTestServiceRequest,
    validateResponse: validateNetworkTestServiceResponse,
  };
  NetworkTestServiceStub.prototype.validator = validateNetworkTestServiceRequest;
  NetworkTestServiceProxy.prototype.validator = validateNetworkTestServiceResponse;


  var exports = {};
  exports.NetworkTestService = NetworkTestService;


  return exports;
});
