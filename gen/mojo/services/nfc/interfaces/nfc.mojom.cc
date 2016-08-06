// NOTE: This file was generated by the Mojo bindings generator.
#include "mojo/services/nfc/interfaces/nfc.mojom.h"

#include <math.h>
#include <ostream>

#include "mojo/public/cpp/bindings/lib/array_serialization.h"
#include "mojo/public/cpp/bindings/lib/bindings_serialization.h"
#include "mojo/public/cpp/bindings/lib/bounds_checker.h"
#include "mojo/public/cpp/bindings/lib/map_data_internal.h"
#include "mojo/public/cpp/bindings/lib/map_serialization.h"
#include "mojo/public/cpp/bindings/lib/message_builder.h"
#include "mojo/public/cpp/bindings/lib/message_validation.h"
#include "mojo/public/cpp/bindings/lib/string_serialization.h"
#include "mojo/public/cpp/bindings/lib/validate_params.h"
#include "mojo/public/cpp/bindings/lib/validation_errors.h"
#include "mojo/public/cpp/bindings/lib/validation_util.h"
#include "mojo/public/cpp/environment/logging.h"
namespace nfc {

// --- Interface definitions ---

NfcTransmissionProxy::NfcTransmissionProxy(mojo::MessageReceiverWithResponder* receiver)
    : ControlMessageProxy(receiver) {
}
void NfcTransmissionProxy::Cancel(
    ) {
  size_t size = sizeof(internal::NfcTransmission_Cancel_Params_Data);
  mojo::MessageBuilder builder(
    static_cast<uint32_t>(internal::NfcTransmission_Base::MessageOrdinals::Cancel), size);

  internal::NfcTransmission_Cancel_Params_Data* params =
      internal::NfcTransmission_Cancel_Params_Data::New(builder.buffer());
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = receiver_->Accept(builder.message());
  // This return value may be ignored as !ok implies the Connector has
  // encountered an error, which will be visible through other means.
  MOJO_ALLOW_UNUSED_LOCAL(ok);
}

NfcTransmissionStub::NfcTransmissionStub()
    : sink_(nullptr),
      control_message_handler_(NfcTransmission::Version_) {
}

NfcTransmissionStub::~NfcTransmissionStub() {}

bool NfcTransmissionStub::Accept(mojo::Message* message) {
  if (mojo::internal::ControlMessageHandler::IsControlMessage(message))
    return control_message_handler_.Accept(message);
  internal::NfcTransmission_Base::MessageOrdinals method_ordinal =
      static_cast<internal::NfcTransmission_Base::MessageOrdinals>(message->header()->name);
  switch (method_ordinal) {
    case internal::NfcTransmission_Base::MessageOrdinals::Cancel: {
      internal::NfcTransmission_Cancel_Params_Data* params =
          reinterpret_cast<internal::NfcTransmission_Cancel_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->Cancel();
      return true;
    }
  }
  return false;
}

bool NfcTransmissionStub::AcceptWithResponder(
    mojo::Message* message, mojo::MessageReceiverWithStatus* responder) {
  if (mojo::internal::ControlMessageHandler::IsControlMessage(message))
    return control_message_handler_.AcceptWithResponder(message, responder);
  internal::NfcTransmission_Base::MessageOrdinals method_ordinal =
      static_cast<internal::NfcTransmission_Base::MessageOrdinals>(message->header()->name);
  switch (method_ordinal) {
    case internal::NfcTransmission_Base::MessageOrdinals::Cancel: {
      break;
    }
  }
  return false;
}


NfcReceiverProxy::NfcReceiverProxy(mojo::MessageReceiverWithResponder* receiver)
    : ControlMessageProxy(receiver) {
}
void NfcReceiverProxy::OnReceivedNfcData(
    NfcDataPtr in_nfc_data) {
  size_t size = sizeof(internal::NfcReceiver_OnReceivedNfcData_Params_Data);
  size += in_nfc_data.is_null()
              ? 0
              : GetSerializedSize_(*in_nfc_data);
  mojo::MessageBuilder builder(
    static_cast<uint32_t>(internal::NfcReceiver_Base::MessageOrdinals::OnReceivedNfcData), size);

  internal::NfcReceiver_OnReceivedNfcData_Params_Data* params =
      internal::NfcReceiver_OnReceivedNfcData_Params_Data::New(builder.buffer());
  {Serialize_(in_nfc_data.get(),
               builder.buffer(),
               &params->nfc_data.ptr);
  }
  if (!params->nfc_data.ptr) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER, "null nfc_data in NfcReceiver.OnReceivedNfcData request");
  }
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = receiver_->Accept(builder.message());
  // This return value may be ignored as !ok implies the Connector has
  // encountered an error, which will be visible through other means.
  MOJO_ALLOW_UNUSED_LOCAL(ok);
}

