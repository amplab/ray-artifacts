// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/tracing/interfaces/tracing.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function TraceProvider_StartTracing_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TraceProvider_StartTracing_Params.prototype.initDefaults_ = function() {
    this.categories = null;
    this.recorder = null;
  };
  TraceProvider_StartTracing_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TraceProvider_StartTracing_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TraceProvider_StartTracing_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TraceProvider_StartTracing_Params.categories
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TraceProvider_StartTracing_Params.recorder
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TraceProvider_StartTracing_Params.encodedSize = codec.kStructHeaderSize + 16;

  TraceProvider_StartTracing_Params.decode = function(decoder) {
    var packed;
    var val = new TraceProvider_StartTracing_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.categories = decoder.decodeStruct(codec.String);
    val.recorder = decoder.decodeStruct(codec.Interface);
    return val;
  };

  TraceProvider_StartTracing_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TraceProvider_StartTracing_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.categories);
    encoder.encodeStruct(codec.Interface, val.recorder);
  };

  function TraceProvider_StopTracing_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TraceProvider_StopTracing_Params.prototype.initDefaults_ = function() {
  };
  TraceProvider_StopTracing_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TraceProvider_StopTracing_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TraceProvider_StopTracing_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TraceProvider_StopTracing_Params.encodedSize = codec.kStructHeaderSize + 0;

  TraceProvider_StopTracing_Params.decode = function(decoder) {
    var packed;
    var val = new TraceProvider_StopTracing_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TraceProvider_StopTracing_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TraceProvider_StopTracing_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function TraceRecorder_Record_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TraceRecorder_Record_Params.prototype.initDefaults_ = function() {
    this.json = null;
  };
  TraceRecorder_Record_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TraceRecorder_Record_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TraceRecorder_Record_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TraceRecorder_Record_Params.json
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TraceRecorder_Record_Params.encodedSize = codec.kStructHeaderSize + 8;

  TraceRecorder_Record_Params.decode = function(decoder) {
    var packed;
    var val = new TraceRecorder_Record_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.json = decoder.decodeStruct(codec.String);
    return val;
  };

  TraceRecorder_Record_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TraceRecorder_Record_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.json);
  };

  function TraceCollector_Start_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TraceCollector_Start_Params.prototype.initDefaults_ = function() {
    this.stream = null;
    this.categories = null;
  };
  TraceCollector_Start_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TraceCollector_Start_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TraceCollector_Start_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TraceCollector_Start_Params.stream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TraceCollector_Start_Params.categories
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TraceCollector_Start_Params.encodedSize = codec.kStructHeaderSize + 16;

  TraceCollector_Start_Params.decode = function(decoder) {
    var packed;
    var val = new TraceCollector_Start_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.stream = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.categories = decoder.decodeStruct(codec.String);
    return val;
  };

  TraceCollector_Start_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TraceCollector_Start_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.stream);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.categories);
  };

  function TraceCollector_StopAndFlush_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TraceCollector_StopAndFlush_Params.prototype.initDefaults_ = function() {
  };
  TraceCollector_StopAndFlush_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TraceCollector_StopAndFlush_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TraceCollector_StopAndFlush_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TraceCollector_StopAndFlush_Params.encodedSize = codec.kStructHeaderSize + 0;

  TraceCollector_StopAndFlush_Params.decode = function(decoder) {
    var packed;
    var val = new TraceCollector_StopAndFlush_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TraceCollector_StopAndFlush_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TraceCollector_StopAndFlush_Params.encodedSize);
    encoder.writeUint32(0);
  };

  var kTraceProvider_StartTracing_Name = 0;
  var kTraceProvider_StopTracing_Name = 1;

  function TraceProviderProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  TraceProviderProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  TraceProviderProxy.prototype.startTracing = function(categories, recorder) {
    var params = new TraceProvider_StartTracing_Params();
    params.categories = categories;
    params.recorder = core.isHandle(recorder) ? recorder : connection.bindImpl(recorder, TraceRecorder);
    var builder = new codec.MessageBuilder(
        kTraceProvider_StartTracing_Name,
        codec.align(TraceProvider_StartTracing_Params.encodedSize));
    builder.encodeStruct(TraceProvider_StartTracing_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  TraceProviderProxy.prototype.stopTracing = function() {
    var params = new TraceProvider_StopTracing_Params();
    var builder = new codec.MessageBuilder(
        kTraceProvider_StopTracing_Name,
        codec.align(TraceProvider_StopTracing_Params.encodedSize));
    builder.encodeStruct(TraceProvider_StopTracing_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function TraceProviderStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  TraceProviderStub.prototype = Object.create(bindings.StubBase.prototype);
  TraceProviderStub.prototype.startTracing = function(categories, recorder) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.startTracing && bindings.StubBindings(this).delegate.startTracing(categories, connection.bindHandleToProxy(recorder, TraceRecorder));
  }
  TraceProviderStub.prototype.stopTracing = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.stopTracing && bindings.StubBindings(this).delegate.stopTracing();
  }

  TraceProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTraceProvider_StartTracing_Name:
      var params = reader.decodeStruct(TraceProvider_StartTracing_Params);
      this.startTracing(params.categories, params.recorder);
      return true;
    case kTraceProvider_StopTracing_Name:
      var params = reader.decodeStruct(TraceProvider_StopTracing_Params);
      this.stopTracing();
      return true;
    default:
      return false;
    }
  };

  TraceProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateTraceProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTraceProvider_StartTracing_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = TraceProvider_StartTracing_Params;
      break;
      case kTraceProvider_StopTracing_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = TraceProvider_StopTracing_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTraceProviderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var TraceProvider = {
    name: 'tracing::TraceProvider',
    proxyClass: TraceProviderProxy,
    stubClass: TraceProviderStub,
    validateRequest: validateTraceProviderRequest,
    validateResponse: null,
  };
  TraceProviderStub.prototype.validator = validateTraceProviderRequest;
  TraceProviderProxy.prototype.validator = null;

  var kTraceRecorder_Record_Name = 0;

  function TraceRecorderProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  TraceRecorderProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  TraceRecorderProxy.prototype.record = function(json) {
    var params = new TraceRecorder_Record_Params();
    params.json = json;
    var builder = new codec.MessageBuilder(
        kTraceRecorder_Record_Name,
        codec.align(TraceRecorder_Record_Params.encodedSize));
    builder.encodeStruct(TraceRecorder_Record_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function TraceRecorderStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  TraceRecorderStub.prototype = Object.create(bindings.StubBase.prototype);
  TraceRecorderStub.prototype.record = function(json) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.record && bindings.StubBindings(this).delegate.record(json);
  }

  TraceRecorderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTraceRecorder_Record_Name:
      var params = reader.decodeStruct(TraceRecorder_Record_Params);
      this.record(params.json);
      return true;
    default:
      return false;
    }
  };

  TraceRecorderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateTraceRecorderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTraceRecorder_Record_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = TraceRecorder_Record_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTraceRecorderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var TraceRecorder = {
    name: null,
    proxyClass: TraceRecorderProxy,
    stubClass: TraceRecorderStub,
    validateRequest: validateTraceRecorderRequest,
    validateResponse: null,
  };
  TraceRecorderStub.prototype.validator = validateTraceRecorderRequest;
  TraceRecorderProxy.prototype.validator = null;

  var kTraceCollector_Start_Name = 0;
  var kTraceCollector_StopAndFlush_Name = 1;

  function TraceCollectorProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  TraceCollectorProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  TraceCollectorProxy.prototype.start = function(stream, categories) {
    var params = new TraceCollector_Start_Params();
    params.stream = stream;
    params.categories = categories;
    var builder = new codec.MessageBuilder(
        kTraceCollector_Start_Name,
        codec.align(TraceCollector_Start_Params.encodedSize));
    builder.encodeStruct(TraceCollector_Start_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  TraceCollectorProxy.prototype.stopAndFlush = function() {
    var params = new TraceCollector_StopAndFlush_Params();
    var builder = new codec.MessageBuilder(
        kTraceCollector_StopAndFlush_Name,
        codec.align(TraceCollector_StopAndFlush_Params.encodedSize));
    builder.encodeStruct(TraceCollector_StopAndFlush_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function TraceCollectorStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  TraceCollectorStub.prototype = Object.create(bindings.StubBase.prototype);
  TraceCollectorStub.prototype.start = function(stream, categories) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.start && bindings.StubBindings(this).delegate.start(stream, categories);
  }
  TraceCollectorStub.prototype.stopAndFlush = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.stopAndFlush && bindings.StubBindings(this).delegate.stopAndFlush();
  }

  TraceCollectorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTraceCollector_Start_Name:
      var params = reader.decodeStruct(TraceCollector_Start_Params);
      this.start(params.stream, params.categories);
      return true;
    case kTraceCollector_StopAndFlush_Name:
      var params = reader.decodeStruct(TraceCollector_StopAndFlush_Params);
      this.stopAndFlush();
      return true;
    default:
      return false;
    }
  };

  TraceCollectorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateTraceCollectorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTraceCollector_Start_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = TraceCollector_Start_Params;
      break;
      case kTraceCollector_StopAndFlush_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = TraceCollector_StopAndFlush_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTraceCollectorResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var TraceCollector = {
    name: 'tracing::TraceCollector',
    proxyClass: TraceCollectorProxy,
    stubClass: TraceCollectorStub,
    validateRequest: validateTraceCollectorRequest,
    validateResponse: null,
  };
  TraceCollectorStub.prototype.validator = validateTraceCollectorRequest;
  TraceCollectorProxy.prototype.validator = null;


  var exports = {};
  exports.TraceProvider = TraceProvider;
  exports.TraceRecorder = TraceRecorder;
  exports.TraceCollector = TraceCollector;


  return exports;
});
