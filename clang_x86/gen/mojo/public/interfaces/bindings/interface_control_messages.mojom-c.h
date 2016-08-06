// This file was auto-generated by the C bindings generator.

#ifndef MOJO_PUBLIC_INTERFACES_BINDINGS_INTERFACE_CONTROL_MESSAGES_MOJOM_C_H_
#define MOJO_PUBLIC_INTERFACES_BINDINGS_INTERFACE_CONTROL_MESSAGES_MOJOM_C_H_

#include <assert.h>
#include <math.h>
#include <stdbool.h>
#include <stdint.h>

#include "mojo/public/c/bindings/array.h"
#include "mojo/public/c/bindings/buffer.h"
#include "mojo/public/c/bindings/interface.h"
#include "mojo/public/c/bindings/lib/type_table.h"
#include "mojo/public/c/bindings/map.h"
#include "mojo/public/c/bindings/string.h"
#include "mojo/public/c/bindings/validation.h"
#include "mojo/public/c/system/handle.h"

// Imports.


// Forward declarations for structs.
struct mojo_RunMessageParams;
union mojo_RunMessageParamsPtr {
  struct mojo_RunMessageParams* ptr;
  uint64_t offset;
};
MOJO_STATIC_ASSERT(sizeof(union mojo_RunMessageParamsPtr) == 8,
              "union mojo_RunMessageParamsPtr must be 8 bytes");

struct mojo_RunResponseMessageParams;
union mojo_RunResponseMessageParamsPtr {
  struct mojo_RunResponseMessageParams* ptr;
  uint64_t offset;
};
MOJO_STATIC_ASSERT(sizeof(union mojo_RunResponseMessageParamsPtr) == 8,
              "union mojo_RunResponseMessageParamsPtr must be 8 bytes");

struct mojo_QueryVersion;
union mojo_QueryVersionPtr {
  struct mojo_QueryVersion* ptr;
  uint64_t offset;
};
MOJO_STATIC_ASSERT(sizeof(union mojo_QueryVersionPtr) == 8,
              "union mojo_QueryVersionPtr must be 8 bytes");

struct mojo_QueryVersionResult;
union mojo_QueryVersionResultPtr {
  struct mojo_QueryVersionResult* ptr;
  uint64_t offset;
};
MOJO_STATIC_ASSERT(sizeof(union mojo_QueryVersionResultPtr) == 8,
              "union mojo_QueryVersionResultPtr must be 8 bytes");

struct mojo_RunOrClosePipeMessageParams;
union mojo_RunOrClosePipeMessageParamsPtr {
  struct mojo_RunOrClosePipeMessageParams* ptr;
  uint64_t offset;
};
MOJO_STATIC_ASSERT(sizeof(union mojo_RunOrClosePipeMessageParamsPtr) == 8,
              "union mojo_RunOrClosePipeMessageParamsPtr must be 8 bytes");

struct mojo_RequireVersion;
union mojo_RequireVersionPtr {
  struct mojo_RequireVersion* ptr;
  uint64_t offset;
};
MOJO_STATIC_ASSERT(sizeof(union mojo_RequireVersionPtr) == 8,
              "union mojo_RequireVersionPtr must be 8 bytes");

// Forward declarations for unions.
// Top level constants.
const uint32_t mojo_kRunMessageId;
const uint32_t mojo_kRunOrClosePipeMessageId;


// Top level enums.


// Union definitions.


// Struct definitions.
// -- mojo_RunMessageParams --
// Enums
// Constants
// Struct definition
struct mojo_RunMessageParams {
  struct MojomStructHeader header_;
  uint32_t reserved0;  // offset,bit = 0,0
  uint32_t reserved1;  // offset,bit = 4,0
  union mojo_QueryVersionPtr query_version;  // offset,bit = 8,0
  
};

struct mojo_RunMessageParams* mojo_RunMessageParams_New(struct MojomBuffer* in_buffer);

void mojo_RunMessageParams_Init(
  struct mojo_RunMessageParams* in_data);

void mojo_RunMessageParams_CloseAllHandles(
  struct mojo_RunMessageParams* in_data);

struct mojo_RunMessageParams* mojo_RunMessageParams_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_RunMessageParams* in_data);

size_t mojo_RunMessageParams_ComputeSerializedSize(
  const struct mojo_RunMessageParams* in_data);

MojomValidationResult mojo_RunMessageParams_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_RunMessageParams_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_RunMessageParams_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


// -- mojo_RunResponseMessageParams --
// Enums
// Constants
// Struct definition
struct mojo_RunResponseMessageParams {
  struct MojomStructHeader header_;
  uint32_t reserved0;  // offset,bit = 0,0
  uint32_t reserved1;  // offset,bit = 4,0
  union mojo_QueryVersionResultPtr query_version_result;  // offset,bit = 8,0
  
};

struct mojo_RunResponseMessageParams* mojo_RunResponseMessageParams_New(struct MojomBuffer* in_buffer);

