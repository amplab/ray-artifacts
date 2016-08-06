// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/authentication/interfaces/authentication.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function AuthenticationService_SelectAccount_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthenticationService_SelectAccount_Params.prototype.initDefaults_ = function() {
    this.return_last_selected = false;
  };
  AuthenticationService_SelectAccount_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthenticationService_SelectAccount_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AuthenticationService_SelectAccount_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  AuthenticationService_SelectAccount_Params.encodedSize = codec.kStructHeaderSize + 8;

  AuthenticationService_SelectAccount_Params.decode = function(decoder) {
    var packed;
    var val = new AuthenticationService_SelectAccount_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.return_last_selected = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AuthenticationService_SelectAccount_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthenticationService_SelectAccount_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.return_last_selected);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function AuthenticationService_SelectAccount_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthenticationService_SelectAccount_ResponseParams.prototype.initDefaults_ = function() {
    this.username = null;
    this.error = null;
  };
  AuthenticationService_SelectAccount_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthenticationService_SelectAccount_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AuthenticationService_SelectAccount_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationService_SelectAccount_ResponseParams.username
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationService_SelectAccount_ResponseParams.error
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AuthenticationService_SelectAccount_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  AuthenticationService_SelectAccount_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AuthenticationService_SelectAccount_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.username = decoder.decodeStruct(codec.NullableString);
    val.error = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  AuthenticationService_SelectAccount_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthenticationService_SelectAccount_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.username);
    encoder.encodeStruct(codec.NullableString, val.error);
  };

  function AuthenticationService_GetOAuth2Token_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthenticationService_GetOAuth2Token_Params.prototype.initDefaults_ = function() {
    this.username = null;
    this.scopes = null;
  };
  AuthenticationService_GetOAuth2Token_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthenticationService_GetOAuth2Token_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AuthenticationService_GetOAuth2Token_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationService_GetOAuth2Token_Params.username
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationService_GetOAuth2Token_Params.scopes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AuthenticationService_GetOAuth2Token_Params.encodedSize = codec.kStructHeaderSize + 16;

  AuthenticationService_GetOAuth2Token_Params.decode = function(decoder) {
    var packed;
    var val = new AuthenticationService_GetOAuth2Token_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.username = decoder.decodeStruct(codec.String);
    val.scopes = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  AuthenticationService_GetOAuth2Token_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthenticationService_GetOAuth2Token_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.username);
    encoder.encodeArrayPointer(codec.String, val.scopes);
  };

  function AuthenticationService_GetOAuth2Token_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthenticationService_GetOAuth2Token_ResponseParams.prototype.initDefaults_ = function() {
    this.token = null;
    this.error = null;
  };
  AuthenticationService_GetOAuth2Token_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthenticationService_GetOAuth2Token_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AuthenticationService_GetOAuth2Token_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationService_GetOAuth2Token_ResponseParams.token
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationService_GetOAuth2Token_ResponseParams.error
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AuthenticationService_GetOAuth2Token_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  AuthenticationService_GetOAuth2Token_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AuthenticationService_GetOAuth2Token_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token = decoder.decodeStruct(codec.NullableString);
    val.error = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  AuthenticationService_GetOAuth2Token_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthenticationService_GetOAuth2Token_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.token);
    encoder.encodeStruct(codec.NullableString, val.error);
  };

  function AuthenticationService_ClearOAuth2Token_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthenticationService_ClearOAuth2Token_Params.prototype.initDefaults_ = function() {
    this.token = null;
  };
  AuthenticationService_ClearOAuth2Token_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthenticationService_ClearOAuth2Token_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AuthenticationService_ClearOAuth2Token_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AuthenticationService_ClearOAuth2Token_Params.token
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AuthenticationService_ClearOAuth2Token_Params.encodedSize = codec.kStructHeaderSize + 8;

  AuthenticationService_ClearOAuth2Token_Params.decode = function(decoder) {
    var packed;
    var val = new AuthenticationService_ClearOAuth2Token_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token = decoder.decodeStruct(codec.String);
    return val;
  };

  AuthenticationService_ClearOAuth2Token_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthenticationService_ClearOAuth2Token_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.token);
  };

  var kAuthenticationService_SelectAccount_Name = 0;
  var kAuthenticationService_GetOAuth2Token_Name = 1;
  var kAuthenticationService_ClearOAuth2Token_Name = 2;

  function AuthenticationServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  AuthenticationServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  AuthenticationServiceProxy.prototype.selectAccount = function(return_last_selected) {
    var params = new AuthenticationService_SelectAccount_Params();
    params.return_last_selected = return_last_selected;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kAuthenticationService_SelectAccount_Name,
          codec.align(AuthenticationService_SelectAccount_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AuthenticationService_SelectAccount_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AuthenticationService_SelectAccount_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AuthenticationServiceProxy.prototype.getOAuth2Token = function(username, scopes) {
    var params = new AuthenticationService_GetOAuth2Token_Params();
    params.username = username;
    params.scopes = scopes;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kAuthenticationService_GetOAuth2Token_Name,
          codec.align(AuthenticationService_GetOAuth2Token_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AuthenticationService_GetOAuth2Token_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AuthenticationService_GetOAuth2Token_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AuthenticationServiceProxy.prototype.clearOAuth2Token = function(token) {
    var params = new AuthenticationService_ClearOAuth2Token_Params();
    params.token = token;
    var builder = new codec.MessageBuilder(
        kAuthenticationService_ClearOAuth2Token_Name,
        codec.align(AuthenticationService_ClearOAuth2Token_Params.encodedSize));
    builder.encodeStruct(AuthenticationService_ClearOAuth2Token_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AuthenticationServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  AuthenticationServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  AuthenticationServiceStub.prototype.selectAccount = function(return_last_selected) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.selectAccount && bindings.StubBindings(this).delegate.selectAccount(return_last_selected);
  }
  AuthenticationServiceStub.prototype.getOAuth2Token = function(username, scopes) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getOAuth2Token && bindings.StubBindings(this).delegate.getOAuth2Token(username, scopes);
  }
  AuthenticationServiceStub.prototype.clearOAuth2Token = function(token) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.clearOAuth2Token && bindings.StubBindings(this).delegate.clearOAuth2Token(token);
  }

  AuthenticationServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAuthenticationService_ClearOAuth2Token_Name:
      var params = reader.decodeStruct(AuthenticationService_ClearOAuth2Token_Params);
      this.clearOAuth2Token(params.token);
      return true;
    default:
      return false;
    }
  };

  AuthenticationServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAuthenticationService_SelectAccount_Name:
      var params = reader.decodeStruct(AuthenticationService_SelectAccount_Params);
      return this.selectAccount(params.return_last_selected).then(function(response) {
        var responseParams =
            new AuthenticationService_SelectAccount_ResponseParams();
        responseParams.username = response.username;
        responseParams.error = response.error;
        var builder = new codec.MessageWithRequestIDBuilder(
            kAuthenticationService_SelectAccount_Name,
            codec.align(AuthenticationService_SelectAccount_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AuthenticationService_SelectAccount_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kAuthenticationService_GetOAuth2Token_Name:
      var params = reader.decodeStruct(AuthenticationService_GetOAuth2Token_Params);
      return this.getOAuth2Token(params.username, params.scopes).then(function(response) {
        var responseParams =
            new AuthenticationService_GetOAuth2Token_ResponseParams();
        responseParams.token = response.token;
        responseParams.error = response.error;
        var builder = new codec.MessageWithRequestIDBuilder(
            kAuthenticationService_GetOAuth2Token_Name,
            codec.align(AuthenticationService_GetOAuth2Token_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AuthenticationService_GetOAuth2Token_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateAuthenticationServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAuthenticationService_SelectAccount_Name:
        if (message.expectsResponse())
          paramsClass = AuthenticationService_SelectAccount_Params;
      break;
      case kAuthenticationService_GetOAuth2Token_Name:
        if (message.expectsResponse())
          paramsClass = AuthenticationService_GetOAuth2Token_Params;
      break;
      case kAuthenticationService_ClearOAuth2Token_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AuthenticationService_ClearOAuth2Token_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAuthenticationServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kAuthenticationService_SelectAccount_Name:
        if (message.isResponse())
          paramsClass = AuthenticationService_SelectAccount_ResponseParams;
        break;
      case kAuthenticationService_GetOAuth2Token_Name:
        if (message.isResponse())
          paramsClass = AuthenticationService_GetOAuth2Token_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var AuthenticationService = {
    name: 'authentication::AuthenticationService',
    proxyClass: AuthenticationServiceProxy,
    stubClass: AuthenticationServiceStub,
    validateRequest: validateAuthenticationServiceRequest,
    validateResponse: validateAuthenticationServiceResponse,
  };
  AuthenticationServiceStub.prototype.validator = validateAuthenticationServiceRequest;
  AuthenticationServiceProxy.prototype.validator = validateAuthenticationServiceResponse;


  var exports = {};
  exports.AuthenticationService = AuthenticationService;


  return exports;
});
