// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/contacts/interfaces/contacts.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function Contact(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Contact.prototype.initDefaults_ = function() {
    this.id = 0;
    this.name = null;
  };
  Contact.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Contact.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Contact.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate Contact.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Contact.encodedSize = codec.kStructHeaderSize + 16;

  Contact.decode = function(decoder) {
    var packed;
    var val = new Contact();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Int64);
    val.name = decoder.decodeStruct(codec.String);
    return val;
  };

  Contact.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Contact.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.id);
    encoder.encodeStruct(codec.String, val.name);
  };

  function ContactsService_GetCount_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContactsService_GetCount_Params.prototype.initDefaults_ = function() {
    this.filter = null;
  };
  ContactsService_GetCount_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContactsService_GetCount_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContactsService_GetCount_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContactsService_GetCount_Params.filter
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContactsService_GetCount_Params.encodedSize = codec.kStructHeaderSize + 8;

  ContactsService_GetCount_Params.decode = function(decoder) {
    var packed;
    var val = new ContactsService_GetCount_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filter = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  ContactsService_GetCount_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContactsService_GetCount_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.filter);
  };

  function ContactsService_GetCount_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContactsService_GetCount_ResponseParams.prototype.initDefaults_ = function() {
    this.count = 0;
  };
  ContactsService_GetCount_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContactsService_GetCount_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContactsService_GetCount_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ContactsService_GetCount_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ContactsService_GetCount_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ContactsService_GetCount_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.count = decoder.decodeStruct(codec.Uint64);
    return val;
  };

  ContactsService_GetCount_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContactsService_GetCount_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.count);
  };

  function ContactsService_Get_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContactsService_Get_Params.prototype.initDefaults_ = function() {
    this.filter = null;
    this.offset = 0;
    this.limit = 0;
  };
  ContactsService_Get_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContactsService_Get_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContactsService_Get_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContactsService_Get_Params.filter
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  ContactsService_Get_Params.encodedSize = codec.kStructHeaderSize + 16;

  ContactsService_Get_Params.decode = function(decoder) {
    var packed;
    var val = new ContactsService_Get_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filter = decoder.decodeStruct(codec.NullableString);
    val.offset = decoder.decodeStruct(codec.Uint32);
    val.limit = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  ContactsService_Get_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContactsService_Get_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.filter);
    encoder.encodeStruct(codec.Uint32, val.offset);
    encoder.encodeStruct(codec.Uint32, val.limit);
  };

  function ContactsService_Get_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContactsService_Get_ResponseParams.prototype.initDefaults_ = function() {
    this.contacts = null;
  };
  ContactsService_Get_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContactsService_Get_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContactsService_Get_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContactsService_Get_ResponseParams.contacts
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(Contact), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContactsService_Get_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ContactsService_Get_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ContactsService_Get_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.contacts = decoder.decodeArrayPointer(new codec.PointerTo(Contact));
    return val;
  };

  ContactsService_Get_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContactsService_Get_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(Contact), val.contacts);
  };

  function ContactsService_GetEmails_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContactsService_GetEmails_Params.prototype.initDefaults_ = function() {
    this.id = 0;
  };
  ContactsService_GetEmails_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContactsService_GetEmails_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContactsService_GetEmails_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ContactsService_GetEmails_Params.encodedSize = codec.kStructHeaderSize + 8;

  ContactsService_GetEmails_Params.decode = function(decoder) {
    var packed;
    var val = new ContactsService_GetEmails_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Int64);
    return val;
  };

  ContactsService_GetEmails_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContactsService_GetEmails_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.id);
  };

  function ContactsService_GetEmails_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContactsService_GetEmails_ResponseParams.prototype.initDefaults_ = function() {
    this.emails = null;
  };
  ContactsService_GetEmails_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContactsService_GetEmails_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContactsService_GetEmails_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContactsService_GetEmails_ResponseParams.emails
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContactsService_GetEmails_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ContactsService_GetEmails_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ContactsService_GetEmails_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.emails = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  ContactsService_GetEmails_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContactsService_GetEmails_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.emails);
  };

  function ContactsService_GetPhoto_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContactsService_GetPhoto_Params.prototype.initDefaults_ = function() {
    this.id = 0;
    this.high_resolution = false;
  };
  ContactsService_GetPhoto_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContactsService_GetPhoto_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContactsService_GetPhoto_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  ContactsService_GetPhoto_Params.encodedSize = codec.kStructHeaderSize + 16;

  ContactsService_GetPhoto_Params.decode = function(decoder) {
    var packed;
    var val = new ContactsService_GetPhoto_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.Int64);
    val.high_resolution = decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ContactsService_GetPhoto_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContactsService_GetPhoto_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.id);
    encoder.encodeStruct(codec.Uint8, val.high_resolution);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function ContactsService_GetPhoto_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContactsService_GetPhoto_ResponseParams.prototype.initDefaults_ = function() {
    this.photo_url = null;
  };
  ContactsService_GetPhoto_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContactsService_GetPhoto_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ContactsService_GetPhoto_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ContactsService_GetPhoto_ResponseParams.photo_url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContactsService_GetPhoto_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ContactsService_GetPhoto_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ContactsService_GetPhoto_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.photo_url = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  ContactsService_GetPhoto_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContactsService_GetPhoto_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.photo_url);
  };

  var kContactsService_GetCount_Name = 0;
  var kContactsService_Get_Name = 1;
  var kContactsService_GetEmails_Name = 2;
  var kContactsService_GetPhoto_Name = 3;

  function ContactsServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ContactsServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ContactsServiceProxy.prototype.getCount = function(filter) {
    var params = new ContactsService_GetCount_Params();
    params.filter = filter;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kContactsService_GetCount_Name,
          codec.align(ContactsService_GetCount_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ContactsService_GetCount_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ContactsService_GetCount_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ContactsServiceProxy.prototype.get = function(filter, offset, limit) {
    var params = new ContactsService_Get_Params();
    params.filter = filter;
    params.offset = offset;
    params.limit = limit;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kContactsService_Get_Name,
          codec.align(ContactsService_Get_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ContactsService_Get_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ContactsService_Get_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ContactsServiceProxy.prototype.getEmails = function(id) {
    var params = new ContactsService_GetEmails_Params();
    params.id = id;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kContactsService_GetEmails_Name,
          codec.align(ContactsService_GetEmails_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ContactsService_GetEmails_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ContactsService_GetEmails_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ContactsServiceProxy.prototype.getPhoto = function(id, high_resolution) {
    var params = new ContactsService_GetPhoto_Params();
    params.id = id;
    params.high_resolution = high_resolution;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kContactsService_GetPhoto_Name,
          codec.align(ContactsService_GetPhoto_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ContactsService_GetPhoto_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ContactsService_GetPhoto_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ContactsServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ContactsServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  ContactsServiceStub.prototype.getCount = function(filter) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getCount && bindings.StubBindings(this).delegate.getCount(filter);
  }
  ContactsServiceStub.prototype.get = function(filter, offset, limit) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.get && bindings.StubBindings(this).delegate.get(filter, offset, limit);
  }
  ContactsServiceStub.prototype.getEmails = function(id) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getEmails && bindings.StubBindings(this).delegate.getEmails(id);
  }
  ContactsServiceStub.prototype.getPhoto = function(id, high_resolution) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getPhoto && bindings.StubBindings(this).delegate.getPhoto(id, high_resolution);
  }

  ContactsServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ContactsServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kContactsService_GetCount_Name:
      var params = reader.decodeStruct(ContactsService_GetCount_Params);
      return this.getCount(params.filter).then(function(response) {
        var responseParams =
            new ContactsService_GetCount_ResponseParams();
        responseParams.count = response.count;
        var builder = new codec.MessageWithRequestIDBuilder(
            kContactsService_GetCount_Name,
            codec.align(ContactsService_GetCount_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ContactsService_GetCount_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kContactsService_Get_Name:
      var params = reader.decodeStruct(ContactsService_Get_Params);
      return this.get(params.filter, params.offset, params.limit).then(function(response) {
        var responseParams =
            new ContactsService_Get_ResponseParams();
        responseParams.contacts = response.contacts;
        var builder = new codec.MessageWithRequestIDBuilder(
            kContactsService_Get_Name,
            codec.align(ContactsService_Get_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ContactsService_Get_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kContactsService_GetEmails_Name:
      var params = reader.decodeStruct(ContactsService_GetEmails_Params);
      return this.getEmails(params.id).then(function(response) {
        var responseParams =
            new ContactsService_GetEmails_ResponseParams();
        responseParams.emails = response.emails;
        var builder = new codec.MessageWithRequestIDBuilder(
            kContactsService_GetEmails_Name,
            codec.align(ContactsService_GetEmails_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ContactsService_GetEmails_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kContactsService_GetPhoto_Name:
      var params = reader.decodeStruct(ContactsService_GetPhoto_Params);
      return this.getPhoto(params.id, params.high_resolution).then(function(response) {
        var responseParams =
            new ContactsService_GetPhoto_ResponseParams();
        responseParams.photo_url = response.photo_url;
        var builder = new codec.MessageWithRequestIDBuilder(
            kContactsService_GetPhoto_Name,
            codec.align(ContactsService_GetPhoto_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ContactsService_GetPhoto_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateContactsServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kContactsService_GetCount_Name:
        if (message.expectsResponse())
          paramsClass = ContactsService_GetCount_Params;
      break;
      case kContactsService_Get_Name:
        if (message.expectsResponse())
          paramsClass = ContactsService_Get_Params;
      break;
      case kContactsService_GetEmails_Name:
        if (message.expectsResponse())
          paramsClass = ContactsService_GetEmails_Params;
      break;
      case kContactsService_GetPhoto_Name:
        if (message.expectsResponse())
          paramsClass = ContactsService_GetPhoto_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateContactsServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kContactsService_GetCount_Name:
        if (message.isResponse())
          paramsClass = ContactsService_GetCount_ResponseParams;
        break;
      case kContactsService_Get_Name:
        if (message.isResponse())
          paramsClass = ContactsService_Get_ResponseParams;
        break;
      case kContactsService_GetEmails_Name:
        if (message.isResponse())
          paramsClass = ContactsService_GetEmails_ResponseParams;
        break;
      case kContactsService_GetPhoto_Name:
        if (message.isResponse())
          paramsClass = ContactsService_GetPhoto_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ContactsService = {
    name: 'contacts::ContactsService',
    proxyClass: ContactsServiceProxy,
    stubClass: ContactsServiceStub,
    validateRequest: validateContactsServiceRequest,
    validateResponse: validateContactsServiceResponse,
  };
  ContactsServiceStub.prototype.validator = validateContactsServiceRequest;
  ContactsServiceProxy.prototype.validator = validateContactsServiceResponse;


  var exports = {};
  exports.Contact = Contact;
  exports.ContactsService = ContactsService;


  return exports;
});
