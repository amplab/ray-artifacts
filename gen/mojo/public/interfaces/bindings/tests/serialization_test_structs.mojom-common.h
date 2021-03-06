// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_PUBLIC_INTERFACES_BINDINGS_TESTS_SERIALIZATION_TEST_STRUCTS_MOJOM_COMMON_H_
#define MOJO_PUBLIC_INTERFACES_BINDINGS_TESTS_SERIALIZATION_TEST_STRUCTS_MOJOM_COMMON_H_

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
#include "mojo/public/interfaces/bindings/tests/serialization_test_structs.mojom-internal.h"
namespace mojo {
namespace test {

// --- Interface Forward Declarations ---

// --- Struct Forward Declarations ---
class Struct1;

using Struct1Ptr = mojo::InlinedStructPtr<Struct1>;


class Struct2;

using Struct2Ptr = mojo::StructPtr<Struct2>;


class Struct3;

using Struct3Ptr = mojo::StructPtr<Struct3>;


class Struct4;

using Struct4Ptr = mojo::StructPtr<Struct4>;


class Struct5;

using Struct5Ptr = mojo::StructPtr<Struct5>;


class Struct6;

using Struct6Ptr = mojo::InlinedStructPtr<Struct6>;


class StructOfNullables;

using StructOfNullablesPtr = mojo::StructPtr<StructOfNullables>;



// --- Union Forward Declarations ---

// --- Enums Declarations ---

// --- Constants ---

// --- Interface declarations ---
}  // namespace test
}  // namespace mojo

// --- Internal Template Specializations ---

namespace mojo {
namespace internal {
template <>
struct WrapperTraits<mojo::test::Struct1Ptr, true, false> {
  using DataType = mojo::test::internal::Struct1_Data*;
};
template <>
struct WrapperTraits<mojo::test::Struct2Ptr, true, false> {
  using DataType = mojo::test::internal::Struct2_Data*;
};
template <>
struct WrapperTraits<mojo::test::Struct3Ptr, true, false> {
  using DataType = mojo::test::internal::Struct3_Data*;
};
template <>
struct WrapperTraits<mojo::test::Struct4Ptr, true, false> {
  using DataType = mojo::test::internal::Struct4_Data*;
};
template <>
struct WrapperTraits<mojo::test::Struct5Ptr, true, false> {
  using DataType = mojo::test::internal::Struct5_Data*;
};
template <>
struct WrapperTraits<mojo::test::Struct6Ptr, true, false> {
  using DataType = mojo::test::internal::Struct6_Data*;
};
template <>
struct WrapperTraits<mojo::test::StructOfNullablesPtr, true, false> {
  using DataType = mojo::test::internal::StructOfNullables_Data*;
};

}  // internal
}  // mojo
namespace mojo {
namespace test {

// --- Interface Request Validators ---

// --- Interface Response Validators ---

// --- Interface enum operators ---

// --- Unions ---
// Unions must be declared first because they can be members of structs.

// --- Inlined structs ---
class Struct1 {
 public:
  using Data_ = internal::Struct1_Data;

  static Struct1Ptr New();

  template <typename U>
  static Struct1Ptr From(const U& u) {
    return mojo::TypeConverter<Struct1Ptr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, Struct1>::Convert(*this);
  }

  Struct1();
  ~Struct1();
  
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


  Struct1Ptr Clone() const;
  bool Equals(const Struct1& other) const;

  uint8_t i;
};


class Struct6 {
 public:
  using Data_ = internal::Struct6_Data;

  static Struct6Ptr New();

  template <typename U>
  static Struct6Ptr From(const U& u) {
    return mojo::TypeConverter<Struct6Ptr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, Struct6>::Convert(*this);
  }

  Struct6();
  ~Struct6();
  
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


  Struct6Ptr Clone() const;
  bool Equals(const Struct6& other) const;

  mojo::String str;
};



// --- Non-inlined structs ---
class Struct2 {
 public:
  using Data_ = internal::Struct2_Data;

  static Struct2Ptr New();

  template <typename U>
  static Struct2Ptr From(const U& u) {
    return mojo::TypeConverter<Struct2Ptr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, Struct2>::Convert(*this);
  }

  Struct2();
  ~Struct2();
  
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


  bool Equals(const Struct2& other) const;

  mojo::ScopedHandle hdl;
};


class Struct3 {
 public:
  using Data_ = internal::Struct3_Data;

