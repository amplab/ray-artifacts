// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/content_handler/interfaces/content_handler.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/application/application.mojom",
    "mojo/public/interfaces/network/url_response.mojom",
], function(bindings, codec, connection, core, validator, application$, url_response$) {

  function ContentHandler_StartApplication_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentHandler_StartApplication_Params.prototype.initDefaults_ = function() {
    this.application = null;
    this.response = null;
  };
  ContentHandler_StartApplication_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentHandler_StartApplication_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContentHandler_StartApplication_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContentHandler_StartApplication_Params.application
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContentHandler_StartApplication_Params.response
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url_response$.URLResponse, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContentHandler_StartApplication_Params.encodedSize = codec.kStructHeaderSize + 16;

  ContentHandler_StartApplication_Params.decode = function(decoder) {
    var packed;
    var val = new ContentHandler_StartApplication_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.application = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.response = decoder.decodeStructPointer(url_response$.URLResponse);
    return val;
  };

  ContentHandler_StartApplication_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentHandler_StartApplication_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.application);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url_response$.URLResponse, val.response);
  };

  var kContentHandler_StartApplication_Name = 0;

  function ContentHandlerProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ContentHandlerProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ContentHandlerProxy.prototype.startApplication = function(application, response) {
    var params = new ContentHandler_StartApplication_Params();
    params.application = core.isHandle(application) ? application : connection.bindProxy(application, application$.Application);
    params.response = response;
    var builder = new codec.MessageBuilder(
        kContentHandler_StartApplication_Name,
        codec.align(ContentHandler_StartApplication_Params.encodedSize));
    builder.encodeStruct(ContentHandler_StartApplication_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ContentHandlerStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ContentHandlerStub.prototype = Object.create(bindings.StubBase.prototype);
  ContentHandlerStub.prototype.startApplication = function(application, response) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.startApplication && bindings.StubBindings(this).delegate.startApplication(connection.bindHandleToStub(application, application$.Application), response);
  }

  ContentHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kContentHandler_StartApplication_Name:
      var params = reader.decodeStruct(ContentHandler_StartApplication_Params);
      this.startApplication(params.application, params.response);
      return true;
    default:
      return false;
    }
  };

  ContentHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateContentHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kContentHandler_StartApplication_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ContentHandler_StartApplication_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateContentHandlerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ContentHandler = {
    name: 'mojo::ContentHandler',
    proxyClass: ContentHandlerProxy,
    stubClass: ContentHandlerStub,
    validateRequest: validateContentHandlerRequest,
    validateResponse: null,
  };
  ContentHandlerStub.prototype.validator = validateContentHandlerRequest;
  ContentHandlerProxy.prototype.validator = null;


  var exports = {};
  exports.ContentHandler = ContentHandler;


  return exports;
});
