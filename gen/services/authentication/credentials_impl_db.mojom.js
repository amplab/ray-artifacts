// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("services/authentication/credentials_impl_db.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {
  var CredentialType = {};
  CredentialType.DOWNSCOPED_OAUTH_REFRESH_TOKEN = 1;
  var AuthProvider = {};
  AuthProvider.GOOGLE = 1;

  function Credentials(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Credentials.prototype.initDefaults_ = function() {
    this.auth_provider = 0;
    this.credential_type = 0;
    this.token = null;
    this.scopes = null;
  };
  Credentials.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Credentials.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Credentials.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate Credentials.token
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Credentials.scopes
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Credentials.encodedSize = codec.kStructHeaderSize + 24;

  Credentials.decode = function(decoder) {
    var packed;
    var val = new Credentials();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.auth_provider = decoder.decodeStruct(codec.Int32);
    val.credential_type = decoder.decodeStruct(codec.Int32);
    val.token = decoder.decodeStruct(codec.String);
    val.scopes = decoder.decodeStruct(codec.String);
    return val;
  };

  Credentials.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Credentials.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.auth_provider);
    encoder.encodeStruct(codec.Int32, val.credential_type);
    encoder.encodeStruct(codec.String, val.token);
    encoder.encodeStruct(codec.String, val.scopes);
  };

  function CredentialStore(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CredentialStore.prototype.initDefaults_ = function() {
    this.version = 0;
    this.credentials = null;
  };
  CredentialStore.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CredentialStore.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CredentialStore.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate CredentialStore.credentials
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 8, false, codec.String, new codec.PointerTo(Credentials), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CredentialStore.encodedSize = codec.kStructHeaderSize + 16;

  CredentialStore.decode = function(decoder) {
    var packed;
    var val = new CredentialStore();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.version = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.credentials = decoder.decodeMapPointer(codec.String, new codec.PointerTo(Credentials));
    return val;
  };

  CredentialStore.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CredentialStore.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.version);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeMapPointer(codec.String, new codec.PointerTo(Credentials), val.credentials);
  };


  var exports = {};
  exports.CredentialType = CredentialType;
  exports.AuthProvider = AuthProvider;
  exports.Credentials = Credentials;
  exports.CredentialStore = CredentialStore;


  return exports;
});
