// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("shell/test/pingable.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function Pingable_Ping_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Pingable_Ping_Params.prototype.initDefaults_ = function() {
    this.message = null;
  };
  Pingable_Ping_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Pingable_Ping_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Pingable_Ping_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Pingable_Ping_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Pingable_Ping_Params.encodedSize = codec.kStructHeaderSize + 8;

  Pingable_Ping_Params.decode = function(decoder) {
    var packed;
    var val = new Pingable_Ping_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message = decoder.decodeStruct(codec.String);
    return val;
  };

  Pingable_Ping_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Pingable_Ping_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.message);
  };

  function Pingable_Ping_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Pingable_Ping_ResponseParams.prototype.initDefaults_ = function() {
    this.app_url = null;
    this.connection_url = null;
    this.message = null;
  };
  Pingable_Ping_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Pingable_Ping_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Pingable_Ping_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Pingable_Ping_ResponseParams.app_url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Pingable_Ping_ResponseParams.connection_url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Pingable_Ping_ResponseParams.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Pingable_Ping_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  Pingable_Ping_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Pingable_Ping_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.app_url = decoder.decodeStruct(codec.String);
    val.connection_url = decoder.decodeStruct(codec.String);
    val.message = decoder.decodeStruct(codec.String);
    return val;
  };

  Pingable_Ping_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Pingable_Ping_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.app_url);
    encoder.encodeStruct(codec.String, val.connection_url);
    encoder.encodeStruct(codec.String, val.message);
  };

  var kPingable_Ping_Name = 0;

  function PingableProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  PingableProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  PingableProxy.prototype.ping = function(message) {
    var params = new Pingable_Ping_Params();
    params.message = message;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kPingable_Ping_Name,
          codec.align(Pingable_Ping_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Pingable_Ping_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Pingable_Ping_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PingableStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  PingableStub.prototype = Object.create(bindings.StubBase.prototype);
  PingableStub.prototype.ping = function(message) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.ping && bindings.StubBindings(this).delegate.ping(message);
  }

  PingableStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PingableStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPingable_Ping_Name:
      var params = reader.decodeStruct(Pingable_Ping_Params);
      return this.ping(params.message).then(function(response) {
        var responseParams =
            new Pingable_Ping_ResponseParams();
        responseParams.app_url = response.app_url;
        responseParams.connection_url = response.connection_url;
        responseParams.message = response.message;
        var builder = new codec.MessageWithRequestIDBuilder(
            kPingable_Ping_Name,
            codec.align(Pingable_Ping_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Pingable_Ping_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validatePingableRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPingable_Ping_Name:
        if (message.expectsResponse())
          paramsClass = Pingable_Ping_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePingableResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPingable_Ping_Name:
        if (message.isResponse())
          paramsClass = Pingable_Ping_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Pingable = {
    name: 'Pingable',
    proxyClass: PingableProxy,
    stubClass: PingableStub,
    validateRequest: validatePingableRequest,
    validateResponse: validatePingableResponse,
  };
  PingableStub.prototype.validator = validatePingableRequest;
  PingableProxy.prototype.validator = validatePingableResponse;


  var exports = {};
  exports.Pingable = Pingable;


  return exports;
});
