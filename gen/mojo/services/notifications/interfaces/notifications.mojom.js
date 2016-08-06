// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/notifications/interfaces/notifications.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {

  function NotificationData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NotificationData.prototype.initDefaults_ = function() {
    this.title = null;
    this.text = null;
    this.play_sound = false;
    this.vibrate = false;
    this.set_lights = false;
  };
  NotificationData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NotificationData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NotificationData.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NotificationData.title
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NotificationData.text
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  NotificationData.encodedSize = codec.kStructHeaderSize + 24;

  NotificationData.decode = function(decoder) {
    var packed;
    var val = new NotificationData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.title = decoder.decodeStruct(codec.NullableString);
    val.text = decoder.decodeStruct(codec.NullableString);
    packed = decoder.readUint8();
    val.play_sound = (packed >> 0) & 1 ? true : false;
    val.vibrate = (packed >> 1) & 1 ? true : false;
    val.set_lights = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NotificationData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NotificationData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.title);
    encoder.encodeStruct(codec.NullableString, val.text);
    packed = 0;
    packed |= (val.play_sound & 1) << 0
    packed |= (val.vibrate & 1) << 1
    packed |= (val.set_lights & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function NotificationClient_OnSelected_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NotificationClient_OnSelected_Params.prototype.initDefaults_ = function() {
  };
  NotificationClient_OnSelected_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NotificationClient_OnSelected_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NotificationClient_OnSelected_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NotificationClient_OnSelected_Params.encodedSize = codec.kStructHeaderSize + 0;

  NotificationClient_OnSelected_Params.decode = function(decoder) {
    var packed;
    var val = new NotificationClient_OnSelected_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NotificationClient_OnSelected_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NotificationClient_OnSelected_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function NotificationClient_OnDismissed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NotificationClient_OnDismissed_Params.prototype.initDefaults_ = function() {
  };
  NotificationClient_OnDismissed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NotificationClient_OnDismissed_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NotificationClient_OnDismissed_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NotificationClient_OnDismissed_Params.encodedSize = codec.kStructHeaderSize + 0;

  NotificationClient_OnDismissed_Params.decode = function(decoder) {
    var packed;
    var val = new NotificationClient_OnDismissed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NotificationClient_OnDismissed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NotificationClient_OnDismissed_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function Notification_Update_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Notification_Update_Params.prototype.initDefaults_ = function() {
    this.notification_data = null;
  };
  Notification_Update_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Notification_Update_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Notification_Update_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Notification_Update_Params.notification_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, NotificationData, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Notification_Update_Params.encodedSize = codec.kStructHeaderSize + 8;

  Notification_Update_Params.decode = function(decoder) {
    var packed;
    var val = new Notification_Update_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.notification_data = decoder.decodeStructPointer(NotificationData);
    return val;
  };

  Notification_Update_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Notification_Update_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(NotificationData, val.notification_data);
  };

  function Notification_Cancel_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Notification_Cancel_Params.prototype.initDefaults_ = function() {
  };
  Notification_Cancel_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Notification_Cancel_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Notification_Cancel_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Notification_Cancel_Params.encodedSize = codec.kStructHeaderSize + 0;

  Notification_Cancel_Params.decode = function(decoder) {
    var packed;
    var val = new Notification_Cancel_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Notification_Cancel_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Notification_Cancel_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function NotificationService_Post_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NotificationService_Post_Params.prototype.initDefaults_ = function() {
    this.notification_data = null;
    this.client = null;
    this.notification = null;
  };
  NotificationService_Post_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NotificationService_Post_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NotificationService_Post_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NotificationService_Post_Params.notification_data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, NotificationData, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NotificationService_Post_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NotificationService_Post_Params.notification
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NotificationService_Post_Params.encodedSize = codec.kStructHeaderSize + 24;

  NotificationService_Post_Params.decode = function(decoder) {
    var packed;
    var val = new NotificationService_Post_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.notification_data = decoder.decodeStructPointer(NotificationData);
    val.client = decoder.decodeStruct(codec.NullableInterface);
    val.notification = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NotificationService_Post_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NotificationService_Post_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(NotificationData, val.notification_data);
    encoder.encodeStruct(codec.NullableInterface, val.client);
    encoder.encodeStruct(codec.Handle, val.notification);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kNotificationClient_OnSelected_Name = 0;
  var kNotificationClient_OnDismissed_Name = 1;

  function NotificationClientProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  NotificationClientProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  NotificationClientProxy.prototype.onSelected = function() {
    var params = new NotificationClient_OnSelected_Params();
    var builder = new codec.MessageBuilder(
        kNotificationClient_OnSelected_Name,
        codec.align(NotificationClient_OnSelected_Params.encodedSize));
    builder.encodeStruct(NotificationClient_OnSelected_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NotificationClientProxy.prototype.onDismissed = function() {
    var params = new NotificationClient_OnDismissed_Params();
    var builder = new codec.MessageBuilder(
        kNotificationClient_OnDismissed_Name,
        codec.align(NotificationClient_OnDismissed_Params.encodedSize));
    builder.encodeStruct(NotificationClient_OnDismissed_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NotificationClientStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  NotificationClientStub.prototype = Object.create(bindings.StubBase.prototype);
  NotificationClientStub.prototype.onSelected = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.onSelected && bindings.StubBindings(this).delegate.onSelected();
  }
  NotificationClientStub.prototype.onDismissed = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.onDismissed && bindings.StubBindings(this).delegate.onDismissed();
  }

  NotificationClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNotificationClient_OnSelected_Name:
      var params = reader.decodeStruct(NotificationClient_OnSelected_Params);
      this.onSelected();
      return true;
    case kNotificationClient_OnDismissed_Name:
      var params = reader.decodeStruct(NotificationClient_OnDismissed_Params);
      this.onDismissed();
      return true;
    default:
      return false;
    }
  };

  NotificationClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateNotificationClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNotificationClient_OnSelected_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NotificationClient_OnSelected_Params;
      break;
      case kNotificationClient_OnDismissed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NotificationClient_OnDismissed_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNotificationClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var NotificationClient = {
    name: null,
    proxyClass: NotificationClientProxy,
    stubClass: NotificationClientStub,
    validateRequest: validateNotificationClientRequest,
    validateResponse: null,
  };
  NotificationClientStub.prototype.validator = validateNotificationClientRequest;
  NotificationClientProxy.prototype.validator = null;

  var kNotification_Update_Name = 0;
  var kNotification_Cancel_Name = 1;

  function NotificationProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  NotificationProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  NotificationProxy.prototype.update = function(notification_data) {
    var params = new Notification_Update_Params();
    params.notification_data = notification_data;
    var builder = new codec.MessageBuilder(
        kNotification_Update_Name,
        codec.align(Notification_Update_Params.encodedSize));
    builder.encodeStruct(Notification_Update_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NotificationProxy.prototype.cancel = function() {
    var params = new Notification_Cancel_Params();
    var builder = new codec.MessageBuilder(
        kNotification_Cancel_Name,
        codec.align(Notification_Cancel_Params.encodedSize));
    builder.encodeStruct(Notification_Cancel_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NotificationStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  NotificationStub.prototype = Object.create(bindings.StubBase.prototype);
  NotificationStub.prototype.update = function(notification_data) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.update && bindings.StubBindings(this).delegate.update(notification_data);
  }
  NotificationStub.prototype.cancel = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.cancel && bindings.StubBindings(this).delegate.cancel();
  }

  NotificationStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNotification_Update_Name:
      var params = reader.decodeStruct(Notification_Update_Params);
      this.update(params.notification_data);
      return true;
    case kNotification_Cancel_Name:
      var params = reader.decodeStruct(Notification_Cancel_Params);
      this.cancel();
      return true;
    default:
      return false;
    }
  };

  NotificationStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateNotificationRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNotification_Update_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Notification_Update_Params;
      break;
      case kNotification_Cancel_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Notification_Cancel_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNotificationResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var Notification = {
    name: null,
    proxyClass: NotificationProxy,
    stubClass: NotificationStub,
    validateRequest: validateNotificationRequest,
    validateResponse: null,
  };
  NotificationStub.prototype.validator = validateNotificationRequest;
  NotificationProxy.prototype.validator = null;

  var kNotificationService_Post_Name = 0;

  function NotificationServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  NotificationServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  NotificationServiceProxy.prototype.post = function(notification_data, client, notification) {
    var params = new NotificationService_Post_Params();
    params.notification_data = notification_data;
    params.client = core.isHandle(client) ? client : connection.bindImpl(client, NotificationClient);
    params.notification = core.isHandle(notification) ? notification : connection.bindProxy(notification, Notification);
    var builder = new codec.MessageBuilder(
        kNotificationService_Post_Name,
        codec.align(NotificationService_Post_Params.encodedSize));
    builder.encodeStruct(NotificationService_Post_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NotificationServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  NotificationServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  NotificationServiceStub.prototype.post = function(notification_data, client, notification) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.post && bindings.StubBindings(this).delegate.post(notification_data, connection.bindHandleToProxy(client, NotificationClient), connection.bindHandleToStub(notification, Notification));
  }

  NotificationServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNotificationService_Post_Name:
      var params = reader.decodeStruct(NotificationService_Post_Params);
      this.post(params.notification_data, params.client, params.notification);
      return true;
    default:
      return false;
    }
  };

  NotificationServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateNotificationServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNotificationService_Post_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NotificationService_Post_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNotificationServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var NotificationService = {
    name: 'notifications::NotificationService',
    proxyClass: NotificationServiceProxy,
    stubClass: NotificationServiceStub,
    validateRequest: validateNotificationServiceRequest,
    validateResponse: null,
  };
  NotificationServiceStub.prototype.validator = validateNotificationServiceRequest;
  NotificationServiceProxy.prototype.validator = null;


  var exports = {};
  exports.NotificationData = NotificationData;
  exports.NotificationClient = NotificationClient;
  exports.Notification = Notification;
  exports.NotificationService = NotificationService;


  return exports;
});
