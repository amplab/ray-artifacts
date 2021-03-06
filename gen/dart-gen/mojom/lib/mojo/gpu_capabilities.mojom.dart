// WARNING: DO NOT EDIT. This file was generated by a program.
// See $MOJO_SDK/tools/bindings/mojom_bindings_generator.py.

library gpu_capabilities_mojom;
import 'package:mojo/bindings.dart' as bindings;




class GpuShaderPrecision extends bindings.Struct {
  static const List<bindings.StructDataHeader> kVersions = const [
    const bindings.StructDataHeader(24, 0)
  ];
  int minRange = 0;
  int maxRange = 0;
  int precision = 0;

  GpuShaderPrecision() : super(kVersions.last.size);

  GpuShaderPrecision.init(
    int this.minRange, 
    int this.maxRange, 
    int this.precision
  ) : super(kVersions.last.size);

  static GpuShaderPrecision deserialize(bindings.Message message) =>
      bindings.Struct.deserialize(decode, message);

  static GpuShaderPrecision decode(bindings.Decoder decoder0) {
    if (decoder0 == null) {
      return null;
    }
    GpuShaderPrecision result = new GpuShaderPrecision();

    var mainDataHeader = bindings.Struct.checkVersion(decoder0, kVersions);
    if (mainDataHeader.version >= 0) {
      
      result.minRange = decoder0.decodeInt32(8);
    }
    if (mainDataHeader.version >= 0) {
      
      result.maxRange = decoder0.decodeInt32(12);
    }
    if (mainDataHeader.version >= 0) {
      
      result.precision = decoder0.decodeInt32(16);
    }
    return result;
  }

  void encode(bindings.Encoder encoder) {
    var encoder0 = encoder.getStructEncoderAtOffset(kVersions.last);
    const String structName = "GpuShaderPrecision";
    String fieldName;
    try {
      fieldName = "minRange";
      encoder0.encodeInt32(minRange, 8);
      fieldName = "maxRange";
      encoder0.encodeInt32(maxRange, 12);
      fieldName = "precision";
      encoder0.encodeInt32(precision, 16);
    } on bindings.MojoCodecError catch(e) {
      bindings.Struct.fixErrorMessage(e, fieldName, structName);
      rethrow;
    }
  }

  String toString() {
    return "GpuShaderPrecision("
           "minRange: $minRange" ", "
           "maxRange: $maxRange" ", "
           "precision: $precision" ")";
  }

  Map toJson() {
    Map map = new Map();
    map["minRange"] = minRange;
    map["maxRange"] = maxRange;
    map["precision"] = precision;
    return map;
  }
}


class GpuPerStagePrecisions extends bindings.Struct {
  static const List<bindings.StructDataHeader> kVersions = const [
    const bindings.StructDataHeader(56, 0)
  ];
  GpuShaderPrecision lowInt = null;
  GpuShaderPrecision mediumInt = null;
  GpuShaderPrecision highInt = null;
  GpuShaderPrecision lowFloat = null;
  GpuShaderPrecision mediumFloat = null;
  GpuShaderPrecision highFloat = null;

  GpuPerStagePrecisions() : super(kVersions.last.size);

  GpuPerStagePrecisions.init(
    GpuShaderPrecision this.lowInt, 
    GpuShaderPrecision this.mediumInt, 
    GpuShaderPrecision this.highInt, 
    GpuShaderPrecision this.lowFloat, 
    GpuShaderPrecision this.mediumFloat, 
    GpuShaderPrecision this.highFloat
  ) : super(kVersions.last.size);

  static GpuPerStagePrecisions deserialize(bindings.Message message) =>
      bindings.Struct.deserialize(decode, message);

  static GpuPerStagePrecisions decode(bindings.Decoder decoder0) {
    if (decoder0 == null) {
      return null;
    }
    GpuPerStagePrecisions result = new GpuPerStagePrecisions();

    var mainDataHeader = bindings.Struct.checkVersion(decoder0, kVersions);
    if (mainDataHeader.version >= 0) {
      
      var decoder1 = decoder0.decodePointer(8, false);
      result.lowInt = GpuShaderPrecision.decode(decoder1);
    }
    if (mainDataHeader.version >= 0) {
      
      var decoder1 = decoder0.decodePointer(16, false);
      result.mediumInt = GpuShaderPrecision.decode(decoder1);
    }
    if (mainDataHeader.version >= 0) {
      
      var decoder1 = decoder0.decodePointer(24, false);
      result.highInt = GpuShaderPrecision.decode(decoder1);
    }
    if (mainDataHeader.version >= 0) {
      
      var decoder1 = decoder0.decodePointer(32, false);
      result.lowFloat = GpuShaderPrecision.decode(decoder1);
    }
    if (mainDataHeader.version >= 0) {
      
      var decoder1 = decoder0.decodePointer(40, false);
      result.mediumFloat = GpuShaderPrecision.decode(decoder1);
    }
    if (mainDataHeader.version >= 0) {
      
      var decoder1 = decoder0.decodePointer(48, false);
      result.highFloat = GpuShaderPrecision.decode(decoder1);
    }
    return result;
  }

