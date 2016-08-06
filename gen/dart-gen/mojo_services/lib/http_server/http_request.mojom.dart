// WARNING: DO NOT EDIT. This file was generated by a program.
// See $MOJO_SDK/tools/bindings/mojom_bindings_generator.py.

library http_request_mojom;
import 'package:mojo/bindings.dart' as bindings;
import 'package:mojo/core.dart' as core;




class HttpRequest extends bindings.Struct {
  static const List<bindings.StructDataHeader> kVersions = const [
    const bindings.StructDataHeader(40, 0)
  ];
  String relativeUrl = null;
  String method = "GET";
  Map<String, String> headers = null;
  core.MojoDataPipeConsumer body = null;

  HttpRequest() : super(kVersions.last.size);

  HttpRequest.init(
    String this.relativeUrl, 
    String this.method, 
    Map<String, String> this.headers, 
    core.MojoDataPipeConsumer this.body
  ) : super(kVersions.last.size);

  static HttpRequest deserialize(bindings.Message message) =>
      bindings.Struct.deserialize(decode, message);

  static HttpRequest decode(bindings.Decoder decoder0) {
    if (decoder0 == null) {
      return null;
    }
    HttpRequest result = new HttpRequest();

    var mainDataHeader = bindings.Struct.checkVersion(decoder0, kVersions);
    if (mainDataHeader.version >= 0) {
      
      result.relativeUrl = decoder0.decodeString(8, false);
    }
    if (mainDataHeader.version >= 0) {
      
      result.method = decoder0.decodeString(16, false);
    }
    if (mainDataHeader.version >= 0) {
      
      var decoder1 = decoder0.decodePointer(24, true);
      if (decoder1 == null) {
        result.headers = null;
      } else {
        decoder1.decodeDataHeaderForMap();
        List<String> keys0;
        List<String> values0;
        {
          
          var decoder2 = decoder1.decodePointer(bindings.ArrayDataHeader.kHeaderSize, false);
          {
            var si2 = decoder2.decodeDataHeaderForPointerArray(bindings.kUnspecifiedArrayLength);
            keys0 = new List<String>(si2.numElements);
            for (int i2 = 0; i2 < si2.numElements; ++i2) {
              
              keys0[i2] = decoder2.decodeString(bindings.ArrayDataHeader.kHeaderSize + bindings.kPointerSize * i2, false);
            }
          }
        }
        {
          
          var decoder2 = decoder1.decodePointer(bindings.ArrayDataHeader.kHeaderSize + bindings.kPointerSize, false);
          {
            var si2 = decoder2.decodeDataHeaderForPointerArray(keys0.length);
            values0 = new List<String>(si2.numElements);
            for (int i2 = 0; i2 < si2.numElements; ++i2) {
              
              values0[i2] = decoder2.decodeString(bindings.ArrayDataHeader.kHeaderSize + bindings.kPointerSize * i2, false);
            }
          }
        }
        result.headers = new Map<String, String>.fromIterables(
            keys0, values0);
      }
    }
    if (mainDataHeader.version >= 0) {
      
      result.body = decoder0.decodeConsumerHandle(32, true);
    }
    return result;
  }

  void encode(bindings.Encoder encoder) {
    var encoder0 = encoder.getStructEncoderAtOffset(kVersions.last);
    const String structName = "HttpRequest";
    String fieldName;
    try {
      fieldName = "relativeUrl";
      encoder0.encodeString(relativeUrl, 8, false);
      fieldName = "method";
      encoder0.encodeString(method, 16, false);
      fieldName = "headers";
      if (headers == null) {
        encoder0.encodeNullPointer(24, true);
      } else {
        var encoder1 = encoder0.encoderForMap(24);
        var keys0 = headers.keys.toList();
        var values0 = headers.values.toList();
        
        {
          var encoder2 = encoder1.encodePointerArray(keys0.length, bindings.ArrayDataHeader.kHeaderSize, bindings.kUnspecifiedArrayLength);
          for (int i1 = 0; i1 < keys0.length; ++i1) {
            encoder2.encodeString(keys0[i1], bindings.ArrayDataHeader.kHeaderSize + bindings.kPointerSize * i1, false);
          }
        }
        
        {
          var encoder2 = encoder1.encodePointerArray(values0.length, bindings.ArrayDataHeader.kHeaderSize + bindings.kPointerSize, bindings.kUnspecifiedArrayLength);
          for (int i1 = 0; i1 < values0.length; ++i1) {
            encoder2.encodeString(values0[i1], bindings.ArrayDataHeader.kHeaderSize + bindings.kPointerSize * i1, false);
          }
        }
      }
      fieldName = "body";
      encoder0.encodeConsumerHandle(body, 32, true);
    } on bindings.MojoCodecError catch(e) {
      bindings.Struct.fixErrorMessage(e, fieldName, structName);
      rethrow;
    }
  }

  String toString() {
    return "HttpRequest("
           "relativeUrl: $relativeUrl" ", "
           "method: $method" ", "
           "headers: $headers" ", "
           "body: $body" ")";
  }

  Map toJson() {
    throw new bindings.MojoCodecError(
        'Object containing handles cannot be encoded to JSON.');
  }
}


