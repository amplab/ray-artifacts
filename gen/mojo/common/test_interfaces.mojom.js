// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/common/test_interfaces.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function Dummy_Foo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Dummy_Foo_Params.prototype.initDefaults_ = function() {
  };
  Dummy_Foo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Dummy_Foo_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Dummy_Foo_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Dummy_Foo_Params.encodedSize = codec.kStructHeaderSize + 0;

  Dummy_Foo_Params.decode = function(decoder) {
    var packed;
    var val = new Dummy_Foo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Dummy_Foo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Dummy_Foo_Params.encodedSize);
    encoder.writeUint32(0);
  };

  var kDummy_Foo_Name = 0;

  function DummyProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  DummyProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  DummyProxy.prototype.foo = function() {
    var params = new Dummy_Foo_Params();
    var builder = new codec.MessageBuilder(
        kDummy_Foo_Name,
        codec.align(Dummy_Foo_Params.encodedSize));
    builder.encodeStruct(Dummy_Foo_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DummyStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  DummyStub.prototype = Object.create(bindings.StubBase.prototype);
  DummyStub.prototype.foo = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.foo && bindings.StubBindings(this).delegate.foo();
  }

  DummyStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDummy_Foo_Name:
      var params = reader.decodeStruct(Dummy_Foo_Params);
      this.foo();
      return true;
    default:
      return false;
    }
  };

  DummyStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateDummyRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDummy_Foo_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Dummy_Foo_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDummyResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var Dummy = {
    name: null,
    proxyClass: DummyProxy,
    stubClass: DummyStub,
    validateRequest: validateDummyRequest,
    validateResponse: null,
  };
  DummyStub.prototype.validator = validateDummyRequest;
  DummyProxy.prototype.validator = null;


  var exports = {};
  exports.Dummy = Dummy;


  return exports;
});
