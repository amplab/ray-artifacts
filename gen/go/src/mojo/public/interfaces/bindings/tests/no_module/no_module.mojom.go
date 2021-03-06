// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     mojo/public/interfaces/bindings/tests/no_module.mojom
//

package no_module

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
  serializedRuntimeTypeInfo := "H4sIAAAJbogC/5JggAABKG0ApdHFYTQHGo2uzgGJz4ikTgmIpYA4JDLANd7bNdLKNa80NzyzJCO/tMQ3P6U0JxVhHiMW+9DtAStCso8Bzf0eUPo/FEQwYAeSQCwIxDicQ1Ae3V1sQMwKxJFAHAjE+hn5uan6Bcm5+UWZJVX6RYmVusn5Ran6xUXJ+rn5Wfn6BaVJOZnJ+pl5JalFaYnJqcX6SZl5KZl56cX6JanFJcX6efnxuWAb9UDqc3GErwaUVmDAD3CFlwVaeHng0M8JtdcRypcGYmFs4aPniDV82IGYiQ7hAwgAAP//6XMZrNgCAAA="

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

type EnumWithoutModule int32

const (
	EnumWithoutModule_A EnumWithoutModule = 0
)
// EnumWithoutModuleMojomType returns the UserDefinedType that describes the Mojom
// type of EnumWithoutModule. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function GetAllMojomTypeDefinitions().
func EnumWithoutModuleMojomType() mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()["TYPE_KEY:EnumWithoutModule"]
}



// MojomType returns the UserDefinedType that describes the Mojom
// type of this object. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function AllMojomTypes().
func (*EnumWithoutModule) MojomType() mojom_types.UserDefinedType {
	return EnumWithoutModuleMojomType()
}

// AllMojomTypes returns a map that contains the UserDefinedType for
// all Mojom types in the complete type graph of the Mojom type of this object.
func (*EnumWithoutModule) AllMojomTypes() map[string]mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()
}


