// WARNING: DO NOT EDIT. This file was generated by a program.
// See $MOJO_SDK/tools/bindings/mojom_bindings_generator.py.

library objstore_mojom;
import 'dart:async';
import 'package:mojo/bindings.dart' as bindings;
import 'package:mojo/core.dart' as core;
import 'package:mojo/mojo/bindings/types/service_describer.mojom.dart' as service_describer;



class _ObjStoreBuildObjectParams extends bindings.Struct {
  static const List<bindings.StructDataHeader> kVersions = const [
    const bindings.StructDataHeader(24, 0)
  ];
  int objectId = 0;
  int size = 0;

  _ObjStoreBuildObjectParams() : super(kVersions.last.size);

  _ObjStoreBuildObjectParams.init(
    int this.objectId, 
    int this.size
  ) : super(kVersions.last.size);

  static _ObjStoreBuildObjectParams deserialize(bindings.Message message) =>
      bindings.Struct.deserialize(decode, message);

  static _ObjStoreBuildObjectParams decode(bindings.Decoder decoder0) {
    if (decoder0 == null) {
      return null;
    }
    _ObjStoreBuildObjectParams result = new _ObjStoreBuildObjectParams();

    var mainDataHeader = bindings.Struct.checkVersion(decoder0, kVersions);
    if (mainDataHeader.version >= 0) {
      
      result.objectId = decoder0.decodeInt64(8);
    }
    if (mainDataHeader.version >= 0) {
      
      result.size = decoder0.decodeInt64(16);
    }
    return result;
  }

  void encode(bindings.Encoder encoder) {
    var encoder0 = encoder.getStructEncoderAtOffset(kVersions.last);
    const String structName = "_ObjStoreBuildObjectParams";
    String fieldName;
    try {
      fieldName = "objectId";
      encoder0.encodeInt64(objectId, 8);
      fieldName = "size";
      encoder0.encodeInt64(size, 16);
    } on bindings.MojoCodecError catch(e) {
      bindings.Struct.fixErrorMessage(e, fieldName, structName);
      rethrow;
    }
  }

  String toString() {
    return "_ObjStoreBuildObjectParams("
           "objectId: $objectId" ", "
           "size: $size" ")";
  }

  Map toJson() {
    Map map = new Map();
    map["objectId"] = objectId;
    map["size"] = size;
    return map;
  }
}


class ObjStoreBuildObjectResponseParams extends bindings.Struct {
  static const List<bindings.StructDataHeader> kVersions = const [
    const bindings.StructDataHeader(16, 0)
  ];
  core.MojoSharedBuffer buffer = null;

  ObjStoreBuildObjectResponseParams() : super(kVersions.last.size);

  ObjStoreBuildObjectResponseParams.init(
    core.MojoSharedBuffer this.buffer
  ) : super(kVersions.last.size);

  static ObjStoreBuildObjectResponseParams deserialize(bindings.Message message) =>
      bindings.Struct.deserialize(decode, message);

  static ObjStoreBuildObjectResponseParams decode(bindings.Decoder decoder0) {
    if (decoder0 == null) {
      return null;
    }
    ObjStoreBuildObjectResponseParams result = new ObjStoreBuildObjectResponseParams();

    var mainDataHeader = bindings.Struct.checkVersion(decoder0, kVersions);
    if (mainDataHeader.version >= 0) {
      
      result.buffer = decoder0.decodeSharedBufferHandle(8, false);
    }
    return result;
  }

  void encode(bindings.Encoder encoder) {
    var encoder0 = encoder.getStructEncoderAtOffset(kVersions.last);
    const String structName = "ObjStoreBuildObjectResponseParams";
    String fieldName;
    try {
      fieldName = "buffer";
      encoder0.encodeSharedBufferHandle(buffer, 8, false);
    } on bindings.MojoCodecError catch(e) {
      bindings.Struct.fixErrorMessage(e, fieldName, structName);
      rethrow;
    }
  }

  String toString() {
    return "ObjStoreBuildObjectResponseParams("
           "buffer: $buffer" ")";
  }

  Map toJson() {
    throw new bindings.MojoCodecError(
        'Object containing handles cannot be encoded to JSON.');
  }
}

const int _objStoreMethodBuildObjectName = 0;

