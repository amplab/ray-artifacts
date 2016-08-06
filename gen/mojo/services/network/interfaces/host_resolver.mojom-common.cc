// NOTE: This file was generated by the Mojo bindings generator.
#include "mojo/services/network/interfaces/host_resolver.mojom-common.h"

#include <math.h>
#include <ostream>

#include "mojo/public/cpp/bindings/lib/array_serialization.h"
#include "mojo/public/cpp/bindings/lib/bindings_serialization.h"
#include "mojo/public/cpp/bindings/lib/bounds_checker.h"
#include "mojo/public/cpp/bindings/lib/map_data_internal.h"
#include "mojo/public/cpp/bindings/lib/map_serialization.h"
#include "mojo/public/cpp/bindings/lib/message_builder.h"
#include "mojo/public/cpp/bindings/lib/message_validation.h"
#include "mojo/public/cpp/bindings/lib/string_serialization.h"
#include "mojo/public/cpp/bindings/lib/validate_params.h"
#include "mojo/public/cpp/bindings/lib/validation_errors.h"
#include "mojo/public/cpp/bindings/lib/validation_util.h"
#include "mojo/public/cpp/environment/logging.h"
#include "mojo/public/interfaces/bindings/interface_control_messages.mojom.h"
namespace mojo {

// --- Constants ---

namespace internal {

// --- Struct definitions ---


// --- Union definitions ---


// --- Definitions of the data structs for interface methods ---


// static
HostResolver_GetHostAddresses_Params_Data* HostResolver_GetHostAddresses_Params_Data::New(mojo::internal::Buffer* buf) {
  return new (buf->Allocate(sizeof(HostResolver_GetHostAddresses_Params_Data))) HostResolver_GetHostAddresses_Params_Data();
}

// static
mojo::internal::ValidationError HostResolver_GetHostAddresses_Params_Data::Validate(
    const void* data,
    mojo::internal::BoundsChecker* bounds_checker,
    std::string* err) {
  mojo::internal::ValidationError retval;
  
  if (!data)
    return mojo::internal::ValidationError::NONE;

  retval = ValidateStructHeaderAndClaimMemory(data, bounds_checker, err);
  if (retval != mojo::internal::ValidationError::NONE)
    return retval;

  // NOTE: The memory backing |object| may be smaller than |sizeof(*object)| if
  // the message comes from an older version.
  const HostResolver_GetHostAddresses_Params_Data* object = static_cast<const HostResolver_GetHostAddresses_Params_Data*>(data);

  static const struct {
    uint32_t version;
    uint32_t num_bytes;
  } kVersionSizes[] = {{ 0, 24 }};

  if (object->header_.version <=
          kVersionSizes[MOJO_ARRAYSIZE(kVersionSizes) - 1].version) {
    // Scan in reverse order to optimize for more recent versions.
    for (int i = MOJO_ARRAYSIZE(kVersionSizes) - 1; i >= 0; --i) {
      if (object->header_.version >= kVersionSizes[i].version) {
        if (object->header_.num_bytes == kVersionSizes[i].num_bytes)
          break;

        MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err) << "";
        return mojo::internal::ValidationError::UNEXPECTED_STRUCT_HEADER;
      }
    }
  } else if (object->header_.num_bytes <
                 kVersionSizes[MOJO_ARRAYSIZE(kVersionSizes) - 1].num_bytes) {
    MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err) << "";
    return mojo::internal::ValidationError::UNEXPECTED_STRUCT_HEADER;
  }
  {
    
  if (!object->host.offset) {
    MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err) <<
        "null host field in HostResolver_GetHostAddresses_Params struct";
    return mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER;
  }
  if (!mojo::internal::ValidateEncodedPointer(&object->host.offset)) {
    MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err) << "";
    return mojo::internal::ValidationError::ILLEGAL_POINTER;
  }
  const mojo::internal::ArrayValidateParams host_validate_params(
      0, false, nullptr);
  auto validate_retval =
      mojo::String::Data_::Validate(
          mojo::internal::DecodePointerRaw(&object->host.offset),
          bounds_checker, &host_validate_params, err);
  if (validate_retval != mojo::internal::ValidationError::NONE) {
    return validate_retval;
  }
  }

  return mojo::internal::ValidationError::NONE;
}