  void encode(bindings.Encoder encoder) {
    var encoder0 = encoder.getStructEncoderAtOffset(kVersions.last);
    const String structName = "GpuPerStagePrecisions";
    String fieldName;
    try {
      fieldName = "lowInt";
      encoder0.encodeStruct(lowInt, 8, false);
      fieldName = "mediumInt";
      encoder0.encodeStruct(mediumInt, 16, false);
      fieldName = "highInt";
      encoder0.encodeStruct(highInt, 24, false);
      fieldName = "lowFloat";
      encoder0.encodeStruct(lowFloat, 32, false);
      fieldName = "mediumFloat";
      encoder0.encodeStruct(mediumFloat, 40, false);
      fieldName = "highFloat";
      encoder0.encodeStruct(highFloat, 48, false);
    } on bindings.MojoCodecError catch(e) {
      bindings.Struct.fixErrorMessage(e, fieldName, structName);
      rethrow;
    }
  }

  String toString() {
    return "GpuPerStagePrecisions("
           "lowInt: $lowInt" ", "
           "mediumInt: $mediumInt" ", "
           "highInt: $highInt" ", "
           "lowFloat: $lowFloat" ", "
           "mediumFloat: $mediumFloat" ", "
           "highFloat: $highFloat" ")";
  }

  Map toJson() {
    Map map = new Map();
    map["lowInt"] = lowInt;
    map["mediumInt"] = mediumInt;
    map["highInt"] = highInt;
    map["lowFloat"] = lowFloat;
    map["mediumFloat"] = mediumFloat;
    map["highFloat"] = highFloat;
    return map;
  }
}


class GpuCapabilities extends bindings.Struct {
  static const List<bindings.StructDataHeader> kVersions = const [
    const bindings.StructDataHeader(80, 0)
  ];
  GpuPerStagePrecisions vertexShaderPrecisions = null;
  GpuPerStagePrecisions fragmentShaderPrecisions = null;
  int maxCombinedTextureImageUnits = 0;
  int maxCubeMapTextureSize = 0;
  int maxFragmentUniformVectors = 0;
  int maxRenderbufferSize = 0;
  int maxTextureImageUnits = 0;
  int maxTextureSize = 0;
  int maxVaryingVectors = 0;
  int maxVertexAttribs = 0;
  int maxVertexTextureImageUnits = 0;
  int maxVertexUniformVectors = 0;
  int numCompressedTextureFormats = 0;
  int numShaderBinaryFormats = 0;
  int bindGeneratesResourceChromium = 0;
  bool postSubBuffer = false;
  bool eglImageExternal = false;
  bool textureFormatBgra8888 = false;
  bool textureFormatEtc1 = false;
  bool textureFormatEtc1Npot = false;
  bool textureRectangle = false;
  bool iosurface = false;
  bool textureUsage = false;
  bool textureStorage = false;
  bool discardFramebuffer = false;
  bool syncQuery = false;
  bool image = false;
  bool futureSyncPoints = false;
  bool blendEquationAdvanced = false;
  bool blendEquationAdvancedCoherent = false;

  GpuCapabilities() : super(kVersions.last.size);

