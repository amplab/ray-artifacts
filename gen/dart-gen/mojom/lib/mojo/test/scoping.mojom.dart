// WARNING: DO NOT EDIT. This file was generated by a program.
// See $MOJO_SDK/tools/bindings/mojom_bindings_generator.py.

library scoping_mojom;
import 'dart:async';
import 'dart:collection';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';
import 'package:mojo/bindings.dart' as bindings;
import 'package:mojo/core.dart' as core;
import 'package:mojo/mojo/bindings/types/mojom_types.mojom.dart' as mojom_types;
import 'package:mojo/mojo/bindings/types/service_describer.mojom.dart' as service_describer;



class _AGetBParams extends bindings.Struct {
  static const List<bindings.StructDataHeader> kVersions = const [
    const bindings.StructDataHeader(16, 0)
  ];
  BInterfaceRequest b = null;

  _AGetBParams() : super(kVersions.last.size);

  _AGetBParams.init(
    BInterfaceRequest this.b
  ) : super(kVersions.last.size);

  static _AGetBParams deserialize(bindings.Message message) =>
      bindings.Struct.deserialize(decode, message);

  static _AGetBParams decode(bindings.Decoder decoder0) {
    if (decoder0 == null) {
      return null;
    }
    _AGetBParams result = new _AGetBParams();

    var mainDataHeader = bindings.Struct.checkVersion(decoder0, kVersions);
    if (mainDataHeader.version >= 0) {
      
      result.b = decoder0.decodeInterfaceRequest(8, false, BStub.newFromEndpoint);
    }
    return result;
  }

  void encode(bindings.Encoder encoder) {
    var encoder0 = encoder.getStructEncoderAtOffset(kVersions.last);
    const String structName = "_AGetBParams";
    String fieldName;
    try {
      fieldName = "b";
      encoder0.encodeInterfaceRequest(b, 8, false);
    } on bindings.MojoCodecError catch(e) {
      bindings.Struct.fixErrorMessage(e, fieldName, structName);
      rethrow;
    }
  }

  String toString() {
    return "_AGetBParams("
           "b: $b" ")";
  }

  Map toJson() {
    throw new bindings.MojoCodecError(
        'Object containing handles cannot be encoded to JSON.');
  }
}


class _BGetCParams extends bindings.Struct {
  static const List<bindings.StructDataHeader> kVersions = const [
    const bindings.StructDataHeader(16, 0)
  ];
  CInterfaceRequest c = null;

  _BGetCParams() : super(kVersions.last.size);

  _BGetCParams.init(
    CInterfaceRequest this.c
  ) : super(kVersions.last.size);

  static _BGetCParams deserialize(bindings.Message message) =>
      bindings.Struct.deserialize(decode, message);

  static _BGetCParams decode(bindings.Decoder decoder0) {
    if (decoder0 == null) {
      return null;
    }
    _BGetCParams result = new _BGetCParams();

    var mainDataHeader = bindings.Struct.checkVersion(decoder0, kVersions);
    if (mainDataHeader.version >= 0) {
      
      result.c = decoder0.decodeInterfaceRequest(8, false, CStub.newFromEndpoint);
    }
    return result;
  }

  void encode(bindings.Encoder encoder) {
    var encoder0 = encoder.getStructEncoderAtOffset(kVersions.last);
    const String structName = "_BGetCParams";
    String fieldName;
    try {
      fieldName = "c";
      encoder0.encodeInterfaceRequest(c, 8, false);
    } on bindings.MojoCodecError catch(e) {
      bindings.Struct.fixErrorMessage(e, fieldName, structName);
      rethrow;
    }
  }

  String toString() {
    return "_BGetCParams("
           "c: $c" ")";
  }

  Map toJson() {
    throw new bindings.MojoCodecError(
        'Object containing handles cannot be encoded to JSON.');
  }
}


class _CDParams extends bindings.Struct {
  static const List<bindings.StructDataHeader> kVersions = const [
    const bindings.StructDataHeader(8, 0)
  ];

  _CDParams() : super(kVersions.last.size);

  _CDParams.init(
  ) : super(kVersions.last.size);

  static _CDParams deserialize(bindings.Message message) =>
      bindings.Struct.deserialize(decode, message);

  static _CDParams decode(bindings.Decoder decoder0) {
    if (decoder0 == null) {
      return null;
    }
    _CDParams result = new _CDParams();

    var mainDataHeader = bindings.Struct.checkVersion(decoder0, kVersions);
    return result;
  }

