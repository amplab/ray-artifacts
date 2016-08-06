// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_URL_RESPONSE_DISK_CACHE_INTERFACES_URL_RESPONSE_DISK_CACHE_MOJOM_COMMON_H_
#define MOJO_SERVICES_URL_RESPONSE_DISK_CACHE_INTERFACES_URL_RESPONSE_DISK_CACHE_MOJOM_COMMON_H_

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
#include "mojo/services/url_response_disk_cache/interfaces/url_response_disk_cache.mojom-internal.h"
#include "mojo/public/interfaces/network/url_response.mojom-common.h"
namespace mojo {

// --- Interface Forward Declarations ---
class URLResponseDiskCache;
class URLResponseDiskCacheRequestValidator;
class URLResponseDiskCacheResponseValidator;
class URLResponseDiskCache_Synchronous;

// --- Struct Forward Declarations ---

// --- Union Forward Declarations ---

// --- Enums Declarations ---

// --- Constants ---

// --- Interface declarations ---
namespace internal {
class URLResponseDiskCache_Base {
 public:
  static const char Name_[];
  static const uint32_t Version_ = 0;

  using RequestValidator_ = URLResponseDiskCacheRequestValidator;
  using ResponseValidator_ = URLResponseDiskCacheResponseValidator;
  using Synchronous_ = URLResponseDiskCache_Synchronous;
  enum class MessageOrdinals : uint32_t {
    Get = 0,
    Validate = 1,
    Update = 2,
    UpdateAndGet = 3,
    UpdateAndGetExtracted = 4,
  };


  virtual ~URLResponseDiskCache_Base() {}
};

}  // namespace internal

// Async interface declaration

class URLResponseDiskCacheProxy;
class URLResponseDiskCacheStub;
class URLResponseDiskCache_Synchronous;

class URLResponseDiskCacheRequestValidator;
class URLResponseDiskCacheResponseValidator;

class URLResponseDiskCache : public internal::URLResponseDiskCache_Base {
 public:
  virtual ~URLResponseDiskCache() override {}

  using Proxy_ = URLResponseDiskCacheProxy;
  using Stub_ = URLResponseDiskCacheStub;
  using GetCallback = mojo::Callback<void(mojo::URLResponsePtr, mojo::Array<uint8_t>, mojo::Array<uint8_t>)>;
  virtual void Get(const mojo::String& url, const GetCallback& callback) = 0;
  virtual void Validate(const mojo::String& url) = 0;
  virtual void Update(mojo::URLResponsePtr response) = 0;
  using UpdateAndGetCallback = mojo::Callback<void(mojo::Array<uint8_t>, mojo::Array<uint8_t>)>;
  virtual void UpdateAndGet(mojo::URLResponsePtr response, const UpdateAndGetCallback& callback) = 0;
  using UpdateAndGetExtractedCallback = mojo::Callback<void(mojo::Array<uint8_t>, mojo::Array<uint8_t>)>;
  virtual void UpdateAndGetExtracted(mojo::URLResponsePtr response, const UpdateAndGetExtractedCallback& callback) = 0;
};

}  // namespace mojo

// --- Internal Template Specializations ---

namespace mojo {
namespace internal {

}  // internal
}  // mojo
namespace mojo {

// --- Interface Request Validators ---
class URLResponseDiskCacheRequestValidator
    : public mojo::internal::MessageValidator {
 public:
  mojo::internal::ValidationError Validate(const mojo::Message* message,
                                           std::string* err) override;
};


// --- Interface Response Validators ---
class URLResponseDiskCacheResponseValidator
    : public mojo::internal::MessageValidator {
 public:
  mojo::internal::ValidationError Validate(const mojo::Message* message,
                                           std::string* err) override;
};


// --- Interface enum operators ---

// --- Unions ---
// Unions must be declared first because they can be members of structs.

// --- Inlined structs ---

// --- Non-inlined structs ---

// --- Struct serialization helpers ---

// --- Union serialization helpers ---

// --- Request and response parameter structs for Interface methods ---
      

class URLResponseDiskCache_Get_Params;

using URLResponseDiskCache_Get_ParamsPtr = mojo::InlinedStructPtr<URLResponseDiskCache_Get_Params>;


size_t GetSerializedSize_(const URLResponseDiskCache_Get_Params& input);
mojo::internal::ValidationError Serialize_(
    URLResponseDiskCache_Get_Params* input,
    mojo::internal::Buffer* buffer,
    internal::URLResponseDiskCache_Get_Params_Data** output);
void Deserialize_(internal::URLResponseDiskCache_Get_Params_Data* input,
                  URLResponseDiskCache_Get_Params* output);

class URLResponseDiskCache_Get_Params {
 public:
  using Data_ = internal::URLResponseDiskCache_Get_Params_Data;

