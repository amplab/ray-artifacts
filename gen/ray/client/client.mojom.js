// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("ray/client/client.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {


  function ClientProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ClientProxy.prototype = Object.create(bindings.ProxyBase.prototype);

  function ClientStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ClientStub.prototype = Object.create(bindings.StubBase.prototype);

  ClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateClientRequest(messageValidator) {
    return validator.validationError.NONE;
  }

  function validateClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var Client = {
    name: 'ray::Client',
    proxyClass: ClientProxy,
    stubClass: ClientStub,
    validateRequest: validateClientRequest,
    validateResponse: null,
  };
  ClientStub.prototype.validator = validateClientRequest;
  ClientProxy.prototype.validator = null;


  var exports = {};
  exports.Client = Client;


  return exports;
});
