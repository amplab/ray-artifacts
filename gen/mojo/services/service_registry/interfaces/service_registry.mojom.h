// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_SERVICE_REGISTRY_INTERFACES_SERVICE_REGISTRY_MOJOM_H_
#define MOJO_SERVICES_SERVICE_REGISTRY_INTERFACES_SERVICE_REGISTRY_MOJOM_H_

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
#include "mojo/services/service_registry/interfaces/service_registry.mojom-common.h"
#include "mojo/public/interfaces/application/service_provider.mojom.h"
namespace mojo {

// --- Interface Forward Declarations ---

using ServiceRegistryPtr = mojo::InterfacePtr<ServiceRegistry>;


// --- Interface Proxies ---


class ServiceRegistryProxy
    : public ServiceRegistry,
      public mojo::internal::ControlMessageProxy {
 public:
  explicit ServiceRegistryProxy(mojo::MessageReceiverWithResponder* receiver);
  void AddServices(
      mojo::Array<mojo::String> interface_names, mojo::InterfaceHandle<mojo::ServiceProvider> service_provider
  ) override;
};


// --- Interface Stubs ---

class ServiceRegistryStub : public mojo::MessageReceiverWithResponderStatus {
 public:
  ServiceRegistryStub();
  ~ServiceRegistryStub() override;
  void set_sink(ServiceRegistry* sink) { sink_ = sink; }
  ServiceRegistry* sink() { return sink_; }

  bool Accept(mojo::Message* message) override;
  bool AcceptWithResponder(mojo::Message* message,
      mojo::MessageReceiverWithStatus* responder) override;

 private:
  ServiceRegistry* sink_;
  mojo::internal::ControlMessageHandler control_message_handler_;
};

}  // namespace mojo

#endif  // MOJO_SERVICES_SERVICE_REGISTRY_INTERFACES_SERVICE_REGISTRY_MOJOM_H_