void HostResolver_GetHostAddresses_Params_Data::EncodePointersAndHandles(
    std::vector<mojo::Handle>* handles) {
  MOJO_CHECK(header_.version == 0);
  mojo::internal::Encode(&this->host, handles);
}

void HostResolver_GetHostAddresses_Params_Data::DecodePointersAndHandles(
    std::vector<mojo::Handle>* handles) {
  // NOTE: The memory backing |this| may has be smaller than |sizeof(*this)|, if
  // the message comes from an older version.
  mojo::internal::Decode(&this->host, handles);
}

HostResolver_GetHostAddresses_Params_Data::HostResolver_GetHostAddresses_Params_Data() {
  header_.num_bytes = sizeof(*this);
  header_.version = 0;
}


// static
HostResolver_GetHostAddresses_ResponseParams_Data* HostResolver_GetHostAddresses_ResponseParams_Data::New(mojo::internal::Buffer* buf) {
  return new (buf->Allocate(sizeof(HostResolver_GetHostAddresses_ResponseParams_Data))) HostResolver_GetHostAddresses_ResponseParams_Data();
}

// static
mojo::internal::ValidationError HostResolver_GetHostAddresses_ResponseParams_Data::Validate(
    const void* data,
    mojo::internal::BoundsChecker* bounds_checker,
    std::string* err) {
  mojo::internal::ValidationError retval;
  
  if (!data)
    return mojo::internal::ValidationError::NONE;

  retval = ValidateStructHeaderAndClaimMemory(data, bounds_checker, err);
  if (retval != mojo::internal::ValidationError::NONE)
    return retval;

  // NOTE: The memory backing |object| may be smaller than |sizeof(*object)| if
  // the message comes from an older version.
  const HostResolver_GetHostAddresses_ResponseParams_Data* object = static_cast<const HostResolver_GetHostAddresses_ResponseParams_Data*>(data);

  static const struct {
    uint32_t version;
    uint32_t num_bytes;
  } kVersionSizes[] = {{ 0, 24 }};

  if (object->header_.version <=
          kVersionSizes[MOJO_ARRAYSIZE(kVersionSizes) - 1].version) {
    // Scan in reverse order to optimize for more recent versions.
    for (int i = MOJO_ARRAYSIZE(kVersionSizes) - 1; i >= 0; --i) {
      if (object->header_.version >= kVersionSizes[i].version) {
        if (object->header_.num_bytes == kVersionSizes[i].num_bytes)
          break;

        MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err) << "";
        return mojo::internal::ValidationError::UNEXPECTED_STRUCT_HEADER;
      }
    }
  } else if (object->header_.num_bytes <
                 kVersionSizes[MOJO_ARRAYSIZE(kVersionSizes) - 1].num_bytes) {
    MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err) << "";
    return mojo::internal::ValidationError::UNEXPECTED_STRUCT_HEADER;
  }
  {
    
  if (!object->result.offset) {
    MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err) <<
        "null result field in HostResolver_GetHostAddresses_ResponseParams struct";
    return mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER;
  }
  if (!mojo::internal::ValidateEncodedPointer(&object->result.offset)) {
    MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err) << "";
    return mojo::internal::ValidationError::ILLEGAL_POINTER;
  }
  auto validate_retval = mojo::NetworkError::Data_::Validate(
          mojo::internal::DecodePointerRaw(&object->result.offset),
          bounds_checker, err);
  if (validate_retval != mojo::internal::ValidationError::NONE) {
    return validate_retval;
  }
  }
  {
    
  if (!mojo::internal::ValidateEncodedPointer(&object->addresses.offset)) {
    MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err) << "";
    return mojo::internal::ValidationError::ILLEGAL_POINTER;
  }
  const mojo::internal::ArrayValidateParams addresses_validate_params(
      0, false, nullptr);
  auto validate_retval =
      mojo::Array<mojo::NetAddressPtr>::Data_::Validate(
          mojo::internal::DecodePointerRaw(&object->addresses.offset),
          bounds_checker, &addresses_validate_params, err);
  if (validate_retval != mojo::internal::ValidationError::NONE) {
    return validate_retval;
  }
  }

  return mojo::internal::ValidationError::NONE;
}

void HostResolver_GetHostAddresses_ResponseParams_Data::EncodePointersAndHandles(
    std::vector<mojo::Handle>* handles) {
  MOJO_CHECK(header_.version == 0);
  mojo::internal::Encode(&this->result, handles);
  mojo::internal::Encode(&this->addresses, handles);
}

