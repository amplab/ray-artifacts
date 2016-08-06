// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_NETWORK_INTERFACES_NET_ADDRESS_MOJOM_INTERNAL_H_
#define MOJO_SERVICES_NETWORK_INTERFACES_NET_ADDRESS_MOJOM_INTERNAL_H_

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

class NetAddressIPv4;
class NetAddressIPv6;
class NetAddress;


namespace internal {

class NetAddressIPv4_Data;
class NetAddressIPv6_Data;
class NetAddress_Data;



#pragma pack(push, 1)


class NetAddressIPv4_Data {
 public:
  static NetAddressIPv4_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  uint16_t port;
  uint8_t pad0_[6];
  mojo::internal::ArrayPointer<uint8_t> addr;

 private:
  NetAddressIPv4_Data();
  ~NetAddressIPv4_Data() = delete;
};
static_assert(sizeof(NetAddressIPv4_Data) == 24,
              "Bad sizeof(NetAddressIPv4_Data)");

class NetAddressIPv6_Data {
 public:
  static NetAddressIPv6_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  uint16_t port;
  uint8_t pad0_[6];
  mojo::internal::ArrayPointer<uint8_t> addr;

 private:
  NetAddressIPv6_Data();
  ~NetAddressIPv6_Data() = delete;
};
static_assert(sizeof(NetAddressIPv6_Data) == 24,
              "Bad sizeof(NetAddressIPv6_Data)");

class NetAddress_Data {
 public:
  static NetAddress_Data* New(mojo::internal::Buffer* buf);

  static mojo::internal::ValidationError Validate(
      const void* data,
      mojo::internal::BoundsChecker* bounds_checker,
      std::string* err);

  void EncodePointersAndHandles(std::vector<mojo::Handle>* handles);
  void DecodePointersAndHandles(std::vector<mojo::Handle>* handles);

  mojo::internal::StructHeader header_;
  int32_t family;
  uint8_t pad0_[4];
  mojo::internal::StructPointer<internal::NetAddressIPv4_Data> ipv4;
  mojo::internal::StructPointer<internal::NetAddressIPv6_Data> ipv6;

 private:
  NetAddress_Data();
  ~NetAddress_Data() = delete;
};
static_assert(sizeof(NetAddress_Data) == 32,
              "Bad sizeof(NetAddress_Data)");


#pragma pack(pop)

}  // namespace internal
}  // namespace mojo

#endif  // MOJO_SERVICES_NETWORK_INTERFACES_NET_ADDRESS_MOJOM_INTERNAL_H_