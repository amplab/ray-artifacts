// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_ASSET_BUNDLE_INTERFACES_ASSET_BUNDLE_MOJOM_INTERNAL_H_
#define MOJO_SERVICES_ASSET_BUNDLE_INTERFACES_ASSET_BUNDLE_MOJOM_INTERNAL_H_

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
namespace mojo {
namespace asset_bundle {



namespace internal {




#pragma pack(push, 1)



class AssetBundle_GetAsStream_Params_Data {
 public:
  static AssetBundle_GetAsStream_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::internal::StringPointer asset_name;

 private:
  AssetBundle_GetAsStream_Params_Data();
  ~AssetBundle_GetAsStream_Params_Data() = delete;
};
static_assert(sizeof(AssetBundle_GetAsStream_Params_Data) == 16,
              "Bad sizeof(AssetBundle_GetAsStream_Params_Data)");

class AssetBundle_GetAsStream_ResponseParams_Data {
 public:
  static AssetBundle_GetAsStream_ResponseParams_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::DataPipeConsumerHandle asset_data;
  uint8_t padfinal_[4];

 private:
  AssetBundle_GetAsStream_ResponseParams_Data();
  ~AssetBundle_GetAsStream_ResponseParams_Data() = delete;
};
static_assert(sizeof(AssetBundle_GetAsStream_ResponseParams_Data) == 16,
              "Bad sizeof(AssetBundle_GetAsStream_ResponseParams_Data)");


class AssetUnpacker_UnpackZipStream_Params_Data {
 public:
  static AssetUnpacker_UnpackZipStream_Params_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  mojo::DataPipeConsumerHandle zipped_assets;
  mojo::MessagePipeHandle asset_bundle;

 private:
  AssetUnpacker_UnpackZipStream_Params_Data();
  ~AssetUnpacker_UnpackZipStream_Params_Data() = delete;
};
static_assert(sizeof(AssetUnpacker_UnpackZipStream_Params_Data) == 16,
              "Bad sizeof(AssetUnpacker_UnpackZipStream_Params_Data)");


#pragma pack(pop)

}  // namespace internal
}  // namespace asset_bundle
}  // namespace mojo

#endif  // MOJO_SERVICES_ASSET_BUNDLE_INTERFACES_ASSET_BUNDLE_MOJOM_INTERNAL_H_
