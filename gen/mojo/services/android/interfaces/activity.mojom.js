// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/android/interfaces/activity.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {
  var SystemUIVisibility = {};
  SystemUIVisibility.STANDARD = 0;
  SystemUIVisibility.FULLSCREEN = SystemUIVisibility.STANDARD + 1;
  SystemUIVisibility.IMMERSIVE = SystemUIVisibility.FULLSCREEN + 1;
  var ScreenOrientation = {};
  ScreenOrientation.UNSPECIFIED = 0;
  ScreenOrientation.LANDSCAPE = ScreenOrientation.UNSPECIFIED + 1;
  ScreenOrientation.PORTRAIT = ScreenOrientation.LANDSCAPE + 1;
  ScreenOrientation.NOSENSOR = ScreenOrientation.PORTRAIT + 1;
  var HapticFeedbackType = {};
  HapticFeedbackType.LONG_PRESS = 0;
  HapticFeedbackType.VIRTUAL_KEY = HapticFeedbackType.LONG_PRESS + 1;
  HapticFeedbackType.KEYBOARD_TAP = HapticFeedbackType.VIRTUAL_KEY + 1;
  HapticFeedbackType.CLOCK_TICK = HapticFeedbackType.KEYBOARD_TAP + 1;
  var AuralFeedbackType = {};
  AuralFeedbackType.CLICK = 0;
  AuralFeedbackType.NAVIGATION_LEFT = AuralFeedbackType.CLICK + 1;
  AuralFeedbackType.NAVIGATION_UP = AuralFeedbackType.NAVIGATION_LEFT + 1;
  AuralFeedbackType.NAVIGATION_RIGHT = AuralFeedbackType.NAVIGATION_UP + 1;
  AuralFeedbackType.NAVIGATION_DOWN = AuralFeedbackType.NAVIGATION_RIGHT + 1;

  function StringExtra(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StringExtra.prototype.initDefaults_ = function() {
    this.name = null;
    this.value = null;
  };
  StringExtra.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StringExtra.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, StringExtra.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StringExtra.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate StringExtra.value
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StringExtra.encodedSize = codec.kStructHeaderSize + 16;

  StringExtra.decode = function(decoder) {
    var packed;
    var val = new StringExtra();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    val.value = decoder.decodeStruct(codec.String);
    return val;
  };

  StringExtra.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StringExtra.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.value);
  };

  function ComponentName(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ComponentName.prototype.initDefaults_ = function() {
    this.package_name = null;
    this.class_name = null;
  };
  ComponentName.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ComponentName.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, ComponentName.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ComponentName.package_name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate ComponentName.class_name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ComponentName.encodedSize = codec.kStructHeaderSize + 16;

  ComponentName.decode = function(decoder) {
    var packed;
    var val = new ComponentName();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.package_name = decoder.decodeStruct(codec.String);
    val.class_name = decoder.decodeStruct(codec.String);
    return val;
  };

  ComponentName.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ComponentName.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.package_name);
    encoder.encodeStruct(codec.String, val.class_name);
  };

  function Intent(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Intent.prototype.initDefaults_ = function() {
    this.action = null;
    this.url = null;
    this.flags = 0;
    this.component = null;
    this.string_extras = null;
    this.type = null;
  };
  Intent.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Intent.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Intent.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Intent.action
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Intent.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    
    // validate Intent.component
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, ComponentName, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Intent.string_extras
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(StringExtra), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Intent.type
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Intent.encodedSize = codec.kStructHeaderSize + 48;

  Intent.decode = function(decoder) {
    var packed;
    var val = new Intent();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.action = decoder.decodeStruct(codec.String);
    val.url = decoder.decodeStruct(codec.String);
    val.flags = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.component = decoder.decodeStructPointer(ComponentName);
    val.string_extras = decoder.decodeArrayPointer(new codec.PointerTo(StringExtra));
    val.type = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  Intent.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Intent.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.action);
    encoder.encodeStruct(codec.String, val.url);
    encoder.encodeStruct(codec.Uint32, val.flags);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(ComponentName, val.component);
    encoder.encodeArrayPointer(new codec.PointerTo(StringExtra), val.string_extras);
    encoder.encodeStruct(codec.NullableString, val.type);
  };

  function TaskDescription(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TaskDescription.prototype.initDefaults_ = function() {
    this.label = null;
    this.primaryColor = 0;
  };
  TaskDescription.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TaskDescription.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, TaskDescription.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate TaskDescription.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  TaskDescription.encodedSize = codec.kStructHeaderSize + 16;

  TaskDescription.decode = function(decoder) {
    var packed;
    var val = new TaskDescription();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.label = decoder.decodeStruct(codec.NullableString);
    val.primaryColor = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TaskDescription.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TaskDescription.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.label);
    encoder.encodeStruct(codec.Uint32, val.primaryColor);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Activity_GetUserFeedback_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Activity_GetUserFeedback_Params.prototype.initDefaults_ = function() {
    this.user_feedback = null;
  };
  Activity_GetUserFeedback_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Activity_GetUserFeedback_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Activity_GetUserFeedback_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Activity_GetUserFeedback_Params.user_feedback
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Activity_GetUserFeedback_Params.encodedSize = codec.kStructHeaderSize + 8;

  Activity_GetUserFeedback_Params.decode = function(decoder) {
    var packed;
    var val = new Activity_GetUserFeedback_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.user_feedback = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Activity_GetUserFeedback_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Activity_GetUserFeedback_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.user_feedback);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Activity_StartActivity_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Activity_StartActivity_Params.prototype.initDefaults_ = function() {
    this.intent = null;
  };
  Activity_StartActivity_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Activity_StartActivity_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Activity_StartActivity_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Activity_StartActivity_Params.intent
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, Intent, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Activity_StartActivity_Params.encodedSize = codec.kStructHeaderSize + 8;

  Activity_StartActivity_Params.decode = function(decoder) {
    var packed;
    var val = new Activity_StartActivity_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.intent = decoder.decodeStructPointer(Intent);
    return val;
  };

  Activity_StartActivity_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Activity_StartActivity_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(Intent, val.intent);
  };

  function Activity_FinishCurrentActivity_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Activity_FinishCurrentActivity_Params.prototype.initDefaults_ = function() {
  };
  Activity_FinishCurrentActivity_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Activity_FinishCurrentActivity_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Activity_FinishCurrentActivity_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Activity_FinishCurrentActivity_Params.encodedSize = codec.kStructHeaderSize + 0;

  Activity_FinishCurrentActivity_Params.decode = function(decoder) {
    var packed;
    var val = new Activity_FinishCurrentActivity_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Activity_FinishCurrentActivity_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Activity_FinishCurrentActivity_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function Activity_SetTaskDescription_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Activity_SetTaskDescription_Params.prototype.initDefaults_ = function() {
    this.description = null;
  };
  Activity_SetTaskDescription_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Activity_SetTaskDescription_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Activity_SetTaskDescription_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate Activity_SetTaskDescription_Params.description
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, TaskDescription, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Activity_SetTaskDescription_Params.encodedSize = codec.kStructHeaderSize + 8;

  Activity_SetTaskDescription_Params.decode = function(decoder) {
    var packed;
    var val = new Activity_SetTaskDescription_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.description = decoder.decodeStructPointer(TaskDescription);
    return val;
  };

  Activity_SetTaskDescription_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Activity_SetTaskDescription_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(TaskDescription, val.description);
  };

  function Activity_SetSystemUIVisibility_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Activity_SetSystemUIVisibility_Params.prototype.initDefaults_ = function() {
    this.visibility = 0;
  };
  Activity_SetSystemUIVisibility_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Activity_SetSystemUIVisibility_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Activity_SetSystemUIVisibility_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Activity_SetSystemUIVisibility_Params.encodedSize = codec.kStructHeaderSize + 8;

  Activity_SetSystemUIVisibility_Params.decode = function(decoder) {
    var packed;
    var val = new Activity_SetSystemUIVisibility_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.visibility = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Activity_SetSystemUIVisibility_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Activity_SetSystemUIVisibility_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.visibility);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function Activity_SetRequestedOrientation_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Activity_SetRequestedOrientation_Params.prototype.initDefaults_ = function() {
    this.orientation = 0;
  };
  Activity_SetRequestedOrientation_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Activity_SetRequestedOrientation_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, Activity_SetRequestedOrientation_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Activity_SetRequestedOrientation_Params.encodedSize = codec.kStructHeaderSize + 8;

  Activity_SetRequestedOrientation_Params.decode = function(decoder) {
    var packed;
    var val = new Activity_SetRequestedOrientation_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.orientation = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Activity_SetRequestedOrientation_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Activity_SetRequestedOrientation_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.orientation);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function PathService_GetAppDataDir_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PathService_GetAppDataDir_Params.prototype.initDefaults_ = function() {
  };
  PathService_GetAppDataDir_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PathService_GetAppDataDir_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PathService_GetAppDataDir_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PathService_GetAppDataDir_Params.encodedSize = codec.kStructHeaderSize + 0;

  PathService_GetAppDataDir_Params.decode = function(decoder) {
    var packed;
    var val = new PathService_GetAppDataDir_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PathService_GetAppDataDir_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PathService_GetAppDataDir_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function PathService_GetAppDataDir_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PathService_GetAppDataDir_ResponseParams.prototype.initDefaults_ = function() {
    this.path = null;
  };
  PathService_GetAppDataDir_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PathService_GetAppDataDir_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PathService_GetAppDataDir_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate PathService_GetAppDataDir_ResponseParams.path
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PathService_GetAppDataDir_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PathService_GetAppDataDir_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PathService_GetAppDataDir_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.path = decoder.decodeStruct(codec.String);
    return val;
  };

  PathService_GetAppDataDir_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PathService_GetAppDataDir_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.path);
  };

  function PathService_GetFilesDir_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PathService_GetFilesDir_Params.prototype.initDefaults_ = function() {
  };
  PathService_GetFilesDir_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PathService_GetFilesDir_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PathService_GetFilesDir_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PathService_GetFilesDir_Params.encodedSize = codec.kStructHeaderSize + 0;

  PathService_GetFilesDir_Params.decode = function(decoder) {
    var packed;
    var val = new PathService_GetFilesDir_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PathService_GetFilesDir_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PathService_GetFilesDir_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function PathService_GetFilesDir_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PathService_GetFilesDir_ResponseParams.prototype.initDefaults_ = function() {
    this.path = null;
  };
  PathService_GetFilesDir_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PathService_GetFilesDir_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PathService_GetFilesDir_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate PathService_GetFilesDir_ResponseParams.path
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PathService_GetFilesDir_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PathService_GetFilesDir_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PathService_GetFilesDir_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.path = decoder.decodeStruct(codec.String);
    return val;
  };

  PathService_GetFilesDir_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PathService_GetFilesDir_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.path);
  };

  function PathService_GetCacheDir_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PathService_GetCacheDir_Params.prototype.initDefaults_ = function() {
  };
  PathService_GetCacheDir_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PathService_GetCacheDir_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PathService_GetCacheDir_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PathService_GetCacheDir_Params.encodedSize = codec.kStructHeaderSize + 0;

  PathService_GetCacheDir_Params.decode = function(decoder) {
    var packed;
    var val = new PathService_GetCacheDir_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PathService_GetCacheDir_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PathService_GetCacheDir_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function PathService_GetCacheDir_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PathService_GetCacheDir_ResponseParams.prototype.initDefaults_ = function() {
    this.path = null;
  };
  PathService_GetCacheDir_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PathService_GetCacheDir_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, PathService_GetCacheDir_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate PathService_GetCacheDir_ResponseParams.path
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PathService_GetCacheDir_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PathService_GetCacheDir_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PathService_GetCacheDir_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.path = decoder.decodeStruct(codec.String);
    return val;
  };

  PathService_GetCacheDir_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PathService_GetCacheDir_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.path);
  };

  function UserFeedback_PerformHapticFeedback_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UserFeedback_PerformHapticFeedback_Params.prototype.initDefaults_ = function() {
    this.type = 0;
  };
  UserFeedback_PerformHapticFeedback_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UserFeedback_PerformHapticFeedback_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, UserFeedback_PerformHapticFeedback_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  UserFeedback_PerformHapticFeedback_Params.encodedSize = codec.kStructHeaderSize + 8;

  UserFeedback_PerformHapticFeedback_Params.decode = function(decoder) {
    var packed;
    var val = new UserFeedback_PerformHapticFeedback_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  UserFeedback_PerformHapticFeedback_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UserFeedback_PerformHapticFeedback_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function UserFeedback_PerformAuralFeedback_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UserFeedback_PerformAuralFeedback_Params.prototype.initDefaults_ = function() {
    this.type = 0;
  };
  UserFeedback_PerformAuralFeedback_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UserFeedback_PerformAuralFeedback_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, UserFeedback_PerformAuralFeedback_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  UserFeedback_PerformAuralFeedback_Params.encodedSize = codec.kStructHeaderSize + 8;

  UserFeedback_PerformAuralFeedback_Params.decode = function(decoder) {
    var packed;
    var val = new UserFeedback_PerformAuralFeedback_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  UserFeedback_PerformAuralFeedback_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UserFeedback_PerformAuralFeedback_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kActivity_GetUserFeedback_Name = 0;
  var kActivity_StartActivity_Name = 1;
  var kActivity_FinishCurrentActivity_Name = 2;
  var kActivity_SetTaskDescription_Name = 3;
  var kActivity_SetSystemUIVisibility_Name = 4;
  var kActivity_SetRequestedOrientation_Name = 5;

  function ActivityProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  ActivityProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  ActivityProxy.prototype.getUserFeedback = function(user_feedback) {
    var params = new Activity_GetUserFeedback_Params();
    params.user_feedback = core.isHandle(user_feedback) ? user_feedback : connection.bindProxy(user_feedback, UserFeedback);
    var builder = new codec.MessageBuilder(
        kActivity_GetUserFeedback_Name,
        codec.align(Activity_GetUserFeedback_Params.encodedSize));
    builder.encodeStruct(Activity_GetUserFeedback_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ActivityProxy.prototype.startActivity = function(intent) {
    var params = new Activity_StartActivity_Params();
    params.intent = intent;
    var builder = new codec.MessageBuilder(
        kActivity_StartActivity_Name,
        codec.align(Activity_StartActivity_Params.encodedSize));
    builder.encodeStruct(Activity_StartActivity_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ActivityProxy.prototype.finishCurrentActivity = function() {
    var params = new Activity_FinishCurrentActivity_Params();
    var builder = new codec.MessageBuilder(
        kActivity_FinishCurrentActivity_Name,
        codec.align(Activity_FinishCurrentActivity_Params.encodedSize));
    builder.encodeStruct(Activity_FinishCurrentActivity_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ActivityProxy.prototype.setTaskDescription = function(description) {
    var params = new Activity_SetTaskDescription_Params();
    params.description = description;
    var builder = new codec.MessageBuilder(
        kActivity_SetTaskDescription_Name,
        codec.align(Activity_SetTaskDescription_Params.encodedSize));
    builder.encodeStruct(Activity_SetTaskDescription_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ActivityProxy.prototype.setSystemUIVisibility = function(visibility) {
    var params = new Activity_SetSystemUIVisibility_Params();
    params.visibility = visibility;
    var builder = new codec.MessageBuilder(
        kActivity_SetSystemUIVisibility_Name,
        codec.align(Activity_SetSystemUIVisibility_Params.encodedSize));
    builder.encodeStruct(Activity_SetSystemUIVisibility_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ActivityProxy.prototype.setRequestedOrientation = function(orientation) {
    var params = new Activity_SetRequestedOrientation_Params();
    params.orientation = orientation;
    var builder = new codec.MessageBuilder(
        kActivity_SetRequestedOrientation_Name,
        codec.align(Activity_SetRequestedOrientation_Params.encodedSize));
    builder.encodeStruct(Activity_SetRequestedOrientation_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ActivityStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  ActivityStub.prototype = Object.create(bindings.StubBase.prototype);
  ActivityStub.prototype.getUserFeedback = function(user_feedback) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getUserFeedback && bindings.StubBindings(this).delegate.getUserFeedback(connection.bindHandleToStub(user_feedback, UserFeedback));
  }
  ActivityStub.prototype.startActivity = function(intent) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.startActivity && bindings.StubBindings(this).delegate.startActivity(intent);
  }
  ActivityStub.prototype.finishCurrentActivity = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.finishCurrentActivity && bindings.StubBindings(this).delegate.finishCurrentActivity();
  }
  ActivityStub.prototype.setTaskDescription = function(description) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.setTaskDescription && bindings.StubBindings(this).delegate.setTaskDescription(description);
  }
  ActivityStub.prototype.setSystemUIVisibility = function(visibility) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.setSystemUIVisibility && bindings.StubBindings(this).delegate.setSystemUIVisibility(visibility);
  }
  ActivityStub.prototype.setRequestedOrientation = function(orientation) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.setRequestedOrientation && bindings.StubBindings(this).delegate.setRequestedOrientation(orientation);
  }

  ActivityStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kActivity_GetUserFeedback_Name:
      var params = reader.decodeStruct(Activity_GetUserFeedback_Params);
      this.getUserFeedback(params.user_feedback);
      return true;
    case kActivity_StartActivity_Name:
      var params = reader.decodeStruct(Activity_StartActivity_Params);
      this.startActivity(params.intent);
      return true;
    case kActivity_FinishCurrentActivity_Name:
      var params = reader.decodeStruct(Activity_FinishCurrentActivity_Params);
      this.finishCurrentActivity();
      return true;
    case kActivity_SetTaskDescription_Name:
      var params = reader.decodeStruct(Activity_SetTaskDescription_Params);
      this.setTaskDescription(params.description);
      return true;
    case kActivity_SetSystemUIVisibility_Name:
      var params = reader.decodeStruct(Activity_SetSystemUIVisibility_Params);
      this.setSystemUIVisibility(params.visibility);
      return true;
    case kActivity_SetRequestedOrientation_Name:
      var params = reader.decodeStruct(Activity_SetRequestedOrientation_Params);
      this.setRequestedOrientation(params.orientation);
      return true;
    default:
      return false;
    }
  };

  ActivityStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateActivityRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kActivity_GetUserFeedback_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Activity_GetUserFeedback_Params;
      break;
      case kActivity_StartActivity_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Activity_StartActivity_Params;
      break;
      case kActivity_FinishCurrentActivity_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Activity_FinishCurrentActivity_Params;
      break;
      case kActivity_SetTaskDescription_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Activity_SetTaskDescription_Params;
      break;
      case kActivity_SetSystemUIVisibility_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Activity_SetSystemUIVisibility_Params;
      break;
      case kActivity_SetRequestedOrientation_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Activity_SetRequestedOrientation_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateActivityResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var Activity = {
    name: 'activity::Activity',
    proxyClass: ActivityProxy,
    stubClass: ActivityStub,
    validateRequest: validateActivityRequest,
    validateResponse: null,
  };
  ActivityStub.prototype.validator = validateActivityRequest;
  ActivityProxy.prototype.validator = null;

  var kPathService_GetAppDataDir_Name = 0;
  var kPathService_GetFilesDir_Name = 1;
  var kPathService_GetCacheDir_Name = 2;

  function PathServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  PathServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  PathServiceProxy.prototype.getAppDataDir = function() {
    var params = new PathService_GetAppDataDir_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kPathService_GetAppDataDir_Name,
          codec.align(PathService_GetAppDataDir_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PathService_GetAppDataDir_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PathService_GetAppDataDir_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PathServiceProxy.prototype.getFilesDir = function() {
    var params = new PathService_GetFilesDir_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kPathService_GetFilesDir_Name,
          codec.align(PathService_GetFilesDir_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PathService_GetFilesDir_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PathService_GetFilesDir_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PathServiceProxy.prototype.getCacheDir = function() {
    var params = new PathService_GetCacheDir_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kPathService_GetCacheDir_Name,
          codec.align(PathService_GetCacheDir_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PathService_GetCacheDir_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PathService_GetCacheDir_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PathServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  PathServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  PathServiceStub.prototype.getAppDataDir = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getAppDataDir && bindings.StubBindings(this).delegate.getAppDataDir();
  }
  PathServiceStub.prototype.getFilesDir = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getFilesDir && bindings.StubBindings(this).delegate.getFilesDir();
  }
  PathServiceStub.prototype.getCacheDir = function() {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getCacheDir && bindings.StubBindings(this).delegate.getCacheDir();
  }

  PathServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PathServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPathService_GetAppDataDir_Name:
      var params = reader.decodeStruct(PathService_GetAppDataDir_Params);
      return this.getAppDataDir().then(function(response) {
        var responseParams =
            new PathService_GetAppDataDir_ResponseParams();
        responseParams.path = response.path;
        var builder = new codec.MessageWithRequestIDBuilder(
            kPathService_GetAppDataDir_Name,
            codec.align(PathService_GetAppDataDir_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PathService_GetAppDataDir_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kPathService_GetFilesDir_Name:
      var params = reader.decodeStruct(PathService_GetFilesDir_Params);
      return this.getFilesDir().then(function(response) {
        var responseParams =
            new PathService_GetFilesDir_ResponseParams();
        responseParams.path = response.path;
        var builder = new codec.MessageWithRequestIDBuilder(
            kPathService_GetFilesDir_Name,
            codec.align(PathService_GetFilesDir_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PathService_GetFilesDir_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kPathService_GetCacheDir_Name:
      var params = reader.decodeStruct(PathService_GetCacheDir_Params);
      return this.getCacheDir().then(function(response) {
        var responseParams =
            new PathService_GetCacheDir_ResponseParams();
        responseParams.path = response.path;
        var builder = new codec.MessageWithRequestIDBuilder(
            kPathService_GetCacheDir_Name,
            codec.align(PathService_GetCacheDir_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PathService_GetCacheDir_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validatePathServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPathService_GetAppDataDir_Name:
        if (message.expectsResponse())
          paramsClass = PathService_GetAppDataDir_Params;
      break;
      case kPathService_GetFilesDir_Name:
        if (message.expectsResponse())
          paramsClass = PathService_GetFilesDir_Params;
      break;
      case kPathService_GetCacheDir_Name:
        if (message.expectsResponse())
          paramsClass = PathService_GetCacheDir_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePathServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPathService_GetAppDataDir_Name:
        if (message.isResponse())
          paramsClass = PathService_GetAppDataDir_ResponseParams;
        break;
      case kPathService_GetFilesDir_Name:
        if (message.isResponse())
          paramsClass = PathService_GetFilesDir_ResponseParams;
        break;
      case kPathService_GetCacheDir_Name:
        if (message.isResponse())
          paramsClass = PathService_GetCacheDir_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PathService = {
    name: 'activity::PathService',
    proxyClass: PathServiceProxy,
    stubClass: PathServiceStub,
    validateRequest: validatePathServiceRequest,
    validateResponse: validatePathServiceResponse,
  };
  PathServiceStub.prototype.validator = validatePathServiceRequest;
  PathServiceProxy.prototype.validator = validatePathServiceResponse;

  var kUserFeedback_PerformHapticFeedback_Name = 0;
  var kUserFeedback_PerformAuralFeedback_Name = 1;

  function UserFeedbackProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  UserFeedbackProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  UserFeedbackProxy.prototype.performHapticFeedback = function(type) {
    var params = new UserFeedback_PerformHapticFeedback_Params();
    params.type = type;
    var builder = new codec.MessageBuilder(
        kUserFeedback_PerformHapticFeedback_Name,
        codec.align(UserFeedback_PerformHapticFeedback_Params.encodedSize));
    builder.encodeStruct(UserFeedback_PerformHapticFeedback_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  UserFeedbackProxy.prototype.performAuralFeedback = function(type) {
    var params = new UserFeedback_PerformAuralFeedback_Params();
    params.type = type;
    var builder = new codec.MessageBuilder(
        kUserFeedback_PerformAuralFeedback_Name,
        codec.align(UserFeedback_PerformAuralFeedback_Params.encodedSize));
    builder.encodeStruct(UserFeedback_PerformAuralFeedback_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function UserFeedbackStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  UserFeedbackStub.prototype = Object.create(bindings.StubBase.prototype);
  UserFeedbackStub.prototype.performHapticFeedback = function(type) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.performHapticFeedback && bindings.StubBindings(this).delegate.performHapticFeedback(type);
  }
  UserFeedbackStub.prototype.performAuralFeedback = function(type) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.performAuralFeedback && bindings.StubBindings(this).delegate.performAuralFeedback(type);
  }

  UserFeedbackStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kUserFeedback_PerformHapticFeedback_Name:
      var params = reader.decodeStruct(UserFeedback_PerformHapticFeedback_Params);
      this.performHapticFeedback(params.type);
      return true;
    case kUserFeedback_PerformAuralFeedback_Name:
      var params = reader.decodeStruct(UserFeedback_PerformAuralFeedback_Params);
      this.performAuralFeedback(params.type);
      return true;
    default:
      return false;
    }
  };

  UserFeedbackStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateUserFeedbackRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kUserFeedback_PerformHapticFeedback_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = UserFeedback_PerformHapticFeedback_Params;
      break;
      case kUserFeedback_PerformAuralFeedback_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = UserFeedback_PerformAuralFeedback_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateUserFeedbackResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var UserFeedback = {
    name: null,
    proxyClass: UserFeedbackProxy,
    stubClass: UserFeedbackStub,
    validateRequest: validateUserFeedbackRequest,
    validateResponse: null,
  };
  UserFeedbackStub.prototype.validator = validateUserFeedbackRequest;
  UserFeedbackProxy.prototype.validator = null;


  var exports = {};
  exports.SystemUIVisibility = SystemUIVisibility;
  exports.ScreenOrientation = ScreenOrientation;
  exports.HapticFeedbackType = HapticFeedbackType;
  exports.AuralFeedbackType = AuralFeedbackType;
  exports.StringExtra = StringExtra;
  exports.ComponentName = ComponentName;
  exports.Intent = Intent;
  exports.TaskDescription = TaskDescription;
  exports.Activity = Activity;
  exports.PathService = PathService;
  exports.UserFeedback = UserFeedback;


  return exports;
});
