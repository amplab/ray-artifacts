// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/test_unions.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/bindings/tests/test_included_unions.mojom",
], function(bindings, codec, connection, core, validator, test_included_unions$) {
  var AnEnum = {};
  AnEnum.FIRST = 0;
  AnEnum.SECOND = AnEnum.FIRST + 1;

  function StructOfUnions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructOfUnions.prototype.initDefaults_ = function() {
    this.u = null;
    this.a_ou = null;
    this.a_hu = null;
    this.m_ou = null;
    this.m_hu = null;
  };
  StructOfUnions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructOfUnions.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructOfUnions.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    // validate StructOfUnions.u
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, ObjectUnion, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructOfUnions.a_ou
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 16, new codec.UnionWrapper(ObjectUnion), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructOfUnions.a_hu
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 16, new codec.UnionWrapper(HandleUnion), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructOfUnions.m_ou
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 32, false, codec.Int64, new codec.UnionWrapper(ObjectUnion), false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructOfUnions.m_hu
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 40, false, codec.Int64, new codec.UnionWrapper(HandleUnion), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructOfUnions.encodedSize = codec.kStructHeaderSize + 48;

  StructOfUnions.decode = function(decoder) {
    var packed;
    var val = new StructOfUnions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.u = decoder.decodeStruct(ObjectUnion);
    val.a_ou = decoder.decodeArrayPointer(ObjectUnion);
    val.a_hu = decoder.decodeArrayPointer(HandleUnion);
    val.m_ou = decoder.decodeMapPointer(codec.Int64, new codec.UnionWrapper(ObjectUnion));
    val.m_hu = decoder.decodeMapPointer(codec.Int64, new codec.UnionWrapper(HandleUnion));
    return val;
  };

  StructOfUnions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructOfUnions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(ObjectUnion, val.u);
    encoder.encodeArrayPointer(ObjectUnion, val.a_ou);
    encoder.encodeArrayPointer(HandleUnion, val.a_hu);
    encoder.encodeMapPointer(codec.Int64, new codec.UnionWrapper(ObjectUnion), val.m_ou);
    encoder.encodeMapPointer(codec.Int64, new codec.UnionWrapper(HandleUnion), val.m_hu);
  };

  function WrapperStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WrapperStruct.prototype.initDefaults_ = function() {
    this.object_union = null;
    this.pod_union = null;
    this.handle_union = null;
  };
  WrapperStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WrapperStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, WrapperStruct.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    // validate WrapperStruct.object_union
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, ObjectUnion, true);
    if (err !== validator.validationError.NONE)
        return err;

    // validate WrapperStruct.pod_union
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 16, PodUnion, true);
    if (err !== validator.validationError.NONE)
        return err;

    // validate WrapperStruct.handle_union
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 32, HandleUnion, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WrapperStruct.encodedSize = codec.kStructHeaderSize + 48;

  WrapperStruct.decode = function(decoder) {
    var packed;
    var val = new WrapperStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.object_union = decoder.decodeStruct(ObjectUnion);
    val.pod_union = decoder.decodeStruct(PodUnion);
    val.handle_union = decoder.decodeStruct(HandleUnion);
    return val;
  };

  WrapperStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WrapperStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(ObjectUnion, val.object_union);
    encoder.encodeStruct(PodUnion, val.pod_union);
    encoder.encodeStruct(HandleUnion, val.handle_union);
  };

  function DummyStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DummyStruct.prototype.initDefaults_ = function() {
    this.f_int8 = 0;
  };
  DummyStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DummyStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, DummyStruct.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  DummyStruct.encodedSize = codec.kStructHeaderSize + 8;

  DummyStruct.decode = function(decoder) {
    var packed;
    var val = new DummyStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.f_int8 = decoder.decodeStruct(codec.Int8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DummyStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DummyStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int8, val.f_int8);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function SmallStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmallStruct.prototype.initDefaults_ = function() {
    this.dummy_struct = null;
    this.pod_union = null;
    this.pod_union_array = null;
    this.nullable_pod_union_array = null;
    this.s_array = null;
    this.pod_union_map = null;
    this.nullable_pod_union_map = null;
  };
  SmallStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmallStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SmallStruct.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SmallStruct.dummy_struct
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DummyStruct, true);
    if (err !== validator.validationError.NONE)
        return err;

    // validate SmallStruct.pod_union
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, PodUnion, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SmallStruct.pod_union_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 16, new codec.UnionWrapper(PodUnion), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SmallStruct.nullable_pod_union_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 16, new codec.NullableUnionWrapper(PodUnion), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SmallStruct.s_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 8, new codec.PointerTo(DummyStruct), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SmallStruct.pod_union_map
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 48, true, codec.String, new codec.UnionWrapper(PodUnion), false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SmallStruct.nullable_pod_union_map
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 56, true, codec.String, new codec.NullableUnionWrapper(PodUnion), true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SmallStruct.encodedSize = codec.kStructHeaderSize + 64;

  SmallStruct.decode = function(decoder) {
    var packed;
    var val = new SmallStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.dummy_struct = decoder.decodeStructPointer(DummyStruct);
    val.pod_union = decoder.decodeStruct(PodUnion);
    val.pod_union_array = decoder.decodeArrayPointer(PodUnion);
    val.nullable_pod_union_array = decoder.decodeArrayPointer(PodUnion);
    val.s_array = decoder.decodeArrayPointer(new codec.PointerTo(DummyStruct));
    val.pod_union_map = decoder.decodeMapPointer(codec.String, new codec.UnionWrapper(PodUnion));
    val.nullable_pod_union_map = decoder.decodeMapPointer(codec.String, new codec.NullableUnionWrapper(PodUnion));
    return val;
  };

  SmallStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmallStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DummyStruct, val.dummy_struct);
    encoder.encodeStruct(PodUnion, val.pod_union);
    encoder.encodeArrayPointer(PodUnion, val.pod_union_array);
    encoder.encodeArrayPointer(PodUnion, val.nullable_pod_union_array);
    encoder.encodeArrayPointer(new codec.PointerTo(DummyStruct), val.s_array);
    encoder.encodeMapPointer(codec.String, new codec.UnionWrapper(PodUnion), val.pod_union_map);
    encoder.encodeMapPointer(codec.String, new codec.NullableUnionWrapper(PodUnion), val.nullable_pod_union_map);
  };

  function SmallStructNonNullableUnion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmallStructNonNullableUnion.prototype.initDefaults_ = function() {
    this.pod_union = null;
  };
  SmallStructNonNullableUnion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmallStructNonNullableUnion.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SmallStructNonNullableUnion.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    // validate SmallStructNonNullableUnion.pod_union
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, PodUnion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SmallStructNonNullableUnion.encodedSize = codec.kStructHeaderSize + 16;

  SmallStructNonNullableUnion.decode = function(decoder) {
    var packed;
    var val = new SmallStructNonNullableUnion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pod_union = decoder.decodeStruct(PodUnion);
    return val;
  };

  SmallStructNonNullableUnion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmallStructNonNullableUnion.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(PodUnion, val.pod_union);
  };

  function StructNullObjectUnion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructNullObjectUnion.prototype.initDefaults_ = function() {
    this.obj_union = null;
  };
  StructNullObjectUnion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructNullObjectUnion.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructNullObjectUnion.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    // validate StructNullObjectUnion.obj_union
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, ObjectOnlyUnion, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructNullObjectUnion.encodedSize = codec.kStructHeaderSize + 16;

  StructNullObjectUnion.decode = function(decoder) {
    var packed;
    var val = new StructNullObjectUnion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.obj_union = decoder.decodeStruct(ObjectOnlyUnion);
    return val;
  };

  StructNullObjectUnion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructNullObjectUnion.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(ObjectOnlyUnion, val.obj_union);
  };

  function SmallObjStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmallObjStruct.prototype.initDefaults_ = function() {
    this.obj_union = null;
    this.f_int8 = 0;
  };
  SmallObjStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmallObjStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SmallObjStruct.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    // validate SmallObjStruct.obj_union
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, ObjectUnion, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SmallObjStruct.encodedSize = codec.kStructHeaderSize + 24;

  SmallObjStruct.decode = function(decoder) {
    var packed;
    var val = new SmallObjStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.obj_union = decoder.decodeStruct(ObjectUnion);
    val.f_int8 = decoder.decodeStruct(codec.Int8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SmallObjStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmallObjStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(ObjectUnion, val.obj_union);
    encoder.encodeStruct(codec.Int8, val.f_int8);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function TryNonNullStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TryNonNullStruct.prototype.initDefaults_ = function() {
    this.nullable = null;
    this.non_nullable = null;
  };
  TryNonNullStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TryNonNullStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TryNonNullStruct.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TryNonNullStruct.nullable
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DummyStruct, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TryNonNullStruct.non_nullable
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, DummyStruct, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TryNonNullStruct.encodedSize = codec.kStructHeaderSize + 16;

  TryNonNullStruct.decode = function(decoder) {
    var packed;
    var val = new TryNonNullStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.nullable = decoder.decodeStructPointer(DummyStruct);
    val.non_nullable = decoder.decodeStructPointer(DummyStruct);
    return val;
  };

  TryNonNullStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TryNonNullStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DummyStruct, val.nullable);
    encoder.encodeStructPointer(DummyStruct, val.non_nullable);
  };

  function IncludingStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IncludingStruct.prototype.initDefaults_ = function() {
    this.a = null;
  };
  IncludingStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IncludingStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, IncludingStruct.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    // validate IncludingStruct.a
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, test_included_unions$.IncludedUnion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  IncludingStruct.encodedSize = codec.kStructHeaderSize + 16;

  IncludingStruct.decode = function(decoder) {
    var packed;
    var val = new IncludingStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStruct(test_included_unions$.IncludedUnion);
    return val;
  };

  IncludingStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IncludingStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(test_included_unions$.IncludedUnion, val.a);
  };

  function SmallCache_SetIntValue_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmallCache_SetIntValue_Params.prototype.initDefaults_ = function() {
    this.int_value = 0;
  };
  SmallCache_SetIntValue_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmallCache_SetIntValue_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SmallCache_SetIntValue_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SmallCache_SetIntValue_Params.encodedSize = codec.kStructHeaderSize + 8;

  SmallCache_SetIntValue_Params.decode = function(decoder) {
    var packed;
    var val = new SmallCache_SetIntValue_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.int_value = decoder.decodeStruct(codec.Int64);
    return val;
  };

  SmallCache_SetIntValue_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmallCache_SetIntValue_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.int_value);
  };

  function SmallCache_GetIntValue_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmallCache_GetIntValue_Params.prototype.initDefaults_ = function() {
  };
  SmallCache_GetIntValue_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmallCache_GetIntValue_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SmallCache_GetIntValue_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SmallCache_GetIntValue_Params.encodedSize = codec.kStructHeaderSize + 0;

  SmallCache_GetIntValue_Params.decode = function(decoder) {
    var packed;
    var val = new SmallCache_GetIntValue_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SmallCache_GetIntValue_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmallCache_GetIntValue_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function SmallCache_GetIntValue_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmallCache_GetIntValue_ResponseParams.prototype.initDefaults_ = function() {
    this.int_value = 0;
  };
  SmallCache_GetIntValue_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmallCache_GetIntValue_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SmallCache_GetIntValue_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SmallCache_GetIntValue_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  SmallCache_GetIntValue_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SmallCache_GetIntValue_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.int_value = decoder.decodeStruct(codec.Int64);
    return val;
  };

  SmallCache_GetIntValue_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmallCache_GetIntValue_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.int_value);
  };

  function UnionInterface_Echo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UnionInterface_Echo_Params.prototype.initDefaults_ = function() {
    this.in_val = null;
  };
  UnionInterface_Echo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UnionInterface_Echo_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, UnionInterface_Echo_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    // validate UnionInterface_Echo_Params.in_val
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, PodUnion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UnionInterface_Echo_Params.encodedSize = codec.kStructHeaderSize + 16;

  UnionInterface_Echo_Params.decode = function(decoder) {
    var packed;
    var val = new UnionInterface_Echo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.in_val = decoder.decodeStruct(PodUnion);
    return val;
  };

  UnionInterface_Echo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UnionInterface_Echo_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(PodUnion, val.in_val);
  };

  function UnionInterface_Echo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UnionInterface_Echo_ResponseParams.prototype.initDefaults_ = function() {
    this.out_val = null;
  };
  UnionInterface_Echo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UnionInterface_Echo_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, UnionInterface_Echo_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    // validate UnionInterface_Echo_ResponseParams.out_val
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, PodUnion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UnionInterface_Echo_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  UnionInterface_Echo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new UnionInterface_Echo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.out_val = decoder.decodeStruct(PodUnion);
    return val;
  };

  UnionInterface_Echo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UnionInterface_Echo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(PodUnion, val.out_val);
  };


  function PodUnion(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  PodUnion.Tags = {
    f_int8: 0,
    f_int8_other: 1,
    f_uint8: 2,
    f_int16: 3,
    f_uint16: 4,
    f_int32: 5,
    f_uint32: 6,
    f_int64: 7,
    f_uint64: 8,
    f_float: 9,
    f_double: 10,
    f_bool: 11,
    f_enum: 12,
  };
  
  PodUnion.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  PodUnion.prototype.initValue_ = function(value) {
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
        "f_int8",
        "f_int8_other",
        "f_uint8",
        "f_int16",
        "f_uint16",
        "f_int32",
        "f_uint32",
        "f_int64",
        "f_uint64",
        "f_float",
        "f_double",
        "f_bool",
        "f_enum",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a PodUnion member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(PodUnion.prototype, "f_int8", {
    get: function() {
      if (this.$tag != PodUnion.Tags.f_int8) {
        throw new ReferenceError(
            "PodUnion.f_int8 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = PodUnion.Tags.f_int8;
      this.$data = value;
    }
  });
  Object.defineProperty(PodUnion.prototype, "f_int8_other", {
    get: function() {
      if (this.$tag != PodUnion.Tags.f_int8_other) {
        throw new ReferenceError(
            "PodUnion.f_int8_other is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = PodUnion.Tags.f_int8_other;
      this.$data = value;
    }
  });
  Object.defineProperty(PodUnion.prototype, "f_uint8", {
    get: function() {
      if (this.$tag != PodUnion.Tags.f_uint8) {
        throw new ReferenceError(
            "PodUnion.f_uint8 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = PodUnion.Tags.f_uint8;
      this.$data = value;
    }
  });
  Object.defineProperty(PodUnion.prototype, "f_int16", {
    get: function() {
      if (this.$tag != PodUnion.Tags.f_int16) {
        throw new ReferenceError(
            "PodUnion.f_int16 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = PodUnion.Tags.f_int16;
      this.$data = value;
    }
  });
  Object.defineProperty(PodUnion.prototype, "f_uint16", {
    get: function() {
      if (this.$tag != PodUnion.Tags.f_uint16) {
        throw new ReferenceError(
            "PodUnion.f_uint16 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = PodUnion.Tags.f_uint16;
      this.$data = value;
    }
  });
  Object.defineProperty(PodUnion.prototype, "f_int32", {
    get: function() {
      if (this.$tag != PodUnion.Tags.f_int32) {
        throw new ReferenceError(
            "PodUnion.f_int32 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = PodUnion.Tags.f_int32;
      this.$data = value;
    }
  });
  Object.defineProperty(PodUnion.prototype, "f_uint32", {
    get: function() {
      if (this.$tag != PodUnion.Tags.f_uint32) {
        throw new ReferenceError(
            "PodUnion.f_uint32 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = PodUnion.Tags.f_uint32;
      this.$data = value;
    }
  });
  Object.defineProperty(PodUnion.prototype, "f_int64", {
    get: function() {
      if (this.$tag != PodUnion.Tags.f_int64) {
        throw new ReferenceError(
            "PodUnion.f_int64 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = PodUnion.Tags.f_int64;
      this.$data = value;
    }
  });
  Object.defineProperty(PodUnion.prototype, "f_uint64", {
    get: function() {
      if (this.$tag != PodUnion.Tags.f_uint64) {
        throw new ReferenceError(
            "PodUnion.f_uint64 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = PodUnion.Tags.f_uint64;
      this.$data = value;
    }
  });
  Object.defineProperty(PodUnion.prototype, "f_float", {
    get: function() {
      if (this.$tag != PodUnion.Tags.f_float) {
        throw new ReferenceError(
            "PodUnion.f_float is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = PodUnion.Tags.f_float;
      this.$data = value;
    }
  });
  Object.defineProperty(PodUnion.prototype, "f_double", {
    get: function() {
      if (this.$tag != PodUnion.Tags.f_double) {
        throw new ReferenceError(
            "PodUnion.f_double is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = PodUnion.Tags.f_double;
      this.$data = value;
    }
  });
  Object.defineProperty(PodUnion.prototype, "f_bool", {
    get: function() {
      if (this.$tag != PodUnion.Tags.f_bool) {
        throw new ReferenceError(
            "PodUnion.f_bool is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = PodUnion.Tags.f_bool;
      this.$data = value;
    }
  });
  Object.defineProperty(PodUnion.prototype, "f_enum", {
    get: function() {
      if (this.$tag != PodUnion.Tags.f_enum) {
        throw new ReferenceError(
            "PodUnion.f_enum is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = PodUnion.Tags.f_enum;
      this.$data = value;
    }
  });
  
  
    PodUnion.encode = function(encoder, val) {
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
        case PodUnion.Tags.f_int8:
          encoder.encodeStruct(codec.Int8, val.f_int8);
          break;
        case PodUnion.Tags.f_int8_other:
          encoder.encodeStruct(codec.Int8, val.f_int8_other);
          break;
        case PodUnion.Tags.f_uint8:
          encoder.encodeStruct(codec.Uint8, val.f_uint8);
          break;
        case PodUnion.Tags.f_int16:
          encoder.encodeStruct(codec.Int16, val.f_int16);
          break;
        case PodUnion.Tags.f_uint16:
          encoder.encodeStruct(codec.Uint16, val.f_uint16);
          break;
        case PodUnion.Tags.f_int32:
          encoder.encodeStruct(codec.Int32, val.f_int32);
          break;
        case PodUnion.Tags.f_uint32:
          encoder.encodeStruct(codec.Uint32, val.f_uint32);
          break;
        case PodUnion.Tags.f_int64:
          encoder.encodeStruct(codec.Int64, val.f_int64);
          break;
        case PodUnion.Tags.f_uint64:
          encoder.encodeStruct(codec.Uint64, val.f_uint64);
          break;
        case PodUnion.Tags.f_float:
          encoder.encodeStruct(codec.Float, val.f_float);
          break;
        case PodUnion.Tags.f_double:
          encoder.encodeStruct(codec.Double, val.f_double);
          break;
        case PodUnion.Tags.f_bool:
          encoder.encodeStruct(codec.Uint8, val.f_bool);
          break;
        case PodUnion.Tags.f_enum:
          encoder.encodeStruct(codec.Int32, val.f_enum);
          break;
      }
      encoder.align();
    };
  
  
    PodUnion.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new PodUnion();
      var tag = decoder.readUint32();
      switch (tag) {
        case PodUnion.Tags.f_int8:
          result.f_int8 = decoder.decodeStruct(codec.Int8);
          break;
        case PodUnion.Tags.f_int8_other:
          result.f_int8_other = decoder.decodeStruct(codec.Int8);
          break;
        case PodUnion.Tags.f_uint8:
          result.f_uint8 = decoder.decodeStruct(codec.Uint8);
          break;
        case PodUnion.Tags.f_int16:
          result.f_int16 = decoder.decodeStruct(codec.Int16);
          break;
        case PodUnion.Tags.f_uint16:
          result.f_uint16 = decoder.decodeStruct(codec.Uint16);
          break;
        case PodUnion.Tags.f_int32:
          result.f_int32 = decoder.decodeStruct(codec.Int32);
          break;
        case PodUnion.Tags.f_uint32:
          result.f_uint32 = decoder.decodeStruct(codec.Uint32);
          break;
        case PodUnion.Tags.f_int64:
          result.f_int64 = decoder.decodeStruct(codec.Int64);
          break;
        case PodUnion.Tags.f_uint64:
          result.f_uint64 = decoder.decodeStruct(codec.Uint64);
          break;
        case PodUnion.Tags.f_float:
          result.f_float = decoder.decodeStruct(codec.Float);
          break;
        case PodUnion.Tags.f_double:
          result.f_double = decoder.decodeStruct(codec.Double);
          break;
        case PodUnion.Tags.f_bool:
          result.f_bool = decoder.decodeStruct(codec.Uint8);
          break;
        case PodUnion.Tags.f_enum:
          result.f_enum = decoder.decodeStruct(codec.Int32);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    PodUnion.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case PodUnion.Tags.f_int8:
          
    
          break;
        case PodUnion.Tags.f_int8_other:
          
    
          break;
        case PodUnion.Tags.f_uint8:
          
    
          break;
        case PodUnion.Tags.f_int16:
          
    
          break;
        case PodUnion.Tags.f_uint16:
          
    
          break;
        case PodUnion.Tags.f_int32:
          
    
          break;
        case PodUnion.Tags.f_uint32:
          
    
          break;
        case PodUnion.Tags.f_int64:
          
    
          break;
        case PodUnion.Tags.f_uint64:
          
    
          break;
        case PodUnion.Tags.f_float:
          
    
          break;
        case PodUnion.Tags.f_double:
          
    
          break;
        case PodUnion.Tags.f_bool:
          
    
          break;
        case PodUnion.Tags.f_enum:
          
    
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  PodUnion.encodedSize = 16;

  function UnionOfUnions(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  UnionOfUnions.Tags = {
    u: 0,
    a_ou: 1,
    a_hu: 2,
    m_ou: 3,
    m_hu: 4,
  };
  
  UnionOfUnions.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  UnionOfUnions.prototype.initValue_ = function(value) {
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
        "u",
        "a_ou",
        "a_hu",
        "m_ou",
        "m_hu",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a UnionOfUnions member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(UnionOfUnions.prototype, "u", {
    get: function() {
      if (this.$tag != UnionOfUnions.Tags.u) {
        throw new ReferenceError(
            "UnionOfUnions.u is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionOfUnions.Tags.u;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionOfUnions.prototype, "a_ou", {
    get: function() {
      if (this.$tag != UnionOfUnions.Tags.a_ou) {
        throw new ReferenceError(
            "UnionOfUnions.a_ou is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionOfUnions.Tags.a_ou;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionOfUnions.prototype, "a_hu", {
    get: function() {
      if (this.$tag != UnionOfUnions.Tags.a_hu) {
        throw new ReferenceError(
            "UnionOfUnions.a_hu is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionOfUnions.Tags.a_hu;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionOfUnions.prototype, "m_ou", {
    get: function() {
      if (this.$tag != UnionOfUnions.Tags.m_ou) {
        throw new ReferenceError(
            "UnionOfUnions.m_ou is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionOfUnions.Tags.m_ou;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionOfUnions.prototype, "m_hu", {
    get: function() {
      if (this.$tag != UnionOfUnions.Tags.m_hu) {
        throw new ReferenceError(
            "UnionOfUnions.m_hu is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionOfUnions.Tags.m_hu;
      this.$data = value;
    }
  });
  
  
    UnionOfUnions.encode = function(encoder, val) {
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
        case UnionOfUnions.Tags.u:
          encoder.encodeStructPointer(ObjectUnion, val.u);
          break;
        case UnionOfUnions.Tags.a_ou:
          encoder.encodeArrayPointer(ObjectUnion, val.a_ou);
          break;
        case UnionOfUnions.Tags.a_hu:
          encoder.encodeArrayPointer(HandleUnion, val.a_hu);
          break;
        case UnionOfUnions.Tags.m_ou:
          encoder.encodeMapPointer(codec.Int64, new codec.UnionWrapper(ObjectUnion), val.m_ou);
          break;
        case UnionOfUnions.Tags.m_hu:
          encoder.encodeMapPointer(codec.Int64, new codec.UnionWrapper(HandleUnion), val.m_hu);
          break;
      }
      encoder.align();
    };
  
  
    UnionOfUnions.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new UnionOfUnions();
      var tag = decoder.readUint32();
      switch (tag) {
        case UnionOfUnions.Tags.u:
          result.u = decoder.decodeStructPointer(ObjectUnion);
          break;
        case UnionOfUnions.Tags.a_ou:
          result.a_ou = decoder.decodeArrayPointer(ObjectUnion);
          break;
        case UnionOfUnions.Tags.a_hu:
          result.a_hu = decoder.decodeArrayPointer(HandleUnion);
          break;
        case UnionOfUnions.Tags.m_ou:
          result.m_ou = decoder.decodeMapPointer(codec.Int64, new codec.UnionWrapper(ObjectUnion));
          break;
        case UnionOfUnions.Tags.m_hu:
          result.m_hu = decoder.decodeMapPointer(codec.Int64, new codec.UnionWrapper(HandleUnion));
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    UnionOfUnions.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case UnionOfUnions.Tags.u:
          
    // validate UnionOfUnions.u
    err = messageValidator.validateNestedUnion(data_offset, ObjectUnion, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionOfUnions.Tags.a_ou:
          
    
    // validate UnionOfUnions.a_ou
    err = messageValidator.validateArrayPointer(data_offset, 16, new codec.UnionWrapper(ObjectUnion), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionOfUnions.Tags.a_hu:
          
    
    // validate UnionOfUnions.a_hu
    err = messageValidator.validateArrayPointer(data_offset, 16, new codec.UnionWrapper(HandleUnion), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionOfUnions.Tags.m_ou:
          
    
    // validate UnionOfUnions.m_ou
    err = messageValidator.validateMapPointer(data_offset, false, codec.Int64, new codec.UnionWrapper(ObjectUnion), false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionOfUnions.Tags.m_hu:
          
    
    // validate UnionOfUnions.m_hu
    err = messageValidator.validateMapPointer(data_offset, false, codec.Int64, new codec.UnionWrapper(HandleUnion), false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  UnionOfUnions.encodedSize = 16;

  function ObjectUnion(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  ObjectUnion.Tags = {
    f_int8: 0,
    f_string: 1,
    f_dummy: 2,
    f_nullable: 3,
    f_array_int8: 4,
    f_map_int8: 5,
    f_pod_union: 6,
  };
  
  ObjectUnion.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  ObjectUnion.prototype.initValue_ = function(value) {
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
        "f_int8",
        "f_string",
        "f_dummy",
        "f_nullable",
        "f_array_int8",
        "f_map_int8",
        "f_pod_union",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a ObjectUnion member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(ObjectUnion.prototype, "f_int8", {
    get: function() {
      if (this.$tag != ObjectUnion.Tags.f_int8) {
        throw new ReferenceError(
            "ObjectUnion.f_int8 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = ObjectUnion.Tags.f_int8;
      this.$data = value;
    }
  });
  Object.defineProperty(ObjectUnion.prototype, "f_string", {
    get: function() {
      if (this.$tag != ObjectUnion.Tags.f_string) {
        throw new ReferenceError(
            "ObjectUnion.f_string is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = ObjectUnion.Tags.f_string;
      this.$data = value;
    }
  });
  Object.defineProperty(ObjectUnion.prototype, "f_dummy", {
    get: function() {
      if (this.$tag != ObjectUnion.Tags.f_dummy) {
        throw new ReferenceError(
            "ObjectUnion.f_dummy is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = ObjectUnion.Tags.f_dummy;
      this.$data = value;
    }
  });
  Object.defineProperty(ObjectUnion.prototype, "f_nullable", {
    get: function() {
      if (this.$tag != ObjectUnion.Tags.f_nullable) {
        throw new ReferenceError(
            "ObjectUnion.f_nullable is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = ObjectUnion.Tags.f_nullable;
      this.$data = value;
    }
  });
  Object.defineProperty(ObjectUnion.prototype, "f_array_int8", {
    get: function() {
      if (this.$tag != ObjectUnion.Tags.f_array_int8) {
        throw new ReferenceError(
            "ObjectUnion.f_array_int8 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = ObjectUnion.Tags.f_array_int8;
      this.$data = value;
    }
  });
  Object.defineProperty(ObjectUnion.prototype, "f_map_int8", {
    get: function() {
      if (this.$tag != ObjectUnion.Tags.f_map_int8) {
        throw new ReferenceError(
            "ObjectUnion.f_map_int8 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = ObjectUnion.Tags.f_map_int8;
      this.$data = value;
    }
  });
  Object.defineProperty(ObjectUnion.prototype, "f_pod_union", {
    get: function() {
      if (this.$tag != ObjectUnion.Tags.f_pod_union) {
        throw new ReferenceError(
            "ObjectUnion.f_pod_union is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = ObjectUnion.Tags.f_pod_union;
      this.$data = value;
    }
  });
  
  
    ObjectUnion.encode = function(encoder, val) {
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
        case ObjectUnion.Tags.f_int8:
          encoder.encodeStruct(codec.Int8, val.f_int8);
          break;
        case ObjectUnion.Tags.f_string:
          encoder.encodeStruct(codec.String, val.f_string);
          break;
        case ObjectUnion.Tags.f_dummy:
          encoder.encodeStructPointer(DummyStruct, val.f_dummy);
          break;
        case ObjectUnion.Tags.f_nullable:
          encoder.encodeStructPointer(DummyStruct, val.f_nullable);
          break;
        case ObjectUnion.Tags.f_array_int8:
          encoder.encodeArrayPointer(codec.Int8, val.f_array_int8);
          break;
        case ObjectUnion.Tags.f_map_int8:
          encoder.encodeMapPointer(codec.String, codec.Int8, val.f_map_int8);
          break;
        case ObjectUnion.Tags.f_pod_union:
          encoder.encodeStructPointer(PodUnion, val.f_pod_union);
          break;
      }
      encoder.align();
    };
  
  
    ObjectUnion.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new ObjectUnion();
      var tag = decoder.readUint32();
      switch (tag) {
        case ObjectUnion.Tags.f_int8:
          result.f_int8 = decoder.decodeStruct(codec.Int8);
          break;
        case ObjectUnion.Tags.f_string:
          result.f_string = decoder.decodeStruct(codec.String);
          break;
        case ObjectUnion.Tags.f_dummy:
          result.f_dummy = decoder.decodeStructPointer(DummyStruct);
          break;
        case ObjectUnion.Tags.f_nullable:
          result.f_nullable = decoder.decodeStructPointer(DummyStruct);
          break;
        case ObjectUnion.Tags.f_array_int8:
          result.f_array_int8 = decoder.decodeArrayPointer(codec.Int8);
          break;
        case ObjectUnion.Tags.f_map_int8:
          result.f_map_int8 = decoder.decodeMapPointer(codec.String, codec.Int8);
          break;
        case ObjectUnion.Tags.f_pod_union:
          result.f_pod_union = decoder.decodeStructPointer(PodUnion);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    ObjectUnion.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case ObjectUnion.Tags.f_int8:
          
    
          break;
        case ObjectUnion.Tags.f_string:
          
    
    // validate ObjectUnion.f_string
    err = messageValidator.validateStringPointer(data_offset, false)
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case ObjectUnion.Tags.f_dummy:
          
    
    // validate ObjectUnion.f_dummy
    err = messageValidator.validateStructPointer(data_offset, DummyStruct, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case ObjectUnion.Tags.f_nullable:
          
    
    // validate ObjectUnion.f_nullable
    err = messageValidator.validateStructPointer(data_offset, DummyStruct, true);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case ObjectUnion.Tags.f_array_int8:
          
    
    // validate ObjectUnion.f_array_int8
    err = messageValidator.validateArrayPointer(data_offset, 1, codec.Int8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case ObjectUnion.Tags.f_map_int8:
          
    
    // validate ObjectUnion.f_map_int8
    err = messageValidator.validateMapPointer(data_offset, false, codec.String, codec.Int8, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case ObjectUnion.Tags.f_pod_union:
          
    // validate ObjectUnion.f_pod_union
    err = messageValidator.validateNestedUnion(data_offset, PodUnion, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  ObjectUnion.encodedSize = 16;

  function HandleUnion(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  HandleUnion.Tags = {
    f_handle: 0,
    f_message_pipe: 1,
    f_data_pipe_consumer: 2,
    f_data_pipe_producer: 3,
    f_shared_buffer: 4,
    f_small_cache: 5,
  };
  
  HandleUnion.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  HandleUnion.prototype.initValue_ = function(value) {
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
        "f_handle",
        "f_message_pipe",
        "f_data_pipe_consumer",
        "f_data_pipe_producer",
        "f_shared_buffer",
        "f_small_cache",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a HandleUnion member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(HandleUnion.prototype, "f_handle", {
    get: function() {
      if (this.$tag != HandleUnion.Tags.f_handle) {
        throw new ReferenceError(
            "HandleUnion.f_handle is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = HandleUnion.Tags.f_handle;
      this.$data = value;
    }
  });
  Object.defineProperty(HandleUnion.prototype, "f_message_pipe", {
    get: function() {
      if (this.$tag != HandleUnion.Tags.f_message_pipe) {
        throw new ReferenceError(
            "HandleUnion.f_message_pipe is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = HandleUnion.Tags.f_message_pipe;
      this.$data = value;
    }
  });
  Object.defineProperty(HandleUnion.prototype, "f_data_pipe_consumer", {
    get: function() {
      if (this.$tag != HandleUnion.Tags.f_data_pipe_consumer) {
        throw new ReferenceError(
            "HandleUnion.f_data_pipe_consumer is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = HandleUnion.Tags.f_data_pipe_consumer;
      this.$data = value;
    }
  });
  Object.defineProperty(HandleUnion.prototype, "f_data_pipe_producer", {
    get: function() {
      if (this.$tag != HandleUnion.Tags.f_data_pipe_producer) {
        throw new ReferenceError(
            "HandleUnion.f_data_pipe_producer is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = HandleUnion.Tags.f_data_pipe_producer;
      this.$data = value;
    }
  });
  Object.defineProperty(HandleUnion.prototype, "f_shared_buffer", {
    get: function() {
      if (this.$tag != HandleUnion.Tags.f_shared_buffer) {
        throw new ReferenceError(
            "HandleUnion.f_shared_buffer is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = HandleUnion.Tags.f_shared_buffer;
      this.$data = value;
    }
  });
  Object.defineProperty(HandleUnion.prototype, "f_small_cache", {
    get: function() {
      if (this.$tag != HandleUnion.Tags.f_small_cache) {
        throw new ReferenceError(
            "HandleUnion.f_small_cache is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = HandleUnion.Tags.f_small_cache;
      this.$data = value;
    }
  });
  
  
    HandleUnion.encode = function(encoder, val) {
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
        case HandleUnion.Tags.f_handle:
          encoder.encodeStruct(codec.Handle, val.f_handle);
          break;
        case HandleUnion.Tags.f_message_pipe:
          encoder.encodeStruct(codec.Handle, val.f_message_pipe);
          break;
        case HandleUnion.Tags.f_data_pipe_consumer:
          encoder.encodeStruct(codec.Handle, val.f_data_pipe_consumer);
          break;
        case HandleUnion.Tags.f_data_pipe_producer:
          encoder.encodeStruct(codec.Handle, val.f_data_pipe_producer);
          break;
        case HandleUnion.Tags.f_shared_buffer:
          encoder.encodeStruct(codec.Handle, val.f_shared_buffer);
          break;
        case HandleUnion.Tags.f_small_cache:
          encoder.encodeStruct(codec.Interface, val.f_small_cache);
          break;
      }
      encoder.align();
    };
  
  
    HandleUnion.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new HandleUnion();
      var tag = decoder.readUint32();
      switch (tag) {
        case HandleUnion.Tags.f_handle:
          result.f_handle = decoder.decodeStruct(codec.Handle);
          break;
        case HandleUnion.Tags.f_message_pipe:
          result.f_message_pipe = decoder.decodeStruct(codec.Handle);
          break;
        case HandleUnion.Tags.f_data_pipe_consumer:
          result.f_data_pipe_consumer = decoder.decodeStruct(codec.Handle);
          break;
        case HandleUnion.Tags.f_data_pipe_producer:
          result.f_data_pipe_producer = decoder.decodeStruct(codec.Handle);
          break;
        case HandleUnion.Tags.f_shared_buffer:
          result.f_shared_buffer = decoder.decodeStruct(codec.Handle);
          break;
        case HandleUnion.Tags.f_small_cache:
          result.f_small_cache = decoder.decodeStruct(codec.Interface);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    HandleUnion.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case HandleUnion.Tags.f_handle:
          
    
    // validate HandleUnion.f_handle
    err = messageValidator.validateHandle(data_offset, false)
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case HandleUnion.Tags.f_message_pipe:
          
    
    // validate HandleUnion.f_message_pipe
    err = messageValidator.validateHandle(data_offset, false)
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case HandleUnion.Tags.f_data_pipe_consumer:
          
    
    // validate HandleUnion.f_data_pipe_consumer
    err = messageValidator.validateHandle(data_offset, false)
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case HandleUnion.Tags.f_data_pipe_producer:
          
    
    // validate HandleUnion.f_data_pipe_producer
    err = messageValidator.validateHandle(data_offset, false)
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case HandleUnion.Tags.f_shared_buffer:
          
    
    // validate HandleUnion.f_shared_buffer
    err = messageValidator.validateHandle(data_offset, false)
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case HandleUnion.Tags.f_small_cache:
          
    
    // validate HandleUnion.f_small_cache
    err = messageValidator.validateInterface(data_offset, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  HandleUnion.encodedSize = 16;

  function ObjectOnlyUnion(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  ObjectOnlyUnion.Tags = {
    dummy1: 0,
  };
  
  ObjectOnlyUnion.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  ObjectOnlyUnion.prototype.initValue_ = function(value) {
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
        "dummy1",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a ObjectOnlyUnion member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(ObjectOnlyUnion.prototype, "dummy1", {
    get: function() {
      if (this.$tag != ObjectOnlyUnion.Tags.dummy1) {
        throw new ReferenceError(
            "ObjectOnlyUnion.dummy1 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = ObjectOnlyUnion.Tags.dummy1;
      this.$data = value;
    }
  });
  
  
    ObjectOnlyUnion.encode = function(encoder, val) {
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
        case ObjectOnlyUnion.Tags.dummy1:
          encoder.encodeStructPointer(DummyStruct, val.dummy1);
          break;
      }
      encoder.align();
    };
  
  
    ObjectOnlyUnion.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new ObjectOnlyUnion();
      var tag = decoder.readUint32();
      switch (tag) {
        case ObjectOnlyUnion.Tags.dummy1:
          result.dummy1 = decoder.decodeStructPointer(DummyStruct);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    ObjectOnlyUnion.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case ObjectOnlyUnion.Tags.dummy1:
          
    
    // validate ObjectOnlyUnion.dummy1
    err = messageValidator.validateStructPointer(data_offset, DummyStruct, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  ObjectOnlyUnion.encodedSize = 16;

  function OldUnion(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  OldUnion.Tags = {
    f_int8: 0,
  };
  
  OldUnion.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  OldUnion.prototype.initValue_ = function(value) {
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
        "f_int8",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a OldUnion member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(OldUnion.prototype, "f_int8", {
    get: function() {
      if (this.$tag != OldUnion.Tags.f_int8) {
        throw new ReferenceError(
            "OldUnion.f_int8 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = OldUnion.Tags.f_int8;
      this.$data = value;
    }
  });
  
  
    OldUnion.encode = function(encoder, val) {
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
        case OldUnion.Tags.f_int8:
          encoder.encodeStruct(codec.Int8, val.f_int8);
          break;
      }
      encoder.align();
    };
  
  
    OldUnion.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new OldUnion();
      var tag = decoder.readUint32();
      switch (tag) {
        case OldUnion.Tags.f_int8:
          result.f_int8 = decoder.decodeStruct(codec.Int8);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    OldUnion.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case OldUnion.Tags.f_int8:
          
    
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  OldUnion.encodedSize = 16;

  function NewUnion(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  NewUnion.Tags = {
    f_int8: 0,
    f_int16: 1,
  };
  
  NewUnion.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  NewUnion.prototype.initValue_ = function(value) {
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
        "f_int8",
        "f_int16",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a NewUnion member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(NewUnion.prototype, "f_int8", {
    get: function() {
      if (this.$tag != NewUnion.Tags.f_int8) {
        throw new ReferenceError(
            "NewUnion.f_int8 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = NewUnion.Tags.f_int8;
      this.$data = value;
    }
  });
  Object.defineProperty(NewUnion.prototype, "f_int16", {
    get: function() {
      if (this.$tag != NewUnion.Tags.f_int16) {
        throw new ReferenceError(
            "NewUnion.f_int16 is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = NewUnion.Tags.f_int16;
      this.$data = value;
    }
  });
  
  
    NewUnion.encode = function(encoder, val) {
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
        case NewUnion.Tags.f_int8:
          encoder.encodeStruct(codec.Int8, val.f_int8);
          break;
        case NewUnion.Tags.f_int16:
          encoder.encodeStruct(codec.Int16, val.f_int16);
          break;
      }
      encoder.align();
    };
  
  
    NewUnion.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new NewUnion();
      var tag = decoder.readUint32();
      switch (tag) {
        case NewUnion.Tags.f_int8:
          result.f_int8 = decoder.decodeStruct(codec.Int8);
          break;
        case NewUnion.Tags.f_int16:
          result.f_int16 = decoder.decodeStruct(codec.Int16);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    NewUnion.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case NewUnion.Tags.f_int8:
          
    
          break;
        case NewUnion.Tags.f_int16:
          
    
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  NewUnion.encodedSize = 16;
  var kSmallCache_SetIntValue_Name = 0;
  var kSmallCache_GetIntValue_Name = 1;

  function SmallCacheProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  SmallCacheProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  SmallCacheProxy.prototype.setIntValue = function(int_value) {
    var params = new SmallCache_SetIntValue_Params();
    params.int_value = int_value;
    var builder = new codec.MessageBuilder(
        kSmallCache_SetIntValue_Name,
        codec.align(SmallCache_SetIntValue_Params.encodedSize));
    builder.encodeStruct(SmallCache_SetIntValue_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SmallCacheProxy.prototype.getIntValue = function() {
    var params = new SmallCache_GetIntValue_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kSmallCache_GetIntValue_Name,
          codec.align(SmallCache_GetIntValue_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SmallCache_GetIntValue_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SmallCache_GetIntValue_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function SmallCacheStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  SmallCacheStub.prototype = Object.create(bindings.StubBase.prototype);
  SmallCacheStub.prototype.setIntValue = function(int_value) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.setIntValue && bindings.StubBindings(this).delegate.setIntValue(int_value);
  }
  SmallCacheStub.prototype.getIntValue = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getIntValue && bindings.StubBindings(this).delegate.getIntValue();
  }

  SmallCacheStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSmallCache_SetIntValue_Name:
      var params = reader.decodeStruct(SmallCache_SetIntValue_Params);
      this.setIntValue(params.int_value);
      return true;
    default:
      return false;
    }
  };

  SmallCacheStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSmallCache_GetIntValue_Name:
      var params = reader.decodeStruct(SmallCache_GetIntValue_Params);
      return this.getIntValue().then(function(response) {
        var responseParams =
            new SmallCache_GetIntValue_ResponseParams();
        responseParams.int_value = response.int_value;
        var builder = new codec.MessageWithRequestIDBuilder(
            kSmallCache_GetIntValue_Name,
            codec.align(SmallCache_GetIntValue_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SmallCache_GetIntValue_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateSmallCacheRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSmallCache_SetIntValue_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SmallCache_SetIntValue_Params;
      break;
      case kSmallCache_GetIntValue_Name:
        if (message.expectsResponse())
          paramsClass = SmallCache_GetIntValue_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSmallCacheResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kSmallCache_GetIntValue_Name:
        if (message.isResponse())
          paramsClass = SmallCache_GetIntValue_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var SmallCache = {
    name: null,
    proxyClass: SmallCacheProxy,
    stubClass: SmallCacheStub,
    validateRequest: validateSmallCacheRequest,
    validateResponse: validateSmallCacheResponse,
  };
  SmallCacheStub.prototype.validator = validateSmallCacheRequest;
  SmallCacheProxy.prototype.validator = validateSmallCacheResponse;

  var kUnionInterface_Echo_Name = 0;

  function UnionInterfaceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  UnionInterfaceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  UnionInterfaceProxy.prototype.echo = function(in_val) {
    var params = new UnionInterface_Echo_Params();
    params.in_val = in_val;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kUnionInterface_Echo_Name,
          codec.align(UnionInterface_Echo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(UnionInterface_Echo_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(UnionInterface_Echo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function UnionInterfaceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  UnionInterfaceStub.prototype = Object.create(bindings.StubBase.prototype);
  UnionInterfaceStub.prototype.echo = function(in_val) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.echo && bindings.StubBindings(this).delegate.echo(in_val);
  }

  UnionInterfaceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  UnionInterfaceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kUnionInterface_Echo_Name:
      var params = reader.decodeStruct(UnionInterface_Echo_Params);
      return this.echo(params.in_val).then(function(response) {
        var responseParams =
            new UnionInterface_Echo_ResponseParams();
        responseParams.out_val = response.out_val;
        var builder = new codec.MessageWithRequestIDBuilder(
            kUnionInterface_Echo_Name,
            codec.align(UnionInterface_Echo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(UnionInterface_Echo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateUnionInterfaceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kUnionInterface_Echo_Name:
        if (message.expectsResponse())
          paramsClass = UnionInterface_Echo_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateUnionInterfaceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kUnionInterface_Echo_Name:
        if (message.isResponse())
          paramsClass = UnionInterface_Echo_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var UnionInterface = {
    name: null,
    proxyClass: UnionInterfaceProxy,
    stubClass: UnionInterfaceStub,
    validateRequest: validateUnionInterfaceRequest,
    validateResponse: validateUnionInterfaceResponse,
  };
  UnionInterfaceStub.prototype.validator = validateUnionInterfaceRequest;
  UnionInterfaceProxy.prototype.validator = validateUnionInterfaceResponse;


  var exports = {};
  exports.AnEnum = AnEnum;
  exports.StructOfUnions = StructOfUnions;
  exports.WrapperStruct = WrapperStruct;
  exports.DummyStruct = DummyStruct;
  exports.SmallStruct = SmallStruct;
  exports.SmallStructNonNullableUnion = SmallStructNonNullableUnion;
  exports.StructNullObjectUnion = StructNullObjectUnion;
  exports.SmallObjStruct = SmallObjStruct;
  exports.TryNonNullStruct = TryNonNullStruct;
  exports.IncludingStruct = IncludingStruct;
  exports.PodUnion = PodUnion;
  exports.UnionOfUnions = UnionOfUnions;
  exports.ObjectUnion = ObjectUnion;
  exports.HandleUnion = HandleUnion;
  exports.ObjectOnlyUnion = ObjectOnlyUnion;
  exports.OldUnion = OldUnion;
  exports.NewUnion = NewUnion;
  exports.SmallCache = SmallCache;
  exports.UnionInterface = UnionInterface;


  return exports;
});
