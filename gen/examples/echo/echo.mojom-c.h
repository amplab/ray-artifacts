// This file was auto-generated by the C bindings generator.

#ifndef EXAMPLES_ECHO_ECHO_MOJOM_C_H_
#define EXAMPLES_ECHO_ECHO_MOJOM_C_H_

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
// Forward declarations for unions.
// Top level constants.


// Top level enums.


// Union definitions.


// Struct definitions.


// Interface definitions.
// --- mojo_examples_Echo ---
#define mojo_examples_Echo__ServiceName ((const char*)"mojo::examples::Echo")
#define mojo_examples_Echo__CurrentVersion ((uint32_t)0)

// Enums
// Constants


// Message: EchoString

#define mojo_examples_Echo_EchoString__Ordinal \
    ((uint32_t)0)
#define mojo_examples_Echo_EchoString__MinVersion \
    ((uint32_t)0)

struct mojo_examples_Echo_EchoString_Request;
// -- mojo_examples_Echo_EchoString_Request --
// Enums
// Constants
// Struct definition
struct mojo_examples_Echo_EchoString_Request {
  struct MojomStructHeader header_;
  union MojomStringPtr value;  // offset,bit = 0,0
  
};

struct mojo_examples_Echo_EchoString_Request* mojo_examples_Echo_EchoString_Request_New(struct MojomBuffer* in_buffer);

void mojo_examples_Echo_EchoString_Request_Init(
  struct mojo_examples_Echo_EchoString_Request* in_data);

void mojo_examples_Echo_EchoString_Request_CloseAllHandles(
  struct mojo_examples_Echo_EchoString_Request* in_data);

struct mojo_examples_Echo_EchoString_Request* mojo_examples_Echo_EchoString_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_examples_Echo_EchoString_Request* in_data);

size_t mojo_examples_Echo_EchoString_Request_ComputeSerializedSize(
  const struct mojo_examples_Echo_EchoString_Request* in_data);

MojomValidationResult mojo_examples_Echo_EchoString_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_examples_Echo_EchoString_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_examples_Echo_EchoString_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


struct mojo_examples_Echo_EchoString_Response;
// -- mojo_examples_Echo_EchoString_Response --
// Enums
// Constants
// Struct definition
struct mojo_examples_Echo_EchoString_Response {
  struct MojomStructHeader header_;
  union MojomStringPtr value;  // offset,bit = 0,0
  
};

struct mojo_examples_Echo_EchoString_Response* mojo_examples_Echo_EchoString_Response_New(struct MojomBuffer* in_buffer);

void mojo_examples_Echo_EchoString_Response_Init(
  struct mojo_examples_Echo_EchoString_Response* in_data);

void mojo_examples_Echo_EchoString_Response_CloseAllHandles(
  struct mojo_examples_Echo_EchoString_Response* in_data);

struct mojo_examples_Echo_EchoString_Response* mojo_examples_Echo_EchoString_Response_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_examples_Echo_EchoString_Response* in_data);

size_t mojo_examples_Echo_EchoString_Response_ComputeSerializedSize(
  const struct mojo_examples_Echo_EchoString_Response* in_data);

MojomValidationResult mojo_examples_Echo_EchoString_Response_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_examples_Echo_EchoString_Response_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_examples_Echo_EchoString_Response_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);







// Type tables declarations for structs and unions.



extern struct MojomPointerTableStructEntry mojo_examples_Echo_EchoString_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_examples_Echo_EchoString_Response__PointerTable[];


#endif  // EXAMPLES_ECHO_ECHO_MOJOM_C_H_