// This file was auto-generated by the C bindings generator.

#ifndef MOJO_SERVICES_GPU_INTERFACES_COMMAND_BUFFER_MOJOM_C_H_
#define MOJO_SERVICES_GPU_INTERFACES_COMMAND_BUFFER_MOJOM_C_H_

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
#include "mojo/services/gpu/interfaces/gpu_capabilities.mojom-c.h"


// Forward declarations for structs.
struct mojo_CommandBufferState;
union mojo_CommandBufferStatePtr {
  struct mojo_CommandBufferState* ptr;
  uint64_t offset;
};
MOJO_STATIC_ASSERT(sizeof(union mojo_CommandBufferStatePtr) == 8,
              "union mojo_CommandBufferStatePtr must be 8 bytes");

// Forward declarations for unions.
// Top level constants.


// Top level enums.


// Union definitions.


// Struct definitions.
// -- mojo_CommandBufferState --
// Enums
// Constants
// Struct definition
struct mojo_CommandBufferState {
  struct MojomStructHeader header_;
  int32_t num_entries;  // offset,bit = 0,0
  int32_t get_offset;  // offset,bit = 4,0
  int32_t put_offset;  // offset,bit = 8,0
  int32_t token;  // offset,bit = 12,0
  int32_t error;  // offset,bit = 16,0
  int32_t context_lost_reason;  // offset,bit = 20,0
  uint32_t generation;  // offset,bit = 24,0
  
};

struct mojo_CommandBufferState* mojo_CommandBufferState_New(struct MojomBuffer* in_buffer);

void mojo_CommandBufferState_Init(
  struct mojo_CommandBufferState* in_data);

void mojo_CommandBufferState_CloseAllHandles(
  struct mojo_CommandBufferState* in_data);

struct mojo_CommandBufferState* mojo_CommandBufferState_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBufferState* in_data);

size_t mojo_CommandBufferState_ComputeSerializedSize(
  const struct mojo_CommandBufferState* in_data);

MojomValidationResult mojo_CommandBufferState_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBufferState_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBufferState_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);




// Interface definitions.
// --- mojo_CommandBufferSyncClient ---
#define mojo_CommandBufferSyncClient__ServiceName ((const char*)"")
#define mojo_CommandBufferSyncClient__CurrentVersion ((uint32_t)0)

// Enums
// Constants


// Message: DidInitialize

#define mojo_CommandBufferSyncClient_DidInitialize__Ordinal \
    ((uint32_t)0)
#define mojo_CommandBufferSyncClient_DidInitialize__MinVersion \
    ((uint32_t)0)

struct mojo_CommandBufferSyncClient_DidInitialize_Request;
// -- mojo_CommandBufferSyncClient_DidInitialize_Request --
// Enums
// Constants
// Struct definition
struct mojo_CommandBufferSyncClient_DidInitialize_Request {
  struct MojomStructHeader header_;
  bool success : 1;  // offset,bit = 0,0
  uint8_t pad0_[7];  // padding
  union mojo_GpuCapabilitiesPtr capabilities;  // offset,bit = 8,0
  
};

struct mojo_CommandBufferSyncClient_DidInitialize_Request* mojo_CommandBufferSyncClient_DidInitialize_Request_New(struct MojomBuffer* in_buffer);

void mojo_CommandBufferSyncClient_DidInitialize_Request_Init(
  struct mojo_CommandBufferSyncClient_DidInitialize_Request* in_data);

void mojo_CommandBufferSyncClient_DidInitialize_Request_CloseAllHandles(
  struct mojo_CommandBufferSyncClient_DidInitialize_Request* in_data);

struct mojo_CommandBufferSyncClient_DidInitialize_Request* mojo_CommandBufferSyncClient_DidInitialize_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBufferSyncClient_DidInitialize_Request* in_data);

size_t mojo_CommandBufferSyncClient_DidInitialize_Request_ComputeSerializedSize(
  const struct mojo_CommandBufferSyncClient_DidInitialize_Request* in_data);

MojomValidationResult mojo_CommandBufferSyncClient_DidInitialize_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBufferSyncClient_DidInitialize_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBufferSyncClient_DidInitialize_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: DidMakeProgress

#define mojo_CommandBufferSyncClient_DidMakeProgress__Ordinal \
    ((uint32_t)1)
