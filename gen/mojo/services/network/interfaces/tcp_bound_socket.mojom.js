// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/network/interfaces/tcp_bound_socket.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/network/network_error.mojom",
    "mojo/services/network/interfaces/net_address.mojom",
    "mojo/services/network/interfaces/tcp_connected_socket.mojom",
    "mojo/services/network/interfaces/tcp_server_socket.mojom",
], function(bindings, codec, connection, core, validator, network_error$, net_address$, tcp_connected_socket$, tcp_server_socket$) {

  function TCPBoundSocket_StartListening_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPBoundSocket_StartListening_Params.prototype.initDefaults_ = function() {
    this.server = null;
  };
  TCPBoundSocket_StartListening_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPBoundSocket_StartListening_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TCPBoundSocket_StartListening_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TCPBoundSocket_StartListening_Params.server
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TCPBoundSocket_StartListening_Params.encodedSize = codec.kStructHeaderSize + 8;

  TCPBoundSocket_StartListening_Params.decode = function(decoder) {
    var packed;
    var val = new TCPBoundSocket_StartListening_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.server = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPBoundSocket_StartListening_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPBoundSocket_StartListening_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.server);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function TCPBoundSocket_StartListening_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPBoundSocket_StartListening_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  TCPBoundSocket_StartListening_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPBoundSocket_StartListening_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TCPBoundSocket_StartListening_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TCPBoundSocket_StartListening_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_error$.NetworkError, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TCPBoundSocket_StartListening_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TCPBoundSocket_StartListening_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TCPBoundSocket_StartListening_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(network_error$.NetworkError);
    return val;
  };

  TCPBoundSocket_StartListening_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPBoundSocket_StartListening_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_error$.NetworkError, val.result);
  };

  function TCPBoundSocket_Connect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPBoundSocket_Connect_Params.prototype.initDefaults_ = function() {
    this.remote_address = null;
    this.send_stream = null;
    this.receive_stream = null;
    this.client_socket = null;
  };
  TCPBoundSocket_Connect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPBoundSocket_Connect_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TCPBoundSocket_Connect_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TCPBoundSocket_Connect_Params.remote_address
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, net_address$.NetAddress, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TCPBoundSocket_Connect_Params.send_stream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TCPBoundSocket_Connect_Params.receive_stream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 12, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TCPBoundSocket_Connect_Params.client_socket
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TCPBoundSocket_Connect_Params.encodedSize = codec.kStructHeaderSize + 24;

  TCPBoundSocket_Connect_Params.decode = function(decoder) {
    var packed;
    var val = new TCPBoundSocket_Connect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.remote_address = decoder.decodeStructPointer(net_address$.NetAddress);
    val.send_stream = decoder.decodeStruct(codec.Handle);
    val.receive_stream = decoder.decodeStruct(codec.Handle);
    val.client_socket = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPBoundSocket_Connect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPBoundSocket_Connect_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(net_address$.NetAddress, val.remote_address);
    encoder.encodeStruct(codec.Handle, val.send_stream);
    encoder.encodeStruct(codec.Handle, val.receive_stream);
    encoder.encodeStruct(codec.Handle, val.client_socket);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function TCPBoundSocket_Connect_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPBoundSocket_Connect_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  TCPBoundSocket_Connect_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPBoundSocket_Connect_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TCPBoundSocket_Connect_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TCPBoundSocket_Connect_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_error$.NetworkError, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TCPBoundSocket_Connect_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TCPBoundSocket_Connect_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TCPBoundSocket_Connect_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(network_error$.NetworkError);
    return val;
  };

  TCPBoundSocket_Connect_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPBoundSocket_Connect_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_error$.NetworkError, val.result);
  };

  var kTCPBoundSocket_StartListening_Name = 0;
  var kTCPBoundSocket_Connect_Name = 1;

  function TCPBoundSocketProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  TCPBoundSocketProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  TCPBoundSocketProxy.prototype.startListening = function(server) {
    var params = new TCPBoundSocket_StartListening_Params();
    params.server = core.isHandle(server) ? server : connection.bindProxy(server, tcp_server_socket$.TCPServerSocket);
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kTCPBoundSocket_StartListening_Name,
          codec.align(TCPBoundSocket_StartListening_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TCPBoundSocket_StartListening_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TCPBoundSocket_StartListening_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TCPBoundSocketProxy.prototype.connect = function(remote_address, send_stream, receive_stream, client_socket) {
    var params = new TCPBoundSocket_Connect_Params();
    params.remote_address = remote_address;
    params.send_stream = send_stream;
    params.receive_stream = receive_stream;
    params.client_socket = core.isHandle(client_socket) ? client_socket : connection.bindProxy(client_socket, tcp_connected_socket$.TCPConnectedSocket);
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kTCPBoundSocket_Connect_Name,
          codec.align(TCPBoundSocket_Connect_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TCPBoundSocket_Connect_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TCPBoundSocket_Connect_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function TCPBoundSocketStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  TCPBoundSocketStub.prototype = Object.create(bindings.StubBase.prototype);
  TCPBoundSocketStub.prototype.startListening = function(server) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.startListening && bindings.StubBindings(this).delegate.startListening(connection.bindHandleToStub(server, tcp_server_socket$.TCPServerSocket));
  }
  TCPBoundSocketStub.prototype.connect = function(remote_address, send_stream, receive_stream, client_socket) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.connect && bindings.StubBindings(this).delegate.connect(remote_address, send_stream, receive_stream, connection.bindHandleToStub(client_socket, tcp_connected_socket$.TCPConnectedSocket));
  }

  TCPBoundSocketStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  TCPBoundSocketStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTCPBoundSocket_StartListening_Name:
      var params = reader.decodeStruct(TCPBoundSocket_StartListening_Params);
      return this.startListening(params.server).then(function(response) {
        var responseParams =
            new TCPBoundSocket_StartListening_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageWithRequestIDBuilder(
            kTCPBoundSocket_StartListening_Name,
            codec.align(TCPBoundSocket_StartListening_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TCPBoundSocket_StartListening_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kTCPBoundSocket_Connect_Name:
      var params = reader.decodeStruct(TCPBoundSocket_Connect_Params);
      return this.connect(params.remote_address, params.send_stream, params.receive_stream, params.client_socket).then(function(response) {
        var responseParams =
            new TCPBoundSocket_Connect_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageWithRequestIDBuilder(
            kTCPBoundSocket_Connect_Name,
            codec.align(TCPBoundSocket_Connect_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TCPBoundSocket_Connect_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateTCPBoundSocketRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTCPBoundSocket_StartListening_Name:
        if (message.expectsResponse())
          paramsClass = TCPBoundSocket_StartListening_Params;
      break;
      case kTCPBoundSocket_Connect_Name:
        if (message.expectsResponse())
          paramsClass = TCPBoundSocket_Connect_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTCPBoundSocketResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kTCPBoundSocket_StartListening_Name:
        if (message.isResponse())
          paramsClass = TCPBoundSocket_StartListening_ResponseParams;
        break;
      case kTCPBoundSocket_Connect_Name:
        if (message.isResponse())
          paramsClass = TCPBoundSocket_Connect_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var TCPBoundSocket = {
    name: null,
    proxyClass: TCPBoundSocketProxy,
    stubClass: TCPBoundSocketStub,
    validateRequest: validateTCPBoundSocketRequest,
    validateResponse: validateTCPBoundSocketResponse,
  };
  TCPBoundSocketStub.prototype.validator = validateTCPBoundSocketRequest;
  TCPBoundSocketProxy.prototype.validator = validateTCPBoundSocketResponse;


  var exports = {};
  exports.TCPBoundSocket = TCPBoundSocket;


  return exports;
});
