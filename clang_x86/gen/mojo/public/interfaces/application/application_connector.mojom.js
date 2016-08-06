// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/application/application_connector.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/application/service_provider.mojom",
], function(bindings, codec, connection, core, validator, service_provider$) {

  function ApplicationConnector_ConnectToApplication_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ApplicationConnector_ConnectToApplication_Params.prototype.initDefaults_ = function() {
    this.application_url = null;
    this.services = null;
  };
  ApplicationConnector_ConnectToApplication_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ApplicationConnector_ConnectToApplication_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ApplicationConnector_ConnectToApplication_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ApplicationConnector_ConnectToApplication_Params.application_url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ApplicationConnector_ConnectToApplication_Params.services
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ApplicationConnector_ConnectToApplication_Params.encodedSize = codec.kStructHeaderSize + 16;

  ApplicationConnector_ConnectToApplication_Params.decode = function(decoder) {
    var packed;
    var val = new ApplicationConnector_ConnectToApplication_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.application_url = decoder.decodeStruct(codec.String);
    val.services = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ApplicationConnector_ConnectToApplication_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ApplicationConnector_ConnectToApplication_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.application_url);
    encoder.encodeStruct(codec.Handle, val.services);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ApplicationConnector_Duplicate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ApplicationConnector_Duplicate_Params.prototype.initDefaults_ = function() {
    this.application_connector_request = null;
  };
  ApplicationConnector_Duplicate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ApplicationConnector_Duplicate_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ApplicationConnector_Duplicate_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ApplicationConnector_Duplicate_Params.application_connector_request
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ApplicationConnector_Duplicate_Params.encodedSize = codec.kStructHeaderSize + 8;

  ApplicationConnector_Duplicate_Params.decode = function(decoder) {
    var packed;
    var val = new ApplicationConnector_Duplicate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.application_connector_request = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ApplicationConnector_Duplicate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ApplicationConnector_Duplicate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.application_connector_request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kApplicationConnector_ConnectToApplication_Name = 0;
  var kApplicationConnector_Duplicate_Name = 1;

  function ApplicationConnectorProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ApplicationConnectorProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ApplicationConnectorProxy.prototype.connectToApplication = function(application_url, services) {
    var params = new ApplicationConnector_ConnectToApplication_Params();
    params.application_url = application_url;
    params.services = core.isHandle(services) ? services : connection.bindProxy(services, service_provider$.ServiceProvider);
    var builder = new codec.MessageBuilder(
        kApplicationConnector_ConnectToApplication_Name,
        codec.align(ApplicationConnector_ConnectToApplication_Params.encodedSize));
    builder.encodeStruct(ApplicationConnector_ConnectToApplication_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ApplicationConnectorProxy.prototype.duplicate = function(application_connector_request) {
    var params = new ApplicationConnector_Duplicate_Params();
    params.application_connector_request = core.isHandle(application_connector_request) ? application_connector_request : connection.bindProxy(application_connector_request, ApplicationConnector);
    var builder = new codec.MessageBuilder(
        kApplicationConnector_Duplicate_Name,
        codec.align(ApplicationConnector_Duplicate_Params.encodedSize));
    builder.encodeStruct(ApplicationConnector_Duplicate_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ApplicationConnectorStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ApplicationConnectorStub.prototype = Object.create(bindings.StubBase.prototype);
  ApplicationConnectorStub.prototype.connectToApplication = function(application_url, services) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.connectToApplication && bindings.StubBindings(this).delegate.connectToApplication(application_url, connection.bindHandleToStub(services, service_provider$.ServiceProvider));
  }
  ApplicationConnectorStub.prototype.duplicate = function(application_connector_request) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.duplicate && bindings.StubBindings(this).delegate.duplicate(connection.bindHandleToStub(application_connector_request, ApplicationConnector));
  }

  ApplicationConnectorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kApplicationConnector_ConnectToApplication_Name:
      var params = reader.decodeStruct(ApplicationConnector_ConnectToApplication_Params);
      this.connectToApplication(params.application_url, params.services);
      return true;
    case kApplicationConnector_Duplicate_Name:
      var params = reader.decodeStruct(ApplicationConnector_Duplicate_Params);
      this.duplicate(params.application_connector_request);
      return true;
    default:
      return false;
    }
  };

  ApplicationConnectorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateApplicationConnectorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kApplicationConnector_ConnectToApplication_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ApplicationConnector_ConnectToApplication_Params;
      break;
      case kApplicationConnector_Duplicate_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ApplicationConnector_Duplicate_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateApplicationConnectorResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ApplicationConnector = {
    name: null,
    proxyClass: ApplicationConnectorProxy,
    stubClass: ApplicationConnectorStub,
    validateRequest: validateApplicationConnectorRequest,
    validateResponse: null,
  };
  ApplicationConnectorStub.prototype.validator = validateApplicationConnectorRequest;
  ApplicationConnectorProxy.prototype.validator = null;


  var exports = {};
  exports.ApplicationConnector = ApplicationConnector;


  return exports;
});
