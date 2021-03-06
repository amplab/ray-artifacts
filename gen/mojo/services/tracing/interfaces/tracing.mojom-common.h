// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_TRACING_INTERFACES_TRACING_MOJOM_COMMON_H_
#define MOJO_SERVICES_TRACING_INTERFACES_TRACING_MOJOM_COMMON_H_

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
#include "mojo/services/tracing/interfaces/tracing.mojom-internal.h"
namespace tracing {

// --- Interface Forward Declarations ---
class TraceProvider;
class TraceProviderRequestValidator;
class TraceProvider_Synchronous;
class TraceRecorder;
class TraceRecorderRequestValidator;
class TraceRecorder_Synchronous;
class TraceCollector;
class TraceCollectorRequestValidator;
class TraceCollector_Synchronous;

// --- Struct Forward Declarations ---

// --- Union Forward Declarations ---

// --- Enums Declarations ---

// --- Constants ---

// --- Interface declarations ---
namespace internal {
class TraceProvider_Base {
 public:
  static const char Name_[];
  static const uint32_t Version_ = 0;

  using RequestValidator_ = TraceProviderRequestValidator;
  using ResponseValidator_ = mojo::internal::PassThroughValidator;
  using Synchronous_ = TraceProvider_Synchronous;
  enum class MessageOrdinals : uint32_t {
    StartTracing = 0,
    StopTracing = 1,
  };


  virtual ~TraceProvider_Base() {}
};

}  // namespace internal

// Async interface declaration

class TraceProviderProxy;
class TraceProviderStub;
class TraceProvider_Synchronous;

class TraceProviderRequestValidator;

class TraceProvider : public internal::TraceProvider_Base {
 public:
  virtual ~TraceProvider() override {}

  using Proxy_ = TraceProviderProxy;
  using Stub_ = TraceProviderStub;
  virtual void StartTracing(const mojo::String& categories, mojo::InterfaceHandle<TraceRecorder> recorder) = 0;
  virtual void StopTracing() = 0;
};

namespace internal {
class TraceRecorder_Base {
 public:
  static const uint32_t Version_ = 0;

  using RequestValidator_ = TraceRecorderRequestValidator;
  using ResponseValidator_ = mojo::internal::PassThroughValidator;
  using Synchronous_ = TraceRecorder_Synchronous;
  enum class MessageOrdinals : uint32_t {
    Record = 0,
  };


  virtual ~TraceRecorder_Base() {}
};

}  // namespace internal

// Async interface declaration

class TraceRecorderProxy;
class TraceRecorderStub;
class TraceRecorder_Synchronous;

class TraceRecorderRequestValidator;

class TraceRecorder : public internal::TraceRecorder_Base {
 public:
  virtual ~TraceRecorder() override {}

  using Proxy_ = TraceRecorderProxy;
  using Stub_ = TraceRecorderStub;
  virtual void Record(const mojo::String& json) = 0;
};

namespace internal {
class TraceCollector_Base {
 public:
  static const char Name_[];
  static const uint32_t Version_ = 0;

  using RequestValidator_ = TraceCollectorRequestValidator;
  using ResponseValidator_ = mojo::internal::PassThroughValidator;
  using Synchronous_ = TraceCollector_Synchronous;
  enum class MessageOrdinals : uint32_t {
    Start = 0,
    StopAndFlush = 1,
  };


  virtual ~TraceCollector_Base() {}
};

}  // namespace internal

// Async interface declaration

class TraceCollectorProxy;
class TraceCollectorStub;
class TraceCollector_Synchronous;

class TraceCollectorRequestValidator;

class TraceCollector : public internal::TraceCollector_Base {
 public:
  virtual ~TraceCollector() override {}

  using Proxy_ = TraceCollectorProxy;
  using Stub_ = TraceCollectorStub;
  virtual void Start(mojo::ScopedDataPipeProducerHandle stream, const mojo::String& categories) = 0;
  virtual void StopAndFlush() = 0;
};

}  // namespace tracing

