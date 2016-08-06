// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_GPU_INTERFACES_VIEWPORT_PARAMETER_LISTENER_MOJOM_COMMON_H_
#define MOJO_SERVICES_GPU_INTERFACES_VIEWPORT_PARAMETER_LISTENER_MOJOM_COMMON_H_

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
#include "mojo/services/gpu/interfaces/viewport_parameter_listener.mojom-internal.h"
namespace mojo {

// --- Interface Forward Declarations ---
class ViewportParameterListener;
class ViewportParameterListenerRequestValidator;
class ViewportParameterListener_Synchronous;

// --- Struct Forward Declarations ---

// --- Union Forward Declarations ---

// --- Enums Declarations ---

// --- Constants ---

// --- Interface declarations ---
namespace internal {
class ViewportParameterListener_Base {
 public:
  static const uint32_t Version_ = 0;

  using RequestValidator_ = ViewportParameterListenerRequestValidator;
  using ResponseValidator_ = mojo::internal::PassThroughValidator;
  using Synchronous_ = ViewportParameterListener_Synchronous;
  enum class MessageOrdinals : uint32_t {
    OnVSyncParametersUpdated = 0,
  };


  virtual ~ViewportParameterListener_Base() {}
};

}  // namespace internal

// Async interface declaration

class ViewportParameterListenerProxy;
class ViewportParameterListenerStub;
class ViewportParameterListener_Synchronous;

class ViewportParameterListenerRequestValidator;

class ViewportParameterListener : public internal::ViewportParameterListener_Base {
 public:
  virtual ~ViewportParameterListener() override {}

  using Proxy_ = ViewportParameterListenerProxy;
  using Stub_ = ViewportParameterListenerStub;
  virtual void OnVSyncParametersUpdated(int64_t timebase, int64_t interval) = 0;
};

}  // namespace mojo

// --- Internal Template Specializations ---

namespace mojo {
namespace internal {

}  // internal
}  // mojo
namespace mojo {

// --- Interface Request Validators ---
class ViewportParameterListenerRequestValidator
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
      

class ViewportParameterListener_OnVSyncParametersUpdated_Params;

using ViewportParameterListener_OnVSyncParametersUpdated_ParamsPtr = mojo::InlinedStructPtr<ViewportParameterListener_OnVSyncParametersUpdated_Params>;


size_t GetSerializedSize_(const ViewportParameterListener_OnVSyncParametersUpdated_Params& input);
mojo::internal::ValidationError Serialize_(
    ViewportParameterListener_OnVSyncParametersUpdated_Params* input,
    mojo::internal::Buffer* buffer,
    internal::ViewportParameterListener_OnVSyncParametersUpdated_Params_Data** output);
void Deserialize_(internal::ViewportParameterListener_OnVSyncParametersUpdated_Params_Data* input,
                  ViewportParameterListener_OnVSyncParametersUpdated_Params* output);

class ViewportParameterListener_OnVSyncParametersUpdated_Params {
 public:
  using Data_ = internal::ViewportParameterListener_OnVSyncParametersUpdated_Params_Data;

  static ViewportParameterListener_OnVSyncParametersUpdated_ParamsPtr New();

  template <typename U>
  static ViewportParameterListener_OnVSyncParametersUpdated_ParamsPtr From(const U& u) {
    return mojo::TypeConverter<ViewportParameterListener_OnVSyncParametersUpdated_ParamsPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, ViewportParameterListener_OnVSyncParametersUpdated_Params>::Convert(*this);
  }

  ViewportParameterListener_OnVSyncParametersUpdated_Params();
  ~ViewportParameterListener_OnVSyncParametersUpdated_Params();
  
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


  ViewportParameterListener_OnVSyncParametersUpdated_ParamsPtr Clone() const;
  bool Equals(const ViewportParameterListener_OnVSyncParametersUpdated_Params& other) const;

  int64_t timebase;
  int64_t interval;
};



}  // namespace mojo

#endif  // MOJO_SERVICES_GPU_INTERFACES_VIEWPORT_PARAMETER_LISTENER_MOJOM_COMMON_H_