// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("services/js/test/echo_service.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function EchoService_EchoString_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EchoService_EchoString_Params.prototype.initDefaults_ = function() {
    this.value = null;
  };
  EchoService_EchoString_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EchoService_EchoString_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, EchoService_EchoString_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate EchoService_EchoString_Params.value
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EchoService_EchoString_Params.encodedSize = codec.kStructHeaderSize + 8;

  EchoService_EchoString_Params.decode = function(decoder) {
    var packed;
    var val = new EchoService_EchoString_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  EchoService_EchoString_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EchoService_EchoString_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.value);
  };

  function EchoService_EchoString_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EchoService_EchoString_ResponseParams.prototype.initDefaults_ = function() {
    this.value = null;
  };
  EchoService_EchoString_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EchoService_EchoString_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, EchoService_EchoString_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate EchoService_EchoString_ResponseParams.value
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EchoService_EchoString_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  EchoService_EchoString_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new EchoService_EchoString_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  EchoService_EchoString_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EchoService_EchoString_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.value);
  };

  function EchoService_Quit_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EchoService_Quit_Params.prototype.initDefaults_ = function() {
  };
  EchoService_Quit_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EchoService_Quit_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, EchoService_Quit_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EchoService_Quit_Params.encodedSize = codec.kStructHeaderSize + 0;

  EchoService_Quit_Params.decode = function(decoder) {
    var packed;
    var val = new EchoService_Quit_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  EchoService_Quit_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EchoService_Quit_Params.encodedSize);
    encoder.writeUint32(0);
  };

  var kEchoService_EchoString_Name = 0;
  var kEchoService_Quit_Name = 1;

  function EchoServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  EchoServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  EchoServiceProxy.prototype.echoString = function(value) {
    var params = new EchoService_EchoString_Params();
    params.value = value;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kEchoService_EchoString_Name,
          codec.align(EchoService_EchoString_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(EchoService_EchoString_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(EchoService_EchoString_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  EchoServiceProxy.prototype.quit = function() {
    var params = new EchoService_Quit_Params();
    var builder = new codec.MessageBuilder(
        kEchoService_Quit_Name,
        codec.align(EchoService_Quit_Params.encodedSize));
    builder.encodeStruct(EchoService_Quit_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function EchoServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  EchoServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  EchoServiceStub.prototype.echoString = function(value) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.echoString && bindings.StubBindings(this).delegate.echoString(value);
  }
  EchoServiceStub.prototype.quit = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.quit && bindings.StubBindings(this).delegate.quit();
  }

  EchoServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kEchoService_Quit_Name:
      var params = reader.decodeStruct(EchoService_Quit_Params);
      this.quit();
      return true;
    default:
      return false;
    }
  };

  EchoServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kEchoService_EchoString_Name:
      var params = reader.decodeStruct(EchoService_EchoString_Params);
      return this.echoString(params.value).then(function(response) {
        var responseParams =
            new EchoService_EchoString_ResponseParams();
        responseParams.value = response.value;
        var builder = new codec.MessageWithRequestIDBuilder(
            kEchoService_EchoString_Name,
            codec.align(EchoService_EchoString_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(EchoService_EchoString_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateEchoServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kEchoService_EchoString_Name:
        if (message.expectsResponse())
          paramsClass = EchoService_EchoString_Params;
      break;
      case kEchoService_Quit_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = EchoService_Quit_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateEchoServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kEchoService_EchoString_Name:
        if (message.isResponse())
          paramsClass = EchoService_EchoString_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var EchoService = {
    name: 'mojo::EchoService',
    proxyClass: EchoServiceProxy,
    stubClass: EchoServiceStub,
    validateRequest: validateEchoServiceRequest,
    validateResponse: validateEchoServiceResponse,
  };
  EchoServiceStub.prototype.validator = validateEchoServiceRequest;
  EchoServiceProxy.prototype.validator = validateEchoServiceResponse;


  var exports = {};
  exports.EchoService = EchoService;


  return exports;
});