  void encode(bindings.Encoder encoder) {
    encoder.getStructEncoderAtOffset(kVersions.last);
    const String structName = "_CDParams";
    String fieldName;
    try {
    } on bindings.MojoCodecError catch(e) {
      bindings.Struct.fixErrorMessage(e, fieldName, structName);
      rethrow;
    }
  }

  String toString() {
    return "_CDParams("")";
  }

  Map toJson() {
    Map map = new Map();
    return map;
  }
}

const int _aMethodGetBName = 0;

class _AServiceDescription implements service_describer.ServiceDescription {
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

abstract class A {
  static const String serviceName = null;

  static service_describer.ServiceDescription _cachedServiceDescription;
  static service_describer.ServiceDescription get serviceDescription {
    if (_cachedServiceDescription == null) {
      _cachedServiceDescription = new _AServiceDescription();
    }
    return _cachedServiceDescription;
  }

  static AProxy connectToService(
      bindings.ServiceConnector s, String url, [String serviceName]) {
    AProxy p = new AProxy.unbound();
    String name = serviceName ?? A.serviceName;
    if ((name == null) || name.isEmpty) {
      throw new core.MojoApiError(
          "If an interface has no ServiceName, then one must be provided.");
    }
    s.connectToService(url, p, name);
    return p;
  }
  void getB(BInterfaceRequest b);
}

abstract class AInterface
    implements bindings.MojoInterface<A>,
               A {
  factory AInterface([A impl]) =>
      new AStub.unbound(impl);

  factory AInterface.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint,
      [A impl]) =>
      new AStub.fromEndpoint(endpoint, impl);

  factory AInterface.fromMock(
      A mock) =>
      new AProxy.fromMock(mock);
}

abstract class AInterfaceRequest
    implements bindings.MojoInterface<A>,
               A {
  factory AInterfaceRequest() =>
      new AProxy.unbound();
}

class _AProxyControl
    extends bindings.ProxyMessageHandler
    implements bindings.ProxyControl<A> {
  A impl;

  _AProxyControl.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint) : super.fromEndpoint(endpoint);

  _AProxyControl.fromHandle(
      core.MojoHandle handle) : super.fromHandle(handle);

  _AProxyControl.unbound() : super.unbound();

  String get serviceName => A.serviceName;

  void handleResponse(bindings.ServiceMessage message) {
    switch (message.header.type) {
      default:
        proxyError("Unexpected message type: ${message.header.type}");
        close(immediate: true);
        break;
    }
  }

  @override
  String toString() {
    var superString = super.toString();
    return "_AProxyControl($superString)";
  }
}

class AProxy
    extends bindings.Proxy<A>
    implements A,
               AInterface,
               AInterfaceRequest {
  AProxy.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint)
      : super(new _AProxyControl.fromEndpoint(endpoint));

  AProxy.fromHandle(core.MojoHandle handle)
      : super(new _AProxyControl.fromHandle(handle));

  AProxy.unbound()
      : super(new _AProxyControl.unbound());

  factory AProxy.fromMock(A mock) {
    AProxy newMockedProxy =
        new AProxy.unbound();
    newMockedProxy.impl = mock;
    return newMockedProxy;
  }

  static AProxy newFromEndpoint(
      core.MojoMessagePipeEndpoint endpoint) {
    assert(endpoint.setDescription("For AProxy"));
    return new AProxy.fromEndpoint(endpoint);
  }


  void getB(BInterfaceRequest b) {
    if (impl != null) {
      impl.getB(b);
      return;
    }
    if (!ctrl.isBound) {
      ctrl.proxyError("The Proxy is closed.");
      return;
    }
    var params = new _AGetBParams();
    params.b = b;
    ctrl.sendMessage(params,
        _aMethodGetBName);
  }
}

class _AStubControl
    extends bindings.StubMessageHandler
    implements bindings.StubControl<A> {
  A _impl;

  _AStubControl.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint, [A impl])
      : super.fromEndpoint(endpoint, autoBegin: impl != null) {
    _impl = impl;
  }

  _AStubControl.fromHandle(
      core.MojoHandle handle, [A impl])
      : super.fromHandle(handle, autoBegin: impl != null) {
    _impl = impl;
  }

  _AStubControl.unbound([this._impl]) : super.unbound();

  String get serviceName => A.serviceName;



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
      case _aMethodGetBName:
        var params = _AGetBParams.deserialize(
            message.payload);
        _impl.getB(params.b);
        break;
      default:
        throw new bindings.MojoCodecError("Unexpected message name");
        break;
    }
  }

  A get impl => _impl;
  set impl(A d) {
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
    return "_AStubControl($superString)";
  }

  int get version => 0;
}

