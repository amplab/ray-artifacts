// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/math_calculator.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function Calculator_Clear_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Calculator_Clear_Params.prototype.initDefaults_ = function() {
  };
  Calculator_Clear_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Calculator_Clear_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Calculator_Clear_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Calculator_Clear_Params.encodedSize = codec.kStructHeaderSize + 0;

  Calculator_Clear_Params.decode = function(decoder) {
    var packed;
    var val = new Calculator_Clear_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Calculator_Clear_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Calculator_Clear_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function Calculator_Clear_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Calculator_Clear_ResponseParams.prototype.initDefaults_ = function() {
    this.value = 0;
  };
  Calculator_Clear_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Calculator_Clear_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Calculator_Clear_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Calculator_Clear_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Calculator_Clear_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Calculator_Clear_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value = decoder.decodeStruct(codec.Double);
    return val;
  };

  Calculator_Clear_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Calculator_Clear_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Double, val.value);
  };

  function Calculator_Add_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Calculator_Add_Params.prototype.initDefaults_ = function() {
    this.value = 0;
  };
  Calculator_Add_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Calculator_Add_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Calculator_Add_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Calculator_Add_Params.encodedSize = codec.kStructHeaderSize + 8;

  Calculator_Add_Params.decode = function(decoder) {
    var packed;
    var val = new Calculator_Add_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value = decoder.decodeStruct(codec.Double);
    return val;
  };

  Calculator_Add_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Calculator_Add_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Double, val.value);
  };

  function Calculator_Add_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Calculator_Add_ResponseParams.prototype.initDefaults_ = function() {
    this.value = 0;
  };
  Calculator_Add_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Calculator_Add_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Calculator_Add_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Calculator_Add_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Calculator_Add_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Calculator_Add_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value = decoder.decodeStruct(codec.Double);
    return val;
  };

  Calculator_Add_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Calculator_Add_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Double, val.value);
  };

  function Calculator_Multiply_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Calculator_Multiply_Params.prototype.initDefaults_ = function() {
    this.value = 0;
  };
  Calculator_Multiply_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Calculator_Multiply_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Calculator_Multiply_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Calculator_Multiply_Params.encodedSize = codec.kStructHeaderSize + 8;

  Calculator_Multiply_Params.decode = function(decoder) {
    var packed;
    var val = new Calculator_Multiply_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value = decoder.decodeStruct(codec.Double);
    return val;
  };

  Calculator_Multiply_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Calculator_Multiply_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Double, val.value);
  };

  function Calculator_Multiply_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Calculator_Multiply_ResponseParams.prototype.initDefaults_ = function() {
    this.value = 0;
  };
  Calculator_Multiply_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Calculator_Multiply_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Calculator_Multiply_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Calculator_Multiply_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Calculator_Multiply_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Calculator_Multiply_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value = decoder.decodeStruct(codec.Double);
    return val;
  };

  Calculator_Multiply_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Calculator_Multiply_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Double, val.value);
  };

  var kCalculator_Clear_Name = 0;
  var kCalculator_Add_Name = 1;
  var kCalculator_Multiply_Name = 2;

  function CalculatorProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  CalculatorProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  CalculatorProxy.prototype.clear = function() {
    var params = new Calculator_Clear_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kCalculator_Clear_Name,
          codec.align(Calculator_Clear_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Calculator_Clear_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Calculator_Clear_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CalculatorProxy.prototype.add = function(value) {
    var params = new Calculator_Add_Params();
    params.value = value;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kCalculator_Add_Name,
          codec.align(Calculator_Add_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Calculator_Add_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Calculator_Add_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CalculatorProxy.prototype.multiply = function(value) {
    var params = new Calculator_Multiply_Params();
    params.value = value;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kCalculator_Multiply_Name,
          codec.align(Calculator_Multiply_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Calculator_Multiply_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Calculator_Multiply_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function CalculatorStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  CalculatorStub.prototype = Object.create(bindings.StubBase.prototype);
  CalculatorStub.prototype.clear = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.clear && bindings.StubBindings(this).delegate.clear();
  }
  CalculatorStub.prototype.add = function(value) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.add && bindings.StubBindings(this).delegate.add(value);
  }
  CalculatorStub.prototype.multiply = function(value) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.multiply && bindings.StubBindings(this).delegate.multiply(value);
  }

  CalculatorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  CalculatorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCalculator_Clear_Name:
      var params = reader.decodeStruct(Calculator_Clear_Params);
      return this.clear().then(function(response) {
        var responseParams =
            new Calculator_Clear_ResponseParams();
        responseParams.value = response.value;
        var builder = new codec.MessageWithRequestIDBuilder(
            kCalculator_Clear_Name,
            codec.align(Calculator_Clear_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Calculator_Clear_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kCalculator_Add_Name:
      var params = reader.decodeStruct(Calculator_Add_Params);
      return this.add(params.value).then(function(response) {
        var responseParams =
            new Calculator_Add_ResponseParams();
        responseParams.value = response.value;
        var builder = new codec.MessageWithRequestIDBuilder(
            kCalculator_Add_Name,
            codec.align(Calculator_Add_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Calculator_Add_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kCalculator_Multiply_Name:
      var params = reader.decodeStruct(Calculator_Multiply_Params);
      return this.multiply(params.value).then(function(response) {
        var responseParams =
            new Calculator_Multiply_ResponseParams();
        responseParams.value = response.value;
        var builder = new codec.MessageWithRequestIDBuilder(
            kCalculator_Multiply_Name,
            codec.align(Calculator_Multiply_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Calculator_Multiply_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateCalculatorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCalculator_Clear_Name:
        if (message.expectsResponse())
          paramsClass = Calculator_Clear_Params;
      break;
      case kCalculator_Add_Name:
        if (message.expectsResponse())
          paramsClass = Calculator_Add_Params;
      break;
      case kCalculator_Multiply_Name:
        if (message.expectsResponse())
          paramsClass = Calculator_Multiply_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCalculatorResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCalculator_Clear_Name:
        if (message.isResponse())
          paramsClass = Calculator_Clear_ResponseParams;
        break;
      case kCalculator_Add_Name:
        if (message.isResponse())
          paramsClass = Calculator_Add_ResponseParams;
        break;
      case kCalculator_Multiply_Name:
        if (message.isResponse())
          paramsClass = Calculator_Multiply_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Calculator = {
    name: null,
    proxyClass: CalculatorProxy,
    stubClass: CalculatorStub,
    validateRequest: validateCalculatorRequest,
    validateResponse: validateCalculatorResponse,
  };
  CalculatorStub.prototype.validator = validateCalculatorRequest;
  CalculatorProxy.prototype.validator = validateCalculatorResponse;


  var exports = {};
  exports.Calculator = Calculator;


  return exports;
});
