// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/camera/interfaces/camera.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function Photo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Photo.prototype.initDefaults_ = function() {
    this.unique_id = null;
    this.content = null;
  };
  Photo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Photo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Photo.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Photo.unique_id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Photo.content
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Photo.encodedSize = codec.kStructHeaderSize + 16;

  Photo.decode = function(decoder) {
    var packed;
    var val = new Photo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.unique_id = decoder.decodeStruct(codec.String);
    val.content = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Photo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Photo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.unique_id);
    encoder.encodeStruct(codec.Handle, val.content);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CameraRollService_Update_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CameraRollService_Update_Params.prototype.initDefaults_ = function() {
  };
  CameraRollService_Update_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CameraRollService_Update_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CameraRollService_Update_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CameraRollService_Update_Params.encodedSize = codec.kStructHeaderSize + 0;

  CameraRollService_Update_Params.decode = function(decoder) {
    var packed;
    var val = new CameraRollService_Update_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CameraRollService_Update_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CameraRollService_Update_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function CameraRollService_GetCount_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CameraRollService_GetCount_Params.prototype.initDefaults_ = function() {
  };
  CameraRollService_GetCount_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CameraRollService_GetCount_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CameraRollService_GetCount_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CameraRollService_GetCount_Params.encodedSize = codec.kStructHeaderSize + 0;

  CameraRollService_GetCount_Params.decode = function(decoder) {
    var packed;
    var val = new CameraRollService_GetCount_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CameraRollService_GetCount_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CameraRollService_GetCount_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function CameraRollService_GetCount_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CameraRollService_GetCount_ResponseParams.prototype.initDefaults_ = function() {
    this.num_photos = 0;
  };
  CameraRollService_GetCount_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CameraRollService_GetCount_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CameraRollService_GetCount_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CameraRollService_GetCount_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CameraRollService_GetCount_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CameraRollService_GetCount_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.num_photos = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CameraRollService_GetCount_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CameraRollService_GetCount_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.num_photos);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CameraRollService_GetPhoto_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CameraRollService_GetPhoto_Params.prototype.initDefaults_ = function() {
    this.index = 0;
  };
  CameraRollService_GetPhoto_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CameraRollService_GetPhoto_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CameraRollService_GetPhoto_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CameraRollService_GetPhoto_Params.encodedSize = codec.kStructHeaderSize + 8;

  CameraRollService_GetPhoto_Params.decode = function(decoder) {
    var packed;
    var val = new CameraRollService_GetPhoto_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.index = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CameraRollService_GetPhoto_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CameraRollService_GetPhoto_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.index);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CameraRollService_GetPhoto_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CameraRollService_GetPhoto_ResponseParams.prototype.initDefaults_ = function() {
    this.photo = null;
  };
  CameraRollService_GetPhoto_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CameraRollService_GetPhoto_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CameraRollService_GetPhoto_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate CameraRollService_GetPhoto_ResponseParams.photo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, Photo, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CameraRollService_GetPhoto_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CameraRollService_GetPhoto_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CameraRollService_GetPhoto_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.photo = decoder.decodeStructPointer(Photo);
    return val;
  };

  CameraRollService_GetPhoto_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CameraRollService_GetPhoto_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(Photo, val.photo);
  };

  function CameraService_GetLatestFrame_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CameraService_GetLatestFrame_Params.prototype.initDefaults_ = function() {
  };
  CameraService_GetLatestFrame_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CameraService_GetLatestFrame_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CameraService_GetLatestFrame_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CameraService_GetLatestFrame_Params.encodedSize = codec.kStructHeaderSize + 0;

  CameraService_GetLatestFrame_Params.decode = function(decoder) {
    var packed;
    var val = new CameraService_GetLatestFrame_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CameraService_GetLatestFrame_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CameraService_GetLatestFrame_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function CameraService_GetLatestFrame_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CameraService_GetLatestFrame_ResponseParams.prototype.initDefaults_ = function() {
    this.content = null;
  };
  CameraService_GetLatestFrame_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CameraService_GetLatestFrame_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CameraService_GetLatestFrame_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate CameraService_GetLatestFrame_ResponseParams.content
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CameraService_GetLatestFrame_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CameraService_GetLatestFrame_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CameraService_GetLatestFrame_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.content = decoder.decodeStruct(codec.NullableHandle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CameraService_GetLatestFrame_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CameraService_GetLatestFrame_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableHandle, val.content);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kCameraRollService_Update_Name = 0;
  var kCameraRollService_GetCount_Name = 1;
  var kCameraRollService_GetPhoto_Name = 2;

  function CameraRollServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  CameraRollServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  CameraRollServiceProxy.prototype.update = function() {
    var params = new CameraRollService_Update_Params();
    var builder = new codec.MessageBuilder(
        kCameraRollService_Update_Name,
        codec.align(CameraRollService_Update_Params.encodedSize));
    builder.encodeStruct(CameraRollService_Update_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CameraRollServiceProxy.prototype.getCount = function() {
    var params = new CameraRollService_GetCount_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kCameraRollService_GetCount_Name,
          codec.align(CameraRollService_GetCount_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CameraRollService_GetCount_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CameraRollService_GetCount_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CameraRollServiceProxy.prototype.getPhoto = function(index) {
    var params = new CameraRollService_GetPhoto_Params();
    params.index = index;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kCameraRollService_GetPhoto_Name,
          codec.align(CameraRollService_GetPhoto_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CameraRollService_GetPhoto_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CameraRollService_GetPhoto_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function CameraRollServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  CameraRollServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  CameraRollServiceStub.prototype.update = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.update && bindings.StubBindings(this).delegate.update();
  }
  CameraRollServiceStub.prototype.getCount = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getCount && bindings.StubBindings(this).delegate.getCount();
  }
  CameraRollServiceStub.prototype.getPhoto = function(index) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getPhoto && bindings.StubBindings(this).delegate.getPhoto(index);
  }

  CameraRollServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCameraRollService_Update_Name:
      var params = reader.decodeStruct(CameraRollService_Update_Params);
      this.update();
      return true;
    default:
      return false;
    }
  };

  CameraRollServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCameraRollService_GetCount_Name:
      var params = reader.decodeStruct(CameraRollService_GetCount_Params);
      return this.getCount().then(function(response) {
        var responseParams =
            new CameraRollService_GetCount_ResponseParams();
        responseParams.num_photos = response.num_photos;
        var builder = new codec.MessageWithRequestIDBuilder(
            kCameraRollService_GetCount_Name,
            codec.align(CameraRollService_GetCount_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CameraRollService_GetCount_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kCameraRollService_GetPhoto_Name:
      var params = reader.decodeStruct(CameraRollService_GetPhoto_Params);
      return this.getPhoto(params.index).then(function(response) {
        var responseParams =
            new CameraRollService_GetPhoto_ResponseParams();
        responseParams.photo = response.photo;
        var builder = new codec.MessageWithRequestIDBuilder(
            kCameraRollService_GetPhoto_Name,
            codec.align(CameraRollService_GetPhoto_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CameraRollService_GetPhoto_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateCameraRollServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCameraRollService_Update_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CameraRollService_Update_Params;
      break;
      case kCameraRollService_GetCount_Name:
        if (message.expectsResponse())
          paramsClass = CameraRollService_GetCount_Params;
      break;
      case kCameraRollService_GetPhoto_Name:
        if (message.expectsResponse())
          paramsClass = CameraRollService_GetPhoto_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCameraRollServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCameraRollService_GetCount_Name:
        if (message.isResponse())
          paramsClass = CameraRollService_GetCount_ResponseParams;
        break;
      case kCameraRollService_GetPhoto_Name:
        if (message.isResponse())
          paramsClass = CameraRollService_GetPhoto_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CameraRollService = {
    name: 'mojo::CameraRollService',
    proxyClass: CameraRollServiceProxy,
    stubClass: CameraRollServiceStub,
    validateRequest: validateCameraRollServiceRequest,
    validateResponse: validateCameraRollServiceResponse,
  };
  CameraRollServiceStub.prototype.validator = validateCameraRollServiceRequest;
  CameraRollServiceProxy.prototype.validator = validateCameraRollServiceResponse;

  var kCameraService_GetLatestFrame_Name = 0;

  function CameraServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  CameraServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  CameraServiceProxy.prototype.getLatestFrame = function() {
    var params = new CameraService_GetLatestFrame_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kCameraService_GetLatestFrame_Name,
          codec.align(CameraService_GetLatestFrame_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CameraService_GetLatestFrame_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CameraService_GetLatestFrame_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function CameraServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  CameraServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  CameraServiceStub.prototype.getLatestFrame = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getLatestFrame && bindings.StubBindings(this).delegate.getLatestFrame();
  }

  CameraServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  CameraServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCameraService_GetLatestFrame_Name:
      var params = reader.decodeStruct(CameraService_GetLatestFrame_Params);
      return this.getLatestFrame().then(function(response) {
        var responseParams =
            new CameraService_GetLatestFrame_ResponseParams();
        responseParams.content = response.content;
        var builder = new codec.MessageWithRequestIDBuilder(
            kCameraService_GetLatestFrame_Name,
            codec.align(CameraService_GetLatestFrame_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CameraService_GetLatestFrame_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateCameraServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCameraService_GetLatestFrame_Name:
        if (message.expectsResponse())
          paramsClass = CameraService_GetLatestFrame_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCameraServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCameraService_GetLatestFrame_Name:
        if (message.isResponse())
          paramsClass = CameraService_GetLatestFrame_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CameraService = {
    name: 'mojo::CameraService',
    proxyClass: CameraServiceProxy,
    stubClass: CameraServiceStub,
    validateRequest: validateCameraServiceRequest,
    validateResponse: validateCameraServiceResponse,
  };
  CameraServiceStub.prototype.validator = validateCameraServiceRequest;
  CameraServiceProxy.prototype.validator = validateCameraServiceResponse;


  var exports = {};
  exports.Photo = Photo;
  exports.CameraRollService = CameraRollService;
  exports.CameraService = CameraService;


  return exports;
});
