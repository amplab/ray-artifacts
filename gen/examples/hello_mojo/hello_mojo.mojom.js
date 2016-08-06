// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("examples/hello_mojo/hello_mojo.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function HelloMojo_Say_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HelloMojo_Say_Params.prototype.initDefaults_ = function() {
    this.request = null;
  };
  HelloMojo_Say_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HelloMojo_Say_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HelloMojo_Say_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HelloMojo_Say_Params.request
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HelloMojo_Say_Params.encodedSize = codec.kStructHeaderSize + 8;

  HelloMojo_Say_Params.decode = function(decoder) {
    var packed;
    var val = new HelloMojo_Say_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStruct(codec.String);
    return val;
  };

  HelloMojo_Say_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HelloMojo_Say_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.request);
  };

  function HelloMojo_Say_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HelloMojo_Say_ResponseParams.prototype.initDefaults_ = function() {
    this.response = null;
  };
  HelloMojo_Say_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HelloMojo_Say_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HelloMojo_Say_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HelloMojo_Say_ResponseParams.response
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HelloMojo_Say_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  HelloMojo_Say_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new HelloMojo_Say_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStruct(codec.String);
    return val;
  };

  HelloMojo_Say_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HelloMojo_Say_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.response);
  };

  var kHelloMojo_Say_Name = 0;

  function HelloMojoProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  HelloMojoProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  HelloMojoProxy.prototype.say = function(request) {
    var params = new HelloMojo_Say_Params();
    params.request = request;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kHelloMojo_Say_Name,
          codec.align(HelloMojo_Say_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(HelloMojo_Say_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(HelloMojo_Say_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function HelloMojoStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  HelloMojoStub.prototype = Object.create(bindings.StubBase.prototype);
  HelloMojoStub.prototype.say = function(request) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.say && bindings.StubBindings(this).delegate.say(request);
  }

  HelloMojoStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  HelloMojoStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kHelloMojo_Say_Name:
      var params = reader.decodeStruct(HelloMojo_Say_Params);
      return this.say(params.request).then(function(response) {
        var responseParams =
            new HelloMojo_Say_ResponseParams();
        responseParams.response = response.response;
        var builder = new codec.MessageWithRequestIDBuilder(
            kHelloMojo_Say_Name,
            codec.align(HelloMojo_Say_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(HelloMojo_Say_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateHelloMojoRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kHelloMojo_Say_Name:
        if (message.expectsResponse())
          paramsClass = HelloMojo_Say_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateHelloMojoResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kHelloMojo_Say_Name:
        if (message.isResponse())
          paramsClass = HelloMojo_Say_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var HelloMojo = {
    name: 'examples.HelloMojo',
    proxyClass: HelloMojoProxy,
    stubClass: HelloMojoStub,
    validateRequest: validateHelloMojoRequest,
    validateResponse: validateHelloMojoResponse,
  };
  HelloMojoStub.prototype.validator = validateHelloMojoRequest;
  HelloMojoProxy.prototype.validator = validateHelloMojoResponse;


  var exports = {};
  exports.HelloMojo = HelloMojo;


  return exports;
});
