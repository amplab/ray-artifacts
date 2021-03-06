// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("examples/apptest/example_service.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function ExampleService_Ping_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ExampleService_Ping_Params.prototype.initDefaults_ = function() {
    this.ping_value = 0;
  };
  ExampleService_Ping_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ExampleService_Ping_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ExampleService_Ping_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ExampleService_Ping_Params.encodedSize = codec.kStructHeaderSize + 8;

  ExampleService_Ping_Params.decode = function(decoder) {
    var packed;
    var val = new ExampleService_Ping_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.ping_value = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ExampleService_Ping_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ExampleService_Ping_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint16, val.ping_value);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ExampleService_Ping_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ExampleService_Ping_ResponseParams.prototype.initDefaults_ = function() {
    this.pong_value = 0;
  };
  ExampleService_Ping_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ExampleService_Ping_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ExampleService_Ping_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ExampleService_Ping_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ExampleService_Ping_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ExampleService_Ping_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pong_value = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ExampleService_Ping_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ExampleService_Ping_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint16, val.pong_value);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kExampleService_Ping_Name = 0;

  function ExampleServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ExampleServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ExampleServiceProxy.prototype.ping = function(ping_value) {
    var params = new ExampleService_Ping_Params();
    params.ping_value = ping_value;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kExampleService_Ping_Name,
          codec.align(ExampleService_Ping_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ExampleService_Ping_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ExampleService_Ping_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ExampleServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ExampleServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  ExampleServiceStub.prototype.ping = function(ping_value) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.ping && bindings.StubBindings(this).delegate.ping(ping_value);
  }

  ExampleServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ExampleServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kExampleService_Ping_Name:
      var params = reader.decodeStruct(ExampleService_Ping_Params);
      return this.ping(params.ping_value).then(function(response) {
        var responseParams =
            new ExampleService_Ping_ResponseParams();
        responseParams.pong_value = response.pong_value;
        var builder = new codec.MessageWithRequestIDBuilder(
            kExampleService_Ping_Name,
            codec.align(ExampleService_Ping_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ExampleService_Ping_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateExampleServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kExampleService_Ping_Name:
        if (message.expectsResponse())
          paramsClass = ExampleService_Ping_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateExampleServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kExampleService_Ping_Name:
        if (message.isResponse())
          paramsClass = ExampleService_Ping_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ExampleService = {
    name: 'mojo::ExampleService',
    proxyClass: ExampleServiceProxy,
    stubClass: ExampleServiceStub,
    validateRequest: validateExampleServiceRequest,
    validateResponse: validateExampleServiceResponse,
  };
  ExampleServiceStub.prototype.validator = validateExampleServiceRequest;
  ExampleServiceProxy.prototype.validator = validateExampleServiceResponse;


  var exports = {};
  exports.ExampleService = ExampleService;


  return exports;
});
