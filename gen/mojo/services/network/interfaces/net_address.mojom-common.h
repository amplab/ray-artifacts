// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_NETWORK_INTERFACES_NET_ADDRESS_MOJOM_COMMON_H_
#define MOJO_SERVICES_NETWORK_INTERFACES_NET_ADDRESS_MOJOM_COMMON_H_

#include <stdint.h>
#include <iosfwd>

#include "mojo/public/cpp/bindings/array.h"
#include "mojo/public/cpp/bindings/callback.h"
#include "mojo/public/cpp/bindings/interface_handle.h"
#include "mojo/public/cpp/bindings/interface_request.h"
#include "mojo/public/cpp/bindings/map.h"
#include "mojo/public/cpp/bindings/message_validator.h"
#include "mojo/public/cpp/bindings/string.h"
#include "mojo/public/cpp/bindings/struct_ptr.h"
#include "mojo/public/cpp/system/buffer.h"
#include "mojo/public/cpp/system/data_pipe.h"
#include "mojo/public/cpp/system/handle.h"
#include "mojo/public/cpp/system/message_pipe.h"
#include "mojo/services/network/interfaces/net_address.mojom-internal.h"
namespace mojo {

// --- Interface Forward Declarations ---

// --- Struct Forward Declarations ---
class NetAddressIPv4;

using NetAddressIPv4Ptr = mojo::StructPtr<NetAddressIPv4>;


class NetAddressIPv6;

using NetAddressIPv6Ptr = mojo::StructPtr<NetAddressIPv6>;


class NetAddress;

using NetAddressPtr = mojo::StructPtr<NetAddress>;



// --- Union Forward Declarations ---

// --- Enums Declarations ---
  
enum class NetAddressFamily : int32_t {
  UNSPECIFIED,
  IPV4,
  IPV6,
};

bool NetAddressFamily_IsValidValue(NetAddressFamily value);
  
std::ostream& operator<<(std::ostream& stream, const NetAddressFamily& val);

// --- Constants ---

// --- Interface declarations ---
}  // namespace mojo

// --- Internal Template Specializations ---

namespace mojo {
namespace internal {
template <>
struct WrapperTraits<mojo::NetAddressIPv4Ptr, true, false> {
  using DataType = mojo::internal::NetAddressIPv4_Data*;
};
template <>
struct WrapperTraits<mojo::NetAddressIPv6Ptr, true, false> {
  using DataType = mojo::internal::NetAddressIPv6_Data*;
};
template <>
struct WrapperTraits<mojo::NetAddressPtr, true, false> {
  using DataType = mojo::internal::NetAddress_Data*;
};

}  // internal
}  // mojo
namespace mojo {

// --- Interface Request Validators ---

// --- Interface Response Validators ---

// --- Interface enum operators ---

// --- Unions ---
// Unions must be declared first because they can be members of structs.

// --- Inlined structs ---

// --- Non-inlined structs ---
class NetAddressIPv4 {
 public:
  using Data_ = internal::NetAddressIPv4_Data;

  static NetAddressIPv4Ptr New();

  template <typename U>
  static NetAddressIPv4Ptr From(const U& u) {
    return mojo::TypeConverter<NetAddressIPv4Ptr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, NetAddressIPv4>::Convert(*this);
  }

  NetAddressIPv4();
  ~NetAddressIPv4();
  
  // Returns the number of bytes it would take to serialize this struct's data.
  size_t GetSerializedSize() const;

  // Returns true on successful serialization. On failure, part of the data may
  // be serialized, until the point of failure. This API does not support
  // serializing handles. If not null, |bytes_written| is set to the number of
  // bytes written to |buf|, even if this function return false. 
  //
  // TODO(vardhan): For now, we return true for success. Should we define a
  // public error type for serialization? Should we open up
  // internal::ValidationError?
  bool Serialize(void* buf, size_t buf_size, size_t* bytes_written = nullptr);

  // Deserializes the given |buf| of size |buf_size| representing a serialized
  // version of this struct. The buffer is validated before it is deserialized.
  // Returns true on successful deserialization.
  // TODO(vardhan): Recover the validation error if there is one?
  bool Deserialize(void* buf, size_t buf_size);

  // Deserializes the given |buf| representing a serialized version of this
  // struct. The buffer is NOT validated before it is deserialized, so the user
  // must be confident of its validity and that |buf| points to enough data to
  // finish deserializing.
  void DeserializeWithoutValidation(void* buf);


  NetAddressIPv4Ptr Clone() const;
  bool Equals(const NetAddressIPv4& other) const;

  uint16_t port;
  mojo::Array<uint8_t> addr;
};


class NetAddressIPv6 {
 public:
  using Data_ = internal::NetAddressIPv6_Data;

