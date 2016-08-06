// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/nfc/interfaces/nfc.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function NfcData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NfcData.prototype.initDefaults_ = function() {
    this.data = null;
  };
  NfcData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NfcData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NfcData.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NfcData.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NfcData.encodedSize = codec.kStructHeaderSize + 8;

  NfcData.decode = function(decoder) {
    var packed;
    var val = new NfcData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  NfcData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NfcData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.data);
  };

  function NfcTransmission_Cancel_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NfcTransmission_Cancel_Params.prototype.initDefaults_ = function() {
  };
  NfcTransmission_Cancel_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NfcTransmission_Cancel_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NfcTransmission_Cancel_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NfcTransmission_Cancel_Params.encodedSize = codec.kStructHeaderSize + 0;

  NfcTransmission_Cancel_Params.decode = function(decoder) {
    var packed;
    var val = new NfcTransmission_Cancel_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NfcTransmission_Cancel_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NfcTransmission_Cancel_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function NfcReceiver_OnReceivedNfcData_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NfcReceiver_OnReceivedNfcData_Params.prototype.initDefaults_ = function() {
    this.nfc_data = null;
  };
  NfcReceiver_OnReceivedNfcData_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NfcReceiver_OnReceivedNfcData_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NfcReceiver_OnReceivedNfcData_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NfcReceiver_OnReceivedNfcData_Params.nfc_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, NfcData, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NfcReceiver_OnReceivedNfcData_Params.encodedSize = codec.kStructHeaderSize + 8;

  NfcReceiver_OnReceivedNfcData_Params.decode = function(decoder) {
    var packed;
    var val = new NfcReceiver_OnReceivedNfcData_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.nfc_data = decoder.decodeStructPointer(NfcData);
    return val;
  };

  NfcReceiver_OnReceivedNfcData_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NfcReceiver_OnReceivedNfcData_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(NfcData, val.nfc_data);
  };

  function Nfc_TransmitOnNextConnection_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Nfc_TransmitOnNextConnection_Params.prototype.initDefaults_ = function() {
    this.nfc_data = null;
    this.transmission = null;
  };
  Nfc_TransmitOnNextConnection_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Nfc_TransmitOnNextConnection_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Nfc_TransmitOnNextConnection_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Nfc_TransmitOnNextConnection_Params.nfc_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, NfcData, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Nfc_TransmitOnNextConnection_Params.transmission
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Nfc_TransmitOnNextConnection_Params.encodedSize = codec.kStructHeaderSize + 16;

  Nfc_TransmitOnNextConnection_Params.decode = function(decoder) {
    var packed;
    var val = new Nfc_TransmitOnNextConnection_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.nfc_data = decoder.decodeStructPointer(NfcData);
    val.transmission = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Nfc_TransmitOnNextConnection_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Nfc_TransmitOnNextConnection_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(NfcData, val.nfc_data);
    encoder.encodeStruct(codec.Handle, val.transmission);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Nfc_TransmitOnNextConnection_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Nfc_TransmitOnNextConnection_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  Nfc_TransmitOnNextConnection_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Nfc_TransmitOnNextConnection_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Nfc_TransmitOnNextConnection_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Nfc_TransmitOnNextConnection_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Nfc_TransmitOnNextConnection_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Nfc_TransmitOnNextConnection_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.success = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Nfc_TransmitOnNextConnection_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Nfc_TransmitOnNextConnection_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.success);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Nfc_Register_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Nfc_Register_Params.prototype.initDefaults_ = function() {
  };
  Nfc_Register_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Nfc_Register_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Nfc_Register_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Nfc_Register_Params.encodedSize = codec.kStructHeaderSize + 0;

  Nfc_Register_Params.decode = function(decoder) {
    var packed;
    var val = new Nfc_Register_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Nfc_Register_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Nfc_Register_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function Nfc_Unregister_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Nfc_Unregister_Params.prototype.initDefaults_ = function() {
  };
  Nfc_Unregister_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Nfc_Unregister_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Nfc_Unregister_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Nfc_Unregister_Params.encodedSize = codec.kStructHeaderSize + 0;

  Nfc_Unregister_Params.decode = function(decoder) {
    var packed;
    var val = new Nfc_Unregister_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Nfc_Unregister_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Nfc_Unregister_Params.encodedSize);
    encoder.writeUint32(0);
  };

  var kNfcTransmission_Cancel_Name = 0;

  function NfcTransmissionProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  NfcTransmissionProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  NfcTransmissionProxy.prototype.cancel = function() {
    var params = new NfcTransmission_Cancel_Params();
    var builder = new codec.MessageBuilder(
        kNfcTransmission_Cancel_Name,
        codec.align(NfcTransmission_Cancel_Params.encodedSize));
    builder.encodeStruct(NfcTransmission_Cancel_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NfcTransmissionStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  NfcTransmissionStub.prototype = Object.create(bindings.StubBase.prototype);
  NfcTransmissionStub.prototype.cancel = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.cancel && bindings.StubBindings(this).delegate.cancel();
  }

  NfcTransmissionStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNfcTransmission_Cancel_Name:
      var params = reader.decodeStruct(NfcTransmission_Cancel_Params);
      this.cancel();
      return true;
    default:
      return false;
    }
  };

  NfcTransmissionStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateNfcTransmissionRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNfcTransmission_Cancel_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NfcTransmission_Cancel_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNfcTransmissionResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var NfcTransmission = {
    name: null,
    proxyClass: NfcTransmissionProxy,
    stubClass: NfcTransmissionStub,
    validateRequest: validateNfcTransmissionRequest,
    validateResponse: null,
  };
  NfcTransmissionStub.prototype.validator = validateNfcTransmissionRequest;
  NfcTransmissionProxy.prototype.validator = null;

  var kNfcReceiver_OnReceivedNfcData_Name = 0;

  function NfcReceiverProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  NfcReceiverProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  NfcReceiverProxy.prototype.onReceivedNfcData = function(nfc_data) {
    var params = new NfcReceiver_OnReceivedNfcData_Params();
    params.nfc_data = nfc_data;
    var builder = new codec.MessageBuilder(
        kNfcReceiver_OnReceivedNfcData_Name,
        codec.align(NfcReceiver_OnReceivedNfcData_Params.encodedSize));
    builder.encodeStruct(NfcReceiver_OnReceivedNfcData_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NfcReceiverStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  NfcReceiverStub.prototype = Object.create(bindings.StubBase.prototype);
  NfcReceiverStub.prototype.onReceivedNfcData = function(nfc_data) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.onReceivedNfcData && bindings.StubBindings(this).delegate.onReceivedNfcData(nfc_data);
  }

  NfcReceiverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNfcReceiver_OnReceivedNfcData_Name:
      var params = reader.decodeStruct(NfcReceiver_OnReceivedNfcData_Params);
      this.onReceivedNfcData(params.nfc_data);
      return true;
    default:
      return false;
    }
  };

  NfcReceiverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateNfcReceiverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNfcReceiver_OnReceivedNfcData_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NfcReceiver_OnReceivedNfcData_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNfcReceiverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var NfcReceiver = {
    name: 'nfc::NfcReceiver',
    proxyClass: NfcReceiverProxy,
    stubClass: NfcReceiverStub,
    validateRequest: validateNfcReceiverRequest,
    validateResponse: null,
  };
  NfcReceiverStub.prototype.validator = validateNfcReceiverRequest;
  NfcReceiverProxy.prototype.validator = null;

  var kNfc_TransmitOnNextConnection_Name = 0;
  var kNfc_Register_Name = 1;
  var kNfc_Unregister_Name = 2;

  function NfcProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  NfcProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  NfcProxy.prototype.transmitOnNextConnection = function(nfc_data, transmission) {
    var params = new Nfc_TransmitOnNextConnection_Params();
    params.nfc_data = nfc_data;
    params.transmission = core.isHandle(transmission) ? transmission : connection.bindProxy(transmission, NfcTransmission);
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kNfc_TransmitOnNextConnection_Name,
          codec.align(Nfc_TransmitOnNextConnection_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Nfc_TransmitOnNextConnection_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Nfc_TransmitOnNextConnection_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NfcProxy.prototype.register = function() {
    var params = new Nfc_Register_Params();
    var builder = new codec.MessageBuilder(
        kNfc_Register_Name,
        codec.align(Nfc_Register_Params.encodedSize));
    builder.encodeStruct(Nfc_Register_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NfcProxy.prototype.unregister = function() {
    var params = new Nfc_Unregister_Params();
    var builder = new codec.MessageBuilder(
        kNfc_Unregister_Name,
        codec.align(Nfc_Unregister_Params.encodedSize));
    builder.encodeStruct(Nfc_Unregister_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NfcStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  NfcStub.prototype = Object.create(bindings.StubBase.prototype);
  NfcStub.prototype.transmitOnNextConnection = function(nfc_data, transmission) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.transmitOnNextConnection && bindings.StubBindings(this).delegate.transmitOnNextConnection(nfc_data, connection.bindHandleToStub(transmission, NfcTransmission));
  }
  NfcStub.prototype.register = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.register && bindings.StubBindings(this).delegate.register();
  }
  NfcStub.prototype.unregister = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.unregister && bindings.StubBindings(this).delegate.unregister();
  }

  NfcStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNfc_Register_Name:
      var params = reader.decodeStruct(Nfc_Register_Params);
      this.register();
      return true;
    case kNfc_Unregister_Name:
      var params = reader.decodeStruct(Nfc_Unregister_Params);
      this.unregister();
      return true;
    default:
      return false;
    }
  };

  NfcStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNfc_TransmitOnNextConnection_Name:
      var params = reader.decodeStruct(Nfc_TransmitOnNextConnection_Params);
      return this.transmitOnNextConnection(params.nfc_data, params.transmission).then(function(response) {
        var responseParams =
            new Nfc_TransmitOnNextConnection_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageWithRequestIDBuilder(
            kNfc_TransmitOnNextConnection_Name,
            codec.align(Nfc_TransmitOnNextConnection_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Nfc_TransmitOnNextConnection_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateNfcRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNfc_TransmitOnNextConnection_Name:
        if (message.expectsResponse())
          paramsClass = Nfc_TransmitOnNextConnection_Params;
      break;
      case kNfc_Register_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Nfc_Register_Params;
      break;
      case kNfc_Unregister_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Nfc_Unregister_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNfcResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNfc_TransmitOnNextConnection_Name:
        if (message.isResponse())
          paramsClass = Nfc_TransmitOnNextConnection_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Nfc = {
    name: 'nfc::Nfc',
    proxyClass: NfcProxy,
    stubClass: NfcStub,
    validateRequest: validateNfcRequest,
    validateResponse: validateNfcResponse,
  };
  NfcStub.prototype.validator = validateNfcRequest;
  NfcProxy.prototype.validator = validateNfcResponse;


  var exports = {};
  exports.NfcData = NfcData;
  exports.NfcTransmission = NfcTransmission;
  exports.NfcReceiver = NfcReceiver;
  exports.Nfc = Nfc;


  return exports;
});
