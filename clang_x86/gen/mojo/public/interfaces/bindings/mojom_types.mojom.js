// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/mojom_types.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {
  var SimpleType = {};
  SimpleType.BOOL = 0;
  SimpleType.DOUBLE = SimpleType.BOOL + 1;
  SimpleType.FLOAT = SimpleType.DOUBLE + 1;
  SimpleType.INT8 = SimpleType.FLOAT + 1;
  SimpleType.INT16 = SimpleType.INT8 + 1;
  SimpleType.INT32 = SimpleType.INT16 + 1;
  SimpleType.INT64 = SimpleType.INT32 + 1;
  SimpleType.UINT8 = SimpleType.INT64 + 1;
  SimpleType.UINT16 = SimpleType.UINT8 + 1;
  SimpleType.UINT32 = SimpleType.UINT16 + 1;
  SimpleType.UINT64 = SimpleType.UINT32 + 1;
  var BuiltinConstantValue = {};
  BuiltinConstantValue.DOUBLE_INFINITY = 0;
  BuiltinConstantValue.DOUBLE_NEGATIVE_INFINITY = BuiltinConstantValue.DOUBLE_INFINITY + 1;
  BuiltinConstantValue.DOUBLE_NAN = BuiltinConstantValue.DOUBLE_NEGATIVE_INFINITY + 1;
  BuiltinConstantValue.FLOAT_INFINITY = BuiltinConstantValue.DOUBLE_NAN + 1;
  BuiltinConstantValue.FLOAT_NEGATIVE_INFINITY = BuiltinConstantValue.FLOAT_INFINITY + 1;
  BuiltinConstantValue.FLOAT_NAN = BuiltinConstantValue.FLOAT_NEGATIVE_INFINITY + 1;

  function StringType(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StringType.prototype.initDefaults_ = function() {
    this.nullable = false;
  };
  StringType.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StringType.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StringType.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  StringType.encodedSize = codec.kStructHeaderSize + 8;

  StringType.decode = function(decoder) {
    var packed;
    var val = new StringType();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.nullable = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  StringType.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StringType.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.nullable);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function HandleType(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  HandleType.Kind = {};
  HandleType.Kind.UNSPECIFIED = 0;
  HandleType.Kind.MESSAGE_PIPE = HandleType.Kind.UNSPECIFIED + 1;
  HandleType.Kind.DATA_PIPE_CONSUMER = HandleType.Kind.MESSAGE_PIPE + 1;
  HandleType.Kind.DATA_PIPE_PRODUCER = HandleType.Kind.DATA_PIPE_CONSUMER + 1;
  HandleType.Kind.SHARED_BUFFER = HandleType.Kind.DATA_PIPE_PRODUCER + 1;

  HandleType.prototype.initDefaults_ = function() {
    this.nullable = false;
    this.kind = HandleType.Kind.UNSPECIFIED;
  };
  HandleType.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HandleType.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, HandleType.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  HandleType.encodedSize = codec.kStructHeaderSize + 8;

  HandleType.decode = function(decoder) {
    var packed;
    var val = new HandleType();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.nullable = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.kind = decoder.decodeStruct(codec.Int32);
    return val;
  };

  HandleType.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HandleType.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.nullable);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.kind);
  };

  function ArrayType(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ArrayType.prototype.initDefaults_ = function() {
    this.nullable = false;
    this.fixed_length = -1;
    this.element_type = null;
  };
  ArrayType.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ArrayType.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ArrayType.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate ArrayType.element_type
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, Type, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ArrayType.encodedSize = codec.kStructHeaderSize + 24;

  ArrayType.decode = function(decoder) {
    var packed;
    var val = new ArrayType();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.nullable = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.fixed_length = decoder.decodeStruct(codec.Int32);
    val.element_type = decoder.decodeStruct(Type);
    return val;
  };

  ArrayType.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ArrayType.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.nullable);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.fixed_length);
    encoder.encodeStruct(Type, val.element_type);
  };

  function MapType(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MapType.prototype.initDefaults_ = function() {
    this.nullable = false;
    this.key_type = null;
    this.value_type = null;
  };
  MapType.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MapType.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MapType.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MapType.key_type
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, Type, false);
    if (err !== validator.validationError.NONE)
        return err;

    // validate MapType.value_type
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 24, Type, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MapType.encodedSize = codec.kStructHeaderSize + 40;

  MapType.decode = function(decoder) {
    var packed;
    var val = new MapType();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.nullable = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.key_type = decoder.decodeStruct(Type);
    val.value_type = decoder.decodeStruct(Type);
    return val;
  };

  MapType.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MapType.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.nullable);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(Type, val.key_type);
    encoder.encodeStruct(Type, val.value_type);
  };

  function TypeReference(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TypeReference.prototype.initDefaults_ = function() {
    this.nullable = false;
    this.is_interface_request = false;
    this.identifier = null;
    this.type_key = null;
  };
  TypeReference.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TypeReference.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TypeReference.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate TypeReference.identifier
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TypeReference.type_key
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TypeReference.encodedSize = codec.kStructHeaderSize + 24;

  TypeReference.decode = function(decoder) {
    var packed;
    var val = new TypeReference();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.nullable = (packed >> 0) & 1 ? true : false;
    val.is_interface_request = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.identifier = decoder.decodeStruct(codec.NullableString);
    val.type_key = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  TypeReference.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TypeReference.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.nullable & 1) << 0
    packed |= (val.is_interface_request & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.NullableString, val.identifier);
    encoder.encodeStruct(codec.NullableString, val.type_key);
  };

  function StructField(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructField.prototype.initDefaults_ = function() {
    this.decl_data = null;
    this.type = null;
    this.default_value = null;
    this.offset = 0;
    this.bit = 0;
    this.min_version = 0;
  };
  StructField.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructField.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructField.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructField.decl_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DeclarationData, true);
    if (err !== validator.validationError.NONE)
        return err;

    // validate StructField.type
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, Type, false);
    if (err !== validator.validationError.NONE)
        return err;

    // validate StructField.default_value
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 24, DefaultFieldValue, true);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  StructField.encodedSize = codec.kStructHeaderSize + 56;

  StructField.decode = function(decoder) {
    var packed;
    var val = new StructField();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.decl_data = decoder.decodeStructPointer(DeclarationData);
    val.type = decoder.decodeStruct(Type);
    val.default_value = decoder.decodeStruct(DefaultFieldValue);
    val.offset = decoder.decodeStruct(codec.Uint32);
    val.bit = decoder.decodeStruct(codec.Int8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.min_version = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  StructField.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructField.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DeclarationData, val.decl_data);
    encoder.encodeStruct(Type, val.type);
    encoder.encodeStruct(DefaultFieldValue, val.default_value);
    encoder.encodeStruct(codec.Uint32, val.offset);
    encoder.encodeStruct(codec.Int8, val.bit);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.min_version);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function DefaultKeyword(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DefaultKeyword.prototype.initDefaults_ = function() {
  };
  DefaultKeyword.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DefaultKeyword.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, DefaultKeyword.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DefaultKeyword.encodedSize = codec.kStructHeaderSize + 0;

  DefaultKeyword.decode = function(decoder) {
    var packed;
    var val = new DefaultKeyword();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  DefaultKeyword.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DefaultKeyword.encodedSize);
    encoder.writeUint32(0);
  };

  function StructVersion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructVersion.prototype.initDefaults_ = function() {
    this.version_number = 0;
    this.num_fields = 0;
    this.num_bytes = 0;
  };
  StructVersion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructVersion.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructVersion.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  StructVersion.encodedSize = codec.kStructHeaderSize + 16;

  StructVersion.decode = function(decoder) {
    var packed;
    var val = new StructVersion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.version_number = decoder.decodeStruct(codec.Uint32);
    val.num_fields = decoder.decodeStruct(codec.Uint32);
    val.num_bytes = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  StructVersion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructVersion.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.version_number);
    encoder.encodeStruct(codec.Uint32, val.num_fields);
    encoder.encodeStruct(codec.Uint32, val.num_bytes);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function MojomStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MojomStruct.prototype.initDefaults_ = function() {
    this.decl_data = null;
    this.fields = null;
    this.version_info = null;
  };
  MojomStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MojomStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MojomStruct.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomStruct.decl_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DeclarationData, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomStruct.fields
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(StructField), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomStruct.version_info
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(StructVersion), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MojomStruct.encodedSize = codec.kStructHeaderSize + 24;

  MojomStruct.decode = function(decoder) {
    var packed;
    var val = new MojomStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.decl_data = decoder.decodeStructPointer(DeclarationData);
    val.fields = decoder.decodeArrayPointer(new codec.PointerTo(StructField));
    val.version_info = decoder.decodeArrayPointer(new codec.PointerTo(StructVersion));
    return val;
  };

  MojomStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MojomStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DeclarationData, val.decl_data);
    encoder.encodeArrayPointer(new codec.PointerTo(StructField), val.fields);
    encoder.encodeArrayPointer(new codec.PointerTo(StructVersion), val.version_info);
  };

  function UnionField(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UnionField.prototype.initDefaults_ = function() {
    this.decl_data = null;
    this.type = null;
    this.tag = 0;
  };
  UnionField.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UnionField.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, UnionField.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate UnionField.decl_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DeclarationData, true);
    if (err !== validator.validationError.NONE)
        return err;

    // validate UnionField.type
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, Type, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  UnionField.encodedSize = codec.kStructHeaderSize + 32;

  UnionField.decode = function(decoder) {
    var packed;
    var val = new UnionField();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.decl_data = decoder.decodeStructPointer(DeclarationData);
    val.type = decoder.decodeStruct(Type);
    val.tag = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  UnionField.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UnionField.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DeclarationData, val.decl_data);
    encoder.encodeStruct(Type, val.type);
    encoder.encodeStruct(codec.Uint32, val.tag);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function MojomUnion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MojomUnion.prototype.initDefaults_ = function() {
    this.decl_data = null;
    this.fields = null;
  };
  MojomUnion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MojomUnion.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MojomUnion.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomUnion.decl_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DeclarationData, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomUnion.fields
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(UnionField), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MojomUnion.encodedSize = codec.kStructHeaderSize + 16;

  MojomUnion.decode = function(decoder) {
    var packed;
    var val = new MojomUnion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.decl_data = decoder.decodeStructPointer(DeclarationData);
    val.fields = decoder.decodeArrayPointer(new codec.PointerTo(UnionField));
    return val;
  };

  MojomUnion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MojomUnion.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DeclarationData, val.decl_data);
    encoder.encodeArrayPointer(new codec.PointerTo(UnionField), val.fields);
  };

  function EnumValue(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EnumValue.prototype.initDefaults_ = function() {
    this.decl_data = null;
    this.initializer_value = null;
    this.int_value = 0;
  };
  EnumValue.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EnumValue.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, EnumValue.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate EnumValue.decl_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DeclarationData, true);
    if (err !== validator.validationError.NONE)
        return err;

    // validate EnumValue.initializer_value
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, Value, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  EnumValue.encodedSize = codec.kStructHeaderSize + 32;

  EnumValue.decode = function(decoder) {
    var packed;
    var val = new EnumValue();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.decl_data = decoder.decodeStructPointer(DeclarationData);
    val.initializer_value = decoder.decodeStruct(Value);
    val.int_value = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  EnumValue.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EnumValue.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DeclarationData, val.decl_data);
    encoder.encodeStruct(Value, val.initializer_value);
    encoder.encodeStruct(codec.Int32, val.int_value);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function MojomEnum(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MojomEnum.prototype.initDefaults_ = function() {
    this.decl_data = null;
    this.values = null;
  };
  MojomEnum.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MojomEnum.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MojomEnum.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomEnum.decl_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DeclarationData, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomEnum.values
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(EnumValue), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MojomEnum.encodedSize = codec.kStructHeaderSize + 16;

  MojomEnum.decode = function(decoder) {
    var packed;
    var val = new MojomEnum();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.decl_data = decoder.decodeStructPointer(DeclarationData);
    val.values = decoder.decodeArrayPointer(new codec.PointerTo(EnumValue));
    return val;
  };

  MojomEnum.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MojomEnum.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DeclarationData, val.decl_data);
    encoder.encodeArrayPointer(new codec.PointerTo(EnumValue), val.values);
  };

  function MojomMethod(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MojomMethod.prototype.initDefaults_ = function() {
    this.decl_data = null;
    this.parameters = null;
    this.response_params = null;
    this.ordinal = 0;
    this.min_version = 0;
  };
  MojomMethod.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MojomMethod.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MojomMethod.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomMethod.decl_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DeclarationData, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomMethod.parameters
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, MojomStruct, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomMethod.response_params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, MojomStruct, true);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  MojomMethod.encodedSize = codec.kStructHeaderSize + 32;

  MojomMethod.decode = function(decoder) {
    var packed;
    var val = new MojomMethod();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.decl_data = decoder.decodeStructPointer(DeclarationData);
    val.parameters = decoder.decodeStructPointer(MojomStruct);
    val.response_params = decoder.decodeStructPointer(MojomStruct);
    val.ordinal = decoder.decodeStruct(codec.Uint32);
    val.min_version = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  MojomMethod.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MojomMethod.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DeclarationData, val.decl_data);
    encoder.encodeStructPointer(MojomStruct, val.parameters);
    encoder.encodeStructPointer(MojomStruct, val.response_params);
    encoder.encodeStruct(codec.Uint32, val.ordinal);
    encoder.encodeStruct(codec.Uint32, val.min_version);
  };

  function MojomInterface(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MojomInterface.prototype.initDefaults_ = function() {
    this.decl_data = null;
    this.service_name = null;
    this.methods = null;
    this.current_version = 0;
  };
  MojomInterface.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MojomInterface.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, MojomInterface.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomInterface.decl_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DeclarationData, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomInterface.service_name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate MojomInterface.methods
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 16, false, codec.Uint32, new codec.PointerTo(MojomMethod), false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  MojomInterface.encodedSize = codec.kStructHeaderSize + 32;

  MojomInterface.decode = function(decoder) {
    var packed;
    var val = new MojomInterface();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.decl_data = decoder.decodeStructPointer(DeclarationData);
    val.service_name = decoder.decodeStruct(codec.NullableString);
    val.methods = decoder.decodeMapPointer(codec.Uint32, new codec.PointerTo(MojomMethod));
    val.current_version = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MojomInterface.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MojomInterface.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DeclarationData, val.decl_data);
    encoder.encodeStruct(codec.NullableString, val.service_name);
    encoder.encodeMapPointer(codec.Uint32, new codec.PointerTo(MojomMethod), val.methods);
    encoder.encodeStruct(codec.Uint32, val.current_version);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ConstantReference(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConstantReference.prototype.initDefaults_ = function() {
    this.identifier = null;
    this.constant_key = null;
  };
  ConstantReference.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConstantReference.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConstantReference.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConstantReference.identifier
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConstantReference.constant_key
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConstantReference.encodedSize = codec.kStructHeaderSize + 16;

  ConstantReference.decode = function(decoder) {
    var packed;
    var val = new ConstantReference();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.identifier = decoder.decodeStruct(codec.String);
    val.constant_key = decoder.decodeStruct(codec.String);
    return val;
  };

  ConstantReference.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConstantReference.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.identifier);
    encoder.encodeStruct(codec.String, val.constant_key);
  };

  function EnumValueReference(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EnumValueReference.prototype.initDefaults_ = function() {
    this.identifier = null;
    this.enum_type_key = null;
    this.enum_value_index = 0;
  };
  EnumValueReference.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EnumValueReference.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, EnumValueReference.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate EnumValueReference.identifier
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate EnumValueReference.enum_type_key
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  EnumValueReference.encodedSize = codec.kStructHeaderSize + 24;

  EnumValueReference.decode = function(decoder) {
    var packed;
    var val = new EnumValueReference();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.identifier = decoder.decodeStruct(codec.String);
    val.enum_type_key = decoder.decodeStruct(codec.String);
    val.enum_value_index = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  EnumValueReference.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EnumValueReference.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.identifier);
    encoder.encodeStruct(codec.String, val.enum_type_key);
    encoder.encodeStruct(codec.Uint32, val.enum_value_index);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function DeclaredConstant(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DeclaredConstant.prototype.initDefaults_ = function() {
    this.decl_data = null;
    this.type = null;
    this.value = null;
    this.resolved_concrete_value = null;
  };
  DeclaredConstant.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DeclaredConstant.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, DeclaredConstant.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate DeclaredConstant.decl_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DeclarationData, false);
    if (err !== validator.validationError.NONE)
        return err;

    // validate DeclaredConstant.type
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, Type, false);
    if (err !== validator.validationError.NONE)
        return err;

    // validate DeclaredConstant.value
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 24, Value, false);
    if (err !== validator.validationError.NONE)
        return err;

    // validate DeclaredConstant.resolved_concrete_value
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 40, Value, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DeclaredConstant.encodedSize = codec.kStructHeaderSize + 56;

  DeclaredConstant.decode = function(decoder) {
    var packed;
    var val = new DeclaredConstant();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.decl_data = decoder.decodeStructPointer(DeclarationData);
    val.type = decoder.decodeStruct(Type);
    val.value = decoder.decodeStruct(Value);
    val.resolved_concrete_value = decoder.decodeStruct(Value);
    return val;
  };

  DeclaredConstant.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DeclaredConstant.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DeclarationData, val.decl_data);
    encoder.encodeStruct(Type, val.type);
    encoder.encodeStruct(Value, val.value);
    encoder.encodeStruct(Value, val.resolved_concrete_value);
  };

  function Attribute(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Attribute.prototype.initDefaults_ = function() {
    this.key = null;
    this.value = null;
  };
  Attribute.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Attribute.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Attribute.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Attribute.key
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    // validate Attribute.value
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, LiteralValue, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Attribute.encodedSize = codec.kStructHeaderSize + 24;

  Attribute.decode = function(decoder) {
    var packed;
    var val = new Attribute();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key = decoder.decodeStruct(codec.String);
    val.value = decoder.decodeStruct(LiteralValue);
    return val;
  };

  Attribute.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Attribute.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.key);
    encoder.encodeStruct(LiteralValue, val.value);
  };

  function DeclarationData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DeclarationData.prototype.initDefaults_ = function() {
    this.attributes = null;
    this.short_name = null;
    this.full_identifier = null;
    this.declared_ordinal = -1;
    this.declaration_order = -1;
    this.source_file_info = null;
    this.contained_declarations = null;
    this.container_type_key = null;
  };
  DeclarationData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DeclarationData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, DeclarationData.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate DeclarationData.attributes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(Attribute), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate DeclarationData.short_name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate DeclarationData.full_identifier
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate DeclarationData.source_file_info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, SourceFileInfo, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate DeclarationData.contained_declarations
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, ContainedDeclarations, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate DeclarationData.container_type_key
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DeclarationData.encodedSize = codec.kStructHeaderSize + 56;

  DeclarationData.decode = function(decoder) {
    var packed;
    var val = new DeclarationData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.attributes = decoder.decodeArrayPointer(new codec.PointerTo(Attribute));
    val.short_name = decoder.decodeStruct(codec.NullableString);
    val.full_identifier = decoder.decodeStruct(codec.NullableString);
    val.declared_ordinal = decoder.decodeStruct(codec.Int32);
    val.declaration_order = decoder.decodeStruct(codec.Int32);
    val.source_file_info = decoder.decodeStructPointer(SourceFileInfo);
    val.contained_declarations = decoder.decodeStructPointer(ContainedDeclarations);
    val.container_type_key = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  DeclarationData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DeclarationData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(Attribute), val.attributes);
    encoder.encodeStruct(codec.NullableString, val.short_name);
    encoder.encodeStruct(codec.NullableString, val.full_identifier);
    encoder.encodeStruct(codec.Int32, val.declared_ordinal);
    encoder.encodeStruct(codec.Int32, val.declaration_order);
    encoder.encodeStructPointer(SourceFileInfo, val.source_file_info);
    encoder.encodeStructPointer(ContainedDeclarations, val.contained_declarations);
    encoder.encodeStruct(codec.NullableString, val.container_type_key);
  };

  function SourceFileInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SourceFileInfo.prototype.initDefaults_ = function() {
    this.file_name = null;
    this.line_number = 0;
    this.column_number = 0;
  };
  SourceFileInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SourceFileInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SourceFileInfo.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SourceFileInfo.file_name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  SourceFileInfo.encodedSize = codec.kStructHeaderSize + 16;

  SourceFileInfo.decode = function(decoder) {
    var packed;
    var val = new SourceFileInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.file_name = decoder.decodeStruct(codec.String);
    val.line_number = decoder.decodeStruct(codec.Uint32);
    val.column_number = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  SourceFileInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SourceFileInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.file_name);
    encoder.encodeStruct(codec.Uint32, val.line_number);
    encoder.encodeStruct(codec.Uint32, val.column_number);
  };

  function ContainedDeclarations(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContainedDeclarations.prototype.initDefaults_ = function() {
    this.enums = null;
    this.constants = null;
  };
  ContainedDeclarations.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContainedDeclarations.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContainedDeclarations.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContainedDeclarations.enums
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContainedDeclarations.constants
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContainedDeclarations.encodedSize = codec.kStructHeaderSize + 16;

  ContainedDeclarations.decode = function(decoder) {
    var packed;
    var val = new ContainedDeclarations();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.enums = decoder.decodeArrayPointer(codec.String);
    val.constants = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  ContainedDeclarations.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContainedDeclarations.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.enums);
    encoder.encodeArrayPointer(codec.String, val.constants);
  };

  function RuntimeTypeInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RuntimeTypeInfo.prototype.initDefaults_ = function() {
    this.services = null;
    this.type_map = null;
  };
  RuntimeTypeInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RuntimeTypeInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, RuntimeTypeInfo.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate RuntimeTypeInfo.services
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate RuntimeTypeInfo.type_map
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 8, false, codec.String, new codec.UnionWrapper(UserDefinedType), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RuntimeTypeInfo.encodedSize = codec.kStructHeaderSize + 16;

  RuntimeTypeInfo.decode = function(decoder) {
    var packed;
    var val = new RuntimeTypeInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.services = decoder.decodeMapPointer(codec.String, codec.String);
    val.type_map = decoder.decodeMapPointer(codec.String, new codec.UnionWrapper(UserDefinedType));
    return val;
  };

  RuntimeTypeInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RuntimeTypeInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, codec.String, val.services);
    encoder.encodeMapPointer(codec.String, new codec.UnionWrapper(UserDefinedType), val.type_map);
  };


  function Type(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  Type.Tags = {
    simple_type: 0,
    string_type: 1,
    array_type: 2,
    map_type: 3,
    handle_type: 4,
    type_reference: 5,
  };
  
  Type.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  Type.prototype.initValue_ = function(value) {
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
        "simple_type",
        "string_type",
        "array_type",
        "map_type",
        "handle_type",
        "type_reference",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a Type member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(Type.prototype, "simple_type", {
    get: function() {
      if (this.$tag != Type.Tags.simple_type) {
        throw new ReferenceError(
            "Type.simple_type is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = Type.Tags.simple_type;
      this.$data = value;
    }
  });
  Object.defineProperty(Type.prototype, "string_type", {
    get: function() {
      if (this.$tag != Type.Tags.string_type) {
        throw new ReferenceError(
            "Type.string_type is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = Type.Tags.string_type;
      this.$data = value;
    }
  });
  Object.defineProperty(Type.prototype, "array_type", {
    get: function() {
      if (this.$tag != Type.Tags.array_type) {
        throw new ReferenceError(
            "Type.array_type is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = Type.Tags.array_type;
      this.$data = value;
    }
  });
  Object.defineProperty(Type.prototype, "map_type", {
    get: function() {
      if (this.$tag != Type.Tags.map_type) {
        throw new ReferenceError(
            "Type.map_type is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = Type.Tags.map_type;
      this.$data = value;
    }
  });
  Object.defineProperty(Type.prototype, "handle_type", {
    get: function() {
      if (this.$tag != Type.Tags.handle_type) {
        throw new ReferenceError(
            "Type.handle_type is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = Type.Tags.handle_type;
      this.$data = value;
    }
  });
  Object.defineProperty(Type.prototype, "type_reference", {
    get: function() {
      if (this.$tag != Type.Tags.type_reference) {
        throw new ReferenceError(
            "Type.type_reference is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = Type.Tags.type_reference;
      this.$data = value;
    }
  });
  
  
    Type.encode = function(encoder, val) {
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
        case Type.Tags.simple_type:
          encoder.encodeStruct(codec.Int32, val.simple_type);
          break;
        case Type.Tags.string_type:
          encoder.encodeStructPointer(StringType, val.string_type);
          break;
        case Type.Tags.array_type:
          encoder.encodeStructPointer(ArrayType, val.array_type);
          break;
        case Type.Tags.map_type:
          encoder.encodeStructPointer(MapType, val.map_type);
          break;
        case Type.Tags.handle_type:
          encoder.encodeStructPointer(HandleType, val.handle_type);
          break;
        case Type.Tags.type_reference:
          encoder.encodeStructPointer(TypeReference, val.type_reference);
          break;
      }
      encoder.align();
    };
  
  
    Type.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new Type();
      var tag = decoder.readUint32();
      switch (tag) {
        case Type.Tags.simple_type:
          result.simple_type = decoder.decodeStruct(codec.Int32);
          break;
        case Type.Tags.string_type:
          result.string_type = decoder.decodeStructPointer(StringType);
          break;
        case Type.Tags.array_type:
          result.array_type = decoder.decodeStructPointer(ArrayType);
          break;
        case Type.Tags.map_type:
          result.map_type = decoder.decodeStructPointer(MapType);
          break;
        case Type.Tags.handle_type:
          result.handle_type = decoder.decodeStructPointer(HandleType);
          break;
        case Type.Tags.type_reference:
          result.type_reference = decoder.decodeStructPointer(TypeReference);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    Type.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case Type.Tags.simple_type:
          
    
          break;
        case Type.Tags.string_type:
          
    
    // validate Type.string_type
    err = messageValidator.validateStructPointer(data_offset, StringType, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case Type.Tags.array_type:
          
    
    // validate Type.array_type
    err = messageValidator.validateStructPointer(data_offset, ArrayType, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case Type.Tags.map_type:
          
    
    // validate Type.map_type
    err = messageValidator.validateStructPointer(data_offset, MapType, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case Type.Tags.handle_type:
          
    
    // validate Type.handle_type
    err = messageValidator.validateStructPointer(data_offset, HandleType, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case Type.Tags.type_reference:
          
    
    // validate Type.type_reference
    err = messageValidator.validateStructPointer(data_offset, TypeReference, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  Type.encodedSize = 16;

  function UserDefinedType(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  UserDefinedType.Tags = {
    enum_type: 0,
    struct_type: 1,
    union_type: 2,
    interface_type: 3,
  };
  
  UserDefinedType.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  UserDefinedType.prototype.initValue_ = function(value) {
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
        "enum_type",
        "struct_type",
        "union_type",
        "interface_type",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a UserDefinedType member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(UserDefinedType.prototype, "enum_type", {
    get: function() {
      if (this.$tag != UserDefinedType.Tags.enum_type) {
        throw new ReferenceError(
            "UserDefinedType.enum_type is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UserDefinedType.Tags.enum_type;
      this.$data = value;
    }
  });
  Object.defineProperty(UserDefinedType.prototype, "struct_type", {
    get: function() {
      if (this.$tag != UserDefinedType.Tags.struct_type) {
        throw new ReferenceError(
            "UserDefinedType.struct_type is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UserDefinedType.Tags.struct_type;
      this.$data = value;
    }
  });
  Object.defineProperty(UserDefinedType.prototype, "union_type", {
    get: function() {
      if (this.$tag != UserDefinedType.Tags.union_type) {
        throw new ReferenceError(
            "UserDefinedType.union_type is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UserDefinedType.Tags.union_type;
      this.$data = value;
    }
  });
  Object.defineProperty(UserDefinedType.prototype, "interface_type", {
    get: function() {
      if (this.$tag != UserDefinedType.Tags.interface_type) {
        throw new ReferenceError(
            "UserDefinedType.interface_type is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UserDefinedType.Tags.interface_type;
      this.$data = value;
    }
  });
  
  
    UserDefinedType.encode = function(encoder, val) {
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
        case UserDefinedType.Tags.enum_type:
          encoder.encodeStructPointer(MojomEnum, val.enum_type);
          break;
        case UserDefinedType.Tags.struct_type:
          encoder.encodeStructPointer(MojomStruct, val.struct_type);
          break;
        case UserDefinedType.Tags.union_type:
          encoder.encodeStructPointer(MojomUnion, val.union_type);
          break;
        case UserDefinedType.Tags.interface_type:
          encoder.encodeStructPointer(MojomInterface, val.interface_type);
          break;
      }
      encoder.align();
    };
  
  
    UserDefinedType.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new UserDefinedType();
      var tag = decoder.readUint32();
      switch (tag) {
        case UserDefinedType.Tags.enum_type:
          result.enum_type = decoder.decodeStructPointer(MojomEnum);
          break;
        case UserDefinedType.Tags.struct_type:
          result.struct_type = decoder.decodeStructPointer(MojomStruct);
          break;
        case UserDefinedType.Tags.union_type:
          result.union_type = decoder.decodeStructPointer(MojomUnion);
          break;
        case UserDefinedType.Tags.interface_type:
          result.interface_type = decoder.decodeStructPointer(MojomInterface);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    UserDefinedType.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case UserDefinedType.Tags.enum_type:
          
    
    // validate UserDefinedType.enum_type
    err = messageValidator.validateStructPointer(data_offset, MojomEnum, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UserDefinedType.Tags.struct_type:
          
    
    // validate UserDefinedType.struct_type
    err = messageValidator.validateStructPointer(data_offset, MojomStruct, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UserDefinedType.Tags.union_type:
          
    
    // validate UserDefinedType.union_type
    err = messageValidator.validateStructPointer(data_offset, MojomUnion, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UserDefinedType.Tags.interface_type:
          
    
    // validate UserDefinedType.interface_type
    err = messageValidator.validateStructPointer(data_offset, MojomInterface, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  UserDefinedType.encodedSize = 16;

  function DefaultFieldValue(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  DefaultFieldValue.Tags = {
    value: 0,
    default_keyword: 1,
  };
  
  DefaultFieldValue.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  DefaultFieldValue.prototype.initValue_ = function(value) {
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
        "value",
        "default_keyword",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a DefaultFieldValue member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(DefaultFieldValue.prototype, "value", {
    get: function() {
      if (this.$tag != DefaultFieldValue.Tags.value) {
        throw new ReferenceError(
            "DefaultFieldValue.value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = DefaultFieldValue.Tags.value;
      this.$data = value;
    }
  });
  Object.defineProperty(DefaultFieldValue.prototype, "default_keyword", {
    get: function() {
      if (this.$tag != DefaultFieldValue.Tags.default_keyword) {
        throw new ReferenceError(
            "DefaultFieldValue.default_keyword is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = DefaultFieldValue.Tags.default_keyword;
      this.$data = value;
    }
  });
  
  
    DefaultFieldValue.encode = function(encoder, val) {
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
        case DefaultFieldValue.Tags.value:
          encoder.encodeStructPointer(Value, val.value);
          break;
        case DefaultFieldValue.Tags.default_keyword:
          encoder.encodeStructPointer(DefaultKeyword, val.default_keyword);
          break;
      }
      encoder.align();
    };
  
  
    DefaultFieldValue.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new DefaultFieldValue();
      var tag = decoder.readUint32();
      switch (tag) {
        case DefaultFieldValue.Tags.value:
          result.value = decoder.decodeStructPointer(Value);
          break;
        case DefaultFieldValue.Tags.default_keyword:
          result.default_keyword = decoder.decodeStructPointer(DefaultKeyword);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    DefaultFieldValue.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case DefaultFieldValue.Tags.value:
          
    // validate DefaultFieldValue.value
    err = messageValidator.validateNestedUnion(data_offset, Value, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DefaultFieldValue.Tags.default_keyword:
          
    
    // validate DefaultFieldValue.default_keyword
    err = messageValidator.validateStructPointer(data_offset, DefaultKeyword, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  DefaultFieldValue.encodedSize = 16;

  function Value(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  Value.Tags = {
    literal_value: 0,
    constant_reference: 1,
    enum_value_reference: 2,
    builtin_value: 3,
  };
  
  Value.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  Value.prototype.initValue_ = function(value) {
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
        "literal_value",
        "constant_reference",
        "enum_value_reference",
        "builtin_value",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a Value member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(Value.prototype, "literal_value", {
    get: function() {
      if (this.$tag != Value.Tags.literal_value) {
        throw new ReferenceError(
            "Value.literal_value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = Value.Tags.literal_value;
      this.$data = value;
    }
  });
  Object.defineProperty(Value.prototype, "constant_reference", {
    get: function() {
      if (this.$tag != Value.Tags.constant_reference) {
        throw new ReferenceError(
            "Value.constant_reference is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = Value.Tags.constant_reference;
      this.$data = value;
    }
  });
  Object.defineProperty(Value.prototype, "enum_value_reference", {
    get: function() {
      if (this.$tag != Value.Tags.enum_value_reference) {
        throw new ReferenceError(
            "Value.enum_value_reference is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = Value.Tags.enum_value_reference;
      this.$data = value;
    }
  });
  Object.defineProperty(Value.prototype, "builtin_value", {
    get: function() {
      if (this.$tag != Value.Tags.builtin_value) {
        throw new ReferenceError(
            "Value.builtin_value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = Value.Tags.builtin_value;
      this.$data = value;
    }
  });
  
  
    Value.encode = function(encoder, val) {
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
        case Value.Tags.literal_value:
          encoder.encodeStructPointer(LiteralValue, val.literal_value);
          break;
        case Value.Tags.constant_reference:
          encoder.encodeStructPointer(ConstantReference, val.constant_reference);
          break;
        case Value.Tags.enum_value_reference:
          encoder.encodeStructPointer(EnumValueReference, val.enum_value_reference);
          break;
        case Value.Tags.builtin_value:
          encoder.encodeStruct(codec.Int32, val.builtin_value);
          break;
      }
      encoder.align();
    };
  
  
    Value.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new Value();
      var tag = decoder.readUint32();
      switch (tag) {
        case Value.Tags.literal_value:
          result.literal_value = decoder.decodeStructPointer(LiteralValue);
          break;
        case Value.Tags.constant_reference:
          result.constant_reference = decoder.decodeStructPointer(ConstantReference);
          break;
        case Value.Tags.enum_value_reference:
          result.enum_value_reference = decoder.decodeStructPointer(EnumValueReference);
          break;
        case Value.Tags.builtin_value:
          result.builtin_value = decoder.decodeStruct(codec.Int32);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    Value.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case Value.Tags.literal_value:
          
    // validate Value.literal_value
    err = messageValidator.validateNestedUnion(data_offset, LiteralValue, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case Value.Tags.constant_reference:
          
    
    // validate Value.constant_reference
    err = messageValidator.validateStructPointer(data_offset, ConstantReference, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case Value.Tags.enum_value_reference:
          
    
    // validate Value.enum_value_reference
    err = messageValidator.validateStructPointer(data_offset, EnumValueReference, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case Value.Tags.builtin_value:
          
    
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  Value.encodedSize = 16;

  function LiteralValue(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  LiteralValue.Tags = {
    bool_value: 0,
    double_value: 1,
    float_value: 2,
    int8_value: 3,
    int16_value: 4,
    int32_value: 5,
    int64_value: 6,
    string_value: 7,
    uint8_value: 8,
    uint16_value: 9,
    uint32_value: 10,
    uint64_value: 11,
  };
  
  LiteralValue.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  LiteralValue.prototype.initValue_ = function(value) {
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
        "bool_value",
        "double_value",
        "float_value",
        "int8_value",
        "int16_value",
        "int32_value",
        "int64_value",
        "string_value",
        "uint8_value",
        "uint16_value",
        "uint32_value",
        "uint64_value",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a LiteralValue member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(LiteralValue.prototype, "bool_value", {
    get: function() {
      if (this.$tag != LiteralValue.Tags.bool_value) {
        throw new ReferenceError(
            "LiteralValue.bool_value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = LiteralValue.Tags.bool_value;
      this.$data = value;
    }
  });
  Object.defineProperty(LiteralValue.prototype, "double_value", {
    get: function() {
      if (this.$tag != LiteralValue.Tags.double_value) {
        throw new ReferenceError(
            "LiteralValue.double_value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = LiteralValue.Tags.double_value;
      this.$data = value;
    }
  });
  Object.defineProperty(LiteralValue.prototype, "float_value", {
    get: function() {
      if (this.$tag != LiteralValue.Tags.float_value) {
        throw new ReferenceError(
            "LiteralValue.float_value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = LiteralValue.Tags.float_value;
      this.$data = value;
    }
  });
  Object.defineProperty(LiteralValue.prototype, "int8_value", {
    get: function() {
      if (this.$tag != LiteralValue.Tags.int8_value) {
        throw new ReferenceError(
            "LiteralValue.int8_value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = LiteralValue.Tags.int8_value;
      this.$data = value;
    }
  });
  Object.defineProperty(LiteralValue.prototype, "int16_value", {
    get: function() {
      if (this.$tag != LiteralValue.Tags.int16_value) {
        throw new ReferenceError(
            "LiteralValue.int16_value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = LiteralValue.Tags.int16_value;
      this.$data = value;
    }
  });
  Object.defineProperty(LiteralValue.prototype, "int32_value", {
    get: function() {
      if (this.$tag != LiteralValue.Tags.int32_value) {
        throw new ReferenceError(
            "LiteralValue.int32_value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = LiteralValue.Tags.int32_value;
      this.$data = value;
    }
  });
  Object.defineProperty(LiteralValue.prototype, "int64_value", {
    get: function() {
      if (this.$tag != LiteralValue.Tags.int64_value) {
        throw new ReferenceError(
            "LiteralValue.int64_value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = LiteralValue.Tags.int64_value;
      this.$data = value;
    }
  });
  Object.defineProperty(LiteralValue.prototype, "string_value", {
    get: function() {
      if (this.$tag != LiteralValue.Tags.string_value) {
        throw new ReferenceError(
            "LiteralValue.string_value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = LiteralValue.Tags.string_value;
      this.$data = value;
    }
  });
  Object.defineProperty(LiteralValue.prototype, "uint8_value", {
    get: function() {
      if (this.$tag != LiteralValue.Tags.uint8_value) {
        throw new ReferenceError(
            "LiteralValue.uint8_value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = LiteralValue.Tags.uint8_value;
      this.$data = value;
    }
  });
  Object.defineProperty(LiteralValue.prototype, "uint16_value", {
    get: function() {
      if (this.$tag != LiteralValue.Tags.uint16_value) {
        throw new ReferenceError(
            "LiteralValue.uint16_value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = LiteralValue.Tags.uint16_value;
      this.$data = value;
    }
  });
  Object.defineProperty(LiteralValue.prototype, "uint32_value", {
    get: function() {
      if (this.$tag != LiteralValue.Tags.uint32_value) {
        throw new ReferenceError(
            "LiteralValue.uint32_value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = LiteralValue.Tags.uint32_value;
      this.$data = value;
    }
  });
  Object.defineProperty(LiteralValue.prototype, "uint64_value", {
    get: function() {
      if (this.$tag != LiteralValue.Tags.uint64_value) {
        throw new ReferenceError(
            "LiteralValue.uint64_value is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = LiteralValue.Tags.uint64_value;
      this.$data = value;
    }
  });
  
  
    LiteralValue.encode = function(encoder, val) {
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
        case LiteralValue.Tags.bool_value:
          encoder.encodeStruct(codec.Uint8, val.bool_value);
          break;
        case LiteralValue.Tags.double_value:
          encoder.encodeStruct(codec.Double, val.double_value);
          break;
        case LiteralValue.Tags.float_value:
          encoder.encodeStruct(codec.Float, val.float_value);
          break;
        case LiteralValue.Tags.int8_value:
          encoder.encodeStruct(codec.Int8, val.int8_value);
          break;
        case LiteralValue.Tags.int16_value:
          encoder.encodeStruct(codec.Int16, val.int16_value);
          break;
        case LiteralValue.Tags.int32_value:
          encoder.encodeStruct(codec.Int32, val.int32_value);
          break;
        case LiteralValue.Tags.int64_value:
          encoder.encodeStruct(codec.Int64, val.int64_value);
          break;
        case LiteralValue.Tags.string_value:
          encoder.encodeStruct(codec.String, val.string_value);
          break;
        case LiteralValue.Tags.uint8_value:
          encoder.encodeStruct(codec.Uint8, val.uint8_value);
          break;
        case LiteralValue.Tags.uint16_value:
          encoder.encodeStruct(codec.Uint16, val.uint16_value);
          break;
        case LiteralValue.Tags.uint32_value:
          encoder.encodeStruct(codec.Uint32, val.uint32_value);
          break;
        case LiteralValue.Tags.uint64_value:
          encoder.encodeStruct(codec.Uint64, val.uint64_value);
          break;
      }
      encoder.align();
    };
  
  
    LiteralValue.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new LiteralValue();
      var tag = decoder.readUint32();
      switch (tag) {
        case LiteralValue.Tags.bool_value:
          result.bool_value = decoder.decodeStruct(codec.Uint8);
          break;
        case LiteralValue.Tags.double_value:
          result.double_value = decoder.decodeStruct(codec.Double);
          break;
        case LiteralValue.Tags.float_value:
          result.float_value = decoder.decodeStruct(codec.Float);
          break;
        case LiteralValue.Tags.int8_value:
          result.int8_value = decoder.decodeStruct(codec.Int8);
          break;
        case LiteralValue.Tags.int16_value:
          result.int16_value = decoder.decodeStruct(codec.Int16);
          break;
        case LiteralValue.Tags.int32_value:
          result.int32_value = decoder.decodeStruct(codec.Int32);
          break;
        case LiteralValue.Tags.int64_value:
          result.int64_value = decoder.decodeStruct(codec.Int64);
          break;
        case LiteralValue.Tags.string_value:
          result.string_value = decoder.decodeStruct(codec.String);
          break;
        case LiteralValue.Tags.uint8_value:
          result.uint8_value = decoder.decodeStruct(codec.Uint8);
          break;
        case LiteralValue.Tags.uint16_value:
          result.uint16_value = decoder.decodeStruct(codec.Uint16);
          break;
        case LiteralValue.Tags.uint32_value:
          result.uint32_value = decoder.decodeStruct(codec.Uint32);
          break;
        case LiteralValue.Tags.uint64_value:
          result.uint64_value = decoder.decodeStruct(codec.Uint64);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    LiteralValue.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case LiteralValue.Tags.bool_value:
          
    
          break;
        case LiteralValue.Tags.double_value:
          
    
          break;
        case LiteralValue.Tags.float_value:
          
    
          break;
        case LiteralValue.Tags.int8_value:
          
    
          break;
        case LiteralValue.Tags.int16_value:
          
    
          break;
        case LiteralValue.Tags.int32_value:
          
    
          break;
        case LiteralValue.Tags.int64_value:
          
    
          break;
        case LiteralValue.Tags.string_value:
          
    
    // validate LiteralValue.string_value
    err = messageValidator.validateStringPointer(data_offset, false)
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case LiteralValue.Tags.uint8_value:
          
    
          break;
        case LiteralValue.Tags.uint16_value:
          
    
          break;
        case LiteralValue.Tags.uint32_value:
          
    
          break;
        case LiteralValue.Tags.uint64_value:
          
    
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  LiteralValue.encodedSize = 16;

  var exports = {};
  exports.SimpleType = SimpleType;
  exports.BuiltinConstantValue = BuiltinConstantValue;
  exports.StringType = StringType;
  exports.HandleType = HandleType;
  exports.ArrayType = ArrayType;
  exports.MapType = MapType;
  exports.TypeReference = TypeReference;
  exports.StructField = StructField;
  exports.DefaultKeyword = DefaultKeyword;
  exports.StructVersion = StructVersion;
  exports.MojomStruct = MojomStruct;
  exports.UnionField = UnionField;
  exports.MojomUnion = MojomUnion;
  exports.EnumValue = EnumValue;
  exports.MojomEnum = MojomEnum;
  exports.MojomMethod = MojomMethod;
  exports.MojomInterface = MojomInterface;
  exports.ConstantReference = ConstantReference;
  exports.EnumValueReference = EnumValueReference;
  exports.DeclaredConstant = DeclaredConstant;
  exports.Attribute = Attribute;
  exports.DeclarationData = DeclarationData;
  exports.SourceFileInfo = SourceFileInfo;
  exports.ContainedDeclarations = ContainedDeclarations;
  exports.RuntimeTypeInfo = RuntimeTypeInfo;
  exports.Type = Type;
  exports.UserDefinedType = UserDefinedType;
  exports.DefaultFieldValue = DefaultFieldValue;
  exports.Value = Value;
  exports.LiteralValue = LiteralValue;


  return exports;
});
