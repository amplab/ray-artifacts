// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/input_events/interfaces/input_events.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/geometry/interfaces/geometry.mojom",
    "mojo/services/input_events/interfaces/input_event_constants.mojom",
    "mojo/services/input_events/interfaces/input_key_codes.mojom",
], function(bindings, codec, connection, core, validator, geometry$, input_event_constants$, input_key_codes$) {

  function KeyData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  KeyData.prototype.initDefaults_ = function() {
    this.key_code = 0;
    this.is_char = false;
    this.character = 0;
    this.windows_key_code = 0;
    this.native_key_code = 0;
    this.text = 0;
    this.unmodified_text = 0;
  };
  KeyData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  KeyData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, KeyData.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;








    return validator.validationError.NONE;
  };

  KeyData.encodedSize = codec.kStructHeaderSize + 24;

  KeyData.decode = function(decoder) {
    var packed;
    var val = new KeyData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key_code = decoder.decodeStruct(codec.Int32);
    val.is_char = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    val.character = decoder.decodeStruct(codec.Uint16);
    val.windows_key_code = decoder.decodeStruct(codec.Int32);
    val.native_key_code = decoder.decodeStruct(codec.Int32);
    val.text = decoder.decodeStruct(codec.Uint16);
    val.unmodified_text = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  KeyData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(KeyData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.key_code);
    encoder.encodeStruct(codec.Uint8, val.is_char);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint16, val.character);
    encoder.encodeStruct(codec.Int32, val.windows_key_code);
    encoder.encodeStruct(codec.Int32, val.native_key_code);
    encoder.encodeStruct(codec.Uint16, val.text);
    encoder.encodeStruct(codec.Uint16, val.unmodified_text);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function PointerData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PointerData.prototype.initDefaults_ = function() {
    this.pointer_id = 0;
    this.kind = 0;
    this.x = 0;
    this.y = 0;
    this.screen_x = 0;
    this.screen_y = 0;
    this.pressure = 0;
    this.radius_major = 0;
    this.radius_minor = 0;
    this.orientation = 0;
    this.horizontal_wheel = 0;
    this.vertical_wheel = 0;
  };
  PointerData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PointerData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PointerData.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;













    return validator.validationError.NONE;
  };

  PointerData.encodedSize = codec.kStructHeaderSize + 48;

  PointerData.decode = function(decoder) {
    var packed;
    var val = new PointerData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pointer_id = decoder.decodeStruct(codec.Int32);
    val.kind = decoder.decodeStruct(codec.Int32);
    val.x = decoder.decodeStruct(codec.Float);
    val.y = decoder.decodeStruct(codec.Float);
    val.screen_x = decoder.decodeStruct(codec.Float);
    val.screen_y = decoder.decodeStruct(codec.Float);
    val.pressure = decoder.decodeStruct(codec.Float);
    val.radius_major = decoder.decodeStruct(codec.Float);
    val.radius_minor = decoder.decodeStruct(codec.Float);
    val.orientation = decoder.decodeStruct(codec.Float);
    val.horizontal_wheel = decoder.decodeStruct(codec.Float);
    val.vertical_wheel = decoder.decodeStruct(codec.Float);
    return val;
  };

  PointerData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PointerData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.pointer_id);
    encoder.encodeStruct(codec.Int32, val.kind);
    encoder.encodeStruct(codec.Float, val.x);
    encoder.encodeStruct(codec.Float, val.y);
    encoder.encodeStruct(codec.Float, val.screen_x);
    encoder.encodeStruct(codec.Float, val.screen_y);
    encoder.encodeStruct(codec.Float, val.pressure);
    encoder.encodeStruct(codec.Float, val.radius_major);
    encoder.encodeStruct(codec.Float, val.radius_minor);
    encoder.encodeStruct(codec.Float, val.orientation);
    encoder.encodeStruct(codec.Float, val.horizontal_wheel);
    encoder.encodeStruct(codec.Float, val.vertical_wheel);
  };

  function Event(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Event.prototype.initDefaults_ = function() {
    this.action = 0;
    this.flags = 0;
    this.time_stamp = 0;
    this.key_data = null;
    this.pointer_data = null;
  };
  Event.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Event.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Event.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;




    
    // validate Event.key_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, KeyData, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Event.pointer_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, PointerData, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Event.encodedSize = codec.kStructHeaderSize + 32;

  Event.decode = function(decoder) {
    var packed;
    var val = new Event();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.action = decoder.decodeStruct(codec.Int32);
    val.flags = decoder.decodeStruct(codec.Int32);
    val.time_stamp = decoder.decodeStruct(codec.Int64);
    val.key_data = decoder.decodeStructPointer(KeyData);
    val.pointer_data = decoder.decodeStructPointer(PointerData);
    return val;
  };

  Event.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Event.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.action);
    encoder.encodeStruct(codec.Int32, val.flags);
    encoder.encodeStruct(codec.Int64, val.time_stamp);
    encoder.encodeStructPointer(KeyData, val.key_data);
    encoder.encodeStructPointer(PointerData, val.pointer_data);
  };


  var exports = {};
  exports.KeyData = KeyData;
  exports.PointerData = PointerData;
  exports.Event = Event;


  return exports;
});