class AStub
    extends bindings.Stub<A>
    implements A,
               AInterface,
               AInterfaceRequest {
  AStub.unbound([A impl])
      : super(new _AStubControl.unbound(impl));

  AStub.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint, [A impl])
      : super(new _AStubControl.fromEndpoint(endpoint, impl));

  AStub.fromHandle(
      core.MojoHandle handle, [A impl])
      : super(new _AStubControl.fromHandle(handle, impl));

  static AStub newFromEndpoint(
      core.MojoMessagePipeEndpoint endpoint) {
    assert(endpoint.setDescription("For AStub"));
    return new AStub.fromEndpoint(endpoint);
  }


  void getB(BInterfaceRequest b) {
    return impl.getB(b);
  }
}

const int _bMethodGetCName = 0;

class _BServiceDescription implements service_describer.ServiceDescription {
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

abstract class B {
  static const String serviceName = null;

  static service_describer.ServiceDescription _cachedServiceDescription;
  static service_describer.ServiceDescription get serviceDescription {
    if (_cachedServiceDescription == null) {
      _cachedServiceDescription = new _BServiceDescription();
    }
    return _cachedServiceDescription;
  }

  static BProxy connectToService(
      bindings.ServiceConnector s, String url, [String serviceName]) {
    BProxy p = new BProxy.unbound();
    String name = serviceName ?? B.serviceName;
    if ((name == null) || name.isEmpty) {
      throw new core.MojoApiError(
          "If an interface has no ServiceName, then one must be provided.");
    }
    s.connectToService(url, p, name);
    return p;
  }
  void getC(CInterfaceRequest c);
}

abstract class BInterface
    implements bindings.MojoInterface<B>,
               B {
  factory BInterface([B impl]) =>
      new BStub.unbound(impl);

  factory BInterface.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint,
      [B impl]) =>
      new BStub.fromEndpoint(endpoint, impl);

  factory BInterface.fromMock(
      B mock) =>
      new BProxy.fromMock(mock);
}

abstract class BInterfaceRequest
    implements bindings.MojoInterface<B>,
               B {
  factory BInterfaceRequest() =>
      new BProxy.unbound();
}

class _BProxyControl
    extends bindings.ProxyMessageHandler
    implements bindings.ProxyControl<B> {
  B impl;

  _BProxyControl.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint) : super.fromEndpoint(endpoint);

  _BProxyControl.fromHandle(
      core.MojoHandle handle) : super.fromHandle(handle);

  _BProxyControl.unbound() : super.unbound();

  String get serviceName => B.serviceName;

  void handleResponse(bindings.ServiceMessage message) {
    switch (message.header.type) {
      default:
        proxyError("Unexpected message type: ${message.header.type}");
        close(immediate: true);
        break;
    }
  }

  @override
  String toString() {
    var superString = super.toString();
    return "_BProxyControl($superString)";
  }
}

class BProxy
    extends bindings.Proxy<B>
    implements B,
               BInterface,
               BInterfaceRequest {
  BProxy.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint)
      : super(new _BProxyControl.fromEndpoint(endpoint));

  BProxy.fromHandle(core.MojoHandle handle)
      : super(new _BProxyControl.fromHandle(handle));

  BProxy.unbound()
      : super(new _BProxyControl.unbound());

  factory BProxy.fromMock(B mock) {
    BProxy newMockedProxy =
        new BProxy.unbound();
    newMockedProxy.impl = mock;
    return newMockedProxy;
  }

  static BProxy newFromEndpoint(
      core.MojoMessagePipeEndpoint endpoint) {
    assert(endpoint.setDescription("For BProxy"));
    return new BProxy.fromEndpoint(endpoint);
  }


  void getC(CInterfaceRequest c) {
    if (impl != null) {
      impl.getC(c);
      return;
    }
    if (!ctrl.isBound) {
      ctrl.proxyError("The Proxy is closed.");
      return;
    }
    var params = new _BGetCParams();
    params.c = c;
    ctrl.sendMessage(params,
        _bMethodGetCName);
  }
}

