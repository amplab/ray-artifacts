// NOTE: This file was generated by the Mojo bindings generator.
#if defined(__clang__)
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunused-private-field"
#endif

#include "mojo/services/terminal/interfaces/terminal_client.mojom-sync.h"

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
#include "mojo/services/terminal/interfaces/terminal_client.mojom-internal.h"
#include "mojo/services/terminal/interfaces/terminal_client.mojom-common.h"
namespace mojo {
namespace terminal {

// --- Interface definitions ---
TerminalClient_SynchronousProxy::TerminalClient_SynchronousProxy(
      mojo::internal::SynchronousConnector* connector,
      mojo::internal::MessageValidatorList&& validators)
          : connector_(connector), validators_(std::move(validators)) {
}


bool TerminalClient_SynchronousProxy::ConnectToTerminal(mojo::InterfaceHandle<mojo::files::File> in_terminal) const  {
  size_t size = sizeof(internal::TerminalClient_ConnectToTerminal_Params_Data);

  auto msg_name = static_cast<uint32_t>(internal::TerminalClient_Base::MessageOrdinals::ConnectToTerminal);
  mojo::MessageBuilder builder(msg_name, size);

  internal::TerminalClient_ConnectToTerminal_Params_Data* out_params =
      internal::TerminalClient_ConnectToTerminal_Params_Data::New(builder.buffer());
  mojo::internal::InterfaceHandleToData(in_terminal.Pass(),
                                        &out_params->terminal);
  if (!out_params->terminal.handle.is_valid()) {
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_INVALID_HANDLE, "invalid terminal in {{interface.name}}::{{method.name}}");
  }
  out_params->EncodePointersAndHandles(builder.message()->mutable_handles());
  
  if (!connector_->Write(builder.message()))
    return false;
  return true;
}
}  // namespace terminal
}  // namespace mojo

#if defined(__clang__)
#pragma clang diagnostic pop
#endif