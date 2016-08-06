// NOTE: This file was generated by the Mojo bindings generator.
#include "mojo/services/network/interfaces/web_socket.mojom.h"

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
namespace mojo {

// --- Interface definitions ---

WebSocketProxy::WebSocketProxy(mojo::MessageReceiverWithResponder* receiver)
    : ControlMessageProxy(receiver) {
}
void WebSocketProxy::Connect(
    const mojo::String& in_url, mojo::Array<mojo::String> in_protocols, const mojo::String& in_origin, mojo::ScopedDataPipeConsumerHandle in_send_stream, mojo::InterfaceHandle<WebSocketClient> in_client) {
  size_t size = sizeof(internal::WebSocket_Connect_Params_Data);
  size += GetSerializedSize_(in_url);
  size += GetSerializedSize_(in_protocols);
  size += GetSerializedSize_(in_origin);
  mojo::MessageBuilder builder(
    static_cast<uint32_t>(internal::WebSocket_Base::MessageOrdinals::Connect), size);

  internal::WebSocket_Connect_Params_Data* params =
      internal::WebSocket_Connect_Params_Data::New(builder.buffer());
  SerializeString_(in_url, builder.buffer(), &params->url.ptr);
  if (!params->url.ptr) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER, "null url in WebSocket.Connect request");
  }
  {
    const mojo::internal::ArrayValidateParams protocols_validate_params(
      0, false, new mojo::internal::ArrayValidateParams(0, false, nullptr));mojo::SerializeArray_(&in_protocols, builder.buffer(), &params->protocols.ptr,
                          &protocols_validate_params);
  }
  if (!params->protocols.ptr) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER, "null protocols in WebSocket.Connect request");
  }
  SerializeString_(in_origin, builder.buffer(), &params->origin.ptr);
  if (!params->origin.ptr) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER, "null origin in WebSocket.Connect request");
  }
  params->send_stream = in_send_stream.release();
  if (!params->send_stream.is_valid()) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_INVALID_HANDLE, "invalid send_stream in WebSocket.Connect request");
  }
  mojo::internal::InterfaceHandleToData(in_client.Pass(),
                                        &params->client);
  if (!params->client.handle.is_valid()) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_INVALID_HANDLE, "invalid client in WebSocket.Connect request");
  }
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = receiver_->Accept(builder.message());
  // This return value may be ignored as !ok implies the Connector has
  // encountered an error, which will be visible through other means.
  MOJO_ALLOW_UNUSED_LOCAL(ok);
}
void WebSocketProxy::Send(
    bool in_fin, WebSocket::MessageType in_type, uint32_t in_num_bytes) {
  size_t size = sizeof(internal::WebSocket_Send_Params_Data);
  mojo::MessageBuilder builder(
    static_cast<uint32_t>(internal::WebSocket_Base::MessageOrdinals::Send), size);

  internal::WebSocket_Send_Params_Data* params =
      internal::WebSocket_Send_Params_Data::New(builder.buffer());
  params->fin = in_fin;
  params->type =
    static_cast<int32_t>(in_type);
  params->num_bytes = in_num_bytes;
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = receiver_->Accept(builder.message());
  // This return value may be ignored as !ok implies the Connector has
  // encountered an error, which will be visible through other means.
  MOJO_ALLOW_UNUSED_LOCAL(ok);
}
void WebSocketProxy::FlowControl(
    int64_t in_quota) {
  size_t size = sizeof(internal::WebSocket_FlowControl_Params_Data);
  mojo::MessageBuilder builder(
    static_cast<uint32_t>(internal::WebSocket_Base::MessageOrdinals::FlowControl), size);

  internal::WebSocket_FlowControl_Params_Data* params =
      internal::WebSocket_FlowControl_Params_Data::New(builder.buffer());
  params->quota = in_quota;
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = receiver_->Accept(builder.message());
  // This return value may be ignored as !ok implies the Connector has
  // encountered an error, which will be visible through other means.
  MOJO_ALLOW_UNUSED_LOCAL(ok);
}
void WebSocketProxy::Close(
    uint16_t in_code, const mojo::String& in_reason) {
  size_t size = sizeof(internal::WebSocket_Close_Params_Data);
  size += GetSerializedSize_(in_reason);
  mojo::MessageBuilder builder(
    static_cast<uint32_t>(internal::WebSocket_Base::MessageOrdinals::Close), size);

  internal::WebSocket_Close_Params_Data* params =
      internal::WebSocket_Close_Params_Data::New(builder.buffer());
  params->code = in_code;
  SerializeString_(in_reason, builder.buffer(), &params->reason.ptr);
  if (!params->reason.ptr) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER, "null reason in WebSocket.Close request");
  }
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = receiver_->Accept(builder.message());
  // This return value may be ignored as !ok implies the Connector has
  // encountered an error, which will be visible through other means.
  MOJO_ALLOW_UNUSED_LOCAL(ok);
}

