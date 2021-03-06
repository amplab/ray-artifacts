// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/gpu/interfaces/context_provider.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/gpu/interfaces/command_buffer.mojom",
    "mojo/services/gpu/interfaces/viewport_parameter_listener.mojom",
], function(bindings, codec, connection, core, validator, command_buffer$, viewport_parameter_listener$) {

  function ContextProvider_Create_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContextProvider_Create_Params.prototype.initDefaults_ = function() {
    this.viewport_parameter_listener = null;
  };
  ContextProvider_Create_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContextProvider_Create_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContextProvider_Create_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContextProvider_Create_Params.viewport_parameter_listener
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContextProvider_Create_Params.encodedSize = codec.kStructHeaderSize + 8;

  ContextProvider_Create_Params.decode = function(decoder) {
    var packed;
    var val = new ContextProvider_Create_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.viewport_parameter_listener = decoder.decodeStruct(codec.NullableInterface);
    return val;
  };

  ContextProvider_Create_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContextProvider_Create_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableInterface, val.viewport_parameter_listener);
  };

  function ContextProvider_Create_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContextProvider_Create_ResponseParams.prototype.initDefaults_ = function() {
    this.gles2_client = null;
  };
  ContextProvider_Create_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContextProvider_Create_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContextProvider_Create_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContextProvider_Create_ResponseParams.gles2_client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContextProvider_Create_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ContextProvider_Create_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ContextProvider_Create_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.gles2_client = decoder.decodeStruct(codec.NullableInterface);
    return val;
  };

  ContextProvider_Create_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContextProvider_Create_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableInterface, val.gles2_client);
  };

  var kContextProvider_Create_Name = 0;

  function ContextProviderProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ContextProviderProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ContextProviderProxy.prototype.create = function(viewport_parameter_listener) {
    var params = new ContextProvider_Create_Params();
    params.viewport_parameter_listener = core.isHandle(viewport_parameter_listener) ? viewport_parameter_listener : connection.bindImpl(viewport_parameter_listener, viewport_parameter_listener$.ViewportParameterListener);
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kContextProvider_Create_Name,
          codec.align(ContextProvider_Create_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ContextProvider_Create_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ContextProvider_Create_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ContextProviderStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ContextProviderStub.prototype = Object.create(bindings.StubBase.prototype);
  ContextProviderStub.prototype.create = function(viewport_parameter_listener) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.create && bindings.StubBindings(this).delegate.create(connection.bindHandleToProxy(viewport_parameter_listener, viewport_parameter_listener$.ViewportParameterListener));
  }

  ContextProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ContextProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kContextProvider_Create_Name:
      var params = reader.decodeStruct(ContextProvider_Create_Params);
      return this.create(params.viewport_parameter_listener).then(function(response) {
        var responseParams =
            new ContextProvider_Create_ResponseParams();
        responseParams.gles2_client = response.gles2_client;
        var builder = new codec.MessageWithRequestIDBuilder(
            kContextProvider_Create_Name,
            codec.align(ContextProvider_Create_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ContextProvider_Create_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateContextProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kContextProvider_Create_Name:
        if (message.expectsResponse())
          paramsClass = ContextProvider_Create_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateContextProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kContextProvider_Create_Name:
        if (message.isResponse())
          paramsClass = ContextProvider_Create_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ContextProvider = {
    name: null,
    proxyClass: ContextProviderProxy,
    stubClass: ContextProviderStub,
    validateRequest: validateContextProviderRequest,
    validateResponse: validateContextProviderResponse,
  };
  ContextProviderStub.prototype.validator = validateContextProviderRequest;
  ContextProviderProxy.prototype.validator = validateContextProviderResponse;


  var exports = {};
  exports.ContextProvider = ContextProvider;


  return exports;
});
