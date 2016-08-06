// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/network/interfaces/host_resolver.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/network/network_error.mojom",
    "mojo/services/network/interfaces/net_address.mojom",
], function(bindings, codec, connection, core, validator, network_error$, net_address$) {

  function HostResolver_GetHostAddresses_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HostResolver_GetHostAddresses_Params.prototype.initDefaults_ = function() {
    this.host = null;
    this.family = 0;
  };
  HostResolver_GetHostAddresses_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HostResolver_GetHostAddresses_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HostResolver_GetHostAddresses_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HostResolver_GetHostAddresses_Params.host
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  HostResolver_GetHostAddresses_Params.encodedSize = codec.kStructHeaderSize + 16;

  HostResolver_GetHostAddresses_Params.decode = function(decoder) {
    var packed;
    var val = new HostResolver_GetHostAddresses_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.host = decoder.decodeStruct(codec.String);
    val.family = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HostResolver_GetHostAddresses_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HostResolver_GetHostAddresses_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.host);
    encoder.encodeStruct(codec.Int32, val.family);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function HostResolver_GetHostAddresses_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HostResolver_GetHostAddresses_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.addresses = null;
  };
  HostResolver_GetHostAddresses_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HostResolver_GetHostAddresses_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HostResolver_GetHostAddresses_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HostResolver_GetHostAddresses_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_error$.NetworkError, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate HostResolver_GetHostAddresses_ResponseParams.addresses
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(net_address$.NetAddress), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HostResolver_GetHostAddresses_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  HostResolver_GetHostAddresses_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new HostResolver_GetHostAddresses_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(network_error$.NetworkError);
    val.addresses = decoder.decodeArrayPointer(new codec.PointerTo(net_address$.NetAddress));
    return val;
  };

  HostResolver_GetHostAddresses_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HostResolver_GetHostAddresses_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_error$.NetworkError, val.result);
    encoder.encodeArrayPointer(new codec.PointerTo(net_address$.NetAddress), val.addresses);
  };

  var kHostResolver_GetHostAddresses_Name = 0;

  function HostResolverProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  HostResolverProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  HostResolverProxy.prototype.getHostAddresses = function(host, family) {
    var params = new HostResolver_GetHostAddresses_Params();
    params.host = host;
    params.family = family;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kHostResolver_GetHostAddresses_Name,
          codec.align(HostResolver_GetHostAddresses_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(HostResolver_GetHostAddresses_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(HostResolver_GetHostAddresses_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function HostResolverStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  HostResolverStub.prototype = Object.create(bindings.StubBase.prototype);
  HostResolverStub.prototype.getHostAddresses = function(host, family) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getHostAddresses && bindings.StubBindings(this).delegate.getHostAddresses(host, family);
  }

  HostResolverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  HostResolverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kHostResolver_GetHostAddresses_Name:
      var params = reader.decodeStruct(HostResolver_GetHostAddresses_Params);
      return this.getHostAddresses(params.host, params.family).then(function(response) {
        var responseParams =
            new HostResolver_GetHostAddresses_ResponseParams();
        responseParams.result = response.result;
        responseParams.addresses = response.addresses;
        var builder = new codec.MessageWithRequestIDBuilder(
            kHostResolver_GetHostAddresses_Name,
            codec.align(HostResolver_GetHostAddresses_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(HostResolver_GetHostAddresses_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateHostResolverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kHostResolver_GetHostAddresses_Name:
        if (message.expectsResponse())
          paramsClass = HostResolver_GetHostAddresses_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateHostResolverResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kHostResolver_GetHostAddresses_Name:
        if (message.isResponse())
          paramsClass = HostResolver_GetHostAddresses_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var HostResolver = {
    name: null,
    proxyClass: HostResolverProxy,
    stubClass: HostResolverStub,
    validateRequest: validateHostResolverRequest,
    validateResponse: validateHostResolverResponse,
  };
  HostResolverStub.prototype.validator = validateHostResolverRequest;
  HostResolverProxy.prototype.validator = validateHostResolverResponse;


  var exports = {};
  exports.HostResolver = HostResolver;


  return exports;
});
