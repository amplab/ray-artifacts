// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/http_server/interfaces/http_server_factory.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/http_server/interfaces/http_server.mojom",
    "mojo/services/network/interfaces/net_address.mojom",
], function(bindings, codec, connection, core, validator, http_server$, net_address$) {

  function HttpServerFactory_CreateHttpServer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpServerFactory_CreateHttpServer_Params.prototype.initDefaults_ = function() {
    this.server_request = null;
    this.local_address = null;
  };
  HttpServerFactory_CreateHttpServer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpServerFactory_CreateHttpServer_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HttpServerFactory_CreateHttpServer_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpServerFactory_CreateHttpServer_Params.server_request
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HttpServerFactory_CreateHttpServer_Params.local_address
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, net_address$.NetAddress, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpServerFactory_CreateHttpServer_Params.encodedSize = codec.kStructHeaderSize + 16;

  HttpServerFactory_CreateHttpServer_Params.decode = function(decoder) {
    var packed;
    var val = new HttpServerFactory_CreateHttpServer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.server_request = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.local_address = decoder.decodeStructPointer(net_address$.NetAddress);
    return val;
  };

  HttpServerFactory_CreateHttpServer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpServerFactory_CreateHttpServer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.server_request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(net_address$.NetAddress, val.local_address);
  };

  var kHttpServerFactory_CreateHttpServer_Name = 0;

  function HttpServerFactoryProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  HttpServerFactoryProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  HttpServerFactoryProxy.prototype.createHttpServer = function(server_request, local_address) {
    var params = new HttpServerFactory_CreateHttpServer_Params();
    params.server_request = core.isHandle(server_request) ? server_request : connection.bindProxy(server_request, http_server$.HttpServer);
    params.local_address = local_address;
    var builder = new codec.MessageBuilder(
        kHttpServerFactory_CreateHttpServer_Name,
        codec.align(HttpServerFactory_CreateHttpServer_Params.encodedSize));
    builder.encodeStruct(HttpServerFactory_CreateHttpServer_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function HttpServerFactoryStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  HttpServerFactoryStub.prototype = Object.create(bindings.StubBase.prototype);
  HttpServerFactoryStub.prototype.createHttpServer = function(server_request, local_address) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.createHttpServer && bindings.StubBindings(this).delegate.createHttpServer(connection.bindHandleToStub(server_request, http_server$.HttpServer), local_address);
  }

  HttpServerFactoryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kHttpServerFactory_CreateHttpServer_Name:
      var params = reader.decodeStruct(HttpServerFactory_CreateHttpServer_Params);
      this.createHttpServer(params.server_request, params.local_address);
      return true;
    default:
      return false;
    }
  };

  HttpServerFactoryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateHttpServerFactoryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kHttpServerFactory_CreateHttpServer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = HttpServerFactory_CreateHttpServer_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateHttpServerFactoryResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var HttpServerFactory = {
    name: 'http_server::HttpServerFactory',
    proxyClass: HttpServerFactoryProxy,
    stubClass: HttpServerFactoryStub,
    validateRequest: validateHttpServerFactoryRequest,
    validateResponse: null,
  };
  HttpServerFactoryStub.prototype.validator = validateHttpServerFactoryRequest;
  HttpServerFactoryProxy.prototype.validator = null;


  var exports = {};
  exports.HttpServerFactory = HttpServerFactory;


  return exports;
});
