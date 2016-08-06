// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/log/interfaces/log.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/services/log/interfaces/entry.mojom",
], function(bindings, codec, connection, core, validator, entry$) {

  function Log_AddEntry_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Log_AddEntry_Params.prototype.initDefaults_ = function() {
    this.entry = null;
  };
  Log_AddEntry_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Log_AddEntry_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Log_AddEntry_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Log_AddEntry_Params.entry
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, entry$.Entry, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Log_AddEntry_Params.encodedSize = codec.kStructHeaderSize + 8;

  Log_AddEntry_Params.decode = function(decoder) {
    var packed;
    var val = new Log_AddEntry_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.entry = decoder.decodeStructPointer(entry$.Entry);
    return val;
  };

  Log_AddEntry_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Log_AddEntry_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(entry$.Entry, val.entry);
  };

  var kLog_AddEntry_Name = 0;

  function LogProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  LogProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  LogProxy.prototype.addEntry = function(entry) {
    var params = new Log_AddEntry_Params();
    params.entry = entry;
    var builder = new codec.MessageBuilder(
        kLog_AddEntry_Name,
        codec.align(Log_AddEntry_Params.encodedSize));
    builder.encodeStruct(Log_AddEntry_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function LogStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  LogStub.prototype = Object.create(bindings.StubBase.prototype);
  LogStub.prototype.addEntry = function(entry) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.addEntry && bindings.StubBindings(this).delegate.addEntry(entry);
  }

  LogStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kLog_AddEntry_Name:
      var params = reader.decodeStruct(Log_AddEntry_Params);
      this.addEntry(params.entry);
      return true;
    default:
      return false;
    }
  };

  LogStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateLogRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kLog_AddEntry_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Log_AddEntry_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateLogResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var Log = {
    name: 'mojo::log::Log',
    proxyClass: LogProxy,
    stubClass: LogStub,
    validateRequest: validateLogRequest,
    validateResponse: null,
  };
  LogStub.prototype.validator = validateLogRequest;
  LogProxy.prototype.validator = null;


  var exports = {};
  exports.Log = Log;


  return exports;
});
