// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("services/authentication/authentication_impl_db.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function Db(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Db.prototype.initDefaults_ = function() {
    this.version = 0;
    this.last_selected_accounts = null;
  };
  Db.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Db.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Db.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate Db.last_selected_accounts
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 8, false, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Db.encodedSize = codec.kStructHeaderSize + 16;

  Db.decode = function(decoder) {
    var packed;
    var val = new Db();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.version = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.last_selected_accounts = decoder.decodeMapPointer(codec.String, codec.String);
    return val;
  };

  Db.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Db.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.version);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeMapPointer(codec.String, codec.String, val.last_selected_accounts);
  };


  var exports = {};
  exports.Db = Db;


  return exports;
});