// --- Internal Template Specializations ---

namespace mojo {
namespace internal {

}  // internal
}  // mojo
namespace tracing {

// --- Interface Request Validators ---
class TraceProviderRequestValidator
    : public mojo::internal::MessageValidator {
 public:
  mojo::internal::ValidationError Validate(const mojo::Message* message,
                                           std::string* err) override;
};

class TraceRecorderRequestValidator
    : public mojo::internal::MessageValidator {
 public:
  mojo::internal::ValidationError Validate(const mojo::Message* message,
                                           std::string* err) override;
};

class TraceCollectorRequestValidator
    : public mojo::internal::MessageValidator {
 public:
  mojo::internal::ValidationError Validate(const mojo::Message* message,
                                           std::string* err) override;
};


// --- Interface Response Validators ---

// --- Interface enum operators ---

// --- Unions ---
// Unions must be declared first because they can be members of structs.

// --- Inlined structs ---

// --- Non-inlined structs ---

// --- Struct serialization helpers ---

// --- Union serialization helpers ---

// --- Request and response parameter structs for Interface methods ---
      

class TraceProvider_StartTracing_Params;

using TraceProvider_StartTracing_ParamsPtr = mojo::StructPtr<TraceProvider_StartTracing_Params>;


size_t GetSerializedSize_(const TraceProvider_StartTracing_Params& input);
mojo::internal::ValidationError Serialize_(
    TraceProvider_StartTracing_Params* input,
    mojo::internal::Buffer* buffer,
    internal::TraceProvider_StartTracing_Params_Data** output);
void Deserialize_(internal::TraceProvider_StartTracing_Params_Data* input,
                  TraceProvider_StartTracing_Params* output);

class TraceProvider_StartTracing_Params {
 public:
  using Data_ = internal::TraceProvider_StartTracing_Params_Data;

  static TraceProvider_StartTracing_ParamsPtr New();

  template <typename U>
  static TraceProvider_StartTracing_ParamsPtr From(const U& u) {
    return mojo::TypeConverter<TraceProvider_StartTracing_ParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, TraceProvider_StartTracing_Params>::Convert(*this);
  }

  TraceProvider_StartTracing_Params();
  ~TraceProvider_StartTracing_Params();
  
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


  bool Equals(const TraceProvider_StartTracing_Params& other) const;

  mojo::String categories;
  mojo::InterfaceHandle<TraceRecorder> recorder;
};




class TraceProvider_StopTracing_Params;

using TraceProvider_StopTracing_ParamsPtr = mojo::InlinedStructPtr<TraceProvider_StopTracing_Params>;


size_t GetSerializedSize_(const TraceProvider_StopTracing_Params& input);
mojo::internal::ValidationError Serialize_(
    TraceProvider_StopTracing_Params* input,
    mojo::internal::Buffer* buffer,
    internal::TraceProvider_StopTracing_Params_Data** output);
void Deserialize_(internal::TraceProvider_StopTracing_Params_Data* input,
                  TraceProvider_StopTracing_Params* output);

class TraceProvider_StopTracing_Params {
 public:
  using Data_ = internal::TraceProvider_StopTracing_Params_Data;

  static TraceProvider_StopTracing_ParamsPtr New();

  template <typename U>
  static TraceProvider_StopTracing_ParamsPtr From(const U& u) {
    return mojo::TypeConverter<TraceProvider_StopTracing_ParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, TraceProvider_StopTracing_Params>::Convert(*this);
  }

  TraceProvider_StopTracing_Params();
  ~TraceProvider_StopTracing_Params();
  
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


