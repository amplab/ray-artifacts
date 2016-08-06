// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/network/interfaces/tcp_server_socket.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/network/network_error.mojom",
    "mojo/services/network/interfaces/net_address.mojom",
    "mojo/services/network/interfaces/tcp_connected_socket.mojom",
], function(bindings, codec, connection, core, validator, network_error$, net_address$, tcp_connected_socket$) {

  function TCPServerSocket_Accept_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPServerSocket_Accept_Params.prototype.initDefaults_ = function() {
    this.send_stream = null;
    this.receive_stream = null;
    this.client_socket = null;
  };
  TCPServerSocket_Accept_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPServerSocket_Accept_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TCPServerSocket_Accept_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TCPServerSocket_Accept_Params.send_stream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TCPServerSocket_Accept_Params.receive_stream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TCPServerSocket_Accept_Params.client_socket
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TCPServerSocket_Accept_Params.encodedSize = codec.kStructHeaderSize + 16;

  TCPServerSocket_Accept_Params.decode = function(decoder) {
    var packed;
    var val = new TCPServerSocket_Accept_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.send_stream = decoder.decodeStruct(codec.Handle);
    val.receive_stream = decoder.decodeStruct(codec.Handle);
    val.client_socket = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TCPServerSocket_Accept_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPServerSocket_Accept_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.send_stream);
    encoder.encodeStruct(codec.Handle, val.receive_stream);
    encoder.encodeStruct(codec.Handle, val.client_socket);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function TCPServerSocket_Accept_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TCPServerSocket_Accept_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.remote_address = null;
  };
  TCPServerSocket_Accept_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TCPServerSocket_Accept_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TCPServerSocket_Accept_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TCPServerSocket_Accept_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_error$.NetworkError, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TCPServerSocket_Accept_ResponseParams.remote_address
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, net_address$.NetAddress, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TCPServerSocket_Accept_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  TCPServerSocket_Accept_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TCPServerSocket_Accept_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(network_error$.NetworkError);
    val.remote_address = decoder.decodeStructPointer(net_address$.NetAddress);
    return val;
  };

  TCPServerSocket_Accept_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TCPServerSocket_Accept_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_error$.NetworkError, val.result);
    encoder.encodeStructPointer(net_address$.NetAddress, val.remote_address);
  };

  var kTCPServerSocket_Accept_Name = 0;

  function TCPServerSocketProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  TCPServerSocketProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  TCPServerSocketProxy.prototype.accept = function(send_stream, receive_stream, client_socket) {
    var params = new TCPServerSocket_Accept_Params();
    params.send_stream = send_stream;
    params.receive_stream = receive_stream;
    params.client_socket = core.isHandle(client_socket) ? client_socket : connection.bindProxy(client_socket, tcp_connected_socket$.TCPConnectedSocket);
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kTCPServerSocket_Accept_Name,
          codec.align(TCPServerSocket_Accept_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TCPServerSocket_Accept_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TCPServerSocket_Accept_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function TCPServerSocketStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  TCPServerSocketStub.prototype = Object.create(bindings.StubBase.prototype);
  TCPServerSocketStub.prototype.accept = function(send_stream, receive_stream, client_socket) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.accept && bindings.StubBindings(this).delegate.accept(send_stream, receive_stream, connection.bindHandleToStub(client_socket, tcp_connected_socket$.TCPConnectedSocket));
  }

  TCPServerSocketStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  TCPServerSocketStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTCPServerSocket_Accept_Name:
      var params = reader.decodeStruct(TCPServerSocket_Accept_Params);
      return this.accept(params.send_stream, params.receive_stream, params.client_socket).then(function(response) {
        var responseParams =
            new TCPServerSocket_Accept_ResponseParams();
        responseParams.result = response.result;
        responseParams.remote_address = response.remote_address;
        var builder = new codec.MessageWithRequestIDBuilder(
            kTCPServerSocket_Accept_Name,
            codec.align(TCPServerSocket_Accept_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TCPServerSocket_Accept_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateTCPServerSocketRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTCPServerSocket_Accept_Name:
        if (message.expectsResponse())
          paramsClass = TCPServerSocket_Accept_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTCPServerSocketResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kTCPServerSocket_Accept_Name:
        if (message.isResponse())
          paramsClass = TCPServerSocket_Accept_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var TCPServerSocket = {
    name: null,
    proxyClass: TCPServerSocketProxy,
    stubClass: TCPServerSocketStub,
    validateRequest: validateTCPServerSocketRequest,
    validateResponse: validateTCPServerSocketResponse,
  };
  TCPServerSocketStub.prototype.validator = validateTCPServerSocketRequest;
  TCPServerSocketProxy.prototype.validator = validateTCPServerSocketResponse;


  var exports = {};
  exports.TCPServerSocket = TCPServerSocket;


  return exports;
});
