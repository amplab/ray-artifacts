// NOTE: This file was generated by the Mojo bindings generator.
#if defined(__clang__)
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunused-private-field"
#endif

#include "mojo/services/clipboard/interfaces/clipboard.mojom-sync.h"

#include <math.h>
#include <ostream>
#include <string>
#include <utility>

#include "mojo/public/cpp/bindings/lib/array_serialization.h"
#include "mojo/public/cpp/bindings/lib/bindings_serialization.h"
#include "mojo/public/cpp/bindings/lib/bounds_checker.h"
#include "mojo/public/cpp/bindings/lib/map_data_internal.h"
#include "mojo/public/cpp/bindings/lib/map_serialization.h"
#include "mojo/public/cpp/bindings/lib/message_builder.h"
#include "mojo/public/cpp/bindings/lib/message_validation.h"
#include "mojo/public/cpp/bindings/lib/string_serialization.h"
#include "mojo/public/cpp/bindings/lib/synchronous_connector.h"
#include "mojo/public/cpp/bindings/lib/validate_params.h"
#include "mojo/public/cpp/bindings/lib/validation_errors.h"
#include "mojo/public/cpp/bindings/lib/validation_util.h"
#include "mojo/public/cpp/bindings/message.h"
#include "mojo/public/cpp/bindings/message_validator.h"
#include "mojo/public/cpp/environment/logging.h"
#include "mojo/public/interfaces/bindings/interface_control_messages.mojom.h"
#include "mojo/services/clipboard/interfaces/clipboard.mojom-internal.h"
#include "mojo/services/clipboard/interfaces/clipboard.mojom-common.h"
namespace mojo {

// --- Interface definitions ---
Clipboard_SynchronousProxy::Clipboard_SynchronousProxy(
      mojo::internal::SynchronousConnector* connector,
      mojo::internal::MessageValidatorList&& validators)
          : connector_(connector), validators_(std::move(validators)) {
}


bool Clipboard_SynchronousProxy::GetSequenceNumber(Clipboard::Type in_clipboard_type, uint64_t* out_sequence) {
  size_t size = sizeof(internal::Clipboard_GetSequenceNumber_Params_Data);

  auto msg_name = static_cast<uint32_t>(internal::Clipboard_Base::MessageOrdinals::GetSequenceNumber);
  mojo::RequestMessageBuilder builder(msg_name, size);

  internal::Clipboard_GetSequenceNumber_Params_Data* out_params =
      internal::Clipboard_GetSequenceNumber_Params_Data::New(builder.buffer());
  out_params->clipboard_type =
    static_cast<int32_t>(in_clipboard_type);
  out_params->EncodePointersAndHandles(builder.message()->mutable_handles());
  
  if (!connector_->Write(builder.message()))
    return false;
  mojo::Message response_msg;
  if (!connector_->BlockingRead(&response_msg))
    return false; 
  
  // Validate the incoming message.
  std::string response_err;
  if (mojo::internal::RunValidatorsOnMessage(validators_, &response_msg,
                                             &response_err)
        != mojo::internal::ValidationError::NONE) {
    MOJO_LOG(WARNING) << response_err;
    return false;
  } 
  if (mojo::internal::ControlMessageHandler::IsControlMessage(&response_msg)) {
    MOJO_LOG(ERROR) << "Synchronous interface bindings currently don't support "
                       "interface control messages.";
    return false;
  }
  if (response_msg.name() != msg_name) {
    MOJO_LOG(ERROR) << "Expecting response for message = " << msg_name <<
                       ", but received message = " << response_msg.name();
    return false;
  }
  
  internal::Clipboard_GetSequenceNumber_ResponseParams_Data*
      response_params = reinterpret_cast<internal::Clipboard_GetSequenceNumber_ResponseParams_Data*>(
          response_msg.mutable_payload());
  response_params->DecodePointersAndHandles(response_msg.mutable_handles());
  
  do {
    // NOTE: The memory backing |response_params| may has be smaller than
    // |sizeof(*response_params)| if the message comes from an older version.
    (*out_sequence) = response_params->sequence;
  } while (false);
  return true;
}
bool Clipboard_SynchronousProxy::GetAvailableMimeTypes(Clipboard::Type in_clipboard_types, mojo::Array<mojo::String>* out_types) {
  size_t size = sizeof(internal::Clipboard_GetAvailableMimeTypes_Params_Data);

  auto msg_name = static_cast<uint32_t>(internal::Clipboard_Base::MessageOrdinals::GetAvailableMimeTypes);
  mojo::RequestMessageBuilder builder(msg_name, size);

  internal::Clipboard_GetAvailableMimeTypes_Params_Data* out_params =
      internal::Clipboard_GetAvailableMimeTypes_Params_Data::New(builder.buffer());
  out_params->clipboard_types =
    static_cast<int32_t>(in_clipboard_types);
  out_params->EncodePointersAndHandles(builder.message()->mutable_handles());
  
  if (!connector_->Write(builder.message()))
    return false;
  mojo::Message response_msg;
  if (!connector_->BlockingRead(&response_msg))
    return false; 
  
  // Validate the incoming message.
  std::string response_err;
  if (mojo::internal::RunValidatorsOnMessage(validators_, &response_msg,
                                             &response_err)
        != mojo::internal::ValidationError::NONE) {
    MOJO_LOG(WARNING) << response_err;
    return false;
  } 
  if (mojo::internal::ControlMessageHandler::IsControlMessage(&response_msg)) {
    MOJO_LOG(ERROR) << "Synchronous interface bindings currently don't support "
                       "interface control messages.";
    return false;
  }
  if (response_msg.name() != msg_name) {
    MOJO_LOG(ERROR) << "Expecting response for message = " << msg_name <<
                       ", but received message = " << response_msg.name();
    return false;
  }
  
  internal::Clipboard_GetAvailableMimeTypes_ResponseParams_Data*
      response_params = reinterpret_cast<internal::Clipboard_GetAvailableMimeTypes_ResponseParams_Data*>(
          response_msg.mutable_payload());
  response_params->DecodePointersAndHandles(response_msg.mutable_handles());
  
  do {
    // NOTE: The memory backing |response_params| may has be smaller than
    // |sizeof(*response_params)| if the message comes from an older version.
    Deserialize_(response_params->types.ptr, &(*out_types));
  } while (false);
  return true;
}
bool Clipboard_SynchronousProxy::ReadMimeType(Clipboard::Type in_clipboard_type, const mojo::String& in_mime_type, mojo::Array<uint8_t>* out_data) {
  size_t size = sizeof(internal::Clipboard_ReadMimeType_Params_Data);
  size += GetSerializedSize_(in_mime_type);

  auto msg_name = static_cast<uint32_t>(internal::Clipboard_Base::MessageOrdinals::ReadMimeType);
  mojo::RequestMessageBuilder builder(msg_name, size);

  internal::Clipboard_ReadMimeType_Params_Data* out_params =
      internal::Clipboard_ReadMimeType_Params_Data::New(builder.buffer());
  out_params->clipboard_type =
    static_cast<int32_t>(in_clipboard_type);
  SerializeString_(in_mime_type, builder.buffer(), &out_params->mime_type.ptr);
  if (!out_params->mime_type.ptr) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER, "null mime_type in {{interface.name}}::{{method.name}}");
  }
  out_params->EncodePointersAndHandles(builder.message()->mutable_handles());
  
  if (!connector_->Write(builder.message()))
    return false;
  mojo::Message response_msg;
  if (!connector_->BlockingRead(&response_msg))
    return false; 
  
  // Validate the incoming message.
  std::string response_err;
  if (mojo::internal::RunValidatorsOnMessage(validators_, &response_msg,
                                             &response_err)
        != mojo::internal::ValidationError::NONE) {
    MOJO_LOG(WARNING) << response_err;
    return false;
  } 
  if (mojo::internal::ControlMessageHandler::IsControlMessage(&response_msg)) {
    MOJO_LOG(ERROR) << "Synchronous interface bindings currently don't support "
                       "interface control messages.";
    return false;
  }
  if (response_msg.name() != msg_name) {
    MOJO_LOG(ERROR) << "Expecting response for message = " << msg_name <<
                       ", but received message = " << response_msg.name();
    return false;
  }
  
  internal::Clipboard_ReadMimeType_ResponseParams_Data*
      response_params = reinterpret_cast<internal::Clipboard_ReadMimeType_ResponseParams_Data*>(
          response_msg.mutable_payload());
  response_params->DecodePointersAndHandles(response_msg.mutable_handles());
  
  do {
    // NOTE: The memory backing |response_params| may has be smaller than
    // |sizeof(*response_params)| if the message comes from an older version.
    Deserialize_(response_params->data.ptr, &(*out_data));
  } while (false);
  return true;
}
bool Clipboard_SynchronousProxy::WriteClipboardData(Clipboard::Type in_clipboard_type, mojo::Map<mojo::String, mojo::Array<uint8_t> > in_data) const  {
  size_t size = sizeof(internal::Clipboard_WriteClipboardData_Params_Data);
  size += GetSerializedSize_(in_data);

  auto msg_name = static_cast<uint32_t>(internal::Clipboard_Base::MessageOrdinals::WriteClipboardData);
  mojo::MessageBuilder builder(msg_name, size);

  internal::Clipboard_WriteClipboardData_Params_Data* out_params =
      internal::Clipboard_WriteClipboardData_Params_Data::New(builder.buffer());
  out_params->clipboard_type =
    static_cast<int32_t>(in_clipboard_type);
  {
    const mojo::internal::ArrayValidateParams data_validate_params(
        0, false, new mojo::internal::ArrayValidateParams(0, false, nullptr));mojo::SerializeMap_(
        &in_data, builder.buffer(), &out_params->data.ptr,
        &data_validate_params);
  }
  out_params->EncodePointersAndHandles(builder.message()->mutable_handles());
  
  if (!connector_->Write(builder.message()))
    return false;
  return true;
}
}  // namespace mojo

#if defined(__clang__)
#pragma clang diagnostic pop
#endif