// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     mojo/services/nfc/interfaces/nfc.mojom
//

package nfc

import (
	sort "sort"
	service_describer "mojo/public/interfaces/bindings/service_describer"
	fmt "fmt"
	mojom_types "mojo/public/interfaces/bindings/mojom_types"
	bindings "mojo/public/go/bindings"
	system "mojo/public/go/system"
)


type NfcTransmission interface {
	Cancel() (err error)
}




type NfcTransmission_Request bindings.InterfaceRequest



type NfcTransmission_Pointer bindings.InterfacePointer


type NfcTransmission_ServiceFactory struct{
	Delegate NfcTransmission_Factory
}

type NfcTransmission_Factory interface {
	Create(request NfcTransmission_Request)
}


// TODO(rudominer) This should only be defined for top-level interfaces.
func (f *NfcTransmission_ServiceFactory) ServiceDescription() service_describer.ServiceDescription {
	return &NfcTransmission_ServiceDescription{}
}

func (f *NfcTransmission_ServiceFactory) Create(messagePipe system.MessagePipeHandle) {
	request := NfcTransmission_Request{bindings.NewMessagePipeHandleOwner(messagePipe)}
	f.Delegate.Create(request)
}

// CreateMessagePipeForNfcTransmission creates a message pipe for use with the
// NfcTransmission interface with a NfcTransmission_Request on one end and a NfcTransmission_Pointer on the other.
func CreateMessagePipeForNfcTransmission() (NfcTransmission_Request, NfcTransmission_Pointer) {
        r, p := bindings.CreateMessagePipeForMojoInterface()
        return NfcTransmission_Request(r), NfcTransmission_Pointer(p)
}

const nfcTransmission_Cancel_Name uint32 = 0

type NfcTransmission_Proxy struct {
	router *bindings.Router
	ids bindings.Counter
}

func NewNfcTransmissionProxy(p NfcTransmission_Pointer, waiter bindings.AsyncWaiter) *NfcTransmission_Proxy {
	return &NfcTransmission_Proxy{
		bindings.NewRouter(p.PassMessagePipe(), waiter),
		bindings.NewCounter(),
	}
}

func (p *NfcTransmission_Proxy) Close_Proxy() {
	p.router.Close()
}

type nfcTransmission_Cancel_Params struct {
}


func (s *nfcTransmission_Cancel_Params) Encode(encoder *bindings.Encoder) error {
	encoder.StartStruct(0, 0)
	if err := encoder.Finish(); err != nil {
		return err
	}
	return nil
}

var nfcTransmission_Cancel_Params_Versions []bindings.DataHeader = []bindings.DataHeader{
	bindings.DataHeader{8, 0},
}

