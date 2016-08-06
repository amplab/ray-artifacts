// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_PUBLIC_INTERFACES_BINDINGS_SERVICE_DESCRIBER_MOJOM_INTERNAL_H_
#define MOJO_PUBLIC_INTERFACES_BINDINGS_SERVICE_DESCRIBER_MOJOM_INTERNAL_H_

#include "mojo/public/cpp/bindings/lib/bindings_internal.h"
#include "mojo/public/cpp/bindings/lib/buffer.h"
#include "mojo/public/cpp/bindings/lib/union_accessor.h"
#include "mojo/public/cpp/bindings/struct_ptr.h"
#include "mojo/public/cpp/system/buffer.h"
#include "mojo/public/cpp/system/data_pipe.h"
#include "mojo/public/cpp/system/handle.h"
#include "mojo/public/cpp/system/message_pipe.h"
#include "mojo/public/interfaces/bindings/mojom_types.mojom-internal.h"

namespace mojo {
namespace internal {
class BoundsChecker;
}
}
namespace mojo {
namespace bindings {
namespace types {



namespace internal {




#pragma pack(push, 1)



class ServiceDescriber_DescribeService_Params_Data {
 public:
  static ServiceDescriber_DescribeService_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StringPointer interface_name;
  mojo::MessagePipeHandle description_request;
  uint8_t padfinal_[4];

 private:
  ServiceDescriber_DescribeService_Params_Data();
  ~ServiceDescriber_DescribeService_Params_Data() = delete;
};
static_assert(sizeof(ServiceDescriber_DescribeService_Params_Data) == 24,
              "Bad sizeof(ServiceDescriber_DescribeService_Params_Data)");


class ServiceDescription_GetTopLevelInterface_Params_Data {
 public:
  static ServiceDescription_GetTopLevelInterface_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;

 private:
  ServiceDescription_GetTopLevelInterface_Params_Data();
  ~ServiceDescription_GetTopLevelInterface_Params_Data() = delete;
};
static_assert(sizeof(ServiceDescription_GetTopLevelInterface_Params_Data) == 8,
              "Bad sizeof(ServiceDescription_GetTopLevelInterface_Params_Data)");

class ServiceDescription_GetTopLevelInterface_ResponseParams_Data {
 public:
  static ServiceDescription_GetTopLevelInterface_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StructPointer<mojo::bindings::types::internal::MojomInterface_Data> mojomInterface;

 private:
  ServiceDescription_GetTopLevelInterface_ResponseParams_Data();
  ~ServiceDescription_GetTopLevelInterface_ResponseParams_Data() = delete;
};
static_assert(sizeof(ServiceDescription_GetTopLevelInterface_ResponseParams_Data) == 16,
              "Bad sizeof(ServiceDescription_GetTopLevelInterface_ResponseParams_Data)");


class ServiceDescription_GetTypeDefinition_Params_Data {
 public:
  static ServiceDescription_GetTypeDefinition_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StringPointer type_key;

 private:
  ServiceDescription_GetTypeDefinition_Params_Data();
  ~ServiceDescription_GetTypeDefinition_Params_Data() = delete;
};
static_assert(sizeof(ServiceDescription_GetTypeDefinition_Params_Data) == 16,
              "Bad sizeof(ServiceDescription_GetTypeDefinition_Params_Data)");

class ServiceDescription_GetTypeDefinition_ResponseParams_Data {
 public:
  static ServiceDescription_GetTypeDefinition_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::bindings::types::internal::UserDefinedType_Data type;

 private:
  ServiceDescription_GetTypeDefinition_ResponseParams_Data();
  ~ServiceDescription_GetTypeDefinition_ResponseParams_Data() = delete;
};
static_assert(sizeof(ServiceDescription_GetTypeDefinition_ResponseParams_Data) == 24,
              "Bad sizeof(ServiceDescription_GetTypeDefinition_ResponseParams_Data)");


class ServiceDescription_GetAllTypeDefinitions_Params_Data {
 public:
  static ServiceDescription_GetAllTypeDefinitions_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;

 private:
  ServiceDescription_GetAllTypeDefinitions_Params_Data();
  ~ServiceDescription_GetAllTypeDefinitions_Params_Data() = delete;
};
static_assert(sizeof(ServiceDescription_GetAllTypeDefinitions_Params_Data) == 8,
              "Bad sizeof(ServiceDescription_GetAllTypeDefinitions_Params_Data)");

class ServiceDescription_GetAllTypeDefinitions_ResponseParams_Data {
 public:
  static ServiceDescription_GetAllTypeDefinitions_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StructPointer<mojo::internal::Map_Data<mojo::internal::String_Data*, mojo::bindings::types::internal::UserDefinedType_Data>> definitions;

 private:
  ServiceDescription_GetAllTypeDefinitions_ResponseParams_Data();
  ~ServiceDescription_GetAllTypeDefinitions_ResponseParams_Data() = delete;
};
static_assert(sizeof(ServiceDescription_GetAllTypeDefinitions_ResponseParams_Data) == 16,
              "Bad sizeof(ServiceDescription_GetAllTypeDefinitions_ResponseParams_Data)");


#pragma pack(pop)

}  // namespace internal
}  // namespace types
}  // namespace bindings
}  // namespace mojo

#endif  // MOJO_PUBLIC_INTERFACES_BINDINGS_SERVICE_DESCRIBER_MOJOM_INTERNAL_H_