class _BStubControl
    extends bindings.StubMessageHandler
    implements bindings.StubControl<B> {
  B _impl;

  _BStubControl.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint, [B impl])
      : super.fromEndpoint(endpoint, autoBegin: impl != null) {
    _impl = impl;
  }

  _BStubControl.fromHandle(
      core.MojoHandle handle, [B impl])
      : super.fromHandle(handle, autoBegin: impl != null) {
    _impl = impl;
  }

  _BStubControl.unbound([this._impl]) : super.unbound();

  String get serviceName => B.serviceName;



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
      case _bMethodGetCName:
        var params = _BGetCParams.deserialize(
            message.payload);
        _impl.getC(params.c);
        break;
      default:
        throw new bindings.MojoCodecError("Unexpected message name");
        break;
    }
  }

  B get impl => _impl;
  set impl(B d) {
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
    return "_BStubControl($superString)";
  }

  int get version => 0;
}

class BStub
    extends bindings.Stub<B>
    implements B,
               BInterface,
               BInterfaceRequest {
  BStub.unbound([B impl])
      : super(new _BStubControl.unbound(impl));

  BStub.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint, [B impl])
      : super(new _BStubControl.fromEndpoint(endpoint, impl));

  BStub.fromHandle(
      core.MojoHandle handle, [B impl])
      : super(new _BStubControl.fromHandle(handle, impl));

  static BStub newFromEndpoint(
      core.MojoMessagePipeEndpoint endpoint) {
    assert(endpoint.setDescription("For BStub"));
    return new BStub.fromEndpoint(endpoint);
  }


  void getC(CInterfaceRequest c) {
    return impl.getC(c);
  }
}

const int _cMethodDName = 0;

class _CServiceDescription implements service_describer.ServiceDescription {
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

abstract class C {
  static const String serviceName = null;

  static service_describer.ServiceDescription _cachedServiceDescription;
  static service_describer.ServiceDescription get serviceDescription {
    if (_cachedServiceDescription == null) {
      _cachedServiceDescription = new _CServiceDescription();
    }
    return _cachedServiceDescription;
  }

  static CProxy connectToService(
      bindings.ServiceConnector s, String url, [String serviceName]) {
    CProxy p = new CProxy.unbound();
    String name = serviceName ?? C.serviceName;
    if ((name == null) || name.isEmpty) {
      throw new core.MojoApiError(
          "If an interface has no ServiceName, then one must be provided.");
    }
    s.connectToService(url, p, name);
    return p;
  }
  void d();
}

abstract class CInterface
    implements bindings.MojoInterface<C>,
               C {
  factory CInterface([C impl]) =>
      new CStub.unbound(impl);

  factory CInterface.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint,
      [C impl]) =>
      new CStub.fromEndpoint(endpoint, impl);

  factory CInterface.fromMock(
      C mock) =>
      new CProxy.fromMock(mock);
}

abstract class CInterfaceRequest
    implements bindings.MojoInterface<C>,
               C {
  factory CInterfaceRequest() =>
      new CProxy.unbound();
}

class _CProxyControl
    extends bindings.ProxyMessageHandler
    implements bindings.ProxyControl<C> {
  C impl;

  _CProxyControl.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint) : super.fromEndpoint(endpoint);

  _CProxyControl.fromHandle(
      core.MojoHandle handle) : super.fromHandle(handle);

  _CProxyControl.unbound() : super.unbound();

  String get serviceName => C.serviceName;

  void handleResponse(bindings.ServiceMessage message) {
    switch (message.header.type) {
      default:
        proxyError("Unexpected message type: ${message.header.type}");
        close(immediate: true);
        break;
    }
  }

  @override
  String toString() {
    var superString = super.toString();
    return "_CProxyControl($superString)";
  }
}

class CProxy
    extends bindings.Proxy<C>
    implements C,
               CInterface,
               CInterfaceRequest {
  CProxy.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint)
      : super(new _CProxyControl.fromEndpoint(endpoint));

  CProxy.fromHandle(core.MojoHandle handle)
      : super(new _CProxyControl.fromHandle(handle));

  CProxy.unbound()
      : super(new _CProxyControl.unbound());

  factory CProxy.fromMock(C mock) {
    CProxy newMockedProxy =
        new CProxy.unbound();
    newMockedProxy.impl = mock;
    return newMockedProxy;
  }

  static CProxy newFromEndpoint(
      core.MojoMessagePipeEndpoint endpoint) {
    assert(endpoint.setDescription("For CProxy"));
    return new CProxy.fromEndpoint(endpoint);
  }


  void d() {
    if (impl != null) {
      impl.d();
      return;
    }
    if (!ctrl.isBound) {
      ctrl.proxyError("The Proxy is closed.");
      return;
    }
    var params = new _CDParams();
    ctrl.sendMessage(params,
        _cMethodDName);
  }
}

