// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_CONTACTS_INTERFACES_CONTACTS_MOJOM_INTERNAL_H_
#define MOJO_SERVICES_CONTACTS_INTERFACES_CONTACTS_MOJOM_INTERNAL_H_

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
namespace contacts {

class Contact;


namespace internal {

class Contact_Data;



#pragma pack(push, 1)


class Contact_Data {
 public:
  static Contact_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  int64_t id;
  mojo::internal::StringPointer name;

 private:
  Contact_Data();
  ~Contact_Data() = delete;
};
static_assert(sizeof(Contact_Data) == 24,
              "Bad sizeof(Contact_Data)");


class ContactsService_GetCount_Params_Data {
 public:
  static ContactsService_GetCount_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StringPointer filter;

 private:
  ContactsService_GetCount_Params_Data();
  ~ContactsService_GetCount_Params_Data() = delete;
};
static_assert(sizeof(ContactsService_GetCount_Params_Data) == 16,
              "Bad sizeof(ContactsService_GetCount_Params_Data)");

class ContactsService_GetCount_ResponseParams_Data {
 public:
  static ContactsService_GetCount_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  uint64_t count;

 private:
  ContactsService_GetCount_ResponseParams_Data();
  ~ContactsService_GetCount_ResponseParams_Data() = delete;
};
static_assert(sizeof(ContactsService_GetCount_ResponseParams_Data) == 16,
              "Bad sizeof(ContactsService_GetCount_ResponseParams_Data)");


class ContactsService_Get_Params_Data {
 public:
  static ContactsService_Get_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StringPointer filter;
  uint32_t offset;
  uint32_t limit;

 private:
  ContactsService_Get_Params_Data();
  ~ContactsService_Get_Params_Data() = delete;
};
static_assert(sizeof(ContactsService_Get_Params_Data) == 24,
              "Bad sizeof(ContactsService_Get_Params_Data)");

class ContactsService_Get_ResponseParams_Data {
 public:
  static ContactsService_Get_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::ArrayPointer<internal::Contact_Data*> contacts;

 private:
  ContactsService_Get_ResponseParams_Data();
  ~ContactsService_Get_ResponseParams_Data() = delete;
};
static_assert(sizeof(ContactsService_Get_ResponseParams_Data) == 16,
              "Bad sizeof(ContactsService_Get_ResponseParams_Data)");


class ContactsService_GetEmails_Params_Data {
 public:
  static ContactsService_GetEmails_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  int64_t id;

 private:
  ContactsService_GetEmails_Params_Data();
  ~ContactsService_GetEmails_Params_Data() = delete;
};
static_assert(sizeof(ContactsService_GetEmails_Params_Data) == 16,
              "Bad sizeof(ContactsService_GetEmails_Params_Data)");

class ContactsService_GetEmails_ResponseParams_Data {
 public:
  static ContactsService_GetEmails_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::ArrayPointer<mojo::internal::String_Data*> emails;

 private:
  ContactsService_GetEmails_ResponseParams_Data();
  ~ContactsService_GetEmails_ResponseParams_Data() = delete;
};
static_assert(sizeof(ContactsService_GetEmails_ResponseParams_Data) == 16,
              "Bad sizeof(ContactsService_GetEmails_ResponseParams_Data)");


class ContactsService_GetPhoto_Params_Data {
 public:
  static ContactsService_GetPhoto_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  int64_t id;
  uint8_t high_resolution : 1;
  uint8_t padfinal_[7];

 private:
  ContactsService_GetPhoto_Params_Data();
  ~ContactsService_GetPhoto_Params_Data() = delete;
};
static_assert(sizeof(ContactsService_GetPhoto_Params_Data) == 24,
              "Bad sizeof(ContactsService_GetPhoto_Params_Data)");

class ContactsService_GetPhoto_ResponseParams_Data {
 public:
  static ContactsService_GetPhoto_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StringPointer photo_url;

 private:
  ContactsService_GetPhoto_ResponseParams_Data();
  ~ContactsService_GetPhoto_ResponseParams_Data() = delete;
};
static_assert(sizeof(ContactsService_GetPhoto_ResponseParams_Data) == 16,
              "Bad sizeof(ContactsService_GetPhoto_ResponseParams_Data)");


#pragma pack(pop)

}  // namespace internal
}  // namespace contacts

#endif  // MOJO_SERVICES_CONTACTS_INTERFACES_CONTACTS_MOJOM_INTERNAL_H_