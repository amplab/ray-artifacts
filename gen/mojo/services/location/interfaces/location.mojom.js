// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/location/interfaces/location.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function Location(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Location.prototype.initDefaults_ = function() {
    this.time = 0;
    this.has_elapsed_real_time_nanos = false;
    this.has_altitude = false;
    this.has_speed = false;
    this.has_bearing = false;
    this.has_accuracy = false;
    this.speed = 0;
    this.elapsed_real_time_nanos = 0;
    this.latitude = 0;
    this.longitude = 0;
    this.altitude = 0;
    this.bearing = 0;
    this.accuracy = 0;
  };
  Location.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Location.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Location.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;














    return validator.validationError.NONE;
  };

  Location.encodedSize = codec.kStructHeaderSize + 56;

  Location.decode = function(decoder) {
    var packed;
    var val = new Location();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.time = decoder.decodeStruct(codec.Uint64);
    packed = decoder.readUint8();
    val.has_elapsed_real_time_nanos = (packed >> 0) & 1 ? true : false;
    val.has_altitude = (packed >> 1) & 1 ? true : false;
    val.has_speed = (packed >> 2) & 1 ? true : false;
    val.has_bearing = (packed >> 3) & 1 ? true : false;
    val.has_accuracy = (packed >> 4) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.speed = decoder.decodeStruct(codec.Float);
    val.elapsed_real_time_nanos = decoder.decodeStruct(codec.Uint64);
    val.latitude = decoder.decodeStruct(codec.Double);
    val.longitude = decoder.decodeStruct(codec.Double);
    val.altitude = decoder.decodeStruct(codec.Double);
    val.bearing = decoder.decodeStruct(codec.Float);
    val.accuracy = decoder.decodeStruct(codec.Float);
    return val;
  };

  Location.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Location.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.time);
    packed = 0;
    packed |= (val.has_elapsed_real_time_nanos & 1) << 0
    packed |= (val.has_altitude & 1) << 1
    packed |= (val.has_speed & 1) << 2
    packed |= (val.has_bearing & 1) << 3
    packed |= (val.has_accuracy & 1) << 4
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Float, val.speed);
    encoder.encodeStruct(codec.Uint64, val.elapsed_real_time_nanos);
    encoder.encodeStruct(codec.Double, val.latitude);
    encoder.encodeStruct(codec.Double, val.longitude);
    encoder.encodeStruct(codec.Double, val.altitude);
    encoder.encodeStruct(codec.Float, val.bearing);
    encoder.encodeStruct(codec.Float, val.accuracy);
  };


  var exports = {};
  exports.Location = Location;


  return exports;
});
