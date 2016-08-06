// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/network/interfaces/http_connection.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/network/network_error.mojom",
    "mojo/services/network/interfaces/http_message.mojom",
    "mojo/services/network/interfaces/web_socket.mojom",
], function(bindings, codec, connection, core, validator, network_error$, http_message$, web_socket$) {

  function HttpConnection_SetSendBufferSize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpConnection_SetSendBufferSize_Params.prototype.initDefaults_ = function() {
    this.size = 0;
  };
  HttpConnection_SetSendBufferSize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpConnection_SetSendBufferSize_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpConnection_SetSendBufferSize_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  HttpConnection_SetSendBufferSize_Params.encodedSize = codec.kStructHeaderSize + 8;

  HttpConnection_SetSendBufferSize_Params.decode = function(decoder) {
    var packed;
    var val = new HttpConnection_SetSendBufferSize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.size = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HttpConnection_SetSendBufferSize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpConnection_SetSendBufferSize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.size);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function HttpConnection_SetSendBufferSize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpConnection_SetSendBufferSize_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  HttpConnection_SetSendBufferSize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpConnection_SetSendBufferSize_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpConnection_SetSendBufferSize_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpConnection_SetSendBufferSize_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_error$.NetworkError, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpConnection_SetSendBufferSize_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  HttpConnection_SetSendBufferSize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new HttpConnection_SetSendBufferSize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(network_error$.NetworkError);
    return val;
  };

  HttpConnection_SetSendBufferSize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpConnection_SetSendBufferSize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_error$.NetworkError, val.result);
  };

  function HttpConnection_SetReceiveBufferSize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpConnection_SetReceiveBufferSize_Params.prototype.initDefaults_ = function() {
    this.size = 0;
  };
  HttpConnection_SetReceiveBufferSize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpConnection_SetReceiveBufferSize_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpConnection_SetReceiveBufferSize_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  HttpConnection_SetReceiveBufferSize_Params.encodedSize = codec.kStructHeaderSize + 8;

  HttpConnection_SetReceiveBufferSize_Params.decode = function(decoder) {
    var packed;
    var val = new HttpConnection_SetReceiveBufferSize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.size = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HttpConnection_SetReceiveBufferSize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpConnection_SetReceiveBufferSize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.size);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function HttpConnection_SetReceiveBufferSize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpConnection_SetReceiveBufferSize_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  HttpConnection_SetReceiveBufferSize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpConnection_SetReceiveBufferSize_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpConnection_SetReceiveBufferSize_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpConnection_SetReceiveBufferSize_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_error$.NetworkError, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpConnection_SetReceiveBufferSize_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  HttpConnection_SetReceiveBufferSize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new HttpConnection_SetReceiveBufferSize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(network_error$.NetworkError);
    return val;
  };

  HttpConnection_SetReceiveBufferSize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpConnection_SetReceiveBufferSize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_error$.NetworkError, val.result);
  };

  function HttpConnectionDelegate_OnReceivedRequest_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpConnectionDelegate_OnReceivedRequest_Params.prototype.initDefaults_ = function() {
    this.request = null;
  };
  HttpConnectionDelegate_OnReceivedRequest_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpConnectionDelegate_OnReceivedRequest_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpConnectionDelegate_OnReceivedRequest_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpConnectionDelegate_OnReceivedRequest_Params.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, http_message$.HttpRequest, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpConnectionDelegate_OnReceivedRequest_Params.encodedSize = codec.kStructHeaderSize + 8;

  HttpConnectionDelegate_OnReceivedRequest_Params.decode = function(decoder) {
    var packed;
    var val = new HttpConnectionDelegate_OnReceivedRequest_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStructPointer(http_message$.HttpRequest);
    return val;
  };

  HttpConnectionDelegate_OnReceivedRequest_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpConnectionDelegate_OnReceivedRequest_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(http_message$.HttpRequest, val.request);
  };

  function HttpConnectionDelegate_OnReceivedRequest_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpConnectionDelegate_OnReceivedRequest_ResponseParams.prototype.initDefaults_ = function() {
    this.response = null;
  };
  HttpConnectionDelegate_OnReceivedRequest_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpConnectionDelegate_OnReceivedRequest_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpConnectionDelegate_OnReceivedRequest_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpConnectionDelegate_OnReceivedRequest_ResponseParams.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, http_message$.HttpResponse, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpConnectionDelegate_OnReceivedRequest_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  HttpConnectionDelegate_OnReceivedRequest_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new HttpConnectionDelegate_OnReceivedRequest_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(http_message$.HttpResponse);
    return val;
  };

  HttpConnectionDelegate_OnReceivedRequest_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpConnectionDelegate_OnReceivedRequest_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(http_message$.HttpResponse, val.response);
  };

  function HttpConnectionDelegate_OnReceivedWebSocketRequest_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpConnectionDelegate_OnReceivedWebSocketRequest_Params.prototype.initDefaults_ = function() {
    this.request = null;
  };
  HttpConnectionDelegate_OnReceivedWebSocketRequest_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpConnectionDelegate_OnReceivedWebSocketRequest_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpConnectionDelegate_OnReceivedWebSocketRequest_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpConnectionDelegate_OnReceivedWebSocketRequest_Params.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, http_message$.HttpRequest, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpConnectionDelegate_OnReceivedWebSocketRequest_Params.encodedSize = codec.kStructHeaderSize + 8;

  HttpConnectionDelegate_OnReceivedWebSocketRequest_Params.decode = function(decoder) {
    var packed;
    var val = new HttpConnectionDelegate_OnReceivedWebSocketRequest_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStructPointer(http_message$.HttpRequest);
    return val;
  };

  HttpConnectionDelegate_OnReceivedWebSocketRequest_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpConnectionDelegate_OnReceivedWebSocketRequest_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(http_message$.HttpRequest, val.request);
  };

  function HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams.prototype.initDefaults_ = function() {
    this.web_socket = null;
    this.send_stream = null;
    this.client = null;
  };
  HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams.web_socket
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams.send_stream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.web_socket = decoder.decodeStruct(codec.Handle);
    val.send_stream = decoder.decodeStruct(codec.NullableHandle);
    val.client = decoder.decodeStruct(codec.NullableInterface);
    return val;
  };

  HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.web_socket);
    encoder.encodeStruct(codec.NullableHandle, val.send_stream);
    encoder.encodeStruct(codec.NullableInterface, val.client);
  };

  var kHttpConnection_SetSendBufferSize_Name = 0;
  var kHttpConnection_SetReceiveBufferSize_Name = 1;

  function HttpConnectionProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  HttpConnectionProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  HttpConnectionProxy.prototype.setSendBufferSize = function(size) {
    var params = new HttpConnection_SetSendBufferSize_Params();
    params.size = size;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kHttpConnection_SetSendBufferSize_Name,
          codec.align(HttpConnection_SetSendBufferSize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(HttpConnection_SetSendBufferSize_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(HttpConnection_SetSendBufferSize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  HttpConnectionProxy.prototype.setReceiveBufferSize = function(size) {
    var params = new HttpConnection_SetReceiveBufferSize_Params();
    params.size = size;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kHttpConnection_SetReceiveBufferSize_Name,
          codec.align(HttpConnection_SetReceiveBufferSize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(HttpConnection_SetReceiveBufferSize_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(HttpConnection_SetReceiveBufferSize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function HttpConnectionStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  HttpConnectionStub.prototype = Object.create(bindings.StubBase.prototype);
  HttpConnectionStub.prototype.setSendBufferSize = function(size) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.setSendBufferSize && bindings.StubBindings(this).delegate.setSendBufferSize(size);
  }
  HttpConnectionStub.prototype.setReceiveBufferSize = function(size) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.setReceiveBufferSize && bindings.StubBindings(this).delegate.setReceiveBufferSize(size);
  }

  HttpConnectionStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  HttpConnectionStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kHttpConnection_SetSendBufferSize_Name:
      var params = reader.decodeStruct(HttpConnection_SetSendBufferSize_Params);
      return this.setSendBufferSize(params.size).then(function(response) {
        var responseParams =
            new HttpConnection_SetSendBufferSize_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageWithRequestIDBuilder(
            kHttpConnection_SetSendBufferSize_Name,
            codec.align(HttpConnection_SetSendBufferSize_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(HttpConnection_SetSendBufferSize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kHttpConnection_SetReceiveBufferSize_Name:
      var params = reader.decodeStruct(HttpConnection_SetReceiveBufferSize_Params);
      return this.setReceiveBufferSize(params.size).then(function(response) {
        var responseParams =
            new HttpConnection_SetReceiveBufferSize_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageWithRequestIDBuilder(
            kHttpConnection_SetReceiveBufferSize_Name,
            codec.align(HttpConnection_SetReceiveBufferSize_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(HttpConnection_SetReceiveBufferSize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateHttpConnectionRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kHttpConnection_SetSendBufferSize_Name:
        if (message.expectsResponse())
          paramsClass = HttpConnection_SetSendBufferSize_Params;
      break;
      case kHttpConnection_SetReceiveBufferSize_Name:
        if (message.expectsResponse())
          paramsClass = HttpConnection_SetReceiveBufferSize_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateHttpConnectionResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kHttpConnection_SetSendBufferSize_Name:
        if (message.isResponse())
          paramsClass = HttpConnection_SetSendBufferSize_ResponseParams;
        break;
      case kHttpConnection_SetReceiveBufferSize_Name:
        if (message.isResponse())
          paramsClass = HttpConnection_SetReceiveBufferSize_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var HttpConnection = {
    name: null,
    proxyClass: HttpConnectionProxy,
    stubClass: HttpConnectionStub,
    validateRequest: validateHttpConnectionRequest,
    validateResponse: validateHttpConnectionResponse,
  };
  HttpConnectionStub.prototype.validator = validateHttpConnectionRequest;
  HttpConnectionProxy.prototype.validator = validateHttpConnectionResponse;

  var kHttpConnectionDelegate_OnReceivedRequest_Name = 0;
  var kHttpConnectionDelegate_OnReceivedWebSocketRequest_Name = 1;

  function HttpConnectionDelegateProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  HttpConnectionDelegateProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  HttpConnectionDelegateProxy.prototype.onReceivedRequest = function(request) {
    var params = new HttpConnectionDelegate_OnReceivedRequest_Params();
    params.request = request;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kHttpConnectionDelegate_OnReceivedRequest_Name,
          codec.align(HttpConnectionDelegate_OnReceivedRequest_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(HttpConnectionDelegate_OnReceivedRequest_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(HttpConnectionDelegate_OnReceivedRequest_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  HttpConnectionDelegateProxy.prototype.onReceivedWebSocketRequest = function(request) {
    var params = new HttpConnectionDelegate_OnReceivedWebSocketRequest_Params();
    params.request = request;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kHttpConnectionDelegate_OnReceivedWebSocketRequest_Name,
          codec.align(HttpConnectionDelegate_OnReceivedWebSocketRequest_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(HttpConnectionDelegate_OnReceivedWebSocketRequest_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function HttpConnectionDelegateStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  HttpConnectionDelegateStub.prototype = Object.create(bindings.StubBase.prototype);
  HttpConnectionDelegateStub.prototype.onReceivedRequest = function(request) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.onReceivedRequest && bindings.StubBindings(this).delegate.onReceivedRequest(request);
  }
  HttpConnectionDelegateStub.prototype.onReceivedWebSocketRequest = function(request) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.onReceivedWebSocketRequest && bindings.StubBindings(this).delegate.onReceivedWebSocketRequest(request);
  }

  HttpConnectionDelegateStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  HttpConnectionDelegateStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kHttpConnectionDelegate_OnReceivedRequest_Name:
      var params = reader.decodeStruct(HttpConnectionDelegate_OnReceivedRequest_Params);
      return this.onReceivedRequest(params.request).then(function(response) {
        var responseParams =
            new HttpConnectionDelegate_OnReceivedRequest_ResponseParams();
        responseParams.response = response.response;
        var builder = new codec.MessageWithRequestIDBuilder(
            kHttpConnectionDelegate_OnReceivedRequest_Name,
            codec.align(HttpConnectionDelegate_OnReceivedRequest_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(HttpConnectionDelegate_OnReceivedRequest_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kHttpConnectionDelegate_OnReceivedWebSocketRequest_Name:
      var params = reader.decodeStruct(HttpConnectionDelegate_OnReceivedWebSocketRequest_Params);
      return this.onReceivedWebSocketRequest(params.request).then(function(response) {
        var responseParams =
            new HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams();
        responseParams.web_socket = response.web_socket;
        responseParams.send_stream = response.send_stream;
        responseParams.client = response.client;
        var builder = new codec.MessageWithRequestIDBuilder(
            kHttpConnectionDelegate_OnReceivedWebSocketRequest_Name,
            codec.align(HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateHttpConnectionDelegateRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kHttpConnectionDelegate_OnReceivedRequest_Name:
        if (message.expectsResponse())
          paramsClass = HttpConnectionDelegate_OnReceivedRequest_Params;
      break;
      case kHttpConnectionDelegate_OnReceivedWebSocketRequest_Name:
        if (message.expectsResponse())
          paramsClass = HttpConnectionDelegate_OnReceivedWebSocketRequest_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateHttpConnectionDelegateResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kHttpConnectionDelegate_OnReceivedRequest_Name:
        if (message.isResponse())
          paramsClass = HttpConnectionDelegate_OnReceivedRequest_ResponseParams;
        break;
      case kHttpConnectionDelegate_OnReceivedWebSocketRequest_Name:
        if (message.isResponse())
          paramsClass = HttpConnectionDelegate_OnReceivedWebSocketRequest_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var HttpConnectionDelegate = {
    name: null,
    proxyClass: HttpConnectionDelegateProxy,
    stubClass: HttpConnectionDelegateStub,
    validateRequest: validateHttpConnectionDelegateRequest,
    validateResponse: validateHttpConnectionDelegateResponse,
  };
  HttpConnectionDelegateStub.prototype.validator = validateHttpConnectionDelegateRequest;
  HttpConnectionDelegateProxy.prototype.validator = validateHttpConnectionDelegateResponse;


  var exports = {};
  exports.HttpConnection = HttpConnection;
  exports.HttpConnectionDelegate = HttpConnectionDelegate;


  return exports;
});
