// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/sample_import.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {
  var Shape = {};
  Shape.RECTANGLE = 1;
  Shape.CIRCLE = Shape.RECTANGLE + 1;
  Shape.TRIANGLE = Shape.CIRCLE + 1;
  Shape.LAST = Shape.TRIANGLE;
  var AnotherShape = {};
  AnotherShape.RECTANGLE = 10;
  AnotherShape.CIRCLE = AnotherShape.RECTANGLE + 1;
  AnotherShape.TRIANGLE = AnotherShape.CIRCLE + 1;
  var YetAnotherShape = {};
  YetAnotherShape.RECTANGLE = 20;
  YetAnotherShape.CIRCLE = YetAnotherShape.RECTANGLE + 1;
  YetAnotherShape.TRIANGLE = YetAnotherShape.CIRCLE + 1;

  function Point(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Point.prototype.initDefaults_ = function() {
    this.x = 0;
    this.y = 0;
  };
  Point.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Point.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Point.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  Point.encodedSize = codec.kStructHeaderSize + 8;

  Point.decode = function(decoder) {
    var packed;
    var val = new Point();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.x = decoder.decodeStruct(codec.Int32);
    val.y = decoder.decodeStruct(codec.Int32);
    return val;
  };

  Point.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Point.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.x);
    encoder.encodeStruct(codec.Int32, val.y);
  };

  function ImportedInterface_DoSomething_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ImportedInterface_DoSomething_Params.prototype.initDefaults_ = function() {
  };
  ImportedInterface_DoSomething_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ImportedInterface_DoSomething_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ImportedInterface_DoSomething_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ImportedInterface_DoSomething_Params.encodedSize = codec.kStructHeaderSize + 0;

  ImportedInterface_DoSomething_Params.decode = function(decoder) {
    var packed;
    var val = new ImportedInterface_DoSomething_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ImportedInterface_DoSomething_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ImportedInterface_DoSomething_Params.encodedSize);
    encoder.writeUint32(0);
  };

  var kImportedInterface_DoSomething_Name = 0;

  function ImportedInterfaceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ImportedInterfaceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ImportedInterfaceProxy.prototype.doSomething = function() {
    var params = new ImportedInterface_DoSomething_Params();
    var builder = new codec.MessageBuilder(
        kImportedInterface_DoSomething_Name,
        codec.align(ImportedInterface_DoSomething_Params.encodedSize));
    builder.encodeStruct(ImportedInterface_DoSomething_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ImportedInterfaceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ImportedInterfaceStub.prototype = Object.create(bindings.StubBase.prototype);
  ImportedInterfaceStub.prototype.doSomething = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.doSomething && bindings.StubBindings(this).delegate.doSomething();
  }

  ImportedInterfaceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kImportedInterface_DoSomething_Name:
      var params = reader.decodeStruct(ImportedInterface_DoSomething_Params);
      this.doSomething();
      return true;
    default:
      return false;
    }
  };

  ImportedInterfaceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateImportedInterfaceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kImportedInterface_DoSomething_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ImportedInterface_DoSomething_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateImportedInterfaceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ImportedInterface = {
    name: null,
    proxyClass: ImportedInterfaceProxy,
    stubClass: ImportedInterfaceStub,
    validateRequest: validateImportedInterfaceRequest,
    validateResponse: null,
  };
  ImportedInterfaceStub.prototype.validator = validateImportedInterfaceRequest;
  ImportedInterfaceProxy.prototype.validator = null;


  var exports = {};
  exports.Shape = Shape;
  exports.AnotherShape = AnotherShape;
  exports.YetAnotherShape = YetAnotherShape;
  exports.Point = Point;
  exports.ImportedInterface = ImportedInterface;


  return exports;
});