NfcReceiverStub::NfcReceiverStub()
    : sink_(nullptr),
      control_message_handler_(NfcReceiver::Version_) {
}

NfcReceiverStub::~NfcReceiverStub() {}

bool NfcReceiverStub::Accept(mojo::Message* message) {
  if (mojo::internal::ControlMessageHandler::IsControlMessage(message))
    return control_message_handler_.Accept(message);
  internal::NfcReceiver_Base::MessageOrdinals method_ordinal =
      static_cast<internal::NfcReceiver_Base::MessageOrdinals>(message->header()->name);
  switch (method_ordinal) {
    case internal::NfcReceiver_Base::MessageOrdinals::OnReceivedNfcData: {
      internal::NfcReceiver_OnReceivedNfcData_Params_Data* params =
          reinterpret_cast<internal::NfcReceiver_OnReceivedNfcData_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      
      NfcDataPtr p_nfc_data {};
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
        if (params->nfc_data.ptr) {
          p_nfc_data = NfcData::New();
          Deserialize_(params->nfc_data.ptr, p_nfc_data.get());
        }
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->OnReceivedNfcData(p_nfc_data.Pass());
      return true;
    }
  }
  return false;
}

bool NfcReceiverStub::AcceptWithResponder(
    mojo::Message* message, mojo::MessageReceiverWithStatus* responder) {
  if (mojo::internal::ControlMessageHandler::IsControlMessage(message))
    return control_message_handler_.AcceptWithResponder(message, responder);
  internal::NfcReceiver_Base::MessageOrdinals method_ordinal =
      static_cast<internal::NfcReceiver_Base::MessageOrdinals>(message->header()->name);
  switch (method_ordinal) {
    case internal::NfcReceiver_Base::MessageOrdinals::OnReceivedNfcData: {
      break;
    }
  }
  return false;
}

class Nfc_TransmitOnNextConnection_ForwardToCallback
    : public mojo::MessageReceiver {
 public:
  Nfc_TransmitOnNextConnection_ForwardToCallback(
      const Nfc::TransmitOnNextConnectionCallback& callback)
      : callback_(callback) {
  }
  bool Accept(mojo::Message* message) override;
 private:
  Nfc::TransmitOnNextConnectionCallback callback_;
  MOJO_DISALLOW_COPY_AND_ASSIGN(Nfc_TransmitOnNextConnection_ForwardToCallback);
};
bool Nfc_TransmitOnNextConnection_ForwardToCallback::Accept(
    mojo::Message* message) {
  internal::Nfc_TransmitOnNextConnection_ResponseParams_Data* params =
      reinterpret_cast<internal::Nfc_TransmitOnNextConnection_ResponseParams_Data*>(
          message->mutable_payload());

  params->DecodePointersAndHandles(message->mutable_handles());
  
  bool p_success {};
  do {
    // NOTE: The memory backing |params| may has be smaller than
    // |sizeof(*params)| if the message comes from an older version.
    p_success = params->success;
  } while (false);
  callback_.Run(p_success);
  return true;
}

