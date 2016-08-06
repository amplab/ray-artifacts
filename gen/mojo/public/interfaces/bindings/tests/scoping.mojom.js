// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/scoping.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function A_GetB_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  A_GetB_Params.prototype.initDefaults_ = function() {
    this.b = null;
  };
  A_GetB_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  A_GetB_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, A_GetB_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate A_GetB_Params.b
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  A_GetB_Params.encodedSize = codec.kStructHeaderSize + 8;

  A_GetB_Params.decode = function(decoder) {
    var packed;
    var val = new A_GetB_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.b = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  A_GetB_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(A_GetB_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.b);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function B_GetC_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  B_GetC_Params.prototype.initDefaults_ = function() {
    this.c = null;
  };
  B_GetC_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  B_GetC_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, B_GetC_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate B_GetC_Params.c
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  B_GetC_Params.encodedSize = codec.kStructHeaderSize + 8;

  B_GetC_Params.decode = function(decoder) {
    var packed;
    var val = new B_GetC_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.c = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  B_GetC_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(B_GetC_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.c);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function C_D_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  C_D_Params.prototype.initDefaults_ = function() {
  };
  C_D_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  C_D_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, C_D_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  C_D_Params.encodedSize = codec.kStructHeaderSize + 0;

  C_D_Params.decode = function(decoder) {
    var packed;
    var val = new C_D_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  C_D_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(C_D_Params.encodedSize);
    encoder.writeUint32(0);
  };

  var kA_GetB_Name = 0;

  function AProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  AProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  AProxy.prototype.getB = function(b) {
    var params = new A_GetB_Params();
    params.b = core.isHandle(b) ? b : connection.bindProxy(b, B);
    var builder = new codec.MessageBuilder(
        kA_GetB_Name,
        codec.align(A_GetB_Params.encodedSize));
    builder.encodeStruct(A_GetB_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  AStub.prototype = Object.create(bindings.StubBase.prototype);
  AStub.prototype.getB = function(b) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getB && bindings.StubBindings(this).delegate.getB(connection.bindHandleToStub(b, B));
  }

  AStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kA_GetB_Name:
      var params = reader.decodeStruct(A_GetB_Params);
      this.getB(params.b);
      return true;
    default:
      return false;
    }
  };

  AStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateARequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kA_GetB_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = A_GetB_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var A = {
    name: null,
    proxyClass: AProxy,
    stubClass: AStub,
    validateRequest: validateARequest,
    validateResponse: null,
  };
  AStub.prototype.validator = validateARequest;
  AProxy.prototype.validator = null;

  var kB_GetC_Name = 0;

  function BProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  BProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  BProxy.prototype.getC = function(c) {
    var params = new B_GetC_Params();
    params.c = core.isHandle(c) ? c : connection.bindProxy(c, C);
    var builder = new codec.MessageBuilder(
        kB_GetC_Name,
        codec.align(B_GetC_Params.encodedSize));
    builder.encodeStruct(B_GetC_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function BStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  BStub.prototype = Object.create(bindings.StubBase.prototype);
  BStub.prototype.getC = function(c) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getC && bindings.StubBindings(this).delegate.getC(connection.bindHandleToStub(c, C));
  }

  BStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kB_GetC_Name:
      var params = reader.decodeStruct(B_GetC_Params);
      this.getC(params.c);
      return true;
    default:
      return false;
    }
  };

  BStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateBRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kB_GetC_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = B_GetC_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var B = {
    name: null,
    proxyClass: BProxy,
    stubClass: BStub,
    validateRequest: validateBRequest,
    validateResponse: null,
  };
  BStub.prototype.validator = validateBRequest;
  BProxy.prototype.validator = null;

  var kC_D_Name = 0;

  function CProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  CProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  CProxy.prototype.d = function() {
    var params = new C_D_Params();
    var builder = new codec.MessageBuilder(
        kC_D_Name,
        codec.align(C_D_Params.encodedSize));
    builder.encodeStruct(C_D_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  CStub.prototype = Object.create(bindings.StubBase.prototype);
  CStub.prototype.d = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.d && bindings.StubBindings(this).delegate.d();
  }

  CStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kC_D_Name:
      var params = reader.decodeStruct(C_D_Params);
      this.d();
      return true;
    default:
      return false;
    }
  };

  CStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateCRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kC_D_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = C_D_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var C = {
    name: null,
    proxyClass: CProxy,
    stubClass: CStub,
    validateRequest: validateCRequest,
    validateResponse: null,
  };
  CStub.prototype.validator = validateCRequest;
  CProxy.prototype.validator = null;


  var exports = {};
  exports.A = A;
  exports.B = B;
  exports.C = C;


  return exports;
});