void HostResolver_GetHostAddresses_ResponseParams_Data::DecodePointersAndHandles(
    std::vector<mojo::Handle>* handles) {
  // NOTE: The memory backing |this| may has be smaller than |sizeof(*this)|, if
  // the message comes from an older version.
  mojo::internal::Decode(&this->result, handles);
  mojo::internal::Decode(&this->addresses, handles);
}

HostResolver_GetHostAddresses_ResponseParams_Data::HostResolver_GetHostAddresses_ResponseParams_Data() {
  header_.num_bytes = sizeof(*this);
  header_.version = 0;
}


}  // namespace internal

// --- Request and response validator definitions for interfaces ---
mojo::internal::ValidationError HostResolverRequestValidator::Validate(
    const mojo::Message* message,
    std::string* err) {
  mojo::internal::ValidationError retval;
  if (mojo::internal::ControlMessageHandler::IsControlMessage(message)) {
    retval = mojo::internal::ValidateControlRequest(message, err);
    if (retval != mojo::internal::ValidationError::NONE) {
      MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err)
        << "request validation error for interface 'HostResolver', "
           "message name '" << message->header()->name << "': " <<
           (err ? *err : "");
      ReportValidationError(retval, err);
      return retval;
    }
    return mojo::internal::ValidationError::NONE;
  }

  internal::HostResolver_Base::MessageOrdinals method_ordinal =
      static_cast<internal::HostResolver_Base::MessageOrdinals>(message->header()->name);
  switch (method_ordinal) {
    case internal::HostResolver_Base::MessageOrdinals::GetHostAddresses: {
      retval =
          mojo::internal::ValidateMessageIsRequestExpectingResponse(message,
                                                                    err);
      if (retval != mojo::internal::ValidationError::NONE) {
        MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err)
          << "request validation error for interface 'HostResolver', "
             "message name '" << message->header()->name << "': " <<
             (err ? *err : "");
        ReportValidationError(retval, err);
        return retval;
      }
      retval = mojo::internal::ValidateMessagePayload<
                 internal::HostResolver_GetHostAddresses_Params_Data>(
                    message, err); 
      if (retval != mojo::internal::ValidationError::NONE) {
         MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err)
            << "request validation error for interface 'HostResolver', "
               "message name '" << message->header()->name << "': " <<
               (err ? *err : "");
        ReportValidationError(retval, err);
        return retval;
      }
      return mojo::internal::ValidationError::NONE;
    }
    default:
      break;
  }

  // Unrecognized message.
  MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err) << "unknown request message name '"
                                         << message->header()->name
                                         << "' for interface "
                                            "'HostResolver'";
  ReportValidationError(
      mojo::internal::ValidationError::MESSAGE_HEADER_UNKNOWN_METHOD, err);
  return mojo::internal::ValidationError::MESSAGE_HEADER_UNKNOWN_METHOD;
}
mojo::internal::ValidationError HostResolverResponseValidator::Validate(
    const mojo::Message* message,
    std::string* err) {
  mojo::internal::ValidationError retval;
  if (mojo::internal::ControlMessageHandler::IsControlMessage(message)) {
    retval = mojo::internal::ValidateControlResponse(message, err);
    if (retval != mojo::internal::ValidationError::NONE) {
      MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err)
        << "response validation error for interface 'HostResolver', "
           "message name '" << message->header()->name << "': " <<
           (err ? *err : "");
      ReportValidationError(retval, err);
      return retval;
    }
    return mojo::internal::ValidationError::NONE;
  }

  retval = mojo::internal::ValidateMessageIsResponse(message, err);
  if (retval != mojo::internal::ValidationError::NONE) {
    MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err)
            << "response validation error for interface 'HostResolver', "
               "message name '" << message->header()->name << "': " <<
               (err ? *err : "");
    ReportValidationError(retval, err);
    return retval;
  }

  internal::HostResolver_Base::MessageOrdinals method_ordinal =
      static_cast<internal::HostResolver_Base::MessageOrdinals>(message->header()->name);
  switch (method_ordinal) {
    case internal::HostResolver_Base::MessageOrdinals::GetHostAddresses: {
      retval = mojo::internal::ValidateMessagePayload<
                  internal::HostResolver_GetHostAddresses_ResponseParams_Data>(
                      message, err);
      if (retval != mojo::internal::ValidationError::NONE) {
        MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err)
            << "response validation error for interface 'HostResolver',"
               " message name '" << message->header()->name << "': " <<
               (err ? *err : "");
        ReportValidationError(retval, err);
        return retval;
      }
      return mojo::internal::ValidationError::NONE;
    }
    default:
      break;
  }

  // Unrecognized message.
  MOJO_INTERNAL_DEBUG_SET_ERROR_MSG(err) << "unknown response message name '"
                                          << message->header()->name
                                          << "' for interface "
                                             "'HostResolver'";
  ReportValidationError(
      mojo::internal::ValidationError::MESSAGE_HEADER_UNKNOWN_METHOD, err);
  return mojo::internal::ValidationError::MESSAGE_HEADER_UNKNOWN_METHOD;
} 