#define mojo_CommandBufferSyncClient_DidMakeProgress__MinVersion \
    ((uint32_t)0)

struct mojo_CommandBufferSyncClient_DidMakeProgress_Request;
// -- mojo_CommandBufferSyncClient_DidMakeProgress_Request --
// Enums
// Constants
// Struct definition
struct mojo_CommandBufferSyncClient_DidMakeProgress_Request {
  struct MojomStructHeader header_;
  union mojo_CommandBufferStatePtr state;  // offset,bit = 0,0
  
};

struct mojo_CommandBufferSyncClient_DidMakeProgress_Request* mojo_CommandBufferSyncClient_DidMakeProgress_Request_New(struct MojomBuffer* in_buffer);

void mojo_CommandBufferSyncClient_DidMakeProgress_Request_Init(
  struct mojo_CommandBufferSyncClient_DidMakeProgress_Request* in_data);

void mojo_CommandBufferSyncClient_DidMakeProgress_Request_CloseAllHandles(
  struct mojo_CommandBufferSyncClient_DidMakeProgress_Request* in_data);

struct mojo_CommandBufferSyncClient_DidMakeProgress_Request* mojo_CommandBufferSyncClient_DidMakeProgress_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBufferSyncClient_DidMakeProgress_Request* in_data);

size_t mojo_CommandBufferSyncClient_DidMakeProgress_Request_ComputeSerializedSize(
  const struct mojo_CommandBufferSyncClient_DidMakeProgress_Request* in_data);

MojomValidationResult mojo_CommandBufferSyncClient_DidMakeProgress_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBufferSyncClient_DidMakeProgress_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBufferSyncClient_DidMakeProgress_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);





// --- mojo_CommandBufferSyncPointClient ---
#define mojo_CommandBufferSyncPointClient__ServiceName ((const char*)"")
#define mojo_CommandBufferSyncPointClient__CurrentVersion ((uint32_t)0)

// Enums
// Constants


// Message: DidInsertSyncPoint

#define mojo_CommandBufferSyncPointClient_DidInsertSyncPoint__Ordinal \
    ((uint32_t)0)
#define mojo_CommandBufferSyncPointClient_DidInsertSyncPoint__MinVersion \
    ((uint32_t)0)

struct mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request;
// -- mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request --
// Enums
// Constants
// Struct definition
struct mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request {
  struct MojomStructHeader header_;
  uint32_t sync_point;  // offset,bit = 0,0
  
};

struct mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request* mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request_New(struct MojomBuffer* in_buffer);

void mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request_Init(
  struct mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request* in_data);

void mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request_CloseAllHandles(
  struct mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request* in_data);

struct mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request* mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request* in_data);

size_t mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request_ComputeSerializedSize(
  const struct mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request* in_data);

MojomValidationResult mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);





// --- mojo_CommandBufferLostContextObserver ---
#define mojo_CommandBufferLostContextObserver__ServiceName ((const char*)"")
#define mojo_CommandBufferLostContextObserver__CurrentVersion ((uint32_t)0)

// Enums
// Constants


// Message: DidLoseContext

#define mojo_CommandBufferLostContextObserver_DidLoseContext__Ordinal \
    ((uint32_t)0)
#define mojo_CommandBufferLostContextObserver_DidLoseContext__MinVersion \
    ((uint32_t)0)

struct mojo_CommandBufferLostContextObserver_DidLoseContext_Request;
// -- mojo_CommandBufferLostContextObserver_DidLoseContext_Request --
// Enums
// Constants
// Struct definition
struct mojo_CommandBufferLostContextObserver_DidLoseContext_Request {
  struct MojomStructHeader header_;
  int32_t context_lost_reason;  // offset,bit = 0,0
  
};

struct mojo_CommandBufferLostContextObserver_DidLoseContext_Request* mojo_CommandBufferLostContextObserver_DidLoseContext_Request_New(struct MojomBuffer* in_buffer);

void mojo_CommandBufferLostContextObserver_DidLoseContext_Request_Init(
  struct mojo_CommandBufferLostContextObserver_DidLoseContext_Request* in_data);

void mojo_CommandBufferLostContextObserver_DidLoseContext_Request_CloseAllHandles(
  struct mojo_CommandBufferLostContextObserver_DidLoseContext_Request* in_data);

