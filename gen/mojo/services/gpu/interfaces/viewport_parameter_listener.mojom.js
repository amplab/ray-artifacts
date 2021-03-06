// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/gpu/interfaces/viewport_parameter_listener.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function ViewportParameterListener_OnVSyncParametersUpdated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ViewportParameterListener_OnVSyncParametersUpdated_Params.prototype.initDefaults_ = function() {
    this.timebase = 0;
    this.interval = 0;
  };
  ViewportParameterListener_OnVSyncParametersUpdated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ViewportParameterListener_OnVSyncParametersUpdated_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ViewportParameterListener_OnVSyncParametersUpdated_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  ViewportParameterListener_OnVSyncParametersUpdated_Params.encodedSize = codec.kStructHeaderSize + 16;

  ViewportParameterListener_OnVSyncParametersUpdated_Params.decode = function(decoder) {
    var packed;
    var val = new ViewportParameterListener_OnVSyncParametersUpdated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.timebase = decoder.decodeStruct(codec.Int64);
    val.interval = decoder.decodeStruct(codec.Int64);
    return val;
  };

  ViewportParameterListener_OnVSyncParametersUpdated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ViewportParameterListener_OnVSyncParametersUpdated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.timebase);
    encoder.encodeStruct(codec.Int64, val.interval);
  };

  var kViewportParameterListener_OnVSyncParametersUpdated_Name = 0;

  function ViewportParameterListenerProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ViewportParameterListenerProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ViewportParameterListenerProxy.prototype.onVSyncParametersUpdated = function(timebase, interval) {
    var params = new ViewportParameterListener_OnVSyncParametersUpdated_Params();
    params.timebase = timebase;
    params.interval = interval;
    var builder = new codec.MessageBuilder(
        kViewportParameterListener_OnVSyncParametersUpdated_Name,
        codec.align(ViewportParameterListener_OnVSyncParametersUpdated_Params.encodedSize));
    builder.encodeStruct(ViewportParameterListener_OnVSyncParametersUpdated_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ViewportParameterListenerStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ViewportParameterListenerStub.prototype = Object.create(bindings.StubBase.prototype);
  ViewportParameterListenerStub.prototype.onVSyncParametersUpdated = function(timebase, interval) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.onVSyncParametersUpdated && bindings.StubBindings(this).delegate.onVSyncParametersUpdated(timebase, interval);
  }

  ViewportParameterListenerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kViewportParameterListener_OnVSyncParametersUpdated_Name:
      var params = reader.decodeStruct(ViewportParameterListener_OnVSyncParametersUpdated_Params);
      this.onVSyncParametersUpdated(params.timebase, params.interval);
      return true;
    default:
      return false;
    }
  };

  ViewportParameterListenerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateViewportParameterListenerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kViewportParameterListener_OnVSyncParametersUpdated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ViewportParameterListener_OnVSyncParametersUpdated_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateViewportParameterListenerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ViewportParameterListener = {
    name: null,
    proxyClass: ViewportParameterListenerProxy,
    stubClass: ViewportParameterListenerStub,
    validateRequest: validateViewportParameterListenerRequest,
    validateResponse: null,
  };
  ViewportParameterListenerStub.prototype.validator = validateViewportParameterListenerRequest;
  ViewportParameterListenerProxy.prototype.validator = null;


  var exports = {};
  exports.ViewportParameterListener = ViewportParameterListener;


  return exports;
});
