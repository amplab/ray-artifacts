// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/native_support/interfaces/process.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/files/interfaces/file.mojom",
    "mojo/services/files/interfaces/types.mojom",
], function(bindings, codec, connection, core, validator, file$, types$) {

  function Process_Spawn_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Process_Spawn_Params.prototype.initDefaults_ = function() {
    this.path = null;
    this.argv = null;
    this.envp = null;
    this.stdin_file = null;
    this.stdout_file = null;
    this.stderr_file = null;
    this.process_controller = null;
  };
  Process_Spawn_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Process_Spawn_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Process_Spawn_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Process_Spawn_Params.path
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Process_Spawn_Params.argv
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.ArrayOf(codec.Uint8), true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Process_Spawn_Params.envp
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.ArrayOf(codec.Uint8), true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Process_Spawn_Params.stdin_file
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 24, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Process_Spawn_Params.stdout_file
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 32, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Process_Spawn_Params.stderr_file
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 40, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Process_Spawn_Params.process_controller
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Process_Spawn_Params.encodedSize = codec.kStructHeaderSize + 56;

  Process_Spawn_Params.decode = function(decoder) {
    var packed;
    var val = new Process_Spawn_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.path = decoder.decodeArrayPointer(codec.Uint8);
    val.argv = decoder.decodeArrayPointer(new codec.ArrayOf(codec.Uint8));
    val.envp = decoder.decodeArrayPointer(new codec.ArrayOf(codec.Uint8));
    val.stdin_file = decoder.decodeStruct(codec.NullableInterface);
    val.stdout_file = decoder.decodeStruct(codec.NullableInterface);
    val.stderr_file = decoder.decodeStruct(codec.NullableInterface);
    val.process_controller = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Process_Spawn_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Process_Spawn_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.path);
    encoder.encodeArrayPointer(new codec.ArrayOf(codec.Uint8), val.argv);
    encoder.encodeArrayPointer(new codec.ArrayOf(codec.Uint8), val.envp);
    encoder.encodeStruct(codec.NullableInterface, val.stdin_file);
    encoder.encodeStruct(codec.NullableInterface, val.stdout_file);
    encoder.encodeStruct(codec.NullableInterface, val.stderr_file);
    encoder.encodeStruct(codec.Handle, val.process_controller);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Process_Spawn_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Process_Spawn_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
  };
  Process_Spawn_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Process_Spawn_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Process_Spawn_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Process_Spawn_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Process_Spawn_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Process_Spawn_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Process_Spawn_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Process_Spawn_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Process_SpawnWithTerminal_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Process_SpawnWithTerminal_Params.prototype.initDefaults_ = function() {
    this.path = null;
    this.argv = null;
    this.envp = null;
    this.terminal_file = null;
    this.process_controller = null;
  };
  Process_SpawnWithTerminal_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Process_SpawnWithTerminal_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Process_SpawnWithTerminal_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Process_SpawnWithTerminal_Params.path
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Process_SpawnWithTerminal_Params.argv
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.ArrayOf(codec.Uint8), true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Process_SpawnWithTerminal_Params.envp
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.ArrayOf(codec.Uint8), true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Process_SpawnWithTerminal_Params.terminal_file
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 24, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Process_SpawnWithTerminal_Params.process_controller
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Process_SpawnWithTerminal_Params.encodedSize = codec.kStructHeaderSize + 40;

  Process_SpawnWithTerminal_Params.decode = function(decoder) {
    var packed;
    var val = new Process_SpawnWithTerminal_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.path = decoder.decodeArrayPointer(codec.Uint8);
    val.argv = decoder.decodeArrayPointer(new codec.ArrayOf(codec.Uint8));
    val.envp = decoder.decodeArrayPointer(new codec.ArrayOf(codec.Uint8));
    val.terminal_file = decoder.decodeStruct(codec.Interface);
    val.process_controller = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Process_SpawnWithTerminal_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Process_SpawnWithTerminal_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.path);
    encoder.encodeArrayPointer(new codec.ArrayOf(codec.Uint8), val.argv);
    encoder.encodeArrayPointer(new codec.ArrayOf(codec.Uint8), val.envp);
    encoder.encodeStruct(codec.Interface, val.terminal_file);
    encoder.encodeStruct(codec.Handle, val.process_controller);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Process_SpawnWithTerminal_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Process_SpawnWithTerminal_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
  };
  Process_SpawnWithTerminal_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Process_SpawnWithTerminal_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Process_SpawnWithTerminal_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Process_SpawnWithTerminal_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Process_SpawnWithTerminal_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Process_SpawnWithTerminal_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Process_SpawnWithTerminal_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Process_SpawnWithTerminal_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ProcessController_Wait_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProcessController_Wait_Params.prototype.initDefaults_ = function() {
  };
  ProcessController_Wait_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProcessController_Wait_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ProcessController_Wait_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProcessController_Wait_Params.encodedSize = codec.kStructHeaderSize + 0;

  ProcessController_Wait_Params.decode = function(decoder) {
    var packed;
    var val = new ProcessController_Wait_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ProcessController_Wait_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProcessController_Wait_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function ProcessController_Wait_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProcessController_Wait_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
    this.exit_status = 0;
  };
  ProcessController_Wait_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProcessController_Wait_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ProcessController_Wait_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  ProcessController_Wait_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ProcessController_Wait_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ProcessController_Wait_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    val.exit_status = decoder.decodeStruct(codec.Int32);
    return val;
  };

  ProcessController_Wait_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProcessController_Wait_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.encodeStruct(codec.Int32, val.exit_status);
  };

  function ProcessController_Kill_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProcessController_Kill_Params.prototype.initDefaults_ = function() {
    this.signal = 0;
  };
  ProcessController_Kill_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProcessController_Kill_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ProcessController_Kill_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ProcessController_Kill_Params.encodedSize = codec.kStructHeaderSize + 8;

  ProcessController_Kill_Params.decode = function(decoder) {
    var packed;
    var val = new ProcessController_Kill_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.signal = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ProcessController_Kill_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProcessController_Kill_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.signal);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ProcessController_Kill_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProcessController_Kill_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
  };
  ProcessController_Kill_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProcessController_Kill_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ProcessController_Kill_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ProcessController_Kill_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ProcessController_Kill_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ProcessController_Kill_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ProcessController_Kill_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProcessController_Kill_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kProcess_Spawn_Name = 0;
  var kProcess_SpawnWithTerminal_Name = 1;

  function ProcessProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ProcessProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ProcessProxy.prototype.spawn = function(path, argv, envp, stdin_file, stdout_file, stderr_file, process_controller) {
    var params = new Process_Spawn_Params();
    params.path = path;
    params.argv = argv;
    params.envp = envp;
    params.stdin_file = core.isHandle(stdin_file) ? stdin_file : connection.bindImpl(stdin_file, file$.File);
    params.stdout_file = core.isHandle(stdout_file) ? stdout_file : connection.bindImpl(stdout_file, file$.File);
    params.stderr_file = core.isHandle(stderr_file) ? stderr_file : connection.bindImpl(stderr_file, file$.File);
    params.process_controller = core.isHandle(process_controller) ? process_controller : connection.bindProxy(process_controller, ProcessController);
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kProcess_Spawn_Name,
          codec.align(Process_Spawn_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Process_Spawn_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Process_Spawn_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ProcessProxy.prototype.spawnWithTerminal = function(path, argv, envp, terminal_file, process_controller) {
    var params = new Process_SpawnWithTerminal_Params();
    params.path = path;
    params.argv = argv;
    params.envp = envp;
    params.terminal_file = core.isHandle(terminal_file) ? terminal_file : connection.bindImpl(terminal_file, file$.File);
    params.process_controller = core.isHandle(process_controller) ? process_controller : connection.bindProxy(process_controller, ProcessController);
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kProcess_SpawnWithTerminal_Name,
          codec.align(Process_SpawnWithTerminal_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Process_SpawnWithTerminal_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Process_SpawnWithTerminal_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ProcessStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ProcessStub.prototype = Object.create(bindings.StubBase.prototype);
  ProcessStub.prototype.spawn = function(path, argv, envp, stdin_file, stdout_file, stderr_file, process_controller) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.spawn && bindings.StubBindings(this).delegate.spawn(path, argv, envp, connection.bindHandleToProxy(stdin_file, file$.File), connection.bindHandleToProxy(stdout_file, file$.File), connection.bindHandleToProxy(stderr_file, file$.File), connection.bindHandleToStub(process_controller, ProcessController));
  }
  ProcessStub.prototype.spawnWithTerminal = function(path, argv, envp, terminal_file, process_controller) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.spawnWithTerminal && bindings.StubBindings(this).delegate.spawnWithTerminal(path, argv, envp, connection.bindHandleToProxy(terminal_file, file$.File), connection.bindHandleToStub(process_controller, ProcessController));
  }

  ProcessStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ProcessStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kProcess_Spawn_Name:
      var params = reader.decodeStruct(Process_Spawn_Params);
      return this.spawn(params.path, params.argv, params.envp, params.stdin_file, params.stdout_file, params.stderr_file, params.process_controller).then(function(response) {
        var responseParams =
            new Process_Spawn_ResponseParams();
        responseParams.error = response.error;
        var builder = new codec.MessageWithRequestIDBuilder(
            kProcess_Spawn_Name,
            codec.align(Process_Spawn_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Process_Spawn_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kProcess_SpawnWithTerminal_Name:
      var params = reader.decodeStruct(Process_SpawnWithTerminal_Params);
      return this.spawnWithTerminal(params.path, params.argv, params.envp, params.terminal_file, params.process_controller).then(function(response) {
        var responseParams =
            new Process_SpawnWithTerminal_ResponseParams();
        responseParams.error = response.error;
        var builder = new codec.MessageWithRequestIDBuilder(
            kProcess_SpawnWithTerminal_Name,
            codec.align(Process_SpawnWithTerminal_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Process_SpawnWithTerminal_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateProcessRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kProcess_Spawn_Name:
        if (message.expectsResponse())
          paramsClass = Process_Spawn_Params;
      break;
      case kProcess_SpawnWithTerminal_Name:
        if (message.expectsResponse())
          paramsClass = Process_SpawnWithTerminal_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateProcessResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kProcess_Spawn_Name:
        if (message.isResponse())
          paramsClass = Process_Spawn_ResponseParams;
        break;
      case kProcess_SpawnWithTerminal_Name:
        if (message.isResponse())
          paramsClass = Process_SpawnWithTerminal_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Process = {
    name: 'native_support::Process',
    proxyClass: ProcessProxy,
    stubClass: ProcessStub,
    validateRequest: validateProcessRequest,
    validateResponse: validateProcessResponse,
  };
  ProcessStub.prototype.validator = validateProcessRequest;
  ProcessProxy.prototype.validator = validateProcessResponse;

  var kProcessController_Wait_Name = 0;
  var kProcessController_Kill_Name = 1;

  function ProcessControllerProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ProcessControllerProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ProcessControllerProxy.prototype.wait = function() {
    var params = new ProcessController_Wait_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kProcessController_Wait_Name,
          codec.align(ProcessController_Wait_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ProcessController_Wait_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ProcessController_Wait_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ProcessControllerProxy.prototype.kill = function(signal) {
    var params = new ProcessController_Kill_Params();
    params.signal = signal;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kProcessController_Kill_Name,
          codec.align(ProcessController_Kill_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ProcessController_Kill_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ProcessController_Kill_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ProcessControllerStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ProcessControllerStub.prototype = Object.create(bindings.StubBase.prototype);
  ProcessControllerStub.prototype.wait = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.wait && bindings.StubBindings(this).delegate.wait();
  }
  ProcessControllerStub.prototype.kill = function(signal) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.kill && bindings.StubBindings(this).delegate.kill(signal);
  }

  ProcessControllerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ProcessControllerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kProcessController_Wait_Name:
      var params = reader.decodeStruct(ProcessController_Wait_Params);
      return this.wait().then(function(response) {
        var responseParams =
            new ProcessController_Wait_ResponseParams();
        responseParams.error = response.error;
        responseParams.exit_status = response.exit_status;
        var builder = new codec.MessageWithRequestIDBuilder(
            kProcessController_Wait_Name,
            codec.align(ProcessController_Wait_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ProcessController_Wait_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kProcessController_Kill_Name:
      var params = reader.decodeStruct(ProcessController_Kill_Params);
      return this.kill(params.signal).then(function(response) {
        var responseParams =
            new ProcessController_Kill_ResponseParams();
        responseParams.error = response.error;
        var builder = new codec.MessageWithRequestIDBuilder(
            kProcessController_Kill_Name,
            codec.align(ProcessController_Kill_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ProcessController_Kill_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateProcessControllerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kProcessController_Wait_Name:
        if (message.expectsResponse())
          paramsClass = ProcessController_Wait_Params;
      break;
      case kProcessController_Kill_Name:
        if (message.expectsResponse())
          paramsClass = ProcessController_Kill_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateProcessControllerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kProcessController_Wait_Name:
        if (message.isResponse())
          paramsClass = ProcessController_Wait_ResponseParams;
        break;
      case kProcessController_Kill_Name:
        if (message.isResponse())
          paramsClass = ProcessController_Kill_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ProcessController = {
    name: null,
    proxyClass: ProcessControllerProxy,
    stubClass: ProcessControllerStub,
    validateRequest: validateProcessControllerRequest,
    validateResponse: validateProcessControllerResponse,
  };
  ProcessControllerStub.prototype.validator = validateProcessControllerRequest;
  ProcessControllerProxy.prototype.validator = validateProcessControllerResponse;


  var exports = {};
  exports.Process = Process;
  exports.ProcessController = ProcessController;


  return exports;
});
