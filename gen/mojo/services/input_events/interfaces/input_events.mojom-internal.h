// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_INPUT_EVENTS_INTERFACES_INPUT_EVENTS_MOJOM_INTERNAL_H_
#define MOJO_SERVICES_INPUT_EVENTS_INTERFACES_INPUT_EVENTS_MOJOM_INTERNAL_H_

#include "mojo/public/cpp/bindings/lib/bindings_internal.h"
#include "mojo/public/cpp/bindings/lib/buffer.h"
#include "mojo/public/cpp/bindings/lib/union_accessor.h"
#include "mojo/public/cpp/bindings/struct_ptr.h"
#include "mojo/public/cpp/system/buffer.h"
#include "mojo/public/cpp/system/data_pipe.h"
#include "mojo/public/cpp/system/handle.h"
#include "mojo/public/cpp/system/message_pipe.h"
#include "mojo/services/geometry/interfaces/geometry.mojom-internal.h"
#include "mojo/services/input_events/interfaces/input_event_constants.mojom-internal.h"
#include "mojo/services/input_events/interfaces/input_key_codes.mojom-internal.h"

namespace mojo {
namespace internal {
class BoundsChecker;
}
}
namespace mojo {

class KeyData;
class PointerData;
class Event;


namespace internal {

class KeyData_Data;
class PointerData_Data;
class Event_Data;



#pragma pack(push, 1)


class KeyData_Data {
 public:
  static KeyData_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  int32_t key_code;
  uint8_t is_char : 1;
  uint8_t pad1_[1];
  uint16_t character;
  int32_t windows_key_code;
  int32_t native_key_code;
  uint16_t text;
  uint16_t unmodified_text;
  uint8_t padfinal_[4];

 private:
  KeyData_Data();
  ~KeyData_Data() = delete;
};
static_assert(sizeof(KeyData_Data) == 32,
              "Bad sizeof(KeyData_Data)");

class PointerData_Data {
 public:
  static PointerData_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  int32_t pointer_id;
  int32_t kind;
  float x;
  float y;
  float screen_x;
  float screen_y;
  float pressure;
  float radius_major;
  float radius_minor;
  float orientation;
  float horizontal_wheel;
  float vertical_wheel;

 private:
  PointerData_Data();
  ~PointerData_Data() = delete;
};
static_assert(sizeof(PointerData_Data) == 56,
              "Bad sizeof(PointerData_Data)");

class Event_Data {
 public:
  static Event_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  int32_t action;
  int32_t flags;
  int64_t time_stamp;
  mojo::internal::StructPointer<internal::KeyData_Data> key_data;
  mojo::internal::StructPointer<internal::PointerData_Data> pointer_data;

 private:
  Event_Data();
  ~Event_Data() = delete;
};
static_assert(sizeof(Event_Data) == 40,
              "Bad sizeof(Event_Data)");


#pragma pack(pop)

}  // namespace internal
}  // namespace mojo

#endif  // MOJO_SERVICES_INPUT_EVENTS_INTERFACES_INPUT_EVENTS_MOJOM_INTERNAL_H_
