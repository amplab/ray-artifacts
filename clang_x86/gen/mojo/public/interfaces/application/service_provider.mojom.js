// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/application/service_provider.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function ServiceProvider_ConnectToService_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceProvider_ConnectToService_Params.prototype.initDefaults_ = function() {
    this.interface_name = null;
    this.pipe = null;
  };
  ServiceProvider_ConnectToService_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceProvider_ConnectToService_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ServiceProvider_ConnectToService_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ServiceProvider_ConnectToService_Params.interface_name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ServiceProvider_ConnectToService_Params.pipe
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceProvider_ConnectToService_Params.encodedSize = codec.kStructHeaderSize + 16;

  ServiceProvider_ConnectToService_Params.decode = function(decoder) {
    var packed;
    var val = new ServiceProvider_ConnectToService_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.interface_name = decoder.decodeStruct(codec.String);
    val.pipe = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ServiceProvider_ConnectToService_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceProvider_ConnectToService_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.interface_name);
    encoder.encodeStruct(codec.Handle, val.pipe);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kServiceProvider_ConnectToService_Name = 0;

  function ServiceProviderProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ServiceProviderProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ServiceProviderProxy.prototype.connectToService = function(interface_name, pipe) {
    var params = new ServiceProvider_ConnectToService_Params();
    params.interface_name = interface_name;
    params.pipe = pipe;
    var builder = new codec.MessageBuilder(
        kServiceProvider_ConnectToService_Name,
        codec.align(ServiceProvider_ConnectToService_Params.encodedSize));
    builder.encodeStruct(ServiceProvider_ConnectToService_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ServiceProviderStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ServiceProviderStub.prototype = Object.create(bindings.StubBase.prototype);
  ServiceProviderStub.prototype.connectToService = function(interface_name, pipe) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.connectToService && bindings.StubBindings(this).delegate.connectToService(interface_name, pipe);
  }

  ServiceProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kServiceProvider_ConnectToService_Name:
      var params = reader.decodeStruct(ServiceProvider_ConnectToService_Params);
      this.connectToService(params.interface_name, params.pipe);
      return true;
    default:
      return false;
    }
  };

  ServiceProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateServiceProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kServiceProvider_ConnectToService_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ServiceProvider_ConnectToService_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateServiceProviderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ServiceProvider = {
    name: null,
    proxyClass: ServiceProviderProxy,
    stubClass: ServiceProviderStub,
    validateRequest: validateServiceProviderRequest,
    validateResponse: null,
  };
  ServiceProviderStub.prototype.validator = validateServiceProviderRequest;
  ServiceProviderProxy.prototype.validator = null;


  var exports = {};
  exports.ServiceProvider = ServiceProvider;


  return exports;
});