  static URLResponseDiskCache_Get_ParamsPtr New();

  template <typename U>
  static URLResponseDiskCache_Get_ParamsPtr From(const U& u) {
    return mojo::TypeConverter<URLResponseDiskCache_Get_ParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, URLResponseDiskCache_Get_Params>::Convert(*this);
  }

  URLResponseDiskCache_Get_Params();
  ~URLResponseDiskCache_Get_Params();
  
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


  URLResponseDiskCache_Get_ParamsPtr Clone() const;
  bool Equals(const URLResponseDiskCache_Get_Params& other) const;

  mojo::String url;
};



class URLResponseDiskCache_Get_ResponseParams;

using URLResponseDiskCache_Get_ResponseParamsPtr = mojo::StructPtr<URLResponseDiskCache_Get_ResponseParams>;


size_t GetSerializedSize_(const URLResponseDiskCache_Get_ResponseParams& input);
mojo::internal::ValidationError Serialize_(
    URLResponseDiskCache_Get_ResponseParams* input,
    mojo::internal::Buffer* buffer,
    internal::URLResponseDiskCache_Get_ResponseParams_Data** output);
void Deserialize_(internal::URLResponseDiskCache_Get_ResponseParams_Data* input,
                  URLResponseDiskCache_Get_ResponseParams* output);

class URLResponseDiskCache_Get_ResponseParams {
 public:
  using Data_ = internal::URLResponseDiskCache_Get_ResponseParams_Data;

  static URLResponseDiskCache_Get_ResponseParamsPtr New();

  template <typename U>
  static URLResponseDiskCache_Get_ResponseParamsPtr From(const U& u) {
    return mojo::TypeConverter<URLResponseDiskCache_Get_ResponseParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, URLResponseDiskCache_Get_ResponseParams>::Convert(*this);
  }

  URLResponseDiskCache_Get_ResponseParams();
  ~URLResponseDiskCache_Get_ResponseParams();
  
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


  bool Equals(const URLResponseDiskCache_Get_ResponseParams& other) const;

  mojo::URLResponsePtr response;
  mojo::Array<uint8_t> file_path;
  mojo::Array<uint8_t> cache_dir_path;
};



class URLResponseDiskCache_Validate_Params;

using URLResponseDiskCache_Validate_ParamsPtr = mojo::InlinedStructPtr<URLResponseDiskCache_Validate_Params>;


size_t GetSerializedSize_(const URLResponseDiskCache_Validate_Params& input);
mojo::internal::ValidationError Serialize_(
    URLResponseDiskCache_Validate_Params* input,
    mojo::internal::Buffer* buffer,
    internal::URLResponseDiskCache_Validate_Params_Data** output);
void Deserialize_(internal::URLResponseDiskCache_Validate_Params_Data* input,
                  URLResponseDiskCache_Validate_Params* output);

class URLResponseDiskCache_Validate_Params {
 public:
  using Data_ = internal::URLResponseDiskCache_Validate_Params_Data;

  static URLResponseDiskCache_Validate_ParamsPtr New();

  template <typename U>
  static URLResponseDiskCache_Validate_ParamsPtr From(const U& u) {
    return mojo::TypeConverter<URLResponseDiskCache_Validate_ParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, URLResponseDiskCache_Validate_Params>::Convert(*this);
  }

  URLResponseDiskCache_Validate_Params();
  ~URLResponseDiskCache_Validate_Params();
  
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


