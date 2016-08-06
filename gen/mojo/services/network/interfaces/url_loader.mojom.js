// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/network/interfaces/url_loader.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/network/network_error.mojom",
    "mojo/public/interfaces/network/url_request.mojom",
    "mojo/public/interfaces/network/url_response.mojom",
], function(bindings, codec, connection, core, validator, network_error$, url_request$, url_response$) {

  function URLLoaderStatus(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderStatus.prototype.initDefaults_ = function() {
    this.error = null;
    this.is_loading = false;
  };
  URLLoaderStatus.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderStatus.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoaderStatus.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLLoaderStatus.error
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_error$.NetworkError, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  URLLoaderStatus.encodedSize = codec.kStructHeaderSize + 16;

  URLLoaderStatus.decode = function(decoder) {
    var packed;
    var val = new URLLoaderStatus();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStructPointer(network_error$.NetworkError);
    val.is_loading = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  URLLoaderStatus.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderStatus.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_error$.NetworkError, val.error);
    encoder.encodeStruct(codec.Uint8, val.is_loading);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function URLLoader_Start_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_Start_Params.prototype.initDefaults_ = function() {
    this.request = null;
  };
  URLLoader_Start_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoader_Start_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoader_Start_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLLoader_Start_Params.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url_request$.URLRequest, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoader_Start_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoader_Start_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoader_Start_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStructPointer(url_request$.URLRequest);
    return val;
  };

  URLLoader_Start_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_Start_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url_request$.URLRequest, val.request);
  };

  function URLLoader_Start_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_Start_ResponseParams.prototype.initDefaults_ = function() {
    this.response = null;
  };
  URLLoader_Start_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoader_Start_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoader_Start_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLLoader_Start_ResponseParams.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url_response$.URLResponse, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoader_Start_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  URLLoader_Start_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new URLLoader_Start_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(url_response$.URLResponse);
    return val;
  };

  URLLoader_Start_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_Start_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url_response$.URLResponse, val.response);
  };

  function URLLoader_FollowRedirect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_FollowRedirect_Params.prototype.initDefaults_ = function() {
  };
  URLLoader_FollowRedirect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoader_FollowRedirect_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoader_FollowRedirect_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoader_FollowRedirect_Params.encodedSize = codec.kStructHeaderSize + 0;

  URLLoader_FollowRedirect_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoader_FollowRedirect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLLoader_FollowRedirect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_FollowRedirect_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function URLLoader_FollowRedirect_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_FollowRedirect_ResponseParams.prototype.initDefaults_ = function() {
    this.response = null;
  };
  URLLoader_FollowRedirect_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoader_FollowRedirect_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoader_FollowRedirect_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLLoader_FollowRedirect_ResponseParams.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url_response$.URLResponse, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoader_FollowRedirect_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  URLLoader_FollowRedirect_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new URLLoader_FollowRedirect_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(url_response$.URLResponse);
    return val;
  };

  URLLoader_FollowRedirect_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_FollowRedirect_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url_response$.URLResponse, val.response);
  };

  function URLLoader_QueryStatus_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_QueryStatus_Params.prototype.initDefaults_ = function() {
  };
  URLLoader_QueryStatus_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoader_QueryStatus_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoader_QueryStatus_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoader_QueryStatus_Params.encodedSize = codec.kStructHeaderSize + 0;

  URLLoader_QueryStatus_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoader_QueryStatus_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLLoader_QueryStatus_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_QueryStatus_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function URLLoader_QueryStatus_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoader_QueryStatus_ResponseParams.prototype.initDefaults_ = function() {
    this.status = null;
  };
  URLLoader_QueryStatus_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoader_QueryStatus_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLLoader_QueryStatus_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLLoader_QueryStatus_ResponseParams.status
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, URLLoaderStatus, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoader_QueryStatus_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  URLLoader_QueryStatus_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new URLLoader_QueryStatus_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStructPointer(URLLoaderStatus);
    return val;
  };

  URLLoader_QueryStatus_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoader_QueryStatus_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(URLLoaderStatus, val.status);
  };

  var kURLLoader_Start_Name = 0;
  var kURLLoader_FollowRedirect_Name = 1;
  var kURLLoader_QueryStatus_Name = 2;

  function URLLoaderProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  URLLoaderProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  URLLoaderProxy.prototype.start = function(request) {
    var params = new URLLoader_Start_Params();
    params.request = request;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kURLLoader_Start_Name,
          codec.align(URLLoader_Start_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(URLLoader_Start_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(URLLoader_Start_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  URLLoaderProxy.prototype.followRedirect = function() {
    var params = new URLLoader_FollowRedirect_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kURLLoader_FollowRedirect_Name,
          codec.align(URLLoader_FollowRedirect_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(URLLoader_FollowRedirect_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(URLLoader_FollowRedirect_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  URLLoaderProxy.prototype.queryStatus = function() {
    var params = new URLLoader_QueryStatus_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kURLLoader_QueryStatus_Name,
          codec.align(URLLoader_QueryStatus_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(URLLoader_QueryStatus_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(URLLoader_QueryStatus_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function URLLoaderStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  URLLoaderStub.prototype = Object.create(bindings.StubBase.prototype);
  URLLoaderStub.prototype.start = function(request) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.start && bindings.StubBindings(this).delegate.start(request);
  }
  URLLoaderStub.prototype.followRedirect = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.followRedirect && bindings.StubBindings(this).delegate.followRedirect();
  }
  URLLoaderStub.prototype.queryStatus = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.queryStatus && bindings.StubBindings(this).delegate.queryStatus();
  }

  URLLoaderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  URLLoaderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kURLLoader_Start_Name:
      var params = reader.decodeStruct(URLLoader_Start_Params);
      return this.start(params.request).then(function(response) {
        var responseParams =
            new URLLoader_Start_ResponseParams();
        responseParams.response = response.response;
        var builder = new codec.MessageWithRequestIDBuilder(
            kURLLoader_Start_Name,
            codec.align(URLLoader_Start_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(URLLoader_Start_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kURLLoader_FollowRedirect_Name:
      var params = reader.decodeStruct(URLLoader_FollowRedirect_Params);
      return this.followRedirect().then(function(response) {
        var responseParams =
            new URLLoader_FollowRedirect_ResponseParams();
        responseParams.response = response.response;
        var builder = new codec.MessageWithRequestIDBuilder(
            kURLLoader_FollowRedirect_Name,
            codec.align(URLLoader_FollowRedirect_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(URLLoader_FollowRedirect_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kURLLoader_QueryStatus_Name:
      var params = reader.decodeStruct(URLLoader_QueryStatus_Params);
      return this.queryStatus().then(function(response) {
        var responseParams =
            new URLLoader_QueryStatus_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageWithRequestIDBuilder(
            kURLLoader_QueryStatus_Name,
            codec.align(URLLoader_QueryStatus_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(URLLoader_QueryStatus_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateURLLoaderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kURLLoader_Start_Name:
        if (message.expectsResponse())
          paramsClass = URLLoader_Start_Params;
      break;
      case kURLLoader_FollowRedirect_Name:
        if (message.expectsResponse())
          paramsClass = URLLoader_FollowRedirect_Params;
      break;
      case kURLLoader_QueryStatus_Name:
        if (message.expectsResponse())
          paramsClass = URLLoader_QueryStatus_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateURLLoaderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kURLLoader_Start_Name:
        if (message.isResponse())
          paramsClass = URLLoader_Start_ResponseParams;
        break;
      case kURLLoader_FollowRedirect_Name:
        if (message.isResponse())
          paramsClass = URLLoader_FollowRedirect_ResponseParams;
        break;
      case kURLLoader_QueryStatus_Name:
        if (message.isResponse())
          paramsClass = URLLoader_QueryStatus_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var URLLoader = {
    name: null,
    proxyClass: URLLoaderProxy,
    stubClass: URLLoaderStub,
    validateRequest: validateURLLoaderRequest,
    validateResponse: validateURLLoaderResponse,
  };
  URLLoaderStub.prototype.validator = validateURLLoaderRequest;
  URLLoaderProxy.prototype.validator = validateURLLoaderResponse;


  var exports = {};
  exports.URLLoaderStatus = URLLoaderStatus;
  exports.URLLoader = URLLoader;


  return exports;
});
