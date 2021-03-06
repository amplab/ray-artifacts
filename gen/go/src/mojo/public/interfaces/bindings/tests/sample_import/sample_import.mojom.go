// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     mojo/public/interfaces/bindings/tests/sample_import.mojom
//

package sample_import

import (
	sort "sort"
	service_describer "mojo/public/interfaces/bindings/service_describer"
	ioutil "io/ioutil"
	base64 "encoding/base64"
	fmt "fmt"
	bytes "bytes"
	mojom_types "mojo/public/interfaces/bindings/mojom_types"
	bindings "mojo/public/go/bindings"
	system "mojo/public/go/system"
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
  serializedRuntimeTypeInfo := "H4sIAAAJbogC/8yY3XLSQBTHE2iVWlrj2O9WTbUq6pRwyXgFg4wwdhwGcAYunJbSKHEaEpN0xvoEPoaP4uP00sve6QbOSnKyC4kDoTtzZsnuhuz57dmTf3ZLGBYJ6hzUuJ3WKVTjcYI4+p9FYhlorkBtQv0D6p9QPyP2kFizXSsfvyu3X2u6aViOepYt9g2np1qNXsdUBeEVGfOEOa4KP6p9R7U+dbrq4H8fEdtkjq8ZWt8Z0z984AvSt8/sb6uOf2qD0gK/JeS3e50k9mthdO2iyqX8/Mxl/3XmHpvzNdQFwV9yqP0PlJrALmvE0sSwKw+IrRPjLENgPvfB74/EPhBTeoauKmZXNyzN+a5YncvDrmGpim11Fd34Yijmxem51lU0ulq2cqr1z7T+Z1txVNuxFbujm+fq8XACWfcenfyvDBzp8wsQb7UE8IJ2GcctjLsTkVuLw81dliVi9XKpWXz/9qgM7c8h5pjcsqPRmJ+7DokY+NE4pBwwL1yWJ/DKh4yzVWK3iJWq9ZIL64D83uNyoqOCcbYeE6dJXNJT4iJBLm3Wq4PAoHmQzYWOCnLZmDMXSfRf87hUEJcTDpdt2GPsrC4Ij4nteDlxBmJOBxD7s+aEn7vliRsRrb/oeZ9ivlccPjy+gocvq13w5Gt3b78xGgSA0yMOMXk9jSmuZMTpCtVh/HVLnuPvLvjs8ffQUr9ekCmxdQyUWfud4sTBFppHCsUF7f9N709Gy0cFDqcVeI8P1dEwr6x69xl0YF7uO+92TPsq4dWlot/vPJrXohCuhN1PGc79S7B+3zi6WIY1nDWfqBwW/oODGILDJYfDfkwcxu2nBCMvSyHzTdR9RPVyYB9BB37+ckw6OgNrLyMdXQEdXUuO19P0JSZO6TuEp6dlWCM/t5GQxvzSMetoMaSOTkSMq0pIHR34TkMCGvNZuSH6OTklHlg/0+95xOOfcMY8VufEQ4LnXk+ZRxr29VGx0fTqHsSDdgd43J2T3pPRPuGtK++cZlbnI5vABJ/2BPISGoDnsz2n85EKJKjWhPMRqqPWInI7iZjPX8K3G49bFt2AOe7EnN/XQub39RmdkwTOkzAvGIg57d6QPL8RkUsrZJ6n57JcLqOjEmYc7cXE528AAAD//3ZqQXNgFwAA"

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

type Shape int32

const (
	Shape_Rectangle Shape = 1
	Shape_Circle = Shape_Rectangle + 1;
	Shape_Triangle = Shape_Circle + 1;
	Shape_Last = Shape_Triangle
)
// ShapeMojomType returns the UserDefinedType that describes the Mojom
// type of Shape. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function GetAllMojomTypeDefinitions().
func ShapeMojomType() mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()["TYPE_KEY:imported.Shape"]
}



// MojomType returns the UserDefinedType that describes the Mojom
// type of this object. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function AllMojomTypes().
func (*Shape) MojomType() mojom_types.UserDefinedType {
	return ShapeMojomType()
}

// AllMojomTypes returns a map that contains the UserDefinedType for
// all Mojom types in the complete type graph of the Mojom type of this object.
func (*Shape) AllMojomTypes() map[string]mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()
}


type AnotherShape int32

const (
	AnotherShape_Rectangle AnotherShape = 10
	AnotherShape_Circle = AnotherShape_Rectangle + 1;
	AnotherShape_Triangle = AnotherShape_Circle + 1;
)
// AnotherShapeMojomType returns the UserDefinedType that describes the Mojom
// type of AnotherShape. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function GetAllMojomTypeDefinitions().
func AnotherShapeMojomType() mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()["TYPE_KEY:imported.AnotherShape"]
}



// MojomType returns the UserDefinedType that describes the Mojom
// type of this object. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function AllMojomTypes().
func (*AnotherShape) MojomType() mojom_types.UserDefinedType {
	return AnotherShapeMojomType()
}

