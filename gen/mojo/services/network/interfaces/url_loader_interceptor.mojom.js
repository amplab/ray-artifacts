// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/network/interfaces/url_loader_interceptor.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/network/url_request.mojom",
    "mojo/public/interfaces/network/url_response.mojom",
], function(bindings, codec, connection, core, validator, url_request$, url_response$) {

  function URLLoaderInterceptorResponse(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderInterceptorResponse.prototype.initDefaults_ = function() {
    this.request = null;
    this.response = null;
  };
  URLLoaderInterceptorResponse.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderInterceptorResponse.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoaderInterceptorResponse.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLLoaderInterceptorResponse.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url_request$.URLRequest, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLLoaderInterceptorResponse.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url_response$.URLResponse, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderInterceptorResponse.encodedSize = codec.kStructHeaderSize + 16;

  URLLoaderInterceptorResponse.decode = function(decoder) {
    var packed;
    var val = new URLLoaderInterceptorResponse();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStructPointer(url_request$.URLRequest);
    val.response = decoder.decodeStructPointer(url_response$.URLResponse);
    return val;
  };

  URLLoaderInterceptorResponse.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderInterceptorResponse.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url_request$.URLRequest, val.request);
    encoder.encodeStructPointer(url_response$.URLResponse, val.response);
  };

  function URLLoaderInterceptorFactory_Create_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderInterceptorFactory_Create_Params.prototype.initDefaults_ = function() {
    this.interceptor = null;
  };
  URLLoaderInterceptorFactory_Create_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderInterceptorFactory_Create_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoaderInterceptorFactory_Create_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLLoaderInterceptorFactory_Create_Params.interceptor
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderInterceptorFactory_Create_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderInterceptorFactory_Create_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderInterceptorFactory_Create_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.interceptor = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  URLLoaderInterceptorFactory_Create_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderInterceptorFactory_Create_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.interceptor);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function URLLoaderInterceptor_InterceptRequest_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderInterceptor_InterceptRequest_Params.prototype.initDefaults_ = function() {
    this.request = null;
  };
  URLLoaderInterceptor_InterceptRequest_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderInterceptor_InterceptRequest_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoaderInterceptor_InterceptRequest_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLLoaderInterceptor_InterceptRequest_Params.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url_request$.URLRequest, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderInterceptor_InterceptRequest_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderInterceptor_InterceptRequest_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderInterceptor_InterceptRequest_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStructPointer(url_request$.URLRequest);
    return val;
  };

  URLLoaderInterceptor_InterceptRequest_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderInterceptor_InterceptRequest_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url_request$.URLRequest, val.request);
  };

  function URLLoaderInterceptor_InterceptRequest_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderInterceptor_InterceptRequest_ResponseParams.prototype.initDefaults_ = function() {
    this.response = null;
  };
  URLLoaderInterceptor_InterceptRequest_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderInterceptor_InterceptRequest_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoaderInterceptor_InterceptRequest_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLLoaderInterceptor_InterceptRequest_ResponseParams.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, URLLoaderInterceptorResponse, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderInterceptor_InterceptRequest_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderInterceptor_InterceptRequest_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new URLLoaderInterceptor_InterceptRequest_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(URLLoaderInterceptorResponse);
    return val;
  };

  URLLoaderInterceptor_InterceptRequest_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderInterceptor_InterceptRequest_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(URLLoaderInterceptorResponse, val.response);
  };

  function URLLoaderInterceptor_InterceptFollowRedirect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderInterceptor_InterceptFollowRedirect_Params.prototype.initDefaults_ = function() {
  };
  URLLoaderInterceptor_InterceptFollowRedirect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderInterceptor_InterceptFollowRedirect_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoaderInterceptor_InterceptFollowRedirect_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderInterceptor_InterceptFollowRedirect_Params.encodedSize = codec.kStructHeaderSize + 0;

  URLLoaderInterceptor_InterceptFollowRedirect_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderInterceptor_InterceptFollowRedirect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLLoaderInterceptor_InterceptFollowRedirect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderInterceptor_InterceptFollowRedirect_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams.prototype.initDefaults_ = function() {
    this.response = null;
  };
  URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, URLLoaderInterceptorResponse, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(URLLoaderInterceptorResponse);
    return val;
  };

  URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(URLLoaderInterceptorResponse, val.response);
  };

  function URLLoaderInterceptor_InterceptResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderInterceptor_InterceptResponse_Params.prototype.initDefaults_ = function() {
    this.response = null;
  };
  URLLoaderInterceptor_InterceptResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderInterceptor_InterceptResponse_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoaderInterceptor_InterceptResponse_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLLoaderInterceptor_InterceptResponse_Params.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url_response$.URLResponse, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderInterceptor_InterceptResponse_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderInterceptor_InterceptResponse_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderInterceptor_InterceptResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(url_response$.URLResponse);
    return val;
  };

  URLLoaderInterceptor_InterceptResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderInterceptor_InterceptResponse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url_response$.URLResponse, val.response);
  };

  function URLLoaderInterceptor_InterceptResponse_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderInterceptor_InterceptResponse_ResponseParams.prototype.initDefaults_ = function() {
    this.response = null;
  };
  URLLoaderInterceptor_InterceptResponse_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderInterceptor_InterceptResponse_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoaderInterceptor_InterceptResponse_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLLoaderInterceptor_InterceptResponse_ResponseParams.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, URLLoaderInterceptorResponse, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderInterceptor_InterceptResponse_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderInterceptor_InterceptResponse_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new URLLoaderInterceptor_InterceptResponse_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(URLLoaderInterceptorResponse);
    return val;
  };

  URLLoaderInterceptor_InterceptResponse_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderInterceptor_InterceptResponse_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(URLLoaderInterceptorResponse, val.response);
  };

  var kURLLoaderInterceptorFactory_Create_Name = 0;

  function URLLoaderInterceptorFactoryProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  URLLoaderInterceptorFactoryProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  URLLoaderInterceptorFactoryProxy.prototype.create = function(interceptor) {
    var params = new URLLoaderInterceptorFactory_Create_Params();
    params.interceptor = core.isHandle(interceptor) ? interceptor : connection.bindProxy(interceptor, URLLoaderInterceptor);
    var builder = new codec.MessageBuilder(
        kURLLoaderInterceptorFactory_Create_Name,
        codec.align(URLLoaderInterceptorFactory_Create_Params.encodedSize));
    builder.encodeStruct(URLLoaderInterceptorFactory_Create_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function URLLoaderInterceptorFactoryStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  URLLoaderInterceptorFactoryStub.prototype = Object.create(bindings.StubBase.prototype);
  URLLoaderInterceptorFactoryStub.prototype.create = function(interceptor) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.create && bindings.StubBindings(this).delegate.create(connection.bindHandleToStub(interceptor, URLLoaderInterceptor));
  }

  URLLoaderInterceptorFactoryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kURLLoaderInterceptorFactory_Create_Name:
      var params = reader.decodeStruct(URLLoaderInterceptorFactory_Create_Params);
      this.create(params.interceptor);
      return true;
    default:
      return false;
    }
  };

  URLLoaderInterceptorFactoryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateURLLoaderInterceptorFactoryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kURLLoaderInterceptorFactory_Create_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoaderInterceptorFactory_Create_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateURLLoaderInterceptorFactoryResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var URLLoaderInterceptorFactory = {
    name: null,
    proxyClass: URLLoaderInterceptorFactoryProxy,
    stubClass: URLLoaderInterceptorFactoryStub,
    validateRequest: validateURLLoaderInterceptorFactoryRequest,
    validateResponse: null,
  };
  URLLoaderInterceptorFactoryStub.prototype.validator = validateURLLoaderInterceptorFactoryRequest;
  URLLoaderInterceptorFactoryProxy.prototype.validator = null;

  var kURLLoaderInterceptor_InterceptRequest_Name = 0;
  var kURLLoaderInterceptor_InterceptFollowRedirect_Name = 1;
  var kURLLoaderInterceptor_InterceptResponse_Name = 2;

  function URLLoaderInterceptorProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  URLLoaderInterceptorProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  URLLoaderInterceptorProxy.prototype.interceptRequest = function(request) {
    var params = new URLLoaderInterceptor_InterceptRequest_Params();
    params.request = request;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kURLLoaderInterceptor_InterceptRequest_Name,
          codec.align(URLLoaderInterceptor_InterceptRequest_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(URLLoaderInterceptor_InterceptRequest_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(URLLoaderInterceptor_InterceptRequest_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  URLLoaderInterceptorProxy.prototype.interceptFollowRedirect = function() {
    var params = new URLLoaderInterceptor_InterceptFollowRedirect_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kURLLoaderInterceptor_InterceptFollowRedirect_Name,
          codec.align(URLLoaderInterceptor_InterceptFollowRedirect_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(URLLoaderInterceptor_InterceptFollowRedirect_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  URLLoaderInterceptorProxy.prototype.interceptResponse = function(response) {
    var params = new URLLoaderInterceptor_InterceptResponse_Params();
    params.response = response;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kURLLoaderInterceptor_InterceptResponse_Name,
          codec.align(URLLoaderInterceptor_InterceptResponse_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(URLLoaderInterceptor_InterceptResponse_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(URLLoaderInterceptor_InterceptResponse_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function URLLoaderInterceptorStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  URLLoaderInterceptorStub.prototype = Object.create(bindings.StubBase.prototype);
  URLLoaderInterceptorStub.prototype.interceptRequest = function(request) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.interceptRequest && bindings.StubBindings(this).delegate.interceptRequest(request);
  }
  URLLoaderInterceptorStub.prototype.interceptFollowRedirect = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.interceptFollowRedirect && bindings.StubBindings(this).delegate.interceptFollowRedirect();
  }
  URLLoaderInterceptorStub.prototype.interceptResponse = function(response) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.interceptResponse && bindings.StubBindings(this).delegate.interceptResponse(response);
  }

  URLLoaderInterceptorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  URLLoaderInterceptorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kURLLoaderInterceptor_InterceptRequest_Name:
      var params = reader.decodeStruct(URLLoaderInterceptor_InterceptRequest_Params);
      return this.interceptRequest(params.request).then(function(response) {
        var responseParams =
            new URLLoaderInterceptor_InterceptRequest_ResponseParams();
        responseParams.response = response.response;
        var builder = new codec.MessageWithRequestIDBuilder(
            kURLLoaderInterceptor_InterceptRequest_Name,
            codec.align(URLLoaderInterceptor_InterceptRequest_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(URLLoaderInterceptor_InterceptRequest_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kURLLoaderInterceptor_InterceptFollowRedirect_Name:
      var params = reader.decodeStruct(URLLoaderInterceptor_InterceptFollowRedirect_Params);
      return this.interceptFollowRedirect().then(function(response) {
        var responseParams =
            new URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams();
        responseParams.response = response.response;
        var builder = new codec.MessageWithRequestIDBuilder(
            kURLLoaderInterceptor_InterceptFollowRedirect_Name,
            codec.align(URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kURLLoaderInterceptor_InterceptResponse_Name:
      var params = reader.decodeStruct(URLLoaderInterceptor_InterceptResponse_Params);
      return this.interceptResponse(params.response).then(function(response) {
        var responseParams =
            new URLLoaderInterceptor_InterceptResponse_ResponseParams();
        responseParams.response = response.response;
        var builder = new codec.MessageWithRequestIDBuilder(
            kURLLoaderInterceptor_InterceptResponse_Name,
            codec.align(URLLoaderInterceptor_InterceptResponse_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(URLLoaderInterceptor_InterceptResponse_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateURLLoaderInterceptorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kURLLoaderInterceptor_InterceptRequest_Name:
        if (message.expectsResponse())
          paramsClass = URLLoaderInterceptor_InterceptRequest_Params;
      break;
      case kURLLoaderInterceptor_InterceptFollowRedirect_Name:
        if (message.expectsResponse())
          paramsClass = URLLoaderInterceptor_InterceptFollowRedirect_Params;
      break;
      case kURLLoaderInterceptor_InterceptResponse_Name:
        if (message.expectsResponse())
          paramsClass = URLLoaderInterceptor_InterceptResponse_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateURLLoaderInterceptorResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kURLLoaderInterceptor_InterceptRequest_Name:
        if (message.isResponse())
          paramsClass = URLLoaderInterceptor_InterceptRequest_ResponseParams;
        break;
      case kURLLoaderInterceptor_InterceptFollowRedirect_Name:
        if (message.isResponse())
          paramsClass = URLLoaderInterceptor_InterceptFollowRedirect_ResponseParams;
        break;
      case kURLLoaderInterceptor_InterceptResponse_Name:
        if (message.isResponse())
          paramsClass = URLLoaderInterceptor_InterceptResponse_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var URLLoaderInterceptor = {
    name: null,
    proxyClass: URLLoaderInterceptorProxy,
    stubClass: URLLoaderInterceptorStub,
    validateRequest: validateURLLoaderInterceptorRequest,
    validateResponse: validateURLLoaderInterceptorResponse,
  };
  URLLoaderInterceptorStub.prototype.validator = validateURLLoaderInterceptorRequest;
  URLLoaderInterceptorProxy.prototype.validator = validateURLLoaderInterceptorResponse;


  var exports = {};
  exports.URLLoaderInterceptorResponse = URLLoaderInterceptorResponse;
  exports.URLLoaderInterceptorFactory = URLLoaderInterceptorFactory;
  exports.URLLoaderInterceptor = URLLoaderInterceptor;


  return exports;
});