// --- Enums ---

// Base interface definitions (Name_, Version_, Constants, Enums)
const uint32_t internal::HostResolver_Base::Version_;

// Constants

// Enums

// Struct Constants

// --- Struct builder definitions ---

// --- Union builder definitions ---

// --- Struct Serialization Helpers ---

// --- Union Serialization Helpers ---

// --- Structs for interface method parameters ---


// static
HostResolver_GetHostAddresses_ParamsPtr HostResolver_GetHostAddresses_Params::New() {
  HostResolver_GetHostAddresses_ParamsPtr rv;
  mojo::internal::StructHelper<HostResolver_GetHostAddresses_Params>::Initialize(&rv);
  return rv;
}

HostResolver_GetHostAddresses_Params::HostResolver_GetHostAddresses_Params()
    : host(),
      family() {
}

HostResolver_GetHostAddresses_Params::~HostResolver_GetHostAddresses_Params() {
}


HostResolver_GetHostAddresses_ParamsPtr HostResolver_GetHostAddresses_Params::Clone() const {
  HostResolver_GetHostAddresses_ParamsPtr rv(New());
  rv->host = host;
  rv->family = family;
  return rv;
}


bool HostResolver_GetHostAddresses_Params::Equals(const HostResolver_GetHostAddresses_Params& other) const {
  if (!mojo::internal::ValueTraits<mojo::String>::Equals(this->host, other.host))
    return false;
  if (!mojo::internal::ValueTraits<mojo::NetAddressFamily>::Equals(this->family, other.family))
    return false;
  return true;
}


size_t HostResolver_GetHostAddresses_Params::GetSerializedSize() const {
  return GetSerializedSize_(*this);
}

bool HostResolver_GetHostAddresses_Params::Serialize(void* buf,
                                size_t buf_size,
                                size_t* bytes_written) {
  MOJO_DCHECK(buf);

  mojo::internal::FixedBuffer overlay_buf;
  overlay_buf.Initialize(buf, buf_size);

  internal::HostResolver_GetHostAddresses_Params_Data* output_ptr;
  auto err = Serialize_(this, &overlay_buf, &output_ptr);
  if (err != mojo::internal::ValidationError::NONE) {
    // TODO(vardhan): Once Serialize_() outputs handles that it serialized
    // (even partially, if there are failures), we should CHECK fail here if
    // handles are non-empty.
    MOJO_DLOG(ERROR) << "Could not serialize: " <<
        mojo::internal::ValidationErrorToString(err);

    if (bytes_written)
      *bytes_written = overlay_buf.BytesUsed();
    return false;
  }

  std::vector<mojo::Handle> handles;
  output_ptr->EncodePointersAndHandles(&handles);
  MOJO_CHECK(handles.empty()) << "Serialize() does not support handles.";

  if (bytes_written)
    *bytes_written = overlay_buf.BytesUsed();
  return true;
}

bool HostResolver_GetHostAddresses_Params::Deserialize(void* buf, size_t buf_size) {
  MOJO_DCHECK(buf);

  mojo::internal::BoundsChecker checker(buf, buf_size, 0);

  std::string* err_str = nullptr;
#if !defined(NDEBUG)
  std::string err_str2;
  err_str = &err_str2;
#endif

  mojo::internal::ValidationError err =
      internal::HostResolver_GetHostAddresses_Params_Data::Validate(buf, &checker, err_str);
  if (err != mojo::internal::ValidationError::NONE) {
    MOJO_DLOG(ERROR) << "Deserialization error "
                     << mojo::internal::ValidationErrorToString(err)
                     << ": " << *err_str;
    return false;
  }

  DeserializeWithoutValidation(buf);
  return true;
}

