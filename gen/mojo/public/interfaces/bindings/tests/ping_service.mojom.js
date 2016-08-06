// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/ping_service.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function PingService_Ping_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PingService_Ping_Params.prototype.initDefaults_ = function() {
  };
  PingService_Ping_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PingService_Ping_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PingService_Ping_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PingService_Ping_Params.encodedSize = codec.kStructHeaderSize + 0;

  PingService_Ping_Params.decode = function(decoder) {
    var packed;
    var val = new PingService_Ping_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PingService_Ping_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PingService_Ping_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function PingService_Ping_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PingService_Ping_ResponseParams.prototype.initDefaults_ = function() {
  };
  PingService_Ping_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PingService_Ping_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PingService_Ping_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PingService_Ping_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  PingService_Ping_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PingService_Ping_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PingService_Ping_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PingService_Ping_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };

  var kPingService_Ping_Name = 0;

  function PingServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  PingServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  PingServiceProxy.prototype.ping = function() {
    var params = new PingService_Ping_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kPingService_Ping_Name,
          codec.align(PingService_Ping_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PingService_Ping_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PingService_Ping_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PingServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  PingServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  PingServiceStub.prototype.ping = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.ping && bindings.StubBindings(this).delegate.ping();
  }

  PingServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PingServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPingService_Ping_Name:
      var params = reader.decodeStruct(PingService_Ping_Params);
      return this.ping().then(function(response) {
        var responseParams =
            new PingService_Ping_ResponseParams();
        var builder = new codec.MessageWithRequestIDBuilder(
            kPingService_Ping_Name,
            codec.align(PingService_Ping_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PingService_Ping_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validatePingServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPingService_Ping_Name:
        if (message.expectsResponse())
          paramsClass = PingService_Ping_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePingServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPingService_Ping_Name:
        if (message.isResponse())
          paramsClass = PingService_Ping_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PingService = {
    name: null,
    proxyClass: PingServiceProxy,
    stubClass: PingServiceStub,
    validateRequest: validatePingServiceRequest,
    validateResponse: validatePingServiceResponse,
  };
  PingServiceStub.prototype.validator = validatePingServiceRequest;
  PingServiceProxy.prototype.validator = validatePingServiceResponse;


  var exports = {};
  exports.PingService = PingService;


  return exports;
});
