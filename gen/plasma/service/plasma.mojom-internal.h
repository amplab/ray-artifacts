// NOTE: This file was generated by the Mojo bindings generator.
#ifndef PLASMA_SERVICE_PLASMA_MOJOM_INTERNAL_H_
#define PLASMA_SERVICE_PLASMA_MOJOM_INTERNAL_H_

#include "mojo/public/cpp/bindings/lib/bindings_internal.h"
#include "mojo/public/cpp/bindings/lib/buffer.h"
#include "mojo/public/cpp/bindings/lib/union_accessor.h"
#include "mojo/public/cpp/bindings/struct_ptr.h"
#include "mojo/public/cpp/system/buffer.h"
#include "mojo/public/cpp/system/data_pipe.h"
#include "mojo/public/cpp/system/handle.h"
#include "mojo/public/cpp/system/message_pipe.h"

namespace mojo {
namespace internal {
class BoundsChecker;
}
}
namespace plasma {
namespace service {

class ObjectInfo;


namespace internal {

class ObjectInfo_Data;



#pragma pack(push, 1)


class ObjectInfo_Data {
 public:
  static ObjectInfo_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StringPointer name;
  uint64_t size;
  int64_t create_time;
  int64_t construct_duration;
  int64_t creator_id;

 private:
  ObjectInfo_Data();
  ~ObjectInfo_Data() = delete;
};
static_assert(sizeof(ObjectInfo_Data) == 48,
              "Bad sizeof(ObjectInfo_Data)");


class Plasma_CreateObject_Params_Data {
 public:
  static Plasma_CreateObject_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StringPointer object_id;
  uint64_t size;
  mojo::internal::StringPointer name;
  int64_t creator_id;

 private:
  Plasma_CreateObject_Params_Data();
  ~Plasma_CreateObject_Params_Data() = delete;
};
static_assert(sizeof(Plasma_CreateObject_Params_Data) == 40,
              "Bad sizeof(Plasma_CreateObject_Params_Data)");

class Plasma_CreateObject_ResponseParams_Data {
 public:
  static Plasma_CreateObject_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::SharedBufferHandle buffer;
  uint8_t padfinal_[4];

 private:
  Plasma_CreateObject_ResponseParams_Data();
  ~Plasma_CreateObject_ResponseParams_Data() = delete;
};
static_assert(sizeof(Plasma_CreateObject_ResponseParams_Data) == 16,
              "Bad sizeof(Plasma_CreateObject_ResponseParams_Data)");


class Plasma_ResizeObject_Params_Data {
 public:
  static Plasma_ResizeObject_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StringPointer object_id;
  uint64_t new_size;

 private:
  Plasma_ResizeObject_Params_Data();
  ~Plasma_ResizeObject_Params_Data() = delete;
};
static_assert(sizeof(Plasma_ResizeObject_Params_Data) == 24,
              "Bad sizeof(Plasma_ResizeObject_Params_Data)");

class Plasma_ResizeObject_ResponseParams_Data {
 public:
  static Plasma_ResizeObject_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::SharedBufferHandle buffer;
  uint8_t padfinal_[4];

 private:
  Plasma_ResizeObject_ResponseParams_Data();
  ~Plasma_ResizeObject_ResponseParams_Data() = delete;
};
static_assert(sizeof(Plasma_ResizeObject_ResponseParams_Data) == 16,
              "Bad sizeof(Plasma_ResizeObject_ResponseParams_Data)");


class Plasma_SealObject_Params_Data {
 public:
  static Plasma_SealObject_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StringPointer object_id;

 private:
  Plasma_SealObject_Params_Data();
  ~Plasma_SealObject_Params_Data() = delete;
};
static_assert(sizeof(Plasma_SealObject_Params_Data) == 16,
              "Bad sizeof(Plasma_SealObject_Params_Data)");


class Plasma_GetObject_Params_Data {
 public:
  static Plasma_GetObject_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StringPointer object_id;
  uint8_t block : 1;
  uint8_t padfinal_[7];

 private:
  Plasma_GetObject_Params_Data();
  ~Plasma_GetObject_Params_Data() = delete;
};
static_assert(sizeof(Plasma_GetObject_Params_Data) == 24,
              "Bad sizeof(Plasma_GetObject_Params_Data)");

class Plasma_GetObject_ResponseParams_Data {
 public:
  static Plasma_GetObject_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::SharedBufferHandle buffer;
  uint8_t pad0_[4];
  uint64_t size;

 private:
  Plasma_GetObject_ResponseParams_Data();
  ~Plasma_GetObject_ResponseParams_Data() = delete;
};
static_assert(sizeof(Plasma_GetObject_ResponseParams_Data) == 24,
              "Bad sizeof(Plasma_GetObject_ResponseParams_Data)");


class Plasma_ListObjects_Params_Data {
 public:
  static Plasma_ListObjects_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;

 private:
  Plasma_ListObjects_Params_Data();
  ~Plasma_ListObjects_Params_Data() = delete;
};
static_assert(sizeof(Plasma_ListObjects_Params_Data) == 8,
              "Bad sizeof(Plasma_ListObjects_Params_Data)");

class Plasma_ListObjects_ResponseParams_Data {
 public:
  static Plasma_ListObjects_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::ArrayPointer<internal::ObjectInfo_Data*> info;

 private:
  Plasma_ListObjects_ResponseParams_Data();
  ~Plasma_ListObjects_ResponseParams_Data() = delete;
};
static_assert(sizeof(Plasma_ListObjects_ResponseParams_Data) == 16,
              "Bad sizeof(Plasma_ListObjects_ResponseParams_Data)");


#pragma pack(pop)

}  // namespace internal
}  // namespace service
}  // namespace plasma

#endif  // PLASMA_SERVICE_PLASMA_MOJOM_INTERNAL_H_