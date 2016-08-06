// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_HTTP_SERVER_INTERFACES_HTTP_SERVER_MOJOM_INTERNAL_H_
#define MOJO_SERVICES_HTTP_SERVER_INTERFACES_HTTP_SERVER_MOJOM_INTERNAL_H_

#include "mojo/public/cpp/bindings/lib/bindings_internal.h"
#include "mojo/public/cpp/bindings/lib/buffer.h"
#include "mojo/public/cpp/bindings/lib/union_accessor.h"
#include "mojo/public/cpp/bindings/struct_ptr.h"
#include "mojo/public/cpp/system/buffer.h"
#include "mojo/public/cpp/system/data_pipe.h"
#include "mojo/public/cpp/system/handle.h"
#include "mojo/public/cpp/system/message_pipe.h"
#include "mojo/services/http_server/interfaces/http_request.mojom-internal.h"
#include "mojo/services/http_server/interfaces/http_response.mojom-internal.h"

namespace mojo {
namespace internal {
class BoundsChecker;
}
}
namespace http_server {



namespace internal {




#pragma pack(push, 1)



class HttpServer_SetHandler_Params_Data {
 public:
  static HttpServer_SetHandler_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StringPointer pattern;
  mojo::internal::Interface_Data handler;

 private:
  HttpServer_SetHandler_Params_Data();
  ~HttpServer_SetHandler_Params_Data() = delete;
};
static_assert(sizeof(HttpServer_SetHandler_Params_Data) == 24,
              "Bad sizeof(HttpServer_SetHandler_Params_Data)");

class HttpServer_SetHandler_ResponseParams_Data {
 public:
  static HttpServer_SetHandler_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  uint8_t success : 1;
  uint8_t padfinal_[7];

 private:
  HttpServer_SetHandler_ResponseParams_Data();
  ~HttpServer_SetHandler_ResponseParams_Data() = delete;
};
static_assert(sizeof(HttpServer_SetHandler_ResponseParams_Data) == 16,
              "Bad sizeof(HttpServer_SetHandler_ResponseParams_Data)");


class HttpServer_GetPort_Params_Data {
 public:
  static HttpServer_GetPort_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;

 private:
  HttpServer_GetPort_Params_Data();
  ~HttpServer_GetPort_Params_Data() = delete;
};
static_assert(sizeof(HttpServer_GetPort_Params_Data) == 8,
              "Bad sizeof(HttpServer_GetPort_Params_Data)");

class HttpServer_GetPort_ResponseParams_Data {
 public:
  static HttpServer_GetPort_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  uint16_t port;
  uint8_t padfinal_[6];

 private:
  HttpServer_GetPort_ResponseParams_Data();
  ~HttpServer_GetPort_ResponseParams_Data() = delete;
};
static_assert(sizeof(HttpServer_GetPort_ResponseParams_Data) == 16,
              "Bad sizeof(HttpServer_GetPort_ResponseParams_Data)");


class HttpHandler_HandleRequest_Params_Data {
 public:
  static HttpHandler_HandleRequest_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StructPointer<http_server::internal::HttpRequest_Data> request;

 private:
  HttpHandler_HandleRequest_Params_Data();
  ~HttpHandler_HandleRequest_Params_Data() = delete;
};
static_assert(sizeof(HttpHandler_HandleRequest_Params_Data) == 16,
              "Bad sizeof(HttpHandler_HandleRequest_Params_Data)");

class HttpHandler_HandleRequest_ResponseParams_Data {
 public:
  static HttpHandler_HandleRequest_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StructPointer<http_server::internal::HttpResponse_Data> response;

 private:
  HttpHandler_HandleRequest_ResponseParams_Data();
  ~HttpHandler_HandleRequest_ResponseParams_Data() = delete;
};
static_assert(sizeof(HttpHandler_HandleRequest_ResponseParams_Data) == 16,
              "Bad sizeof(HttpHandler_HandleRequest_ResponseParams_Data)");


#pragma pack(pop)

}  // namespace internal
}  // namespace http_server

#endif  // MOJO_SERVICES_HTTP_SERVER_INTERFACES_HTTP_SERVER_MOJOM_INTERNAL_H_