NfcProxy::NfcProxy(mojo::MessageReceiverWithResponder* receiver)
    : ControlMessageProxy(receiver) {
}
void NfcProxy::TransmitOnNextConnection(
    NfcDataPtr in_nfc_data, mojo::InterfaceRequest<NfcTransmission> in_transmission, const TransmitOnNextConnectionCallback& callback) {
  size_t size = sizeof(internal::Nfc_TransmitOnNextConnection_Params_Data);
  size += in_nfc_data.is_null()
              ? 0
              : GetSerializedSize_(*in_nfc_data);
  mojo::RequestMessageBuilder builder(
      static_cast<uint32_t>(internal::Nfc_Base::MessageOrdinals::TransmitOnNextConnection), size);

  internal::Nfc_TransmitOnNextConnection_Params_Data* params =
      internal::Nfc_TransmitOnNextConnection_Params_Data::New(builder.buffer());
  {Serialize_(in_nfc_data.get(),
               builder.buffer(),
               &params->nfc_data.ptr);
  }
  if (!params->nfc_data.ptr) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER, "null nfc_data in Nfc.TransmitOnNextConnection request");
  }
  params->transmission = in_transmission.PassMessagePipe().release();
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  mojo::MessageReceiver* responder =
      new Nfc_TransmitOnNextConnection_ForwardToCallback(callback);
  if (!receiver_->AcceptWithResponder(builder.message(), responder))
    delete responder;
}
void NfcProxy::Register(
    ) {
  size_t size = sizeof(internal::Nfc_Register_Params_Data);
  mojo::MessageBuilder builder(
    static_cast<uint32_t>(internal::Nfc_Base::MessageOrdinals::Register), size);

  internal::Nfc_Register_Params_Data* params =
      internal::Nfc_Register_Params_Data::New(builder.buffer());
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = receiver_->Accept(builder.message());
  // This return value may be ignored as !ok implies the Connector has
  // encountered an error, which will be visible through other means.
  MOJO_ALLOW_UNUSED_LOCAL(ok);
}
void NfcProxy::Unregister(
    ) {
  size_t size = sizeof(internal::Nfc_Unregister_Params_Data);
  mojo::MessageBuilder builder(
    static_cast<uint32_t>(internal::Nfc_Base::MessageOrdinals::Unregister), size);

  internal::Nfc_Unregister_Params_Data* params =
      internal::Nfc_Unregister_Params_Data::New(builder.buffer());
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = receiver_->Accept(builder.message());
  // This return value may be ignored as !ok implies the Connector has
  // encountered an error, which will be visible through other means.
  MOJO_ALLOW_UNUSED_LOCAL(ok);
}
// This class implements a method's response callback: it serializes the
// response args into a mojo message and passes it to the MessageReceiver it
// was created with.
class Nfc_TransmitOnNextConnection_ProxyToResponder
    : public Nfc::TransmitOnNextConnectionCallback::Runnable {
 public:
  ~Nfc_TransmitOnNextConnection_ProxyToResponder() override {
    // Is the Mojo application destroying the callback without running it
    // and without first closing the pipe?
    bool callback_was_dropped = responder_ && responder_->IsValid();
    // If the Callback was dropped then deleting the responder will close
    // the pipe so the calling application knows to stop waiting for a reply.
    delete responder_;
    MOJO_DCHECK(!callback_was_dropped)  << "The callback passed to "
        "Nfc::TransmitOnNextConnection(p_nfc_data.Pass(), p_transmission.Pass(), callback) "
        "was never run.";
  }

  Nfc_TransmitOnNextConnection_ProxyToResponder(
      uint64_t request_id,
      mojo::MessageReceiverWithStatus* responder)
      : request_id_(request_id),
        responder_(responder) {
  }

  void Run(bool in_success) const override;

 private:
  uint64_t request_id_;
  mutable mojo::MessageReceiverWithStatus* responder_;
  MOJO_DISALLOW_COPY_AND_ASSIGN(Nfc_TransmitOnNextConnection_ProxyToResponder);
};