  GpuCapabilities.init(
    GpuPerStagePrecisions this.vertexShaderPrecisions, 
    GpuPerStagePrecisions this.fragmentShaderPrecisions, 
    int this.maxCombinedTextureImageUnits, 
    int this.maxCubeMapTextureSize, 
    int this.maxFragmentUniformVectors, 
    int this.maxRenderbufferSize, 
    int this.maxTextureImageUnits, 
    int this.maxTextureSize, 
    int this.maxVaryingVectors, 
    int this.maxVertexAttribs, 
    int this.maxVertexTextureImageUnits, 
    int this.maxVertexUniformVectors, 
    int this.numCompressedTextureFormats, 
    int this.numShaderBinaryFormats, 
    int this.bindGeneratesResourceChromium, 
    bool this.postSubBuffer, 
    bool this.eglImageExternal, 
    bool this.textureFormatBgra8888, 
    bool this.textureFormatEtc1, 
    bool this.textureFormatEtc1Npot, 
    bool this.textureRectangle, 
    bool this.iosurface, 
    bool this.textureUsage, 
    bool this.textureStorage, 
    bool this.discardFramebuffer, 
    bool this.syncQuery, 
    bool this.image, 
    bool this.futureSyncPoints, 
    bool this.blendEquationAdvanced, 
    bool this.blendEquationAdvancedCoherent
  ) : super(kVersions.last.size);

  static GpuCapabilities deserialize(bindings.Message message) =>
      bindings.Struct.deserialize(decode, message);

  static GpuCapabilities decode(bindings.Decoder decoder0) {
    if (decoder0 == null) {
      return null;
    }
    GpuCapabilities result = new GpuCapabilities();

    var mainDataHeader = bindings.Struct.checkVersion(decoder0, kVersions);
    if (mainDataHeader.version >= 0) {
      
      var decoder1 = decoder0.decodePointer(8, false);
      result.vertexShaderPrecisions = GpuPerStagePrecisions.decode(decoder1);
    }
    if (mainDataHeader.version >= 0) {
      
      var decoder1 = decoder0.decodePointer(16, false);
      result.fragmentShaderPrecisions = GpuPerStagePrecisions.decode(decoder1);
    }
    if (mainDataHeader.version >= 0) {
      
      result.maxCombinedTextureImageUnits = decoder0.decodeInt32(24);
    }
    if (mainDataHeader.version >= 0) {
      
      result.maxCubeMapTextureSize = decoder0.decodeInt32(28);
    }
    if (mainDataHeader.version >= 0) {
      
      result.maxFragmentUniformVectors = decoder0.decodeInt32(32);
    }
    if (mainDataHeader.version >= 0) {
      
      result.maxRenderbufferSize = decoder0.decodeInt32(36);
    }
    if (mainDataHeader.version >= 0) {
      
      result.maxTextureImageUnits = decoder0.decodeInt32(40);
    }
    if (mainDataHeader.version >= 0) {
      
      result.maxTextureSize = decoder0.decodeInt32(44);
    }
    if (mainDataHeader.version >= 0) {
      
      result.maxVaryingVectors = decoder0.decodeInt32(48);
    }
    if (mainDataHeader.version >= 0) {
      
      result.maxVertexAttribs = decoder0.decodeInt32(52);
    }
    if (mainDataHeader.version >= 0) {
      
      result.maxVertexTextureImageUnits = decoder0.decodeInt32(56);
    }
    if (mainDataHeader.version >= 0) {
      
      result.maxVertexUniformVectors = decoder0.decodeInt32(60);
    }
    if (mainDataHeader.version >= 0) {
      
      result.numCompressedTextureFormats = decoder0.decodeInt32(64);
    }
    if (mainDataHeader.version >= 0) {
      
      result.numShaderBinaryFormats = decoder0.decodeInt32(68);
    }
    if (mainDataHeader.version >= 0) {
      
      result.bindGeneratesResourceChromium = decoder0.decodeInt32(72);
    }
    if (mainDataHeader.version >= 0) {
      
      result.postSubBuffer = decoder0.decodeBool(76, 0);
    }
    if (mainDataHeader.version >= 0) {
      
      result.eglImageExternal = decoder0.decodeBool(76, 1);
    }
    if (mainDataHeader.version >= 0) {
      
      result.textureFormatBgra8888 = decoder0.decodeBool(76, 2);
    }
    if (mainDataHeader.version >= 0) {
      
      result.textureFormatEtc1 = decoder0.decodeBool(76, 3);
    }
    if (mainDataHeader.version >= 0) {
      
      result.textureFormatEtc1Npot = decoder0.decodeBool(76, 4);
    }
    if (mainDataHeader.version >= 0) {
      
      result.textureRectangle = decoder0.decodeBool(76, 5);
    }
    if (mainDataHeader.version >= 0) {
      
      result.iosurface = decoder0.decodeBool(76, 6);
    }
    if (mainDataHeader.version >= 0) {
      
      result.textureUsage = decoder0.decodeBool(76, 7);
    }
    if (mainDataHeader.version >= 0) {
      
      result.textureStorage = decoder0.decodeBool(77, 0);
    }
    if (mainDataHeader.version >= 0) {
      
      result.discardFramebuffer = decoder0.decodeBool(77, 1);
    }
    if (mainDataHeader.version >= 0) {
      
      result.syncQuery = decoder0.decodeBool(77, 2);
    }
    if (mainDataHeader.version >= 0) {
      
      result.image = decoder0.decodeBool(77, 3);
    }
    if (mainDataHeader.version >= 0) {
      
      result.futureSyncPoints = decoder0.decodeBool(77, 4);
    }
    if (mainDataHeader.version >= 0) {
      
      result.blendEquationAdvanced = decoder0.decodeBool(77, 5);
    }
    if (mainDataHeader.version >= 0) {
      
      result.blendEquationAdvancedCoherent = decoder0.decodeBool(77, 6);
    }
    return result;
  }

