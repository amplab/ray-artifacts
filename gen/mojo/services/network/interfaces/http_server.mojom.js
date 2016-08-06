// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/network/interfaces/http_server.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/network/interfaces/http_connection.mojom",
], function(bindings, codec, connection, core, validator, http_connection$) {

  function HttpServerDelegate_OnConnected_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpServerDelegate_OnConnected_Params.prototype.initDefaults_ = function() {
    this.connection = null;
    this.delegate = null;
  };
  HttpServerDelegate_OnConnected_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpServerDelegate_OnConnected_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpServerDelegate_OnConnected_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpServerDelegate_OnConnected_Params.connection
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpServerDelegate_OnConnected_Params.delegate
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpServerDelegate_OnConnected_Params.encodedSize = codec.kStructHeaderSize + 16;

  HttpServerDelegate_OnConnected_Params.decode = function(decoder) {
    var packed;
    var val = new HttpServerDelegate_OnConnected_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.connection = decoder.decodeStruct(codec.Interface);
    val.delegate = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HttpServerDelegate_OnConnected_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpServerDelegate_OnConnected_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Interface, val.connection);
    encoder.encodeStruct(codec.Handle, val.delegate);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kHttpServerDelegate_OnConnected_Name = 0;

  function HttpServerDelegateProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  HttpServerDelegateProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  HttpServerDelegateProxy.prototype.onConnected = function(connection, delegate) {
    var params = new HttpServerDelegate_OnConnected_Params();
    params.connection = core.isHandle(connection) ? connection : connection.bindImpl(connection, http_connection$.HttpConnection);
    params.delegate = core.isHandle(delegate) ? delegate : connection.bindProxy(delegate, http_connection$.HttpConnectionDelegate);
    var builder = new codec.MessageBuilder(
        kHttpServerDelegate_OnConnected_Name,
        codec.align(HttpServerDelegate_OnConnected_Params.encodedSize));
    builder.encodeStruct(HttpServerDelegate_OnConnected_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function HttpServerDelegateStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  HttpServerDelegateStub.prototype = Object.create(bindings.StubBase.prototype);
  HttpServerDelegateStub.prototype.onConnected = function(connection, delegate) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.onConnected && bindings.StubBindings(this).delegate.onConnected(connection.bindHandleToProxy(connection, http_connection$.HttpConnection), connection.bindHandleToStub(delegate, http_connection$.HttpConnectionDelegate));
  }

  HttpServerDelegateStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kHttpServerDelegate_OnConnected_Name:
      var params = reader.decodeStruct(HttpServerDelegate_OnConnected_Params);
      this.onConnected(params.connection, params.delegate);
      return true;
    default:
      return false;
    }
  };

  HttpServerDelegateStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateHttpServerDelegateRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kHttpServerDelegate_OnConnected_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = HttpServerDelegate_OnConnected_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateHttpServerDelegateResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var HttpServerDelegate = {
    name: null,
    proxyClass: HttpServerDelegateProxy,
    stubClass: HttpServerDelegateStub,
    validateRequest: validateHttpServerDelegateRequest,
    validateResponse: null,
  };
  HttpServerDelegateStub.prototype.validator = validateHttpServerDelegateRequest;
  HttpServerDelegateProxy.prototype.validator = null;


  var exports = {};
  exports.HttpServerDelegate = HttpServerDelegate;


  return exports;
});
