// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/native_viewport/interfaces/native_viewport.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/geometry/interfaces/geometry.mojom",
    "mojo/services/gpu/interfaces/context_provider.mojom",
    "mojo/services/native_viewport/interfaces/native_viewport_event_dispatcher.mojom",
], function(bindings, codec, connection, core, validator, geometry$, context_provider$, native_viewport_event_dispatcher$) {

  function ViewportMetrics(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ViewportMetrics.prototype.initDefaults_ = function() {
    this.size = null;
    this.device_pixel_ratio = 1.0;
  };
  ViewportMetrics.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ViewportMetrics.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ViewportMetrics.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ViewportMetrics.size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ViewportMetrics.encodedSize = codec.kStructHeaderSize + 16;

  ViewportMetrics.decode = function(decoder) {
    var packed;
    var val = new ViewportMetrics();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.size = decoder.decodeStructPointer(geometry$.Size);
    val.device_pixel_ratio = decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ViewportMetrics.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ViewportMetrics.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Size, val.size);
    encoder.encodeStruct(codec.Float, val.device_pixel_ratio);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function SurfaceConfiguration(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SurfaceConfiguration.prototype.initDefaults_ = function() {
    this.red_bits = 8;
    this.green_bits = 8;
    this.blue_bits = 8;
    this.alpha_bits = 8;
    this.depth_bits = 0;
    this.stencil_bits = 0;
  };
  SurfaceConfiguration.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SurfaceConfiguration.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SurfaceConfiguration.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;







    return validator.validationError.NONE;
  };

  SurfaceConfiguration.encodedSize = codec.kStructHeaderSize + 8;

  SurfaceConfiguration.decode = function(decoder) {
    var packed;
    var val = new SurfaceConfiguration();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.red_bits = decoder.decodeStruct(codec.Uint8);
    val.green_bits = decoder.decodeStruct(codec.Uint8);
    val.blue_bits = decoder.decodeStruct(codec.Uint8);
    val.alpha_bits = decoder.decodeStruct(codec.Uint8);
    val.depth_bits = decoder.decodeStruct(codec.Uint8);
    val.stencil_bits = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SurfaceConfiguration.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SurfaceConfiguration.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.red_bits);
    encoder.encodeStruct(codec.Uint8, val.green_bits);
    encoder.encodeStruct(codec.Uint8, val.blue_bits);
    encoder.encodeStruct(codec.Uint8, val.alpha_bits);
    encoder.encodeStruct(codec.Uint8, val.depth_bits);
    encoder.encodeStruct(codec.Uint8, val.stencil_bits);
    encoder.skip(1);
    encoder.skip(1);
  };

  function NativeViewport_Create_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeViewport_Create_Params.prototype.initDefaults_ = function() {
    this.size = null;
    this.requested_configuration = null;
  };
  NativeViewport_Create_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeViewport_Create_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NativeViewport_Create_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NativeViewport_Create_Params.size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NativeViewport_Create_Params.requested_configuration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, SurfaceConfiguration, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeViewport_Create_Params.encodedSize = codec.kStructHeaderSize + 16;

  NativeViewport_Create_Params.decode = function(decoder) {
    var packed;
    var val = new NativeViewport_Create_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.size = decoder.decodeStructPointer(geometry$.Size);
    val.requested_configuration = decoder.decodeStructPointer(SurfaceConfiguration);
    return val;
  };

  NativeViewport_Create_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeViewport_Create_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Size, val.size);
    encoder.encodeStructPointer(SurfaceConfiguration, val.requested_configuration);
  };

  function NativeViewport_Create_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeViewport_Create_ResponseParams.prototype.initDefaults_ = function() {
    this.metrics = null;
  };
  NativeViewport_Create_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeViewport_Create_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NativeViewport_Create_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NativeViewport_Create_ResponseParams.metrics
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ViewportMetrics, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeViewport_Create_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NativeViewport_Create_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeViewport_Create_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.metrics = decoder.decodeStructPointer(ViewportMetrics);
    return val;
  };

  NativeViewport_Create_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeViewport_Create_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ViewportMetrics, val.metrics);
  };

  function NativeViewport_Show_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeViewport_Show_Params.prototype.initDefaults_ = function() {
  };
  NativeViewport_Show_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeViewport_Show_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NativeViewport_Show_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeViewport_Show_Params.encodedSize = codec.kStructHeaderSize + 0;

  NativeViewport_Show_Params.decode = function(decoder) {
    var packed;
    var val = new NativeViewport_Show_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NativeViewport_Show_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeViewport_Show_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function NativeViewport_Hide_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeViewport_Hide_Params.prototype.initDefaults_ = function() {
  };
  NativeViewport_Hide_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeViewport_Hide_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NativeViewport_Hide_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeViewport_Hide_Params.encodedSize = codec.kStructHeaderSize + 0;

  NativeViewport_Hide_Params.decode = function(decoder) {
    var packed;
    var val = new NativeViewport_Hide_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NativeViewport_Hide_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeViewport_Hide_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function NativeViewport_Close_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeViewport_Close_Params.prototype.initDefaults_ = function() {
  };
  NativeViewport_Close_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeViewport_Close_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NativeViewport_Close_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeViewport_Close_Params.encodedSize = codec.kStructHeaderSize + 0;

  NativeViewport_Close_Params.decode = function(decoder) {
    var packed;
    var val = new NativeViewport_Close_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NativeViewport_Close_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeViewport_Close_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function NativeViewport_SetSize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeViewport_SetSize_Params.prototype.initDefaults_ = function() {
    this.size = null;
  };
  NativeViewport_SetSize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeViewport_SetSize_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NativeViewport_SetSize_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NativeViewport_SetSize_Params.size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeViewport_SetSize_Params.encodedSize = codec.kStructHeaderSize + 8;

  NativeViewport_SetSize_Params.decode = function(decoder) {
    var packed;
    var val = new NativeViewport_SetSize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.size = decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  NativeViewport_SetSize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeViewport_SetSize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Size, val.size);
  };

  function NativeViewport_SetEventDispatcher_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeViewport_SetEventDispatcher_Params.prototype.initDefaults_ = function() {
    this.dispatcher = null;
  };
  NativeViewport_SetEventDispatcher_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeViewport_SetEventDispatcher_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NativeViewport_SetEventDispatcher_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NativeViewport_SetEventDispatcher_Params.dispatcher
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeViewport_SetEventDispatcher_Params.encodedSize = codec.kStructHeaderSize + 8;

  NativeViewport_SetEventDispatcher_Params.decode = function(decoder) {
    var packed;
    var val = new NativeViewport_SetEventDispatcher_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.dispatcher = decoder.decodeStruct(codec.Interface);
    return val;
  };

  NativeViewport_SetEventDispatcher_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeViewport_SetEventDispatcher_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Interface, val.dispatcher);
  };

  function NativeViewport_GetContextProvider_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeViewport_GetContextProvider_Params.prototype.initDefaults_ = function() {
    this.provider = null;
  };
  NativeViewport_GetContextProvider_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeViewport_GetContextProvider_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NativeViewport_GetContextProvider_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NativeViewport_GetContextProvider_Params.provider
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeViewport_GetContextProvider_Params.encodedSize = codec.kStructHeaderSize + 8;

  NativeViewport_GetContextProvider_Params.decode = function(decoder) {
    var packed;
    var val = new NativeViewport_GetContextProvider_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.provider = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NativeViewport_GetContextProvider_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeViewport_GetContextProvider_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.provider);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function NativeViewport_RequestMetrics_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeViewport_RequestMetrics_Params.prototype.initDefaults_ = function() {
  };
  NativeViewport_RequestMetrics_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeViewport_RequestMetrics_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NativeViewport_RequestMetrics_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeViewport_RequestMetrics_Params.encodedSize = codec.kStructHeaderSize + 0;

  NativeViewport_RequestMetrics_Params.decode = function(decoder) {
    var packed;
    var val = new NativeViewport_RequestMetrics_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NativeViewport_RequestMetrics_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeViewport_RequestMetrics_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function NativeViewport_RequestMetrics_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeViewport_RequestMetrics_ResponseParams.prototype.initDefaults_ = function() {
    this.metrics = null;
  };
  NativeViewport_RequestMetrics_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeViewport_RequestMetrics_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NativeViewport_RequestMetrics_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NativeViewport_RequestMetrics_ResponseParams.metrics
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ViewportMetrics, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeViewport_RequestMetrics_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NativeViewport_RequestMetrics_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeViewport_RequestMetrics_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.metrics = decoder.decodeStructPointer(ViewportMetrics);
    return val;
  };

  NativeViewport_RequestMetrics_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeViewport_RequestMetrics_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ViewportMetrics, val.metrics);
  };

  var kNativeViewport_Create_Name = 0;
  var kNativeViewport_Show_Name = 1;
  var kNativeViewport_Hide_Name = 2;
  var kNativeViewport_Close_Name = 3;
  var kNativeViewport_SetSize_Name = 4;
  var kNativeViewport_SetEventDispatcher_Name = 5;
  var kNativeViewport_GetContextProvider_Name = 6;
  var kNativeViewport_RequestMetrics_Name = 7;

  function NativeViewportProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  NativeViewportProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  NativeViewportProxy.prototype.create = function(size, requested_configuration) {
    var params = new NativeViewport_Create_Params();
    params.size = size;
    params.requested_configuration = requested_configuration;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kNativeViewport_Create_Name,
          codec.align(NativeViewport_Create_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeViewport_Create_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeViewport_Create_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NativeViewportProxy.prototype.show = function() {
    var params = new NativeViewport_Show_Params();
    var builder = new codec.MessageBuilder(
        kNativeViewport_Show_Name,
        codec.align(NativeViewport_Show_Params.encodedSize));
    builder.encodeStruct(NativeViewport_Show_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NativeViewportProxy.prototype.hide = function() {
    var params = new NativeViewport_Hide_Params();
    var builder = new codec.MessageBuilder(
        kNativeViewport_Hide_Name,
        codec.align(NativeViewport_Hide_Params.encodedSize));
    builder.encodeStruct(NativeViewport_Hide_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NativeViewportProxy.prototype.close = function() {
    var params = new NativeViewport_Close_Params();
    var builder = new codec.MessageBuilder(
        kNativeViewport_Close_Name,
        codec.align(NativeViewport_Close_Params.encodedSize));
    builder.encodeStruct(NativeViewport_Close_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NativeViewportProxy.prototype.setSize = function(size) {
    var params = new NativeViewport_SetSize_Params();
    params.size = size;
    var builder = new codec.MessageBuilder(
        kNativeViewport_SetSize_Name,
        codec.align(NativeViewport_SetSize_Params.encodedSize));
    builder.encodeStruct(NativeViewport_SetSize_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NativeViewportProxy.prototype.setEventDispatcher = function(dispatcher) {
    var params = new NativeViewport_SetEventDispatcher_Params();
    params.dispatcher = core.isHandle(dispatcher) ? dispatcher : connection.bindImpl(dispatcher, native_viewport_event_dispatcher$.NativeViewportEventDispatcher);
    var builder = new codec.MessageBuilder(
        kNativeViewport_SetEventDispatcher_Name,
        codec.align(NativeViewport_SetEventDispatcher_Params.encodedSize));
    builder.encodeStruct(NativeViewport_SetEventDispatcher_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NativeViewportProxy.prototype.getContextProvider = function(provider) {
    var params = new NativeViewport_GetContextProvider_Params();
    params.provider = core.isHandle(provider) ? provider : connection.bindProxy(provider, context_provider$.ContextProvider);
    var builder = new codec.MessageBuilder(
        kNativeViewport_GetContextProvider_Name,
        codec.align(NativeViewport_GetContextProvider_Params.encodedSize));
    builder.encodeStruct(NativeViewport_GetContextProvider_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NativeViewportProxy.prototype.requestMetrics = function() {
    var params = new NativeViewport_RequestMetrics_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kNativeViewport_RequestMetrics_Name,
          codec.align(NativeViewport_RequestMetrics_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeViewport_RequestMetrics_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeViewport_RequestMetrics_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function NativeViewportStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  NativeViewportStub.prototype = Object.create(bindings.StubBase.prototype);
  NativeViewportStub.prototype.create = function(size, requested_configuration) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.create && bindings.StubBindings(this).delegate.create(size, requested_configuration);
  }
  NativeViewportStub.prototype.show = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.show && bindings.StubBindings(this).delegate.show();
  }
  NativeViewportStub.prototype.hide = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.hide && bindings.StubBindings(this).delegate.hide();
  }
  NativeViewportStub.prototype.close = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.close && bindings.StubBindings(this).delegate.close();
  }
  NativeViewportStub.prototype.setSize = function(size) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.setSize && bindings.StubBindings(this).delegate.setSize(size);
  }
  NativeViewportStub.prototype.setEventDispatcher = function(dispatcher) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.setEventDispatcher && bindings.StubBindings(this).delegate.setEventDispatcher(connection.bindHandleToProxy(dispatcher, native_viewport_event_dispatcher$.NativeViewportEventDispatcher));
  }
  NativeViewportStub.prototype.getContextProvider = function(provider) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getContextProvider && bindings.StubBindings(this).delegate.getContextProvider(connection.bindHandleToStub(provider, context_provider$.ContextProvider));
  }
  NativeViewportStub.prototype.requestMetrics = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.requestMetrics && bindings.StubBindings(this).delegate.requestMetrics();
  }

  NativeViewportStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNativeViewport_Show_Name:
      var params = reader.decodeStruct(NativeViewport_Show_Params);
      this.show();
      return true;
    case kNativeViewport_Hide_Name:
      var params = reader.decodeStruct(NativeViewport_Hide_Params);
      this.hide();
      return true;
    case kNativeViewport_Close_Name:
      var params = reader.decodeStruct(NativeViewport_Close_Params);
      this.close();
      return true;
    case kNativeViewport_SetSize_Name:
      var params = reader.decodeStruct(NativeViewport_SetSize_Params);
      this.setSize(params.size);
      return true;
    case kNativeViewport_SetEventDispatcher_Name:
      var params = reader.decodeStruct(NativeViewport_SetEventDispatcher_Params);
      this.setEventDispatcher(params.dispatcher);
      return true;
    case kNativeViewport_GetContextProvider_Name:
      var params = reader.decodeStruct(NativeViewport_GetContextProvider_Params);
      this.getContextProvider(params.provider);
      return true;
    default:
      return false;
    }
  };

  NativeViewportStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNativeViewport_Create_Name:
      var params = reader.decodeStruct(NativeViewport_Create_Params);
      return this.create(params.size, params.requested_configuration).then(function(response) {
        var responseParams =
            new NativeViewport_Create_ResponseParams();
        responseParams.metrics = response.metrics;
        var builder = new codec.MessageWithRequestIDBuilder(
            kNativeViewport_Create_Name,
            codec.align(NativeViewport_Create_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeViewport_Create_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kNativeViewport_RequestMetrics_Name:
      var params = reader.decodeStruct(NativeViewport_RequestMetrics_Params);
      return this.requestMetrics().then(function(response) {
        var responseParams =
            new NativeViewport_RequestMetrics_ResponseParams();
        responseParams.metrics = response.metrics;
        var builder = new codec.MessageWithRequestIDBuilder(
            kNativeViewport_RequestMetrics_Name,
            codec.align(NativeViewport_RequestMetrics_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeViewport_RequestMetrics_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateNativeViewportRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNativeViewport_Create_Name:
        if (message.expectsResponse())
          paramsClass = NativeViewport_Create_Params;
      break;
      case kNativeViewport_Show_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NativeViewport_Show_Params;
      break;
      case kNativeViewport_Hide_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NativeViewport_Hide_Params;
      break;
      case kNativeViewport_Close_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NativeViewport_Close_Params;
      break;
      case kNativeViewport_SetSize_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NativeViewport_SetSize_Params;
      break;
      case kNativeViewport_SetEventDispatcher_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NativeViewport_SetEventDispatcher_Params;
      break;
      case kNativeViewport_GetContextProvider_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NativeViewport_GetContextProvider_Params;
      break;
      case kNativeViewport_RequestMetrics_Name:
        if (message.expectsResponse())
          paramsClass = NativeViewport_RequestMetrics_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNativeViewportResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNativeViewport_Create_Name:
        if (message.isResponse())
          paramsClass = NativeViewport_Create_ResponseParams;
        break;
      case kNativeViewport_RequestMetrics_Name:
        if (message.isResponse())
          paramsClass = NativeViewport_RequestMetrics_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NativeViewport = {
    name: 'mojo::NativeViewport',
    proxyClass: NativeViewportProxy,
    stubClass: NativeViewportStub,
    validateRequest: validateNativeViewportRequest,
    validateResponse: validateNativeViewportResponse,
  };
  NativeViewportStub.prototype.validator = validateNativeViewportRequest;
  NativeViewportProxy.prototype.validator = validateNativeViewportResponse;


  var exports = {};
  exports.ViewportMetrics = ViewportMetrics;
  exports.SurfaceConfiguration = SurfaceConfiguration;
  exports.NativeViewport = NativeViewport;


  return exports;
});
