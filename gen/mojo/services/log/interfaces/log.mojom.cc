// NOTE: This file was generated by the Mojo bindings generator.
#include "mojo/services/log/interfaces/log.mojom.h"

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
namespace log {

// --- Interface definitions ---

LogProxy::LogProxy(mojo::MessageReceiverWithResponder* receiver)
    : ControlMessageProxy(receiver) {
}
void LogProxy::AddEntry(
    mojo::log::EntryPtr in_entry) {
  size_t size = sizeof(internal::Log_AddEntry_Params_Data);
  size += in_entry.is_null()
              ? 0
              : GetSerializedSize_(*in_entry);
  mojo::MessageBuilder builder(
    static_cast<uint32_t>(internal::Log_Base::MessageOrdinals::AddEntry), size);

  internal::Log_AddEntry_Params_Data* params =
      internal::Log_AddEntry_Params_Data::New(builder.buffer());
  {Serialize_(in_entry.get(),
               builder.buffer(),
               &params->entry.ptr);
  }
  if (!params->entry.ptr) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER, "null entry in Log.AddEntry request");
  }
  params->EncodePointersAndHandles(builder.message()->mutable_handles());
  bool ok = receiver_->Accept(builder.message());
  // This return value may be ignored as !ok implies the Connector has
  // encountered an error, which will be visible through other means.
  MOJO_ALLOW_UNUSED_LOCAL(ok);
}

LogStub::LogStub()
    : sink_(nullptr),
      control_message_handler_(Log::Version_) {
}

LogStub::~LogStub() {}

bool LogStub::Accept(mojo::Message* message) {
  if (mojo::internal::ControlMessageHandler::IsControlMessage(message))
    return control_message_handler_.Accept(message);
  internal::Log_Base::MessageOrdinals method_ordinal =
      static_cast<internal::Log_Base::MessageOrdinals>(message->header()->name);
  switch (method_ordinal) {
    case internal::Log_Base::MessageOrdinals::AddEntry: {
      internal::Log_AddEntry_Params_Data* params =
          reinterpret_cast<internal::Log_AddEntry_Params_Data*>(
              message->mutable_payload());

      params->DecodePointersAndHandles(message->mutable_handles());
      
      mojo::log::EntryPtr p_entry {};
      do {
        // NOTE: The memory backing |params| may has be smaller than
        // |sizeof(*params)| if the message comes from an older version.
        if (params->entry.ptr) {
          p_entry = mojo::log::Entry::New();
          Deserialize_(params->entry.ptr, p_entry.get());
        }
      } while (false);
      // A null |sink_| means no implementation was bound.
      assert(sink_);
      sink_->AddEntry(p_entry.Pass());
      return true;
    }
  }
  return false;
}

bool LogStub::AcceptWithResponder(
    mojo::Message* message, mojo::MessageReceiverWithStatus* responder) {
  if (mojo::internal::ControlMessageHandler::IsControlMessage(message))
    return control_message_handler_.AcceptWithResponder(message, responder);
  internal::Log_Base::MessageOrdinals method_ordinal =
      static_cast<internal::Log_Base::MessageOrdinals>(message->header()->name);
  switch (method_ordinal) {
    case internal::Log_Base::MessageOrdinals::AddEntry: {
      break;
    }
  }
  return false;
}

}  // namespace log
}  // namespace mojo
