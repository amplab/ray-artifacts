// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_NETWORK_INTERFACES_HTTP_SERVER_MOJOM_COMMON_H_
#define MOJO_SERVICES_NETWORK_INTERFACES_HTTP_SERVER_MOJOM_COMMON_H_

#include <stdint.h>
#include <iosfwd>

#include "mojo/public/cpp/bindings/array.h"
#include "mojo/public/cpp/bindings/callback.h"
#include "mojo/public/cpp/bindings/interface_handle.h"
#include "mojo/public/cpp/bindings/interface_request.h"
#include "mojo/public/cpp/bindings/map.h"
#include "mojo/public/cpp/bindings/message_validator.h"
#include "mojo/public/cpp/bindings/string.h"
#include "mojo/public/cpp/bindings/struct_ptr.h"
#include "mojo/public/cpp/system/buffer.h"
#include "mojo/public/cpp/system/data_pipe.h"
#include "mojo/public/cpp/system/handle.h"
#include "mojo/public/cpp/system/message_pipe.h"
#include "mojo/services/network/interfaces/http_server.mojom-internal.h"
#include "mojo/services/network/interfaces/http_connection.mojom-common.h"
namespace mojo {

// --- Interface Forward Declarations ---
class HttpServerDelegate;
class HttpServerDelegateRequestValidator;
class HttpServerDelegate_Synchronous;

// --- Struct Forward Declarations ---

// --- Union Forward Declarations ---

// --- Enums Declarations ---

// --- Constants ---

// --- Interface declarations ---
namespace internal {
class HttpServerDelegate_Base {
 public:
  static const uint32_t Version_ = 0;

  using RequestValidator_ = HttpServerDelegateRequestValidator;
  using ResponseValidator_ = mojo::internal::PassThroughValidator;
  using Synchronous_ = HttpServerDelegate_Synchronous;
  enum class MessageOrdinals : uint32_t {
    OnConnected = 0,
  };


  virtual ~HttpServerDelegate_Base() {}
};

}  // namespace internal

// Async interface declaration

class HttpServerDelegateProxy;
class HttpServerDelegateStub;
class HttpServerDelegate_Synchronous;

class HttpServerDelegateRequestValidator;

class HttpServerDelegate : public internal::HttpServerDelegate_Base {
 public:
  virtual ~HttpServerDelegate() override {}

  using Proxy_ = HttpServerDelegateProxy;
  using Stub_ = HttpServerDelegateStub;
  virtual void OnConnected(mojo::InterfaceHandle<mojo::HttpConnection> connection, mojo::InterfaceRequest<mojo::HttpConnectionDelegate> delegate) = 0;
};

}  // namespace mojo

// --- Internal Template Specializations ---

namespace mojo {
namespace internal {

}  // internal
}  // mojo
namespace mojo {

// --- Interface Request Validators ---
class HttpServerDelegateRequestValidator
    : public mojo::internal::MessageValidator {
 public:
  mojo::internal::ValidationError Validate(const mojo::Message* message,
                                           std::string* err) override;
};


// --- Interface Response Validators ---

// --- Interface enum operators ---

// --- Unions ---
// Unions must be declared first because they can be members of structs.

// --- Inlined structs ---

// --- Non-inlined structs ---

// --- Struct serialization helpers ---

// --- Union serialization helpers ---

// --- Request and response parameter structs for Interface methods ---
      

class HttpServerDelegate_OnConnected_Params;

using HttpServerDelegate_OnConnected_ParamsPtr = mojo::StructPtr<HttpServerDelegate_OnConnected_Params>;


size_t GetSerializedSize_(const HttpServerDelegate_OnConnected_Params& input);
mojo::internal::ValidationError Serialize_(
    HttpServerDelegate_OnConnected_Params* input,
    mojo::internal::Buffer* buffer,
    internal::HttpServerDelegate_OnConnected_Params_Data** output);
void Deserialize_(internal::HttpServerDelegate_OnConnected_Params_Data* input,
                  HttpServerDelegate_OnConnected_Params* output);

class HttpServerDelegate_OnConnected_Params {
 public:
  using Data_ = internal::HttpServerDelegate_OnConnected_Params_Data;

  static HttpServerDelegate_OnConnected_ParamsPtr New();

  template <typename U>
  static HttpServerDelegate_OnConnected_ParamsPtr From(const U& u) {
    return mojo::TypeConverter<HttpServerDelegate_OnConnected_ParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, HttpServerDelegate_OnConnected_Params>::Convert(*this);
  }

  HttpServerDelegate_OnConnected_Params();
  ~HttpServerDelegate_OnConnected_Params();
  
  // Returns the number of bytes it would take to serialize this struct's data.
  size_t GetSerializedSize() const;

  // Returns true on successful serialization. On failure, part of the data may
  // be serialized, until the point of failure. This API does not support
  // serializing handles. If not null, |bytes_written| is set to the number of
  // bytes written to |buf|, even if this function return false. 
  //
  // TODO(vardhan): For now, we return true for success. Should we define a
  // public error type for serialization? Should we open up
  // internal::ValidationError?
  bool Serialize(void* buf, size_t buf_size, size_t* bytes_written = nullptr);

  // Deserializes the given |buf| of size |buf_size| representing a serialized
  // version of this struct. The buffer is validated before it is deserialized.
  // Returns true on successful deserialization.
  // TODO(vardhan): Recover the validation error if there is one?
  bool Deserialize(void* buf, size_t buf_size);

  // Deserializes the given |buf| representing a serialized version of this
  // struct. The buffer is NOT validated before it is deserialized, so the user
  // must be confident of its validity and that |buf| points to enough data to
  // finish deserializing.
  void DeserializeWithoutValidation(void* buf);


  bool Equals(const HttpServerDelegate_OnConnected_Params& other) const;

  mojo::InterfaceHandle<mojo::HttpConnection> connection;
  mojo::InterfaceRequest<mojo::HttpConnectionDelegate> delegate;
};



}  // namespace mojo

#endif  // MOJO_SERVICES_NETWORK_INTERFACES_HTTP_SERVER_MOJOM_COMMON_H_
