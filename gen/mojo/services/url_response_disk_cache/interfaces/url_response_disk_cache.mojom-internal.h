// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_URL_RESPONSE_DISK_CACHE_INTERFACES_URL_RESPONSE_DISK_CACHE_MOJOM_INTERNAL_H_
#define MOJO_SERVICES_URL_RESPONSE_DISK_CACHE_INTERFACES_URL_RESPONSE_DISK_CACHE_MOJOM_INTERNAL_H_

#include "mojo/public/cpp/bindings/lib/bindings_internal.h"
#include "mojo/public/cpp/bindings/lib/buffer.h"
#include "mojo/public/cpp/bindings/lib/union_accessor.h"
#include "mojo/public/cpp/bindings/struct_ptr.h"
#include "mojo/public/cpp/system/buffer.h"
#include "mojo/public/cpp/system/data_pipe.h"
#include "mojo/public/cpp/system/handle.h"
#include "mojo/public/cpp/system/message_pipe.h"
#include "mojo/public/interfaces/network/url_response.mojom-internal.h"

namespace mojo {
namespace internal {
class BoundsChecker;
}
}
namespace mojo {



namespace internal {




#pragma pack(push, 1)



class URLResponseDiskCache_Get_Params_Data {
 public:
  static URLResponseDiskCache_Get_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StringPointer url;

 private:
  URLResponseDiskCache_Get_Params_Data();
  ~URLResponseDiskCache_Get_Params_Data() = delete;
};
static_assert(sizeof(URLResponseDiskCache_Get_Params_Data) == 16,
              "Bad sizeof(URLResponseDiskCache_Get_Params_Data)");

class URLResponseDiskCache_Get_ResponseParams_Data {
 public:
  static URLResponseDiskCache_Get_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StructPointer<mojo::internal::URLResponse_Data> response;
  mojo::internal::ArrayPointer<uint8_t> file_path;
  mojo::internal::ArrayPointer<uint8_t> cache_dir_path;

 private:
  URLResponseDiskCache_Get_ResponseParams_Data();
  ~URLResponseDiskCache_Get_ResponseParams_Data() = delete;
};
static_assert(sizeof(URLResponseDiskCache_Get_ResponseParams_Data) == 32,
              "Bad sizeof(URLResponseDiskCache_Get_ResponseParams_Data)");


class URLResponseDiskCache_Validate_Params_Data {
 public:
  static URLResponseDiskCache_Validate_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StringPointer url;

 private:
  URLResponseDiskCache_Validate_Params_Data();
  ~URLResponseDiskCache_Validate_Params_Data() = delete;
};
static_assert(sizeof(URLResponseDiskCache_Validate_Params_Data) == 16,
              "Bad sizeof(URLResponseDiskCache_Validate_Params_Data)");


class URLResponseDiskCache_Update_Params_Data {
 public:
  static URLResponseDiskCache_Update_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StructPointer<mojo::internal::URLResponse_Data> response;

 private:
  URLResponseDiskCache_Update_Params_Data();
  ~URLResponseDiskCache_Update_Params_Data() = delete;
};
static_assert(sizeof(URLResponseDiskCache_Update_Params_Data) == 16,
              "Bad sizeof(URLResponseDiskCache_Update_Params_Data)");


class URLResponseDiskCache_UpdateAndGet_Params_Data {
 public:
  static URLResponseDiskCache_UpdateAndGet_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StructPointer<mojo::internal::URLResponse_Data> response;

 private:
  URLResponseDiskCache_UpdateAndGet_Params_Data();
  ~URLResponseDiskCache_UpdateAndGet_Params_Data() = delete;
};
static_assert(sizeof(URLResponseDiskCache_UpdateAndGet_Params_Data) == 16,
              "Bad sizeof(URLResponseDiskCache_UpdateAndGet_Params_Data)");

class URLResponseDiskCache_UpdateAndGet_ResponseParams_Data {
 public:
  static URLResponseDiskCache_UpdateAndGet_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::ArrayPointer<uint8_t> file_path;
  mojo::internal::ArrayPointer<uint8_t> cache_dir_path;

 private:
  URLResponseDiskCache_UpdateAndGet_ResponseParams_Data();
  ~URLResponseDiskCache_UpdateAndGet_ResponseParams_Data() = delete;
};
static_assert(sizeof(URLResponseDiskCache_UpdateAndGet_ResponseParams_Data) == 24,
              "Bad sizeof(URLResponseDiskCache_UpdateAndGet_ResponseParams_Data)");


class URLResponseDiskCache_UpdateAndGetExtracted_Params_Data {
 public:
  static URLResponseDiskCache_UpdateAndGetExtracted_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StructPointer<mojo::internal::URLResponse_Data> response;

 private:
  URLResponseDiskCache_UpdateAndGetExtracted_Params_Data();
  ~URLResponseDiskCache_UpdateAndGetExtracted_Params_Data() = delete;
};
static_assert(sizeof(URLResponseDiskCache_UpdateAndGetExtracted_Params_Data) == 16,
              "Bad sizeof(URLResponseDiskCache_UpdateAndGetExtracted_Params_Data)");

class URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams_Data {
 public:
  static URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::ArrayPointer<uint8_t> extracted_dir_path;
  mojo::internal::ArrayPointer<uint8_t> cache_dir_path;

 private:
  URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams_Data();
  ~URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams_Data() = delete;
};
static_assert(sizeof(URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams_Data) == 24,
              "Bad sizeof(URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams_Data)");


#pragma pack(pop)

}  // namespace internal
}  // namespace mojo

#endif  // MOJO_SERVICES_URL_RESPONSE_DISK_CACHE_INTERFACES_URL_RESPONSE_DISK_CACHE_MOJOM_INTERNAL_H_