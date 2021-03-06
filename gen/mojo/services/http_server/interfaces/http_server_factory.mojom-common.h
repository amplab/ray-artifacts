// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_HTTP_SERVER_INTERFACES_HTTP_SERVER_FACTORY_MOJOM_COMMON_H_
#define MOJO_SERVICES_HTTP_SERVER_INTERFACES_HTTP_SERVER_FACTORY_MOJOM_COMMON_H_

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
#include "mojo/services/http_server/interfaces/http_server_factory.mojom-internal.h"
#include "mojo/services/http_server/interfaces/http_server.mojom-common.h"
#include "mojo/services/network/interfaces/net_address.mojom-common.h"
namespace http_server {

// --- Interface Forward Declarations ---
class HttpServerFactory;
class HttpServerFactoryRequestValidator;
class HttpServerFactory_Synchronous;

// --- Struct Forward Declarations ---

// --- Union Forward Declarations ---

// --- Enums Declarations ---

// --- Constants ---

// --- Interface declarations ---
namespace internal {
class HttpServerFactory_Base {
 public:
  static const char Name_[];
  static const uint32_t Version_ = 0;

  using RequestValidator_ = HttpServerFactoryRequestValidator;
  using ResponseValidator_ = mojo::internal::PassThroughValidator;
  using Synchronous_ = HttpServerFactory_Synchronous;
  enum class MessageOrdinals : uint32_t {
    CreateHttpServer = 0,
  };


  virtual ~HttpServerFactory_Base() {}
};

}  // namespace internal

// Async interface declaration

class HttpServerFactoryProxy;
class HttpServerFactoryStub;
class HttpServerFactory_Synchronous;

class HttpServerFactoryRequestValidator;

class HttpServerFactory : public internal::HttpServerFactory_Base {
 public:
  virtual ~HttpServerFactory() override {}

  using Proxy_ = HttpServerFactoryProxy;
  using Stub_ = HttpServerFactoryStub;
  virtual void CreateHttpServer(mojo::InterfaceRequest<http_server::HttpServer> server_request, mojo::NetAddressPtr local_address) = 0;
};

}  // namespace http_server

// --- Internal Template Specializations ---

namespace mojo {
namespace internal {

}  // internal
}  // mojo
namespace http_server {

// --- Interface Request Validators ---
class HttpServerFactoryRequestValidator
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
      

class HttpServerFactory_CreateHttpServer_Params;

using HttpServerFactory_CreateHttpServer_ParamsPtr = mojo::StructPtr<HttpServerFactory_CreateHttpServer_Params>;


size_t GetSerializedSize_(const HttpServerFactory_CreateHttpServer_Params& input);
mojo::internal::ValidationError Serialize_(
    HttpServerFactory_CreateHttpServer_Params* input,
    mojo::internal::Buffer* buffer,
    internal::HttpServerFactory_CreateHttpServer_Params_Data** output);
void Deserialize_(internal::HttpServerFactory_CreateHttpServer_Params_Data* input,
                  HttpServerFactory_CreateHttpServer_Params* output);

class HttpServerFactory_CreateHttpServer_Params {
 public:
  using Data_ = internal::HttpServerFactory_CreateHttpServer_Params_Data;

  static HttpServerFactory_CreateHttpServer_ParamsPtr New();

  template <typename U>
  static HttpServerFactory_CreateHttpServer_ParamsPtr From(const U& u) {
    return mojo::TypeConverter<HttpServerFactory_CreateHttpServer_ParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, HttpServerFactory_CreateHttpServer_Params>::Convert(*this);
  }

  HttpServerFactory_CreateHttpServer_Params();
  ~HttpServerFactory_CreateHttpServer_Params();
  
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


  bool Equals(const HttpServerFactory_CreateHttpServer_Params& other) const;

  mojo::InterfaceRequest<http_server::HttpServer> server_request;
  mojo::NetAddressPtr local_address;
};



}  // namespace http_server

#endif  // MOJO_SERVICES_HTTP_SERVER_INTERFACES_HTTP_SERVER_FACTORY_MOJOM_COMMON_H_
