// NOTE: This file was generated by the Mojo bindings generator.
#ifndef SHELL_CHILD_CONTROLLER_MOJOM_SYNC_H_
#define SHELL_CHILD_CONTROLLER_MOJOM_SYNC_H_

#include <stdint.h>

#include "mojo/public/cpp/bindings/array.h"
#include "mojo/public/cpp/bindings/callback.h"
#include "mojo/public/cpp/bindings/interface_handle.h"
#include "mojo/public/cpp/bindings/interface_request.h"
#include "mojo/public/cpp/bindings/map.h"
#include "mojo/public/cpp/bindings/message_validator.h"
#include "mojo/public/cpp/bindings/string.h"
#include "mojo/public/cpp/bindings/struct_ptr.h"
#include "mojo/public/cpp/bindings/lib/synchronous_connector.h"
#include "shell/child_controller.mojom-internal.h"
#include "shell/child_controller.mojom-common.h"
#include "mojo/public/interfaces/application/application.mojom.h"


namespace shell {

// --- Synchronous interface declaration ---

class ChildController_SynchronousProxy;
class ChildController_Synchronous
  : public internal::ChildController_Base {
 public:
  virtual ~ChildController_Synchronous() override {}
  
  using Proxy_ = ChildController_SynchronousProxy;
  virtual bool StartApp(
      const mojo::String& in_app_path, mojo::InterfaceRequest<mojo::Application> in_application_request, int32_t* out_result)= 0;
  virtual bool ExitNow(
      int32_t in_exit_code)const= 0;
};

class ChildController_SynchronousProxy
    : public ChildController_Synchronous {
 public:
  explicit ChildController_SynchronousProxy(
      mojo::internal::SynchronousConnector* connector,
      mojo::internal::MessageValidatorList&& validators);
  bool StartApp(const mojo::String& in_app_path, mojo::InterfaceRequest<mojo::Application> in_application_request, int32_t* out_result) override;
  bool ExitNow(int32_t in_exit_code) const  override;

 private:
  // |connector_| is passed to us, and is not owned by us.
  mojo::internal::SynchronousConnector* const connector_;
  mojo::internal::MessageValidatorList const validators_;
};

}  // namespace shell

#endif  // SHELL_CHILD_CONTROLLER_MOJOM_SYNC_H_
