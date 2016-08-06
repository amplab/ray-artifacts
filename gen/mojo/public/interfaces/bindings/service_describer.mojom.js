// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/service_describer.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/bindings/mojom_types.mojom",
], function(bindings, codec, connection, core, validator, mojom_types$) {

  function ServiceDescriber_DescribeService_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceDescriber_DescribeService_Params.prototype.initDefaults_ = function() {
    this.interface_name = null;
    this.description_request = null;
  };
  ServiceDescriber_DescribeService_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceDescriber_DescribeService_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ServiceDescriber_DescribeService_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ServiceDescriber_DescribeService_Params.interface_name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ServiceDescriber_DescribeService_Params.description_request
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceDescriber_DescribeService_Params.encodedSize = codec.kStructHeaderSize + 16;

  ServiceDescriber_DescribeService_Params.decode = function(decoder) {
    var packed;
    var val = new ServiceDescriber_DescribeService_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.interface_name = decoder.decodeStruct(codec.String);
    val.description_request = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ServiceDescriber_DescribeService_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceDescriber_DescribeService_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.interface_name);
    encoder.encodeStruct(codec.Handle, val.description_request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ServiceDescription_GetTopLevelInterface_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceDescription_GetTopLevelInterface_Params.prototype.initDefaults_ = function() {
  };
  ServiceDescription_GetTopLevelInterface_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceDescription_GetTopLevelInterface_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ServiceDescription_GetTopLevelInterface_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceDescription_GetTopLevelInterface_Params.encodedSize = codec.kStructHeaderSize + 0;

  ServiceDescription_GetTopLevelInterface_Params.decode = function(decoder) {
    var packed;
    var val = new ServiceDescription_GetTopLevelInterface_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ServiceDescription_GetTopLevelInterface_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceDescription_GetTopLevelInterface_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function ServiceDescription_GetTopLevelInterface_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceDescription_GetTopLevelInterface_ResponseParams.prototype.initDefaults_ = function() {
    this.mojomInterface = null;
  };
  ServiceDescription_GetTopLevelInterface_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceDescription_GetTopLevelInterface_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ServiceDescription_GetTopLevelInterface_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ServiceDescription_GetTopLevelInterface_ResponseParams.mojomInterface
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, mojom_types$.MojomInterface, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceDescription_GetTopLevelInterface_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ServiceDescription_GetTopLevelInterface_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ServiceDescription_GetTopLevelInterface_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mojomInterface = decoder.decodeStructPointer(mojom_types$.MojomInterface);
    return val;
  };

  ServiceDescription_GetTopLevelInterface_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceDescription_GetTopLevelInterface_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(mojom_types$.MojomInterface, val.mojomInterface);
  };

  function ServiceDescription_GetTypeDefinition_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceDescription_GetTypeDefinition_Params.prototype.initDefaults_ = function() {
    this.type_key = null;
  };
  ServiceDescription_GetTypeDefinition_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceDescription_GetTypeDefinition_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ServiceDescription_GetTypeDefinition_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ServiceDescription_GetTypeDefinition_Params.type_key
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceDescription_GetTypeDefinition_Params.encodedSize = codec.kStructHeaderSize + 8;

  ServiceDescription_GetTypeDefinition_Params.decode = function(decoder) {
    var packed;
    var val = new ServiceDescription_GetTypeDefinition_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type_key = decoder.decodeStruct(codec.String);
    return val;
  };

  ServiceDescription_GetTypeDefinition_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceDescription_GetTypeDefinition_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.type_key);
  };

  function ServiceDescription_GetTypeDefinition_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceDescription_GetTypeDefinition_ResponseParams.prototype.initDefaults_ = function() {
    this.type = null;
  };
  ServiceDescription_GetTypeDefinition_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceDescription_GetTypeDefinition_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ServiceDescription_GetTypeDefinition_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    // validate ServiceDescription_GetTypeDefinition_ResponseParams.type
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, mojom_types$.UserDefinedType, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceDescription_GetTypeDefinition_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  ServiceDescription_GetTypeDefinition_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ServiceDescription_GetTypeDefinition_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(mojom_types$.UserDefinedType);
    return val;
  };

  ServiceDescription_GetTypeDefinition_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceDescription_GetTypeDefinition_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(mojom_types$.UserDefinedType, val.type);
  };

  function ServiceDescription_GetAllTypeDefinitions_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceDescription_GetAllTypeDefinitions_Params.prototype.initDefaults_ = function() {
  };
  ServiceDescription_GetAllTypeDefinitions_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceDescription_GetAllTypeDefinitions_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ServiceDescription_GetAllTypeDefinitions_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceDescription_GetAllTypeDefinitions_Params.encodedSize = codec.kStructHeaderSize + 0;

  ServiceDescription_GetAllTypeDefinitions_Params.decode = function(decoder) {
    var packed;
    var val = new ServiceDescription_GetAllTypeDefinitions_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ServiceDescription_GetAllTypeDefinitions_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceDescription_GetAllTypeDefinitions_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function ServiceDescription_GetAllTypeDefinitions_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceDescription_GetAllTypeDefinitions_ResponseParams.prototype.initDefaults_ = function() {
    this.definitions = null;
  };
  ServiceDescription_GetAllTypeDefinitions_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceDescription_GetAllTypeDefinitions_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ServiceDescription_GetAllTypeDefinitions_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ServiceDescription_GetAllTypeDefinitions_ResponseParams.definitions
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, true, codec.String, new codec.UnionWrapper(mojom_types$.UserDefinedType), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceDescription_GetAllTypeDefinitions_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ServiceDescription_GetAllTypeDefinitions_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ServiceDescription_GetAllTypeDefinitions_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.definitions = decoder.decodeMapPointer(codec.String, new codec.UnionWrapper(mojom_types$.UserDefinedType));
    return val;
  };

  ServiceDescription_GetAllTypeDefinitions_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceDescription_GetAllTypeDefinitions_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, new codec.UnionWrapper(mojom_types$.UserDefinedType), val.definitions);
  };

  var kServiceDescriber_DescribeService_Name = 0;

  function ServiceDescriberProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ServiceDescriberProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ServiceDescriberProxy.prototype.describeService = function(interface_name, description_request) {
    var params = new ServiceDescriber_DescribeService_Params();
    params.interface_name = interface_name;
    params.description_request = core.isHandle(description_request) ? description_request : connection.bindProxy(description_request, ServiceDescription);
    var builder = new codec.MessageBuilder(
        kServiceDescriber_DescribeService_Name,
        codec.align(ServiceDescriber_DescribeService_Params.encodedSize));
    builder.encodeStruct(ServiceDescriber_DescribeService_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ServiceDescriberStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ServiceDescriberStub.prototype = Object.create(bindings.StubBase.prototype);
  ServiceDescriberStub.prototype.describeService = function(interface_name, description_request) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.describeService && bindings.StubBindings(this).delegate.describeService(interface_name, connection.bindHandleToStub(description_request, ServiceDescription));
  }

  ServiceDescriberStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kServiceDescriber_DescribeService_Name:
      var params = reader.decodeStruct(ServiceDescriber_DescribeService_Params);
      this.describeService(params.interface_name, params.description_request);
      return true;
    default:
      return false;
    }
  };

  ServiceDescriberStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateServiceDescriberRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kServiceDescriber_DescribeService_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ServiceDescriber_DescribeService_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateServiceDescriberResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ServiceDescriber = {
    name: 'mojo::bindings::types::ServiceDescriber',
    proxyClass: ServiceDescriberProxy,
    stubClass: ServiceDescriberStub,
    validateRequest: validateServiceDescriberRequest,
    validateResponse: null,
  };
  ServiceDescriberStub.prototype.validator = validateServiceDescriberRequest;
  ServiceDescriberProxy.prototype.validator = null;

  var kServiceDescription_GetTopLevelInterface_Name = 0;
  var kServiceDescription_GetTypeDefinition_Name = 1;
  var kServiceDescription_GetAllTypeDefinitions_Name = 2;

  function ServiceDescriptionProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ServiceDescriptionProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ServiceDescriptionProxy.prototype.getTopLevelInterface = function() {
    var params = new ServiceDescription_GetTopLevelInterface_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kServiceDescription_GetTopLevelInterface_Name,
          codec.align(ServiceDescription_GetTopLevelInterface_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ServiceDescription_GetTopLevelInterface_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ServiceDescription_GetTopLevelInterface_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ServiceDescriptionProxy.prototype.getTypeDefinition = function(type_key) {
    var params = new ServiceDescription_GetTypeDefinition_Params();
    params.type_key = type_key;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kServiceDescription_GetTypeDefinition_Name,
          codec.align(ServiceDescription_GetTypeDefinition_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ServiceDescription_GetTypeDefinition_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ServiceDescription_GetTypeDefinition_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ServiceDescriptionProxy.prototype.getAllTypeDefinitions = function() {
    var params = new ServiceDescription_GetAllTypeDefinitions_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kServiceDescription_GetAllTypeDefinitions_Name,
          codec.align(ServiceDescription_GetAllTypeDefinitions_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ServiceDescription_GetAllTypeDefinitions_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ServiceDescription_GetAllTypeDefinitions_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ServiceDescriptionStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ServiceDescriptionStub.prototype = Object.create(bindings.StubBase.prototype);
  ServiceDescriptionStub.prototype.getTopLevelInterface = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getTopLevelInterface && bindings.StubBindings(this).delegate.getTopLevelInterface();
  }
  ServiceDescriptionStub.prototype.getTypeDefinition = function(type_key) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getTypeDefinition && bindings.StubBindings(this).delegate.getTypeDefinition(type_key);
  }
  ServiceDescriptionStub.prototype.getAllTypeDefinitions = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getAllTypeDefinitions && bindings.StubBindings(this).delegate.getAllTypeDefinitions();
  }

  ServiceDescriptionStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ServiceDescriptionStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kServiceDescription_GetTopLevelInterface_Name:
      var params = reader.decodeStruct(ServiceDescription_GetTopLevelInterface_Params);
      return this.getTopLevelInterface().then(function(response) {
        var responseParams =
            new ServiceDescription_GetTopLevelInterface_ResponseParams();
        responseParams.mojomInterface = response.mojomInterface;
        var builder = new codec.MessageWithRequestIDBuilder(
            kServiceDescription_GetTopLevelInterface_Name,
            codec.align(ServiceDescription_GetTopLevelInterface_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ServiceDescription_GetTopLevelInterface_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kServiceDescription_GetTypeDefinition_Name:
      var params = reader.decodeStruct(ServiceDescription_GetTypeDefinition_Params);
      return this.getTypeDefinition(params.type_key).then(function(response) {
        var responseParams =
            new ServiceDescription_GetTypeDefinition_ResponseParams();
        responseParams.type = response.type;
        var builder = new codec.MessageWithRequestIDBuilder(
            kServiceDescription_GetTypeDefinition_Name,
            codec.align(ServiceDescription_GetTypeDefinition_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ServiceDescription_GetTypeDefinition_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kServiceDescription_GetAllTypeDefinitions_Name:
      var params = reader.decodeStruct(ServiceDescription_GetAllTypeDefinitions_Params);
      return this.getAllTypeDefinitions().then(function(response) {
        var responseParams =
            new ServiceDescription_GetAllTypeDefinitions_ResponseParams();
        responseParams.definitions = response.definitions;
        var builder = new codec.MessageWithRequestIDBuilder(
            kServiceDescription_GetAllTypeDefinitions_Name,
            codec.align(ServiceDescription_GetAllTypeDefinitions_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ServiceDescription_GetAllTypeDefinitions_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateServiceDescriptionRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kServiceDescription_GetTopLevelInterface_Name:
        if (message.expectsResponse())
          paramsClass = ServiceDescription_GetTopLevelInterface_Params;
      break;
      case kServiceDescription_GetTypeDefinition_Name:
        if (message.expectsResponse())
          paramsClass = ServiceDescription_GetTypeDefinition_Params;
      break;
      case kServiceDescription_GetAllTypeDefinitions_Name:
        if (message.expectsResponse())
          paramsClass = ServiceDescription_GetAllTypeDefinitions_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateServiceDescriptionResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kServiceDescription_GetTopLevelInterface_Name:
        if (message.isResponse())
          paramsClass = ServiceDescription_GetTopLevelInterface_ResponseParams;
        break;
      case kServiceDescription_GetTypeDefinition_Name:
        if (message.isResponse())
          paramsClass = ServiceDescription_GetTypeDefinition_ResponseParams;
        break;
      case kServiceDescription_GetAllTypeDefinitions_Name:
        if (message.isResponse())
          paramsClass = ServiceDescription_GetAllTypeDefinitions_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ServiceDescription = {
    name: null,
    proxyClass: ServiceDescriptionProxy,
    stubClass: ServiceDescriptionStub,
    validateRequest: validateServiceDescriptionRequest,
    validateResponse: validateServiceDescriptionResponse,
  };
  ServiceDescriptionStub.prototype.validator = validateServiceDescriptionRequest;
  ServiceDescriptionProxy.prototype.validator = validateServiceDescriptionResponse;


  var exports = {};
  exports.ServiceDescriber = ServiceDescriber;
  exports.ServiceDescription = ServiceDescription;


  return exports;
});
