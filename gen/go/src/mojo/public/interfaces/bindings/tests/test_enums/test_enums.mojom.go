// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     mojo/public/interfaces/bindings/tests/test_enums.mojom
//

package test_enums

import (
	ioutil "io/ioutil"
	bytes "bytes"
	fmt "fmt"
	base64 "encoding/base64"
	mojom_types "mojo/public/interfaces/bindings/mojom_types"
	bindings "mojo/public/go/bindings"
	gzip "compress/gzip"
)

// This global variable contains a mojom_types.RuntimeTypeInfo struct
// describing the types defined in this file and all of its imports as
// well as the top-level interfaces defined in this file.
var runtimeTypeInfo__ = mojom_types.RuntimeTypeInfo{}

func getRuntimeTypeInfo() mojom_types.RuntimeTypeInfo {
  if runtimeTypeInfo__.TypeMap == nil {
    initRuntimeTypeInfo()
  }
  return runtimeTypeInfo__
}

func initRuntimeTypeInfo() {
  // serializedRuntimeTypeInfo contains the bytes of the Mojo serialization of
  // a mojom_types.RuntimeTypeInfo struct describing the Mojom types in this file.
  // The string contains the base64 encoding of the gzip-compressed bytes.
  serializedRuntimeTypeInfo := "H4sIAAAJbogC/+SVS0/CQBDHSwu+QINv45NED1zsGk7GE5rUmHiAYEPEC4Fapca2pC0H/VR+NI/cdLadRli3QGItByb5d+hm2Jn9dXd2Rwgsj/4MPTse+gXGs3HdgXGRM+8xaA+kNqpK81ZpXJj2iy17uuvJKjwUq2f6cSeg/dFxJRpXZPKw9Xxk+OOf6MvCsIV1nqP/QrsR+JZHFmFRu/B7DRSxrF91SCBa4gOoBiId29RJVzNtx/DeidN6O9VsRyeuoxE6J+n22q+GRgzL052nlqa7pG1Yj4b17BKaLng2dUjoyvQPmJdySoMK4fpSga+Kge9IP3HCQFxYZ59Z91+55bAeVblT6fsRaJvLTfZDWG5p/O7/zS2P3yi0cXxSMfFZxLnq+E7PwgafT523rzIJ80lNyEeMiU8W815XKv77IWiLz8cPYfnMJcxHnJCPFDOfq8vaOD5+CMtnPmE+UkT/7o/hUWZ4VCN4rOKZGro88C5a53IpcetZmlK/LuIBK+NGuo/o11EWd78uIBsON79hs9yyCe2nafXnA9BmBI86Zx/lZqw/R9/vJb9Bs3yWZ6w/j+JDY1g+K1Pqz98BAAD//ypocOowDAAA"

  // Deserialize RuntimeTypeInfo
  compressedBytes, err := base64.StdEncoding.DecodeString(serializedRuntimeTypeInfo)
  if err != nil {
    panic(fmt.Sprintf("Error while base64Decoding runtimeTypeInfo: %s", err.Error()))
  }
  reader, err := gzip.NewReader(bytes.NewBuffer(compressedBytes))
  if err != nil {
    panic(fmt.Sprintf("Error while decompressing runtimeTypeInfo: %s", err.Error()))
  }
  uncompressedBytes, err := ioutil.ReadAll(reader)
  if err != nil {
     panic(fmt.Sprintf("Error while decompressing runtimeTypeInfo: %s", err.Error()))
  }
  if err = reader.Close(); err != nil {
    panic(fmt.Sprintf("Error while decompressing runtimeTypeInfo: %s", err.Error()))
  }
  decoder := bindings.NewDecoder(uncompressedBytes, nil)
  runtimeTypeInfo__.Decode(decoder)

}
func GetAllMojomTypeDefinitions() map[string]mojom_types.UserDefinedType {
  return getRuntimeTypeInfo().TypeMap
}

type TestEnum int32

const (
	TestEnum_Test TestEnum = 0
	TestEnum_V = 1
	TestEnum_Foo = 2
	TestEnum_Bar = 3
)
// TestEnumMojomType returns the UserDefinedType that describes the Mojom
// type of TestEnum. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function GetAllMojomTypeDefinitions().
func TestEnumMojomType() mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()["TYPE_KEY:mojo.test.TestEnum"]
}



// MojomType returns the UserDefinedType that describes the Mojom
// type of this object. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function AllMojomTypes().
func (*TestEnum) MojomType() mojom_types.UserDefinedType {
	return TestEnumMojomType()
}

// AllMojomTypes returns a map that contains the UserDefinedType for
// all Mojom types in the complete type graph of the Mojom type of this object.
func (*TestEnum) AllMojomTypes() map[string]mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()
}


type TestEnum2 int32

const (
	TestEnum2_Test TestEnum2 = 0
	TestEnum2_V = 1
	TestEnum2_Foo = 2
	TestEnum2_Bar = 3
)
// TestEnum2MojomType returns the UserDefinedType that describes the Mojom
// type of TestEnum2. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function GetAllMojomTypeDefinitions().
func TestEnum2MojomType() mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()["TYPE_KEY:mojo.test.TestEnum2"]
}



// MojomType returns the UserDefinedType that describes the Mojom
// type of this object. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function AllMojomTypes().
func (*TestEnum2) MojomType() mojom_types.UserDefinedType {
	return TestEnum2MojomType()
}

// AllMojomTypes returns a map that contains the UserDefinedType for
// all Mojom types in the complete type graph of the Mojom type of this object.
func (*TestEnum2) AllMojomTypes() map[string]mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()
}

