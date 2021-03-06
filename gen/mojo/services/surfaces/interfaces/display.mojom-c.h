// This file was auto-generated by the C bindings generator.

#ifndef MOJO_SERVICES_SURFACES_INTERFACES_DISPLAY_MOJOM_C_H_
#define MOJO_SERVICES_SURFACES_INTERFACES_DISPLAY_MOJOM_C_H_

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
#include "mojo/services/gpu/interfaces/context_provider.mojom-c.h"
#include "mojo/services/gpu/interfaces/viewport_parameter_listener.mojom-c.h"
#include "mojo/services/surfaces/interfaces/surfaces.mojom-c.h"


// Forward declarations for structs.
// Forward declarations for unions.
// Top level constants.


// Top level enums.


// Union definitions.


// Struct definitions.


// Interface definitions.
// --- mojo_Display ---
#define mojo_Display__ServiceName ((const char*)"")
#define mojo_Display__CurrentVersion ((uint32_t)0)

// Enums
// Constants


// Message: SubmitFrame

#define mojo_Display_SubmitFrame__Ordinal \
    ((uint32_t)0)
#define mojo_Display_SubmitFrame__MinVersion \
    ((uint32_t)0)

struct mojo_Display_SubmitFrame_Request;
// -- mojo_Display_SubmitFrame_Request --
// Enums
// Constants
// Struct definition
struct mojo_Display_SubmitFrame_Request {
  struct MojomStructHeader header_;
  union mojo_FramePtr frame;  // offset,bit = 0,0
  
};

struct mojo_Display_SubmitFrame_Request* mojo_Display_SubmitFrame_Request_New(struct MojomBuffer* in_buffer);

void mojo_Display_SubmitFrame_Request_Init(
  struct mojo_Display_SubmitFrame_Request* in_data);

void mojo_Display_SubmitFrame_Request_CloseAllHandles(
  struct mojo_Display_SubmitFrame_Request* in_data);

struct mojo_Display_SubmitFrame_Request* mojo_Display_SubmitFrame_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_Display_SubmitFrame_Request* in_data);

size_t mojo_Display_SubmitFrame_Request_ComputeSerializedSize(
  const struct mojo_Display_SubmitFrame_Request* in_data);

MojomValidationResult mojo_Display_SubmitFrame_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_Display_SubmitFrame_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_Display_SubmitFrame_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


struct mojo_Display_SubmitFrame_Response;
// -- mojo_Display_SubmitFrame_Response --
// Enums
// Constants
// Struct definition
struct mojo_Display_SubmitFrame_Response {
  struct MojomStructHeader header_;
  
};

struct mojo_Display_SubmitFrame_Response* mojo_Display_SubmitFrame_Response_New(struct MojomBuffer* in_buffer);

void mojo_Display_SubmitFrame_Response_Init(
  struct mojo_Display_SubmitFrame_Response* in_data);

void mojo_Display_SubmitFrame_Response_CloseAllHandles(
  struct mojo_Display_SubmitFrame_Response* in_data);

struct mojo_Display_SubmitFrame_Response* mojo_Display_SubmitFrame_Response_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_Display_SubmitFrame_Response* in_data);

size_t mojo_Display_SubmitFrame_Response_ComputeSerializedSize(
  const struct mojo_Display_SubmitFrame_Response* in_data);

MojomValidationResult mojo_Display_SubmitFrame_Response_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_Display_SubmitFrame_Response_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_Display_SubmitFrame_Response_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);





// --- mojo_DisplayFactory ---
#define mojo_DisplayFactory__ServiceName ((const char*)"mojo::DisplayFactory")
#define mojo_DisplayFactory__CurrentVersion ((uint32_t)0)

// Enums
// Constants


// Message: Create

#define mojo_DisplayFactory_Create__Ordinal \
    ((uint32_t)0)
#define mojo_DisplayFactory_Create__MinVersion \
    ((uint32_t)0)

struct mojo_DisplayFactory_Create_Request;
// -- mojo_DisplayFactory_Create_Request --
// Enums
// Constants
// Struct definition
struct mojo_DisplayFactory_Create_Request {
  struct MojomStructHeader header_;
  struct MojomInterfaceData context_provider;  // offset,bit = 0,0
  struct MojomInterfaceData returner;  // offset,bit = 8,0
  MojoHandle display_request;  // offset,bit = 16,0
  
};

struct mojo_DisplayFactory_Create_Request* mojo_DisplayFactory_Create_Request_New(struct MojomBuffer* in_buffer);

void mojo_DisplayFactory_Create_Request_Init(
  struct mojo_DisplayFactory_Create_Request* in_data);

void mojo_DisplayFactory_Create_Request_CloseAllHandles(
  struct mojo_DisplayFactory_Create_Request* in_data);

struct mojo_DisplayFactory_Create_Request* mojo_DisplayFactory_Create_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_DisplayFactory_Create_Request* in_data);

size_t mojo_DisplayFactory_Create_Request_ComputeSerializedSize(
  const struct mojo_DisplayFactory_Create_Request* in_data);

MojomValidationResult mojo_DisplayFactory_Create_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_DisplayFactory_Create_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_DisplayFactory_Create_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);







// Type tables declarations for structs and unions.



extern struct MojomPointerTableStructEntry mojo_Display_SubmitFrame_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_Display_SubmitFrame_Response__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_DisplayFactory_Create_Request__PointerTable[];


#endif  // MOJO_SERVICES_SURFACES_INTERFACES_DISPLAY_MOJOM_C_H_