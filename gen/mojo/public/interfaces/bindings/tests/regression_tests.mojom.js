// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/regression_tests.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {
  var EnumWithReference = {};
  EnumWithReference.k_STEREO_AND_KEYBOARD_MIC = 30;
  EnumWithReference.k_MAX = EnumWithReference.k_STEREO_AND_KEYBOARD_MIC;
  var EnumWithLowercase = {};
  EnumWithLowercase.PlanarF16 = 0;
  EnumWithLowercase.PlanarF32 = EnumWithLowercase.PlanarF16 + 1;
  var EnumWithNumbers = {};
  EnumWithNumbers.k_2_1 = 4;
  var EnumWithK = {};
  EnumWithK.K = 0;
  var EnumWithINTERNALAllCaps = {};
  EnumWithINTERNALAllCaps.STANDARD = 0;
  EnumWithINTERNALAllCaps.FULLSCREEN = EnumWithINTERNALAllCaps.STANDARD + 1;
  EnumWithINTERNALAllCaps.IMMERSIVE = EnumWithINTERNALAllCaps.FULLSCREEN + 1;
  var NormalEnum = {};
  NormalEnum.FIRST = 0;
  NormalEnum.SECOND = NormalEnum.FIRST + 1;
  var CamelCaseTestEnum = {};
  CamelCaseTestEnum.BOOL_THING = 0;
  CamelCaseTestEnum.DOUBLE_THING = CamelCaseTestEnum.BOOL_THING + 1;
  CamelCaseTestEnum.FLOAT_THING = CamelCaseTestEnum.DOUBLE_THING + 1;
  CamelCaseTestEnum.INT8_THING = CamelCaseTestEnum.FLOAT_THING + 1;
  CamelCaseTestEnum.INT16THING = CamelCaseTestEnum.INT8_THING + 1;
  CamelCaseTestEnum.INT32_TH1NG = CamelCaseTestEnum.INT16THING + 1;
  CamelCaseTestEnum.INT64_Th1ng = CamelCaseTestEnum.INT32_TH1NG + 1;
  CamelCaseTestEnum.UINT8T_h1ng = CamelCaseTestEnum.INT64_Th1ng + 1;
  CamelCaseTestEnum.UINT16t_h1NG = CamelCaseTestEnum.UINT8T_h1ng + 1;
  CamelCaseTestEnum.UINT32_TH1ng = CamelCaseTestEnum.UINT16t_h1NG + 1;
  CamelCaseTestEnum.UINT64_TH1NG = CamelCaseTestEnum.UINT32_TH1ng + 1;

  function Edge(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Edge.prototype.initDefaults_ = function() {
    this.v = null;
  };
  Edge.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Edge.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Edge.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Edge.v
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, Vertex, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Edge.encodedSize = codec.kStructHeaderSize + 8;

  Edge.decode = function(decoder) {
    var packed;
    var val = new Edge();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.v = decoder.decodeStructPointer(Vertex);
    return val;
  };

  Edge.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Edge.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(Vertex, val.v);
  };

  function Vertex(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Vertex.prototype.initDefaults_ = function() {
    this.e = null;
  };
  Vertex.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Vertex.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Vertex.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Vertex.e
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, EmptyStruct, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Vertex.encodedSize = codec.kStructHeaderSize + 8;

  Vertex.decode = function(decoder) {
    var packed;
    var val = new Vertex();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.e = decoder.decodeStructPointer(EmptyStruct);
    return val;
  };

  Vertex.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Vertex.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(EmptyStruct, val.e);
  };

  function EmptyStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EmptyStruct.prototype.initDefaults_ = function() {
  };
  EmptyStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EmptyStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, EmptyStruct.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EmptyStruct.encodedSize = codec.kStructHeaderSize + 0;

  EmptyStruct.decode = function(decoder) {
    var packed;
    var val = new EmptyStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  EmptyStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EmptyStruct.encodedSize);
    encoder.writeUint32(0);
  };

  function A(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  A.prototype.initDefaults_ = function() {
    this.b = null;
  };
  A.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  A.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, A.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate A.b
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, B, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  A.encodedSize = codec.kStructHeaderSize + 8;

  A.decode = function(decoder) {
    var packed;
    var val = new A();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.b = decoder.decodeStructPointer(B);
    return val;
  };

  A.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(A.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(B, val.b);
  };

  function B(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  B.prototype.initDefaults_ = function() {
    this.a = null;
  };
  B.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  B.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, B.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate B.a
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, A, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  B.encodedSize = codec.kStructHeaderSize + 8;

  B.decode = function(decoder) {
    var packed;
    var val = new B();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStructPointer(A);
    return val;
  };

  B.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(B.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(A, val.a);
  };

  function StructWithHandleCalledHandles(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructWithHandleCalledHandles.prototype.initDefaults_ = function() {
    this.handles = null;
  };
  StructWithHandleCalledHandles.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructWithHandleCalledHandles.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructWithHandleCalledHandles.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithHandleCalledHandles.handles
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructWithHandleCalledHandles.encodedSize = codec.kStructHeaderSize + 8;

  StructWithHandleCalledHandles.decode = function(decoder) {
    var packed;
    var val = new StructWithHandleCalledHandles();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.handles = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  StructWithHandleCalledHandles.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructWithHandleCalledHandles.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.handles);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function StructWithArrayOfHandlesCalledHandles(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructWithArrayOfHandlesCalledHandles.prototype.initDefaults_ = function() {
    this.handles = null;
  };
  StructWithArrayOfHandlesCalledHandles.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructWithArrayOfHandlesCalledHandles.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructWithArrayOfHandlesCalledHandles.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithArrayOfHandlesCalledHandles.handles
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Handle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructWithArrayOfHandlesCalledHandles.encodedSize = codec.kStructHeaderSize + 8;

  StructWithArrayOfHandlesCalledHandles.decode = function(decoder) {
    var packed;
    var val = new StructWithArrayOfHandlesCalledHandles();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.handles = decoder.decodeArrayPointer(codec.Handle);
    return val;
  };

  StructWithArrayOfHandlesCalledHandles.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructWithArrayOfHandlesCalledHandles.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Handle, val.handles);
  };

  function StructWithInterfaceCalledHandles(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructWithInterfaceCalledHandles.prototype.initDefaults_ = function() {
    this.handles = null;
  };
  StructWithInterfaceCalledHandles.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructWithInterfaceCalledHandles.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructWithInterfaceCalledHandles.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructWithInterfaceCalledHandles.handles
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructWithInterfaceCalledHandles.encodedSize = codec.kStructHeaderSize + 8;

  StructWithInterfaceCalledHandles.decode = function(decoder) {
    var packed;
    var val = new StructWithInterfaceCalledHandles();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.handles = decoder.decodeStruct(codec.Interface);
    return val;
  };

  StructWithInterfaceCalledHandles.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructWithInterfaceCalledHandles.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Interface, val.handles);
  };

  function ContainsArrayOfEnum(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContainsArrayOfEnum.prototype.initDefaults_ = function() {
    this.array_of_enums = null;
  };
  ContainsArrayOfEnum.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContainsArrayOfEnum.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContainsArrayOfEnum.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContainsArrayOfEnum.array_of_enums
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Int32, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContainsArrayOfEnum.encodedSize = codec.kStructHeaderSize + 8;

  ContainsArrayOfEnum.decode = function(decoder) {
    var packed;
    var val = new ContainsArrayOfEnum();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.array_of_enums = decoder.decodeArrayPointer(codec.Int32);
    return val;
  };

  ContainsArrayOfEnum.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContainsArrayOfEnum.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Int32, val.array_of_enums);
  };

  function CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params.prototype.initDefaults_ = function() {
  };
  CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params.encodedSize = codec.kStructHeaderSize + 0;

  CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params.decode = function(decoder) {
    var packed;
    var val = new CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams.prototype.initDefaults_ = function() {
  };
  CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };

  function CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params.prototype.initDefaults_ = function() {
    this.b = false;
  };
  CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params.encodedSize = codec.kStructHeaderSize + 8;

  CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params.decode = function(decoder) {
    var packed;
    var val = new CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.b = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.b);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams.prototype.initDefaults_ = function() {
  };
  CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };

  function CheckNameCollision_WithNameCollision_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CheckNameCollision_WithNameCollision_Params.prototype.initDefaults_ = function() {
    this.message = false;
    this.response = false;
  };
  CheckNameCollision_WithNameCollision_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CheckNameCollision_WithNameCollision_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CheckNameCollision_WithNameCollision_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  CheckNameCollision_WithNameCollision_Params.encodedSize = codec.kStructHeaderSize + 8;

  CheckNameCollision_WithNameCollision_Params.decode = function(decoder) {
    var packed;
    var val = new CheckNameCollision_WithNameCollision_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.message = (packed >> 0) & 1 ? true : false;
    val.response = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CheckNameCollision_WithNameCollision_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CheckNameCollision_WithNameCollision_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.message & 1) << 0
    packed |= (val.response & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CheckNameCollision_WithNameCollision_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CheckNameCollision_WithNameCollision_ResponseParams.prototype.initDefaults_ = function() {
    this.message = false;
    this.response = false;
  };
  CheckNameCollision_WithNameCollision_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CheckNameCollision_WithNameCollision_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CheckNameCollision_WithNameCollision_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  CheckNameCollision_WithNameCollision_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CheckNameCollision_WithNameCollision_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CheckNameCollision_WithNameCollision_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.message = (packed >> 0) & 1 ? true : false;
    val.response = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CheckNameCollision_WithNameCollision_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CheckNameCollision_WithNameCollision_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.message & 1) << 0
    packed |= (val.response & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params.prototype.initDefaults_ = function() {
    this.e = 0;
  };
  CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params.encodedSize = codec.kStructHeaderSize + 8;

  CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params.decode = function(decoder) {
    var packed;
    var val = new CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.e = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.e);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function TestInterface_SomeMessage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestInterface_SomeMessage_Params.prototype.initDefaults_ = function() {
  };
  TestInterface_SomeMessage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestInterface_SomeMessage_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TestInterface_SomeMessage_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TestInterface_SomeMessage_Params.encodedSize = codec.kStructHeaderSize + 0;

  TestInterface_SomeMessage_Params.decode = function(decoder) {
    var packed;
    var val = new TestInterface_SomeMessage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TestInterface_SomeMessage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestInterface_SomeMessage_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function Regression551_Get_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Regression551_Get_Params.prototype.initDefaults_ = function() {
    this.key_prefixes = null;
  };
  Regression551_Get_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Regression551_Get_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Regression551_Get_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Regression551_Get_Params.key_prefixes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Regression551_Get_Params.encodedSize = codec.kStructHeaderSize + 8;

  Regression551_Get_Params.decode = function(decoder) {
    var packed;
    var val = new Regression551_Get_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key_prefixes = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  Regression551_Get_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Regression551_Get_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.key_prefixes);
  };

  function Regression551_Get_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Regression551_Get_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  Regression551_Get_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Regression551_Get_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Regression551_Get_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Regression551_Get_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Regression551_Get_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Regression551_Get_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Regression551_Get_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Regression551_Get_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ServiceName_serviceName_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceName_serviceName_Params.prototype.initDefaults_ = function() {
  };
  ServiceName_serviceName_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceName_serviceName_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ServiceName_serviceName_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceName_serviceName_Params.encodedSize = codec.kStructHeaderSize + 0;

  ServiceName_serviceName_Params.decode = function(decoder) {
    var packed;
    var val = new ServiceName_serviceName_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ServiceName_serviceName_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceName_serviceName_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function ServiceName_serviceName_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceName_serviceName_ResponseParams.prototype.initDefaults_ = function() {
    this.serviceName = null;
  };
  ServiceName_serviceName_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceName_serviceName_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ServiceName_serviceName_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ServiceName_serviceName_ResponseParams.serviceName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceName_serviceName_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ServiceName_serviceName_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ServiceName_serviceName_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serviceName = decoder.decodeStruct(codec.String);
    return val;
  };

  ServiceName_serviceName_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceName_serviceName_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.serviceName);
  };

  var kCheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Name = 0;
  var kCheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Name = 1;

  function CheckMethodWithEmptyResponseProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  CheckMethodWithEmptyResponseProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  CheckMethodWithEmptyResponseProxy.prototype.withoutParameterAndEmptyResponse = function() {
    var params = new CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kCheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Name,
          codec.align(CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CheckMethodWithEmptyResponseProxy.prototype.withParameterAndEmptyResponse = function(b) {
    var params = new CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params();
    params.b = b;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kCheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Name,
          codec.align(CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function CheckMethodWithEmptyResponseStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  CheckMethodWithEmptyResponseStub.prototype = Object.create(bindings.StubBase.prototype);
  CheckMethodWithEmptyResponseStub.prototype.withoutParameterAndEmptyResponse = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.withoutParameterAndEmptyResponse && bindings.StubBindings(this).delegate.withoutParameterAndEmptyResponse();
  }
  CheckMethodWithEmptyResponseStub.prototype.withParameterAndEmptyResponse = function(b) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.withParameterAndEmptyResponse && bindings.StubBindings(this).delegate.withParameterAndEmptyResponse(b);
  }

  CheckMethodWithEmptyResponseStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  CheckMethodWithEmptyResponseStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Name:
      var params = reader.decodeStruct(CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params);
      return this.withoutParameterAndEmptyResponse().then(function(response) {
        var responseParams =
            new CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams();
        var builder = new codec.MessageWithRequestIDBuilder(
            kCheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Name,
            codec.align(CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kCheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Name:
      var params = reader.decodeStruct(CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params);
      return this.withParameterAndEmptyResponse(params.b).then(function(response) {
        var responseParams =
            new CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams();
        var builder = new codec.MessageWithRequestIDBuilder(
            kCheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Name,
            codec.align(CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateCheckMethodWithEmptyResponseRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Name:
        if (message.expectsResponse())
          paramsClass = CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Params;
      break;
      case kCheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Name:
        if (message.expectsResponse())
          paramsClass = CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCheckMethodWithEmptyResponseResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_Name:
        if (message.isResponse())
          paramsClass = CheckMethodWithEmptyResponse_WithoutParameterAndEmptyResponse_ResponseParams;
        break;
      case kCheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_Name:
        if (message.isResponse())
          paramsClass = CheckMethodWithEmptyResponse_WithParameterAndEmptyResponse_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CheckMethodWithEmptyResponse = {
    name: null,
    proxyClass: CheckMethodWithEmptyResponseProxy,
    stubClass: CheckMethodWithEmptyResponseStub,
    validateRequest: validateCheckMethodWithEmptyResponseRequest,
    validateResponse: validateCheckMethodWithEmptyResponseResponse,
  };
  CheckMethodWithEmptyResponseStub.prototype.validator = validateCheckMethodWithEmptyResponseRequest;
  CheckMethodWithEmptyResponseProxy.prototype.validator = validateCheckMethodWithEmptyResponseResponse;

  var kCheckNameCollision_WithNameCollision_Name = 0;

  function CheckNameCollisionProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  CheckNameCollisionProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  CheckNameCollisionProxy.prototype.withNameCollision = function(message, response) {
    var params = new CheckNameCollision_WithNameCollision_Params();
    params.message = message;
    params.response = response;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kCheckNameCollision_WithNameCollision_Name,
          codec.align(CheckNameCollision_WithNameCollision_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CheckNameCollision_WithNameCollision_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CheckNameCollision_WithNameCollision_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function CheckNameCollisionStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  CheckNameCollisionStub.prototype = Object.create(bindings.StubBase.prototype);
  CheckNameCollisionStub.prototype.withNameCollision = function(message, response) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.withNameCollision && bindings.StubBindings(this).delegate.withNameCollision(message, response);
  }

  CheckNameCollisionStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  CheckNameCollisionStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCheckNameCollision_WithNameCollision_Name:
      var params = reader.decodeStruct(CheckNameCollision_WithNameCollision_Params);
      return this.withNameCollision(params.message, params.response).then(function(response) {
        var responseParams =
            new CheckNameCollision_WithNameCollision_ResponseParams();
        responseParams.message = response.message;
        responseParams.response = response.response;
        var builder = new codec.MessageWithRequestIDBuilder(
            kCheckNameCollision_WithNameCollision_Name,
            codec.align(CheckNameCollision_WithNameCollision_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CheckNameCollision_WithNameCollision_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateCheckNameCollisionRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCheckNameCollision_WithNameCollision_Name:
        if (message.expectsResponse())
          paramsClass = CheckNameCollision_WithNameCollision_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCheckNameCollisionResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCheckNameCollision_WithNameCollision_Name:
        if (message.isResponse())
          paramsClass = CheckNameCollision_WithNameCollision_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CheckNameCollision = {
    name: null,
    proxyClass: CheckNameCollisionProxy,
    stubClass: CheckNameCollisionStub,
    validateRequest: validateCheckNameCollisionRequest,
    validateResponse: validateCheckNameCollisionResponse,
  };
  CheckNameCollisionStub.prototype.validator = validateCheckNameCollisionRequest;
  CheckNameCollisionProxy.prototype.validator = validateCheckNameCollisionResponse;

  var kCheckEnumCaps_SetEnumWithINTERNALAllCaps_Name = 0;

  function CheckEnumCapsProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  CheckEnumCapsProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  CheckEnumCapsProxy.prototype.setEnumWithINTERNALAllCaps = function(e) {
    var params = new CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params();
    params.e = e;
    var builder = new codec.MessageBuilder(
        kCheckEnumCaps_SetEnumWithINTERNALAllCaps_Name,
        codec.align(CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params.encodedSize));
    builder.encodeStruct(CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CheckEnumCapsStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  CheckEnumCapsStub.prototype = Object.create(bindings.StubBase.prototype);
  CheckEnumCapsStub.prototype.setEnumWithINTERNALAllCaps = function(e) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.setEnumWithINTERNALAllCaps && bindings.StubBindings(this).delegate.setEnumWithINTERNALAllCaps(e);
  }

  CheckEnumCapsStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCheckEnumCaps_SetEnumWithINTERNALAllCaps_Name:
      var params = reader.decodeStruct(CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params);
      this.setEnumWithINTERNALAllCaps(params.e);
      return true;
    default:
      return false;
    }
  };

  CheckEnumCapsStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateCheckEnumCapsRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCheckEnumCaps_SetEnumWithINTERNALAllCaps_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CheckEnumCaps_SetEnumWithINTERNALAllCaps_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCheckEnumCapsResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CheckEnumCaps = {
    name: null,
    proxyClass: CheckEnumCapsProxy,
    stubClass: CheckEnumCapsStub,
    validateRequest: validateCheckEnumCapsRequest,
    validateResponse: null,
  };
  CheckEnumCapsStub.prototype.validator = validateCheckEnumCapsRequest;
  CheckEnumCapsProxy.prototype.validator = null;

  var kTestInterface_SomeMessage_Name = 0;

  function TestInterfaceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  TestInterfaceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  TestInterfaceProxy.prototype.someMessage = function() {
    var params = new TestInterface_SomeMessage_Params();
    var builder = new codec.MessageBuilder(
        kTestInterface_SomeMessage_Name,
        codec.align(TestInterface_SomeMessage_Params.encodedSize));
    builder.encodeStruct(TestInterface_SomeMessage_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function TestInterfaceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  TestInterfaceStub.prototype = Object.create(bindings.StubBase.prototype);
  TestInterfaceStub.prototype.someMessage = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.someMessage && bindings.StubBindings(this).delegate.someMessage();
  }

  TestInterfaceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTestInterface_SomeMessage_Name:
      var params = reader.decodeStruct(TestInterface_SomeMessage_Params);
      this.someMessage();
      return true;
    default:
      return false;
    }
  };

  TestInterfaceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateTestInterfaceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTestInterface_SomeMessage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = TestInterface_SomeMessage_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTestInterfaceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var TestInterface = {
    name: null,
    proxyClass: TestInterfaceProxy,
    stubClass: TestInterfaceStub,
    validateRequest: validateTestInterfaceRequest,
    validateResponse: null,
  };
  TestInterfaceStub.prototype.validator = validateTestInterfaceRequest;
  TestInterfaceProxy.prototype.validator = null;

  var kRegression551_Get_Name = 0;

  function Regression551Proxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  Regression551Proxy.prototype = Object.create(bindings.ProxyBase.prototype);
  Regression551Proxy.prototype.get = function(key_prefixes) {
    var params = new Regression551_Get_Params();
    params.key_prefixes = key_prefixes;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kRegression551_Get_Name,
          codec.align(Regression551_Get_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Regression551_Get_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Regression551_Get_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function Regression551Stub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  Regression551Stub.prototype = Object.create(bindings.StubBase.prototype);
  Regression551Stub.prototype.get = function(key_prefixes) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.get && bindings.StubBindings(this).delegate.get(key_prefixes);
  }

  Regression551Stub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  Regression551Stub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kRegression551_Get_Name:
      var params = reader.decodeStruct(Regression551_Get_Params);
      return this.get(params.key_prefixes).then(function(response) {
        var responseParams =
            new Regression551_Get_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageWithRequestIDBuilder(
            kRegression551_Get_Name,
            codec.align(Regression551_Get_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Regression551_Get_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateRegression551Request(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kRegression551_Get_Name:
        if (message.expectsResponse())
          paramsClass = Regression551_Get_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateRegression551Response(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kRegression551_Get_Name:
        if (message.isResponse())
          paramsClass = Regression551_Get_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Regression551 = {
    name: null,
    proxyClass: Regression551Proxy,
    stubClass: Regression551Stub,
    validateRequest: validateRegression551Request,
    validateResponse: validateRegression551Response,
  };
  Regression551Stub.prototype.validator = validateRegression551Request;
  Regression551Proxy.prototype.validator = validateRegression551Response;

  var kServiceName_serviceName_Name = 0;

  function ServiceNameProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ServiceNameProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ServiceNameProxy.prototype.serviceName = function() {
    var params = new ServiceName_serviceName_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kServiceName_serviceName_Name,
          codec.align(ServiceName_serviceName_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ServiceName_serviceName_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ServiceName_serviceName_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ServiceNameStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ServiceNameStub.prototype = Object.create(bindings.StubBase.prototype);
  ServiceNameStub.prototype.serviceName = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.serviceName && bindings.StubBindings(this).delegate.serviceName();
  }

  ServiceNameStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ServiceNameStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kServiceName_serviceName_Name:
      var params = reader.decodeStruct(ServiceName_serviceName_Params);
      return this.serviceName().then(function(response) {
        var responseParams =
            new ServiceName_serviceName_ResponseParams();
        responseParams.serviceName = response.serviceName;
        var builder = new codec.MessageWithRequestIDBuilder(
            kServiceName_serviceName_Name,
            codec.align(ServiceName_serviceName_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ServiceName_serviceName_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateServiceNameRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kServiceName_serviceName_Name:
        if (message.expectsResponse())
          paramsClass = ServiceName_serviceName_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateServiceNameResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kServiceName_serviceName_Name:
        if (message.isResponse())
          paramsClass = ServiceName_serviceName_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ServiceName = {
    name: null,
    proxyClass: ServiceNameProxy,
    stubClass: ServiceNameStub,
    validateRequest: validateServiceNameRequest,
    validateResponse: validateServiceNameResponse,
  };
  ServiceNameStub.prototype.validator = validateServiceNameRequest;
  ServiceNameProxy.prototype.validator = validateServiceNameResponse;


  var exports = {};
  exports.EnumWithReference = EnumWithReference;
  exports.EnumWithLowercase = EnumWithLowercase;
  exports.EnumWithNumbers = EnumWithNumbers;
  exports.EnumWithK = EnumWithK;
  exports.EnumWithINTERNALAllCaps = EnumWithINTERNALAllCaps;
  exports.NormalEnum = NormalEnum;
  exports.CamelCaseTestEnum = CamelCaseTestEnum;
  exports.Edge = Edge;
  exports.Vertex = Vertex;
  exports.EmptyStruct = EmptyStruct;
  exports.A = A;
  exports.B = B;
  exports.StructWithHandleCalledHandles = StructWithHandleCalledHandles;
  exports.StructWithArrayOfHandlesCalledHandles = StructWithArrayOfHandlesCalledHandles;
  exports.StructWithInterfaceCalledHandles = StructWithInterfaceCalledHandles;
  exports.ContainsArrayOfEnum = ContainsArrayOfEnum;
  exports.CheckMethodWithEmptyResponse = CheckMethodWithEmptyResponse;
  exports.CheckNameCollision = CheckNameCollision;
  exports.CheckEnumCaps = CheckEnumCaps;
  exports.TestInterface = TestInterface;
  exports.Regression551 = Regression551;
  exports.ServiceName = ServiceName;


  return exports;
});