// TODO(vardhan): Make this |buf| a |const void*| once deserialization becomes
// immutable.
void HostResolver_GetHostAddresses_Params::DeserializeWithoutValidation(void* buf) {
  MOJO_DCHECK(buf);

  internal::HostResolver_GetHostAddresses_Params_Data* input =
      static_cast<internal::HostResolver_GetHostAddresses_Params_Data*>(buf);
  std::vector<mojo::Handle> handles;
  input->DecodePointersAndHandles(&handles);
  MOJO_CHECK(handles.empty()) << "Deserialization does not support handles.";

  Deserialize_(input, this);
}

size_t GetSerializedSize_(const HostResolver_GetHostAddresses_Params& input) {
  size_t size = sizeof(internal::HostResolver_GetHostAddresses_Params_Data);
  size += GetSerializedSize_(input.host);
  return size;
}

mojo::internal::ValidationError Serialize_(
    HostResolver_GetHostAddresses_Params* input,
    mojo::internal::Buffer* buf,
    internal::HostResolver_GetHostAddresses_Params_Data** output) {
  if (input) {
    internal::HostResolver_GetHostAddresses_Params_Data* result =
        internal::HostResolver_GetHostAddresses_Params_Data::New(buf);
    SerializeString_(input->host, buf, &result->host.ptr);
    if (!result->host.ptr) {
      MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER, "null host in HostResolver_GetHostAddresses_Params struct");
      return mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER;
    }
    result->family =
      static_cast<int32_t>(input->family);
    *output = result;
  } else {
    *output = nullptr;
  }
  return mojo::internal::ValidationError::NONE;
}

void Deserialize_(internal::HostResolver_GetHostAddresses_Params_Data* input,
                  HostResolver_GetHostAddresses_Params* result) {
  if (input) {
    do {
      // NOTE: The memory backing |input| may has be smaller than
      // |sizeof(*input)| if the message comes from an older version.
      Deserialize_(input->host.ptr, &result->host);
      result->family = static_cast<mojo::NetAddressFamily>(input->family);
    } while (false);
  }
}


// static
HostResolver_GetHostAddresses_ResponseParamsPtr HostResolver_GetHostAddresses_ResponseParams::New() {
  HostResolver_GetHostAddresses_ResponseParamsPtr rv;
  mojo::internal::StructHelper<HostResolver_GetHostAddresses_ResponseParams>::Initialize(&rv);
  return rv;
}

HostResolver_GetHostAddresses_ResponseParams::HostResolver_GetHostAddresses_ResponseParams()
    : result(),
      addresses() {
}

HostResolver_GetHostAddresses_ResponseParams::~HostResolver_GetHostAddresses_ResponseParams() {
}


HostResolver_GetHostAddresses_ResponseParamsPtr HostResolver_GetHostAddresses_ResponseParams::Clone() const {
  HostResolver_GetHostAddresses_ResponseParamsPtr rv(New());
  rv->result = result.Clone();
  rv->addresses = addresses.Clone();
  return rv;
}


bool HostResolver_GetHostAddresses_ResponseParams::Equals(const HostResolver_GetHostAddresses_ResponseParams& other) const {
  if (!mojo::internal::ValueTraits<mojo::NetworkErrorPtr>::Equals(this->result, other.result))
    return false;
  if (!mojo::internal::ValueTraits<mojo::Array<mojo::NetAddressPtr>>::Equals(this->addresses, other.addresses))
    return false;
  return true;
}


size_t HostResolver_GetHostAddresses_ResponseParams::GetSerializedSize() const {
  return GetSerializedSize_(*this);
}

