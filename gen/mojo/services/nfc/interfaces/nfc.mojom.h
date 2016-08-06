// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_NFC_INTERFACES_NFC_MOJOM_H_
#define MOJO_SERVICES_NFC_INTERFACES_NFC_MOJOM_H_

#include <iosfwd>
#include <stdint.h>

#include "mojo/public/cpp/bindings/array.h"
#include "mojo/public/cpp/bindings/callback.h"
#include "mojo/public/cpp/bindings/interface_ptr.h"
#include "mojo/public/cpp/bindings/interface_handle.h"
#include "mojo/public/cpp/bindings/interface_request.h"
#include "mojo/public/cpp/bindings/lib/control_message_handler.h"
#include "mojo/public/cpp/bindings/lib/control_message_proxy.h"
#include "mojo/public/cpp/bindings/map.h"
#include "mojo/public/cpp/bindings/message_validator.h"
#include "mojo/public/cpp/bindings/no_interface.h"
#include "mojo/public/cpp/bindings/string.h"
#include "mojo/public/cpp/bindings/struct_ptr.h"
#include "mojo/public/cpp/system/buffer.h"
#include "mojo/public/cpp/system/data_pipe.h"
#include "mojo/public/cpp/system/handle.h"
#include "mojo/public/cpp/system/message_pipe.h"
#include "mojo/services/nfc/interfaces/nfc.mojom-common.h"
namespace nfc {

// --- Interface Forward Declarations ---

using NfcTransmissionPtr = mojo::InterfacePtr<NfcTransmission>;

using NfcReceiverPtr = mojo::InterfacePtr<NfcReceiver>;

using NfcPtr = mojo::InterfacePtr<Nfc>;


// --- Interface Proxies ---


class NfcTransmissionProxy
    : public NfcTransmission,
      public mojo::internal::ControlMessageProxy {
 public:
  explicit NfcTransmissionProxy(mojo::MessageReceiverWithResponder* receiver);
  void Cancel(
      
  ) override;
};


class NfcReceiverProxy
    : public NfcReceiver,
      public mojo::internal::ControlMessageProxy {
 public:
  explicit NfcReceiverProxy(mojo::MessageReceiverWithResponder* receiver);
  void OnReceivedNfcData(
      NfcDataPtr nfc_data
  ) override;
};


class NfcProxy
    : public Nfc,
      public mojo::internal::ControlMessageProxy {
 public:
  explicit NfcProxy(mojo::MessageReceiverWithResponder* receiver);
  void TransmitOnNextConnection(
      NfcDataPtr nfc_data, mojo::InterfaceRequest<NfcTransmission> transmission, const TransmitOnNextConnectionCallback& callback
  ) override;
  void Register(
      
  ) override;
  void Unregister(
      
  ) override;
};


// --- Interface Stubs ---

class NfcTransmissionStub : public mojo::MessageReceiverWithResponderStatus {
 public:
  NfcTransmissionStub();
  ~NfcTransmissionStub() override;
  void set_sink(NfcTransmission* sink) { sink_ = sink; }
  NfcTransmission* sink() { return sink_; }

  bool Accept(mojo::Message* message) override;
  bool AcceptWithResponder(mojo::Message* message,
      mojo::MessageReceiverWithStatus* responder) override;

 private:
  NfcTransmission* sink_;
  mojo::internal::ControlMessageHandler control_message_handler_;
};

class NfcReceiverStub : public mojo::MessageReceiverWithResponderStatus {
 public:
  NfcReceiverStub();
  ~NfcReceiverStub() override;
  void set_sink(NfcReceiver* sink) { sink_ = sink; }
  NfcReceiver* sink() { return sink_; }

  bool Accept(mojo::Message* message) override;
  bool AcceptWithResponder(mojo::Message* message,
      mojo::MessageReceiverWithStatus* responder) override;

 private:
  NfcReceiver* sink_;
  mojo::internal::ControlMessageHandler control_message_handler_;
};

class NfcStub : public mojo::MessageReceiverWithResponderStatus {
 public:
  NfcStub();
  ~NfcStub() override;
  void set_sink(Nfc* sink) { sink_ = sink; }
  Nfc* sink() { return sink_; }

  bool Accept(mojo::Message* message) override;
  bool AcceptWithResponder(mojo::Message* message,
      mojo::MessageReceiverWithStatus* responder) override;

 private:
  Nfc* sink_;
  mojo::internal::ControlMessageHandler control_message_handler_;
};

}  // namespace nfc

#endif  // MOJO_SERVICES_NFC_INTERFACES_NFC_MOJOM_H_