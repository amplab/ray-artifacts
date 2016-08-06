// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/network/interfaces/network_service.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
    "mojo/public/interfaces/network/network_error.mojom",
    "mojo/services/network/interfaces/cookie_store.mojom",
    "mojo/services/network/interfaces/host_resolver.mojom",
    "mojo/services/network/interfaces/http_server.mojom",
    "mojo/services/network/interfaces/net_address.mojom",
    "mojo/services/network/interfaces/tcp_bound_socket.mojom",
    "mojo/services/network/interfaces/tcp_connected_socket.mojom",
    "mojo/services/network/interfaces/udp_socket.mojom",
    "mojo/services/network/interfaces/url_loader.mojom",
    "mojo/services/network/interfaces/url_loader_interceptor.mojom",
    "mojo/services/network/interfaces/web_socket.mojom",
], function(bindings, codec, connection, core, validator, network_error$, cookie_store$, host_resolver$, http_server$, net_address$, tcp_bound_socket$, tcp_connected_socket$, udp_socket$, url_loader$, url_loader_interceptor$, web_socket$) {

  function NetworkService_CreateURLLoader_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_CreateURLLoader_Params.prototype.initDefaults_ = function() {
    this.loader = null;
  };
  NetworkService_CreateURLLoader_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_CreateURLLoader_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkService_CreateURLLoader_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateURLLoader_Params.loader
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_CreateURLLoader_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_CreateURLLoader_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_CreateURLLoader_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.loader = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_CreateURLLoader_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_CreateURLLoader_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.loader);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function NetworkService_GetCookieStore_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_GetCookieStore_Params.prototype.initDefaults_ = function() {
    this.cookie_store = null;
  };
  NetworkService_GetCookieStore_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_GetCookieStore_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkService_GetCookieStore_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_GetCookieStore_Params.cookie_store
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_GetCookieStore_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_GetCookieStore_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_GetCookieStore_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cookie_store = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_GetCookieStore_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_GetCookieStore_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.cookie_store);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function NetworkService_CreateWebSocket_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_CreateWebSocket_Params.prototype.initDefaults_ = function() {
    this.socket = null;
  };
  NetworkService_CreateWebSocket_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_CreateWebSocket_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkService_CreateWebSocket_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateWebSocket_Params.socket
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_CreateWebSocket_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_CreateWebSocket_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_CreateWebSocket_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.socket = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_CreateWebSocket_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_CreateWebSocket_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.socket);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function NetworkService_CreateTCPBoundSocket_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_CreateTCPBoundSocket_Params.prototype.initDefaults_ = function() {
    this.local_address = null;
    this.bound_socket = null;
  };
  NetworkService_CreateTCPBoundSocket_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_CreateTCPBoundSocket_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkService_CreateTCPBoundSocket_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateTCPBoundSocket_Params.local_address
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, net_address$.NetAddress, true);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateTCPBoundSocket_Params.bound_socket
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_CreateTCPBoundSocket_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkService_CreateTCPBoundSocket_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_CreateTCPBoundSocket_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.local_address = decoder.decodeStructPointer(net_address$.NetAddress);
    val.bound_socket = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_CreateTCPBoundSocket_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_CreateTCPBoundSocket_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(net_address$.NetAddress, val.local_address);
    encoder.encodeStruct(codec.Handle, val.bound_socket);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function NetworkService_CreateTCPBoundSocket_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_CreateTCPBoundSocket_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.bound_to = null;
  };
  NetworkService_CreateTCPBoundSocket_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_CreateTCPBoundSocket_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkService_CreateTCPBoundSocket_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateTCPBoundSocket_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_error$.NetworkError, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateTCPBoundSocket_ResponseParams.bound_to
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, net_address$.NetAddress, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_CreateTCPBoundSocket_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NetworkService_CreateTCPBoundSocket_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkService_CreateTCPBoundSocket_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(network_error$.NetworkError);
    val.bound_to = decoder.decodeStructPointer(net_address$.NetAddress);
    return val;
  };

  NetworkService_CreateTCPBoundSocket_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_CreateTCPBoundSocket_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_error$.NetworkError, val.result);
    encoder.encodeStructPointer(net_address$.NetAddress, val.bound_to);
  };

  function NetworkService_CreateTCPConnectedSocket_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_CreateTCPConnectedSocket_Params.prototype.initDefaults_ = function() {
    this.remote_address = null;
    this.send_stream = null;
    this.receive_stream = null;
    this.client_socket = null;
  };
  NetworkService_CreateTCPConnectedSocket_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_CreateTCPConnectedSocket_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkService_CreateTCPConnectedSocket_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateTCPConnectedSocket_Params.remote_address
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, net_address$.NetAddress, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateTCPConnectedSocket_Params.send_stream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateTCPConnectedSocket_Params.receive_stream
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 12, false)
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateTCPConnectedSocket_Params.client_socket
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_CreateTCPConnectedSocket_Params.encodedSize = codec.kStructHeaderSize + 24;

  NetworkService_CreateTCPConnectedSocket_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_CreateTCPConnectedSocket_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.remote_address = decoder.decodeStructPointer(net_address$.NetAddress);
    val.send_stream = decoder.decodeStruct(codec.Handle);
    val.receive_stream = decoder.decodeStruct(codec.Handle);
    val.client_socket = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_CreateTCPConnectedSocket_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_CreateTCPConnectedSocket_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(net_address$.NetAddress, val.remote_address);
    encoder.encodeStruct(codec.Handle, val.send_stream);
    encoder.encodeStruct(codec.Handle, val.receive_stream);
    encoder.encodeStruct(codec.Handle, val.client_socket);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function NetworkService_CreateTCPConnectedSocket_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_CreateTCPConnectedSocket_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.local_address = null;
  };
  NetworkService_CreateTCPConnectedSocket_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_CreateTCPConnectedSocket_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkService_CreateTCPConnectedSocket_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateTCPConnectedSocket_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_error$.NetworkError, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateTCPConnectedSocket_ResponseParams.local_address
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, net_address$.NetAddress, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_CreateTCPConnectedSocket_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NetworkService_CreateTCPConnectedSocket_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkService_CreateTCPConnectedSocket_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(network_error$.NetworkError);
    val.local_address = decoder.decodeStructPointer(net_address$.NetAddress);
    return val;
  };

  NetworkService_CreateTCPConnectedSocket_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_CreateTCPConnectedSocket_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_error$.NetworkError, val.result);
    encoder.encodeStructPointer(net_address$.NetAddress, val.local_address);
  };

  function NetworkService_CreateUDPSocket_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_CreateUDPSocket_Params.prototype.initDefaults_ = function() {
    this.socket = null;
  };
  NetworkService_CreateUDPSocket_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_CreateUDPSocket_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkService_CreateUDPSocket_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateUDPSocket_Params.socket
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_CreateUDPSocket_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_CreateUDPSocket_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_CreateUDPSocket_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.socket = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_CreateUDPSocket_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_CreateUDPSocket_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.socket);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function NetworkService_CreateHttpServer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_CreateHttpServer_Params.prototype.initDefaults_ = function() {
    this.local_address = null;
    this.delegate = null;
  };
  NetworkService_CreateHttpServer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_CreateHttpServer_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkService_CreateHttpServer_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateHttpServer_Params.local_address
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, net_address$.NetAddress, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateHttpServer_Params.delegate
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_CreateHttpServer_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkService_CreateHttpServer_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_CreateHttpServer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.local_address = decoder.decodeStructPointer(net_address$.NetAddress);
    val.delegate = decoder.decodeStruct(codec.Interface);
    return val;
  };

  NetworkService_CreateHttpServer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_CreateHttpServer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(net_address$.NetAddress, val.local_address);
    encoder.encodeStruct(codec.Interface, val.delegate);
  };

  function NetworkService_CreateHttpServer_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_CreateHttpServer_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.bound_to = null;
  };
  NetworkService_CreateHttpServer_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_CreateHttpServer_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkService_CreateHttpServer_ResponseParams.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateHttpServer_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_error$.NetworkError, false);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateHttpServer_ResponseParams.bound_to
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, net_address$.NetAddress, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_CreateHttpServer_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  NetworkService_CreateHttpServer_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkService_CreateHttpServer_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(network_error$.NetworkError);
    val.bound_to = decoder.decodeStructPointer(net_address$.NetAddress);
    return val;
  };

  NetworkService_CreateHttpServer_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_CreateHttpServer_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_error$.NetworkError, val.result);
    encoder.encodeStructPointer(net_address$.NetAddress, val.bound_to);
  };

  function NetworkService_RegisterURLLoaderInterceptor_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_RegisterURLLoaderInterceptor_Params.prototype.initDefaults_ = function() {
    this.factory = null;
  };
  NetworkService_RegisterURLLoaderInterceptor_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_RegisterURLLoaderInterceptor_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkService_RegisterURLLoaderInterceptor_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_RegisterURLLoaderInterceptor_Params.factory
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_RegisterURLLoaderInterceptor_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_RegisterURLLoaderInterceptor_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_RegisterURLLoaderInterceptor_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.factory = decoder.decodeStruct(codec.Interface);
    return val;
  };

  NetworkService_RegisterURLLoaderInterceptor_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_RegisterURLLoaderInterceptor_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Interface, val.factory);
  };

  function NetworkService_CreateHostResolver_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkService_CreateHostResolver_Params.prototype.initDefaults_ = function() {
    this.host_resolver = null;
  };
  NetworkService_CreateHostResolver_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkService_CreateHostResolver_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, NetworkService_CreateHostResolver_Params.encodedSize, 0);
    if (err !== validator.validationError.NONE)
        return err;

    
    // validate NetworkService_CreateHostResolver_Params.host_resolver
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkService_CreateHostResolver_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkService_CreateHostResolver_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkService_CreateHostResolver_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.host_resolver = decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkService_CreateHostResolver_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkService_CreateHostResolver_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.host_resolver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  var kNetworkService_CreateURLLoader_Name = 0;
  var kNetworkService_GetCookieStore_Name = 1;
  var kNetworkService_CreateWebSocket_Name = 2;
  var kNetworkService_CreateTCPBoundSocket_Name = 3;
  var kNetworkService_CreateTCPConnectedSocket_Name = 4;
  var kNetworkService_CreateUDPSocket_Name = 5;
  var kNetworkService_CreateHttpServer_Name = 6;
  var kNetworkService_RegisterURLLoaderInterceptor_Name = 7;
  var kNetworkService_CreateHostResolver_Name = 8;

  function NetworkServiceProxy(receiver) {
    bindings.ProxyBase.call(this, receiver);
  }
  NetworkServiceProxy.prototype = Object.create(bindings.ProxyBase.prototype);
  NetworkServiceProxy.prototype.createURLLoader = function(loader) {
    var params = new NetworkService_CreateURLLoader_Params();
    params.loader = core.isHandle(loader) ? loader : connection.bindProxy(loader, url_loader$.URLLoader);
    var builder = new codec.MessageBuilder(
        kNetworkService_CreateURLLoader_Name,
        codec.align(NetworkService_CreateURLLoader_Params.encodedSize));
    builder.encodeStruct(NetworkService_CreateURLLoader_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServiceProxy.prototype.getCookieStore = function(cookie_store) {
    var params = new NetworkService_GetCookieStore_Params();
    params.cookie_store = core.isHandle(cookie_store) ? cookie_store : connection.bindProxy(cookie_store, cookie_store$.CookieStore);
    var builder = new codec.MessageBuilder(
        kNetworkService_GetCookieStore_Name,
        codec.align(NetworkService_GetCookieStore_Params.encodedSize));
    builder.encodeStruct(NetworkService_GetCookieStore_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServiceProxy.prototype.createWebSocket = function(socket) {
    var params = new NetworkService_CreateWebSocket_Params();
    params.socket = core.isHandle(socket) ? socket : connection.bindProxy(socket, web_socket$.WebSocket);
    var builder = new codec.MessageBuilder(
        kNetworkService_CreateWebSocket_Name,
        codec.align(NetworkService_CreateWebSocket_Params.encodedSize));
    builder.encodeStruct(NetworkService_CreateWebSocket_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServiceProxy.prototype.createTCPBoundSocket = function(local_address, bound_socket) {
    var params = new NetworkService_CreateTCPBoundSocket_Params();
    params.local_address = local_address;
    params.bound_socket = core.isHandle(bound_socket) ? bound_socket : connection.bindProxy(bound_socket, tcp_bound_socket$.TCPBoundSocket);
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kNetworkService_CreateTCPBoundSocket_Name,
          codec.align(NetworkService_CreateTCPBoundSocket_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkService_CreateTCPBoundSocket_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkService_CreateTCPBoundSocket_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceProxy.prototype.createTCPConnectedSocket = function(remote_address, send_stream, receive_stream, client_socket) {
    var params = new NetworkService_CreateTCPConnectedSocket_Params();
    params.remote_address = remote_address;
    params.send_stream = send_stream;
    params.receive_stream = receive_stream;
    params.client_socket = core.isHandle(client_socket) ? client_socket : connection.bindProxy(client_socket, tcp_connected_socket$.TCPConnectedSocket);
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kNetworkService_CreateTCPConnectedSocket_Name,
          codec.align(NetworkService_CreateTCPConnectedSocket_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkService_CreateTCPConnectedSocket_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkService_CreateTCPConnectedSocket_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceProxy.prototype.createUDPSocket = function(socket) {
    var params = new NetworkService_CreateUDPSocket_Params();
    params.socket = core.isHandle(socket) ? socket : connection.bindProxy(socket, udp_socket$.UDPSocket);
    var builder = new codec.MessageBuilder(
        kNetworkService_CreateUDPSocket_Name,
        codec.align(NetworkService_CreateUDPSocket_Params.encodedSize));
    builder.encodeStruct(NetworkService_CreateUDPSocket_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServiceProxy.prototype.createHttpServer = function(local_address, delegate) {
    var params = new NetworkService_CreateHttpServer_Params();
    params.local_address = local_address;
    params.delegate = core.isHandle(delegate) ? delegate : connection.bindImpl(delegate, http_server$.HttpServerDelegate);
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageWithRequestIDBuilder(
          kNetworkService_CreateHttpServer_Name,
          codec.align(NetworkService_CreateHttpServer_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkService_CreateHttpServer_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkService_CreateHttpServer_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkServiceProxy.prototype.registerURLLoaderInterceptor = function(factory) {
    var params = new NetworkService_RegisterURLLoaderInterceptor_Params();
    params.factory = core.isHandle(factory) ? factory : connection.bindImpl(factory, url_loader_interceptor$.URLLoaderInterceptorFactory);
    var builder = new codec.MessageBuilder(
        kNetworkService_RegisterURLLoaderInterceptor_Name,
        codec.align(NetworkService_RegisterURLLoaderInterceptor_Params.encodedSize));
    builder.encodeStruct(NetworkService_RegisterURLLoaderInterceptor_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkServiceProxy.prototype.createHostResolver = function(host_resolver) {
    var params = new NetworkService_CreateHostResolver_Params();
    params.host_resolver = core.isHandle(host_resolver) ? host_resolver : connection.bindProxy(host_resolver, host_resolver$.HostResolver);
    var builder = new codec.MessageBuilder(
        kNetworkService_CreateHostResolver_Name,
        codec.align(NetworkService_CreateHostResolver_Params.encodedSize));
    builder.encodeStruct(NetworkService_CreateHostResolver_Params, params);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NetworkServiceStub(delegate) {
    bindings.StubBase.call(this, delegate);
  }
  NetworkServiceStub.prototype = Object.create(bindings.StubBase.prototype);
  NetworkServiceStub.prototype.createURLLoader = function(loader) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.createURLLoader && bindings.StubBindings(this).delegate.createURLLoader(connection.bindHandleToStub(loader, url_loader$.URLLoader));
  }
  NetworkServiceStub.prototype.getCookieStore = function(cookie_store) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.getCookieStore && bindings.StubBindings(this).delegate.getCookieStore(connection.bindHandleToStub(cookie_store, cookie_store$.CookieStore));
  }
  NetworkServiceStub.prototype.createWebSocket = function(socket) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.createWebSocket && bindings.StubBindings(this).delegate.createWebSocket(connection.bindHandleToStub(socket, web_socket$.WebSocket));
  }
  NetworkServiceStub.prototype.createTCPBoundSocket = function(local_address, bound_socket) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.createTCPBoundSocket && bindings.StubBindings(this).delegate.createTCPBoundSocket(local_address, connection.bindHandleToStub(bound_socket, tcp_bound_socket$.TCPBoundSocket));
  }
  NetworkServiceStub.prototype.createTCPConnectedSocket = function(remote_address, send_stream, receive_stream, client_socket) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.createTCPConnectedSocket && bindings.StubBindings(this).delegate.createTCPConnectedSocket(remote_address, send_stream, receive_stream, connection.bindHandleToStub(client_socket, tcp_connected_socket$.TCPConnectedSocket));
  }
  NetworkServiceStub.prototype.createUDPSocket = function(socket) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.createUDPSocket && bindings.StubBindings(this).delegate.createUDPSocket(connection.bindHandleToStub(socket, udp_socket$.UDPSocket));
  }
  NetworkServiceStub.prototype.createHttpServer = function(local_address, delegate) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.createHttpServer && bindings.StubBindings(this).delegate.createHttpServer(local_address, connection.bindHandleToProxy(delegate, http_server$.HttpServerDelegate));
  }
  NetworkServiceStub.prototype.registerURLLoaderInterceptor = function(factory) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.registerURLLoaderInterceptor && bindings.StubBindings(this).delegate.registerURLLoaderInterceptor(connection.bindHandleToProxy(factory, url_loader_interceptor$.URLLoaderInterceptorFactory));
  }
  NetworkServiceStub.prototype.createHostResolver = function(host_resolver) {
    return bindings.StubBindings(this).delegate && bindings.StubBindings(this).delegate.createHostResolver && bindings.StubBindings(this).delegate.createHostResolver(connection.bindHandleToStub(host_resolver, host_resolver$.HostResolver));
  }

  NetworkServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkService_CreateURLLoader_Name:
      var params = reader.decodeStruct(NetworkService_CreateURLLoader_Params);
      this.createURLLoader(params.loader);
      return true;
    case kNetworkService_GetCookieStore_Name:
      var params = reader.decodeStruct(NetworkService_GetCookieStore_Params);
      this.getCookieStore(params.cookie_store);
      return true;
    case kNetworkService_CreateWebSocket_Name:
      var params = reader.decodeStruct(NetworkService_CreateWebSocket_Params);
      this.createWebSocket(params.socket);
      return true;
    case kNetworkService_CreateUDPSocket_Name:
      var params = reader.decodeStruct(NetworkService_CreateUDPSocket_Params);
      this.createUDPSocket(params.socket);
      return true;
    case kNetworkService_RegisterURLLoaderInterceptor_Name:
      var params = reader.decodeStruct(NetworkService_RegisterURLLoaderInterceptor_Params);
      this.registerURLLoaderInterceptor(params.factory);
      return true;
    case kNetworkService_CreateHostResolver_Name:
      var params = reader.decodeStruct(NetworkService_CreateHostResolver_Params);
      this.createHostResolver(params.host_resolver);
      return true;
    default:
      return false;
    }
  };

  NetworkServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkService_CreateTCPBoundSocket_Name:
      var params = reader.decodeStruct(NetworkService_CreateTCPBoundSocket_Params);
      return this.createTCPBoundSocket(params.local_address, params.bound_socket).then(function(response) {
        var responseParams =
            new NetworkService_CreateTCPBoundSocket_ResponseParams();
        responseParams.result = response.result;
        responseParams.bound_to = response.bound_to;
        var builder = new codec.MessageWithRequestIDBuilder(
            kNetworkService_CreateTCPBoundSocket_Name,
            codec.align(NetworkService_CreateTCPBoundSocket_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkService_CreateTCPBoundSocket_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kNetworkService_CreateTCPConnectedSocket_Name:
      var params = reader.decodeStruct(NetworkService_CreateTCPConnectedSocket_Params);
      return this.createTCPConnectedSocket(params.remote_address, params.send_stream, params.receive_stream, params.client_socket).then(function(response) {
        var responseParams =
            new NetworkService_CreateTCPConnectedSocket_ResponseParams();
        responseParams.result = response.result;
        responseParams.local_address = response.local_address;
        var builder = new codec.MessageWithRequestIDBuilder(
            kNetworkService_CreateTCPConnectedSocket_Name,
            codec.align(NetworkService_CreateTCPConnectedSocket_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkService_CreateTCPConnectedSocket_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    case kNetworkService_CreateHttpServer_Name:
      var params = reader.decodeStruct(NetworkService_CreateHttpServer_Params);
      return this.createHttpServer(params.local_address, params.delegate).then(function(response) {
        var responseParams =
            new NetworkService_CreateHttpServer_ResponseParams();
        responseParams.result = response.result;
        responseParams.bound_to = response.bound_to;
        var builder = new codec.MessageWithRequestIDBuilder(
            kNetworkService_CreateHttpServer_Name,
            codec.align(NetworkService_CreateHttpServer_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkService_CreateHttpServer_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
    default:
      return Promise.reject(Error("Unhandled message: " + reader.messageName));
    }
  };

  function validateNetworkServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNetworkService_CreateURLLoader_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_CreateURLLoader_Params;
      break;
      case kNetworkService_GetCookieStore_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_GetCookieStore_Params;
      break;
      case kNetworkService_CreateWebSocket_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_CreateWebSocket_Params;
      break;
      case kNetworkService_CreateTCPBoundSocket_Name:
        if (message.expectsResponse())
          paramsClass = NetworkService_CreateTCPBoundSocket_Params;
      break;
      case kNetworkService_CreateTCPConnectedSocket_Name:
        if (message.expectsResponse())
          paramsClass = NetworkService_CreateTCPConnectedSocket_Params;
      break;
      case kNetworkService_CreateUDPSocket_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_CreateUDPSocket_Params;
      break;
      case kNetworkService_CreateHttpServer_Name:
        if (message.expectsResponse())
          paramsClass = NetworkService_CreateHttpServer_Params;
      break;
      case kNetworkService_RegisterURLLoaderInterceptor_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_RegisterURLLoaderInterceptor_Params;
      break;
      case kNetworkService_CreateHostResolver_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkService_CreateHostResolver_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNetworkServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNetworkService_CreateTCPBoundSocket_Name:
        if (message.isResponse())
          paramsClass = NetworkService_CreateTCPBoundSocket_ResponseParams;
        break;
      case kNetworkService_CreateTCPConnectedSocket_Name:
        if (message.isResponse())
          paramsClass = NetworkService_CreateTCPConnectedSocket_ResponseParams;
        break;
      case kNetworkService_CreateHttpServer_Name:
        if (message.isResponse())
          paramsClass = NetworkService_CreateHttpServer_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NetworkService = {
    name: 'mojo::NetworkService',
    proxyClass: NetworkServiceProxy,
    stubClass: NetworkServiceStub,
    validateRequest: validateNetworkServiceRequest,
    validateResponse: validateNetworkServiceResponse,
  };
  NetworkServiceStub.prototype.validator = validateNetworkServiceRequest;
  NetworkServiceProxy.prototype.validator = validateNetworkServiceResponse;


  var exports = {};
  exports.NetworkService = NetworkService;


  return exports;
});
