// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/native_viewport/interfaces/native_viewport_event_dispatcher.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/input_events/interfaces/input_events.mojom",
], function(bindings, codec, connection, core, validator, input_events$) {

  function NativeViewportEventDispatcher_OnEvent_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeViewportEventDispatcher_OnEvent_Params.prototype.initDefaults_ = function() {
    this.event = null;
  };
  NativeViewportEventDispatcher_OnEvent_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeViewportEventDispatcher_OnEvent_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NativeViewportEventDispatcher_OnEvent_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NativeViewportEventDispatcher_OnEvent_Params.event
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, input_events$.Event, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeViewportEventDispatcher_OnEvent_Params.encodedSize = codec.kStructHeaderSize + 8;

  NativeViewportEventDispatcher_OnEvent_Params.decode = function(decoder) {
    var packed;
    var val = new NativeViewportEventDispatcher_OnEvent_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.event = decoder.decodeStructPointer(input_events$.Event);
    return val;
  };

  NativeViewportEventDispatcher_OnEvent_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeViewportEventDispatcher_OnEvent_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(input_events$.Event, val.event);
  };

  function NativeViewportEventDispatcher_OnEvent_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeViewportEventDispatcher_OnEvent_ResponseParams.prototype.initDefaults_ = function() {
  };
  NativeViewportEventDispatcher_OnEvent_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeViewportEventDispatcher_OnEvent_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NativeViewportEventDispatcher_OnEvent_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeViewportEventDispatcher_OnEvent_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  NativeViewportEventDispatcher_OnEvent_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeViewportEventDispatcher_OnEvent_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NativeViewportEventDispatcher_OnEvent_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeViewportEventDispatcher_OnEvent_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };

  var kNativeViewportEventDispatcher_OnEvent_Name = 0;

  function NativeViewportEventDispatcherProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  NativeViewportEventDispatcherProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  NativeViewportEventDispatcherProxy.prototype.onEvent = function(event) {
    var params = new NativeViewportEventDispatcher_OnEvent_Params();
    params.event = event;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kNativeViewportEventDispatcher_OnEvent_Name,
          codec.align(NativeViewportEventDispatcher_OnEvent_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeViewportEventDispatcher_OnEvent_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeViewportEventDispatcher_OnEvent_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function NativeViewportEventDispatcherStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  NativeViewportEventDispatcherStub.prototype = Object.create(bindings.StubBase.prototype);
  NativeViewportEventDispatcherStub.prototype.onEvent = function(event) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.onEvent && bindings.StubBindings(this).delegate.onEvent(event);
  }

  NativeViewportEventDispatcherStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  NativeViewportEventDispatcherStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNativeViewportEventDispatcher_OnEvent_Name:
      var params = reader.decodeStruct(NativeViewportEventDispatcher_OnEvent_Params);
      return this.onEvent(params.event).then(function(response) {
        var responseParams =
            new NativeViewportEventDispatcher_OnEvent_ResponseParams();
        var builder = new codec.MessageWithRequestIDBuilder(
            kNativeViewportEventDispatcher_OnEvent_Name,
            codec.align(NativeViewportEventDispatcher_OnEvent_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeViewportEventDispatcher_OnEvent_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateNativeViewportEventDispatcherRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNativeViewportEventDispatcher_OnEvent_Name:
        if (message.expectsResponse())
          paramsClass = NativeViewportEventDispatcher_OnEvent_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNativeViewportEventDispatcherResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNativeViewportEventDispatcher_OnEvent_Name:
        if (message.isResponse())
          paramsClass = NativeViewportEventDispatcher_OnEvent_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NativeViewportEventDispatcher = {
    name: null,
    proxyClass: NativeViewportEventDispatcherProxy,
    stubClass: NativeViewportEventDispatcherStub,
    validateRequest: validateNativeViewportEventDispatcherRequest,
    validateResponse: validateNativeViewportEventDispatcherResponse,
  };
  NativeViewportEventDispatcherStub.prototype.validator = validateNativeViewportEventDispatcherRequest;
  NativeViewportEventDispatcherProxy.prototype.validator = validateNativeViewportEventDispatcherResponse;


  var exports = {};
  exports.NativeViewportEventDispatcher = NativeViewportEventDispatcher;


  return exports;
});
