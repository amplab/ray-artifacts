// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/mojom_files.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/bindings/mojom_types.mojom",
], function(bindings, codec, connection, core, validator, mojom_types$) {

  function MojomFile(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MojomFile.prototype.initDefaults_ = function() {
    this.file_name = null;
    this.specified_file_name = null;
    this.module_namespace = null;
    this.attributes = null;
    this.imports = null;
    this.declared_mojom_objects = null;
    this.serialized_runtime_type_info = null;
  };
  MojomFile.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MojomFile.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MojomFile.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomFile.file_name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomFile.specified_file_name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomFile.module_namespace
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomFile.attributes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(mojom_types$.Attribute), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomFile.imports
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomFile.declared_mojom_objects
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, KeysByType, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomFile.serialized_runtime_type_info
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MojomFile.encodedSize = codec.kStructHeaderSize + 56;

  MojomFile.decode = function(decoder) {
    var packed;
    var val = new MojomFile();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.file_name = decoder.decodeStruct(codec.String);
    val.specified_file_name = decoder.decodeStruct(codec.NullableString);
    val.module_namespace = decoder.decodeStruct(codec.NullableString);
    val.attributes = decoder.decodeArrayPointer(new codec.PointerTo(mojom_types$.Attribute));
    val.imports = decoder.decodeArrayPointer(codec.String);
    val.declared_mojom_objects = decoder.decodeStructPointer(KeysByType);
    val.serialized_runtime_type_info = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  MojomFile.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MojomFile.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.file_name);
    encoder.encodeStruct(codec.NullableString, val.specified_file_name);
    encoder.encodeStruct(codec.NullableString, val.module_namespace);
    encoder.encodeArrayPointer(new codec.PointerTo(mojom_types$.Attribute), val.attributes);
    encoder.encodeArrayPointer(codec.String, val.imports);
    encoder.encodeStructPointer(KeysByType, val.declared_mojom_objects);
    encoder.encodeStruct(codec.NullableString, val.serialized_runtime_type_info);
  };

  function MojomFileGraph(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MojomFileGraph.prototype.initDefaults_ = function() {
    this.files = null;
    this.resolved_types = null;
    this.resolved_constants = null;
  };
  MojomFileGraph.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MojomFileGraph.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MojomFileGraph.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomFileGraph.files
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, new codec.PointerTo(MojomFile), false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomFileGraph.resolved_types
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 8, false, codec.String, new codec.UnionWrapper(mojom_types$.UserDefinedType), false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomFileGraph.resolved_constants
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 16, false, codec.String, new codec.PointerTo(mojom_types$.DeclaredConstant), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MojomFileGraph.encodedSize = codec.kStructHeaderSize + 24;

  MojomFileGraph.decode = function(decoder) {
    var packed;
    var val = new MojomFileGraph();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.files = decoder.decodeMapPointer(codec.String, new codec.PointerTo(MojomFile));
    val.resolved_types = decoder.decodeMapPointer(codec.String, new codec.UnionWrapper(mojom_types$.UserDefinedType));
    val.resolved_constants = decoder.decodeMapPointer(codec.String, new codec.PointerTo(mojom_types$.DeclaredConstant));
    return val;
  };

  MojomFileGraph.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MojomFileGraph.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, new codec.PointerTo(MojomFile), val.files);
    encoder.encodeMapPointer(codec.String, new codec.UnionWrapper(mojom_types$.UserDefinedType), val.resolved_types);
    encoder.encodeMapPointer(codec.String, new codec.PointerTo(mojom_types$.DeclaredConstant), val.resolved_constants);
  };

  function KeysByType(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  KeysByType.prototype.initDefaults_ = function() {
    this.interfaces = null;
    this.structs = null;
    this.unions = null;
    this.top_level_enums = null;
    this.embedded_enums = null;
    this.top_level_constants = null;
    this.embedded_constants = null;
  };
  KeysByType.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  KeysByType.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, KeysByType.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate KeysByType.interfaces
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate KeysByType.structs
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate KeysByType.unions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate KeysByType.top_level_enums
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate KeysByType.embedded_enums
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate KeysByType.top_level_constants
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate KeysByType.embedded_constants
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 48, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  KeysByType.encodedSize = codec.kStructHeaderSize + 56;

  KeysByType.decode = function(decoder) {
    var packed;
    var val = new KeysByType();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.interfaces = decoder.decodeArrayPointer(codec.String);
    val.structs = decoder.decodeArrayPointer(codec.String);
    val.unions = decoder.decodeArrayPointer(codec.String);
    val.top_level_enums = decoder.decodeArrayPointer(codec.String);
    val.embedded_enums = decoder.decodeArrayPointer(codec.String);
    val.top_level_constants = decoder.decodeArrayPointer(codec.String);
    val.embedded_constants = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  KeysByType.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(KeysByType.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.interfaces);
    encoder.encodeArrayPointer(codec.String, val.structs);
    encoder.encodeArrayPointer(codec.String, val.unions);
    encoder.encodeArrayPointer(codec.String, val.top_level_enums);
    encoder.encodeArrayPointer(codec.String, val.embedded_enums);
    encoder.encodeArrayPointer(codec.String, val.top_level_constants);
    encoder.encodeArrayPointer(codec.String, val.embedded_constants);
  };


  var exports = {};
  exports.MojomFile = MojomFile;
  exports.MojomFileGraph = MojomFileGraph;
  exports.KeysByType = KeysByType;


  return exports;
});
