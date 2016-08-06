// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/sharing/interfaces/sharing.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function SharingService_ShareText_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharingService_ShareText_Params.prototype.initDefaults_ = function() {
    this.text = null;
  };
  SharingService_ShareText_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharingService_ShareText_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, SharingService_ShareText_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate SharingService_ShareText_Params.text
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SharingService_ShareText_Params.encodedSize = codec.kStructHeaderSize + 8;

  SharingService_ShareText_Params.decode = function(decoder) {
    var packed;
    var val = new SharingService_ShareText_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.text = decoder.decodeStruct(codec.String);
    return val;
  };

  SharingService_ShareText_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharingService_ShareText_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.text);
  };

  var kSharingService_ShareText_Name = 0;

  function SharingServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  SharingServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  SharingServiceProxy.prototype.shareText = function(text) {
    var params = new SharingService_ShareText_Params();
    params.text = text;
    var builder = new codec.MessageBuilder(
        kSharingService_ShareText_Name,
        codec.align(SharingService_ShareText_Params.encodedSize));
    builder.encodeStruct(SharingService_ShareText_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SharingServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  SharingServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  SharingServiceStub.prototype.shareText = function(text) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.shareText && bindings.StubBindings(this).delegate.shareText(text);
  }

  SharingServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSharingService_ShareText_Name:
      var params = reader.decodeStruct(SharingService_ShareText_Params);
      this.shareText(params.text);
      return true;
    default:
      return false;
    }
  };

  SharingServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateSharingServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSharingService_ShareText_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SharingService_ShareText_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSharingServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SharingService = {
    name: 'mojo::SharingService',
    proxyClass: SharingServiceProxy,
    stubClass: SharingServiceStub,
    validateRequest: validateSharingServiceRequest,
    validateResponse: null,
  };
  SharingServiceStub.prototype.validator = validateSharingServiceRequest;
  SharingServiceProxy.prototype.validator = null;


  var exports = {};
  exports.SharingService = SharingService;


  return exports;
});