  URLResponseDiskCache_Validate_ParamsPtr Clone() const;
  bool Equals(const URLResponseDiskCache_Validate_Params& other) const;

  mojo::String url;
};




class URLResponseDiskCache_Update_Params;

using URLResponseDiskCache_Update_ParamsPtr = mojo::StructPtr<URLResponseDiskCache_Update_Params>;


size_t GetSerializedSize_(const URLResponseDiskCache_Update_Params& input);
mojo::internal::ValidationError Serialize_(
    URLResponseDiskCache_Update_Params* input,
    mojo::internal::Buffer* buffer,
    internal::URLResponseDiskCache_Update_Params_Data** output);
void Deserialize_(internal::URLResponseDiskCache_Update_Params_Data* input,
                  URLResponseDiskCache_Update_Params* output);

class URLResponseDiskCache_Update_Params {
 public:
  using Data_ = internal::URLResponseDiskCache_Update_Params_Data;

  static URLResponseDiskCache_Update_ParamsPtr New();

  template <typename U>
  static URLResponseDiskCache_Update_ParamsPtr From(const U& u) {
    return mojo::TypeConverter<URLResponseDiskCache_Update_ParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, URLResponseDiskCache_Update_Params>::Convert(*this);
  }

  URLResponseDiskCache_Update_Params();
  ~URLResponseDiskCache_Update_Params();
  
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


  bool Equals(const URLResponseDiskCache_Update_Params& other) const;

  mojo::URLResponsePtr response;
};




class URLResponseDiskCache_UpdateAndGet_Params;

using URLResponseDiskCache_UpdateAndGet_ParamsPtr = mojo::StructPtr<URLResponseDiskCache_UpdateAndGet_Params>;


size_t GetSerializedSize_(const URLResponseDiskCache_UpdateAndGet_Params& input);
mojo::internal::ValidationError Serialize_(
    URLResponseDiskCache_UpdateAndGet_Params* input,
    mojo::internal::Buffer* buffer,
    internal::URLResponseDiskCache_UpdateAndGet_Params_Data** output);
void Deserialize_(internal::URLResponseDiskCache_UpdateAndGet_Params_Data* input,
                  URLResponseDiskCache_UpdateAndGet_Params* output);

class URLResponseDiskCache_UpdateAndGet_Params {
 public:
  using Data_ = internal::URLResponseDiskCache_UpdateAndGet_Params_Data;

  static URLResponseDiskCache_UpdateAndGet_ParamsPtr New();

  template <typename U>
  static URLResponseDiskCache_UpdateAndGet_ParamsPtr From(const U& u) {
    return mojo::TypeConverter<URLResponseDiskCache_UpdateAndGet_ParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, URLResponseDiskCache_UpdateAndGet_Params>::Convert(*this);
  }

  URLResponseDiskCache_UpdateAndGet_Params();
  ~URLResponseDiskCache_UpdateAndGet_Params();
  
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


  bool Equals(const URLResponseDiskCache_UpdateAndGet_Params& other) const;

  mojo::URLResponsePtr response;
};



class URLResponseDiskCache_UpdateAndGet_ResponseParams;

using URLResponseDiskCache_UpdateAndGet_ResponseParamsPtr = mojo::StructPtr<URLResponseDiskCache_UpdateAndGet_ResponseParams>;


size_t GetSerializedSize_(const URLResponseDiskCache_UpdateAndGet_ResponseParams& input);
mojo::internal::ValidationError Serialize_(
    URLResponseDiskCache_UpdateAndGet_ResponseParams* input,
    mojo::internal::Buffer* buffer,
    internal::URLResponseDiskCache_UpdateAndGet_ResponseParams_Data** output);
void Deserialize_(internal::URLResponseDiskCache_UpdateAndGet_ResponseParams_Data* input,
                  URLResponseDiskCache_UpdateAndGet_ResponseParams* output);

class URLResponseDiskCache_UpdateAndGet_ResponseParams {
 public:
  using Data_ = internal::URLResponseDiskCache_UpdateAndGet_ResponseParams_Data;

