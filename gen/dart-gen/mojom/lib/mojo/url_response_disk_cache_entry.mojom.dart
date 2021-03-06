// WARNING: DO NOT EDIT. This file was generated by a program.
// See $MOJO_SDK/tools/bindings/mojom_bindings_generator.py.

library url_response_disk_cache_entry_mojom;
import 'package:mojo/bindings.dart' as bindings;
import 'package:mojo/core.dart' as core;

import 'package:mojo/mojo/url_response.mojom.dart' as url_response_mojom;



class CacheKey extends bindings.Struct {
  static const List<bindings.StructDataHeader> kVersions = const [
    const bindings.StructDataHeader(32, 0)
  ];
  String requestOrigin = null;
  String url = null;
  int timestamp = 0;

  CacheKey() : super(kVersions.last.size);

  CacheKey.init(
    String this.requestOrigin, 
    String this.url, 
    int this.timestamp
  ) : super(kVersions.last.size);

  static CacheKey deserialize(bindings.Message message) =>
      bindings.Struct.deserialize(decode, message);

  static CacheKey decode(bindings.Decoder decoder0) {
    if (decoder0 == null) {
      return null;
    }
    CacheKey result = new CacheKey();

    var mainDataHeader = bindings.Struct.checkVersion(decoder0, kVersions);
    if (mainDataHeader.version >= 0) {
      
      result.requestOrigin = decoder0.decodeString(8, false);
    }
    if (mainDataHeader.version >= 0) {
      
      result.url = decoder0.decodeString(16, false);
    }
    if (mainDataHeader.version >= 0) {
      
      result.timestamp = decoder0.decodeInt64(24);
    }
    return result;
  }

  void encode(bindings.Encoder encoder) {
    var encoder0 = encoder.getStructEncoderAtOffset(kVersions.last);
    const String structName = "CacheKey";
    String fieldName;
    try {
      fieldName = "requestOrigin";
      encoder0.encodeString(requestOrigin, 8, false);
      fieldName = "url";
      encoder0.encodeString(url, 16, false);
      fieldName = "timestamp";
      encoder0.encodeInt64(timestamp, 24);
    } on bindings.MojoCodecError catch(e) {
      bindings.Struct.fixErrorMessage(e, fieldName, structName);
      rethrow;
    }
  }

  String toString() {
    return "CacheKey("
           "requestOrigin: $requestOrigin" ", "
           "url: $url" ", "
           "timestamp: $timestamp" ")";
  }

  Map toJson() {
    Map map = new Map();
    map["requestOrigin"] = requestOrigin;
    map["url"] = url;
    map["timestamp"] = timestamp;
    return map;
  }
}


class CacheEntry extends bindings.Struct {
  static const List<bindings.StructDataHeader> kVersions = const [
    const bindings.StructDataHeader(40, 0)
  ];
  url_response_mojom.UrlResponse response = null;
  String entryDirectory = null;
  String responseBodyPath = null;
  int lastInvalidation = 0;

  CacheEntry() : super(kVersions.last.size);

  CacheEntry.init(
    url_response_mojom.UrlResponse this.response, 
    String this.entryDirectory, 
    String this.responseBodyPath, 
    int this.lastInvalidation
  ) : super(kVersions.last.size);

  static CacheEntry deserialize(bindings.Message message) =>
      bindings.Struct.deserialize(decode, message);

  static CacheEntry decode(bindings.Decoder decoder0) {
    if (decoder0 == null) {
      return null;
    }
    CacheEntry result = new CacheEntry();

    var mainDataHeader = bindings.Struct.checkVersion(decoder0, kVersions);
    if (mainDataHeader.version >= 0) {
      
      var decoder1 = decoder0.decodePointer(8, false);
      result.response = url_response_mojom.UrlResponse.decode(decoder1);
    }
    if (mainDataHeader.version >= 0) {
      
      result.entryDirectory = decoder0.decodeString(16, false);
    }
    if (mainDataHeader.version >= 0) {
      
      result.responseBodyPath = decoder0.decodeString(24, false);
    }
    if (mainDataHeader.version >= 0) {
      
      result.lastInvalidation = decoder0.decodeInt64(32);
    }
    return result;
  }

  void encode(bindings.Encoder encoder) {
    var encoder0 = encoder.getStructEncoderAtOffset(kVersions.last);
    const String structName = "CacheEntry";
    String fieldName;
    try {
      fieldName = "response";
      encoder0.encodeStruct(response, 8, false);
      fieldName = "entryDirectory";
      encoder0.encodeString(entryDirectory, 16, false);
      fieldName = "responseBodyPath";
      encoder0.encodeString(responseBodyPath, 24, false);
      fieldName = "lastInvalidation";
      encoder0.encodeInt64(lastInvalidation, 32);
    } on bindings.MojoCodecError catch(e) {
      bindings.Struct.fixErrorMessage(e, fieldName, structName);
      rethrow;
    }
  }

  String toString() {
    return "CacheEntry("
           "response: $response" ", "
           "entryDirectory: $entryDirectory" ", "
           "responseBodyPath: $responseBodyPath" ", "
           "lastInvalidation: $lastInvalidation" ")";
  }

  Map toJson() {
    throw new bindings.MojoCodecError(
        'Object containing handles cannot be encoded to JSON.');
  }
}