WebSocketStub::WebSocketStub()
    : sink_(nullptr),
      control_message_handler_(WebSocket::Version_) {
}

WebSocketStub::~WebSocketStub() {}

bool WebSocketStub::Accept(mojo::Message* message) {
  if (mojo::internal::ControlMessageHandler::IsControlMessage(message))
    return control_message_handler_.Accept(message);
  internal::WebSocket_Base::MessageOrdinals method_ordinal =
      static_cast<internal::WebSocket_Base::MessageOrdinals>(message->header()->name);
  switch (method_ordinal) {
    case internal::WebSocket_Base::MessageOrdinals::Connect: {
      internal::WebSocket_Connect_Params_Data* params =
          reinterpret_cast<internal::WebSocket_Connect_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      
      mojo::String p_url {};
      mojo::Array<mojo::String> p_protocols {};
      mojo::String p_origin {};
      mojo::ScopedDataPipeConsumerHandle p_send_stream {};
      mojo::InterfaceHandle<WebSocketClient> p_client {};
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
        Deserialize_(params->url.ptr, &p_url);
        Deserialize_(params->protocols.ptr, &p_protocols);
        Deserialize_(params->origin.ptr, &p_origin);
        p_send_stream.reset(mojo::internal::FetchAndReset(&params->send_stream));
        mojo::internal::InterfaceDataToHandle(&params->client, &p_client);
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->Connect(p_url, p_protocols.Pass(), p_origin, p_send_stream.Pass(), p_client.Pass());
      return true;
    }
    case internal::WebSocket_Base::MessageOrdinals::Send: {
      internal::WebSocket_Send_Params_Data* params =
          reinterpret_cast<internal::WebSocket_Send_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      
      bool p_fin {};
      WebSocket::MessageType p_type {};
      uint32_t p_num_bytes {};
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
        p_fin = params->fin;
        p_type = static_cast<WebSocket::MessageType>(params->type);
        p_num_bytes = params->num_bytes;
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->Send(p_fin, p_type, p_num_bytes);
      return true;
    }
    case internal::WebSocket_Base::MessageOrdinals::FlowControl: {
      internal::WebSocket_FlowControl_Params_Data* params =
          reinterpret_cast<internal::WebSocket_FlowControl_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      
      int64_t p_quota {};
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
        p_quota = params->quota;
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->FlowControl(p_quota);
      return true;
    }
    case internal::WebSocket_Base::MessageOrdinals::Close: {
      internal::WebSocket_Close_Params_Data* params =
          reinterpret_cast<internal::WebSocket_Close_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      
      uint16_t p_code {};
      mojo::String p_reason {};
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
        p_code = params->code;
        Deserialize_(params->reason.ptr, &p_reason);
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->Close(p_code, p_reason);
      return true;
    }
  }
  return false;
}

bool WebSocketStub::AcceptWithResponder(
    mojo::Message* message, mojo::MessageReceiverWithStatus* responder) {
  if (mojo::internal::ControlMessageHandler::IsControlMessage(message))
    return control_message_handler_.AcceptWithResponder(message, responder);
  internal::WebSocket_Base::MessageOrdinals method_ordinal =
      static_cast<internal::WebSocket_Base::MessageOrdinals>(message->header()->name);
  switch (method_ordinal) {
    case internal::WebSocket_Base::MessageOrdinals::Connect: {
      break;
    }
    case internal::WebSocket_Base::MessageOrdinals::Send: {
      break;
    }
    case internal::WebSocket_Base::MessageOrdinals::FlowControl: {
      break;
    }
    case internal::WebSocket_Base::MessageOrdinals::Close: {
      break;
    }
  }
  return false;
}


