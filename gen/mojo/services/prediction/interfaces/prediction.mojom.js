// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/prediction/interfaces/prediction.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function PrevWordInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrevWordInfo.prototype.initDefaults_ = function() {
    this.word = null;
    this.is_beginning_of_sentence = false;
  };
  PrevWordInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrevWordInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PrevWordInfo.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate PrevWordInfo.word
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  PrevWordInfo.encodedSize = codec.kStructHeaderSize + 16;

  PrevWordInfo.decode = function(decoder) {
    var packed;
    var val = new PrevWordInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.word = decoder.decodeStruct(codec.String);
    val.is_beginning_of_sentence = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PrevWordInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrevWordInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.word);
    encoder.encodeStruct(codec.Uint8, val.is_beginning_of_sentence);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function PredictionInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PredictionInfo.prototype.initDefaults_ = function() {
    this.previous_words = null;
    this.current_word = null;
  };
  PredictionInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PredictionInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PredictionInfo.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate PredictionInfo.previous_words
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(PrevWordInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate PredictionInfo.current_word
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PredictionInfo.encodedSize = codec.kStructHeaderSize + 16;

  PredictionInfo.decode = function(decoder) {
    var packed;
    var val = new PredictionInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.previous_words = decoder.decodeArrayPointer(new codec.PointerTo(PrevWordInfo));
    val.current_word = decoder.decodeStruct(codec.String);
    return val;
  };

  PredictionInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PredictionInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(PrevWordInfo), val.previous_words);
    encoder.encodeStruct(codec.String, val.current_word);
  };

  function PredictionService_GetPredictionList_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PredictionService_GetPredictionList_Params.prototype.initDefaults_ = function() {
    this.prediction_info = null;
  };
  PredictionService_GetPredictionList_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PredictionService_GetPredictionList_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PredictionService_GetPredictionList_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate PredictionService_GetPredictionList_Params.prediction_info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PredictionInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PredictionService_GetPredictionList_Params.encodedSize = codec.kStructHeaderSize + 8;

  PredictionService_GetPredictionList_Params.decode = function(decoder) {
    var packed;
    var val = new PredictionService_GetPredictionList_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.prediction_info = decoder.decodeStructPointer(PredictionInfo);
    return val;
  };

  PredictionService_GetPredictionList_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PredictionService_GetPredictionList_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PredictionInfo, val.prediction_info);
  };

  function PredictionService_GetPredictionList_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PredictionService_GetPredictionList_ResponseParams.prototype.initDefaults_ = function() {
    this.prediction_list = null;
  };
  PredictionService_GetPredictionList_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PredictionService_GetPredictionList_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PredictionService_GetPredictionList_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate PredictionService_GetPredictionList_ResponseParams.prediction_list
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PredictionService_GetPredictionList_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PredictionService_GetPredictionList_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PredictionService_GetPredictionList_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.prediction_list = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  PredictionService_GetPredictionList_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PredictionService_GetPredictionList_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.prediction_list);
  };

  var kPredictionService_GetPredictionList_Name = 0;

  function PredictionServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  PredictionServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  PredictionServiceProxy.prototype.getPredictionList = function(prediction_info) {
    var params = new PredictionService_GetPredictionList_Params();
    params.prediction_info = prediction_info;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kPredictionService_GetPredictionList_Name,
          codec.align(PredictionService_GetPredictionList_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PredictionService_GetPredictionList_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PredictionService_GetPredictionList_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PredictionServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  PredictionServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  PredictionServiceStub.prototype.getPredictionList = function(prediction_info) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getPredictionList && bindings.StubBindings(this).delegate.getPredictionList(prediction_info);
  }

  PredictionServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PredictionServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPredictionService_GetPredictionList_Name:
      var params = reader.decodeStruct(PredictionService_GetPredictionList_Params);
      return this.getPredictionList(params.prediction_info).then(function(response) {
        var responseParams =
            new PredictionService_GetPredictionList_ResponseParams();
        responseParams.prediction_list = response.prediction_list;
        var builder = new codec.MessageWithRequestIDBuilder(
            kPredictionService_GetPredictionList_Name,
            codec.align(PredictionService_GetPredictionList_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PredictionService_GetPredictionList_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validatePredictionServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPredictionService_GetPredictionList_Name:
        if (message.expectsResponse())
          paramsClass = PredictionService_GetPredictionList_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePredictionServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPredictionService_GetPredictionList_Name:
        if (message.isResponse())
          paramsClass = PredictionService_GetPredictionList_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PredictionService = {
    name: 'prediction::PredictionService',
    proxyClass: PredictionServiceProxy,
    stubClass: PredictionServiceStub,
    validateRequest: validatePredictionServiceRequest,
    validateResponse: validatePredictionServiceResponse,
  };
  PredictionServiceStub.prototype.validator = validatePredictionServiceRequest;
  PredictionServiceProxy.prototype.validator = validatePredictionServiceResponse;


  var exports = {};
  exports.PrevWordInfo = PrevWordInfo;
  exports.PredictionInfo = PredictionInfo;
  exports.PredictionService = PredictionService;


  return exports;
});
