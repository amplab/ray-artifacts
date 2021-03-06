// This file was auto-generated by the C bindings generator.

#ifndef MOJO_SERVICES_HTTP_SERVER_INTERFACES_HTTP_RESPONSE_MOJOM_C_H_
#define MOJO_SERVICES_HTTP_SERVER_INTERFACES_HTTP_RESPONSE_MOJOM_C_H_

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
struct http_server_HttpResponse;
union http_server_HttpResponsePtr {
  struct http_server_HttpResponse* ptr;
  uint64_t offset;
};
MOJO_STATIC_ASSERT(sizeof(union http_server_HttpResponsePtr) == 8,
              "union http_server_HttpResponsePtr must be 8 bytes");

// Forward declarations for unions.
// Top level constants.


// Top level enums.


// Union definitions.


// Struct definitions.
// -- http_server_HttpResponse --
// Enums
// Constants
// Struct definition
struct http_server_HttpResponse {
  struct MojomStructHeader header_;
  uint32_t status_code;  // offset,bit = 0,0
  MojoHandle body;  // offset,bit = 4,0
  int64_t content_length;  // offset,bit = 8,0
  union MojomStringPtr content_type;  // offset,bit = 16,0
  union MojomMapPtr custom_headers;  // offset,bit = 24,0
  
};

struct http_server_HttpResponse* http_server_HttpResponse_New(struct MojomBuffer* in_buffer);

void http_server_HttpResponse_Init(
  struct http_server_HttpResponse* in_data);

void http_server_HttpResponse_CloseAllHandles(
  struct http_server_HttpResponse* in_data);

struct http_server_HttpResponse* http_server_HttpResponse_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct http_server_HttpResponse* in_data);

size_t http_server_HttpResponse_ComputeSerializedSize(
  const struct http_server_HttpResponse* in_data);

MojomValidationResult http_server_HttpResponse_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult http_server_HttpResponse_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult http_server_HttpResponse_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);




// Interface definitions.


// Type tables declarations for structs and unions.



extern struct MojomPointerTableStructEntry http_server_HttpResponse__PointerTable[];


#endif  // MOJO_SERVICES_HTTP_SERVER_INTERFACES_HTTP_RESPONSE_MOJOM_C_H_