// AllMojomTypes returns a map that contains the UserDefinedType for
// all Mojom types in the complete type graph of the Mojom type of this object.
func (*AnotherShape) AllMojomTypes() map[string]mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()
}


type YetAnotherShape int32

const (
	YetAnotherShape_Rectangle YetAnotherShape = 20
	YetAnotherShape_Circle = YetAnotherShape_Rectangle + 1;
	YetAnotherShape_Triangle = YetAnotherShape_Circle + 1;
)
// YetAnotherShapeMojomType returns the UserDefinedType that describes the Mojom
// type of YetAnotherShape. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function GetAllMojomTypeDefinitions().
func YetAnotherShapeMojomType() mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()["TYPE_KEY:imported.YetAnotherShape"]
}



// MojomType returns the UserDefinedType that describes the Mojom
// type of this object. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function AllMojomTypes().
func (*YetAnotherShape) MojomType() mojom_types.UserDefinedType {
	return YetAnotherShapeMojomType()
}

// AllMojomTypes returns a map that contains the UserDefinedType for
// all Mojom types in the complete type graph of the Mojom type of this object.
func (*YetAnotherShape) AllMojomTypes() map[string]mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()
}


type ImportedInterface interface {
	DoSomething() (err error)
}


// ImportedInterfaceMojomType returns the UserDefinedType that describes the Mojom
// type of ImportedInterface. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function GetAllMojomTypeDefinitions().
func ImportedInterfaceMojomType() mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()["TYPE_KEY:imported.ImportedInterface"]
}




type ImportedInterface_Request bindings.InterfaceRequest


// MojomType returns the UserDefinedType that describes the Mojom
// type of this object. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function AllMojomTypes().
func (*ImportedInterface_Request) MojomType() mojom_types.UserDefinedType {
	return ImportedInterfaceMojomType()
}

// AllMojomTypes returns a map that contains the UserDefinedType for
// all Mojom types in the complete type graph of the Mojom type of this object.
func (*ImportedInterface_Request) AllMojomTypes() map[string]mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()
}


type ImportedInterface_Pointer bindings.InterfacePointer


type ImportedInterface_ServiceFactory struct{
	Delegate ImportedInterface_Factory
}

type ImportedInterface_Factory interface {
	Create(request ImportedInterface_Request)
}


// TODO(rudominer) This should only be defined for top-level interfaces.
func (f *ImportedInterface_ServiceFactory) ServiceDescription() service_describer.ServiceDescription {
	return &ImportedInterface_ServiceDescription{}
}

func (f *ImportedInterface_ServiceFactory) Create(messagePipe system.MessagePipeHandle) {
	request := ImportedInterface_Request{bindings.NewMessagePipeHandleOwner(messagePipe)}
	f.Delegate.Create(request)
}

// CreateMessagePipeForImportedInterface creates a message pipe for use with the
// ImportedInterface interface with a ImportedInterface_Request on one end and a ImportedInterface_Pointer on the other.
func CreateMessagePipeForImportedInterface() (ImportedInterface_Request, ImportedInterface_Pointer) {
        r, p := bindings.CreateMessagePipeForMojoInterface()
        return ImportedInterface_Request(r), ImportedInterface_Pointer(p)
}

const importedInterface_DoSomething_Name uint32 = 0

type ImportedInterface_Proxy struct {
	router *bindings.Router
	ids bindings.Counter
}

func NewImportedInterfaceProxy(p ImportedInterface_Pointer, waiter bindings.AsyncWaiter) *ImportedInterface_Proxy {
	return &ImportedInterface_Proxy{
		bindings.NewRouter(p.PassMessagePipe(), waiter),
		bindings.NewCounter(),
	}
}

func (p *ImportedInterface_Proxy) Close_Proxy() {
	p.router.Close()
}

type importedInterface_DoSomething_Params struct {
}


func (s *importedInterface_DoSomething_Params) Encode(encoder *bindings.Encoder) error {
	encoder.StartStruct(0, 0)
	if err := encoder.Finish(); err != nil {
		return err
	}
	return nil
}

var importedInterface_DoSomething_Params_Versions []bindings.DataHeader = []bindings.DataHeader{
	bindings.DataHeader{8, 0},
}

func (s *importedInterface_DoSomething_Params) Decode(decoder *bindings.Decoder) error {
	header, err := decoder.StartStruct()
	if err != nil {
		return err
	}
	index := sort.Search(len(importedInterface_DoSomething_Params_Versions), func(i int) bool {
		return importedInterface_DoSomething_Params_Versions[i].ElementsOrVersion >= header.ElementsOrVersion
	})
	if index < len(importedInterface_DoSomething_Params_Versions) {
		if importedInterface_DoSomething_Params_Versions[index].ElementsOrVersion > header.ElementsOrVersion {
			index--
		}
		expectedSize := importedInterface_DoSomething_Params_Versions[index].Size
		if expectedSize != header.Size {
			return &bindings.ValidationError{bindings.UnexpectedStructHeader,
				fmt.Sprintf("invalid struct header size: should be %d, but was %d", expectedSize, header.Size),
			}
		}
	}
	if err := decoder.Finish(); err != nil {
		return err
	}
	return nil
}

