// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/terminal/interfaces/terminal.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/files/interfaces/file.mojom",
    "mojo/services/files/interfaces/types.mojom",
    "mojo/services/terminal/interfaces/terminal_client.mojom",
], function(bindings, codec, connection, core, validator, file$, types$, terminal_client$) {

  function Terminal_Connect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Terminal_Connect_Params.prototype.initDefaults_ = function() {
    this.terminal_file = null;
    this.force = false;
  };
  Terminal_Connect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Terminal_Connect_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Terminal_Connect_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Terminal_Connect_Params.terminal_file
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Terminal_Connect_Params.encodedSize = codec.kStructHeaderSize + 8;

  Terminal_Connect_Params.decode = function(decoder) {
    var packed;
    var val = new Terminal_Connect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.terminal_file = decoder.decodeStruct(codec.Handle);
    val.force = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Terminal_Connect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Terminal_Connect_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.terminal_file);
    encoder.encodeStruct(codec.Uint8, val.force);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Terminal_Connect_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Terminal_Connect_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
  };
  Terminal_Connect_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Terminal_Connect_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Terminal_Connect_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Terminal_Connect_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Terminal_Connect_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Terminal_Connect_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Terminal_Connect_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Terminal_Connect_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Terminal_ConnectToClient_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Terminal_ConnectToClient_Params.prototype.initDefaults_ = function() {
    this.terminal_client = null;
    this.force = false;
  };
  Terminal_ConnectToClient_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Terminal_ConnectToClient_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Terminal_ConnectToClient_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Terminal_ConnectToClient_Params.terminal_client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Terminal_ConnectToClient_Params.encodedSize = codec.kStructHeaderSize + 16;

  Terminal_ConnectToClient_Params.decode = function(decoder) {
    var packed;
    var val = new Terminal_ConnectToClient_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.terminal_client = decoder.decodeStruct(codec.Interface);
    val.force = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Terminal_ConnectToClient_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Terminal_ConnectToClient_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Interface, val.terminal_client);
    encoder.encodeStruct(codec.Uint8, val.force);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Terminal_ConnectToClient_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Terminal_ConnectToClient_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
  };
  Terminal_ConnectToClient_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Terminal_ConnectToClient_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Terminal_ConnectToClient_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Terminal_ConnectToClient_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Terminal_ConnectToClient_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Terminal_ConnectToClient_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Terminal_ConnectToClient_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Terminal_ConnectToClient_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Terminal_GetSize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Terminal_GetSize_Params.prototype.initDefaults_ = function() {
  };
  Terminal_GetSize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Terminal_GetSize_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Terminal_GetSize_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Terminal_GetSize_Params.encodedSize = codec.kStructHeaderSize + 0;

  Terminal_GetSize_Params.decode = function(decoder) {
    var packed;
    var val = new Terminal_GetSize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Terminal_GetSize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Terminal_GetSize_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function Terminal_GetSize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Terminal_GetSize_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
    this.rows = 0;
    this.columns = 0;
  };
  Terminal_GetSize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Terminal_GetSize_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Terminal_GetSize_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  Terminal_GetSize_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Terminal_GetSize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Terminal_GetSize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    val.rows = decoder.decodeStruct(codec.Uint32);
    val.columns = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Terminal_GetSize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Terminal_GetSize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.encodeStruct(codec.Uint32, val.rows);
    encoder.encodeStruct(codec.Uint32, val.columns);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Terminal_SetSize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Terminal_SetSize_Params.prototype.initDefaults_ = function() {
    this.rows = 0;
    this.columns = 0;
    this.reset = false;
  };
  Terminal_SetSize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Terminal_SetSize_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Terminal_SetSize_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  Terminal_SetSize_Params.encodedSize = codec.kStructHeaderSize + 16;

  Terminal_SetSize_Params.decode = function(decoder) {
    var packed;
    var val = new Terminal_SetSize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rows = decoder.decodeStruct(codec.Uint32);
    val.columns = decoder.decodeStruct(codec.Uint32);
    val.reset = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Terminal_SetSize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Terminal_SetSize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.rows);
    encoder.encodeStruct(codec.Uint32, val.columns);
    encoder.encodeStruct(codec.Uint8, val.reset);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Terminal_SetSize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Terminal_SetSize_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
    this.rows = 0;
    this.columns = 0;
  };
  Terminal_SetSize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Terminal_SetSize_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Terminal_SetSize_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  Terminal_SetSize_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Terminal_SetSize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Terminal_SetSize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    val.rows = decoder.decodeStruct(codec.Uint32);
    val.columns = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Terminal_SetSize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Terminal_SetSize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.encodeStruct(codec.Uint32, val.rows);
    encoder.encodeStruct(codec.Uint32, val.columns);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kTerminal_Connect_Name = 0;
  var kTerminal_ConnectToClient_Name = 1;
  var kTerminal_GetSize_Name = 2;
  var kTerminal_SetSize_Name = 3;

  function TerminalProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  TerminalProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  TerminalProxy.prototype.connect = function(terminal_file, force) {
    var params = new Terminal_Connect_Params();
    params.terminal_file = core.isHandle(terminal_file) ? terminal_file : connection.bindProxy(terminal_file, file$.File);
    params.force = force;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kTerminal_Connect_Name,
          codec.align(Terminal_Connect_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Terminal_Connect_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Terminal_Connect_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TerminalProxy.prototype.connectToClient = function(terminal_client, force) {
    var params = new Terminal_ConnectToClient_Params();
    params.terminal_client = core.isHandle(terminal_client) ? terminal_client : connection.bindImpl(terminal_client, terminal_client$.TerminalClient);
    params.force = force;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kTerminal_ConnectToClient_Name,
          codec.align(Terminal_ConnectToClient_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Terminal_ConnectToClient_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Terminal_ConnectToClient_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TerminalProxy.prototype.getSize = function() {
    var params = new Terminal_GetSize_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kTerminal_GetSize_Name,
          codec.align(Terminal_GetSize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Terminal_GetSize_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Terminal_GetSize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TerminalProxy.prototype.setSize = function(rows, columns, reset) {
    var params = new Terminal_SetSize_Params();
    params.rows = rows;
    params.columns = columns;
    params.reset = reset;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kTerminal_SetSize_Name,
          codec.align(Terminal_SetSize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Terminal_SetSize_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Terminal_SetSize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function TerminalStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  TerminalStub.prototype = Object.create(bindings.StubBase.prototype);
  TerminalStub.prototype.connect = function(terminal_file, force) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.connect && bindings.StubBindings(this).delegate.connect(connection.bindHandleToStub(terminal_file, file$.File), force);
  }
  TerminalStub.prototype.connectToClient = function(terminal_client, force) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.connectToClient && bindings.StubBindings(this).delegate.connectToClient(connection.bindHandleToProxy(terminal_client, terminal_client$.TerminalClient), force);
  }
  TerminalStub.prototype.getSize = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getSize && bindings.StubBindings(this).delegate.getSize();
  }
  TerminalStub.prototype.setSize = function(rows, columns, reset) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.setSize && bindings.StubBindings(this).delegate.setSize(rows, columns, reset);
  }

  TerminalStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  TerminalStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTerminal_Connect_Name:
      var params = reader.decodeStruct(Terminal_Connect_Params);
      return this.connect(params.terminal_file, params.force).then(function(response) {
        var responseParams =
            new Terminal_Connect_ResponseParams();
        responseParams.error = response.error;
        var builder = new codec.MessageWithRequestIDBuilder(
            kTerminal_Connect_Name,
            codec.align(Terminal_Connect_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Terminal_Connect_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kTerminal_ConnectToClient_Name:
      var params = reader.decodeStruct(Terminal_ConnectToClient_Params);
      return this.connectToClient(params.terminal_client, params.force).then(function(response) {
        var responseParams =
            new Terminal_ConnectToClient_ResponseParams();
        responseParams.error = response.error;
        var builder = new codec.MessageWithRequestIDBuilder(
            kTerminal_ConnectToClient_Name,
            codec.align(Terminal_ConnectToClient_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Terminal_ConnectToClient_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kTerminal_GetSize_Name:
      var params = reader.decodeStruct(Terminal_GetSize_Params);
      return this.getSize().then(function(response) {
        var responseParams =
            new Terminal_GetSize_ResponseParams();
        responseParams.error = response.error;
        responseParams.rows = response.rows;
        responseParams.columns = response.columns;
        var builder = new codec.MessageWithRequestIDBuilder(
            kTerminal_GetSize_Name,
            codec.align(Terminal_GetSize_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Terminal_GetSize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kTerminal_SetSize_Name:
      var params = reader.decodeStruct(Terminal_SetSize_Params);
      return this.setSize(params.rows, params.columns, params.reset).then(function(response) {
        var responseParams =
            new Terminal_SetSize_ResponseParams();
        responseParams.error = response.error;
        responseParams.rows = response.rows;
        responseParams.columns = response.columns;
        var builder = new codec.MessageWithRequestIDBuilder(
            kTerminal_SetSize_Name,
            codec.align(Terminal_SetSize_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Terminal_SetSize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateTerminalRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTerminal_Connect_Name:
        if (message.expectsResponse())
          paramsClass = Terminal_Connect_Params;
      break;
      case kTerminal_ConnectToClient_Name:
        if (message.expectsResponse())
          paramsClass = Terminal_ConnectToClient_Params;
      break;
      case kTerminal_GetSize_Name:
        if (message.expectsResponse())
          paramsClass = Terminal_GetSize_Params;
      break;
      case kTerminal_SetSize_Name:
        if (message.expectsResponse())
          paramsClass = Terminal_SetSize_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTerminalResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kTerminal_Connect_Name:
        if (message.isResponse())
          paramsClass = Terminal_Connect_ResponseParams;
        break;
      case kTerminal_ConnectToClient_Name:
        if (message.isResponse())
          paramsClass = Terminal_ConnectToClient_ResponseParams;
        break;
      case kTerminal_GetSize_Name:
        if (message.isResponse())
          paramsClass = Terminal_GetSize_ResponseParams;
        break;
      case kTerminal_SetSize_Name:
        if (message.isResponse())
          paramsClass = Terminal_SetSize_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Terminal = {
    name: 'mojo::terminal::Terminal',
    proxyClass: TerminalProxy,
    stubClass: TerminalStub,
    validateRequest: validateTerminalRequest,
    validateResponse: validateTerminalResponse,
  };
  TerminalStub.prototype.validator = validateTerminalRequest;
  TerminalProxy.prototype.validator = validateTerminalResponse;


  var exports = {};
  exports.Terminal = Terminal;


  return exports;
});
