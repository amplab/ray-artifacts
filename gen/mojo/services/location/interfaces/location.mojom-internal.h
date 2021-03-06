// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_LOCATION_INTERFACES_LOCATION_MOJOM_INTERNAL_H_
#define MOJO_SERVICES_LOCATION_INTERFACES_LOCATION_MOJOM_INTERNAL_H_

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

class Location;


namespace internal {

class Location_Data;



#pragma pack(push, 1)


class Location_Data {
 public:
  static Location_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  uint64_t time;
  uint8_t has_elapsed_real_time_nanos : 1;
  uint8_t has_altitude : 1;
  uint8_t has_speed : 1;
  uint8_t has_bearing : 1;
  uint8_t has_accuracy : 1;
  uint8_t pad5_[3];
  float speed;
  uint64_t elapsed_real_time_nanos;
  double latitude;
  double longitude;
  double altitude;
  float bearing;
  float accuracy;

 private:
  Location_Data();
  ~Location_Data() = delete;
};
static_assert(sizeof(Location_Data) == 64,
              "Bad sizeof(Location_Data)");


#pragma pack(pop)

}  // namespace internal
}  // namespace mojo

#endif  // MOJO_SERVICES_LOCATION_INTERFACES_LOCATION_MOJOM_INTERNAL_H_