func (p *ImportedInterface_Proxy) DoSomething() (err error) {
	payload := &importedInterface_DoSomething_Params{
	}
	header := bindings.MessageHeader{
		Type: importedInterface_DoSomething_Name,
		Flags: bindings.MessageNoFlag,
	}
	var message *bindings.Message
	if message, err = bindings.EncodeMessage(header, payload); err != nil {
		err = fmt.Errorf("can't encode request: %v", err.Error())
		p.Close_Proxy()
		return
	}
	if err = p.router.Accept(message); err != nil {
		p.Close_Proxy()
		return
	}
	return
}

type importedInterface_Stub struct {
	connector *bindings.Connector
	impl ImportedInterface
}

func NewImportedInterfaceStub(r ImportedInterface_Request, impl ImportedInterface, waiter bindings.AsyncWaiter) *bindings.Stub {
	connector := bindings.NewConnector(r.PassMessagePipe(), waiter)
	return bindings.NewStub(connector, &importedInterface_Stub{connector, impl})
}


func (f *ImportedInterface_Request) ServiceDescription() service_describer.ServiceDescription {
	return &ImportedInterface_ServiceDescription{}
}


type ImportedInterface_ServiceDescription struct{}

func (sd *ImportedInterface_ServiceDescription) GetTopLevelInterface() (outMojomInterface mojom_types.MojomInterface, err error) {
	err = fmt.Errorf("GetTopLevelInterface not implemented")
	return
}

func (sd *ImportedInterface_ServiceDescription) GetTypeDefinition(inTypeKey string) (outType mojom_types.UserDefinedType, err error) {
	err = fmt.Errorf("GetTypeDefinition not implemented")
	return
}

func (sd *ImportedInterface_ServiceDescription) GetAllTypeDefinitions() (outDefinitions *map[string]mojom_types.UserDefinedType, err error) {
	err = fmt.Errorf("GetAllTypeDefinitions not implemented")
	return
}
var _ service_describer.ServiceDescription = (*ImportedInterface_ServiceDescription)(nil)


func (s *importedInterface_Stub) Accept(message *bindings.Message) (err error) {
	switch message.Header.Type {
	case importedInterface_DoSomething_Name:
		if message.Header.Flags != bindings.MessageNoFlag {
			return &bindings.ValidationError{bindings.MessageHeaderInvalidFlags,
				fmt.Sprintf("invalid message header flag: %v", message.Header.Flags),
			}
		}
		var request importedInterface_DoSomething_Params
		if err := message.DecodePayload(&request); err != nil {
			return err
		}
		err = s.impl.DoSomething()
		if err != nil {
			return
		}
	default:
		return &bindings.ValidationError{
			bindings.MessageHeaderUnknownMethod,
			fmt.Sprintf("unknown method %v", message.Header.Type),
		}
	}
	return
}

type Point struct {
	X int32
	Y int32
}
// PointMojomType returns the UserDefinedType that describes the Mojom
// type of Point. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function GetAllMojomTypeDefinitions().
func PointMojomType() mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()["TYPE_KEY:imported.Point"]
}



// MojomType returns the UserDefinedType that describes the Mojom
// type of this object. To obtain the UserDefinedType for Mojom types recursively
// contained in the returned UserDefinedType, look in the map returned
// by the function AllMojomTypes().
func (*Point) MojomType() mojom_types.UserDefinedType {
	return PointMojomType()
}

// AllMojomTypes returns a map that contains the UserDefinedType for
// all Mojom types in the complete type graph of the Mojom type of this object.
func (*Point) AllMojomTypes() map[string]mojom_types.UserDefinedType {
	return GetAllMojomTypeDefinitions()
}


func (s *Point) Encode(encoder *bindings.Encoder) error {
	encoder.StartStruct(8, 0)
	if err := encoder.WriteInt32(s.X); err != nil {
		return err
	}
	if err := encoder.WriteInt32(s.Y); err != nil {
		return err
	}
	if err := encoder.Finish(); err != nil {
		return err
	}
	return nil
}

var point_Versions []bindings.DataHeader = []bindings.DataHeader{
	bindings.DataHeader{16, 0},
}

func (s *Point) Decode(decoder *bindings.Decoder) error {
	header, err := decoder.StartStruct()
	if err != nil {
		return err
	}
	index := sort.Search(len(point_Versions), func(i int) bool {
		return point_Versions[i].ElementsOrVersion >= header.ElementsOrVersion
	})
	if index < len(point_Versions) {
		if point_Versions[index].ElementsOrVersion > header.ElementsOrVersion {
			index--
		}
		expectedSize := point_Versions[index].Size
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
		s.X = value0
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadInt32()
		if err != nil {
			return err
		}
		s.Y = value0
	}
	if err := decoder.Finish(); err != nil {
		return err
	}
	return nil
}