  void encode(bindings.Encoder encoder) {
    var encoder0 = encoder.getStructEncoderAtOffset(kVersions.last);
    const String structName = "GpuCapabilities";
    String fieldName;
    try {
      fieldName = "vertexShaderPrecisions";
      encoder0.encodeStruct(vertexShaderPrecisions, 8, false);
      fieldName = "fragmentShaderPrecisions";
      encoder0.encodeStruct(fragmentShaderPrecisions, 16, false);
      fieldName = "maxCombinedTextureImageUnits";
      encoder0.encodeInt32(maxCombinedTextureImageUnits, 24);
      fieldName = "maxCubeMapTextureSize";
      encoder0.encodeInt32(maxCubeMapTextureSize, 28);
      fieldName = "maxFragmentUniformVectors";
      encoder0.encodeInt32(maxFragmentUniformVectors, 32);
      fieldName = "maxRenderbufferSize";
      encoder0.encodeInt32(maxRenderbufferSize, 36);
      fieldName = "maxTextureImageUnits";
      encoder0.encodeInt32(maxTextureImageUnits, 40);
      fieldName = "maxTextureSize";
      encoder0.encodeInt32(maxTextureSize, 44);
      fieldName = "maxVaryingVectors";
      encoder0.encodeInt32(maxVaryingVectors, 48);
      fieldName = "maxVertexAttribs";
      encoder0.encodeInt32(maxVertexAttribs, 52);
      fieldName = "maxVertexTextureImageUnits";
      encoder0.encodeInt32(maxVertexTextureImageUnits, 56);
      fieldName = "maxVertexUniformVectors";
      encoder0.encodeInt32(maxVertexUniformVectors, 60);
      fieldName = "numCompressedTextureFormats";
      encoder0.encodeInt32(numCompressedTextureFormats, 64);
      fieldName = "numShaderBinaryFormats";
      encoder0.encodeInt32(numShaderBinaryFormats, 68);
      fieldName = "bindGeneratesResourceChromium";
      encoder0.encodeInt32(bindGeneratesResourceChromium, 72);
      fieldName = "postSubBuffer";
      encoder0.encodeBool(postSubBuffer, 76, 0);
      fieldName = "eglImageExternal";
      encoder0.encodeBool(eglImageExternal, 76, 1);
      fieldName = "textureFormatBgra8888";
      encoder0.encodeBool(textureFormatBgra8888, 76, 2);
      fieldName = "textureFormatEtc1";
      encoder0.encodeBool(textureFormatEtc1, 76, 3);
      fieldName = "textureFormatEtc1Npot";
      encoder0.encodeBool(textureFormatEtc1Npot, 76, 4);
      fieldName = "textureRectangle";
      encoder0.encodeBool(textureRectangle, 76, 5);
      fieldName = "iosurface";
      encoder0.encodeBool(iosurface, 76, 6);
      fieldName = "textureUsage";
      encoder0.encodeBool(textureUsage, 76, 7);
      fieldName = "textureStorage";
      encoder0.encodeBool(textureStorage, 77, 0);
      fieldName = "discardFramebuffer";
      encoder0.encodeBool(discardFramebuffer, 77, 1);
      fieldName = "syncQuery";
      encoder0.encodeBool(syncQuery, 77, 2);
      fieldName = "image";
      encoder0.encodeBool(image, 77, 3);
      fieldName = "futureSyncPoints";
      encoder0.encodeBool(futureSyncPoints, 77, 4);
      fieldName = "blendEquationAdvanced";
      encoder0.encodeBool(blendEquationAdvanced, 77, 5);
      fieldName = "blendEquationAdvancedCoherent";
      encoder0.encodeBool(blendEquationAdvancedCoherent, 77, 6);
    } on bindings.MojoCodecError catch(e) {
      bindings.Struct.fixErrorMessage(e, fieldName, structName);
      rethrow;
    }
  }

