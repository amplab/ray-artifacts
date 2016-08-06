// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/tracing/interfaces/trace_provider_registry.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/tracing/interfaces/tracing.mojom",
], function(bindings, codec, connection, core, validator, tracing$) {

  function TraceProviderRegistry_RegisterTraceProvider_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TraceProviderRegistry_RegisterTraceProvider_Params.prototype.initDefaults_ = function() {
    this.trace_provider = null;
  };
  TraceProviderRegistry_RegisterTraceProvider_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TraceProviderRegistry_RegisterTraceProvider_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TraceProviderRegistry_RegisterTraceProvider_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TraceProviderRegistry_RegisterTraceProvider_Params.trace_provider
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TraceProviderRegistry_RegisterTraceProvider_Params.encodedSize = codec.kStructHeaderSize + 8;

  TraceProviderRegistry_RegisterTraceProvider_Params.decode = function(decoder) {
    var packed;
    var val = new TraceProviderRegistry_RegisterTraceProvider_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.trace_provider = decoder.decodeStruct(codec.Interface);
    return val;
  };

  TraceProviderRegistry_RegisterTraceProvider_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TraceProviderRegistry_RegisterTraceProvider_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Interface, val.trace_provider);
  };

  var kTraceProviderRegistry_RegisterTraceProvider_Name = 0;

  function TraceProviderRegistryProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  TraceProviderRegistryProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  TraceProviderRegistryProxy.prototype.registerTraceProvider = function(trace_provider) {
    var params = new TraceProviderRegistry_RegisterTraceProvider_Params();
    params.trace_provider = core.isHandle(trace_provider) ? trace_provider : connection.bindImpl(trace_provider, tracing$.TraceProvider);
    var builder = new codec.MessageBuilder(
        kTraceProviderRegistry_RegisterTraceProvider_Name,
        codec.align(TraceProviderRegistry_RegisterTraceProvider_Params.encodedSize));
    builder.encodeStruct(TraceProviderRegistry_RegisterTraceProvider_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function TraceProviderRegistryStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  TraceProviderRegistryStub.prototype = Object.create(bindings.StubBase.prototype);
  TraceProviderRegistryStub.prototype.registerTraceProvider = function(trace_provider) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.registerTraceProvider && bindings.StubBindings(this).delegate.registerTraceProvider(connection.bindHandleToProxy(trace_provider, tracing$.TraceProvider));
  }

  TraceProviderRegistryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTraceProviderRegistry_RegisterTraceProvider_Name:
      var params = reader.decodeStruct(TraceProviderRegistry_RegisterTraceProvider_Params);
      this.registerTraceProvider(params.trace_provider);
      return true;
    default:
      return false;
    }
  };

  TraceProviderRegistryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateTraceProviderRegistryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTraceProviderRegistry_RegisterTraceProvider_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = TraceProviderRegistry_RegisterTraceProvider_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTraceProviderRegistryResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var TraceProviderRegistry = {
    name: 'tracing.TraceProviderRegistry',
    proxyClass: TraceProviderRegistryProxy,
    stubClass: TraceProviderRegistryStub,
    validateRequest: validateTraceProviderRegistryRequest,
    validateResponse: null,
  };
  TraceProviderRegistryStub.prototype.validator = validateTraceProviderRegistryRequest;
  TraceProviderRegistryProxy.prototype.validator = null;


  var exports = {};
  exports.TraceProviderRegistry = TraceProviderRegistry;


  return exports;
});
