// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/http_server/interfaces/http_server.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/http_server/interfaces/http_request.mojom",
    "mojo/services/http_server/interfaces/http_response.mojom",
], function(bindings, codec, connection, core, validator, http_request$, http_response$) {

  function HttpServer_SetHandler_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpServer_SetHandler_Params.prototype.initDefaults_ = function() {
    this.pattern = null;
    this.handler = null;
  };
  HttpServer_SetHandler_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpServer_SetHandler_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpServer_SetHandler_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpServer_SetHandler_Params.pattern
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpServer_SetHandler_Params.handler
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpServer_SetHandler_Params.encodedSize = codec.kStructHeaderSize + 16;

  HttpServer_SetHandler_Params.decode = function(decoder) {
    var packed;
    var val = new HttpServer_SetHandler_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pattern = decoder.decodeStruct(codec.String);
    val.handler = decoder.decodeStruct(codec.Interface);
    return val;
  };

  HttpServer_SetHandler_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpServer_SetHandler_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.pattern);
    encoder.encodeStruct(codec.Interface, val.handler);
  };

  function HttpServer_SetHandler_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpServer_SetHandler_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  HttpServer_SetHandler_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpServer_SetHandler_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpServer_SetHandler_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  HttpServer_SetHandler_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  HttpServer_SetHandler_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new HttpServer_SetHandler_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.success = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HttpServer_SetHandler_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpServer_SetHandler_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.success);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function HttpServer_GetPort_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpServer_GetPort_Params.prototype.initDefaults_ = function() {
  };
  HttpServer_GetPort_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpServer_GetPort_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpServer_GetPort_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpServer_GetPort_Params.encodedSize = codec.kStructHeaderSize + 0;

  HttpServer_GetPort_Params.decode = function(decoder) {
    var packed;
    var val = new HttpServer_GetPort_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  HttpServer_GetPort_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpServer_GetPort_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function HttpServer_GetPort_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpServer_GetPort_ResponseParams.prototype.initDefaults_ = function() {
    this.port = 0;
  };
  HttpServer_GetPort_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpServer_GetPort_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpServer_GetPort_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  HttpServer_GetPort_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  HttpServer_GetPort_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new HttpServer_GetPort_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.port = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HttpServer_GetPort_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpServer_GetPort_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint16, val.port);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function HttpHandler_HandleRequest_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpHandler_HandleRequest_Params.prototype.initDefaults_ = function() {
    this.request = null;
  };
  HttpHandler_HandleRequest_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpHandler_HandleRequest_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpHandler_HandleRequest_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpHandler_HandleRequest_Params.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, http_request$.HttpRequest, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpHandler_HandleRequest_Params.encodedSize = codec.kStructHeaderSize + 8;

  HttpHandler_HandleRequest_Params.decode = function(decoder) {
    var packed;
    var val = new HttpHandler_HandleRequest_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStructPointer(http_request$.HttpRequest);
    return val;
  };

  HttpHandler_HandleRequest_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpHandler_HandleRequest_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(http_request$.HttpRequest, val.request);
  };

  function HttpHandler_HandleRequest_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpHandler_HandleRequest_ResponseParams.prototype.initDefaults_ = function() {
    this.response = null;
  };
  HttpHandler_HandleRequest_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpHandler_HandleRequest_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpHandler_HandleRequest_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpHandler_HandleRequest_ResponseParams.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, http_response$.HttpResponse, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpHandler_HandleRequest_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  HttpHandler_HandleRequest_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new HttpHandler_HandleRequest_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(http_response$.HttpResponse);
    return val;
  };

  HttpHandler_HandleRequest_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpHandler_HandleRequest_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(http_response$.HttpResponse, val.response);
  };

  var kHttpServer_SetHandler_Name = 0;
  var kHttpServer_GetPort_Name = 1;

  function HttpServerProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  HttpServerProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  HttpServerProxy.prototype.setHandler = function(pattern, handler) {
    var params = new HttpServer_SetHandler_Params();
    params.pattern = pattern;
    params.handler = core.isHandle(handler) ? handler : connection.bindImpl(handler, HttpHandler);
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kHttpServer_SetHandler_Name,
          codec.align(HttpServer_SetHandler_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(HttpServer_SetHandler_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(HttpServer_SetHandler_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  HttpServerProxy.prototype.getPort = function() {
    var params = new HttpServer_GetPort_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kHttpServer_GetPort_Name,
          codec.align(HttpServer_GetPort_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(HttpServer_GetPort_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(HttpServer_GetPort_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function HttpServerStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  HttpServerStub.prototype = Object.create(bindings.StubBase.prototype);
  HttpServerStub.prototype.setHandler = function(pattern, handler) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.setHandler && bindings.StubBindings(this).delegate.setHandler(pattern, connection.bindHandleToProxy(handler, HttpHandler));
  }
  HttpServerStub.prototype.getPort = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getPort && bindings.StubBindings(this).delegate.getPort();
  }

  HttpServerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  HttpServerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kHttpServer_SetHandler_Name:
      var params = reader.decodeStruct(HttpServer_SetHandler_Params);
      return this.setHandler(params.pattern, params.handler).then(function(response) {
        var responseParams =
            new HttpServer_SetHandler_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageWithRequestIDBuilder(
            kHttpServer_SetHandler_Name,
            codec.align(HttpServer_SetHandler_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(HttpServer_SetHandler_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kHttpServer_GetPort_Name:
      var params = reader.decodeStruct(HttpServer_GetPort_Params);
      return this.getPort().then(function(response) {
        var responseParams =
            new HttpServer_GetPort_ResponseParams();
        responseParams.port = response.port;
        var builder = new codec.MessageWithRequestIDBuilder(
            kHttpServer_GetPort_Name,
            codec.align(HttpServer_GetPort_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(HttpServer_GetPort_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateHttpServerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kHttpServer_SetHandler_Name:
        if (message.expectsResponse())
          paramsClass = HttpServer_SetHandler_Params;
      break;
      case kHttpServer_GetPort_Name:
        if (message.expectsResponse())
          paramsClass = HttpServer_GetPort_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateHttpServerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kHttpServer_SetHandler_Name:
        if (message.isResponse())
          paramsClass = HttpServer_SetHandler_ResponseParams;
        break;
      case kHttpServer_GetPort_Name:
        if (message.isResponse())
          paramsClass = HttpServer_GetPort_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var HttpServer = {
    name: null,
    proxyClass: HttpServerProxy,
    stubClass: HttpServerStub,
    validateRequest: validateHttpServerRequest,
    validateResponse: validateHttpServerResponse,
  };
  HttpServerStub.prototype.validator = validateHttpServerRequest;
  HttpServerProxy.prototype.validator = validateHttpServerResponse;

  var kHttpHandler_HandleRequest_Name = 0;

  function HttpHandlerProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  HttpHandlerProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  HttpHandlerProxy.prototype.handleRequest = function(request) {
    var params = new HttpHandler_HandleRequest_Params();
    params.request = request;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kHttpHandler_HandleRequest_Name,
          codec.align(HttpHandler_HandleRequest_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(HttpHandler_HandleRequest_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(HttpHandler_HandleRequest_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function HttpHandlerStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  HttpHandlerStub.prototype = Object.create(bindings.StubBase.prototype);
  HttpHandlerStub.prototype.handleRequest = function(request) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.handleRequest && bindings.StubBindings(this).delegate.handleRequest(request);
  }

  HttpHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  HttpHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kHttpHandler_HandleRequest_Name:
      var params = reader.decodeStruct(HttpHandler_HandleRequest_Params);
      return this.handleRequest(params.request).then(function(response) {
        var responseParams =
            new HttpHandler_HandleRequest_ResponseParams();
        responseParams.response = response.response;
        var builder = new codec.MessageWithRequestIDBuilder(
            kHttpHandler_HandleRequest_Name,
            codec.align(HttpHandler_HandleRequest_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(HttpHandler_HandleRequest_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateHttpHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kHttpHandler_HandleRequest_Name:
        if (message.expectsResponse())
          paramsClass = HttpHandler_HandleRequest_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateHttpHandlerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kHttpHandler_HandleRequest_Name:
        if (message.isResponse())
          paramsClass = HttpHandler_HandleRequest_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var HttpHandler = {
    name: null,
    proxyClass: HttpHandlerProxy,
    stubClass: HttpHandlerStub,
    validateRequest: validateHttpHandlerRequest,
    validateResponse: validateHttpHandlerResponse,
  };
  HttpHandlerStub.prototype.validator = validateHttpHandlerRequest;
  HttpHandlerProxy.prototype.validator = validateHttpHandlerResponse;


  var exports = {};
  exports.HttpServer = HttpServer;
  exports.HttpHandler = HttpHandler;


  return exports;
});