struct mojo_CommandBufferLostContextObserver_DidLoseContext_Request* mojo_CommandBufferLostContextObserver_DidLoseContext_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBufferLostContextObserver_DidLoseContext_Request* in_data);

size_t mojo_CommandBufferLostContextObserver_DidLoseContext_Request_ComputeSerializedSize(
  const struct mojo_CommandBufferLostContextObserver_DidLoseContext_Request* in_data);

MojomValidationResult mojo_CommandBufferLostContextObserver_DidLoseContext_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBufferLostContextObserver_DidLoseContext_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBufferLostContextObserver_DidLoseContext_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);





// --- mojo_CommandBuffer ---
#define mojo_CommandBuffer__ServiceName ((const char*)"")
#define mojo_CommandBuffer__CurrentVersion ((uint32_t)0)

// Enums
// Constants


// Message: Initialize

#define mojo_CommandBuffer_Initialize__Ordinal \
    ((uint32_t)0)
#define mojo_CommandBuffer_Initialize__MinVersion \
    ((uint32_t)0)

struct mojo_CommandBuffer_Initialize_Request;
// -- mojo_CommandBuffer_Initialize_Request --
// Enums
// Constants
// Struct definition
struct mojo_CommandBuffer_Initialize_Request {
  struct MojomStructHeader header_;
  struct MojomInterfaceData sync_client;  // offset,bit = 0,0
  struct MojomInterfaceData sync_point_client;  // offset,bit = 8,0
  struct MojomInterfaceData lost_observer;  // offset,bit = 16,0
  MojoHandle shared_state;  // offset,bit = 24,0
  
};

struct mojo_CommandBuffer_Initialize_Request* mojo_CommandBuffer_Initialize_Request_New(struct MojomBuffer* in_buffer);

void mojo_CommandBuffer_Initialize_Request_Init(
  struct mojo_CommandBuffer_Initialize_Request* in_data);

void mojo_CommandBuffer_Initialize_Request_CloseAllHandles(
  struct mojo_CommandBuffer_Initialize_Request* in_data);

struct mojo_CommandBuffer_Initialize_Request* mojo_CommandBuffer_Initialize_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBuffer_Initialize_Request* in_data);

size_t mojo_CommandBuffer_Initialize_Request_ComputeSerializedSize(
  const struct mojo_CommandBuffer_Initialize_Request* in_data);

MojomValidationResult mojo_CommandBuffer_Initialize_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBuffer_Initialize_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBuffer_Initialize_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: MakeProgress

#define mojo_CommandBuffer_MakeProgress__Ordinal \
    ((uint32_t)3)
#define mojo_CommandBuffer_MakeProgress__MinVersion \
    ((uint32_t)0)

struct mojo_CommandBuffer_MakeProgress_Request;
// -- mojo_CommandBuffer_MakeProgress_Request --
// Enums
// Constants
// Struct definition
struct mojo_CommandBuffer_MakeProgress_Request {
  struct MojomStructHeader header_;
  int32_t last_get_offset;  // offset,bit = 0,0
  
};

struct mojo_CommandBuffer_MakeProgress_Request* mojo_CommandBuffer_MakeProgress_Request_New(struct MojomBuffer* in_buffer);

void mojo_CommandBuffer_MakeProgress_Request_Init(
  struct mojo_CommandBuffer_MakeProgress_Request* in_data);

void mojo_CommandBuffer_MakeProgress_Request_CloseAllHandles(
  struct mojo_CommandBuffer_MakeProgress_Request* in_data);

struct mojo_CommandBuffer_MakeProgress_Request* mojo_CommandBuffer_MakeProgress_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBuffer_MakeProgress_Request* in_data);

size_t mojo_CommandBuffer_MakeProgress_Request_ComputeSerializedSize(
  const struct mojo_CommandBuffer_MakeProgress_Request* in_data);

MojomValidationResult mojo_CommandBuffer_MakeProgress_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBuffer_MakeProgress_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBuffer_MakeProgress_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: InsertSyncPoint

#define mojo_CommandBuffer_InsertSyncPoint__Ordinal \
    ((uint32_t)6)
#define mojo_CommandBuffer_InsertSyncPoint__MinVersion \
    ((uint32_t)0)