  static Struct3Ptr New();

  template <typename U>
  static Struct3Ptr From(const U& u) {
    return mojo::TypeConverter<Struct3Ptr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, Struct3>::Convert(*this);
  }

  Struct3();
  ~Struct3();
  
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


  Struct3Ptr Clone() const;
  bool Equals(const Struct3& other) const;

  Struct1Ptr struct_1;
};


class Struct4 {
 public:
  using Data_ = internal::Struct4_Data;

  static Struct4Ptr New();

  template <typename U>
  static Struct4Ptr From(const U& u) {
    return mojo::TypeConverter<Struct4Ptr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, Struct4>::Convert(*this);
  }

  Struct4();
  ~Struct4();
  
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


  Struct4Ptr Clone() const;
  bool Equals(const Struct4& other) const;

  mojo::Array<Struct1Ptr> data;
};


class Struct5 {
 public:
  using Data_ = internal::Struct5_Data;

  static Struct5Ptr New();

  template <typename U>
  static Struct5Ptr From(const U& u) {
    return mojo::TypeConverter<Struct5Ptr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, Struct5>::Convert(*this);
  }

  Struct5();
  ~Struct5();
  
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


  Struct5Ptr Clone() const;
  bool Equals(const Struct5& other) const;

  mojo::Array<Struct1Ptr> pair;
};


class StructOfNullables {
 public:
  using Data_ = internal::StructOfNullables_Data;

  static StructOfNullablesPtr New();

  template <typename U>
  static StructOfNullablesPtr From(const U& u) {
    return mojo::TypeConverter<StructOfNullablesPtr, U>::Convert(u);
  }

  template <typename U>
  U To() const {
    return mojo::TypeConverter<U, StructOfNullables>::Convert(*this);
  }

  StructOfNullables();
  ~StructOfNullables();
  
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


  bool Equals(const StructOfNullables& other) const;

  mojo::ScopedHandle hdl;
  Struct1Ptr struct_1;
  mojo::String str;
};



// --- Struct serialization helpers ---
size_t GetSerializedSize_(const Struct1& input);
mojo::internal::ValidationError Serialize_(
    Struct1* input,
    mojo::internal::Buffer* buffer,
    internal::Struct1_Data** output);
void Deserialize_(internal::Struct1_Data* input,
                  Struct1* output);

size_t GetSerializedSize_(const Struct2& input);
mojo::internal::ValidationError Serialize_(
    Struct2* input,
    mojo::internal::Buffer* buffer,
    internal::Struct2_Data** output);
void Deserialize_(internal::Struct2_Data* input,
                  Struct2* output);

size_t GetSerializedSize_(const Struct3& input);
mojo::internal::ValidationError Serialize_(
    Struct3* input,
    mojo::internal::Buffer* buffer,
    internal::Struct3_Data** output);
void Deserialize_(internal::Struct3_Data* input,
                  Struct3* output);

size_t GetSerializedSize_(const Struct4& input);
mojo::internal::ValidationError Serialize_(
    Struct4* input,
    mojo::internal::Buffer* buffer,
    internal::Struct4_Data** output);
void Deserialize_(internal::Struct4_Data* input,
                  Struct4* output);

size_t GetSerializedSize_(const Struct5& input);
mojo::internal::ValidationError Serialize_(
    Struct5* input,
    mojo::internal::Buffer* buffer,
    internal::Struct5_Data** output);
void Deserialize_(internal::Struct5_Data* input,
                  Struct5* output);

size_t GetSerializedSize_(const Struct6& input);
mojo::internal::ValidationError Serialize_(
    Struct6* input,
    mojo::internal::Buffer* buffer,
    internal::Struct6_Data** output);
void Deserialize_(internal::Struct6_Data* input,
                  Struct6* output);

size_t GetSerializedSize_(const StructOfNullables& input);
mojo::internal::ValidationError Serialize_(
    StructOfNullables* input,
    mojo::internal::Buffer* buffer,
    internal::StructOfNullables_Data** output);
void Deserialize_(internal::StructOfNullables_Data* input,
                  StructOfNullables* output);


// --- Union serialization helpers ---

// --- Request and response parameter structs for Interface methods ---
}  // namespace test
}  // namespace mojo

#endif  // MOJO_PUBLIC_INTERFACES_BINDINGS_TESTS_SERIALIZATION_TEST_STRUCTS_MOJOM_COMMON_H_
