// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_SURFACES_INTERFACES_DISPLAY_MOJOM_SYNC_H_
#define MOJO_SERVICES_SURFACES_INTERFACES_DISPLAY_MOJOM_SYNC_H_

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
#include "mojo/services/surfaces/interfaces/display.mojom-internal.h"
#include "mojo/services/surfaces/interfaces/display.mojom-common.h"
#include "mojo/services/gpu/interfaces/context_provider.mojom.h"
#include "mojo/services/gpu/interfaces/viewport_parameter_listener.mojom.h"
#include "mojo/services/surfaces/interfaces/surfaces.mojom.h"


namespace mojo {

// --- Synchronous interface declaration ---

class Display_SynchronousProxy;
class Display_Synchronous
  : public internal::Display_Base {
 public:
  virtual ~Display_Synchronous() override {}
  
  using Proxy_ = Display_SynchronousProxy;
  virtual bool SubmitFrame(
      mojo::FramePtr in_frame)= 0;
};

class Display_SynchronousProxy
    : public Display_Synchronous {
 public:
  explicit Display_SynchronousProxy(
      mojo::internal::SynchronousConnector* connector,
      mojo::internal::MessageValidatorList&& validators);
  bool SubmitFrame(mojo::FramePtr in_frame) override;

 private:
  // |connector_| is passed to us, and is not owned by us.
  mojo::internal::SynchronousConnector* const connector_;
  mojo::internal::MessageValidatorList const validators_;
};

class DisplayFactory_SynchronousProxy;
class DisplayFactory_Synchronous
  : public internal::DisplayFactory_Base {
 public:
  virtual ~DisplayFactory_Synchronous() override {}
  
  using Proxy_ = DisplayFactory_SynchronousProxy;
  virtual bool Create(
      mojo::InterfaceHandle<mojo::ContextProvider> in_context_provider, mojo::InterfaceHandle<mojo::ResourceReturner> in_returner, mojo::InterfaceRequest<Display> in_display_request)const= 0;
};

class DisplayFactory_SynchronousProxy
    : public DisplayFactory_Synchronous {
 public:
  explicit DisplayFactory_SynchronousProxy(
      mojo::internal::SynchronousConnector* connector,
      mojo::internal::MessageValidatorList&& validators);
  bool Create(mojo::InterfaceHandle<mojo::ContextProvider> in_context_provider, mojo::InterfaceHandle<mojo::ResourceReturner> in_returner, mojo::InterfaceRequest<Display> in_display_request) const  override;

 private:
  // |connector_| is passed to us, and is not owned by us.
  mojo::internal::SynchronousConnector* const connector_;
  mojo::internal::MessageValidatorList const validators_;
};

}  // namespace mojo

#endif  // MOJO_SERVICES_SURFACES_INTERFACES_DISPLAY_MOJOM_SYNC_H_
