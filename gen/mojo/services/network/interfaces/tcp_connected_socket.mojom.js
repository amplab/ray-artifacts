// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/network/interfaces/tcp_connected_socket.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {


  function TCPConnectedSocketProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  TCPConnectedSocketProxy.prototype = Object.create(bindings.ProxyBase.prototype);

  function TCPConnectedSocketStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  TCPConnectedSocketStub.prototype = Object.create(bindings.StubBase.prototype);

  TCPConnectedSocketStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  TCPConnectedSocketStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateTCPConnectedSocketRequest(messageValidator) {
    return validator.validationError.NONE;
  }

  function validateTCPConnectedSocketResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var TCPConnectedSocket = {
    name: null,
    proxyClass: TCPConnectedSocketProxy,
    stubClass: TCPConnectedSocketStub,
    validateRequest: validateTCPConnectedSocketRequest,
    validateResponse: null,
  };
  TCPConnectedSocketStub.prototype.validator = validateTCPConnectedSocketRequest;
  TCPConnectedSocketProxy.prototype.validator = null;


  var exports = {};
  exports.TCPConnectedSocket = TCPConnectedSocket;


  return exports;
});
