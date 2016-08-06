// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/surfaces/interfaces/surface_id.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function SurfaceId(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SurfaceId.prototype.initDefaults_ = function() {
    this.local = 0;
    this.id_namespace = 0;
  };
  SurfaceId.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SurfaceId.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SurfaceId.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  SurfaceId.encodedSize = codec.kStructHeaderSize + 8;

  SurfaceId.decode = function(decoder) {
    var packed;
    var val = new SurfaceId();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.local = decoder.decodeStruct(codec.Uint32);
    val.id_namespace = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  SurfaceId.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SurfaceId.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.local);
    encoder.encodeStruct(codec.Uint32, val.id_namespace);
  };


  var exports = {};
  exports.SurfaceId = SurfaceId;


  return exports;
});