  static URLResponseDiskCache_UpdateAndGet_ResponseParamsPtr New();

  template <typename U>
  static URLResponseDiskCache_UpdateAndGet_ResponseParamsPtr From(const U& u) {
    return mojo::TypeConverter<URLResponseDiskCache_UpdateAndGet_ResponseParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, URLResponseDiskCache_UpdateAndGet_ResponseParams>::Convert(*this);
  }

  URLResponseDiskCache_UpdateAndGet_ResponseParams();
  ~URLResponseDiskCache_UpdateAndGet_ResponseParams();
  
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


  URLResponseDiskCache_UpdateAndGet_ResponseParamsPtr Clone() const;
  bool Equals(const URLResponseDiskCache_UpdateAndGet_ResponseParams& other) const;

  mojo::Array<uint8_t> file_path;
  mojo::Array<uint8_t> cache_dir_path;
};



class URLResponseDiskCache_UpdateAndGetExtracted_Params;

using URLResponseDiskCache_UpdateAndGetExtracted_ParamsPtr = mojo::StructPtr<URLResponseDiskCache_UpdateAndGetExtracted_Params>;


size_t GetSerializedSize_(const URLResponseDiskCache_UpdateAndGetExtracted_Params& input);
mojo::internal::ValidationError Serialize_(
    URLResponseDiskCache_UpdateAndGetExtracted_Params* input,
    mojo::internal::Buffer* buffer,
    internal::URLResponseDiskCache_UpdateAndGetExtracted_Params_Data** output);
void Deserialize_(internal::URLResponseDiskCache_UpdateAndGetExtracted_Params_Data* input,
                  URLResponseDiskCache_UpdateAndGetExtracted_Params* output);

class URLResponseDiskCache_UpdateAndGetExtracted_Params {
 public:
  using Data_ = internal::URLResponseDiskCache_UpdateAndGetExtracted_Params_Data;

  static URLResponseDiskCache_UpdateAndGetExtracted_ParamsPtr New();

  template <typename U>
  static URLResponseDiskCache_UpdateAndGetExtracted_ParamsPtr From(const U& u) {
    return mojo::TypeConverter<URLResponseDiskCache_UpdateAndGetExtracted_ParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, URLResponseDiskCache_UpdateAndGetExtracted_Params>::Convert(*this);
  }

  URLResponseDiskCache_UpdateAndGetExtracted_Params();
  ~URLResponseDiskCache_UpdateAndGetExtracted_Params();
  
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


  bool Equals(const URLResponseDiskCache_UpdateAndGetExtracted_Params& other) const;

  mojo::URLResponsePtr response;
};



class URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams;

using URLResponseDiskCache_UpdateAndGetExtracted_ResponseParamsPtr = mojo::StructPtr<URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams>;


size_t GetSerializedSize_(const URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams& input);
mojo::internal::ValidationError Serialize_(
    URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams* input,
    mojo::internal::Buffer* buffer,
    internal::URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams_Data** output);
void Deserialize_(internal::URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams_Data* input,
                  URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams* output);

class URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams {
 public:
  using Data_ = internal::URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams_Data;

  static URLResponseDiskCache_UpdateAndGetExtracted_ResponseParamsPtr New();

  template <typename U>
  static URLResponseDiskCache_UpdateAndGetExtracted_ResponseParamsPtr From(const U& u) {
    return mojo::TypeConverter<URLResponseDiskCache_UpdateAndGetExtracted_ResponseParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams>::Convert(*this);
  }

  URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams();
  ~URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams();
  
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


  URLResponseDiskCache_UpdateAndGetExtracted_ResponseParamsPtr Clone() const;
  bool Equals(const URLResponseDiskCache_UpdateAndGetExtracted_ResponseParams& other) const;

  mojo::Array<uint8_t> extracted_dir_path;
  mojo::Array<uint8_t> cache_dir_path;
};


}  // namespace mojo

#endif  // MOJO_SERVICES_URL_RESPONSE_DISK_CACHE_INTERFACES_URL_RESPONSE_DISK_CACHE_MOJOM_COMMON_H_