  static NetAddressIPv6Ptr New();

  template <typename U>
  static NetAddressIPv6Ptr From(const U& u) {
    return mojo::TypeConverter<NetAddressIPv6Ptr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, NetAddressIPv6>::Convert(*this);
  }

  NetAddressIPv6();
  ~NetAddressIPv6();
  
  // Returns the number of bytes it would take to serialize this struct's data.
  size_t GetSerializedSize() const;

  // Returns true on successful serialization. On failure, part of the data may
  // be serialized, until the point of failure. This API does not support
  // serializing handles. If not null, |bytes_written| is set to the number of
  // bytes written to |buf|, even if this function return false. 
  //
  // TODO(vardhan): For now, we return true for success. Should we define a
  // public error type for serialization? Should we open up
  // internal::ValidationError?
  bool Serialize(void* buf, size_t buf_size, size_t* bytes_written = nullptr);

  // Deserializes the given |buf| of size |buf_size| representing a serialized
  // version of this struct. The buffer is validated before it is deserialized.
  // Returns true on successful deserialization.
  // TODO(vardhan): Recover the validation error if there is one?
  bool Deserialize(void* buf, size_t buf_size);

  // Deserializes the given |buf| representing a serialized version of this
  // struct. The buffer is NOT validated before it is deserialized, so the user
  // must be confident of its validity and that |buf| points to enough data to
  // finish deserializing.
  void DeserializeWithoutValidation(void* buf);


  NetAddressIPv6Ptr Clone() const;
  bool Equals(const NetAddressIPv6& other) const;

  uint16_t port;
  mojo::Array<uint8_t> addr;
};


class NetAddress {
 public:
  using Data_ = internal::NetAddress_Data;

  static NetAddressPtr New();

  template <typename U>
  static NetAddressPtr From(const U& u) {
    return mojo::TypeConverter<NetAddressPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, NetAddress>::Convert(*this);
  }

  NetAddress();
  ~NetAddress();
  
  // Returns the number of bytes it would take to serialize this struct's data.
  size_t GetSerializedSize() const;

  // Returns true on successful serialization. On failure, part of the data may
  // be serialized, until the point of failure. This API does not support
  // serializing handles. If not null, |bytes_written| is set to the number of
  // bytes written to |buf|, even if this function return false. 
  //
  // TODO(vardhan): For now, we return true for success. Should we define a
  // public error type for serialization? Should we open up
  // internal::ValidationError?
  bool Serialize(void* buf, size_t buf_size, size_t* bytes_written = nullptr);

  // Deserializes the given |buf| of size |buf_size| representing a serialized
  // version of this struct. The buffer is validated before it is deserialized.
  // Returns true on successful deserialization.
  // TODO(vardhan): Recover the validation error if there is one?
  bool Deserialize(void* buf, size_t buf_size);

  // Deserializes the given |buf| representing a serialized version of this
  // struct. The buffer is NOT validated before it is deserialized, so the user
  // must be confident of its validity and that |buf| points to enough data to
  // finish deserializing.
  void DeserializeWithoutValidation(void* buf);


  NetAddressPtr Clone() const;
  bool Equals(const NetAddress& other) const;

  NetAddressFamily family;
  NetAddressIPv4Ptr ipv4;
  NetAddressIPv6Ptr ipv6;
};



// --- Struct serialization helpers ---
size_t GetSerializedSize_(const NetAddressIPv4& input);
mojo::internal::ValidationError Serialize_(
    NetAddressIPv4* input,
    mojo::internal::Buffer* buffer,
    internal::NetAddressIPv4_Data** output);
void Deserialize_(internal::NetAddressIPv4_Data* input,
                  NetAddressIPv4* output);

size_t GetSerializedSize_(const NetAddressIPv6& input);
mojo::internal::ValidationError Serialize_(
    NetAddressIPv6* input,
    mojo::internal::Buffer* buffer,
    internal::NetAddressIPv6_Data** output);
void Deserialize_(internal::NetAddressIPv6_Data* input,
                  NetAddressIPv6* output);

size_t GetSerializedSize_(const NetAddress& input);
mojo::internal::ValidationError Serialize_(
    NetAddress* input,
    mojo::internal::Buffer* buffer,
    internal::NetAddress_Data** output);
void Deserialize_(internal::NetAddress_Data* input,
                  NetAddress* output);


// --- Union serialization helpers ---

// --- Request and response parameter structs for Interface methods ---
}  // namespace mojo

#endif  // MOJO_SERVICES_NETWORK_INTERFACES_NET_ADDRESS_MOJOM_COMMON_H_