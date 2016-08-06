// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/test_arrays.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function StructWithInterface(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructWithInterface.prototype.initDefaults_ = function() {
    this.iptr = null;
  };
  StructWithInterface.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructWithInterface.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructWithInterface.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithInterface.iptr
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructWithInterface.encodedSize = codec.kStructHeaderSize + 8;

  StructWithInterface.decode = function(decoder) {
    var packed;
    var val = new StructWithInterface();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.iptr = decoder.decodeStruct(codec.Interface);
    return val;
  };

  StructWithInterface.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructWithInterface.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Interface, val.iptr);
  };

  function StructWithInterfaceArray(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructWithInterfaceArray.prototype.initDefaults_ = function() {
    this.structs_array = null;
    this.structs_nullable_array = null;
    this.nullable_structs_array = null;
    this.nullable_structs_nullable_array = null;
  };
  StructWithInterfaceArray.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructWithInterfaceArray.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructWithInterfaceArray.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithInterfaceArray.structs_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(StructWithInterface), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithInterfaceArray.structs_nullable_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(StructWithInterface), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithInterfaceArray.nullable_structs_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.NullablePointerTo(StructWithInterface), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithInterfaceArray.nullable_structs_nullable_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.NullablePointerTo(StructWithInterface), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructWithInterfaceArray.encodedSize = codec.kStructHeaderSize + 32;

  StructWithInterfaceArray.decode = function(decoder) {
    var packed;
    var val = new StructWithInterfaceArray();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.structs_array = decoder.decodeArrayPointer(new codec.PointerTo(StructWithInterface));
    val.structs_nullable_array = decoder.decodeArrayPointer(new codec.PointerTo(StructWithInterface));
    val.nullable_structs_array = decoder.decodeArrayPointer(new codec.NullablePointerTo(StructWithInterface));
    val.nullable_structs_nullable_array = decoder.decodeArrayPointer(new codec.NullablePointerTo(StructWithInterface));
    return val;
  };

  StructWithInterfaceArray.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructWithInterfaceArray.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(StructWithInterface), val.structs_array);
    encoder.encodeArrayPointer(new codec.PointerTo(StructWithInterface), val.structs_nullable_array);
    encoder.encodeArrayPointer(new codec.NullablePointerTo(StructWithInterface), val.nullable_structs_array);
    encoder.encodeArrayPointer(new codec.NullablePointerTo(StructWithInterface), val.nullable_structs_nullable_array);
  };

  function StructWithDataPipeConsumers(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructWithDataPipeConsumers.prototype.initDefaults_ = function() {
    this.handles_array = null;
    this.handles_nullable_array = null;
    this.nullable_handles_array = null;
    this.nullable_handles_nullable_array = null;
  };
  StructWithDataPipeConsumers.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructWithDataPipeConsumers.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructWithDataPipeConsumers.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithDataPipeConsumers.handles_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Handle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithDataPipeConsumers.handles_nullable_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, codec.Handle, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithDataPipeConsumers.nullable_handles_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, codec.NullableHandle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithDataPipeConsumers.nullable_handles_nullable_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 4, codec.NullableHandle, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructWithDataPipeConsumers.encodedSize = codec.kStructHeaderSize + 32;

  StructWithDataPipeConsumers.decode = function(decoder) {
    var packed;
    var val = new StructWithDataPipeConsumers();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.handles_array = decoder.decodeArrayPointer(codec.Handle);
    val.handles_nullable_array = decoder.decodeArrayPointer(codec.Handle);
    val.nullable_handles_array = decoder.decodeArrayPointer(codec.NullableHandle);
    val.nullable_handles_nullable_array = decoder.decodeArrayPointer(codec.NullableHandle);
    return val;
  };

  StructWithDataPipeConsumers.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructWithDataPipeConsumers.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Handle, val.handles_array);
    encoder.encodeArrayPointer(codec.Handle, val.handles_nullable_array);
    encoder.encodeArrayPointer(codec.NullableHandle, val.nullable_handles_array);
    encoder.encodeArrayPointer(codec.NullableHandle, val.nullable_handles_nullable_array);
  };

  function StructWithDataPipeProducers(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructWithDataPipeProducers.prototype.initDefaults_ = function() {
    this.handles_array = null;
    this.handles_nullable_array = null;
    this.nullable_handles_array = null;
    this.nullable_handles_nullable_array = null;
  };
  StructWithDataPipeProducers.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructWithDataPipeProducers.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructWithDataPipeProducers.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithDataPipeProducers.handles_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Handle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithDataPipeProducers.handles_nullable_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, codec.Handle, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithDataPipeProducers.nullable_handles_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, codec.NullableHandle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithDataPipeProducers.nullable_handles_nullable_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 4, codec.NullableHandle, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructWithDataPipeProducers.encodedSize = codec.kStructHeaderSize + 32;

  StructWithDataPipeProducers.decode = function(decoder) {
    var packed;
    var val = new StructWithDataPipeProducers();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.handles_array = decoder.decodeArrayPointer(codec.Handle);
    val.handles_nullable_array = decoder.decodeArrayPointer(codec.Handle);
    val.nullable_handles_array = decoder.decodeArrayPointer(codec.NullableHandle);
    val.nullable_handles_nullable_array = decoder.decodeArrayPointer(codec.NullableHandle);
    return val;
  };

  StructWithDataPipeProducers.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructWithDataPipeProducers.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Handle, val.handles_array);
    encoder.encodeArrayPointer(codec.Handle, val.handles_nullable_array);
    encoder.encodeArrayPointer(codec.NullableHandle, val.nullable_handles_array);
    encoder.encodeArrayPointer(codec.NullableHandle, val.nullable_handles_nullable_array);
  };

  function StructWithSharedBuffers(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructWithSharedBuffers.prototype.initDefaults_ = function() {
    this.handles_array = null;
    this.handles_nullable_array = null;
    this.nullable_handles_array = null;
    this.nullable_handles_nullable_array = null;
  };
  StructWithSharedBuffers.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructWithSharedBuffers.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructWithSharedBuffers.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithSharedBuffers.handles_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Handle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithSharedBuffers.handles_nullable_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, codec.Handle, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithSharedBuffers.nullable_handles_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, codec.NullableHandle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithSharedBuffers.nullable_handles_nullable_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 4, codec.NullableHandle, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructWithSharedBuffers.encodedSize = codec.kStructHeaderSize + 32;

  StructWithSharedBuffers.decode = function(decoder) {
    var packed;
    var val = new StructWithSharedBuffers();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.handles_array = decoder.decodeArrayPointer(codec.Handle);
    val.handles_nullable_array = decoder.decodeArrayPointer(codec.Handle);
    val.nullable_handles_array = decoder.decodeArrayPointer(codec.NullableHandle);
    val.nullable_handles_nullable_array = decoder.decodeArrayPointer(codec.NullableHandle);
    return val;
  };

  StructWithSharedBuffers.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructWithSharedBuffers.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Handle, val.handles_array);
    encoder.encodeArrayPointer(codec.Handle, val.handles_nullable_array);
    encoder.encodeArrayPointer(codec.NullableHandle, val.nullable_handles_array);
    encoder.encodeArrayPointer(codec.NullableHandle, val.nullable_handles_nullable_array);
  };

  function StructWithMessagePipes(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructWithMessagePipes.prototype.initDefaults_ = function() {
    this.handles_array = null;
    this.handles_nullable_array = null;
    this.nullable_handles_array = null;
    this.nullable_handles_nullable_array = null;
  };
  StructWithMessagePipes.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructWithMessagePipes.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructWithMessagePipes.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithMessagePipes.handles_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Handle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithMessagePipes.handles_nullable_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, codec.Handle, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithMessagePipes.nullable_handles_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, codec.NullableHandle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithMessagePipes.nullable_handles_nullable_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 4, codec.NullableHandle, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructWithMessagePipes.encodedSize = codec.kStructHeaderSize + 32;

  StructWithMessagePipes.decode = function(decoder) {
    var packed;
    var val = new StructWithMessagePipes();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.handles_array = decoder.decodeArrayPointer(codec.Handle);
    val.handles_nullable_array = decoder.decodeArrayPointer(codec.Handle);
    val.nullable_handles_array = decoder.decodeArrayPointer(codec.NullableHandle);
    val.nullable_handles_nullable_array = decoder.decodeArrayPointer(codec.NullableHandle);
    return val;
  };

  StructWithMessagePipes.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructWithMessagePipes.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Handle, val.handles_array);
    encoder.encodeArrayPointer(codec.Handle, val.handles_nullable_array);
    encoder.encodeArrayPointer(codec.NullableHandle, val.nullable_handles_array);
    encoder.encodeArrayPointer(codec.NullableHandle, val.nullable_handles_nullable_array);
  };

  function StructWithHandles(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructWithHandles.prototype.initDefaults_ = function() {
    this.handles_array = null;
    this.handles_nullable_array = null;
    this.nullable_handles_array = null;
    this.nullable_handles_nullable_array = null;
  };
  StructWithHandles.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructWithHandles.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructWithHandles.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithHandles.handles_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Handle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithHandles.handles_nullable_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, codec.Handle, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithHandles.nullable_handles_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, codec.NullableHandle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithHandles.nullable_handles_nullable_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 4, codec.NullableHandle, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructWithHandles.encodedSize = codec.kStructHeaderSize + 32;

  StructWithHandles.decode = function(decoder) {
    var packed;
    var val = new StructWithHandles();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.handles_array = decoder.decodeArrayPointer(codec.Handle);
    val.handles_nullable_array = decoder.decodeArrayPointer(codec.Handle);
    val.nullable_handles_array = decoder.decodeArrayPointer(codec.NullableHandle);
    val.nullable_handles_nullable_array = decoder.decodeArrayPointer(codec.NullableHandle);
    return val;
  };

  StructWithHandles.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructWithHandles.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Handle, val.handles_array);
    encoder.encodeArrayPointer(codec.Handle, val.handles_nullable_array);
    encoder.encodeArrayPointer(codec.NullableHandle, val.nullable_handles_array);
    encoder.encodeArrayPointer(codec.NullableHandle, val.nullable_handles_nullable_array);
  };

  function StructWithInterfaceRequests(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructWithInterfaceRequests.prototype.initDefaults_ = function() {
    this.req_array = null;
    this.req_nullable_array = null;
    this.nullable_req_array = null;
    this.nullable_req_nullable_array = null;
  };
  StructWithInterfaceRequests.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructWithInterfaceRequests.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructWithInterfaceRequests.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithInterfaceRequests.req_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Handle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithInterfaceRequests.req_nullable_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, codec.Handle, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithInterfaceRequests.nullable_req_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, codec.Handle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithInterfaceRequests.nullable_req_nullable_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 4, codec.Handle, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructWithInterfaceRequests.encodedSize = codec.kStructHeaderSize + 32;

  StructWithInterfaceRequests.decode = function(decoder) {
    var packed;
    var val = new StructWithInterfaceRequests();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.req_array = decoder.decodeArrayPointer(codec.Handle);
    val.req_nullable_array = decoder.decodeArrayPointer(codec.Handle);
    val.nullable_req_array = decoder.decodeArrayPointer(codec.Handle);
    val.nullable_req_nullable_array = decoder.decodeArrayPointer(codec.Handle);
    return val;
  };

  StructWithInterfaceRequests.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructWithInterfaceRequests.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Handle, val.req_array);
    encoder.encodeArrayPointer(codec.Handle, val.req_nullable_array);
    encoder.encodeArrayPointer(codec.Handle, val.nullable_req_array);
    encoder.encodeArrayPointer(codec.Handle, val.nullable_req_nullable_array);
  };

  function TestInterface_Foo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestInterface_Foo_Params.prototype.initDefaults_ = function() {
  };
  TestInterface_Foo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestInterface_Foo_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TestInterface_Foo_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TestInterface_Foo_Params.encodedSize = codec.kStructHeaderSize + 0;

  TestInterface_Foo_Params.decode = function(decoder) {
    var packed;
    var val = new TestInterface_Foo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TestInterface_Foo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestInterface_Foo_Params.encodedSize);
    encoder.writeUint32(0);
  };

  var kTestInterface_Foo_Name = 0;

  function TestInterfaceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  TestInterfaceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  TestInterfaceProxy.prototype.foo = function() {
    var params = new TestInterface_Foo_Params();
    var builder = new codec.MessageBuilder(
        kTestInterface_Foo_Name,
        codec.align(TestInterface_Foo_Params.encodedSize));
    builder.encodeStruct(TestInterface_Foo_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function TestInterfaceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  TestInterfaceStub.prototype = Object.create(bindings.StubBase.prototype);
  TestInterfaceStub.prototype.foo = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.foo && bindings.StubBindings(this).delegate.foo();
  }

  TestInterfaceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTestInterface_Foo_Name:
      var params = reader.decodeStruct(TestInterface_Foo_Params);
      this.foo();
      return true;
    default:
      return false;
    }
  };

  TestInterfaceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateTestInterfaceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTestInterface_Foo_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = TestInterface_Foo_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTestInterfaceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var TestInterface = {
    name: null,
    proxyClass: TestInterfaceProxy,
    stubClass: TestInterfaceStub,
    validateRequest: validateTestInterfaceRequest,
    validateResponse: null,
  };
  TestInterfaceStub.prototype.validator = validateTestInterfaceRequest;
  TestInterfaceProxy.prototype.validator = null;


  var exports = {};
  exports.StructWithInterface = StructWithInterface;
  exports.StructWithInterfaceArray = StructWithInterfaceArray;
  exports.StructWithDataPipeConsumers = StructWithDataPipeConsumers;
  exports.StructWithDataPipeProducers = StructWithDataPipeProducers;
  exports.StructWithSharedBuffers = StructWithSharedBuffers;
  exports.StructWithMessagePipes = StructWithMessagePipes;
  exports.StructWithHandles = StructWithHandles;
  exports.StructWithInterfaceRequests = StructWithInterfaceRequests;
  exports.TestInterface = TestInterface;


  return exports;
});
