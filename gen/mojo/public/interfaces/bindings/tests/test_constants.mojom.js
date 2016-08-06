// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/test_constants.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {
  var kBoolValue = true;
  var kInt8Value = -2;
  var kUint8Value = 128;
  var kInt16Value = -233;
  var kUint16Value = 44204;
  var kInt32Value = -44204;
  var kUint32Value = 4294967295;
  var kInt64Value = -9223372036854775807;
  var kUint64Value = 9999999999999999999;
  var kDoubleValue = 3.14159;
  var kDoubleInfinity = Infinity;
  var kDoubleNegativeInfinity = -Infinity;
  var kDoubleNaN = NaN;
  var kFloatValue = 2.71828;
  var kFloatInfinity = Infinity;
  var kFloatNegativeInfinity = -Infinity;
  var kFloatNaN = NaN;

  function StructWithConstants(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructWithConstants.kInt8Value = 5;
  StructWithConstants.kFloatValue = 765.432;
  StructWithConstants.prototype.initDefaults_ = function() {
  };
  StructWithConstants.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructWithConstants.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructWithConstants.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructWithConstants.encodedSize = codec.kStructHeaderSize + 0;

  StructWithConstants.decode = function(decoder) {
    var packed;
    var val = new StructWithConstants();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  StructWithConstants.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructWithConstants.encodedSize);
    encoder.writeUint32(0);
  };


  function InterfaceWithConstantsProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  InterfaceWithConstantsProxy.prototype = Object.create(bindings.ProxyBase.prototype);

  function InterfaceWithConstantsStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  InterfaceWithConstantsStub.prototype = Object.create(bindings.StubBase.prototype);

  InterfaceWithConstantsStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  InterfaceWithConstantsStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateInterfaceWithConstantsRequest(messageValidator) {
    return validator.validationError.NONE;
  }

  function validateInterfaceWithConstantsResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var InterfaceWithConstants = {
    name: null,
    proxyClass: InterfaceWithConstantsProxy,
    stubClass: InterfaceWithConstantsStub,
    validateRequest: validateInterfaceWithConstantsRequest,
    validateResponse: null,
  };
  InterfaceWithConstants.kUint32Value = 20100722,
  InterfaceWithConstants.kDoubleValue = 12.34567,
  InterfaceWithConstantsStub.prototype.validator = validateInterfaceWithConstantsRequest;
  InterfaceWithConstantsProxy.prototype.validator = null;


  var exports = {};
  exports.kBoolValue = kBoolValue;
  exports.kInt8Value = kInt8Value;
  exports.kUint8Value = kUint8Value;
  exports.kInt16Value = kInt16Value;
  exports.kUint16Value = kUint16Value;
  exports.kInt32Value = kInt32Value;
  exports.kUint32Value = kUint32Value;
  exports.kInt64Value = kInt64Value;
  exports.kUint64Value = kUint64Value;
  exports.kDoubleValue = kDoubleValue;
  exports.kDoubleInfinity = kDoubleInfinity;
  exports.kDoubleNegativeInfinity = kDoubleNegativeInfinity;
  exports.kDoubleNaN = kDoubleNaN;
  exports.kFloatValue = kFloatValue;
  exports.kFloatInfinity = kFloatInfinity;
  exports.kFloatNegativeInfinity = kFloatNegativeInfinity;
  exports.kFloatNaN = kFloatNaN;
  exports.StructWithConstants = StructWithConstants;
  exports.InterfaceWithConstants = InterfaceWithConstants;


  return exports;
});