void Nfc_TransmitOnNextConnection_ProxyToResponder::Run(
    bool in_success) const {
  size_t size = sizeof(internal::Nfc_TransmitOnNextConnection_ResponseParams_Data);
  mojo::ResponseMessageBuilder builder(
      static_cast<uint32_t>(internal::Nfc_Base::MessageOrdinals::TransmitOnNextConnection), size, request_id_);
  internal::Nfc_TransmitOnNextConnection_ResponseParams_Data* params =
      internal::Nfc_TransmitOnNextConnection_ResponseParams_Data::New(builder.buffer());
  params->success = in_success;
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = responder_->Accept(builder.message());
  MOJO_ALLOW_UNUSED_LOCAL(ok);
  // TODO(darin): !ok returned here indicates a malformed message, and that may
  // be good reason to close the connection. However, we don't have a way to do
  // that from here. We should add a way.
  delete responder_;
  responder_ = nullptr;
}

NfcStub::NfcStub()
    : sink_(nullptr),
      control_message_handler_(Nfc::Version_) {
}

NfcStub::~NfcStub() {}

bool NfcStub::Accept(mojo::Message* message) {
  if (mojo::internal::ControlMessageHandler::IsControlMessage(message))
    return control_message_handler_.Accept(message);
  internal::Nfc_Base::MessageOrdinals method_ordinal =
      static_cast<internal::Nfc_Base::MessageOrdinals>(message->header()->name);
  switch (method_ordinal) {
    case internal::Nfc_Base::MessageOrdinals::TransmitOnNextConnection: {
      break;
    }
    case internal::Nfc_Base::MessageOrdinals::Register: {
      internal::Nfc_Register_Params_Data* params =
          reinterpret_cast<internal::Nfc_Register_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->Register();
      return true;
    }
    case internal::Nfc_Base::MessageOrdinals::Unregister: {
      internal::Nfc_Unregister_Params_Data* params =
          reinterpret_cast<internal::Nfc_Unregister_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->Unregister();
      return true;
    }
  }
  return false;
}

bool NfcStub::AcceptWithResponder(
    mojo::Message* message, mojo::MessageReceiverWithStatus* responder) {
  if (mojo::internal::ControlMessageHandler::IsControlMessage(message))
    return control_message_handler_.AcceptWithResponder(message, responder);
  internal::Nfc_Base::MessageOrdinals method_ordinal =
      static_cast<internal::Nfc_Base::MessageOrdinals>(message->header()->name);
  switch (method_ordinal) {
    case internal::Nfc_Base::MessageOrdinals::TransmitOnNextConnection: {
      internal::Nfc_TransmitOnNextConnection_Params_Data* params =
          reinterpret_cast<internal::Nfc_TransmitOnNextConnection_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      Nfc::TransmitOnNextConnectionCallback::Runnable* runnable =
          new Nfc_TransmitOnNextConnection_ProxyToResponder(
              message->request_id(), responder);
      Nfc::TransmitOnNextConnectionCallback callback(runnable);
      
      NfcDataPtr p_nfc_data {};
      mojo::InterfaceRequest<NfcTransmission> p_transmission {};
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
        if (params->nfc_data.ptr) {
          p_nfc_data = NfcData::New();
          Deserialize_(params->nfc_data.ptr, p_nfc_data.get());
        }
        p_transmission.Bind(mojo::MakeScopedHandle(mojo::internal::FetchAndReset(&params->transmission)));
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->TransmitOnNextConnection(p_nfc_data.Pass(), p_transmission.Pass(), callback);
      return true;
    }
    case internal::Nfc_Base::MessageOrdinals::Register: {
      break;
    }
    case internal::Nfc_Base::MessageOrdinals::Unregister: {
      break;
    }
  }
  return false;
}

}  // namespace nfc