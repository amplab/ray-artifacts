// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/authenticating_url_loader_interceptor/interfaces/authenticating_url_loader_interceptor_meta_factory.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/authentication/interfaces/authentication.mojom",
    "mojo/services/network/interfaces/url_loader_interceptor.mojom",
], function(bindings, codec, connection, core, validator, authentication$, url_loader_interceptor$) {

  function AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params.prototype.initDefaults_ = function() {
    this.factory_request = null;
    this.authentication_service = null;
  };
  AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params.factory_request
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params.authentication_service
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params.encodedSize = codec.kStructHeaderSize + 16;

  AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params.decode = function(decoder) {
    var packed;
    var val = new AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.factory_request = decoder.decodeStruct(codec.Handle);
    val.authentication_service = decoder.decodeStruct(codec.Interface);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.factory_request);
    encoder.encodeStruct(codec.Interface, val.authentication_service);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kAuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Name = 0;

  function AuthenticatingURLLoaderInterceptorMetaFactoryProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  AuthenticatingURLLoaderInterceptorMetaFactoryProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  AuthenticatingURLLoaderInterceptorMetaFactoryProxy.prototype.createURLLoaderInterceptorFactory = function(factory_request, authentication_service) {
    var params = new AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params();
    params.factory_request = core.isHandle(factory_request) ? factory_request : connection.bindProxy(factory_request, url_loader_interceptor$.URLLoaderInterceptorFactory);
    params.authentication_service = core.isHandle(authentication_service) ? authentication_service : connection.bindImpl(authentication_service, authentication$.AuthenticationService);
    var builder = new codec.MessageBuilder(
        kAuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Name,
        codec.align(AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params.encodedSize));
    builder.encodeStruct(AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AuthenticatingURLLoaderInterceptorMetaFactoryStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  AuthenticatingURLLoaderInterceptorMetaFactoryStub.prototype = Object.create(bindings.StubBase.prototype);
  AuthenticatingURLLoaderInterceptorMetaFactoryStub.prototype.createURLLoaderInterceptorFactory = function(factory_request, authentication_service) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.createURLLoaderInterceptorFactory && bindings.StubBindings(this).delegate.createURLLoaderInterceptorFactory(connection.bindHandleToStub(factory_request, url_loader_interceptor$.URLLoaderInterceptorFactory), connection.bindHandleToProxy(authentication_service, authentication$.AuthenticationService));
  }

  AuthenticatingURLLoaderInterceptorMetaFactoryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Name:
      var params = reader.decodeStruct(AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params);
      this.createURLLoaderInterceptorFactory(params.factory_request, params.authentication_service);
      return true;
    default:
      return false;
    }
  };

  AuthenticatingURLLoaderInterceptorMetaFactoryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateAuthenticatingURLLoaderInterceptorMetaFactoryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AuthenticatingURLLoaderInterceptorMetaFactory_CreateURLLoaderInterceptorFactory_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAuthenticatingURLLoaderInterceptorMetaFactoryResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AuthenticatingURLLoaderInterceptorMetaFactory = {
    name: 'mojo::AuthenticatingURLLoaderInterceptorMetaFactory',
    proxyClass: AuthenticatingURLLoaderInterceptorMetaFactoryProxy,
    stubClass: AuthenticatingURLLoaderInterceptorMetaFactoryStub,
    validateRequest: validateAuthenticatingURLLoaderInterceptorMetaFactoryRequest,
    validateResponse: null,
  };
  AuthenticatingURLLoaderInterceptorMetaFactoryStub.prototype.validator = validateAuthenticatingURLLoaderInterceptorMetaFactoryRequest;
  AuthenticatingURLLoaderInterceptorMetaFactoryProxy.prototype.validator = null;


  var exports = {};
  exports.AuthenticatingURLLoaderInterceptorMetaFactory = AuthenticatingURLLoaderInterceptorMetaFactory;


  return exports;
});
