// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/url_response_disk_cache/interfaces/url_response_disk_cache.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/network/url_response.mojom",
], function(bindings, codec, connection, core, validator, url_response$) {

  function URLResponseDiskCache_Get_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLResponseDiskCache_Get_Params.prototype.initDefaults_ = function() {
    this.url = null;
  };
  URLResponseDiskCache_Get_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLResponseDiskCache_Get_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLResponseDiskCache_Get_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponseDiskCache_Get_Params.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLResponseDiskCache_Get_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLResponseDiskCache_Get_Params.decode = function(decoder) {
    var packed;
    var val = new URLResponseDiskCache_Get_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStruct(codec.String);
    return val;
  };

  URLResponseDiskCache_Get_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLResponseDiskCache_Get_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.url);
  };

  function URLResponseDiskCache_Get_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLResponseDiskCache_Get_ResponseParams.prototype.initDefaults_ = function() {
    this.response = null;
    this.file_path = null;
    this.cache_dir_path = null;
  };
  URLResponseDiskCache_Get_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLResponseDiskCache_Get_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLResponseDiskCache_Get_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponseDiskCache_Get_ResponseParams.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url_response$.URLResponse, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponseDiskCache_Get_ResponseParams.file_path
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponseDiskCache_Get_ResponseParams.cache_dir_path
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLResponseDiskCache_Get_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  URLResponseDiskCache_Get_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new URLResponseDiskCache_Get_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(url_response$.URLResponse);
    val.file_path = decoder.decodeArrayPointer(codec.Uint8);
    val.cache_dir_path = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  URLResponseDiskCache_Get_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLResponseDiskCache_Get_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url_response$.URLResponse, val.response);
    encoder.encodeArrayPointer(codec.Uint8, val.file_path);
    encoder.encodeArrayPointer(codec.Uint8, val.cache_dir_path);
  };

  function URLResponseDiskCache_Validate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLResponseDiskCache_Validate_Params.prototype.initDefaults_ = function() {
    this.url = null;
  };
  URLResponseDiskCache_Validate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLResponseDiskCache_Validate_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLResponseDiskCache_Validate_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponseDiskCache_Validate_Params.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLResponseDiskCache_Validate_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLResponseDiskCache_Validate_Params.decode = function(decoder) {
    var packed;
    var val = new URLResponseDiskCache_Validate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStruct(codec.String);
    return val;
  };

  URLResponseDiskCache_Validate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLResponseDiskCache_Validate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.url);
  };

  function URLResponseDiskCache_Update_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLResponseDiskCache_Update_Params.prototype.initDefaults_ = function() {
    this.response = null;
  };
  URLResponseDiskCache_Update_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLResponseDiskCache_Update_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLResponseDiskCache_Update_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponseDiskCache_Update_Params.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url_response$.URLResponse, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLResponseDiskCache_Update_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLResponseDiskCache_Update_Params.decode = function(decoder) {
    var packed;
    var val = new URLResponseDiskCache_Update_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(url_response$.URLResponse);
    return val;
  };

  URLResponseDiskCache_Update_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLResponseDiskCache_Update_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url_response$.URLResponse, val.response);
  };

  function URLResponseDiskCache_UpdateAndGet_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLResponseDiskCache_UpdateAndGet_Params.prototype.initDefaults_ = function() {
    this.response = null;
  };
  URLResponseDiskCache_UpdateAndGet_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLResponseDiskCache_UpdateAndGet_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLResponseDiskCache_UpdateAndGet_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponseDiskCache_UpdateAndGet_Params.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url_response$.URLResponse, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLResponseDiskCache_UpdateAndGet_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLResponseDiskCache_UpdateAndGet_Params.decode = function(decoder) {
    var packed;
    var val = new URLResponseDiskCache_UpdateAndGet_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(url_response$.URLResponse);
    return val;
  };

  URLResponseDiskCache_UpdateAndGet_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLResponseDiskCache_UpdateAndGet_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url_response$.URLResponse, val.response);
  };

  function URLResponseDiskCache_UpdateAndGet_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLResponseDiskCache_UpdateAndGet_ResponseParams.prototype.initDefaults_ = function() {
    this.file_path = null;
    this.cache_dir_path = null;
  };
  URLResponseDiskCache_UpdateAndGet_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLResponseDiskCache_UpdateAndGet_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLResponseDiskCache_UpdateAndGet_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponseDiskCache_UpdateAndGet_ResponseParams.file_path
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponseDiskCache_UpdateAndGet_ResponseParams.cache_dir_path
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLResponseDiskCache_UpdateAndGet_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  URLResponseDiskCache_UpdateAndGet_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new URLResponseDiskCache_UpdateAndGet_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.file_path = decoder.decodeArrayPointer(codec.Uint8);
    val.cache_dir_path = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  URLResponseDiskCache_UpdateAndGet_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLResponseDiskCache_UpdateAndGet_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.file_path);
    encoder.encodeArrayPointer(codec.Uint8, val.cache_dir_path);
  };

  function URLResponseDiskCache_UpdateAndGetExtracted_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLResponseDiskCache_UpdateAndGetExtracted_Params.prototype.initDefaults_ = function() {
    this.response = null;
  };
  URLResponseDiskCache_UpdateAndGetExtracted_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLResponseDiskCache_UpdateAndGetExtracted_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLResponseDiskCache_UpdateAndGetExtracted_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponseDiskCache_UpdateAndGetExtracted_Params.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url_response$.URLResponse, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLResponseDiskCache_UpdateAndGetExtracted_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLResponseDiskCache_UpdateAndGetExtracted_Params.decode = function(decoder) {
    var packed;
    var val = new URLResponseDiskCache_UpdateAndGetExtracted_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.response = decoder.decodeStructPointer(url_response$.URLResponse);
    return val;
  };

  URLResponseDiskCache_UpdateAndGetExtracted_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLResponseDiskCache_UpdateAndGetExtracted_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url_response$.URLResponse, val.response);
  };

  function URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams.prototype.initDefaults_ = function() {
    this.extracted_dir_path = null;
    this.cache_dir_path = null;
  };
  URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams.extracted_dir_path
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams.cache_dir_path
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.extracted_dir_path = decoder.decodeArrayPointer(codec.Uint8);
    val.cache_dir_path = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.extracted_dir_path);
    encoder.encodeArrayPointer(codec.Uint8, val.cache_dir_path);
  };

  var kURLResponseDiskCache_Get_Name = 0;
  var kURLResponseDiskCache_Validate_Name = 1;
  var kURLResponseDiskCache_Update_Name = 2;
  var kURLResponseDiskCache_UpdateAndGet_Name = 3;
  var kURLResponseDiskCache_UpdateAndGetExtracted_Name = 4;

  function URLResponseDiskCacheProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  URLResponseDiskCacheProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  URLResponseDiskCacheProxy.prototype.get = function(url) {
    var params = new URLResponseDiskCache_Get_Params();
    params.url = url;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kURLResponseDiskCache_Get_Name,
          codec.align(URLResponseDiskCache_Get_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(URLResponseDiskCache_Get_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(URLResponseDiskCache_Get_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  URLResponseDiskCacheProxy.prototype.validate = function(url) {
    var params = new URLResponseDiskCache_Validate_Params();
    params.url = url;
    var builder = new codec.MessageBuilder(
        kURLResponseDiskCache_Validate_Name,
        codec.align(URLResponseDiskCache_Validate_Params.encodedSize));
    builder.encodeStruct(URLResponseDiskCache_Validate_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLResponseDiskCacheProxy.prototype.update = function(response) {
    var params = new URLResponseDiskCache_Update_Params();
    params.response = response;
    var builder = new codec.MessageBuilder(
        kURLResponseDiskCache_Update_Name,
        codec.align(URLResponseDiskCache_Update_Params.encodedSize));
    builder.encodeStruct(URLResponseDiskCache_Update_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  URLResponseDiskCacheProxy.prototype.updateAndGet = function(response) {
    var params = new URLResponseDiskCache_UpdateAndGet_Params();
    params.response = response;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kURLResponseDiskCache_UpdateAndGet_Name,
          codec.align(URLResponseDiskCache_UpdateAndGet_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(URLResponseDiskCache_UpdateAndGet_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(URLResponseDiskCache_UpdateAndGet_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  URLResponseDiskCacheProxy.prototype.updateAndGetExtracted = function(response) {
    var params = new URLResponseDiskCache_UpdateAndGetExtracted_Params();
    params.response = response;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kURLResponseDiskCache_UpdateAndGetExtracted_Name,
          codec.align(URLResponseDiskCache_UpdateAndGetExtracted_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(URLResponseDiskCache_UpdateAndGetExtracted_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function URLResponseDiskCacheStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  URLResponseDiskCacheStub.prototype = Object.create(bindings.StubBase.prototype);
  URLResponseDiskCacheStub.prototype.get = function(url) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.get && bindings.StubBindings(this).delegate.get(url);
  }
  URLResponseDiskCacheStub.prototype.validate = function(url) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.validate && bindings.StubBindings(this).delegate.validate(url);
  }
  URLResponseDiskCacheStub.prototype.update = function(response) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.update && bindings.StubBindings(this).delegate.update(response);
  }
  URLResponseDiskCacheStub.prototype.updateAndGet = function(response) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.updateAndGet && bindings.StubBindings(this).delegate.updateAndGet(response);
  }
  URLResponseDiskCacheStub.prototype.updateAndGetExtracted = function(response) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.updateAndGetExtracted && bindings.StubBindings(this).delegate.updateAndGetExtracted(response);
  }

  URLResponseDiskCacheStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kURLResponseDiskCache_Validate_Name:
      var params = reader.decodeStruct(URLResponseDiskCache_Validate_Params);
      this.validate(params.url);
      return true;
    case kURLResponseDiskCache_Update_Name:
      var params = reader.decodeStruct(URLResponseDiskCache_Update_Params);
      this.update(params.response);
      return true;
    default:
      return false;
    }
  };

  URLResponseDiskCacheStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kURLResponseDiskCache_Get_Name:
      var params = reader.decodeStruct(URLResponseDiskCache_Get_Params);
      return this.get(params.url).then(function(response) {
        var responseParams =
            new URLResponseDiskCache_Get_ResponseParams();
        responseParams.response = response.response;
        responseParams.file_path = response.file_path;
        responseParams.cache_dir_path = response.cache_dir_path;
        var builder = new codec.MessageWithRequestIDBuilder(
            kURLResponseDiskCache_Get_Name,
            codec.align(URLResponseDiskCache_Get_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(URLResponseDiskCache_Get_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kURLResponseDiskCache_UpdateAndGet_Name:
      var params = reader.decodeStruct(URLResponseDiskCache_UpdateAndGet_Params);
      return this.updateAndGet(params.response).then(function(response) {
        var responseParams =
            new URLResponseDiskCache_UpdateAndGet_ResponseParams();
        responseParams.file_path = response.file_path;
        responseParams.cache_dir_path = response.cache_dir_path;
        var builder = new codec.MessageWithRequestIDBuilder(
            kURLResponseDiskCache_UpdateAndGet_Name,
            codec.align(URLResponseDiskCache_UpdateAndGet_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(URLResponseDiskCache_UpdateAndGet_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kURLResponseDiskCache_UpdateAndGetExtracted_Name:
      var params = reader.decodeStruct(URLResponseDiskCache_UpdateAndGetExtracted_Params);
      return this.updateAndGetExtracted(params.response).then(function(response) {
        var responseParams =
            new URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams();
        responseParams.extracted_dir_path = response.extracted_dir_path;
        responseParams.cache_dir_path = response.cache_dir_path;
        var builder = new codec.MessageWithRequestIDBuilder(
            kURLResponseDiskCache_UpdateAndGetExtracted_Name,
            codec.align(URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateURLResponseDiskCacheRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kURLResponseDiskCache_Get_Name:
        if (message.expectsResponse())
          paramsClass = URLResponseDiskCache_Get_Params;
      break;
      case kURLResponseDiskCache_Validate_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLResponseDiskCache_Validate_Params;
      break;
      case kURLResponseDiskCache_Update_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLResponseDiskCache_Update_Params;
      break;
      case kURLResponseDiskCache_UpdateAndGet_Name:
        if (message.expectsResponse())
          paramsClass = URLResponseDiskCache_UpdateAndGet_Params;
      break;
      case kURLResponseDiskCache_UpdateAndGetExtracted_Name:
        if (message.expectsResponse())
          paramsClass = URLResponseDiskCache_UpdateAndGetExtracted_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateURLResponseDiskCacheResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kURLResponseDiskCache_Get_Name:
        if (message.isResponse())
          paramsClass = URLResponseDiskCache_Get_ResponseParams;
        break;
      case kURLResponseDiskCache_UpdateAndGet_Name:
        if (message.isResponse())
          paramsClass = URLResponseDiskCache_UpdateAndGet_ResponseParams;
        break;
      case kURLResponseDiskCache_UpdateAndGetExtracted_Name:
        if (message.isResponse())
          paramsClass = URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var URLResponseDiskCache = {
    name: 'mojo::URLResponseDiskCache',
    proxyClass: URLResponseDiskCacheProxy,
    stubClass: URLResponseDiskCacheStub,
    validateRequest: validateURLResponseDiskCacheRequest,
    validateResponse: validateURLResponseDiskCacheResponse,
  };
  URLResponseDiskCacheStub.prototype.validator = validateURLResponseDiskCacheRequest;
  URLResponseDiskCacheProxy.prototype.validator = validateURLResponseDiskCacheResponse;


  var exports = {};
  exports.URLResponseDiskCache = URLResponseDiskCache;


  return exports;
});
