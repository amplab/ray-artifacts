// NOTE: This file was generated by the Mojo bindings generator.
#ifndef SHELL_TEST_PINGABLE_MOJOM_H_
#define SHELL_TEST_PINGABLE_MOJOM_H_

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
#include "shell/test/pingable.mojom-common.h"

// --- Interface Forward Declarations ---

using PingablePtr = mojo::InterfacePtr<Pingable>;


// --- Interface Proxies ---


class PingableProxy
    : public Pingable,
      public mojo::internal::ControlMessageProxy {
 public:
  explicit PingableProxy(mojo::MessageReceiverWithResponder* receiver);
  void Ping(
      const mojo::String& message, const PingCallback& callback
  ) override;
};


// --- Interface Stubs ---

class PingableStub : public mojo::MessageReceiverWithResponderStatus {
 public:
  PingableStub();
  ~PingableStub() override;
  void set_sink(Pingable* sink) { sink_ = sink; }
  Pingable* sink() { return sink_; }

  bool Accept(mojo::Message* message) override;
  bool AcceptWithResponder(mojo::Message* message,
      mojo::MessageReceiverWithStatus* responder) override;

 private:
  Pingable* sink_;
  mojo::internal::ControlMessageHandler control_message_handler_;
};


#endif  // SHELL_TEST_PINGABLE_MOJOM_H_