  TraceProvider_StopTracing_ParamsPtr Clone() const;
  bool Equals(const TraceProvider_StopTracing_Params& other) const;

};



      

class TraceRecorder_Record_Params;

using TraceRecorder_Record_ParamsPtr = mojo::InlinedStructPtr<TraceRecorder_Record_Params>;


size_t GetSerializedSize_(const TraceRecorder_Record_Params& input);
mojo::internal::ValidationError Serialize_(
    TraceRecorder_Record_Params* input,
    mojo::internal::Buffer* buffer,
    internal::TraceRecorder_Record_Params_Data** output);
void Deserialize_(internal::TraceRecorder_Record_Params_Data* input,
                  TraceRecorder_Record_Params* output);

class TraceRecorder_Record_Params {
 public:
  using Data_ = internal::TraceRecorder_Record_Params_Data;

  static TraceRecorder_Record_ParamsPtr New();

  template <typename U>
  static TraceRecorder_Record_ParamsPtr From(const U& u) {
    return mojo::TypeConverter<TraceRecorder_Record_ParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, TraceRecorder_Record_Params>::Convert(*this);
  }

  TraceRecorder_Record_Params();
  ~TraceRecorder_Record_Params();
  
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


  TraceRecorder_Record_ParamsPtr Clone() const;
  bool Equals(const TraceRecorder_Record_Params& other) const;

  mojo::String json;
};



      

class TraceCollector_Start_Params;

using TraceCollector_Start_ParamsPtr = mojo::StructPtr<TraceCollector_Start_Params>;


size_t GetSerializedSize_(const TraceCollector_Start_Params& input);
mojo::internal::ValidationError Serialize_(
    TraceCollector_Start_Params* input,
    mojo::internal::Buffer* buffer,
    internal::TraceCollector_Start_Params_Data** output);
void Deserialize_(internal::TraceCollector_Start_Params_Data* input,
                  TraceCollector_Start_Params* output);

class TraceCollector_Start_Params {
 public:
  using Data_ = internal::TraceCollector_Start_Params_Data;

  static TraceCollector_Start_ParamsPtr New();

  template <typename U>
  static TraceCollector_Start_ParamsPtr From(const U& u) {
    return mojo::TypeConverter<TraceCollector_Start_ParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, TraceCollector_Start_Params>::Convert(*this);
  }

  TraceCollector_Start_Params();
  ~TraceCollector_Start_Params();
  
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


  bool Equals(const TraceCollector_Start_Params& other) const;

  mojo::ScopedDataPipeProducerHandle stream;
  mojo::String categories;
};




class TraceCollector_StopAndFlush_Params;

using TraceCollector_StopAndFlush_ParamsPtr = mojo::InlinedStructPtr<TraceCollector_StopAndFlush_Params>;


size_t GetSerializedSize_(const TraceCollector_StopAndFlush_Params& input);
mojo::internal::ValidationError Serialize_(
    TraceCollector_StopAndFlush_Params* input,
    mojo::internal::Buffer* buffer,
    internal::TraceCollector_StopAndFlush_Params_Data** output);
void Deserialize_(internal::TraceCollector_StopAndFlush_Params_Data* input,
                  TraceCollector_StopAndFlush_Params* output);

class TraceCollector_StopAndFlush_Params {
 public:
  using Data_ = internal::TraceCollector_StopAndFlush_Params_Data;

  static TraceCollector_StopAndFlush_ParamsPtr New();

  template <typename U>
  static TraceCollector_StopAndFlush_ParamsPtr From(const U& u) {
    return mojo::TypeConverter<TraceCollector_StopAndFlush_ParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, TraceCollector_StopAndFlush_Params>::Convert(*this);
  }

  TraceCollector_StopAndFlush_Params();
  ~TraceCollector_StopAndFlush_Params();
  
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


  TraceCollector_StopAndFlush_ParamsPtr Clone() const;
  bool Equals(const TraceCollector_StopAndFlush_Params& other) const;

};



}  // namespace tracing

#endif  // MOJO_SERVICES_TRACING_INTERFACES_TRACING_MOJOM_COMMON_H_