class _ObjStoreServiceDescription implements service_describer.ServiceDescription {
  void getTopLevelInterface(Function responder) {
    responder(null);
  }

  void getTypeDefinition(String typeKey, Function responder) {
    responder(null);
  }

  void getAllTypeDefinitions(Function responder) {
    responder(null);
  }
}

abstract class ObjStore {
  static const String serviceName = "mojo::apps::ObjStore";

  static service_describer.ServiceDescription _cachedServiceDescription;
  static service_describer.ServiceDescription get serviceDescription {
    if (_cachedServiceDescription == null) {
      _cachedServiceDescription = new _ObjStoreServiceDescription();
    }
    return _cachedServiceDescription;
  }

  static ObjStoreProxy connectToService(
      bindings.ServiceConnector s, String url, [String serviceName]) {
    ObjStoreProxy p = new ObjStoreProxy.unbound();
    String name = serviceName ?? ObjStore.serviceName;
    if ((name == null) || name.isEmpty) {
      throw new core.MojoApiError(
          "If an interface has no ServiceName, then one must be provided.");
    }
    s.connectToService(url, p, name);
    return p;
  }
  void buildObject(int objectId,int size,void callback(core.MojoSharedBuffer buffer));
}

abstract class ObjStoreInterface
    implements bindings.MojoInterface<ObjStore>,
               ObjStore {
  factory ObjStoreInterface([ObjStore impl]) =>
      new ObjStoreStub.unbound(impl);

  factory ObjStoreInterface.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint,
      [ObjStore impl]) =>
      new ObjStoreStub.fromEndpoint(endpoint, impl);

  factory ObjStoreInterface.fromMock(
      ObjStore mock) =>
      new ObjStoreProxy.fromMock(mock);
}

abstract class ObjStoreInterfaceRequest
    implements bindings.MojoInterface<ObjStore>,
               ObjStore {
  factory ObjStoreInterfaceRequest() =>
      new ObjStoreProxy.unbound();
}

class _ObjStoreProxyControl
    extends bindings.ProxyMessageHandler
    implements bindings.ProxyControl<ObjStore> {
  ObjStore impl;

  _ObjStoreProxyControl.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint) : super.fromEndpoint(endpoint);

  _ObjStoreProxyControl.fromHandle(
      core.MojoHandle handle) : super.fromHandle(handle);

  _ObjStoreProxyControl.unbound() : super.unbound();

  String get serviceName => ObjStore.serviceName;

  void handleResponse(bindings.ServiceMessage message) {
    switch (message.header.type) {
      case _objStoreMethodBuildObjectName:
        var r = ObjStoreBuildObjectResponseParams.deserialize(
            message.payload);
        if (!message.header.hasRequestId) {
          proxyError("Expected a message with a valid request Id.");
          return;
        }
        Function callback = callbackMap[message.header.requestId];
        if (callback == null) {
          proxyError(
              "Message had unknown request Id: ${message.header.requestId}");
          return;
        }
        callbackMap.remove(message.header.requestId);
        callback(r.buffer );
        break;
      default:
        proxyError("Unexpected message type: ${message.header.type}");
        close(immediate: true);
        break;
    }
  }

  @override
  String toString() {
    var superString = super.toString();
    return "_ObjStoreProxyControl($superString)";
  }
}

class ObjStoreProxy
    extends bindings.Proxy<ObjStore>
    implements ObjStore,
               ObjStoreInterface,
               ObjStoreInterfaceRequest {
  ObjStoreProxy.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint)
      : super(new _ObjStoreProxyControl.fromEndpoint(endpoint));

  ObjStoreProxy.fromHandle(core.MojoHandle handle)
      : super(new _ObjStoreProxyControl.fromHandle(handle));

  ObjStoreProxy.unbound()
      : super(new _ObjStoreProxyControl.unbound());

  factory ObjStoreProxy.fromMock(ObjStore mock) {
    ObjStoreProxy newMockedProxy =
        new ObjStoreProxy.unbound();
    newMockedProxy.impl = mock;
    return newMockedProxy;
  }

  static ObjStoreProxy newFromEndpoint(
      core.MojoMessagePipeEndpoint endpoint) {
    assert(endpoint.setDescription("For ObjStoreProxy"));
    return new ObjStoreProxy.fromEndpoint(endpoint);
  }


  void buildObject(int objectId,int size,void callback(core.MojoSharedBuffer buffer)) {
    if (impl != null) {
      impl.buildObject(objectId,size,callback);
      return;
    }
    var params = new _ObjStoreBuildObjectParams();
    params.objectId = objectId;
    params.size = size;
    Function zonedCallback;
    if (identical(Zone.current, Zone.ROOT)) {
      zonedCallback = callback;
    } else {
      Zone z = Zone.current;
      zonedCallback = ((core.MojoSharedBuffer buffer) {
        z.bindCallback(() {
          callback(buffer);
        })();
      });
    }
    ctrl.sendMessageWithRequestId(
        params,
        _objStoreMethodBuildObjectName,
        -1,
        bindings.MessageHeader.kMessageExpectsResponse,
        zonedCallback);
  }
}