struct mojo_CommandBuffer_InsertSyncPoint_Request;
// -- mojo_CommandBuffer_InsertSyncPoint_Request --
// Enums
// Constants
// Struct definition
struct mojo_CommandBuffer_InsertSyncPoint_Request {
  struct MojomStructHeader header_;
  bool retire : 1;  // offset,bit = 0,0
  
};

struct mojo_CommandBuffer_InsertSyncPoint_Request* mojo_CommandBuffer_InsertSyncPoint_Request_New(struct MojomBuffer* in_buffer);

void mojo_CommandBuffer_InsertSyncPoint_Request_Init(
  struct mojo_CommandBuffer_InsertSyncPoint_Request* in_data);

void mojo_CommandBuffer_InsertSyncPoint_Request_CloseAllHandles(
  struct mojo_CommandBuffer_InsertSyncPoint_Request* in_data);

struct mojo_CommandBuffer_InsertSyncPoint_Request* mojo_CommandBuffer_InsertSyncPoint_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBuffer_InsertSyncPoint_Request* in_data);

size_t mojo_CommandBuffer_InsertSyncPoint_Request_ComputeSerializedSize(
  const struct mojo_CommandBuffer_InsertSyncPoint_Request* in_data);

MojomValidationResult mojo_CommandBuffer_InsertSyncPoint_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBuffer_InsertSyncPoint_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBuffer_InsertSyncPoint_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: RetireSyncPoint

#define mojo_CommandBuffer_RetireSyncPoint__Ordinal \
    ((uint32_t)7)
#define mojo_CommandBuffer_RetireSyncPoint__MinVersion \
    ((uint32_t)0)

struct mojo_CommandBuffer_RetireSyncPoint_Request;
// -- mojo_CommandBuffer_RetireSyncPoint_Request --
// Enums
// Constants
// Struct definition
struct mojo_CommandBuffer_RetireSyncPoint_Request {
  struct MojomStructHeader header_;
  uint32_t sync_point;  // offset,bit = 0,0
  
};

struct mojo_CommandBuffer_RetireSyncPoint_Request* mojo_CommandBuffer_RetireSyncPoint_Request_New(struct MojomBuffer* in_buffer);

void mojo_CommandBuffer_RetireSyncPoint_Request_Init(
  struct mojo_CommandBuffer_RetireSyncPoint_Request* in_data);

void mojo_CommandBuffer_RetireSyncPoint_Request_CloseAllHandles(
  struct mojo_CommandBuffer_RetireSyncPoint_Request* in_data);

struct mojo_CommandBuffer_RetireSyncPoint_Request* mojo_CommandBuffer_RetireSyncPoint_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBuffer_RetireSyncPoint_Request* in_data);

size_t mojo_CommandBuffer_RetireSyncPoint_Request_ComputeSerializedSize(
  const struct mojo_CommandBuffer_RetireSyncPoint_Request* in_data);

MojomValidationResult mojo_CommandBuffer_RetireSyncPoint_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBuffer_RetireSyncPoint_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBuffer_RetireSyncPoint_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: Echo

#define mojo_CommandBuffer_Echo__Ordinal \
    ((uint32_t)8)
#define mojo_CommandBuffer_Echo__MinVersion \
    ((uint32_t)0)

struct mojo_CommandBuffer_Echo_Request;
// -- mojo_CommandBuffer_Echo_Request --
// Enums
// Constants
// Struct definition
struct mojo_CommandBuffer_Echo_Request {
  struct MojomStructHeader header_;
  
};

struct mojo_CommandBuffer_Echo_Request* mojo_CommandBuffer_Echo_Request_New(struct MojomBuffer* in_buffer);

void mojo_CommandBuffer_Echo_Request_Init(
  struct mojo_CommandBuffer_Echo_Request* in_data);

void mojo_CommandBuffer_Echo_Request_CloseAllHandles(
  struct mojo_CommandBuffer_Echo_Request* in_data);

struct mojo_CommandBuffer_Echo_Request* mojo_CommandBuffer_Echo_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBuffer_Echo_Request* in_data);

size_t mojo_CommandBuffer_Echo_Request_ComputeSerializedSize(
  const struct mojo_CommandBuffer_Echo_Request* in_data);

MojomValidationResult mojo_CommandBuffer_Echo_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBuffer_Echo_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBuffer_Echo_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


