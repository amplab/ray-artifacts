// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/authentication/interfaces/authentication_admin.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function AuthenticationAdminService_GetOAuth2DeviceCode_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthenticationAdminService_GetOAuth2DeviceCode_Params.prototype.initDefaults_ = function() {
    this.scopes = null;
  };
  AuthenticationAdminService_GetOAuth2DeviceCode_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthenticationAdminService_GetOAuth2DeviceCode_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AuthenticationAdminService_GetOAuth2DeviceCode_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationAdminService_GetOAuth2DeviceCode_Params.scopes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AuthenticationAdminService_GetOAuth2DeviceCode_Params.encodedSize = codec.kStructHeaderSize + 8;

  AuthenticationAdminService_GetOAuth2DeviceCode_Params.decode = function(decoder) {
    var packed;
    var val = new AuthenticationAdminService_GetOAuth2DeviceCode_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.scopes = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  AuthenticationAdminService_GetOAuth2DeviceCode_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthenticationAdminService_GetOAuth2DeviceCode_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.scopes);
  };

  function AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams.prototype.initDefaults_ = function() {
    this.verification_url = null;
    this.device_code = null;
    this.user_code = null;
    this.error = null;
  };
  AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams.verification_url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams.device_code
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams.user_code
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams.error
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams.encodedSize = codec.kStructHeaderSize + 32;

  AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.verification_url = decoder.decodeStruct(codec.NullableString);
    val.device_code = decoder.decodeStruct(codec.NullableString);
    val.user_code = decoder.decodeStruct(codec.NullableString);
    val.error = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.verification_url);
    encoder.encodeStruct(codec.NullableString, val.device_code);
    encoder.encodeStruct(codec.NullableString, val.user_code);
    encoder.encodeStruct(codec.NullableString, val.error);
  };

  function AuthenticationAdminService_AddAccount_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthenticationAdminService_AddAccount_Params.prototype.initDefaults_ = function() {
    this.device_code = null;
  };
  AuthenticationAdminService_AddAccount_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthenticationAdminService_AddAccount_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AuthenticationAdminService_AddAccount_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationAdminService_AddAccount_Params.device_code
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AuthenticationAdminService_AddAccount_Params.encodedSize = codec.kStructHeaderSize + 8;

  AuthenticationAdminService_AddAccount_Params.decode = function(decoder) {
    var packed;
    var val = new AuthenticationAdminService_AddAccount_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.device_code = decoder.decodeStruct(codec.String);
    return val;
  };

  AuthenticationAdminService_AddAccount_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthenticationAdminService_AddAccount_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.device_code);
  };

  function AuthenticationAdminService_AddAccount_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthenticationAdminService_AddAccount_ResponseParams.prototype.initDefaults_ = function() {
    this.username = null;
    this.error = null;
  };
  AuthenticationAdminService_AddAccount_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthenticationAdminService_AddAccount_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AuthenticationAdminService_AddAccount_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationAdminService_AddAccount_ResponseParams.username
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationAdminService_AddAccount_ResponseParams.error
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AuthenticationAdminService_AddAccount_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  AuthenticationAdminService_AddAccount_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AuthenticationAdminService_AddAccount_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.username = decoder.decodeStruct(codec.NullableString);
    val.error = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  AuthenticationAdminService_AddAccount_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthenticationAdminService_AddAccount_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.username);
    encoder.encodeStruct(codec.NullableString, val.error);
  };

  function AuthenticationAdminService_GetAllUsers_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthenticationAdminService_GetAllUsers_Params.prototype.initDefaults_ = function() {
  };
  AuthenticationAdminService_GetAllUsers_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthenticationAdminService_GetAllUsers_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AuthenticationAdminService_GetAllUsers_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AuthenticationAdminService_GetAllUsers_Params.encodedSize = codec.kStructHeaderSize + 0;

  AuthenticationAdminService_GetAllUsers_Params.decode = function(decoder) {
    var packed;
    var val = new AuthenticationAdminService_GetAllUsers_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AuthenticationAdminService_GetAllUsers_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthenticationAdminService_GetAllUsers_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function AuthenticationAdminService_GetAllUsers_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthenticationAdminService_GetAllUsers_ResponseParams.prototype.initDefaults_ = function() {
    this.usernames = null;
    this.error = null;
  };
  AuthenticationAdminService_GetAllUsers_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthenticationAdminService_GetAllUsers_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AuthenticationAdminService_GetAllUsers_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationAdminService_GetAllUsers_ResponseParams.usernames
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationAdminService_GetAllUsers_ResponseParams.error
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AuthenticationAdminService_GetAllUsers_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  AuthenticationAdminService_GetAllUsers_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AuthenticationAdminService_GetAllUsers_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.usernames = decoder.decodeArrayPointer(codec.String);
    val.error = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  AuthenticationAdminService_GetAllUsers_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthenticationAdminService_GetAllUsers_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.usernames);
    encoder.encodeStruct(codec.NullableString, val.error);
  };

  var kAuthenticationAdminService_GetOAuth2DeviceCode_Name = 0;
  var kAuthenticationAdminService_AddAccount_Name = 1;
  var kAuthenticationAdminService_GetAllUsers_Name = 2;

  function AuthenticationAdminServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  AuthenticationAdminServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  AuthenticationAdminServiceProxy.prototype.getOAuth2DeviceCode = function(scopes) {
    var params = new AuthenticationAdminService_GetOAuth2DeviceCode_Params();
    params.scopes = scopes;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kAuthenticationAdminService_GetOAuth2DeviceCode_Name,
          codec.align(AuthenticationAdminService_GetOAuth2DeviceCode_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AuthenticationAdminService_GetOAuth2DeviceCode_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AuthenticationAdminServiceProxy.prototype.addAccount = function(device_code) {
    var params = new AuthenticationAdminService_AddAccount_Params();
    params.device_code = device_code;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kAuthenticationAdminService_AddAccount_Name,
          codec.align(AuthenticationAdminService_AddAccount_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AuthenticationAdminService_AddAccount_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AuthenticationAdminService_AddAccount_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AuthenticationAdminServiceProxy.prototype.getAllUsers = function() {
    var params = new AuthenticationAdminService_GetAllUsers_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kAuthenticationAdminService_GetAllUsers_Name,
          codec.align(AuthenticationAdminService_GetAllUsers_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AuthenticationAdminService_GetAllUsers_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AuthenticationAdminService_GetAllUsers_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function AuthenticationAdminServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  AuthenticationAdminServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  AuthenticationAdminServiceStub.prototype.getOAuth2DeviceCode = function(scopes) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getOAuth2DeviceCode && bindings.StubBindings(this).delegate.getOAuth2DeviceCode(scopes);
  }
  AuthenticationAdminServiceStub.prototype.addAccount = function(device_code) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.addAccount && bindings.StubBindings(this).delegate.addAccount(device_code);
  }
  AuthenticationAdminServiceStub.prototype.getAllUsers = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getAllUsers && bindings.StubBindings(this).delegate.getAllUsers();
  }

  AuthenticationAdminServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  AuthenticationAdminServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAuthenticationAdminService_GetOAuth2DeviceCode_Name:
      var params = reader.decodeStruct(AuthenticationAdminService_GetOAuth2DeviceCode_Params);
      return this.getOAuth2DeviceCode(params.scopes).then(function(response) {
        var responseParams =
            new AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams();
        responseParams.verification_url = response.verification_url;
        responseParams.device_code = response.device_code;
        responseParams.user_code = response.user_code;
        responseParams.error = response.error;
        var builder = new codec.MessageWithRequestIDBuilder(
            kAuthenticationAdminService_GetOAuth2DeviceCode_Name,
            codec.align(AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kAuthenticationAdminService_AddAccount_Name:
      var params = reader.decodeStruct(AuthenticationAdminService_AddAccount_Params);
      return this.addAccount(params.device_code).then(function(response) {
        var responseParams =
            new AuthenticationAdminService_AddAccount_ResponseParams();
        responseParams.username = response.username;
        responseParams.error = response.error;
        var builder = new codec.MessageWithRequestIDBuilder(
            kAuthenticationAdminService_AddAccount_Name,
            codec.align(AuthenticationAdminService_AddAccount_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AuthenticationAdminService_AddAccount_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kAuthenticationAdminService_GetAllUsers_Name:
      var params = reader.decodeStruct(AuthenticationAdminService_GetAllUsers_Params);
      return this.getAllUsers().then(function(response) {
        var responseParams =
            new AuthenticationAdminService_GetAllUsers_ResponseParams();
        responseParams.usernames = response.usernames;
        responseParams.error = response.error;
        var builder = new codec.MessageWithRequestIDBuilder(
            kAuthenticationAdminService_GetAllUsers_Name,
            codec.align(AuthenticationAdminService_GetAllUsers_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AuthenticationAdminService_GetAllUsers_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateAuthenticationAdminServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAuthenticationAdminService_GetOAuth2DeviceCode_Name:
        if (message.expectsResponse())
          paramsClass = AuthenticationAdminService_GetOAuth2DeviceCode_Params;
      break;
      case kAuthenticationAdminService_AddAccount_Name:
        if (message.expectsResponse())
          paramsClass = AuthenticationAdminService_AddAccount_Params;
      break;
      case kAuthenticationAdminService_GetAllUsers_Name:
        if (message.expectsResponse())
          paramsClass = AuthenticationAdminService_GetAllUsers_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAuthenticationAdminServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kAuthenticationAdminService_GetOAuth2DeviceCode_Name:
        if (message.isResponse())
          paramsClass = AuthenticationAdminService_GetOAuth2DeviceCode_ResponseParams;
        break;
      case kAuthenticationAdminService_AddAccount_Name:
        if (message.isResponse())
          paramsClass = AuthenticationAdminService_AddAccount_ResponseParams;
        break;
      case kAuthenticationAdminService_GetAllUsers_Name:
        if (message.isResponse())
          paramsClass = AuthenticationAdminService_GetAllUsers_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var AuthenticationAdminService = {
    name: 'authentication::AuthenticationAdminService',
    proxyClass: AuthenticationAdminServiceProxy,
    stubClass: AuthenticationAdminServiceStub,
    validateRequest: validateAuthenticationAdminServiceRequest,
    validateResponse: validateAuthenticationAdminServiceResponse,
  };
  AuthenticationAdminServiceStub.prototype.validator = validateAuthenticationAdminServiceRequest;
  AuthenticationAdminServiceProxy.prototype.validator = validateAuthenticationAdminServiceResponse;


  var exports = {};
  exports.AuthenticationAdminService = AuthenticationAdminService;


  return exports;
});