  String toString() {
    return "GpuCapabilities("
           "vertexShaderPrecisions: $vertexShaderPrecisions" ", "
           "fragmentShaderPrecisions: $fragmentShaderPrecisions" ", "
           "maxCombinedTextureImageUnits: $maxCombinedTextureImageUnits" ", "
           "maxCubeMapTextureSize: $maxCubeMapTextureSize" ", "
           "maxFragmentUniformVectors: $maxFragmentUniformVectors" ", "
           "maxRenderbufferSize: $maxRenderbufferSize" ", "
           "maxTextureImageUnits: $maxTextureImageUnits" ", "
           "maxTextureSize: $maxTextureSize" ", "
           "maxVaryingVectors: $maxVaryingVectors" ", "
           "maxVertexAttribs: $maxVertexAttribs" ", "
           "maxVertexTextureImageUnits: $maxVertexTextureImageUnits" ", "
           "maxVertexUniformVectors: $maxVertexUniformVectors" ", "
           "numCompressedTextureFormats: $numCompressedTextureFormats" ", "
           "numShaderBinaryFormats: $numShaderBinaryFormats" ", "
           "bindGeneratesResourceChromium: $bindGeneratesResourceChromium" ", "
           "postSubBuffer: $postSubBuffer" ", "
           "eglImageExternal: $eglImageExternal" ", "
           "textureFormatBgra8888: $textureFormatBgra8888" ", "
           "textureFormatEtc1: $textureFormatEtc1" ", "
           "textureFormatEtc1Npot: $textureFormatEtc1Npot" ", "
           "textureRectangle: $textureRectangle" ", "
           "iosurface: $iosurface" ", "
           "textureUsage: $textureUsage" ", "
           "textureStorage: $textureStorage" ", "
           "discardFramebuffer: $discardFramebuffer" ", "
           "syncQuery: $syncQuery" ", "
           "image: $image" ", "
           "futureSyncPoints: $futureSyncPoints" ", "
           "blendEquationAdvanced: $blendEquationAdvanced" ", "
           "blendEquationAdvancedCoherent: $blendEquationAdvancedCoherent" ")";
  }

  Map toJson() {
    Map map = new Map();
    map["vertexShaderPrecisions"] = vertexShaderPrecisions;
    map["fragmentShaderPrecisions"] = fragmentShaderPrecisions;
    map["maxCombinedTextureImageUnits"] = maxCombinedTextureImageUnits;
    map["maxCubeMapTextureSize"] = maxCubeMapTextureSize;
    map["maxFragmentUniformVectors"] = maxFragmentUniformVectors;
    map["maxRenderbufferSize"] = maxRenderbufferSize;
    map["maxTextureImageUnits"] = maxTextureImageUnits;
    map["maxTextureSize"] = maxTextureSize;
    map["maxVaryingVectors"] = maxVaryingVectors;
    map["maxVertexAttribs"] = maxVertexAttribs;
    map["maxVertexTextureImageUnits"] = maxVertexTextureImageUnits;
    map["maxVertexUniformVectors"] = maxVertexUniformVectors;
    map["numCompressedTextureFormats"] = numCompressedTextureFormats;
    map["numShaderBinaryFormats"] = numShaderBinaryFormats;
    map["bindGeneratesResourceChromium"] = bindGeneratesResourceChromium;
    map["postSubBuffer"] = postSubBuffer;
    map["eglImageExternal"] = eglImageExternal;
    map["textureFormatBgra8888"] = textureFormatBgra8888;
    map["textureFormatEtc1"] = textureFormatEtc1;
    map["textureFormatEtc1Npot"] = textureFormatEtc1Npot;
    map["textureRectangle"] = textureRectangle;
    map["iosurface"] = iosurface;
    map["textureUsage"] = textureUsage;
    map["textureStorage"] = textureStorage;
    map["discardFramebuffer"] = discardFramebuffer;
    map["syncQuery"] = syncQuery;
    map["image"] = image;
    map["futureSyncPoints"] = futureSyncPoints;
    map["blendEquationAdvanced"] = blendEquationAdvanced;
    map["blendEquationAdvancedCoherent"] = blendEquationAdvancedCoherent;
    return map;
  }
}