struct mojo_CommandBuffer_Echo_Response;
// -- mojo_CommandBuffer_Echo_Response --
// Enums
// Constants
// Struct definition
struct mojo_CommandBuffer_Echo_Response {
  struct MojomStructHeader header_;
  
};

struct mojo_CommandBuffer_Echo_Response* mojo_CommandBuffer_Echo_Response_New(struct MojomBuffer* in_buffer);

void mojo_CommandBuffer_Echo_Response_Init(
  struct mojo_CommandBuffer_Echo_Response* in_data);

void mojo_CommandBuffer_Echo_Response_CloseAllHandles(
  struct mojo_CommandBuffer_Echo_Response* in_data);

struct mojo_CommandBuffer_Echo_Response* mojo_CommandBuffer_Echo_Response_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBuffer_Echo_Response* in_data);

size_t mojo_CommandBuffer_Echo_Response_ComputeSerializedSize(
  const struct mojo_CommandBuffer_Echo_Response* in_data);

MojomValidationResult mojo_CommandBuffer_Echo_Response_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBuffer_Echo_Response_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBuffer_Echo_Response_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: SetGetBuffer

#define mojo_CommandBuffer_SetGetBuffer__Ordinal \
    ((uint32_t)1)
#define mojo_CommandBuffer_SetGetBuffer__MinVersion \
    ((uint32_t)0)

struct mojo_CommandBuffer_SetGetBuffer_Request;
// -- mojo_CommandBuffer_SetGetBuffer_Request --
// Enums
// Constants
// Struct definition
struct mojo_CommandBuffer_SetGetBuffer_Request {
  struct MojomStructHeader header_;
  int32_t buffer;  // offset,bit = 0,0
  
};

struct mojo_CommandBuffer_SetGetBuffer_Request* mojo_CommandBuffer_SetGetBuffer_Request_New(struct MojomBuffer* in_buffer);

void mojo_CommandBuffer_SetGetBuffer_Request_Init(
  struct mojo_CommandBuffer_SetGetBuffer_Request* in_data);

void mojo_CommandBuffer_SetGetBuffer_Request_CloseAllHandles(
  struct mojo_CommandBuffer_SetGetBuffer_Request* in_data);

struct mojo_CommandBuffer_SetGetBuffer_Request* mojo_CommandBuffer_SetGetBuffer_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBuffer_SetGetBuffer_Request* in_data);

size_t mojo_CommandBuffer_SetGetBuffer_Request_ComputeSerializedSize(
  const struct mojo_CommandBuffer_SetGetBuffer_Request* in_data);

MojomValidationResult mojo_CommandBuffer_SetGetBuffer_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBuffer_SetGetBuffer_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBuffer_SetGetBuffer_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: Flush

#define mojo_CommandBuffer_Flush__Ordinal \
    ((uint32_t)2)
#define mojo_CommandBuffer_Flush__MinVersion \
    ((uint32_t)0)

struct mojo_CommandBuffer_Flush_Request;
// -- mojo_CommandBuffer_Flush_Request --
// Enums
// Constants
// Struct definition
struct mojo_CommandBuffer_Flush_Request {
  struct MojomStructHeader header_;
  int32_t put_offset;  // offset,bit = 0,0
  
};

struct mojo_CommandBuffer_Flush_Request* mojo_CommandBuffer_Flush_Request_New(struct MojomBuffer* in_buffer);

void mojo_CommandBuffer_Flush_Request_Init(
  struct mojo_CommandBuffer_Flush_Request* in_data);

void mojo_CommandBuffer_Flush_Request_CloseAllHandles(
  struct mojo_CommandBuffer_Flush_Request* in_data);

struct mojo_CommandBuffer_Flush_Request* mojo_CommandBuffer_Flush_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBuffer_Flush_Request* in_data);

size_t mojo_CommandBuffer_Flush_Request_ComputeSerializedSize(
  const struct mojo_CommandBuffer_Flush_Request* in_data);

MojomValidationResult mojo_CommandBuffer_Flush_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBuffer_Flush_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBuffer_Flush_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: RegisterTransferBuffer

#define mojo_CommandBuffer_RegisterTransferBuffer__Ordinal \
    ((uint32_t)4)
#define mojo_CommandBuffer_RegisterTransferBuffer__MinVersion \
    ((uint32_t)0)

