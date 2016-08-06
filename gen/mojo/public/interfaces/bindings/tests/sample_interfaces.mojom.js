// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/sample_interfaces.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {
  var kLong = 4405;
  var Enum = {};
  Enum.VALUE = 0;

  function Provider_EchoString_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Provider_EchoString_Params.prototype.initDefaults_ = function() {
    this.a = null;
  };
  Provider_EchoString_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Provider_EchoString_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Provider_EchoString_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Provider_EchoString_Params.a
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Provider_EchoString_Params.encodedSize = codec.kStructHeaderSize + 8;

  Provider_EchoString_Params.decode = function(decoder) {
    var packed;
    var val = new Provider_EchoString_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStruct(codec.String);
    return val;
  };

  Provider_EchoString_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Provider_EchoString_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.a);
  };

  function Provider_EchoString_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Provider_EchoString_ResponseParams.prototype.initDefaults_ = function() {
    this.a = null;
  };
  Provider_EchoString_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Provider_EchoString_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Provider_EchoString_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Provider_EchoString_ResponseParams.a
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Provider_EchoString_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Provider_EchoString_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Provider_EchoString_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStruct(codec.String);
    return val;
  };

  Provider_EchoString_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Provider_EchoString_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.a);
  };

  function Provider_EchoStrings_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Provider_EchoStrings_Params.prototype.initDefaults_ = function() {
    this.a = null;
    this.b = null;
  };
  Provider_EchoStrings_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Provider_EchoStrings_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Provider_EchoStrings_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Provider_EchoStrings_Params.a
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Provider_EchoStrings_Params.b
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Provider_EchoStrings_Params.encodedSize = codec.kStructHeaderSize + 16;

  Provider_EchoStrings_Params.decode = function(decoder) {
    var packed;
    var val = new Provider_EchoStrings_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStruct(codec.String);
    val.b = decoder.decodeStruct(codec.String);
    return val;
  };

  Provider_EchoStrings_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Provider_EchoStrings_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.a);
    encoder.encodeStruct(codec.String, val.b);
  };

  function Provider_EchoStrings_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Provider_EchoStrings_ResponseParams.prototype.initDefaults_ = function() {
    this.a = null;
    this.b = null;
  };
  Provider_EchoStrings_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Provider_EchoStrings_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Provider_EchoStrings_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Provider_EchoStrings_ResponseParams.a
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Provider_EchoStrings_ResponseParams.b
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Provider_EchoStrings_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Provider_EchoStrings_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Provider_EchoStrings_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStruct(codec.String);
    val.b = decoder.decodeStruct(codec.String);
    return val;
  };

  Provider_EchoStrings_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Provider_EchoStrings_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.a);
    encoder.encodeStruct(codec.String, val.b);
  };

  function Provider_EchoMessagePipeHandle_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Provider_EchoMessagePipeHandle_Params.prototype.initDefaults_ = function() {
    this.a = null;
  };
  Provider_EchoMessagePipeHandle_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Provider_EchoMessagePipeHandle_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Provider_EchoMessagePipeHandle_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Provider_EchoMessagePipeHandle_Params.a
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Provider_EchoMessagePipeHandle_Params.encodedSize = codec.kStructHeaderSize + 8;

  Provider_EchoMessagePipeHandle_Params.decode = function(decoder) {
    var packed;
    var val = new Provider_EchoMessagePipeHandle_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Provider_EchoMessagePipeHandle_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Provider_EchoMessagePipeHandle_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.a);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Provider_EchoMessagePipeHandle_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Provider_EchoMessagePipeHandle_ResponseParams.prototype.initDefaults_ = function() {
    this.a = null;
  };
  Provider_EchoMessagePipeHandle_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Provider_EchoMessagePipeHandle_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Provider_EchoMessagePipeHandle_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Provider_EchoMessagePipeHandle_ResponseParams.a
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Provider_EchoMessagePipeHandle_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Provider_EchoMessagePipeHandle_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Provider_EchoMessagePipeHandle_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Provider_EchoMessagePipeHandle_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Provider_EchoMessagePipeHandle_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.a);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Provider_EchoEnum_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Provider_EchoEnum_Params.prototype.initDefaults_ = function() {
    this.a = 0;
  };
  Provider_EchoEnum_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Provider_EchoEnum_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Provider_EchoEnum_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Provider_EchoEnum_Params.encodedSize = codec.kStructHeaderSize + 8;

  Provider_EchoEnum_Params.decode = function(decoder) {
    var packed;
    var val = new Provider_EchoEnum_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Provider_EchoEnum_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Provider_EchoEnum_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.a);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Provider_EchoEnum_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Provider_EchoEnum_ResponseParams.prototype.initDefaults_ = function() {
    this.a = 0;
  };
  Provider_EchoEnum_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Provider_EchoEnum_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Provider_EchoEnum_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Provider_EchoEnum_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Provider_EchoEnum_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Provider_EchoEnum_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Provider_EchoEnum_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Provider_EchoEnum_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.a);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Provider_EchoInt_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Provider_EchoInt_Params.prototype.initDefaults_ = function() {
    this.a = 0;
  };
  Provider_EchoInt_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Provider_EchoInt_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Provider_EchoInt_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Provider_EchoInt_Params.encodedSize = codec.kStructHeaderSize + 8;

  Provider_EchoInt_Params.decode = function(decoder) {
    var packed;
    var val = new Provider_EchoInt_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Provider_EchoInt_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Provider_EchoInt_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.a);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Provider_EchoInt_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Provider_EchoInt_ResponseParams.prototype.initDefaults_ = function() {
    this.a = 0;
  };
  Provider_EchoInt_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Provider_EchoInt_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Provider_EchoInt_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Provider_EchoInt_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Provider_EchoInt_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Provider_EchoInt_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.a = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Provider_EchoInt_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Provider_EchoInt_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.a);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function IntegerAccessor_GetInteger_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IntegerAccessor_GetInteger_Params.prototype.initDefaults_ = function() {
  };
  IntegerAccessor_GetInteger_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IntegerAccessor_GetInteger_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, IntegerAccessor_GetInteger_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  IntegerAccessor_GetInteger_Params.encodedSize = codec.kStructHeaderSize + 0;

  IntegerAccessor_GetInteger_Params.decode = function(decoder) {
    var packed;
    var val = new IntegerAccessor_GetInteger_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  IntegerAccessor_GetInteger_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IntegerAccessor_GetInteger_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function IntegerAccessor_GetInteger_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IntegerAccessor_GetInteger_ResponseParams.prototype.initDefaults_ = function() {
    this.data = 0;
    this.type = 0;
  };
  IntegerAccessor_GetInteger_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IntegerAccessor_GetInteger_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, IntegerAccessor_GetInteger_ResponseParams.encodedSize, 2);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  IntegerAccessor_GetInteger_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  IntegerAccessor_GetInteger_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new IntegerAccessor_GetInteger_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data = decoder.decodeStruct(codec.Int64);
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  IntegerAccessor_GetInteger_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IntegerAccessor_GetInteger_ResponseParams.encodedSize);
    encoder.writeUint32(2);
    encoder.encodeStruct(codec.Int64, val.data);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function IntegerAccessor_SetInteger_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IntegerAccessor_SetInteger_Params.prototype.initDefaults_ = function() {
    this.data = 0;
    this.type = 0;
  };
  IntegerAccessor_SetInteger_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IntegerAccessor_SetInteger_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, IntegerAccessor_SetInteger_Params.encodedSize, 3);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  IntegerAccessor_SetInteger_Params.encodedSize = codec.kStructHeaderSize + 16;

  IntegerAccessor_SetInteger_Params.decode = function(decoder) {
    var packed;
    var val = new IntegerAccessor_SetInteger_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data = decoder.decodeStruct(codec.Int64);
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  IntegerAccessor_SetInteger_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IntegerAccessor_SetInteger_Params.encodedSize);
    encoder.writeUint32(3);
    encoder.encodeStruct(codec.Int64, val.data);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function SampleInterface_SampleMethod1_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SampleInterface_SampleMethod1_Params.prototype.initDefaults_ = function() {
    this.in1 = 0;
    this.in2 = null;
  };
  SampleInterface_SampleMethod1_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SampleInterface_SampleMethod1_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SampleInterface_SampleMethod1_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate SampleInterface_SampleMethod1_Params.in2
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SampleInterface_SampleMethod1_Params.encodedSize = codec.kStructHeaderSize + 16;

  SampleInterface_SampleMethod1_Params.decode = function(decoder) {
    var packed;
    var val = new SampleInterface_SampleMethod1_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.in1 = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.in2 = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  SampleInterface_SampleMethod1_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SampleInterface_SampleMethod1_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.in1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.NullableString, val.in2);
  };

  function SampleInterface_SampleMethod1_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SampleInterface_SampleMethod1_ResponseParams.prototype.initDefaults_ = function() {
    this.out1 = null;
    this.out2 = 0;
  };
  SampleInterface_SampleMethod1_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SampleInterface_SampleMethod1_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SampleInterface_SampleMethod1_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SampleInterface_SampleMethod1_ResponseParams.out1
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SampleInterface_SampleMethod1_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  SampleInterface_SampleMethod1_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SampleInterface_SampleMethod1_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.out1 = decoder.decodeStruct(codec.NullableString);
    val.out2 = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SampleInterface_SampleMethod1_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SampleInterface_SampleMethod1_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.out1);
    encoder.encodeStruct(codec.Int32, val.out2);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function SampleInterface_SampleMethod0_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SampleInterface_SampleMethod0_Params.prototype.initDefaults_ = function() {
  };
  SampleInterface_SampleMethod0_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SampleInterface_SampleMethod0_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SampleInterface_SampleMethod0_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SampleInterface_SampleMethod0_Params.encodedSize = codec.kStructHeaderSize + 0;

  SampleInterface_SampleMethod0_Params.decode = function(decoder) {
    var packed;
    var val = new SampleInterface_SampleMethod0_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SampleInterface_SampleMethod0_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SampleInterface_SampleMethod0_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function SampleInterface_SampleMethod2_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SampleInterface_SampleMethod2_Params.prototype.initDefaults_ = function() {
  };
  SampleInterface_SampleMethod2_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SampleInterface_SampleMethod2_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SampleInterface_SampleMethod2_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SampleInterface_SampleMethod2_Params.encodedSize = codec.kStructHeaderSize + 0;

  SampleInterface_SampleMethod2_Params.decode = function(decoder) {
    var packed;
    var val = new SampleInterface_SampleMethod2_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SampleInterface_SampleMethod2_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SampleInterface_SampleMethod2_Params.encodedSize);
    encoder.writeUint32(0);
  };

  var kProvider_EchoString_Name = 0;
  var kProvider_EchoStrings_Name = 1;
  var kProvider_EchoMessagePipeHandle_Name = 2;
  var kProvider_EchoEnum_Name = 3;
  var kProvider_EchoInt_Name = 4;

  function ProviderProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ProviderProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ProviderProxy.prototype.echoString = function(a) {
    var params = new Provider_EchoString_Params();
    params.a = a;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kProvider_EchoString_Name,
          codec.align(Provider_EchoString_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Provider_EchoString_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Provider_EchoString_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ProviderProxy.prototype.echoStrings = function(a, b) {
    var params = new Provider_EchoStrings_Params();
    params.a = a;
    params.b = b;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kProvider_EchoStrings_Name,
          codec.align(Provider_EchoStrings_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Provider_EchoStrings_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Provider_EchoStrings_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ProviderProxy.prototype.echoMessagePipeHandle = function(a) {
    var params = new Provider_EchoMessagePipeHandle_Params();
    params.a = a;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kProvider_EchoMessagePipeHandle_Name,
          codec.align(Provider_EchoMessagePipeHandle_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Provider_EchoMessagePipeHandle_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Provider_EchoMessagePipeHandle_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ProviderProxy.prototype.echoEnum = function(a) {
    var params = new Provider_EchoEnum_Params();
    params.a = a;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kProvider_EchoEnum_Name,
          codec.align(Provider_EchoEnum_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Provider_EchoEnum_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Provider_EchoEnum_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ProviderProxy.prototype.echoInt = function(a) {
    var params = new Provider_EchoInt_Params();
    params.a = a;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kProvider_EchoInt_Name,
          codec.align(Provider_EchoInt_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Provider_EchoInt_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Provider_EchoInt_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ProviderStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ProviderStub.prototype = Object.create(bindings.StubBase.prototype);
  ProviderStub.prototype.echoString = function(a) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.echoString && bindings.StubBindings(this).delegate.echoString(a);
  }
  ProviderStub.prototype.echoStrings = function(a, b) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.echoStrings && bindings.StubBindings(this).delegate.echoStrings(a, b);
  }
  ProviderStub.prototype.echoMessagePipeHandle = function(a) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.echoMessagePipeHandle && bindings.StubBindings(this).delegate.echoMessagePipeHandle(a);
  }
  ProviderStub.prototype.echoEnum = function(a) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.echoEnum && bindings.StubBindings(this).delegate.echoEnum(a);
  }
  ProviderStub.prototype.echoInt = function(a) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.echoInt && bindings.StubBindings(this).delegate.echoInt(a);
  }

  ProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kProvider_EchoString_Name:
      var params = reader.decodeStruct(Provider_EchoString_Params);
      return this.echoString(params.a).then(function(response) {
        var responseParams =
            new Provider_EchoString_ResponseParams();
        responseParams.a = response.a;
        var builder = new codec.MessageWithRequestIDBuilder(
            kProvider_EchoString_Name,
            codec.align(Provider_EchoString_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Provider_EchoString_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kProvider_EchoStrings_Name:
      var params = reader.decodeStruct(Provider_EchoStrings_Params);
      return this.echoStrings(params.a, params.b).then(function(response) {
        var responseParams =
            new Provider_EchoStrings_ResponseParams();
        responseParams.a = response.a;
        responseParams.b = response.b;
        var builder = new codec.MessageWithRequestIDBuilder(
            kProvider_EchoStrings_Name,
            codec.align(Provider_EchoStrings_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Provider_EchoStrings_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kProvider_EchoMessagePipeHandle_Name:
      var params = reader.decodeStruct(Provider_EchoMessagePipeHandle_Params);
      return this.echoMessagePipeHandle(params.a).then(function(response) {
        var responseParams =
            new Provider_EchoMessagePipeHandle_ResponseParams();
        responseParams.a = response.a;
        var builder = new codec.MessageWithRequestIDBuilder(
            kProvider_EchoMessagePipeHandle_Name,
            codec.align(Provider_EchoMessagePipeHandle_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Provider_EchoMessagePipeHandle_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kProvider_EchoEnum_Name:
      var params = reader.decodeStruct(Provider_EchoEnum_Params);
      return this.echoEnum(params.a).then(function(response) {
        var responseParams =
            new Provider_EchoEnum_ResponseParams();
        responseParams.a = response.a;
        var builder = new codec.MessageWithRequestIDBuilder(
            kProvider_EchoEnum_Name,
            codec.align(Provider_EchoEnum_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Provider_EchoEnum_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kProvider_EchoInt_Name:
      var params = reader.decodeStruct(Provider_EchoInt_Params);
      return this.echoInt(params.a).then(function(response) {
        var responseParams =
            new Provider_EchoInt_ResponseParams();
        responseParams.a = response.a;
        var builder = new codec.MessageWithRequestIDBuilder(
            kProvider_EchoInt_Name,
            codec.align(Provider_EchoInt_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Provider_EchoInt_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kProvider_EchoString_Name:
        if (message.expectsResponse())
          paramsClass = Provider_EchoString_Params;
      break;
      case kProvider_EchoStrings_Name:
        if (message.expectsResponse())
          paramsClass = Provider_EchoStrings_Params;
      break;
      case kProvider_EchoMessagePipeHandle_Name:
        if (message.expectsResponse())
          paramsClass = Provider_EchoMessagePipeHandle_Params;
      break;
      case kProvider_EchoEnum_Name:
        if (message.expectsResponse())
          paramsClass = Provider_EchoEnum_Params;
      break;
      case kProvider_EchoInt_Name:
        if (message.expectsResponse())
          paramsClass = Provider_EchoInt_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kProvider_EchoString_Name:
        if (message.isResponse())
          paramsClass = Provider_EchoString_ResponseParams;
        break;
      case kProvider_EchoStrings_Name:
        if (message.isResponse())
          paramsClass = Provider_EchoStrings_ResponseParams;
        break;
      case kProvider_EchoMessagePipeHandle_Name:
        if (message.isResponse())
          paramsClass = Provider_EchoMessagePipeHandle_ResponseParams;
        break;
      case kProvider_EchoEnum_Name:
        if (message.isResponse())
          paramsClass = Provider_EchoEnum_ResponseParams;
        break;
      case kProvider_EchoInt_Name:
        if (message.isResponse())
          paramsClass = Provider_EchoInt_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Provider = {
    name: null,
    proxyClass: ProviderProxy,
    stubClass: ProviderStub,
    validateRequest: validateProviderRequest,
    validateResponse: validateProviderResponse,
  };
  ProviderStub.prototype.validator = validateProviderRequest;
  ProviderProxy.prototype.validator = validateProviderResponse;

  var kIntegerAccessor_GetInteger_Name = 0;
  var kIntegerAccessor_SetInteger_Name = 1;

  function IntegerAccessorProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  IntegerAccessorProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  IntegerAccessorProxy.prototype.getInteger = function() {
    var params = new IntegerAccessor_GetInteger_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kIntegerAccessor_GetInteger_Name,
          codec.align(IntegerAccessor_GetInteger_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(IntegerAccessor_GetInteger_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(IntegerAccessor_GetInteger_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  IntegerAccessorProxy.prototype.setInteger = function(data, type) {
    var params = new IntegerAccessor_SetInteger_Params();
    params.data = data;
    params.type = type;
    var builder = new codec.MessageBuilder(
        kIntegerAccessor_SetInteger_Name,
        codec.align(IntegerAccessor_SetInteger_Params.encodedSize));
    builder.encodeStruct(IntegerAccessor_SetInteger_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function IntegerAccessorStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  IntegerAccessorStub.prototype = Object.create(bindings.StubBase.prototype);
  IntegerAccessorStub.prototype.getInteger = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getInteger && bindings.StubBindings(this).delegate.getInteger();
  }
  IntegerAccessorStub.prototype.setInteger = function(data, type) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.setInteger && bindings.StubBindings(this).delegate.setInteger(data, type);
  }

  IntegerAccessorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kIntegerAccessor_SetInteger_Name:
      var params = reader.decodeStruct(IntegerAccessor_SetInteger_Params);
      this.setInteger(params.data, params.type);
      return true;
    default:
      return false;
    }
  };

  IntegerAccessorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kIntegerAccessor_GetInteger_Name:
      var params = reader.decodeStruct(IntegerAccessor_GetInteger_Params);
      return this.getInteger().then(function(response) {
        var responseParams =
            new IntegerAccessor_GetInteger_ResponseParams();
        responseParams.data = response.data;
        responseParams.type = response.type;
        var builder = new codec.MessageWithRequestIDBuilder(
            kIntegerAccessor_GetInteger_Name,
            codec.align(IntegerAccessor_GetInteger_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(IntegerAccessor_GetInteger_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateIntegerAccessorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kIntegerAccessor_GetInteger_Name:
        if (message.expectsResponse())
          paramsClass = IntegerAccessor_GetInteger_Params;
      break;
      case kIntegerAccessor_SetInteger_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = IntegerAccessor_SetInteger_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateIntegerAccessorResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kIntegerAccessor_GetInteger_Name:
        if (message.isResponse())
          paramsClass = IntegerAccessor_GetInteger_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var IntegerAccessor = {
    name: null,
    proxyClass: IntegerAccessorProxy,
    stubClass: IntegerAccessorStub,
    validateRequest: validateIntegerAccessorRequest,
    validateResponse: validateIntegerAccessorResponse,
  };
  IntegerAccessorStub.prototype.validator = validateIntegerAccessorRequest;
  IntegerAccessorProxy.prototype.validator = validateIntegerAccessorResponse;

  var kSampleInterface_SampleMethod1_Name = 1;
  var kSampleInterface_SampleMethod0_Name = 0;
  var kSampleInterface_SampleMethod2_Name = 2;

  function SampleInterfaceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  SampleInterfaceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  SampleInterfaceProxy.prototype.sampleMethod1 = function(in1, in2) {
    var params = new SampleInterface_SampleMethod1_Params();
    params.in1 = in1;
    params.in2 = in2;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kSampleInterface_SampleMethod1_Name,
          codec.align(SampleInterface_SampleMethod1_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SampleInterface_SampleMethod1_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SampleInterface_SampleMethod1_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  SampleInterfaceProxy.prototype.sampleMethod0 = function() {
    var params = new SampleInterface_SampleMethod0_Params();
    var builder = new codec.MessageBuilder(
        kSampleInterface_SampleMethod0_Name,
        codec.align(SampleInterface_SampleMethod0_Params.encodedSize));
    builder.encodeStruct(SampleInterface_SampleMethod0_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SampleInterfaceProxy.prototype.sampleMethod2 = function() {
    var params = new SampleInterface_SampleMethod2_Params();
    var builder = new codec.MessageBuilder(
        kSampleInterface_SampleMethod2_Name,
        codec.align(SampleInterface_SampleMethod2_Params.encodedSize));
    builder.encodeStruct(SampleInterface_SampleMethod2_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SampleInterfaceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  SampleInterfaceStub.prototype = Object.create(bindings.StubBase.prototype);
  SampleInterfaceStub.prototype.sampleMethod1 = function(in1, in2) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.sampleMethod1 && bindings.StubBindings(this).delegate.sampleMethod1(in1, in2);
  }
  SampleInterfaceStub.prototype.sampleMethod0 = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.sampleMethod0 && bindings.StubBindings(this).delegate.sampleMethod0();
  }
  SampleInterfaceStub.prototype.sampleMethod2 = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.sampleMethod2 && bindings.StubBindings(this).delegate.sampleMethod2();
  }

  SampleInterfaceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSampleInterface_SampleMethod0_Name:
      var params = reader.decodeStruct(SampleInterface_SampleMethod0_Params);
      this.sampleMethod0();
      return true;
    case kSampleInterface_SampleMethod2_Name:
      var params = reader.decodeStruct(SampleInterface_SampleMethod2_Params);
      this.sampleMethod2();
      return true;
    default:
      return false;
    }
  };

  SampleInterfaceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSampleInterface_SampleMethod1_Name:
      var params = reader.decodeStruct(SampleInterface_SampleMethod1_Params);
      return this.sampleMethod1(params.in1, params.in2).then(function(response) {
        var responseParams =
            new SampleInterface_SampleMethod1_ResponseParams();
        responseParams.out1 = response.out1;
        responseParams.out2 = response.out2;
        var builder = new codec.MessageWithRequestIDBuilder(
            kSampleInterface_SampleMethod1_Name,
            codec.align(SampleInterface_SampleMethod1_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SampleInterface_SampleMethod1_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateSampleInterfaceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSampleInterface_SampleMethod1_Name:
        if (message.expectsResponse())
          paramsClass = SampleInterface_SampleMethod1_Params;
      break;
      case kSampleInterface_SampleMethod0_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SampleInterface_SampleMethod0_Params;
      break;
      case kSampleInterface_SampleMethod2_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SampleInterface_SampleMethod2_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSampleInterfaceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kSampleInterface_SampleMethod1_Name:
        if (message.isResponse())
          paramsClass = SampleInterface_SampleMethod1_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var SampleInterface = {
    name: null,
    proxyClass: SampleInterfaceProxy,
    stubClass: SampleInterfaceStub,
    validateRequest: validateSampleInterfaceRequest,
    validateResponse: validateSampleInterfaceResponse,
  };
  SampleInterfaceStub.prototype.validator = validateSampleInterfaceRequest;
  SampleInterfaceProxy.prototype.validator = validateSampleInterfaceResponse;


  var exports = {};
  exports.kLong = kLong;
  exports.Enum = Enum;
  exports.Provider = Provider;
  exports.IntegerAccessor = IntegerAccessor;
  exports.SampleInterface = SampleInterface;


  return exports;
});
