// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     mojo/public/interfaces/bindings/tests/sample_import2.mojom
//

package sample_import2

import (
	sort "sort"
	ioutil "io/ioutil"
	base64 "encoding/base64"
	fmt "fmt"
	bytes "bytes"
	sample_import "mojo/public/interfaces/bindings/tests/sample_import"
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
  serializedRuntimeTypeInfo := "H4sIAAAJbogC/8yXT2/TMBTAnbVlRYMRYLAyEPS4C/XEqeLEKBWVNqGJVUi7MGWpWYyaOkqCEPsE+wh8PI478g3AmZ9F+hInbdWGWXp6Sp3Yfr/n96ctooYNeg80/l3rJtL4vUvQbSm11LxedwD6hZRtKcOTo/7pQf/kNfcDEcZs1OmJsQjJczn3OHf+mF+wou+HHp+cky7sr8+1mzqnlZyjNv18eSvfnivQb8j00PZ0Qf+Bgd/T466UhhRlnbJtUwoyO7O//u6zlE9SqCd8RgPXFyGPL2jo/HjpipDRKHSpL74KGnw7G3OX8knMwi+OyyJ6xicjiSSiMYviiEaOH4zZqdr4VSf5yFf7rqX2bVnT3NqkeMzKZ2D4fgP89bH/7vp5R8qDDJ+Ons5w2oTzr5pTGQ9rSTy0398e7vcOpH4mZSvLQ09neNyriEcb5YHf+hy15cTNHSl1KSrqCXkEbFA6yNif3J31/xA3tjVtdxedq0FmGyZuJMUtHZ+m+/Odj2Ivh89DyOGr5jMvh/oCHKwCDkleSFK7x/i5F2c5bFXEQdcZXDcJuj+meBqsL7cOqSqZU4dgAnPariieduEOaA6/IJ5+Qj65qpvjq5HOP3reWm18RZ4T5OWf5Pl+hfmXoP317xn/HqsDm/sn9YIN97JpuJeYS2Lr7ev63Rvuf3h/2C/t89Q+s/pxz1pNftB+dKEvw358UlF+MPmxZegfy/rnWf1nperBhl7/X1tRuk+Z//BoLuC/tQL/2bDmWLhOzMUE+2/nhvnvSMiVC7mqN+blai/AtVbAVfddEfRdmOvTiupBGVfcH5b9byyqw+m68zcAAP//J3hIdxgPAAA="

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

  for s, udt := range sample_import.GetAllMojomTypeDefinitions() {
    runtimeTypeInfo__.TypeMap[s] = udt
  }


}
func GetAllMojomTypeDefinitions() map[string]mojom_types.UserDefinedType {
  return getRuntimeTypeInfo().TypeMap
}

type Color int32

const (
	Color_Red Color = 0
	Color_Black = Color_Red + 1;
)
// ColorMojomType returns the UserDefinedType that describes the Mojom
// type of Color. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function GetAllMojomTypeDefinitions().
func ColorMojomType() mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()["TYPE_KEY:imported.Color"]
}



// MojomType returns the UserDefinedType that describes the Mojom
// type of this object. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function AllMojomTypes().
func (*Color) MojomType() mojom_types.UserDefinedType {
	return ColorMojomType()
}

// AllMojomTypes returns a map that contains the UserDefinedType for
// all Mojom types in the complete type graph of the Mojom type of this object.
func (*Color) AllMojomTypes() map[string]mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()
}


type Size struct {
	Width int32
	Height int32
}
// SizeMojomType returns the UserDefinedType that describes the Mojom
// type of Size. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function GetAllMojomTypeDefinitions().
func SizeMojomType() mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()["TYPE_KEY:imported.Size"]
}



// MojomType returns the UserDefinedType that describes the Mojom
// type of this object. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function AllMojomTypes().
func (*Size) MojomType() mojom_types.UserDefinedType {
	return SizeMojomType()
}

// AllMojomTypes returns a map that contains the UserDefinedType for
// all Mojom types in the complete type graph of the Mojom type of this object.
func (*Size) AllMojomTypes() map[string]mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()
}


func (s *Size) Encode(encoder *bindings.Encoder) error {
	encoder.StartStruct(8, 0)
	if err := encoder.WriteInt32(s.Width); err != nil {
		return err
	}
	if err := encoder.WriteInt32(s.Height); err != nil {
		return err
	}
	if err := encoder.Finish(); err != nil {
		return err
	}
	return nil
}

