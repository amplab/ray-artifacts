// NOTE: This file was generated by the Mojo bindings generator.
#ifndef SERVICES_URL_RESPONSE_DISK_CACHE_URL_RESPONSE_DISK_CACHE_ENTRY_MOJOM_COMMON_H_
#define SERVICES_URL_RESPONSE_DISK_CACHE_URL_RESPONSE_DISK_CACHE_ENTRY_MOJOM_COMMON_H_

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
#include "services/url_response_disk_cache/url_response_disk_cache_entry.mojom-internal.h"
#include "mojo/public/interfaces/network/url_response.mojom-common.h"
namespace mojo {

// --- Interface Forward Declarations ---

// --- Struct Forward Declarations ---
class CacheKey;

using CacheKeyPtr = mojo::InlinedStructPtr<CacheKey>;


class CacheEntry;

using CacheEntryPtr = mojo::StructPtr<CacheEntry>;



// --- Union Forward Declarations ---

// --- Enums Declarations ---

// --- Constants ---

// --- Interface declarations ---
}  // namespace mojo

// --- Internal Template Specializations ---

namespace mojo {
namespace internal {
template <>
struct WrapperTraits<mojo::CacheKeyPtr, true, false> {
  using DataType = mojo::internal::CacheKey_Data*;
};
template <>
struct WrapperTraits<mojo::CacheEntryPtr, true, false> {
  using DataType = mojo::internal::CacheEntry_Data*;
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
class CacheKey {
 public:
  using Data_ = internal::CacheKey_Data;

  static CacheKeyPtr New();

  template <typename U>
  static CacheKeyPtr From(const U& u) {
    return mojo::TypeConverter<CacheKeyPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, CacheKey>::Convert(*this);
  }

  CacheKey();
  ~CacheKey();
  
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


  CacheKeyPtr Clone() const;
  bool Equals(const CacheKey& other) const;

  mojo::String request_origin;
  mojo::String url;
  int64_t timestamp;
};



// --- Non-inlined structs ---
class CacheEntry {
 public:
  using Data_ = internal::CacheEntry_Data;

  static CacheEntryPtr New();

  template <typename U>
  static CacheEntryPtr From(const U& u) {
    return mojo::TypeConverter<CacheEntryPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, CacheEntry>::Convert(*this);
  }

  CacheEntry();
  ~CacheEntry();
  
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


  bool Equals(const CacheEntry& other) const;

  mojo::URLResponsePtr response;
  mojo::String entry_directory;
  mojo::String response_body_path;
  int64_t last_invalidation;
};



// --- Struct serialization helpers ---
size_t GetSerializedSize_(const CacheKey& input);
mojo::internal::ValidationError Serialize_(
    CacheKey* input,
    mojo::internal::Buffer* buffer,
    internal::CacheKey_Data** output);
void Deserialize_(internal::CacheKey_Data* input,
                  CacheKey* output);

size_t GetSerializedSize_(const CacheEntry& input);
mojo::internal::ValidationError Serialize_(
    CacheEntry* input,
    mojo::internal::Buffer* buffer,
    internal::CacheEntry_Data** output);
void Deserialize_(internal::CacheEntry_Data* input,
                  CacheEntry* output);


// --- Union serialization helpers ---

// --- Request and response parameter structs for Interface methods ---
}  // namespace mojo

#endif  // SERVICES_URL_RESPONSE_DISK_CACHE_URL_RESPONSE_DISK_CACHE_ENTRY_MOJOM_COMMON_H_