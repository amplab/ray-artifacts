// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/device_info/interfaces/device_info.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function DeviceInfo_GetDeviceType_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DeviceInfo_GetDeviceType_Params.prototype.initDefaults_ = function() {
  };
  DeviceInfo_GetDeviceType_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DeviceInfo_GetDeviceType_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, DeviceInfo_GetDeviceType_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DeviceInfo_GetDeviceType_Params.encodedSize = codec.kStructHeaderSize + 0;

  DeviceInfo_GetDeviceType_Params.decode = function(decoder) {
    var packed;
    var val = new DeviceInfo_GetDeviceType_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  DeviceInfo_GetDeviceType_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DeviceInfo_GetDeviceType_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function DeviceInfo_GetDeviceType_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DeviceInfo_GetDeviceType_ResponseParams.prototype.initDefaults_ = function() {
    this.device_type = 0;
  };
  DeviceInfo_GetDeviceType_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DeviceInfo_GetDeviceType_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, DeviceInfo_GetDeviceType_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  DeviceInfo_GetDeviceType_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  DeviceInfo_GetDeviceType_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new DeviceInfo_GetDeviceType_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.device_type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DeviceInfo_GetDeviceType_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DeviceInfo_GetDeviceType_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.device_type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kDeviceInfo_GetDeviceType_Name = 0;

  function DeviceInfoProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  DeviceInfoProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  DeviceInfoProxy.prototype.getDeviceType = function() {
    var params = new DeviceInfo_GetDeviceType_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kDeviceInfo_GetDeviceType_Name,
          codec.align(DeviceInfo_GetDeviceType_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(DeviceInfo_GetDeviceType_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(DeviceInfo_GetDeviceType_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function DeviceInfoStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  DeviceInfoStub.prototype = Object.create(bindings.StubBase.prototype);
  DeviceInfoStub.prototype.getDeviceType = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getDeviceType && bindings.StubBindings(this).delegate.getDeviceType();
  }

  DeviceInfoStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  DeviceInfoStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDeviceInfo_GetDeviceType_Name:
      var params = reader.decodeStruct(DeviceInfo_GetDeviceType_Params);
      return this.getDeviceType().then(function(response) {
        var responseParams =
            new DeviceInfo_GetDeviceType_ResponseParams();
        responseParams.device_type = response.device_type;
        var builder = new codec.MessageWithRequestIDBuilder(
            kDeviceInfo_GetDeviceType_Name,
            codec.align(DeviceInfo_GetDeviceType_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(DeviceInfo_GetDeviceType_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateDeviceInfoRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDeviceInfo_GetDeviceType_Name:
        if (message.expectsResponse())
          paramsClass = DeviceInfo_GetDeviceType_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDeviceInfoResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kDeviceInfo_GetDeviceType_Name:
        if (message.isResponse())
          paramsClass = DeviceInfo_GetDeviceType_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var DeviceInfo = {
    name: 'mojo::DeviceInfo',
    proxyClass: DeviceInfoProxy,
    stubClass: DeviceInfoStub,
    validateRequest: validateDeviceInfoRequest,
    validateResponse: validateDeviceInfoResponse,
  };
  DeviceInfo.DeviceType = {};
  DeviceInfo.DeviceType.UNKNOWN = 0;
  DeviceInfo.DeviceType.HEADLESS = DeviceInfo.DeviceType.UNKNOWN + 1;
  DeviceInfo.DeviceType.WATCH = DeviceInfo.DeviceType.HEADLESS + 1;
  DeviceInfo.DeviceType.PHONE = DeviceInfo.DeviceType.WATCH + 1;
  DeviceInfo.DeviceType.TABLET = DeviceInfo.DeviceType.PHONE + 1;
  DeviceInfo.DeviceType.DESKTOP = DeviceInfo.DeviceType.TABLET + 1;
  DeviceInfo.DeviceType.TV = DeviceInfo.DeviceType.DESKTOP + 1;
  DeviceInfoStub.prototype.validator = validateDeviceInfoRequest;
  DeviceInfoProxy.prototype.validator = validateDeviceInfoResponse;


  var exports = {};
  exports.DeviceInfo = DeviceInfo;


  return exports;
});