WebSocketClientProxy::WebSocketClientProxy(mojo::MessageReceiverWithResponder* receiver)
    : ControlMessageProxy(receiver) {
}
void WebSocketClientProxy::DidConnect(
    const mojo::String& in_selected_subprotocol, const mojo::String& in_extensions, mojo::ScopedDataPipeConsumerHandle in_receive_stream) {
  size_t size = sizeof(internal::WebSocketClient_DidConnect_Params_Data);
  size += GetSerializedSize_(in_selected_subprotocol);
  size += GetSerializedSize_(in_extensions);
  mojo::MessageBuilder builder(
    static_cast<uint32_t>(internal::WebSocketClient_Base::MessageOrdinals::DidConnect), size);

  internal::WebSocketClient_DidConnect_Params_Data* params =
      internal::WebSocketClient_DidConnect_Params_Data::New(builder.buffer());
  SerializeString_(in_selected_subprotocol, builder.buffer(), &params->selected_subprotocol.ptr);
  if (!params->selected_subprotocol.ptr) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER, "null selected_subprotocol in WebSocketClient.DidConnect request");
  }
  SerializeString_(in_extensions, builder.buffer(), &params->extensions.ptr);
  if (!params->extensions.ptr) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER, "null extensions in WebSocketClient.DidConnect request");
  }
  params->receive_stream = in_receive_stream.release();
  if (!params->receive_stream.is_valid()) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_INVALID_HANDLE, "invalid receive_stream in WebSocketClient.DidConnect request");
  }
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = receiver_->Accept(builder.message());
  // This return value may be ignored as !ok implies the Connector has
  // encountered an error, which will be visible through other means.
  MOJO_ALLOW_UNUSED_LOCAL(ok);
}
void WebSocketClientProxy::DidReceiveData(
    bool in_fin, WebSocket::MessageType in_type, uint32_t in_num_bytes) {
  size_t size = sizeof(internal::WebSocketClient_DidReceiveData_Params_Data);
  mojo::MessageBuilder builder(
    static_cast<uint32_t>(internal::WebSocketClient_Base::MessageOrdinals::DidReceiveData), size);

  internal::WebSocketClient_DidReceiveData_Params_Data* params =
      internal::WebSocketClient_DidReceiveData_Params_Data::New(builder.buffer());
  params->fin = in_fin;
  params->type =
    static_cast<int32_t>(in_type);
  params->num_bytes = in_num_bytes;
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = receiver_->Accept(builder.message());
  // This return value may be ignored as !ok implies the Connector has
  // encountered an error, which will be visible through other means.
  MOJO_ALLOW_UNUSED_LOCAL(ok);
}
void WebSocketClientProxy::DidReceiveFlowControl(
    int64_t in_quota) {
  size_t size = sizeof(internal::WebSocketClient_DidReceiveFlowControl_Params_Data);
  mojo::MessageBuilder builder(
    static_cast<uint32_t>(internal::WebSocketClient_Base::MessageOrdinals::DidReceiveFlowControl), size);

  internal::WebSocketClient_DidReceiveFlowControl_Params_Data* params =
      internal::WebSocketClient_DidReceiveFlowControl_Params_Data::New(builder.buffer());
  params->quota = in_quota;
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = receiver_->Accept(builder.message());
  // This return value may be ignored as !ok implies the Connector has
  // encountered an error, which will be visible through other means.
  MOJO_ALLOW_UNUSED_LOCAL(ok);
}
void WebSocketClientProxy::DidFail(
    const mojo::String& in_message) {
  size_t size = sizeof(internal::WebSocketClient_DidFail_Params_Data);
  size += GetSerializedSize_(in_message);
  mojo::MessageBuilder builder(
    static_cast<uint32_t>(internal::WebSocketClient_Base::MessageOrdinals::DidFail), size);

  internal::WebSocketClient_DidFail_Params_Data* params =
      internal::WebSocketClient_DidFail_Params_Data::New(builder.buffer());
  SerializeString_(in_message, builder.buffer(), &params->message.ptr);
  if (!params->message.ptr) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER, "null message in WebSocketClient.DidFail request");
  }
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = receiver_->Accept(builder.message());
  // This return value may be ignored as !ok implies the Connector has
  // encountered an error, which will be visible through other means.
  MOJO_ALLOW_UNUSED_LOCAL(ok);
}
void WebSocketClientProxy::DidClose(
    bool in_was_clean, uint16_t in_code, const mojo::String& in_reason) {
  size_t size = sizeof(internal::WebSocketClient_DidClose_Params_Data);
  size += GetSerializedSize_(in_reason);
  mojo::MessageBuilder builder(
    static_cast<uint32_t>(internal::WebSocketClient_Base::MessageOrdinals::DidClose), size);

  internal::WebSocketClient_DidClose_Params_Data* params =
      internal::WebSocketClient_DidClose_Params_Data::New(builder.buffer());
  params->was_clean = in_was_clean;
  params->code = in_code;
  SerializeString_(in_reason, builder.buffer(), &params->reason.ptr);
  if (!params->reason.ptr) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER, "null reason in WebSocketClient.DidClose request");
  }
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = receiver_->Accept(builder.message());
  // This return value may be ignored as !ok implies the Connector has
  // encountered an error, which will be visible through other means.
  MOJO_ALLOW_UNUSED_LOCAL(ok);
}

