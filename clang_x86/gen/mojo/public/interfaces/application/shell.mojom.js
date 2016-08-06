// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/application/shell.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/application/application_connector.mojom",
    "mojo/public/interfaces/application/service_provider.mojom",
], function(bindings, codec, connection, core, validator, application_connector$, service_provider$) {

  function Shell_ConnectToApplication_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Shell_ConnectToApplication_Params.prototype.initDefaults_ = function() {
    this.application_url = null;
    this.services = null;
  };
  Shell_ConnectToApplication_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Shell_ConnectToApplication_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Shell_ConnectToApplication_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Shell_ConnectToApplication_Params.application_url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Shell_ConnectToApplication_Params.services
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Shell_ConnectToApplication_Params.encodedSize = codec.kStructHeaderSize + 16;

  Shell_ConnectToApplication_Params.decode = function(decoder) {
    var packed;
    var val = new Shell_ConnectToApplication_Params();
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

  Shell_ConnectToApplication_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Shell_ConnectToApplication_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.application_url);
    encoder.encodeStruct(codec.Handle, val.services);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Shell_CreateApplicationConnector_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Shell_CreateApplicationConnector_Params.prototype.initDefaults_ = function() {
    this.application_connector_request = null;
  };
  Shell_CreateApplicationConnector_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Shell_CreateApplicationConnector_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Shell_CreateApplicationConnector_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Shell_CreateApplicationConnector_Params.application_connector_request
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Shell_CreateApplicationConnector_Params.encodedSize = codec.kStructHeaderSize + 8;

  Shell_CreateApplicationConnector_Params.decode = function(decoder) {
    var packed;
    var val = new Shell_CreateApplicationConnector_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.application_connector_request = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Shell_CreateApplicationConnector_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Shell_CreateApplicationConnector_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.application_connector_request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kShell_ConnectToApplication_Name = 0;
  var kShell_CreateApplicationConnector_Name = 1;

  function ShellProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ShellProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ShellProxy.prototype.connectToApplication = function(application_url, services) {
    var params = new Shell_ConnectToApplication_Params();
    params.application_url = application_url;
    params.services = core.isHandle(services) ? services : connection.bindProxy(services, service_provider$.ServiceProvider);
    var builder = new codec.MessageBuilder(
        kShell_ConnectToApplication_Name,
        codec.align(Shell_ConnectToApplication_Params.encodedSize));
    builder.encodeStruct(Shell_ConnectToApplication_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ShellProxy.prototype.createApplicationConnector = function(application_connector_request) {
    var params = new Shell_CreateApplicationConnector_Params();
    params.application_connector_request = core.isHandle(application_connector_request) ? application_connector_request : connection.bindProxy(application_connector_request, application_connector$.ApplicationConnector);
    var builder = new codec.MessageBuilder(
        kShell_CreateApplicationConnector_Name,
        codec.align(Shell_CreateApplicationConnector_Params.encodedSize));
    builder.encodeStruct(Shell_CreateApplicationConnector_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ShellStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ShellStub.prototype = Object.create(bindings.StubBase.prototype);
  ShellStub.prototype.connectToApplication = function(application_url, services) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.connectToApplication && bindings.StubBindings(this).delegate.connectToApplication(application_url, connection.bindHandleToStub(services, service_provider$.ServiceProvider));
  }
  ShellStub.prototype.createApplicationConnector = function(application_connector_request) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.createApplicationConnector && bindings.StubBindings(this).delegate.createApplicationConnector(connection.bindHandleToStub(application_connector_request, application_connector$.ApplicationConnector));
  }

  ShellStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kShell_ConnectToApplication_Name:
      var params = reader.decodeStruct(Shell_ConnectToApplication_Params);
      this.connectToApplication(params.application_url, params.services);
      return true;
    case kShell_CreateApplicationConnector_Name:
      var params = reader.decodeStruct(Shell_CreateApplicationConnector_Params);
      this.createApplicationConnector(params.application_connector_request);
      return true;
    default:
      return false;
    }
  };

  ShellStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateShellRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kShell_ConnectToApplication_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Shell_ConnectToApplication_Params;
      break;
      case kShell_CreateApplicationConnector_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Shell_CreateApplicationConnector_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateShellResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var Shell = {
    name: null,
    proxyClass: ShellProxy,
    stubClass: ShellStub,
    validateRequest: validateShellRequest,
    validateResponse: null,
  };
  ShellStub.prototype.validator = validateShellRequest;
  ShellProxy.prototype.validator = null;


  var exports = {};
  exports.Shell = Shell;


  return exports;
});
