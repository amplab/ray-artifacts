// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_PUBLIC_INTERFACES_BINDINGS_TESTS_SCOPING_MOJOM_SYNC_H_
#define MOJO_PUBLIC_INTERFACES_BINDINGS_TESTS_SCOPING_MOJOM_SYNC_H_

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
#include "mojo/public/interfaces/bindings/tests/scoping.mojom-internal.h"
#include "mojo/public/interfaces/bindings/tests/scoping.mojom-common.h"


namespace mojo {
namespace test {

// --- Synchronous interface declaration ---

class A_SynchronousProxy;
class A_Synchronous
  : public internal::A_Base {
 public:
  virtual ~A_Synchronous() override {}
  
  using Proxy_ = A_SynchronousProxy;
  virtual bool GetB(
      mojo::InterfaceRequest<B> in_b)const= 0;
};

class A_SynchronousProxy
    : public A_Synchronous {
 public:
  explicit A_SynchronousProxy(
      mojo::internal::SynchronousConnector* connector,
      mojo::internal::MessageValidatorList&& validators);
  bool GetB(mojo::InterfaceRequest<B> in_b) const  override;

 private:
  // |connector_| is passed to us, and is not owned by us.
  mojo::internal::SynchronousConnector* const connector_;
  mojo::internal::MessageValidatorList const validators_;
};

class B_SynchronousProxy;
class B_Synchronous
  : public internal::B_Base {
 public:
  virtual ~B_Synchronous() override {}
  
  using Proxy_ = B_SynchronousProxy;
  virtual bool GetC(
      mojo::InterfaceRequest<C> in_c)const= 0;
};

class B_SynchronousProxy
    : public B_Synchronous {
 public:
  explicit B_SynchronousProxy(
      mojo::internal::SynchronousConnector* connector,
      mojo::internal::MessageValidatorList&& validators);
  bool GetC(mojo::InterfaceRequest<C> in_c) const  override;

 private:
  // |connector_| is passed to us, and is not owned by us.
  mojo::internal::SynchronousConnector* const connector_;
  mojo::internal::MessageValidatorList const validators_;
};

class C_SynchronousProxy;
class C_Synchronous
  : public internal::C_Base {
 public:
  virtual ~C_Synchronous() override {}
  
  using Proxy_ = C_SynchronousProxy;
  virtual bool D(
      )const= 0;
};

class C_SynchronousProxy
    : public C_Synchronous {
 public:
  explicit C_SynchronousProxy(
      mojo::internal::SynchronousConnector* connector,
      mojo::internal::MessageValidatorList&& validators);
  bool D() const  override;

 private:
  // |connector_| is passed to us, and is not owned by us.
  mojo::internal::SynchronousConnector* const connector_;
  mojo::internal::MessageValidatorList const validators_;
};

}  // namespace test
}  // namespace mojo

#endif  // MOJO_PUBLIC_INTERFACES_BINDINGS_TESTS_SCOPING_MOJOM_SYNC_H_