class _ObjStoreStubControl
    extends bindings.StubMessageHandler
    implements bindings.StubControl<ObjStore> {
  ObjStore _impl;

  _ObjStoreStubControl.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint, [ObjStore impl])
      : super.fromEndpoint(endpoint, autoBegin: impl != null) {
    _impl = impl;
  }

  _ObjStoreStubControl.fromHandle(
      core.MojoHandle handle, [ObjStore impl])
      : super.fromHandle(handle, autoBegin: impl != null) {
    _impl = impl;
  }

  _ObjStoreStubControl.unbound([this._impl]) : super.unbound();

  String get serviceName => ObjStore.serviceName;


  Function _objStoreBuildObjectResponseParamsResponder(
      int requestId) {
  return (core.MojoSharedBuffer buffer) {
      var result = new ObjStoreBuildObjectResponseParams();
      result.buffer = buffer;
      sendResponse(buildResponseWithId(
          result,
          _objStoreMethodBuildObjectName,
          requestId,
          bindings.MessageHeader.kMessageIsResponse));
    };
  }

  void handleMessage(bindings.ServiceMessage message) {
    if (bindings.ControlMessageHandler.isControlMessage(message)) {
      bindings.ControlMessageHandler.handleMessage(
          this, 0, message);
      return;
    }
    if (_impl == null) {
      throw new core.MojoApiError("$this has no implementation set");
    }
    switch (message.header.type) {
      case _objStoreMethodBuildObjectName:
        var params = _ObjStoreBuildObjectParams.deserialize(
            message.payload);
        _impl.buildObject(params.objectId, params.size, _objStoreBuildObjectResponseParamsResponder(message.header.requestId));
        break;
      default:
        throw new bindings.MojoCodecError("Unexpected message name");
        break;
    }
  }

  ObjStore get impl => _impl;
  set impl(ObjStore d) {
    if (d == null) {
      throw new core.MojoApiError("$this: Cannot set a null implementation");
    }
    if (isBound && (_impl == null)) {
      beginHandlingEvents();
    }
    _impl = d;
  }

  @override
  void bind(core.MojoMessagePipeEndpoint endpoint) {
    super.bind(endpoint);
    if (!isOpen && (_impl != null)) {
      beginHandlingEvents();
    }
  }

  @override
  String toString() {
    var superString = super.toString();
    return "_ObjStoreStubControl($superString)";
  }

  int get version => 0;
}

class ObjStoreStub
    extends bindings.Stub<ObjStore>
    implements ObjStore,
               ObjStoreInterface,
               ObjStoreInterfaceRequest {
  ObjStoreStub.unbound([ObjStore impl])
      : super(new _ObjStoreStubControl.unbound(impl));

  ObjStoreStub.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint, [ObjStore impl])
      : super(new _ObjStoreStubControl.fromEndpoint(endpoint, impl));

  ObjStoreStub.fromHandle(
      core.MojoHandle handle, [ObjStore impl])
      : super(new _ObjStoreStubControl.fromHandle(handle, impl));

  static ObjStoreStub newFromEndpoint(
      core.MojoMessagePipeEndpoint endpoint) {
    assert(endpoint.setDescription("For ObjStoreStub"));
    return new ObjStoreStub.fromEndpoint(endpoint);
  }


  void buildObject(int objectId,int size,void callback(core.MojoSharedBuffer buffer)) {
    return impl.buildObject(objectId,size,callback);
  }
}



