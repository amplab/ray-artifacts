// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/test_included_unions.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {


  function IncludedUnion(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  IncludedUnion.Tags = {
    a: 0,
  };
  
  IncludedUnion.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  IncludedUnion.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }
  
    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }
  
    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }
  
    var fields = [
        "a",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a IncludedUnion member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(IncludedUnion.prototype, "a", {
    get: function() {
      if (this.$tag != IncludedUnion.Tags.a) {
        throw new ReferenceError(
            "IncludedUnion.a is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = IncludedUnion.Tags.a;
      this.$data = value;
    }
  });
  
  
    IncludedUnion.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }
    
      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case IncludedUnion.Tags.a:
          encoder.encodeStruct(codec.Int8, val.a);
          break;
      }
      encoder.align();
    };
  
  
    IncludedUnion.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new IncludedUnion();
      var tag = decoder.readUint32();
      switch (tag) {
        case IncludedUnion.Tags.a:
          result.a = decoder.decodeStruct(codec.Int8);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    IncludedUnion.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case IncludedUnion.Tags.a:
          
    
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  IncludedUnion.encodedSize = 16;

  var exports = {};
  exports.IncludedUnion = IncludedUnion;


  return exports;
});