bool HostResolver_GetHostAddresses_ResponseParams::Serialize(void* buf,
                                size_t buf_size,
                                size_t* bytes_written) {
  MOJO_DCHECK(buf);

  mojo::internal::FixedBuffer overlay_buf;
  overlay_buf.Initialize(buf, buf_size);

  internal::HostResolver_GetHostAddresses_ResponseParams_Data* output_ptr;
  auto err = Serialize_(this, &overlay_buf, &output_ptr);
  if (err != mojo::internal::ValidationError::NONE) {
    // TODO(vardhan): Once Serialize_() outputs handles that it serialized
    // (even partially, if there are failures), we should CHECK fail here if
    // handles are non-empty.
    MOJO_DLOG(ERROR) << "Could not serialize: " <<
        mojo::internal::ValidationErrorToString(err);

    if (bytes_written)
      *bytes_written = overlay_buf.BytesUsed();
    return false;
  }

  std::vector<mojo::Handle> handles;
  output_ptr->EncodePointersAndHandles(&handles);
  MOJO_CHECK(handles.empty()) << "Serialize() does not support handles.";

  if (bytes_written)
    *bytes_written = overlay_buf.BytesUsed();
  return true;
}

bool HostResolver_GetHostAddresses_ResponseParams::Deserialize(void* buf, size_t buf_size) {
  MOJO_DCHECK(buf);

  mojo::internal::BoundsChecker checker(buf, buf_size, 0);

  std::string* err_str = nullptr;
#if !defined(NDEBUG)
  std::string err_str2;
  err_str = &err_str2;
#endif

  mojo::internal::ValidationError err =
      internal::HostResolver_GetHostAddresses_ResponseParams_Data::Validate(buf, &checker, err_str);
  if (err != mojo::internal::ValidationError::NONE) {
    MOJO_DLOG(ERROR) << "Deserialization error "
                     << mojo::internal::ValidationErrorToString(err)
                     << ": " << *err_str;
    return false;
  }

  DeserializeWithoutValidation(buf);
  return true;
}

// TODO(vardhan): Make this |buf| a |const void*| once deserialization becomes
// immutable.
void HostResolver_GetHostAddresses_ResponseParams::DeserializeWithoutValidation(void* buf) {
  MOJO_DCHECK(buf);

  internal::HostResolver_GetHostAddresses_ResponseParams_Data* input =
      static_cast<internal::HostResolver_GetHostAddresses_ResponseParams_Data*>(buf);
  std::vector<mojo::Handle> handles;
  input->DecodePointersAndHandles(&handles);
  MOJO_CHECK(handles.empty()) << "Deserialization does not support handles.";

  Deserialize_(input, this);
}

size_t GetSerializedSize_(const HostResolver_GetHostAddresses_ResponseParams& input) {
  size_t size = sizeof(internal::HostResolver_GetHostAddresses_ResponseParams_Data);
  size += input.result.is_null()
              ? 0
              : GetSerializedSize_(*input.result);
  size += GetSerializedSize_(input.addresses);
  return size;
}

mojo::internal::ValidationError Serialize_(
    HostResolver_GetHostAddresses_ResponseParams* input,
    mojo::internal::Buffer* buf,
    internal::HostResolver_GetHostAddresses_ResponseParams_Data** output) {
  if (input) {
    internal::HostResolver_GetHostAddresses_ResponseParams_Data* result =
        internal::HostResolver_GetHostAddresses_ResponseParams_Data::New(buf);
    {auto retval =Serialize_(input->result.get(),
                 buf,
                 &result->result.ptr);
      if (retval != mojo::internal::ValidationError::NONE)
        return retval;
    }
    if (!result->result.ptr) {
      MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER, "null result in HostResolver_GetHostAddresses_ResponseParams struct");
      return mojo::internal::ValidationError::UNEXPECTED_NULL_POINTER;
    }
    {
      const mojo::internal::ArrayValidateParams addresses_validate_params(
        0, false, nullptr);auto retval =mojo::SerializeArray_(&input->addresses, buf, &result->addresses.ptr,
                            &addresses_validate_params);
      if (retval != mojo::internal::ValidationError::NONE)
        return retval;
    }
    *output = result;
  } else {
    *output = nullptr;
  }
  return mojo::internal::ValidationError::NONE;
}

void Deserialize_(internal::HostResolver_GetHostAddresses_ResponseParams_Data* input,
                  HostResolver_GetHostAddresses_ResponseParams* result) {
  if (input) {
    do {
      // NOTE: The memory backing |input| may has be smaller than
      // |sizeof(*input)| if the message comes from an older version.
      if (input->result.ptr) {
        result->result = mojo::NetworkError::New();
        Deserialize_(input->result.ptr, result->result.get());
      }
      Deserialize_(input->addresses.ptr, &result->addresses);
    } while (false);
  }
}

}  // namespace mojo