// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/vanadium/security/interfaces/principal.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function AppInstanceName(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppInstanceName.prototype.initDefaults_ = function() {
    this.url = null;
    this.qualifier = null;
  };
  AppInstanceName.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppInstanceName.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AppInstanceName.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AppInstanceName.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AppInstanceName.qualifier
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppInstanceName.encodedSize = codec.kStructHeaderSize + 16;

  AppInstanceName.decode = function(decoder) {
    var packed;
    var val = new AppInstanceName();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStruct(codec.String);
    val.qualifier = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  AppInstanceName.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppInstanceName.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.url);
    encoder.encodeStruct(codec.NullableString, val.qualifier);
  };

  function User(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  User.prototype.initDefaults_ = function() {
    this.email = null;
    this.blessing = null;
  };
  User.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  User.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, User.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate User.email
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate User.blessing
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  User.encodedSize = codec.kStructHeaderSize + 16;

  User.decode = function(decoder) {
    var packed;
    var val = new User();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.email = decoder.decodeStruct(codec.String);
    val.blessing = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  User.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(User.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.email);
    encoder.encodeArrayPointer(codec.Uint8, val.blessing);
  };

  function PrincipalService_Login_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrincipalService_Login_Params.prototype.initDefaults_ = function() {
  };
  PrincipalService_Login_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrincipalService_Login_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PrincipalService_Login_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PrincipalService_Login_Params.encodedSize = codec.kStructHeaderSize + 0;

  PrincipalService_Login_Params.decode = function(decoder) {
    var packed;
    var val = new PrincipalService_Login_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PrincipalService_Login_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrincipalService_Login_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function PrincipalService_Login_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrincipalService_Login_ResponseParams.prototype.initDefaults_ = function() {
    this.user = null;
  };
  PrincipalService_Login_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrincipalService_Login_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PrincipalService_Login_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate PrincipalService_Login_ResponseParams.user
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, User, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PrincipalService_Login_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PrincipalService_Login_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PrincipalService_Login_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.user = decoder.decodeStructPointer(User);
    return val;
  };

  PrincipalService_Login_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrincipalService_Login_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(User, val.user);
  };

  function PrincipalService_Logout_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrincipalService_Logout_Params.prototype.initDefaults_ = function() {
  };
  PrincipalService_Logout_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrincipalService_Logout_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PrincipalService_Logout_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PrincipalService_Logout_Params.encodedSize = codec.kStructHeaderSize + 0;

  PrincipalService_Logout_Params.decode = function(decoder) {
    var packed;
    var val = new PrincipalService_Logout_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PrincipalService_Logout_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrincipalService_Logout_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function PrincipalService_GetUser_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrincipalService_GetUser_Params.prototype.initDefaults_ = function() {
    this.app = null;
  };
  PrincipalService_GetUser_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrincipalService_GetUser_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PrincipalService_GetUser_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate PrincipalService_GetUser_Params.app
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, AppInstanceName, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PrincipalService_GetUser_Params.encodedSize = codec.kStructHeaderSize + 8;

  PrincipalService_GetUser_Params.decode = function(decoder) {
    var packed;
    var val = new PrincipalService_GetUser_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.app = decoder.decodeStructPointer(AppInstanceName);
    return val;
  };

  PrincipalService_GetUser_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrincipalService_GetUser_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(AppInstanceName, val.app);
  };

  function PrincipalService_GetUser_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrincipalService_GetUser_ResponseParams.prototype.initDefaults_ = function() {
    this.user = null;
  };
  PrincipalService_GetUser_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrincipalService_GetUser_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PrincipalService_GetUser_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate PrincipalService_GetUser_ResponseParams.user
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, User, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PrincipalService_GetUser_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PrincipalService_GetUser_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PrincipalService_GetUser_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.user = decoder.decodeStructPointer(User);
    return val;
  };

  PrincipalService_GetUser_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrincipalService_GetUser_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(User, val.user);
  };

  function PrincipalService_SetUser_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrincipalService_SetUser_Params.prototype.initDefaults_ = function() {
    this.user = null;
  };
  PrincipalService_SetUser_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrincipalService_SetUser_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PrincipalService_SetUser_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate PrincipalService_SetUser_Params.user
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, User, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PrincipalService_SetUser_Params.encodedSize = codec.kStructHeaderSize + 8;

  PrincipalService_SetUser_Params.decode = function(decoder) {
    var packed;
    var val = new PrincipalService_SetUser_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.user = decoder.decodeStructPointer(User);
    return val;
  };

  PrincipalService_SetUser_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrincipalService_SetUser_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(User, val.user);
  };

  function PrincipalService_SetUser_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrincipalService_SetUser_ResponseParams.prototype.initDefaults_ = function() {
    this.error = null;
  };
  PrincipalService_SetUser_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrincipalService_SetUser_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PrincipalService_SetUser_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate PrincipalService_SetUser_ResponseParams.error
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PrincipalService_SetUser_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PrincipalService_SetUser_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PrincipalService_SetUser_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  PrincipalService_SetUser_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrincipalService_SetUser_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.error);
  };

  function PrincipalService_GetLoggedInUsers_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrincipalService_GetLoggedInUsers_Params.prototype.initDefaults_ = function() {
  };
  PrincipalService_GetLoggedInUsers_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrincipalService_GetLoggedInUsers_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PrincipalService_GetLoggedInUsers_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PrincipalService_GetLoggedInUsers_Params.encodedSize = codec.kStructHeaderSize + 0;

  PrincipalService_GetLoggedInUsers_Params.decode = function(decoder) {
    var packed;
    var val = new PrincipalService_GetLoggedInUsers_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PrincipalService_GetLoggedInUsers_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrincipalService_GetLoggedInUsers_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function PrincipalService_GetLoggedInUsers_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrincipalService_GetLoggedInUsers_ResponseParams.prototype.initDefaults_ = function() {
    this.ids = null;
  };
  PrincipalService_GetLoggedInUsers_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrincipalService_GetLoggedInUsers_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PrincipalService_GetLoggedInUsers_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate PrincipalService_GetLoggedInUsers_ResponseParams.ids
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(User), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PrincipalService_GetLoggedInUsers_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PrincipalService_GetLoggedInUsers_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PrincipalService_GetLoggedInUsers_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.ids = decoder.decodeArrayPointer(new codec.PointerTo(User));
    return val;
  };

  PrincipalService_GetLoggedInUsers_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrincipalService_GetLoggedInUsers_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(User), val.ids);
  };

  var kPrincipalService_Login_Name = 0;
  var kPrincipalService_Logout_Name = 1;
  var kPrincipalService_GetUser_Name = 2;
  var kPrincipalService_SetUser_Name = 3;
  var kPrincipalService_GetLoggedInUsers_Name = 4;

  function PrincipalServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  PrincipalServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  PrincipalServiceProxy.prototype.login = function() {
    var params = new PrincipalService_Login_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kPrincipalService_Login_Name,
          codec.align(PrincipalService_Login_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PrincipalService_Login_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PrincipalService_Login_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PrincipalServiceProxy.prototype.logout = function() {
    var params = new PrincipalService_Logout_Params();
    var builder = new codec.MessageBuilder(
        kPrincipalService_Logout_Name,
        codec.align(PrincipalService_Logout_Params.encodedSize));
    builder.encodeStruct(PrincipalService_Logout_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PrincipalServiceProxy.prototype.getUser = function(app) {
    var params = new PrincipalService_GetUser_Params();
    params.app = app;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kPrincipalService_GetUser_Name,
          codec.align(PrincipalService_GetUser_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PrincipalService_GetUser_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PrincipalService_GetUser_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PrincipalServiceProxy.prototype.setUser = function(user) {
    var params = new PrincipalService_SetUser_Params();
    params.user = user;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kPrincipalService_SetUser_Name,
          codec.align(PrincipalService_SetUser_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PrincipalService_SetUser_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PrincipalService_SetUser_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PrincipalServiceProxy.prototype.getLoggedInUsers = function() {
    var params = new PrincipalService_GetLoggedInUsers_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kPrincipalService_GetLoggedInUsers_Name,
          codec.align(PrincipalService_GetLoggedInUsers_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PrincipalService_GetLoggedInUsers_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PrincipalService_GetLoggedInUsers_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PrincipalServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  PrincipalServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  PrincipalServiceStub.prototype.login = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.login && bindings.StubBindings(this).delegate.login();
  }
  PrincipalServiceStub.prototype.logout = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.logout && bindings.StubBindings(this).delegate.logout();
  }
  PrincipalServiceStub.prototype.getUser = function(app) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getUser && bindings.StubBindings(this).delegate.getUser(app);
  }
  PrincipalServiceStub.prototype.setUser = function(user) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.setUser && bindings.StubBindings(this).delegate.setUser(user);
  }
  PrincipalServiceStub.prototype.getLoggedInUsers = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getLoggedInUsers && bindings.StubBindings(this).delegate.getLoggedInUsers();
  }

  PrincipalServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPrincipalService_Logout_Name:
      var params = reader.decodeStruct(PrincipalService_Logout_Params);
      this.logout();
      return true;
    default:
      return false;
    }
  };

  PrincipalServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPrincipalService_Login_Name:
      var params = reader.decodeStruct(PrincipalService_Login_Params);
      return this.login().then(function(response) {
        var responseParams =
            new PrincipalService_Login_ResponseParams();
        responseParams.user = response.user;
        var builder = new codec.MessageWithRequestIDBuilder(
            kPrincipalService_Login_Name,
            codec.align(PrincipalService_Login_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PrincipalService_Login_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kPrincipalService_GetUser_Name:
      var params = reader.decodeStruct(PrincipalService_GetUser_Params);
      return this.getUser(params.app).then(function(response) {
        var responseParams =
            new PrincipalService_GetUser_ResponseParams();
        responseParams.user = response.user;
        var builder = new codec.MessageWithRequestIDBuilder(
            kPrincipalService_GetUser_Name,
            codec.align(PrincipalService_GetUser_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PrincipalService_GetUser_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kPrincipalService_SetUser_Name:
      var params = reader.decodeStruct(PrincipalService_SetUser_Params);
      return this.setUser(params.user).then(function(response) {
        var responseParams =
            new PrincipalService_SetUser_ResponseParams();
        responseParams.error = response.error;
        var builder = new codec.MessageWithRequestIDBuilder(
            kPrincipalService_SetUser_Name,
            codec.align(PrincipalService_SetUser_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PrincipalService_SetUser_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kPrincipalService_GetLoggedInUsers_Name:
      var params = reader.decodeStruct(PrincipalService_GetLoggedInUsers_Params);
      return this.getLoggedInUsers().then(function(response) {
        var responseParams =
            new PrincipalService_GetLoggedInUsers_ResponseParams();
        responseParams.ids = response.ids;
        var builder = new codec.MessageWithRequestIDBuilder(
            kPrincipalService_GetLoggedInUsers_Name,
            codec.align(PrincipalService_GetLoggedInUsers_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PrincipalService_GetLoggedInUsers_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validatePrincipalServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPrincipalService_Login_Name:
        if (message.expectsResponse())
          paramsClass = PrincipalService_Login_Params;
      break;
      case kPrincipalService_Logout_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PrincipalService_Logout_Params;
      break;
      case kPrincipalService_GetUser_Name:
        if (message.expectsResponse())
          paramsClass = PrincipalService_GetUser_Params;
      break;
      case kPrincipalService_SetUser_Name:
        if (message.expectsResponse())
          paramsClass = PrincipalService_SetUser_Params;
      break;
      case kPrincipalService_GetLoggedInUsers_Name:
        if (message.expectsResponse())
          paramsClass = PrincipalService_GetLoggedInUsers_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePrincipalServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPrincipalService_Login_Name:
        if (message.isResponse())
          paramsClass = PrincipalService_Login_ResponseParams;
        break;
      case kPrincipalService_GetUser_Name:
        if (message.isResponse())
          paramsClass = PrincipalService_GetUser_ResponseParams;
        break;
      case kPrincipalService_SetUser_Name:
        if (message.isResponse())
          paramsClass = PrincipalService_SetUser_ResponseParams;
        break;
      case kPrincipalService_GetLoggedInUsers_Name:
        if (message.isResponse())
          paramsClass = PrincipalService_GetLoggedInUsers_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PrincipalService = {
    name: 'vanadium::PrincipalService',
    proxyClass: PrincipalServiceProxy,
    stubClass: PrincipalServiceStub,
    validateRequest: validatePrincipalServiceRequest,
    validateResponse: validatePrincipalServiceResponse,
  };
  PrincipalServiceStub.prototype.validator = validatePrincipalServiceRequest;
  PrincipalServiceProxy.prototype.validator = validatePrincipalServiceResponse;


  var exports = {};
  exports.AppInstanceName = AppInstanceName;
  exports.User = User;
  exports.PrincipalService = PrincipalService;


  return exports;
});
