// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/terminal/interfaces/terminal_client.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/files/interfaces/file.mojom",
], function(bindings, codec, connection, core, validator, file$) {

  function TerminalClient_ConnectToTerminal_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TerminalClient_ConnectToTerminal_Params.prototype.initDefaults_ = function() {
    this.terminal = null;
  };
  TerminalClient_ConnectToTerminal_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TerminalClient_ConnectToTerminal_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TerminalClient_ConnectToTerminal_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TerminalClient_ConnectToTerminal_Params.terminal
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TerminalClient_ConnectToTerminal_Params.encodedSize = codec.kStructHeaderSize + 8;

  TerminalClient_ConnectToTerminal_Params.decode = function(decoder) {
    var packed;
    var val = new TerminalClient_ConnectToTerminal_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.terminal = decoder.decodeStruct(codec.Interface);
    return val;
  };

  TerminalClient_ConnectToTerminal_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TerminalClient_ConnectToTerminal_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Interface, val.terminal);
  };

  var kTerminalClient_ConnectToTerminal_Name = 0;

  function TerminalClientProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  TerminalClientProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  TerminalClientProxy.prototype.connectToTerminal = function(terminal) {
    var params = new TerminalClient_ConnectToTerminal_Params();
    params.terminal = core.isHandle(terminal) ? terminal : connection.bindImpl(terminal, file$.File);
    var builder = new codec.MessageBuilder(
        kTerminalClient_ConnectToTerminal_Name,
        codec.align(TerminalClient_ConnectToTerminal_Params.encodedSize));
    builder.encodeStruct(TerminalClient_ConnectToTerminal_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function TerminalClientStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  TerminalClientStub.prototype = Object.create(bindings.StubBase.prototype);
  TerminalClientStub.prototype.connectToTerminal = function(terminal) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.connectToTerminal && bindings.StubBindings(this).delegate.connectToTerminal(connection.bindHandleToProxy(terminal, file$.File));
  }

  TerminalClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTerminalClient_ConnectToTerminal_Name:
      var params = reader.decodeStruct(TerminalClient_ConnectToTerminal_Params);
      this.connectToTerminal(params.terminal);
      return true;
    default:
      return false;
    }
  };

  TerminalClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateTerminalClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTerminalClient_ConnectToTerminal_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = TerminalClient_ConnectToTerminal_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTerminalClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var TerminalClient = {
    name: 'mojo::terminal::TerminalClient',
    proxyClass: TerminalClientProxy,
    stubClass: TerminalClientStub,
    validateRequest: validateTerminalClientRequest,
    validateResponse: null,
  };
  TerminalClientStub.prototype.validator = validateTerminalClientRequest;
  TerminalClientProxy.prototype.validator = null;


  var exports = {};
  exports.TerminalClient = TerminalClient;


  return exports;
});
