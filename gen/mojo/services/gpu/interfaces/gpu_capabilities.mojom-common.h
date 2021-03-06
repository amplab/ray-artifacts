// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_GPU_INTERFACES_GPU_CAPABILITIES_MOJOM_COMMON_H_
#define MOJO_SERVICES_GPU_INTERFACES_GPU_CAPABILITIES_MOJOM_COMMON_H_

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
#include "mojo/services/gpu/interfaces/gpu_capabilities.mojom-internal.h"
namespace mojo {

// --- Interface Forward Declarations ---

// --- Struct Forward Declarations ---
class GpuShaderPrecision;

using GpuShaderPrecisionPtr = mojo::InlinedStructPtr<GpuShaderPrecision>;


class GpuPerStagePrecisions;

using GpuPerStagePrecisionsPtr = mojo::StructPtr<GpuPerStagePrecisions>;


class GpuCapabilities;

using GpuCapabilitiesPtr = mojo::StructPtr<GpuCapabilities>;



// --- Union Forward Declarations ---

// --- Enums Declarations ---

// --- Constants ---

// --- Interface declarations ---
}  // namespace mojo

// --- Internal Template Specializations ---

namespace mojo {
namespace internal {
template <>
struct WrapperTraits<mojo::GpuShaderPrecisionPtr, true, false> {
  using DataType = mojo::internal::GpuShaderPrecision_Data*;
};
template <>
struct WrapperTraits<mojo::GpuPerStagePrecisionsPtr, true, false> {
  using DataType = mojo::internal::GpuPerStagePrecisions_Data*;
};
template <>
struct WrapperTraits<mojo::GpuCapabilitiesPtr, true, false> {
  using DataType = mojo::internal::GpuCapabilities_Data*;
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
class GpuShaderPrecision {
 public:
  using Data_ = internal::GpuShaderPrecision_Data;

  static GpuShaderPrecisionPtr New();

  template <typename U>
  static GpuShaderPrecisionPtr From(const U& u) {
    return mojo::TypeConverter<GpuShaderPrecisionPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, GpuShaderPrecision>::Convert(*this);
  }

  GpuShaderPrecision();
  ~GpuShaderPrecision();
  
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


  GpuShaderPrecisionPtr Clone() const;
  bool Equals(const GpuShaderPrecision& other) const;

  int32_t min_range;
  int32_t max_range;
  int32_t precision;
};



// --- Non-inlined structs ---
class GpuPerStagePrecisions {
 public:
  using Data_ = internal::GpuPerStagePrecisions_Data;

  static GpuPerStagePrecisionsPtr New();

  template <typename U>
  static GpuPerStagePrecisionsPtr From(const U& u) {
    return mojo::TypeConverter<GpuPerStagePrecisionsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, GpuPerStagePrecisions>::Convert(*this);
  }

  GpuPerStagePrecisions();
  ~GpuPerStagePrecisions();
  
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


  GpuPerStagePrecisionsPtr Clone() const;
  bool Equals(const GpuPerStagePrecisions& other) const;

  GpuShaderPrecisionPtr low_int;
  GpuShaderPrecisionPtr medium_int;
  GpuShaderPrecisionPtr high_int;
  GpuShaderPrecisionPtr low_float;
  GpuShaderPrecisionPtr medium_float;
  GpuShaderPrecisionPtr high_float;
};


class GpuCapabilities {
 public:
  using Data_ = internal::GpuCapabilities_Data;

  static GpuCapabilitiesPtr New();

  template <typename U>
  static GpuCapabilitiesPtr From(const U& u) {
    return mojo::TypeConverter<GpuCapabilitiesPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, GpuCapabilities>::Convert(*this);
  }

  GpuCapabilities();
  ~GpuCapabilities();
  
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


  GpuCapabilitiesPtr Clone() const;
  bool Equals(const GpuCapabilities& other) const;

  GpuPerStagePrecisionsPtr vertex_shader_precisions;
  GpuPerStagePrecisionsPtr fragment_shader_precisions;
  int32_t max_combined_texture_image_units;
  int32_t max_cube_map_texture_size;
  int32_t max_fragment_uniform_vectors;
  int32_t max_renderbuffer_size;
  int32_t max_texture_image_units;
  int32_t max_texture_size;
  int32_t max_varying_vectors;
  int32_t max_vertex_attribs;
  int32_t max_vertex_texture_image_units;
  int32_t max_vertex_uniform_vectors;
  int32_t num_compressed_texture_formats;
  int32_t num_shader_binary_formats;
  int32_t bind_generates_resource_chromium;
  bool post_sub_buffer;
  bool egl_image_external;
  bool texture_format_bgra8888;
  bool texture_format_etc1;
  bool texture_format_etc1_npot;
  bool texture_rectangle;
  bool iosurface;
  bool texture_usage;
  bool texture_storage;
  bool discard_framebuffer;
  bool sync_query;
  bool image;
  bool future_sync_points;
  bool blend_equation_advanced;
  bool blend_equation_advanced_coherent;
};



// --- Struct serialization helpers ---
size_t GetSerializedSize_(const GpuShaderPrecision& input);
mojo::internal::ValidationError Serialize_(
    GpuShaderPrecision* input,
    mojo::internal::Buffer* buffer,
    internal::GpuShaderPrecision_Data** output);
void Deserialize_(internal::GpuShaderPrecision_Data* input,
                  GpuShaderPrecision* output);

size_t GetSerializedSize_(const GpuPerStagePrecisions& input);
mojo::internal::ValidationError Serialize_(
    GpuPerStagePrecisions* input,
    mojo::internal::Buffer* buffer,
    internal::GpuPerStagePrecisions_Data** output);
void Deserialize_(internal::GpuPerStagePrecisions_Data* input,
                  GpuPerStagePrecisions* output);

size_t GetSerializedSize_(const GpuCapabilities& input);
mojo::internal::ValidationError Serialize_(
    GpuCapabilities* input,
    mojo::internal::Buffer* buffer,
    internal::GpuCapabilities_Data** output);
void Deserialize_(internal::GpuCapabilities_Data* input,
                  GpuCapabilities* output);


// --- Union serialization helpers ---

// --- Request and response parameter structs for Interface methods ---
}  // namespace mojo

#endif  // MOJO_SERVICES_GPU_INTERFACES_GPU_CAPABILITIES_MOJOM_COMMON_H_