struct mojo_CommandBuffer_RegisterTransferBuffer_Request;
// -- mojo_CommandBuffer_RegisterTransferBuffer_Request --
// Enums
// Constants
// Struct definition
struct mojo_CommandBuffer_RegisterTransferBuffer_Request {
  struct MojomStructHeader header_;
  int32_t id;  // offset,bit = 0,0
  MojoHandle transfer_buffer;  // offset,bit = 4,0
  uint32_t size;  // offset,bit = 8,0
  
};

struct mojo_CommandBuffer_RegisterTransferBuffer_Request* mojo_CommandBuffer_RegisterTransferBuffer_Request_New(struct MojomBuffer* in_buffer);

void mojo_CommandBuffer_RegisterTransferBuffer_Request_Init(
  struct mojo_CommandBuffer_RegisterTransferBuffer_Request* in_data);

void mojo_CommandBuffer_RegisterTransferBuffer_Request_CloseAllHandles(
  struct mojo_CommandBuffer_RegisterTransferBuffer_Request* in_data);

struct mojo_CommandBuffer_RegisterTransferBuffer_Request* mojo_CommandBuffer_RegisterTransferBuffer_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBuffer_RegisterTransferBuffer_Request* in_data);

size_t mojo_CommandBuffer_RegisterTransferBuffer_Request_ComputeSerializedSize(
  const struct mojo_CommandBuffer_RegisterTransferBuffer_Request* in_data);

MojomValidationResult mojo_CommandBuffer_RegisterTransferBuffer_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBuffer_RegisterTransferBuffer_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBuffer_RegisterTransferBuffer_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: DestroyTransferBuffer

#define mojo_CommandBuffer_DestroyTransferBuffer__Ordinal \
    ((uint32_t)5)
#define mojo_CommandBuffer_DestroyTransferBuffer__MinVersion \
    ((uint32_t)0)

struct mojo_CommandBuffer_DestroyTransferBuffer_Request;
// -- mojo_CommandBuffer_DestroyTransferBuffer_Request --
// Enums
// Constants
// Struct definition
struct mojo_CommandBuffer_DestroyTransferBuffer_Request {
  struct MojomStructHeader header_;
  int32_t id;  // offset,bit = 0,0
  
};

struct mojo_CommandBuffer_DestroyTransferBuffer_Request* mojo_CommandBuffer_DestroyTransferBuffer_Request_New(struct MojomBuffer* in_buffer);

void mojo_CommandBuffer_DestroyTransferBuffer_Request_Init(
  struct mojo_CommandBuffer_DestroyTransferBuffer_Request* in_data);

void mojo_CommandBuffer_DestroyTransferBuffer_Request_CloseAllHandles(
  struct mojo_CommandBuffer_DestroyTransferBuffer_Request* in_data);

struct mojo_CommandBuffer_DestroyTransferBuffer_Request* mojo_CommandBuffer_DestroyTransferBuffer_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_CommandBuffer_DestroyTransferBuffer_Request* in_data);

size_t mojo_CommandBuffer_DestroyTransferBuffer_Request_ComputeSerializedSize(
  const struct mojo_CommandBuffer_DestroyTransferBuffer_Request* in_data);

MojomValidationResult mojo_CommandBuffer_DestroyTransferBuffer_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_CommandBuffer_DestroyTransferBuffer_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_CommandBuffer_DestroyTransferBuffer_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);







// Type tables declarations for structs and unions.



extern struct MojomPointerTableStructEntry mojo_CommandBufferState__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_CommandBufferSyncClient_DidInitialize_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_CommandBufferSyncClient_DidMakeProgress_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_CommandBufferSyncPointClient_DidInsertSyncPoint_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_CommandBufferLostContextObserver_DidLoseContext_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_CommandBuffer_RegisterTransferBuffer_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_CommandBuffer_DestroyTransferBuffer_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_CommandBuffer_SetGetBuffer_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_CommandBuffer_Flush_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_CommandBuffer_InsertSyncPoint_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_CommandBuffer_RetireSyncPoint_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_CommandBuffer_Echo_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_CommandBuffer_Echo_Response__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_CommandBuffer_Initialize_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_CommandBuffer_MakeProgress_Request__PointerTable[];


#endif  // MOJO_SERVICES_GPU_INTERFACES_COMMAND_BUFFER_MOJOM_C_H_