class _CStubControl
    extends bindings.StubMessageHandler
    implements bindings.StubControl<C> {
  C _impl;

  _CStubControl.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint, [C impl])
      : super.fromEndpoint(endpoint, autoBegin: impl != null) {
    _impl = impl;
  }

  _CStubControl.fromHandle(
      core.MojoHandle handle, [C impl])
      : super.fromHandle(handle, autoBegin: impl != null) {
    _impl = impl;
  }

  _CStubControl.unbound([this._impl]) : super.unbound();

  String get serviceName => C.serviceName;



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
      case _cMethodDName:
        _impl.d();
        break;
      default:
        throw new bindings.MojoCodecError("Unexpected message name");
        break;
    }
  }

  C get impl => _impl;
  set impl(C d) {
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
    return "_CStubControl($superString)";
  }

  int get version => 0;
}

class CStub
    extends bindings.Stub<C>
    implements C,
               CInterface,
               CInterfaceRequest {
  CStub.unbound([C impl])
      : super(new _CStubControl.unbound(impl));

  CStub.fromEndpoint(
      core.MojoMessagePipeEndpoint endpoint, [C impl])
      : super(new _CStubControl.fromEndpoint(endpoint, impl));

  CStub.fromHandle(
      core.MojoHandle handle, [C impl])
      : super(new _CStubControl.fromHandle(handle, impl));

  static CStub newFromEndpoint(
      core.MojoMessagePipeEndpoint endpoint) {
    assert(endpoint.setDescription("For CStub"));
    return new CStub.fromEndpoint(endpoint);
  }


  void d() {
    return impl.d();
  }
}


mojom_types.RuntimeTypeInfo getRuntimeTypeInfo() => _runtimeTypeInfo ??
    _initRuntimeTypeInfo();

Map<String, mojom_types.UserDefinedType> getAllMojomTypeDefinitions() {
  return getRuntimeTypeInfo().typeMap;
}

var _runtimeTypeInfo;
mojom_types.RuntimeTypeInfo  _initRuntimeTypeInfo() {
  // serializedRuntimeTypeInfo contains the bytes of the Mojo serialization of
  // a mojom_types.RuntimeTypeInfo struct describing the Mojom types in this
  // file. The string contains the base64 encoding of the gzip-compressed bytes.
  var serializedRuntimeTypeInfo = "H4sIAAAJbogC/+xUzU4CMRBe8AcEoxg5cPDAkQuUI/EEW4gmHvRgYjgZqFXXuCzuLgd9Ah/FR+IRfAttQyeps23WgytEmeTLZLabdr6vna/mLKKicltl/B1yEWX836vKdYENbR32PVX5SKAqcDm8GFyfDYbHfvAQtGIexa1eyrqbsk7lekedX1G5ofUp67fNr3VjZ1E3tP71eEd1F9XAr6Pyhwr8H4Q8LifQU/WhQFkAyZDQd1ugJHAlcC5A7gOfkynzg9CLX0g4em6yIOQkChmRe5HpbPzoMeJNYh7ejhiPyNib3HiTu4jIYyISsWAqypb820+cB/Wu6tfR1nPaO8C6zS28bbo5mm76fjhkH/LqTnjsmvQpCOQz1KeOdAGe7fz3+cloW/hVFUfJrxnyp5nowcQTIiue+H676H3L9S3DXDgZ3TvMy9jiO4WM5wLuPW+ZD+jPTfc31zQ/NY1rTtv/t/3ItfqRa9S9tPYj8CNq0qf8d/yIrv0oOS/M4kflFfEjmu5HdJX9iFr9iBp13/vnfgS69S3vcn9JfjR3fsaPDhTHvm5GS/CjouWea+h8+P4ZAAD//3h07l1oDQAA";

  // Deserialize RuntimeTypeInfo
  var bytes = BASE64.decode(serializedRuntimeTypeInfo);
  var unzippedBytes = new ZLibDecoder().convert(bytes);
  var bdata = new ByteData.view(unzippedBytes.buffer);
  var message = new bindings.Message(bdata, null, unzippedBytes.length, 0);
  _runtimeTypeInfo = mojom_types.RuntimeTypeInfo.deserialize(message);
  return _runtimeTypeInfo;
}
