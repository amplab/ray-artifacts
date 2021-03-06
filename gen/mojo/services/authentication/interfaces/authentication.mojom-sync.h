// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_AUTHENTICATION_INTERFACES_AUTHENTICATION_MOJOM_SYNC_H_
#define MOJO_SERVICES_AUTHENTICATION_INTERFACES_AUTHENTICATION_MOJOM_SYNC_H_

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
#include "mojo/services/authentication/interfaces/authentication.mojom-internal.h"
#include "mojo/services/authentication/interfaces/authentication.mojom-common.h"


namespace authentication {

// --- Synchronous interface declaration ---

class AuthenticationService_SynchronousProxy;
class AuthenticationService_Synchronous
  : public internal::AuthenticationService_Base {
 public:
  virtual ~AuthenticationService_Synchronous() override {}
  
  using Proxy_ = AuthenticationService_SynchronousProxy;
  virtual bool SelectAccount(
      bool in_return_last_selected, mojo::String* out_username, mojo::String* out_error)= 0;
  virtual bool GetOAuth2Token(
      const mojo::String& in_username, mojo::Array<mojo::String> in_scopes, mojo::String* out_token, mojo::String* out_error)= 0;
  virtual bool ClearOAuth2Token(
      const mojo::String& in_token)const= 0;
};

class AuthenticationService_SynchronousProxy
    : public AuthenticationService_Synchronous {
 public:
  explicit AuthenticationService_SynchronousProxy(
      mojo::internal::SynchronousConnector* connector,
      mojo::internal::MessageValidatorList&& validators);
  bool SelectAccount(bool in_return_last_selected, mojo::String* out_username, mojo::String* out_error) override;
  bool GetOAuth2Token(const mojo::String& in_username, mojo::Array<mojo::String> in_scopes, mojo::String* out_token, mojo::String* out_error) override;
  bool ClearOAuth2Token(const mojo::String& in_token) const  override;

 private:
  // |connector_| is passed to us, and is not owned by us.
  mojo::internal::SynchronousConnector* const connector_;
  mojo::internal::MessageValidatorList const validators_;
};

}  // namespace authentication

#endif  // MOJO_SERVICES_AUTHENTICATION_INTERFACES_AUTHENTICATION_MOJOM_SYNC_H_