void mojo_RunResponseMessageParams_Init(
  struct mojo_RunResponseMessageParams* in_data);

void mojo_RunResponseMessageParams_CloseAllHandles(
  struct mojo_RunResponseMessageParams* in_data);

struct mojo_RunResponseMessageParams* mojo_RunResponseMessageParams_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_RunResponseMessageParams* in_data);

size_t mojo_RunResponseMessageParams_ComputeSerializedSize(
  const struct mojo_RunResponseMessageParams* in_data);

MojomValidationResult mojo_RunResponseMessageParams_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_RunResponseMessageParams_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_RunResponseMessageParams_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


// -- mojo_QueryVersion --
// Enums
// Constants
// Struct definition
struct mojo_QueryVersion {
  struct MojomStructHeader header_;
  
};

struct mojo_QueryVersion* mojo_QueryVersion_New(struct MojomBuffer* in_buffer);

void mojo_QueryVersion_Init(
  struct mojo_QueryVersion* in_data);

void mojo_QueryVersion_CloseAllHandles(
  struct mojo_QueryVersion* in_data);

struct mojo_QueryVersion* mojo_QueryVersion_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_QueryVersion* in_data);

size_t mojo_QueryVersion_ComputeSerializedSize(
  const struct mojo_QueryVersion* in_data);

MojomValidationResult mojo_QueryVersion_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_QueryVersion_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_QueryVersion_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


// -- mojo_QueryVersionResult --
// Enums
// Constants
// Struct definition
struct mojo_QueryVersionResult {
  struct MojomStructHeader header_;
  uint32_t version;  // offset,bit = 0,0
  
};

struct mojo_QueryVersionResult* mojo_QueryVersionResult_New(struct MojomBuffer* in_buffer);

void mojo_QueryVersionResult_Init(
  struct mojo_QueryVersionResult* in_data);

void mojo_QueryVersionResult_CloseAllHandles(
  struct mojo_QueryVersionResult* in_data);

struct mojo_QueryVersionResult* mojo_QueryVersionResult_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_QueryVersionResult* in_data);

size_t mojo_QueryVersionResult_ComputeSerializedSize(
  const struct mojo_QueryVersionResult* in_data);

MojomValidationResult mojo_QueryVersionResult_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_QueryVersionResult_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_QueryVersionResult_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


// -- mojo_RunOrClosePipeMessageParams --
// Enums
// Constants
// Struct definition
struct mojo_RunOrClosePipeMessageParams {
  struct MojomStructHeader header_;
  uint32_t reserved0;  // offset,bit = 0,0
  uint32_t reserved1;  // offset,bit = 4,0
  union mojo_RequireVersionPtr require_version;  // offset,bit = 8,0
  
};

struct mojo_RunOrClosePipeMessageParams* mojo_RunOrClosePipeMessageParams_New(struct MojomBuffer* in_buffer);

void mojo_RunOrClosePipeMessageParams_Init(
  struct mojo_RunOrClosePipeMessageParams* in_data);

void mojo_RunOrClosePipeMessageParams_CloseAllHandles(
  struct mojo_RunOrClosePipeMessageParams* in_data);

struct mojo_RunOrClosePipeMessageParams* mojo_RunOrClosePipeMessageParams_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_RunOrClosePipeMessageParams* in_data);

size_t mojo_RunOrClosePipeMessageParams_ComputeSerializedSize(
  const struct mojo_RunOrClosePipeMessageParams* in_data);

MojomValidationResult mojo_RunOrClosePipeMessageParams_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_RunOrClosePipeMessageParams_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_RunOrClosePipeMessageParams_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


// -- mojo_RequireVersion --
// Enums
// Constants
// Struct definition
struct mojo_RequireVersion {
  struct MojomStructHeader header_;
  uint32_t version;  // offset,bit = 0,0
  
};

struct mojo_RequireVersion* mojo_RequireVersion_New(struct MojomBuffer* in_buffer);

void mojo_RequireVersion_Init(
  struct mojo_RequireVersion* in_data);

void mojo_RequireVersion_CloseAllHandles(
  struct mojo_RequireVersion* in_data);

struct mojo_RequireVersion* mojo_RequireVersion_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_RequireVersion* in_data);

size_t mojo_RequireVersion_ComputeSerializedSize(
  const struct mojo_RequireVersion* in_data);

MojomValidationResult mojo_RequireVersion_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_RequireVersion_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_RequireVersion_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);




// Interface definitions.


// Type tables declarations for structs and unions.



extern struct MojomPointerTableStructEntry mojo_RunMessageParams__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_RunResponseMessageParams__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_QueryVersion__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_QueryVersionResult__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_RunOrClosePipeMessageParams__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_RequireVersion__PointerTable[];


#endif  // MOJO_PUBLIC_INTERFACES_BINDINGS_INTERFACE_CONTROL_MESSAGES_MOJOM_C_H_