func (s *nfcTransmission_Cancel_Params) Decode(decoder *bindings.Decoder) error {
	header, err := decoder.StartStruct()
	if err != nil {
		return err
	}
	index := sort.Search(len(nfcTransmission_Cancel_Params_Versions), func(i int) bool {
		return nfcTransmission_Cancel_Params_Versions[i].ElementsOrVersion >= header.ElementsOrVersion
	})
	if index < len(nfcTransmission_Cancel_Params_Versions) {
		if nfcTransmission_Cancel_Params_Versions[index].ElementsOrVersion > header.ElementsOrVersion {
			index--
		}
		expectedSize := nfcTransmission_Cancel_Params_Versions[index].Size
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

func (p *NfcTransmission_Proxy) Cancel() (err error) {
	payload := &nfcTransmission_Cancel_Params{
	}
	header := bindings.MessageHeader{
		Type: nfcTransmission_Cancel_Name,
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

type nfcTransmission_Stub struct {
	connector *bindings.Connector
	impl NfcTransmission
}

func NewNfcTransmissionStub(r NfcTransmission_Request, impl NfcTransmission, waiter bindings.AsyncWaiter) *bindings.Stub {
	connector := bindings.NewConnector(r.PassMessagePipe(), waiter)
	return bindings.NewStub(connector, &nfcTransmission_Stub{connector, impl})
}


func (f *NfcTransmission_Request) ServiceDescription() service_describer.ServiceDescription {
	return &NfcTransmission_ServiceDescription{}
}


type NfcTransmission_ServiceDescription struct{}

func (sd *NfcTransmission_ServiceDescription) GetTopLevelInterface() (outMojomInterface mojom_types.MojomInterface, err error) {
	err = fmt.Errorf("GetTopLevelInterface not implemented")
	return
}

func (sd *NfcTransmission_ServiceDescription) GetTypeDefinition(inTypeKey string) (outType mojom_types.UserDefinedType, err error) {
	err = fmt.Errorf("GetTypeDefinition not implemented")
	return
}

func (sd *NfcTransmission_ServiceDescription) GetAllTypeDefinitions() (outDefinitions *map[string]mojom_types.UserDefinedType, err error) {
	err = fmt.Errorf("GetAllTypeDefinitions not implemented")
	return
}
var _ service_describer.ServiceDescription = (*NfcTransmission_ServiceDescription)(nil)


func (s *nfcTransmission_Stub) Accept(message *bindings.Message) (err error) {
	switch message.Header.Type {
	case nfcTransmission_Cancel_Name:
		if message.Header.Flags != bindings.MessageNoFlag {
			return &bindings.ValidationError{bindings.MessageHeaderInvalidFlags,
				fmt.Sprintf("invalid message header flag: %v", message.Header.Flags),
			}
		}
		var request nfcTransmission_Cancel_Params
		if err := message.DecodePayload(&request); err != nil {
			return err
		}
		err = s.impl.Cancel()
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

type NfcReceiver interface {
	OnReceivedNfcData(inNfcData NfcData) (err error)
}



var nfcReceiver_Name = "nfc::NfcReceiver"

type NfcReceiver_Request bindings.InterfaceRequest

func (r *NfcReceiver_Request) Name() string {
	return nfcReceiver_Name
}


type NfcReceiver_Pointer bindings.InterfacePointer

func (p *NfcReceiver_Pointer) Name() string {
	return nfcReceiver_Name
}

type NfcReceiver_ServiceFactory struct{
	Delegate NfcReceiver_Factory
}

type NfcReceiver_Factory interface {
	Create(request NfcReceiver_Request)
}

func (f *NfcReceiver_ServiceFactory) Name() string {
	return nfcReceiver_Name
}

// TODO(rudominer) This should only be defined for top-level interfaces.
func (f *NfcReceiver_ServiceFactory) ServiceDescription() service_describer.ServiceDescription {
	return &NfcReceiver_ServiceDescription{}
}

func (f *NfcReceiver_ServiceFactory) Create(messagePipe system.MessagePipeHandle) {
	request := NfcReceiver_Request{bindings.NewMessagePipeHandleOwner(messagePipe)}
	f.Delegate.Create(request)
}

// CreateMessagePipeForNfcReceiver creates a message pipe for use with the
// NfcReceiver interface with a NfcReceiver_Request on one end and a NfcReceiver_Pointer on the other.
func CreateMessagePipeForNfcReceiver() (NfcReceiver_Request, NfcReceiver_Pointer) {
        r, p := bindings.CreateMessagePipeForMojoInterface()
        return NfcReceiver_Request(r), NfcReceiver_Pointer(p)
}

const nfcReceiver_OnReceivedNfcData_Name uint32 = 0

type NfcReceiver_Proxy struct {
	router *bindings.Router
	ids bindings.Counter
}

func NewNfcReceiverProxy(p NfcReceiver_Pointer, waiter bindings.AsyncWaiter) *NfcReceiver_Proxy {
	return &NfcReceiver_Proxy{
		bindings.NewRouter(p.PassMessagePipe(), waiter),
		bindings.NewCounter(),
	}
}

func (p *NfcReceiver_Proxy) Close_Proxy() {
	p.router.Close()
}

type nfcReceiver_OnReceivedNfcData_Params struct {
	inNfcData NfcData
}


func (s *nfcReceiver_OnReceivedNfcData_Params) Encode(encoder *bindings.Encoder) error {
	encoder.StartStruct(8, 0)
	if err := encoder.WritePointer(); err != nil {
		return err
	}
	if err := s.inNfcData.Encode(encoder); err != nil {
		return err
	}
	if err := encoder.Finish(); err != nil {
		return err
	}
	return nil
}

var nfcReceiver_OnReceivedNfcData_Params_Versions []bindings.DataHeader = []bindings.DataHeader{
	bindings.DataHeader{16, 0},
}

func (s *nfcReceiver_OnReceivedNfcData_Params) Decode(decoder *bindings.Decoder) error {
	header, err := decoder.StartStruct()
	if err != nil {
		return err
	}
	index := sort.Search(len(nfcReceiver_OnReceivedNfcData_Params_Versions), func(i int) bool {
		return nfcReceiver_OnReceivedNfcData_Params_Versions[i].ElementsOrVersion >= header.ElementsOrVersion
	})
	if index < len(nfcReceiver_OnReceivedNfcData_Params_Versions) {
		if nfcReceiver_OnReceivedNfcData_Params_Versions[index].ElementsOrVersion > header.ElementsOrVersion {
			index--
		}
		expectedSize := nfcReceiver_OnReceivedNfcData_Params_Versions[index].Size
		if expectedSize != header.Size {
			return &bindings.ValidationError{bindings.UnexpectedStructHeader,
				fmt.Sprintf("invalid struct header size: should be %d, but was %d", expectedSize, header.Size),
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
			if err := s.inNfcData.Decode(decoder); err != nil {
				return err
			}
		}
	}
	if err := decoder.Finish(); err != nil {
		return err
	}
	return nil
}

func (p *NfcReceiver_Proxy) OnReceivedNfcData(inNfcData NfcData) (err error) {
	payload := &nfcReceiver_OnReceivedNfcData_Params{
		inNfcData,
	}
	header := bindings.MessageHeader{
		Type: nfcReceiver_OnReceivedNfcData_Name,
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

type nfcReceiver_Stub struct {
	connector *bindings.Connector
	impl NfcReceiver
}

func NewNfcReceiverStub(r NfcReceiver_Request, impl NfcReceiver, waiter bindings.AsyncWaiter) *bindings.Stub {
	connector := bindings.NewConnector(r.PassMessagePipe(), waiter)
	return bindings.NewStub(connector, &nfcReceiver_Stub{connector, impl})
}


func (f *NfcReceiver_Request) ServiceDescription() service_describer.ServiceDescription {
	return &NfcReceiver_ServiceDescription{}
}


type NfcReceiver_ServiceDescription struct{}

func (sd *NfcReceiver_ServiceDescription) GetTopLevelInterface() (outMojomInterface mojom_types.MojomInterface, err error) {
	err = fmt.Errorf("GetTopLevelInterface not implemented")
	return
}

func (sd *NfcReceiver_ServiceDescription) GetTypeDefinition(inTypeKey string) (outType mojom_types.UserDefinedType, err error) {
	err = fmt.Errorf("GetTypeDefinition not implemented")
	return
}

func (sd *NfcReceiver_ServiceDescription) GetAllTypeDefinitions() (outDefinitions *map[string]mojom_types.UserDefinedType, err error) {
	err = fmt.Errorf("GetAllTypeDefinitions not implemented")
	return
}
var _ service_describer.ServiceDescription = (*NfcReceiver_ServiceDescription)(nil)


func (s *nfcReceiver_Stub) Accept(message *bindings.Message) (err error) {
	switch message.Header.Type {
	case nfcReceiver_OnReceivedNfcData_Name:
		if message.Header.Flags != bindings.MessageNoFlag {
			return &bindings.ValidationError{bindings.MessageHeaderInvalidFlags,
				fmt.Sprintf("invalid message header flag: %v", message.Header.Flags),
			}
		}
		var request nfcReceiver_OnReceivedNfcData_Params
		if err := message.DecodePayload(&request); err != nil {
			return err
		}
		err = s.impl.OnReceivedNfcData(request.inNfcData)
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

type Nfc interface {
	TransmitOnNextConnection(inNfcData NfcData, inTransmission *NfcTransmission_Request) (outSuccess bool, err error)
	Register() (err error)
	Unregister() (err error)
}



var nfc_Name = "nfc::Nfc"

type Nfc_Request bindings.InterfaceRequest

func (r *Nfc_Request) Name() string {
	return nfc_Name
}


type Nfc_Pointer bindings.InterfacePointer

func (p *Nfc_Pointer) Name() string {
	return nfc_Name
}

type Nfc_ServiceFactory struct{
	Delegate Nfc_Factory
}

type Nfc_Factory interface {
	Create(request Nfc_Request)
}

func (f *Nfc_ServiceFactory) Name() string {
	return nfc_Name
}

// TODO(rudominer) This should only be defined for top-level interfaces.
func (f *Nfc_ServiceFactory) ServiceDescription() service_describer.ServiceDescription {
	return &Nfc_ServiceDescription{}
}

func (f *Nfc_ServiceFactory) Create(messagePipe system.MessagePipeHandle) {
	request := Nfc_Request{bindings.NewMessagePipeHandleOwner(messagePipe)}
	f.Delegate.Create(request)
}

// CreateMessagePipeForNfc creates a message pipe for use with the
// Nfc interface with a Nfc_Request on one end and a Nfc_Pointer on the other.
func CreateMessagePipeForNfc() (Nfc_Request, Nfc_Pointer) {
        r, p := bindings.CreateMessagePipeForMojoInterface()
        return Nfc_Request(r), Nfc_Pointer(p)
}

const nfc_TransmitOnNextConnection_Name uint32 = 0
const nfc_Register_Name uint32 = 1
const nfc_Unregister_Name uint32 = 2

type Nfc_Proxy struct {
	router *bindings.Router
	ids bindings.Counter
}

func NewNfcProxy(p Nfc_Pointer, waiter bindings.AsyncWaiter) *Nfc_Proxy {
	return &Nfc_Proxy{
		bindings.NewRouter(p.PassMessagePipe(), waiter),
		bindings.NewCounter(),
	}
}

func (p *Nfc_Proxy) Close_Proxy() {
	p.router.Close()
}

type nfc_TransmitOnNextConnection_Params struct {
	inNfcData NfcData
	inTransmission *NfcTransmission_Request
}


func (s *nfc_TransmitOnNextConnection_Params) Encode(encoder *bindings.Encoder) error {
	encoder.StartStruct(16, 0)
	if err := encoder.WritePointer(); err != nil {
		return err
	}
	if err := s.inNfcData.Encode(encoder); err != nil {
		return err
	}
	if s.inTransmission == nil {
		encoder.WriteInvalidHandle()
	} else {
		if err := encoder.WriteHandle((*s.inTransmission).PassMessagePipe()); err != nil {
			return err
		}
	}
	if err := encoder.Finish(); err != nil {
		return err
	}
	return nil
}

var nfc_TransmitOnNextConnection_Params_Versions []bindings.DataHeader = []bindings.DataHeader{
	bindings.DataHeader{24, 0},
}

func (s *nfc_TransmitOnNextConnection_Params) Decode(decoder *bindings.Decoder) error {
	header, err := decoder.StartStruct()
	if err != nil {
		return err
	}
	index := sort.Search(len(nfc_TransmitOnNextConnection_Params_Versions), func(i int) bool {
		return nfc_TransmitOnNextConnection_Params_Versions[i].ElementsOrVersion >= header.ElementsOrVersion
	})
	if index < len(nfc_TransmitOnNextConnection_Params_Versions) {
		if nfc_TransmitOnNextConnection_Params_Versions[index].ElementsOrVersion > header.ElementsOrVersion {
			index--
		}
		expectedSize := nfc_TransmitOnNextConnection_Params_Versions[index].Size
		if expectedSize != header.Size {
			return &bindings.ValidationError{bindings.UnexpectedStructHeader,
				fmt.Sprintf("invalid struct header size: should be %d, but was %d", expectedSize, header.Size),
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
			if err := s.inNfcData.Decode(decoder); err != nil {
				return err
			}
		}
	}
	if header.ElementsOrVersion >= 0 {
		handle0, err := decoder.ReadMessagePipeHandle()
		if err != nil {
			return err
		}
		if handle0.IsValid() {
			handleOwner := bindings.NewMessagePipeHandleOwner(handle0)
			s.inTransmission = &NfcTransmission_Request{handleOwner}
		} else {
			s.inTransmission = nil
		}
	}
	if err := decoder.Finish(); err != nil {
		return err
	}
	return nil
}

type nfc_TransmitOnNextConnection_ResponseParams struct {
	outSuccess bool
}


func (s *nfc_TransmitOnNextConnection_ResponseParams) Encode(encoder *bindings.Encoder) error {
	encoder.StartStruct(8, 0)
	if err := encoder.WriteBool(s.outSuccess); err != nil {
		return err
	}
	if err := encoder.Finish(); err != nil {
		return err
	}
	return nil
}

var nfc_TransmitOnNextConnection_ResponseParams_Versions []bindings.DataHeader = []bindings.DataHeader{
	bindings.DataHeader{16, 0},
}

func (s *nfc_TransmitOnNextConnection_ResponseParams) Decode(decoder *bindings.Decoder) error {
	header, err := decoder.StartStruct()
	if err != nil {
		return err
	}
	index := sort.Search(len(nfc_TransmitOnNextConnection_ResponseParams_Versions), func(i int) bool {
		return nfc_TransmitOnNextConnection_ResponseParams_Versions[i].ElementsOrVersion >= header.ElementsOrVersion
	})
	if index < len(nfc_TransmitOnNextConnection_ResponseParams_Versions) {
		if nfc_TransmitOnNextConnection_ResponseParams_Versions[index].ElementsOrVersion > header.ElementsOrVersion {
			index--
		}
		expectedSize := nfc_TransmitOnNextConnection_ResponseParams_Versions[index].Size
		if expectedSize != header.Size {
			return &bindings.ValidationError{bindings.UnexpectedStructHeader,
				fmt.Sprintf("invalid struct header size: should be %d, but was %d", expectedSize, header.Size),
			}
		}
	}
	if header.ElementsOrVersion >= 0 {
		value0, err := decoder.ReadBool()
		if err != nil {
			return err
		}
		s.outSuccess = value0
	}
	if err := decoder.Finish(); err != nil {
		return err
	}
	return nil
}

func (p *Nfc_Proxy) TransmitOnNextConnection(inNfcData NfcData, inTransmission *NfcTransmission_Request) (outSuccess bool, err error) {
	payload := &nfc_TransmitOnNextConnection_Params{
		inNfcData,
		inTransmission,
	}
	header := bindings.MessageHeader{
		Type: nfc_TransmitOnNextConnection_Name,
		Flags: bindings.MessageExpectsResponseFlag,
		RequestId: p.ids.Count(),
	}
	var message *bindings.Message
	if message, err = bindings.EncodeMessage(header, payload); err != nil {
		err = fmt.Errorf("can't encode request: %v", err.Error())
		p.Close_Proxy()
		return
	}
	readResult := <-p.router.AcceptWithResponse(message)
	if err = readResult.Error; err != nil {
		p.Close_Proxy()
		return
	}
	if readResult.Message.Header.Flags != bindings.MessageIsResponseFlag {
		err = &bindings.ValidationError{bindings.MessageHeaderInvalidFlags,
			fmt.Sprintf("invalid message header flag: %v", readResult.Message.Header.Flags),
		}
		return
	}
	if got, want := readResult.Message.Header.Type, nfc_TransmitOnNextConnection_Name; got != want {
		err = &bindings.ValidationError{bindings.MessageHeaderUnknownMethod,
			fmt.Sprintf("invalid method in response: expected %v, got %v", want, got),
		}
		return
	}
	var response nfc_TransmitOnNextConnection_ResponseParams
	if err = readResult.Message.DecodePayload(&response); err != nil {
		p.Close_Proxy()
		return
	}
	outSuccess = response.outSuccess
	return
}

type nfc_Register_Params struct {
}


func (s *nfc_Register_Params) Encode(encoder *bindings.Encoder) error {
	encoder.StartStruct(0, 0)
	if err := encoder.Finish(); err != nil {
		return err
	}
	return nil
}

var nfc_Register_Params_Versions []bindings.DataHeader = []bindings.DataHeader{
	bindings.DataHeader{8, 0},
}

func (s *nfc_Register_Params) Decode(decoder *bindings.Decoder) error {
	header, err := decoder.StartStruct()
	if err != nil {
		return err
	}
	index := sort.Search(len(nfc_Register_Params_Versions), func(i int) bool {
		return nfc_Register_Params_Versions[i].ElementsOrVersion >= header.ElementsOrVersion
	})
	if index < len(nfc_Register_Params_Versions) {
		if nfc_Register_Params_Versions[index].ElementsOrVersion > header.ElementsOrVersion {
			index--
		}
		expectedSize := nfc_Register_Params_Versions[index].Size
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

func (p *Nfc_Proxy) Register() (err error) {
	payload := &nfc_Register_Params{
	}
	header := bindings.MessageHeader{
		Type: nfc_Register_Name,
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

type nfc_Unregister_Params struct {
}


func (s *nfc_Unregister_Params) Encode(encoder *bindings.Encoder) error {
	encoder.StartStruct(0, 0)
	if err := encoder.Finish(); err != nil {
		return err
	}
	return nil
}

var nfc_Unregister_Params_Versions []bindings.DataHeader = []bindings.DataHeader{
	bindings.DataHeader{8, 0},
}

func (s *nfc_Unregister_Params) Decode(decoder *bindings.Decoder) error {
	header, err := decoder.StartStruct()
	if err != nil {
		return err
	}
	index := sort.Search(len(nfc_Unregister_Params_Versions), func(i int) bool {
		return nfc_Unregister_Params_Versions[i].ElementsOrVersion >= header.ElementsOrVersion
	})
	if index < len(nfc_Unregister_Params_Versions) {
		if nfc_Unregister_Params_Versions[index].ElementsOrVersion > header.ElementsOrVersion {
			index--
		}
		expectedSize := nfc_Unregister_Params_Versions[index].Size
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

func (p *Nfc_Proxy) Unregister() (err error) {
	payload := &nfc_Unregister_Params{
	}
	header := bindings.MessageHeader{
		Type: nfc_Unregister_Name,
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

type nfc_Stub struct {
	connector *bindings.Connector
	impl Nfc
}

func NewNfcStub(r Nfc_Request, impl Nfc, waiter bindings.AsyncWaiter) *bindings.Stub {
	connector := bindings.NewConnector(r.PassMessagePipe(), waiter)
	return bindings.NewStub(connector, &nfc_Stub{connector, impl})
}


func (f *Nfc_Request) ServiceDescription() service_describer.ServiceDescription {
	return &Nfc_ServiceDescription{}
}


type Nfc_ServiceDescription struct{}

func (sd *Nfc_ServiceDescription) GetTopLevelInterface() (outMojomInterface mojom_types.MojomInterface, err error) {
	err = fmt.Errorf("GetTopLevelInterface not implemented")
	return
}

func (sd *Nfc_ServiceDescription) GetTypeDefinition(inTypeKey string) (outType mojom_types.UserDefinedType, err error) {
	err = fmt.Errorf("GetTypeDefinition not implemented")
	return
}

func (sd *Nfc_ServiceDescription) GetAllTypeDefinitions() (outDefinitions *map[string]mojom_types.UserDefinedType, err error) {
	err = fmt.Errorf("GetAllTypeDefinitions not implemented")
	return
}
var _ service_describer.ServiceDescription = (*Nfc_ServiceDescription)(nil)


func (s *nfc_Stub) Accept(message *bindings.Message) (err error) {
	switch message.Header.Type {
	case nfc_TransmitOnNextConnection_Name:
		if message.Header.Flags != bindings.MessageExpectsResponseFlag {
			return &bindings.ValidationError{bindings.MessageHeaderInvalidFlags,
				fmt.Sprintf("invalid message header flag: %v", message.Header.Flags),
			}
		}
		var request nfc_TransmitOnNextConnection_Params
		if err := message.DecodePayload(&request); err != nil {
			return err
		}
		var response nfc_TransmitOnNextConnection_ResponseParams
		response.outSuccess, err = s.impl.TransmitOnNextConnection(request.inNfcData, request.inTransmission)
		if err != nil {
			return
		}
		header := bindings.MessageHeader{
			Type: nfc_TransmitOnNextConnection_Name,
			Flags: bindings.MessageIsResponseFlag,
			RequestId: message.Header.RequestId,
		}
		message, err = bindings.EncodeMessage(header, &response)
		if err != nil {
			return err
		}
		return s.connector.WriteMessage(message)
	case nfc_Register_Name:
		if message.Header.Flags != bindings.MessageNoFlag {
			return &bindings.ValidationError{bindings.MessageHeaderInvalidFlags,
				fmt.Sprintf("invalid message header flag: %v", message.Header.Flags),
			}
		}
		var request nfc_Register_Params
		if err := message.DecodePayload(&request); err != nil {
			return err
		}
		err = s.impl.Register()
		if err != nil {
			return
		}
	case nfc_Unregister_Name:
		if message.Header.Flags != bindings.MessageNoFlag {
			return &bindings.ValidationError{bindings.MessageHeaderInvalidFlags,
				fmt.Sprintf("invalid message header flag: %v", message.Header.Flags),
			}
		}
		var request nfc_Unregister_Params
		if err := message.DecodePayload(&request); err != nil {
			return err
		}
		err = s.impl.Unregister()
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

type NfcData struct {
	Data *[]uint8
}


func (s *NfcData) Encode(encoder *bindings.Encoder) error {
	encoder.StartStruct(8, 0)
	if s.Data == nil {
		encoder.WriteNullPointer()
	} else {
		if err := encoder.WritePointer(); err != nil {
			return err
		}
		encoder.StartArray(uint32(len((*s.Data))), 8)
		for _, elem0 := range (*s.Data) {
			if err := encoder.WriteUint8(elem0); err != nil {
				return err
			}
		}
		if err := encoder.Finish(); err != nil {
			return err
		}
	}
	if err := encoder.Finish(); err != nil {
		return err
	}
	return nil
}

var nfcData_Versions []bindings.DataHeader = []bindings.DataHeader{
	bindings.DataHeader{16, 0},
}

func (s *NfcData) Decode(decoder *bindings.Decoder) error {
	header, err := decoder.StartStruct()
	if err != nil {
		return err
	}
	index := sort.Search(len(nfcData_Versions), func(i int) bool {
		return nfcData_Versions[i].ElementsOrVersion >= header.ElementsOrVersion
	})
	if index < len(nfcData_Versions) {
		if nfcData_Versions[index].ElementsOrVersion > header.ElementsOrVersion {
			index--
		}
		expectedSize := nfcData_Versions[index].Size
		if expectedSize != header.Size {
			return &bindings.ValidationError{bindings.UnexpectedStructHeader,
				fmt.Sprintf("invalid struct header size: should be %d, but was %d", expectedSize, header.Size),
			}
		}
	}
	if header.ElementsOrVersion >= 0 {
		pointer0, err := decoder.ReadPointer()
		if err != nil {
			return err
		}
		if pointer0 == 0 {
			s.Data = nil
		} else {
			s.Data = new([]uint8)
			len0, err := decoder.StartArray(8)
			if err != nil {
				return err
			}
			(*s.Data) = make([]uint8, len0)
			for i0 := uint32(0); i0 < len0; i0++ {
				value1, err := decoder.ReadUint8()
				if err != nil {
					return err
				}
				(*s.Data)[i0] = value1
			}
			if err := decoder.Finish(); err != nil {
				return err
			}
		}
	}
	if err := decoder.Finish(); err != nil {
		return err
	}
	return nil
}
