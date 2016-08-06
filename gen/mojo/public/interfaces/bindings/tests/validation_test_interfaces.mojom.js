// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/validation_test_interfaces.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {
  var BasicEnum = {};
  BasicEnum.A = 0;
  BasicEnum.B = BasicEnum.A + 1;
  BasicEnum.C = BasicEnum.A;
  BasicEnum.D = -3;
  BasicEnum.E = 10;

  function StructA(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructA.prototype.initDefaults_ = function() {
    this.i = 0;
  };
  StructA.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructA.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructA.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  StructA.encodedSize = codec.kStructHeaderSize + 8;

  StructA.decode = function(decoder) {
    var packed;
    var val = new StructA();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.i = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  StructA.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructA.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.i);
  };

  function StructB(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructB.prototype.initDefaults_ = function() {
    this.struct_a = null;
  };
  StructB.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructB.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructB.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructB.struct_a
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, StructA, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructB.encodedSize = codec.kStructHeaderSize + 8;

  StructB.decode = function(decoder) {
    var packed;
    var val = new StructB();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.struct_a = decoder.decodeStructPointer(StructA);
    return val;
  };

  StructB.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructB.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(StructA, val.struct_a);
  };

  function StructC(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructC.prototype.initDefaults_ = function() {
    this.data = null;
  };
  StructC.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructC.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructC.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructC.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructC.encodedSize = codec.kStructHeaderSize + 8;

  StructC.decode = function(decoder) {
    var packed;
    var val = new StructC();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  StructC.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructC.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.data);
  };

  function StructD(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructD.prototype.initDefaults_ = function() {
    this.message_pipes = null;
  };
  StructD.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructD.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructD.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructD.message_pipes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Handle, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructD.encodedSize = codec.kStructHeaderSize + 8;

  StructD.decode = function(decoder) {
    var packed;
    var val = new StructD();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message_pipes = decoder.decodeArrayPointer(codec.Handle);
    return val;
  };

  StructD.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructD.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Handle, val.message_pipes);
  };

  function StructE(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructE.prototype.initDefaults_ = function() {
    this.struct_d = null;
    this.data_pipe_consumer = null;
  };
  StructE.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructE.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructE.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructE.struct_d
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, StructD, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructE.data_pipe_consumer
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructE.encodedSize = codec.kStructHeaderSize + 16;

  StructE.decode = function(decoder) {
    var packed;
    var val = new StructE();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.struct_d = decoder.decodeStructPointer(StructD);
    val.data_pipe_consumer = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  StructE.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructE.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(StructD, val.struct_d);
    encoder.encodeStruct(codec.Handle, val.data_pipe_consumer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function StructF(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructF.prototype.initDefaults_ = function() {
    this.fixed_size_array = null;
  };
  StructF.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructF.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructF.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructF.fixed_size_array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [3], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructF.encodedSize = codec.kStructHeaderSize + 8;

  StructF.decode = function(decoder) {
    var packed;
    var val = new StructF();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fixed_size_array = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  StructF.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructF.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.fixed_size_array);
  };

  function StructG(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructG.prototype.initDefaults_ = function() {
    this.i = 0;
    this.b = false;
    this.struct_a = null;
    this.str = null;
  };
  StructG.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructG.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructG.encodedSize, 3);
    if (err !== validator.validationError.NONE)
        return err;



    
    // validate StructG.struct_a
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, StructA, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructG.str
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructG.encodedSize = codec.kStructHeaderSize + 24;

  StructG.decode = function(decoder) {
    var packed;
    var val = new StructG();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.i = decoder.decodeStruct(codec.Int32);
    val.b = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.struct_a = decoder.decodeStructPointer(StructA);
    val.str = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  StructG.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructG.encodedSize);
    encoder.writeUint32(3);
    encoder.encodeStruct(codec.Int32, val.i);
    encoder.encodeStruct(codec.Uint8, val.b);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(StructA, val.struct_a);
    encoder.encodeStruct(codec.NullableString, val.str);
  };

  function StructH(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructH.prototype.initDefaults_ = function() {
    this.a = false;
    this.b = 0;
    this.c = null;
    this.d = null;
    this.e = null;
  };
  StructH.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructH.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructH.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate StructH.c
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, UnionA, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructH.d
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 16, new codec.UnionWrapper(UnionA), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StructH.e
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 32, true, codec.Uint8, new codec.UnionWrapper(UnionA), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructH.encodedSize = codec.kStructHeaderSize + 40;

  StructH.decode = function(decoder) {
    var packed;
    var val = new StructH();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStruct(codec.Uint8);
    val.b = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.c = decoder.decodeStruct(UnionA);
    val.d = decoder.decodeArrayPointer(UnionA);
    val.e = decoder.decodeMapPointer(codec.Uint8, new codec.UnionWrapper(UnionA));
    return val;
  };

  StructH.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructH.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.a);
    encoder.encodeStruct(codec.Uint8, val.b);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(UnionA, val.c);
    encoder.encodeArrayPointer(UnionA, val.d);
    encoder.encodeMapPointer(codec.Uint8, new codec.UnionWrapper(UnionA), val.e);
  };

  function BasicStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BasicStruct.prototype.initDefaults_ = function() {
    this.a = 0;
  };
  BasicStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BasicStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, BasicStruct.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  BasicStruct.encodedSize = codec.kStructHeaderSize + 8;

  BasicStruct.decode = function(decoder) {
    var packed;
    var val = new BasicStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BasicStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BasicStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.a);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function StructWithEnum(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  StructWithEnum.EnumWithin = {};
  StructWithEnum.EnumWithin.A = 0;
  StructWithEnum.EnumWithin.B = StructWithEnum.EnumWithin.A + 1;
  StructWithEnum.EnumWithin.C = StructWithEnum.EnumWithin.B + 1;
  StructWithEnum.EnumWithin.D = StructWithEnum.EnumWithin.C + 1;

  StructWithEnum.prototype.initDefaults_ = function() {
  };
  StructWithEnum.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructWithEnum.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StructWithEnum.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructWithEnum.encodedSize = codec.kStructHeaderSize + 0;

  StructWithEnum.decode = function(decoder) {
    var packed;
    var val = new StructWithEnum();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  StructWithEnum.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructWithEnum.encodedSize);
    encoder.writeUint32(0);
  };

  function BoundsCheckTestInterface_Method0_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BoundsCheckTestInterface_Method0_Params.prototype.initDefaults_ = function() {
    this.param0 = 0;
  };
  BoundsCheckTestInterface_Method0_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BoundsCheckTestInterface_Method0_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, BoundsCheckTestInterface_Method0_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  BoundsCheckTestInterface_Method0_Params.encodedSize = codec.kStructHeaderSize + 8;

  BoundsCheckTestInterface_Method0_Params.decode = function(decoder) {
    var packed;
    var val = new BoundsCheckTestInterface_Method0_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BoundsCheckTestInterface_Method0_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BoundsCheckTestInterface_Method0_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.param0);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function BoundsCheckTestInterface_Method0_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BoundsCheckTestInterface_Method0_ResponseParams.prototype.initDefaults_ = function() {
    this.param0 = 0;
  };
  BoundsCheckTestInterface_Method0_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BoundsCheckTestInterface_Method0_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, BoundsCheckTestInterface_Method0_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  BoundsCheckTestInterface_Method0_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  BoundsCheckTestInterface_Method0_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BoundsCheckTestInterface_Method0_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BoundsCheckTestInterface_Method0_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BoundsCheckTestInterface_Method0_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.param0);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function BoundsCheckTestInterface_Method1_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BoundsCheckTestInterface_Method1_Params.prototype.initDefaults_ = function() {
    this.param0 = 0;
  };
  BoundsCheckTestInterface_Method1_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BoundsCheckTestInterface_Method1_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, BoundsCheckTestInterface_Method1_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  BoundsCheckTestInterface_Method1_Params.encodedSize = codec.kStructHeaderSize + 8;

  BoundsCheckTestInterface_Method1_Params.decode = function(decoder) {
    var packed;
    var val = new BoundsCheckTestInterface_Method1_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BoundsCheckTestInterface_Method1_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BoundsCheckTestInterface_Method1_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.param0);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ConformanceTestInterface_Method0_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method0_Params.prototype.initDefaults_ = function() {
    this.param0 = 0;
  };
  ConformanceTestInterface_Method0_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method0_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method0_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method0_Params.encodedSize = codec.kStructHeaderSize + 8;

  ConformanceTestInterface_Method0_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method0_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ConformanceTestInterface_Method0_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method0_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.param0);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ConformanceTestInterface_Method1_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method1_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
  };
  ConformanceTestInterface_Method1_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method1_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method1_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method1_Params.param0
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, StructA, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method1_Params.encodedSize = codec.kStructHeaderSize + 8;

  ConformanceTestInterface_Method1_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method1_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStructPointer(StructA);
    return val;
  };

  ConformanceTestInterface_Method1_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method1_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(StructA, val.param0);
  };

  function ConformanceTestInterface_Method2_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method2_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
    this.param1 = null;
  };
  ConformanceTestInterface_Method2_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method2_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method2_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method2_Params.param0
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, StructB, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method2_Params.param1
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, StructA, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method2_Params.encodedSize = codec.kStructHeaderSize + 16;

  ConformanceTestInterface_Method2_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method2_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStructPointer(StructB);
    val.param1 = decoder.decodeStructPointer(StructA);
    return val;
  };

  ConformanceTestInterface_Method2_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method2_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(StructB, val.param0);
    encoder.encodeStructPointer(StructA, val.param1);
  };

  function ConformanceTestInterface_Method3_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method3_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
  };
  ConformanceTestInterface_Method3_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method3_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method3_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method3_Params.param0
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.PackedBool, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method3_Params.encodedSize = codec.kStructHeaderSize + 8;

  ConformanceTestInterface_Method3_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method3_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeArrayPointer(codec.PackedBool);
    return val;
  };

  ConformanceTestInterface_Method3_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method3_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.PackedBool, val.param0);
  };

  function ConformanceTestInterface_Method4_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method4_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
    this.param1 = null;
  };
  ConformanceTestInterface_Method4_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method4_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method4_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method4_Params.param0
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, StructC, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method4_Params.param1
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method4_Params.encodedSize = codec.kStructHeaderSize + 16;

  ConformanceTestInterface_Method4_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method4_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStructPointer(StructC);
    val.param1 = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  ConformanceTestInterface_Method4_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method4_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(StructC, val.param0);
    encoder.encodeArrayPointer(codec.Uint8, val.param1);
  };

  function ConformanceTestInterface_Method5_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method5_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
    this.param1 = null;
  };
  ConformanceTestInterface_Method5_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method5_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method5_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method5_Params.param0
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, StructE, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method5_Params.param1
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method5_Params.encodedSize = codec.kStructHeaderSize + 16;

  ConformanceTestInterface_Method5_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method5_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStructPointer(StructE);
    val.param1 = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ConformanceTestInterface_Method5_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method5_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(StructE, val.param0);
    encoder.encodeStruct(codec.Handle, val.param1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ConformanceTestInterface_Method6_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method6_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
  };
  ConformanceTestInterface_Method6_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method6_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method6_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method6_Params.param0
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.ArrayOf(codec.Uint8), false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method6_Params.encodedSize = codec.kStructHeaderSize + 8;

  ConformanceTestInterface_Method6_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method6_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeArrayPointer(new codec.ArrayOf(codec.Uint8));
    return val;
  };

  ConformanceTestInterface_Method6_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method6_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.ArrayOf(codec.Uint8), val.param0);
  };

  function ConformanceTestInterface_Method7_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method7_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
    this.param1 = null;
  };
  ConformanceTestInterface_Method7_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method7_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method7_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method7_Params.param0
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, StructF, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method7_Params.param1
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.NullableArrayOf(codec.Uint8, 3), false, [2, 3], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method7_Params.encodedSize = codec.kStructHeaderSize + 16;

  ConformanceTestInterface_Method7_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method7_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStructPointer(StructF);
    val.param1 = decoder.decodeArrayPointer(new codec.NullableArrayOf(codec.Uint8, 3));
    return val;
  };

  ConformanceTestInterface_Method7_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method7_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(StructF, val.param0);
    encoder.encodeArrayPointer(new codec.NullableArrayOf(codec.Uint8, 3), val.param1);
  };

  function ConformanceTestInterface_Method8_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method8_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
  };
  ConformanceTestInterface_Method8_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method8_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method8_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method8_Params.param0
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.NullableArrayOf(codec.String), false, [0, 0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method8_Params.encodedSize = codec.kStructHeaderSize + 8;

  ConformanceTestInterface_Method8_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method8_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeArrayPointer(new codec.NullableArrayOf(codec.String));
    return val;
  };

  ConformanceTestInterface_Method8_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method8_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.NullableArrayOf(codec.String), val.param0);
  };

  function ConformanceTestInterface_Method9_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method9_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
  };
  ConformanceTestInterface_Method9_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method9_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method9_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method9_Params.param0
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.ArrayOf(codec.NullableHandle), true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method9_Params.encodedSize = codec.kStructHeaderSize + 8;

  ConformanceTestInterface_Method9_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method9_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeArrayPointer(new codec.ArrayOf(codec.NullableHandle));
    return val;
  };

  ConformanceTestInterface_Method9_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method9_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.ArrayOf(codec.NullableHandle), val.param0);
  };

  function ConformanceTestInterface_Method10_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method10_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
  };
  ConformanceTestInterface_Method10_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method10_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method10_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method10_Params.param0
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, codec.Uint8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method10_Params.encodedSize = codec.kStructHeaderSize + 8;

  ConformanceTestInterface_Method10_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method10_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeMapPointer(codec.String, codec.Uint8);
    return val;
  };

  ConformanceTestInterface_Method10_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method10_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, codec.Uint8, val.param0);
  };

  function ConformanceTestInterface_Method11_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method11_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
  };
  ConformanceTestInterface_Method11_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method11_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method11_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method11_Params.param0
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, StructG, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method11_Params.encodedSize = codec.kStructHeaderSize + 8;

  ConformanceTestInterface_Method11_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method11_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStructPointer(StructG);
    return val;
  };

  ConformanceTestInterface_Method11_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method11_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(StructG, val.param0);
  };

  function ConformanceTestInterface_Method12_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method12_Params.prototype.initDefaults_ = function() {
    this.param0 = 0;
  };
  ConformanceTestInterface_Method12_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method12_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method12_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method12_Params.encodedSize = codec.kStructHeaderSize + 8;

  ConformanceTestInterface_Method12_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method12_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ConformanceTestInterface_Method12_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method12_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.param0);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ConformanceTestInterface_Method12_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method12_ResponseParams.prototype.initDefaults_ = function() {
    this.param0 = 0;
  };
  ConformanceTestInterface_Method12_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method12_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method12_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method12_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ConformanceTestInterface_Method12_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method12_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ConformanceTestInterface_Method12_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method12_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.param0);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ConformanceTestInterface_Method13_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method13_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
    this.param1 = 0;
    this.param2 = null;
  };
  ConformanceTestInterface_Method13_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method13_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method13_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method13_Params.param0
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, true);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate ConformanceTestInterface_Method13_Params.param2
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 12, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method13_Params.encodedSize = codec.kStructHeaderSize + 24;

  ConformanceTestInterface_Method13_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method13_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStruct(codec.NullableInterface);
    val.param1 = decoder.decodeStruct(codec.Uint32);
    val.param2 = decoder.decodeStruct(codec.NullableInterface);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ConformanceTestInterface_Method13_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method13_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableInterface, val.param0);
    encoder.encodeStruct(codec.Uint32, val.param1);
    encoder.encodeStruct(codec.NullableInterface, val.param2);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ConformanceTestInterface_Method14_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method14_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
  };
  ConformanceTestInterface_Method14_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method14_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method14_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    // validate ConformanceTestInterface_Method14_Params.param0
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, UnionA, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method14_Params.encodedSize = codec.kStructHeaderSize + 16;

  ConformanceTestInterface_Method14_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method14_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStruct(UnionA);
    return val;
  };

  ConformanceTestInterface_Method14_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method14_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(UnionA, val.param0);
  };

  function ConformanceTestInterface_Method15_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConformanceTestInterface_Method15_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
  };
  ConformanceTestInterface_Method15_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConformanceTestInterface_Method15_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ConformanceTestInterface_Method15_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ConformanceTestInterface_Method15_Params.param0
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, StructH, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConformanceTestInterface_Method15_Params.encodedSize = codec.kStructHeaderSize + 8;

  ConformanceTestInterface_Method15_Params.decode = function(decoder) {
    var packed;
    var val = new ConformanceTestInterface_Method15_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStructPointer(StructH);
    return val;
  };

  ConformanceTestInterface_Method15_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConformanceTestInterface_Method15_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(StructH, val.param0);
  };

  function IntegrationTestInterface_Method0_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IntegrationTestInterface_Method0_Params.prototype.initDefaults_ = function() {
    this.param0 = null;
  };
  IntegrationTestInterface_Method0_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IntegrationTestInterface_Method0_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, IntegrationTestInterface_Method0_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate IntegrationTestInterface_Method0_Params.param0
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, BasicStruct, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  IntegrationTestInterface_Method0_Params.encodedSize = codec.kStructHeaderSize + 8;

  IntegrationTestInterface_Method0_Params.decode = function(decoder) {
    var packed;
    var val = new IntegrationTestInterface_Method0_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeStructPointer(BasicStruct);
    return val;
  };

  IntegrationTestInterface_Method0_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IntegrationTestInterface_Method0_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(BasicStruct, val.param0);
  };

  function IntegrationTestInterface_Method0_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IntegrationTestInterface_Method0_ResponseParams.prototype.initDefaults_ = function() {
    this.param0 = null;
  };
  IntegrationTestInterface_Method0_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IntegrationTestInterface_Method0_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, IntegrationTestInterface_Method0_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate IntegrationTestInterface_Method0_ResponseParams.param0
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  IntegrationTestInterface_Method0_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  IntegrationTestInterface_Method0_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new IntegrationTestInterface_Method0_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.param0 = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  IntegrationTestInterface_Method0_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IntegrationTestInterface_Method0_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.param0);
  };


  function UnionA(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  UnionA.Tags = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
  };
  
  UnionA.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  UnionA.prototype.initValue_ = function(value) {
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
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a UnionA member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(UnionA.prototype, "a", {
    get: function() {
      if (this.$tag != UnionA.Tags.a) {
        throw new ReferenceError(
            "UnionA.a is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionA.Tags.a;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionA.prototype, "b", {
    get: function() {
      if (this.$tag != UnionA.Tags.b) {
        throw new ReferenceError(
            "UnionA.b is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionA.Tags.b;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionA.prototype, "c", {
    get: function() {
      if (this.$tag != UnionA.Tags.c) {
        throw new ReferenceError(
            "UnionA.c is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionA.Tags.c;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionA.prototype, "d", {
    get: function() {
      if (this.$tag != UnionA.Tags.d) {
        throw new ReferenceError(
            "UnionA.d is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionA.Tags.d;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionA.prototype, "e", {
    get: function() {
      if (this.$tag != UnionA.Tags.e) {
        throw new ReferenceError(
            "UnionA.e is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionA.Tags.e;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionA.prototype, "f", {
    get: function() {
      if (this.$tag != UnionA.Tags.f) {
        throw new ReferenceError(
            "UnionA.f is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionA.Tags.f;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionA.prototype, "g", {
    get: function() {
      if (this.$tag != UnionA.Tags.g) {
        throw new ReferenceError(
            "UnionA.g is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionA.Tags.g;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionA.prototype, "h", {
    get: function() {
      if (this.$tag != UnionA.Tags.h) {
        throw new ReferenceError(
            "UnionA.h is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionA.Tags.h;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionA.prototype, "i", {
    get: function() {
      if (this.$tag != UnionA.Tags.i) {
        throw new ReferenceError(
            "UnionA.i is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionA.Tags.i;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionA.prototype, "j", {
    get: function() {
      if (this.$tag != UnionA.Tags.j) {
        throw new ReferenceError(
            "UnionA.j is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionA.Tags.j;
      this.$data = value;
    }
  });
  
  
    UnionA.encode = function(encoder, val) {
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
        case UnionA.Tags.a:
          encoder.encodeStruct(codec.Uint16, val.a);
          break;
        case UnionA.Tags.b:
          encoder.encodeStruct(codec.Uint32, val.b);
          break;
        case UnionA.Tags.c:
          encoder.encodeStructPointer(StructA, val.c);
          break;
        case UnionA.Tags.d:
          encoder.encodeArrayPointer(codec.Uint8, val.d);
          break;
        case UnionA.Tags.e:
          encoder.encodeMapPointer(codec.String, codec.Uint8, val.e);
          break;
        case UnionA.Tags.f:
          encoder.encodeStructPointer(UnionB, val.f);
          break;
        case UnionA.Tags.g:
          encoder.encodeStructPointer(StructA, val.g);
          break;
        case UnionA.Tags.h:
          encoder.encodeArrayPointer(codec.Uint8, val.h);
          break;
        case UnionA.Tags.i:
          encoder.encodeMapPointer(codec.String, codec.Uint8, val.i);
          break;
        case UnionA.Tags.j:
          encoder.encodeStructPointer(UnionB, val.j);
          break;
      }
      encoder.align();
    };
  
  
    UnionA.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new UnionA();
      var tag = decoder.readUint32();
      switch (tag) {
        case UnionA.Tags.a:
          result.a = decoder.decodeStruct(codec.Uint16);
          break;
        case UnionA.Tags.b:
          result.b = decoder.decodeStruct(codec.Uint32);
          break;
        case UnionA.Tags.c:
          result.c = decoder.decodeStructPointer(StructA);
          break;
        case UnionA.Tags.d:
          result.d = decoder.decodeArrayPointer(codec.Uint8);
          break;
        case UnionA.Tags.e:
          result.e = decoder.decodeMapPointer(codec.String, codec.Uint8);
          break;
        case UnionA.Tags.f:
          result.f = decoder.decodeStructPointer(UnionB);
          break;
        case UnionA.Tags.g:
          result.g = decoder.decodeStructPointer(StructA);
          break;
        case UnionA.Tags.h:
          result.h = decoder.decodeArrayPointer(codec.Uint8);
          break;
        case UnionA.Tags.i:
          result.i = decoder.decodeMapPointer(codec.String, codec.Uint8);
          break;
        case UnionA.Tags.j:
          result.j = decoder.decodeStructPointer(UnionB);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    UnionA.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case UnionA.Tags.a:
          
    
          break;
        case UnionA.Tags.b:
          
    
          break;
        case UnionA.Tags.c:
          
    
    // validate UnionA.c
    err = messageValidator.validateStructPointer(data_offset, StructA, true);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionA.Tags.d:
          
    
    // validate UnionA.d
    err = messageValidator.validateArrayPointer(data_offset, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionA.Tags.e:
          
    
    // validate UnionA.e
    err = messageValidator.validateMapPointer(data_offset, true, codec.String, codec.Uint8, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionA.Tags.f:
          
    // validate UnionA.f
    err = messageValidator.validateNestedUnion(data_offset, UnionB, true);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionA.Tags.g:
          
    
    // validate UnionA.g
    err = messageValidator.validateStructPointer(data_offset, StructA, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionA.Tags.h:
          
    
    // validate UnionA.h
    err = messageValidator.validateArrayPointer(data_offset, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionA.Tags.i:
          
    
    // validate UnionA.i
    err = messageValidator.validateMapPointer(data_offset, false, codec.String, codec.Uint8, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UnionA.Tags.j:
          
    // validate UnionA.j
    err = messageValidator.validateNestedUnion(data_offset, UnionB, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  UnionA.encodedSize = 16;

  function UnionB(value) {
    this.initDefault_();
    this.initValue_(value);
  }
  
  
  UnionB.Tags = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  };
  
  UnionB.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }
  
  UnionB.prototype.initValue_ = function(value) {
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
        "b",
        "c",
        "d",
    ];
  
    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a UnionB member.");
  
    }
  
    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(UnionB.prototype, "a", {
    get: function() {
      if (this.$tag != UnionB.Tags.a) {
        throw new ReferenceError(
            "UnionB.a is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionB.Tags.a;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionB.prototype, "b", {
    get: function() {
      if (this.$tag != UnionB.Tags.b) {
        throw new ReferenceError(
            "UnionB.b is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionB.Tags.b;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionB.prototype, "c", {
    get: function() {
      if (this.$tag != UnionB.Tags.c) {
        throw new ReferenceError(
            "UnionB.c is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionB.Tags.c;
      this.$data = value;
    }
  });
  Object.defineProperty(UnionB.prototype, "d", {
    get: function() {
      if (this.$tag != UnionB.Tags.d) {
        throw new ReferenceError(
            "UnionB.d is not currently set.");
      }
      return this.$data;
    },
  
    set: function(value) {
      this.$tag = UnionB.Tags.d;
      this.$data = value;
    }
  });
  
  
    UnionB.encode = function(encoder, val) {
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
        case UnionB.Tags.a:
          encoder.encodeStruct(codec.Uint16, val.a);
          break;
        case UnionB.Tags.b:
          encoder.encodeStruct(codec.Uint32, val.b);
          break;
        case UnionB.Tags.c:
          encoder.encodeStruct(codec.Uint64, val.c);
          break;
        case UnionB.Tags.d:
          encoder.encodeStruct(codec.Uint32, val.d);
          break;
      }
      encoder.align();
    };
  
  
    UnionB.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }
    
      var result = new UnionB();
      var tag = decoder.readUint32();
      switch (tag) {
        case UnionB.Tags.a:
          result.a = decoder.decodeStruct(codec.Uint16);
          break;
        case UnionB.Tags.b:
          result.b = decoder.decodeStruct(codec.Uint32);
          break;
        case UnionB.Tags.c:
          result.c = decoder.decodeStruct(codec.Uint64);
          break;
        case UnionB.Tags.d:
          result.d = decoder.decodeStruct(codec.Uint32);
          break;
      }
      decoder.align();
    
      return result;
    };
  
  
    UnionB.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }
    
      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case UnionB.Tags.a:
          
    
          break;
        case UnionB.Tags.b:
          
    
          break;
        case UnionB.Tags.c:
          
    
          break;
        case UnionB.Tags.d:
          
    
          break;
      }
    
      return validator.validationError.NONE;
    };
  
  UnionB.encodedSize = 16;

  function InterfaceAProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  InterfaceAProxy.prototype = Object.create(bindings.ProxyBase.prototype);

  function InterfaceAStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  InterfaceAStub.prototype = Object.create(bindings.StubBase.prototype);

  InterfaceAStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  InterfaceAStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateInterfaceARequest(messageValidator) {
    return validator.validationError.NONE;
  }

  function validateInterfaceAResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var InterfaceA = {
    name: null,
    proxyClass: InterfaceAProxy,
    stubClass: InterfaceAStub,
    validateRequest: validateInterfaceARequest,
    validateResponse: null,
  };
  InterfaceAStub.prototype.validator = validateInterfaceARequest;
  InterfaceAProxy.prototype.validator = null;

  var kBoundsCheckTestInterface_Method0_Name = 0;
  var kBoundsCheckTestInterface_Method1_Name = 1;

  function BoundsCheckTestInterfaceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  BoundsCheckTestInterfaceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  BoundsCheckTestInterfaceProxy.prototype.method0 = function(param0) {
    var params = new BoundsCheckTestInterface_Method0_Params();
    params.param0 = param0;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kBoundsCheckTestInterface_Method0_Name,
          codec.align(BoundsCheckTestInterface_Method0_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BoundsCheckTestInterface_Method0_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BoundsCheckTestInterface_Method0_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  BoundsCheckTestInterfaceProxy.prototype.method1 = function(param0) {
    var params = new BoundsCheckTestInterface_Method1_Params();
    params.param0 = param0;
    var builder = new codec.MessageBuilder(
        kBoundsCheckTestInterface_Method1_Name,
        codec.align(BoundsCheckTestInterface_Method1_Params.encodedSize));
    builder.encodeStruct(BoundsCheckTestInterface_Method1_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function BoundsCheckTestInterfaceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  BoundsCheckTestInterfaceStub.prototype = Object.create(bindings.StubBase.prototype);
  BoundsCheckTestInterfaceStub.prototype.method0 = function(param0) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method0 && bindings.StubBindings(this).delegate.method0(param0);
  }
  BoundsCheckTestInterfaceStub.prototype.method1 = function(param0) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method1 && bindings.StubBindings(this).delegate.method1(param0);
  }

  BoundsCheckTestInterfaceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBoundsCheckTestInterface_Method1_Name:
      var params = reader.decodeStruct(BoundsCheckTestInterface_Method1_Params);
      this.method1(params.param0);
      return true;
    default:
      return false;
    }
  };

  BoundsCheckTestInterfaceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBoundsCheckTestInterface_Method0_Name:
      var params = reader.decodeStruct(BoundsCheckTestInterface_Method0_Params);
      return this.method0(params.param0).then(function(response) {
        var responseParams =
            new BoundsCheckTestInterface_Method0_ResponseParams();
        responseParams.param0 = response.param0;
        var builder = new codec.MessageWithRequestIDBuilder(
            kBoundsCheckTestInterface_Method0_Name,
            codec.align(BoundsCheckTestInterface_Method0_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BoundsCheckTestInterface_Method0_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateBoundsCheckTestInterfaceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBoundsCheckTestInterface_Method0_Name:
        if (message.expectsResponse())
          paramsClass = BoundsCheckTestInterface_Method0_Params;
      break;
      case kBoundsCheckTestInterface_Method1_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BoundsCheckTestInterface_Method1_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBoundsCheckTestInterfaceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kBoundsCheckTestInterface_Method0_Name:
        if (message.isResponse())
          paramsClass = BoundsCheckTestInterface_Method0_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var BoundsCheckTestInterface = {
    name: 'this.is.the.service.name.for.BoundsCheckTestInterface',
    proxyClass: BoundsCheckTestInterfaceProxy,
    stubClass: BoundsCheckTestInterfaceStub,
    validateRequest: validateBoundsCheckTestInterfaceRequest,
    validateResponse: validateBoundsCheckTestInterfaceResponse,
  };
  BoundsCheckTestInterfaceStub.prototype.validator = validateBoundsCheckTestInterfaceRequest;
  BoundsCheckTestInterfaceProxy.prototype.validator = validateBoundsCheckTestInterfaceResponse;

  var kConformanceTestInterface_Method0_Name = 0;
  var kConformanceTestInterface_Method1_Name = 1;
  var kConformanceTestInterface_Method2_Name = 2;
  var kConformanceTestInterface_Method3_Name = 3;
  var kConformanceTestInterface_Method4_Name = 4;
  var kConformanceTestInterface_Method5_Name = 5;
  var kConformanceTestInterface_Method6_Name = 6;
  var kConformanceTestInterface_Method7_Name = 7;
  var kConformanceTestInterface_Method8_Name = 8;
  var kConformanceTestInterface_Method9_Name = 9;
  var kConformanceTestInterface_Method10_Name = 10;
  var kConformanceTestInterface_Method11_Name = 11;
  var kConformanceTestInterface_Method12_Name = 12;
  var kConformanceTestInterface_Method13_Name = 13;
  var kConformanceTestInterface_Method14_Name = 14;
  var kConformanceTestInterface_Method15_Name = 15;

  function ConformanceTestInterfaceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ConformanceTestInterfaceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ConformanceTestInterfaceProxy.prototype.method0 = function(param0) {
    var params = new ConformanceTestInterface_Method0_Params();
    params.param0 = param0;
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method0_Name,
        codec.align(ConformanceTestInterface_Method0_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method0_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConformanceTestInterfaceProxy.prototype.method1 = function(param0) {
    var params = new ConformanceTestInterface_Method1_Params();
    params.param0 = param0;
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method1_Name,
        codec.align(ConformanceTestInterface_Method1_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method1_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConformanceTestInterfaceProxy.prototype.method2 = function(param0, param1) {
    var params = new ConformanceTestInterface_Method2_Params();
    params.param0 = param0;
    params.param1 = param1;
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method2_Name,
        codec.align(ConformanceTestInterface_Method2_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method2_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConformanceTestInterfaceProxy.prototype.method3 = function(param0) {
    var params = new ConformanceTestInterface_Method3_Params();
    params.param0 = param0;
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method3_Name,
        codec.align(ConformanceTestInterface_Method3_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method3_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConformanceTestInterfaceProxy.prototype.method4 = function(param0, param1) {
    var params = new ConformanceTestInterface_Method4_Params();
    params.param0 = param0;
    params.param1 = param1;
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method4_Name,
        codec.align(ConformanceTestInterface_Method4_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method4_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConformanceTestInterfaceProxy.prototype.method5 = function(param0, param1) {
    var params = new ConformanceTestInterface_Method5_Params();
    params.param0 = param0;
    params.param1 = param1;
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method5_Name,
        codec.align(ConformanceTestInterface_Method5_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method5_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConformanceTestInterfaceProxy.prototype.method6 = function(param0) {
    var params = new ConformanceTestInterface_Method6_Params();
    params.param0 = param0;
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method6_Name,
        codec.align(ConformanceTestInterface_Method6_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method6_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConformanceTestInterfaceProxy.prototype.method7 = function(param0, param1) {
    var params = new ConformanceTestInterface_Method7_Params();
    params.param0 = param0;
    params.param1 = param1;
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method7_Name,
        codec.align(ConformanceTestInterface_Method7_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method7_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConformanceTestInterfaceProxy.prototype.method8 = function(param0) {
    var params = new ConformanceTestInterface_Method8_Params();
    params.param0 = param0;
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method8_Name,
        codec.align(ConformanceTestInterface_Method8_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method8_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConformanceTestInterfaceProxy.prototype.method9 = function(param0) {
    var params = new ConformanceTestInterface_Method9_Params();
    params.param0 = param0;
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method9_Name,
        codec.align(ConformanceTestInterface_Method9_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method9_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConformanceTestInterfaceProxy.prototype.method10 = function(param0) {
    var params = new ConformanceTestInterface_Method10_Params();
    params.param0 = param0;
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method10_Name,
        codec.align(ConformanceTestInterface_Method10_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method10_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConformanceTestInterfaceProxy.prototype.method11 = function(param0) {
    var params = new ConformanceTestInterface_Method11_Params();
    params.param0 = param0;
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method11_Name,
        codec.align(ConformanceTestInterface_Method11_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method11_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConformanceTestInterfaceProxy.prototype.method12 = function(param0) {
    var params = new ConformanceTestInterface_Method12_Params();
    params.param0 = param0;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kConformanceTestInterface_Method12_Name,
          codec.align(ConformanceTestInterface_Method12_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ConformanceTestInterface_Method12_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ConformanceTestInterface_Method12_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ConformanceTestInterfaceProxy.prototype.method13 = function(param0, param1, param2) {
    var params = new ConformanceTestInterface_Method13_Params();
    params.param0 = core.isHandle(param0) ? param0 : connection.bindImpl(param0, InterfaceA);
    params.param1 = param1;
    params.param2 = core.isHandle(param2) ? param2 : connection.bindImpl(param2, InterfaceA);
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method13_Name,
        codec.align(ConformanceTestInterface_Method13_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method13_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConformanceTestInterfaceProxy.prototype.method14 = function(param0) {
    var params = new ConformanceTestInterface_Method14_Params();
    params.param0 = param0;
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method14_Name,
        codec.align(ConformanceTestInterface_Method14_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method14_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConformanceTestInterfaceProxy.prototype.method15 = function(param0) {
    var params = new ConformanceTestInterface_Method15_Params();
    params.param0 = param0;
    var builder = new codec.MessageBuilder(
        kConformanceTestInterface_Method15_Name,
        codec.align(ConformanceTestInterface_Method15_Params.encodedSize));
    builder.encodeStruct(ConformanceTestInterface_Method15_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ConformanceTestInterfaceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ConformanceTestInterfaceStub.prototype = Object.create(bindings.StubBase.prototype);
  ConformanceTestInterfaceStub.prototype.method0 = function(param0) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method0 && bindings.StubBindings(this).delegate.method0(param0);
  }
  ConformanceTestInterfaceStub.prototype.method1 = function(param0) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method1 && bindings.StubBindings(this).delegate.method1(param0);
  }
  ConformanceTestInterfaceStub.prototype.method2 = function(param0, param1) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method2 && bindings.StubBindings(this).delegate.method2(param0, param1);
  }
  ConformanceTestInterfaceStub.prototype.method3 = function(param0) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method3 && bindings.StubBindings(this).delegate.method3(param0);
  }
  ConformanceTestInterfaceStub.prototype.method4 = function(param0, param1) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method4 && bindings.StubBindings(this).delegate.method4(param0, param1);
  }
  ConformanceTestInterfaceStub.prototype.method5 = function(param0, param1) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method5 && bindings.StubBindings(this).delegate.method5(param0, param1);
  }
  ConformanceTestInterfaceStub.prototype.method6 = function(param0) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method6 && bindings.StubBindings(this).delegate.method6(param0);
  }
  ConformanceTestInterfaceStub.prototype.method7 = function(param0, param1) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method7 && bindings.StubBindings(this).delegate.method7(param0, param1);
  }
  ConformanceTestInterfaceStub.prototype.method8 = function(param0) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method8 && bindings.StubBindings(this).delegate.method8(param0);
  }
  ConformanceTestInterfaceStub.prototype.method9 = function(param0) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method9 && bindings.StubBindings(this).delegate.method9(param0);
  }
  ConformanceTestInterfaceStub.prototype.method10 = function(param0) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method10 && bindings.StubBindings(this).delegate.method10(param0);
  }
  ConformanceTestInterfaceStub.prototype.method11 = function(param0) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method11 && bindings.StubBindings(this).delegate.method11(param0);
  }
  ConformanceTestInterfaceStub.prototype.method12 = function(param0) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method12 && bindings.StubBindings(this).delegate.method12(param0);
  }
  ConformanceTestInterfaceStub.prototype.method13 = function(param0, param1, param2) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method13 && bindings.StubBindings(this).delegate.method13(connection.bindHandleToProxy(param0, InterfaceA), param1, connection.bindHandleToProxy(param2, InterfaceA));
  }
  ConformanceTestInterfaceStub.prototype.method14 = function(param0) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method14 && bindings.StubBindings(this).delegate.method14(param0);
  }
  ConformanceTestInterfaceStub.prototype.method15 = function(param0) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method15 && bindings.StubBindings(this).delegate.method15(param0);
  }

  ConformanceTestInterfaceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kConformanceTestInterface_Method0_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method0_Params);
      this.method0(params.param0);
      return true;
    case kConformanceTestInterface_Method1_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method1_Params);
      this.method1(params.param0);
      return true;
    case kConformanceTestInterface_Method2_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method2_Params);
      this.method2(params.param0, params.param1);
      return true;
    case kConformanceTestInterface_Method3_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method3_Params);
      this.method3(params.param0);
      return true;
    case kConformanceTestInterface_Method4_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method4_Params);
      this.method4(params.param0, params.param1);
      return true;
    case kConformanceTestInterface_Method5_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method5_Params);
      this.method5(params.param0, params.param1);
      return true;
    case kConformanceTestInterface_Method6_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method6_Params);
      this.method6(params.param0);
      return true;
    case kConformanceTestInterface_Method7_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method7_Params);
      this.method7(params.param0, params.param1);
      return true;
    case kConformanceTestInterface_Method8_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method8_Params);
      this.method8(params.param0);
      return true;
    case kConformanceTestInterface_Method9_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method9_Params);
      this.method9(params.param0);
      return true;
    case kConformanceTestInterface_Method10_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method10_Params);
      this.method10(params.param0);
      return true;
    case kConformanceTestInterface_Method11_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method11_Params);
      this.method11(params.param0);
      return true;
    case kConformanceTestInterface_Method13_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method13_Params);
      this.method13(params.param0, params.param1, params.param2);
      return true;
    case kConformanceTestInterface_Method14_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method14_Params);
      this.method14(params.param0);
      return true;
    case kConformanceTestInterface_Method15_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method15_Params);
      this.method15(params.param0);
      return true;
    default:
      return false;
    }
  };

  ConformanceTestInterfaceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kConformanceTestInterface_Method12_Name:
      var params = reader.decodeStruct(ConformanceTestInterface_Method12_Params);
      return this.method12(params.param0).then(function(response) {
        var responseParams =
            new ConformanceTestInterface_Method12_ResponseParams();
        responseParams.param0 = response.param0;
        var builder = new codec.MessageWithRequestIDBuilder(
            kConformanceTestInterface_Method12_Name,
            codec.align(ConformanceTestInterface_Method12_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ConformanceTestInterface_Method12_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateConformanceTestInterfaceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kConformanceTestInterface_Method0_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method0_Params;
      break;
      case kConformanceTestInterface_Method1_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method1_Params;
      break;
      case kConformanceTestInterface_Method2_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method2_Params;
      break;
      case kConformanceTestInterface_Method3_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method3_Params;
      break;
      case kConformanceTestInterface_Method4_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method4_Params;
      break;
      case kConformanceTestInterface_Method5_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method5_Params;
      break;
      case kConformanceTestInterface_Method6_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method6_Params;
      break;
      case kConformanceTestInterface_Method7_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method7_Params;
      break;
      case kConformanceTestInterface_Method8_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method8_Params;
      break;
      case kConformanceTestInterface_Method9_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method9_Params;
      break;
      case kConformanceTestInterface_Method10_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method10_Params;
      break;
      case kConformanceTestInterface_Method11_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method11_Params;
      break;
      case kConformanceTestInterface_Method12_Name:
        if (message.expectsResponse())
          paramsClass = ConformanceTestInterface_Method12_Params;
      break;
      case kConformanceTestInterface_Method13_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method13_Params;
      break;
      case kConformanceTestInterface_Method14_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method14_Params;
      break;
      case kConformanceTestInterface_Method15_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConformanceTestInterface_Method15_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateConformanceTestInterfaceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kConformanceTestInterface_Method12_Name:
        if (message.isResponse())
          paramsClass = ConformanceTestInterface_Method12_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ConformanceTestInterface = {
    name: null,
    proxyClass: ConformanceTestInterfaceProxy,
    stubClass: ConformanceTestInterfaceStub,
    validateRequest: validateConformanceTestInterfaceRequest,
    validateResponse: validateConformanceTestInterfaceResponse,
  };
  ConformanceTestInterfaceStub.prototype.validator = validateConformanceTestInterfaceRequest;
  ConformanceTestInterfaceProxy.prototype.validator = validateConformanceTestInterfaceResponse;

  var kIntegrationTestInterface_Method0_Name = 0;

  function IntegrationTestInterfaceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  IntegrationTestInterfaceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  IntegrationTestInterfaceProxy.prototype.method0 = function(param0) {
    var params = new IntegrationTestInterface_Method0_Params();
    params.param0 = param0;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kIntegrationTestInterface_Method0_Name,
          codec.align(IntegrationTestInterface_Method0_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(IntegrationTestInterface_Method0_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(IntegrationTestInterface_Method0_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function IntegrationTestInterfaceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  IntegrationTestInterfaceStub.prototype = Object.create(bindings.StubBase.prototype);
  IntegrationTestInterfaceStub.prototype.method0 = function(param0) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.method0 && bindings.StubBindings(this).delegate.method0(param0);
  }

  IntegrationTestInterfaceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  IntegrationTestInterfaceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kIntegrationTestInterface_Method0_Name:
      var params = reader.decodeStruct(IntegrationTestInterface_Method0_Params);
      return this.method0(params.param0).then(function(response) {
        var responseParams =
            new IntegrationTestInterface_Method0_ResponseParams();
        responseParams.param0 = response.param0;
        var builder = new codec.MessageWithRequestIDBuilder(
            kIntegrationTestInterface_Method0_Name,
            codec.align(IntegrationTestInterface_Method0_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(IntegrationTestInterface_Method0_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateIntegrationTestInterfaceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kIntegrationTestInterface_Method0_Name:
        if (message.expectsResponse())
          paramsClass = IntegrationTestInterface_Method0_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateIntegrationTestInterfaceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kIntegrationTestInterface_Method0_Name:
        if (message.isResponse())
          paramsClass = IntegrationTestInterface_Method0_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var IntegrationTestInterface = {
    name: null,
    proxyClass: IntegrationTestInterfaceProxy,
    stubClass: IntegrationTestInterfaceStub,
    validateRequest: validateIntegrationTestInterfaceRequest,
    validateResponse: validateIntegrationTestInterfaceResponse,
  };
  IntegrationTestInterfaceStub.prototype.validator = validateIntegrationTestInterfaceRequest;
  IntegrationTestInterfaceProxy.prototype.validator = validateIntegrationTestInterfaceResponse;


  var exports = {};
  exports.BasicEnum = BasicEnum;
  exports.StructA = StructA;
  exports.StructB = StructB;
  exports.StructC = StructC;
  exports.StructD = StructD;
  exports.StructE = StructE;
  exports.StructF = StructF;
  exports.StructG = StructG;
  exports.StructH = StructH;
  exports.BasicStruct = BasicStruct;
  exports.StructWithEnum = StructWithEnum;
  exports.UnionA = UnionA;
  exports.UnionB = UnionB;
  exports.InterfaceA = InterfaceA;
  exports.BoundsCheckTestInterface = BoundsCheckTestInterface;
  exports.ConformanceTestInterface = ConformanceTestInterface;
  exports.IntegrationTestInterface = IntegrationTestInterface;


  return exports;
});
