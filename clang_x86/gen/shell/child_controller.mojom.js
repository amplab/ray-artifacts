// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("shell/child_controller.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/application/application.mojom",
], function(bindings, codec, connection, core, validator, application$) {

  function ChildController_StartApp_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ChildController_StartApp_Params.prototype.initDefaults_ = function() {
    this.app_path = null;
    this.application_request = null;
  };
  ChildController_StartApp_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ChildController_StartApp_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ChildController_StartApp_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ChildController_StartApp_Params.app_path
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ChildController_StartApp_Params.application_request
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ChildController_StartApp_Params.encodedSize = codec.kStructHeaderSize + 16;

  ChildController_StartApp_Params.decode = function(decoder) {
    var packed;
    var val = new ChildController_StartApp_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.app_path = decoder.decodeStruct(codec.String);
    val.application_request = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ChildController_StartApp_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ChildController_StartApp_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.app_path);
    encoder.encodeStruct(codec.Handle, val.application_request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ChildController_StartApp_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ChildController_StartApp_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  ChildController_StartApp_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ChildController_StartApp_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ChildController_StartApp_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ChildController_StartApp_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ChildController_StartApp_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ChildController_StartApp_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ChildController_StartApp_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ChildController_StartApp_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ChildController_ExitNow_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ChildController_ExitNow_Params.prototype.initDefaults_ = function() {
    this.exit_code = 0;
  };
  ChildController_ExitNow_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ChildController_ExitNow_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ChildController_ExitNow_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ChildController_ExitNow_Params.encodedSize = codec.kStructHeaderSize + 8;

  ChildController_ExitNow_Params.decode = function(decoder) {
    var packed;
    var val = new ChildController_ExitNow_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.exit_code = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ChildController_ExitNow_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ChildController_ExitNow_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.exit_code);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kChildController_StartApp_Name = 0;
  var kChildController_ExitNow_Name = 1;

  function ChildControllerProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ChildControllerProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ChildControllerProxy.prototype.startApp = function(app_path, application_request) {
    var params = new ChildController_StartApp_Params();
    params.app_path = app_path;
    params.application_request = core.isHandle(application_request) ? application_request : connection.bindProxy(application_request, application$.Application);
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kChildController_StartApp_Name,
          codec.align(ChildController_StartApp_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ChildController_StartApp_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ChildController_StartApp_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ChildControllerProxy.prototype.exitNow = function(exit_code) {
    var params = new ChildController_ExitNow_Params();
    params.exit_code = exit_code;
    var builder = new codec.MessageBuilder(
        kChildController_ExitNow_Name,
        codec.align(ChildController_ExitNow_Params.encodedSize));
    builder.encodeStruct(ChildController_ExitNow_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ChildControllerStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ChildControllerStub.prototype = Object.create(bindings.StubBase.prototype);
  ChildControllerStub.prototype.startApp = function(app_path, application_request) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.startApp && bindings.StubBindings(this).delegate.startApp(app_path, connection.bindHandleToStub(application_request, application$.Application));
  }
  ChildControllerStub.prototype.exitNow = function(exit_code) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.exitNow && bindings.StubBindings(this).delegate.exitNow(exit_code);
  }

  ChildControllerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kChildController_ExitNow_Name:
      var params = reader.decodeStruct(ChildController_ExitNow_Params);
      this.exitNow(params.exit_code);
      return true;
    default:
      return false;
    }
  };

  ChildControllerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kChildController_StartApp_Name:
      var params = reader.decodeStruct(ChildController_StartApp_Params);
      return this.startApp(params.app_path, params.application_request).then(function(response) {
        var responseParams =
            new ChildController_StartApp_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageWithRequestIDBuilder(
            kChildController_StartApp_Name,
            codec.align(ChildController_StartApp_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ChildController_StartApp_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateChildControllerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kChildController_StartApp_Name:
        if (message.expectsResponse())
          paramsClass = ChildController_StartApp_Params;
      break;
      case kChildController_ExitNow_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ChildController_ExitNow_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateChildControllerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kChildController_StartApp_Name:
        if (message.isResponse())
          paramsClass = ChildController_StartApp_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ChildController = {
    name: null,
    proxyClass: ChildControllerProxy,
    stubClass: ChildControllerStub,
    validateRequest: validateChildControllerRequest,
    validateResponse: validateChildControllerResponse,
  };
  ChildControllerStub.prototype.validator = validateChildControllerRequest;
  ChildControllerProxy.prototype.validator = validateChildControllerResponse;


  var exports = {};
  exports.ChildController = ChildController;


  return exports;
});
