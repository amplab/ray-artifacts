// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/asset_bundle/interfaces/asset_bundle.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function AssetBundle_GetAsStream_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AssetBundle_GetAsStream_Params.prototype.initDefaults_ = function() {
    this.asset_name = null;
  };
  AssetBundle_GetAsStream_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AssetBundle_GetAsStream_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AssetBundle_GetAsStream_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AssetBundle_GetAsStream_Params.asset_name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AssetBundle_GetAsStream_Params.encodedSize = codec.kStructHeaderSize + 8;

  AssetBundle_GetAsStream_Params.decode = function(decoder) {
    var packed;
    var val = new AssetBundle_GetAsStream_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.asset_name = decoder.decodeStruct(codec.String);
    return val;
  };

  AssetBundle_GetAsStream_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AssetBundle_GetAsStream_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.asset_name);
  };

  function AssetBundle_GetAsStream_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AssetBundle_GetAsStream_ResponseParams.prototype.initDefaults_ = function() {
    this.asset_data = null;
  };
  AssetBundle_GetAsStream_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AssetBundle_GetAsStream_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AssetBundle_GetAsStream_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AssetBundle_GetAsStream_ResponseParams.asset_data
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AssetBundle_GetAsStream_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AssetBundle_GetAsStream_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AssetBundle_GetAsStream_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.asset_data = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AssetBundle_GetAsStream_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AssetBundle_GetAsStream_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.asset_data);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function AssetUnpacker_UnpackZipStream_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AssetUnpacker_UnpackZipStream_Params.prototype.initDefaults_ = function() {
    this.zipped_assets = null;
    this.asset_bundle = null;
  };
  AssetUnpacker_UnpackZipStream_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AssetUnpacker_UnpackZipStream_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, AssetUnpacker_UnpackZipStream_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AssetUnpacker_UnpackZipStream_Params.zipped_assets
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate AssetUnpacker_UnpackZipStream_Params.asset_bundle
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AssetUnpacker_UnpackZipStream_Params.encodedSize = codec.kStructHeaderSize + 8;

  AssetUnpacker_UnpackZipStream_Params.decode = function(decoder) {
    var packed;
    var val = new AssetUnpacker_UnpackZipStream_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.zipped_assets = decoder.decodeStruct(codec.Handle);
    val.asset_bundle = decoder.decodeStruct(codec.Handle);
    return val;
  };

  AssetUnpacker_UnpackZipStream_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AssetUnpacker_UnpackZipStream_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.zipped_assets);
    encoder.encodeStruct(codec.Handle, val.asset_bundle);
  };

  var kAssetBundle_GetAsStream_Name = 0;

  function AssetBundleProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  AssetBundleProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  AssetBundleProxy.prototype.getAsStream = function(asset_name) {
    var params = new AssetBundle_GetAsStream_Params();
    params.asset_name = asset_name;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kAssetBundle_GetAsStream_Name,
          codec.align(AssetBundle_GetAsStream_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AssetBundle_GetAsStream_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AssetBundle_GetAsStream_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function AssetBundleStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  AssetBundleStub.prototype = Object.create(bindings.StubBase.prototype);
  AssetBundleStub.prototype.getAsStream = function(asset_name) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getAsStream && bindings.StubBindings(this).delegate.getAsStream(asset_name);
  }

  AssetBundleStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  AssetBundleStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAssetBundle_GetAsStream_Name:
      var params = reader.decodeStruct(AssetBundle_GetAsStream_Params);
      return this.getAsStream(params.asset_name).then(function(response) {
        var responseParams =
            new AssetBundle_GetAsStream_ResponseParams();
        responseParams.asset_data = response.asset_data;
        var builder = new codec.MessageWithRequestIDBuilder(
            kAssetBundle_GetAsStream_Name,
            codec.align(AssetBundle_GetAsStream_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AssetBundle_GetAsStream_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateAssetBundleRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAssetBundle_GetAsStream_Name:
        if (message.expectsResponse())
          paramsClass = AssetBundle_GetAsStream_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAssetBundleResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kAssetBundle_GetAsStream_Name:
        if (message.isResponse())
          paramsClass = AssetBundle_GetAsStream_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var AssetBundle = {
    name: 'mojo::asset_bundle::AssetBundle',
    proxyClass: AssetBundleProxy,
    stubClass: AssetBundleStub,
    validateRequest: validateAssetBundleRequest,
    validateResponse: validateAssetBundleResponse,
  };
  AssetBundleStub.prototype.validator = validateAssetBundleRequest;
  AssetBundleProxy.prototype.validator = validateAssetBundleResponse;

  var kAssetUnpacker_UnpackZipStream_Name = 0;

  function AssetUnpackerProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  AssetUnpackerProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  AssetUnpackerProxy.prototype.unpackZipStream = function(zipped_assets, asset_bundle) {
    var params = new AssetUnpacker_UnpackZipStream_Params();
    params.zipped_assets = zipped_assets;
    params.asset_bundle = core.isHandle(asset_bundle) ? asset_bundle : connection.bindProxy(asset_bundle, AssetBundle);
    var builder = new codec.MessageBuilder(
        kAssetUnpacker_UnpackZipStream_Name,
        codec.align(AssetUnpacker_UnpackZipStream_Params.encodedSize));
    builder.encodeStruct(AssetUnpacker_UnpackZipStream_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AssetUnpackerStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  AssetUnpackerStub.prototype = Object.create(bindings.StubBase.prototype);
  AssetUnpackerStub.prototype.unpackZipStream = function(zipped_assets, asset_bundle) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.unpackZipStream && bindings.StubBindings(this).delegate.unpackZipStream(zipped_assets, connection.bindHandleToStub(asset_bundle, AssetBundle));
  }

  AssetUnpackerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAssetUnpacker_UnpackZipStream_Name:
      var params = reader.decodeStruct(AssetUnpacker_UnpackZipStream_Params);
      this.unpackZipStream(params.zipped_assets, params.asset_bundle);
      return true;
    default:
      return false;
    }
  };

  AssetUnpackerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateAssetUnpackerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAssetUnpacker_UnpackZipStream_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AssetUnpacker_UnpackZipStream_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAssetUnpackerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AssetUnpacker = {
    name: 'mojo::asset_bundle::AssetUnpacker',
    proxyClass: AssetUnpackerProxy,
    stubClass: AssetUnpackerStub,
    validateRequest: validateAssetUnpackerRequest,
    validateResponse: null,
  };
  AssetUnpackerStub.prototype.validator = validateAssetUnpackerRequest;
  AssetUnpackerProxy.prototype.validator = null;


  var exports = {};
  exports.AssetBundle = AssetBundle;
  exports.AssetUnpacker = AssetUnpacker;


  return exports;
});