var size_Versions []bindings.DataHeader = []bindings.DataHeader{
	bindings.DataHeader{16, 0},
}

func (s *Size) Decode(decoder *bindings.Decoder) error {
	header, err := decoder.StartStruct()
	if err != nil {
		return err
	}
	index := sort.Search(len(size_Versions), func(i int) bool {
		return size_Versions[i].ElementsOrVersion >= header.ElementsOrVersion
	})
	if index < len(size_Versions) {
		if size_Versions[index].ElementsOrVersion > header.ElementsOrVersion {
			index--
		}
		expectedSize := size_Versions[index].Size
		if expectedSize != header.Size {
			return &bindings.ValidationError{bindings.UnexpectedStructHeader,
				fmt.Sprintf("invalid struct header size: should be %d, but was %d", expectedSize, header.Size),
			}
		}
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadInt32()
		if err != nil {
			return err
		}
		s.Width = value0
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadInt32()
		if err != nil {
			return err
		}
		s.Height = value0
	}
	if err := decoder.Finish(); err != nil {
		return err
	}
	return nil
}

type Thing struct {
	Shape sample_import.Shape
	Color Color
	Location sample_import.Point
	Size Size
}
// ThingMojomType returns the UserDefinedType that describes the Mojom
// type of Thing. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function GetAllMojomTypeDefinitions().
func ThingMojomType() mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()["TYPE_KEY:imported.Thing"]
}



// MojomType returns the UserDefinedType that describes the Mojom
// type of this object. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function AllMojomTypes().
func (*Thing) MojomType() mojom_types.UserDefinedType {
	return ThingMojomType()
}

// AllMojomTypes returns a map that contains the UserDefinedType for
// all Mojom types in the complete type graph of the Mojom type of this object.
func (*Thing) AllMojomTypes() map[string]mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()
}


func (s *Thing) Encode(encoder *bindings.Encoder) error {
	encoder.StartStruct(24, 0)
	if err := encoder.WriteInt32(int32(s.Shape)); err != nil {
		return err
	}
	if err := encoder.WriteInt32(int32(s.Color)); err != nil {
		return err
	}
	if err := encoder.WritePointer(); err != nil {
		return err
	}
	if err := s.Location.Encode(encoder); err != nil {
		return err
	}
	if err := encoder.WritePointer(); err != nil {
		return err
	}
	if err := s.Size.Encode(encoder); err != nil {
		return err
	}
	if err := encoder.Finish(); err != nil {
		return err
	}
	return nil
}

var thing_Versions []bindings.DataHeader = []bindings.DataHeader{
	bindings.DataHeader{32, 0},
}

func (s *Thing) Decode(decoder *bindings.Decoder) error {
	header, err := decoder.StartStruct()
	if err != nil {
		return err
	}
	index := sort.Search(len(thing_Versions), func(i int) bool {
		return thing_Versions[i].ElementsOrVersion >= header.ElementsOrVersion
	})
	if index < len(thing_Versions) {
		if thing_Versions[index].ElementsOrVersion > header.ElementsOrVersion {
			index--
		}
		expectedSize := thing_Versions[index].Size
		if expectedSize != header.Size {
			return &bindings.ValidationError{bindings.UnexpectedStructHeader,
				fmt.Sprintf("invalid struct header size: should be %d, but was %d", expectedSize, header.Size),
			}
		}
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadInt32()
		if err != nil {
			return err
		}
		s.Shape = sample_import.Shape(value0)
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadInt32()
		if err != nil {
			return err
		}
		s.Color = Color(value0)
	}
	if header.ElementsOrVersion >= 0 {
		pointer0, err := decoder.ReadPointer()
		if err != nil {
			return err
		}
		if pointer0 == 0 {
			return &bindings.ValidationError{bindings.UnexpectedNullPointer, "unexpected null pointer"}
		} else {
			if err := s.Location.Decode(decoder); err != nil {
				return err
			}
		}
	}
	if header.ElementsOrVersion >= 0 {
		pointer0, err := decoder.ReadPointer()
		if err != nil {
			return err
		}
		if pointer0 == 0 {
			return &bindings.ValidationError{bindings.UnexpectedNullPointer, "unexpected null pointer"}
		} else {
			if err := s.Size.Decode(decoder); err != nil {
				return err
			}
		}
	}
	if err := decoder.Finish(); err != nil {
		return err
	}
	return nil
}

