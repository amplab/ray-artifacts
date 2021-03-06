// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_SURFACES_INTERFACES_SURFACES_MOJOM_INTERNAL_H_
#define MOJO_SERVICES_SURFACES_INTERFACES_SURFACES_MOJOM_INTERNAL_H_

#include "mojo/public/cpp/bindings/lib/bindings_internal.h"
#include "mojo/public/cpp/bindings/lib/buffer.h"
#include "mojo/public/cpp/bindings/lib/union_accessor.h"
#include "mojo/public/cpp/bindings/struct_ptr.h"
#include "mojo/public/cpp/system/buffer.h"
#include "mojo/public/cpp/system/data_pipe.h"
#include "mojo/public/cpp/system/handle.h"
#include "mojo/public/cpp/system/message_pipe.h"
#include "mojo/services/geometry/interfaces/geometry.mojom-internal.h"
#include "mojo/services/surfaces/interfaces/quads.mojom-internal.h"
#include "mojo/services/surfaces/interfaces/surface_id.mojom-internal.h"

namespace mojo {
namespace internal {
class BoundsChecker;
}
}
namespace mojo {

class Mailbox;
class MailboxHolder;
class TransferableResource;
class ReturnedResource;
class Frame;


namespace internal {

class Mailbox_Data;
class MailboxHolder_Data;
class TransferableResource_Data;
class ReturnedResource_Data;
class Frame_Data;



#pragma pack(push, 1)


class Mailbox_Data {
 public:
  static Mailbox_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::ArrayPointer<int8_t> name;

 private:
  Mailbox_Data();
  ~Mailbox_Data() = delete;
};
static_assert(sizeof(Mailbox_Data) == 16,
              "Bad sizeof(Mailbox_Data)");

class MailboxHolder_Data {
 public:
  static MailboxHolder_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StructPointer<internal::Mailbox_Data> mailbox;
  uint32_t texture_target;
  uint32_t sync_point;

 private:
  MailboxHolder_Data();
  ~MailboxHolder_Data() = delete;
};
static_assert(sizeof(MailboxHolder_Data) == 24,
              "Bad sizeof(MailboxHolder_Data)");

class TransferableResource_Data {
 public:
  static TransferableResource_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  uint32_t id;
  int32_t format;
  uint32_t filter;
  uint8_t is_repeated : 1;
  uint8_t is_software : 1;
  uint8_t pad4_[3];
  mojo::internal::StructPointer<mojo::internal::Size_Data> size;
  mojo::internal::StructPointer<internal::MailboxHolder_Data> mailbox_holder;

 private:
  TransferableResource_Data();
  ~TransferableResource_Data() = delete;
};
static_assert(sizeof(TransferableResource_Data) == 40,
              "Bad sizeof(TransferableResource_Data)");

class ReturnedResource_Data {
 public:
  static ReturnedResource_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  uint32_t id;
  uint32_t sync_point;
  int32_t count;
  uint8_t lost : 1;
  uint8_t padfinal_[3];

 private:
  ReturnedResource_Data();
  ~ReturnedResource_Data() = delete;
};
static_assert(sizeof(ReturnedResource_Data) == 24,
              "Bad sizeof(ReturnedResource_Data)");

class Frame_Data {
 public:
  static Frame_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::ArrayPointer<internal::TransferableResource_Data*> resources;
  mojo::internal::ArrayPointer<mojo::internal::Pass_Data*> passes;

 private:
  Frame_Data();
  ~Frame_Data() = delete;
};
static_assert(sizeof(Frame_Data) == 24,
              "Bad sizeof(Frame_Data)");


class ResourceReturner_ReturnResources_Params_Data {
 public:
  static ResourceReturner_ReturnResources_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::ArrayPointer<internal::ReturnedResource_Data*> resources;

 private:
  ResourceReturner_ReturnResources_Params_Data();
  ~ResourceReturner_ReturnResources_Params_Data() = delete;
};
static_assert(sizeof(ResourceReturner_ReturnResources_Params_Data) == 16,
              "Bad sizeof(ResourceReturner_ReturnResources_Params_Data)");


class Surface_GetIdNamespace_Params_Data {
 public:
  static Surface_GetIdNamespace_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;

 private:
  Surface_GetIdNamespace_Params_Data();
  ~Surface_GetIdNamespace_Params_Data() = delete;
};
static_assert(sizeof(Surface_GetIdNamespace_Params_Data) == 8,
              "Bad sizeof(Surface_GetIdNamespace_Params_Data)");

class Surface_GetIdNamespace_ResponseParams_Data {
 public:
  static Surface_GetIdNamespace_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  uint32_t id_namespace;
  uint8_t padfinal_[4];

 private:
  Surface_GetIdNamespace_ResponseParams_Data();
  ~Surface_GetIdNamespace_ResponseParams_Data() = delete;
};
static_assert(sizeof(Surface_GetIdNamespace_ResponseParams_Data) == 16,
              "Bad sizeof(Surface_GetIdNamespace_ResponseParams_Data)");


class Surface_SetResourceReturner_Params_Data {
 public:
  static Surface_SetResourceReturner_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::Interface_Data returner;

 private:
  Surface_SetResourceReturner_Params_Data();
  ~Surface_SetResourceReturner_Params_Data() = delete;
};
static_assert(sizeof(Surface_SetResourceReturner_Params_Data) == 16,
              "Bad sizeof(Surface_SetResourceReturner_Params_Data)");


class Surface_CreateSurface_Params_Data {
 public:
  static Surface_CreateSurface_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  uint32_t id_local;
  uint8_t padfinal_[4];

 private:
  Surface_CreateSurface_Params_Data();
  ~Surface_CreateSurface_Params_Data() = delete;
};
static_assert(sizeof(Surface_CreateSurface_Params_Data) == 16,
              "Bad sizeof(Surface_CreateSurface_Params_Data)");


class Surface_SubmitFrame_Params_Data {
 public:
  static Surface_SubmitFrame_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  uint32_t id_local;
  uint8_t pad0_[4];
  mojo::internal::StructPointer<internal::Frame_Data> frame;

 private:
  Surface_SubmitFrame_Params_Data();
  ~Surface_SubmitFrame_Params_Data() = delete;
};
static_assert(sizeof(Surface_SubmitFrame_Params_Data) == 24,
              "Bad sizeof(Surface_SubmitFrame_Params_Data)");

class Surface_SubmitFrame_ResponseParams_Data {
 public:
  static Surface_SubmitFrame_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;

 private:
  Surface_SubmitFrame_ResponseParams_Data();
  ~Surface_SubmitFrame_ResponseParams_Data() = delete;
};
static_assert(sizeof(Surface_SubmitFrame_ResponseParams_Data) == 8,
              "Bad sizeof(Surface_SubmitFrame_ResponseParams_Data)");


class Surface_DestroySurface_Params_Data {
 public:
  static Surface_DestroySurface_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  uint32_t id_local;
  uint8_t padfinal_[4];

 private:
  Surface_DestroySurface_Params_Data();
  ~Surface_DestroySurface_Params_Data() = delete;
};
static_assert(sizeof(Surface_DestroySurface_Params_Data) == 16,
              "Bad sizeof(Surface_DestroySurface_Params_Data)");


#pragma pack(pop)

}  // namespace internal
}  // namespace mojo

#endif  // MOJO_SERVICES_SURFACES_INTERFACES_SURFACES_MOJOM_INTERNAL_H_