WebSocketClientStub::WebSocketClientStub()
    : sink_(nullptr),
      control_message_handler_(WebSocketClient::Version_) {
}

WebSocketClientStub::~WebSocketClientStub() {}

bool WebSocketClientStub::Accept(mojo::Message* message) {
  if (mojo::internal::ControlMessageHandler::IsControlMessage(message))
    return control_message_handler_.Accept(message);
  internal::WebSocketClient_Base::MessageOrdinals method_ordinal =
      static_cast<internal::WebSocketClient_Base::MessageOrdinals>(message->header()->name);
  switch (method_ordinal) {
    case internal::WebSocketClient_Base::MessageOrdinals::DidConnect: {
      internal::WebSocketClient_DidConnect_Params_Data* params =
          reinterpret_cast<internal::WebSocketClient_DidConnect_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      
      mojo::String p_selected_subprotocol {};
      mojo::String p_extensions {};
      mojo::ScopedDataPipeConsumerHandle p_receive_stream {};
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
        Deserialize_(params->selected_subprotocol.ptr, &p_selected_subprotocol);
        Deserialize_(params->extensions.ptr, &p_extensions);
        p_receive_stream.reset(mojo::internal::FetchAndReset(&params->receive_stream));
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->DidConnect(p_selected_subprotocol, p_extensions, p_receive_stream.Pass());
      return true;
    }
    case internal::WebSocketClient_Base::MessageOrdinals::DidReceiveData: {
      internal::WebSocketClient_DidReceiveData_Params_Data* params =
          reinterpret_cast<internal::WebSocketClient_DidReceiveData_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      
      bool p_fin {};
      WebSocket::MessageType p_type {};
      uint32_t p_num_bytes {};
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
        p_fin = params->fin;
        p_type = static_cast<WebSocket::MessageType>(params->type);
        p_num_bytes = params->num_bytes;
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->DidReceiveData(p_fin, p_type, p_num_bytes);
      return true;
    }
    case internal::WebSocketClient_Base::MessageOrdinals::DidReceiveFlowControl: {
      internal::WebSocketClient_DidReceiveFlowControl_Params_Data* params =
          reinterpret_cast<internal::WebSocketClient_DidReceiveFlowControl_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      
      int64_t p_quota {};
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
        p_quota = params->quota;
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->DidReceiveFlowControl(p_quota);
      return true;
    }
    case internal::WebSocketClient_Base::MessageOrdinals::DidFail: {
      internal::WebSocketClient_DidFail_Params_Data* params =
          reinterpret_cast<internal::WebSocketClient_DidFail_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      
      mojo::String p_message {};
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
        Deserialize_(params->message.ptr, &p_message);
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->DidFail(p_message);
      return true;
    }
    case internal::WebSocketClient_Base::MessageOrdinals::DidClose: {
      internal::WebSocketClient_DidClose_Params_Data* params =
          reinterpret_cast<internal::WebSocketClient_DidClose_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      
      bool p_was_clean {};
      uint16_t p_code {};
      mojo::String p_reason {};
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
        p_was_clean = params->was_clean;
        p_code = params->code;
        Deserialize_(params->reason.ptr, &p_reason);
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->DidClose(p_was_clean, p_code, p_reason);
      return true;
    }
  }
  return false;
}

bool WebSocketClientStub::AcceptWithResponder(
    mojo::Message* message, mojo::MessageReceiverWithStatus* responder) {
  if (mojo::internal::ControlMessageHandler::IsControlMessage(message))
    return control_message_handler_.AcceptWithResponder(message, responder);
  internal::WebSocketClient_Base::MessageOrdinals method_ordinal =
      static_cast<internal::WebSocketClient_Base::MessageOrdinals>(message->header()->name);
  switch (method_ordinal) {
    case internal::WebSocketClient_Base::MessageOrdinals::DidConnect: {
      break;
    }
    case internal::WebSocketClient_Base::MessageOrdinals::DidReceiveData: {
      break;
    }
    case internal::WebSocketClient_Base::MessageOrdinals::DidReceiveFlowControl: {
      break;
    }
    case internal::WebSocketClient_Base::MessageOrdinals::DidFail: {
      break;
    }
    case internal::WebSocketClient_Base::MessageOrdinals::DidClose: {
      break;
    }
  }
  return false;
}

}  // namespace mojo