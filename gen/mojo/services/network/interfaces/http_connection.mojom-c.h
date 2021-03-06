// This file was auto-generated by the C bindings generator.

#ifndef MOJO_SERVICES_NETWORK_INTERFACES_HTTP_CONNECTION_MOJOM_C_H_
#define MOJO_SERVICES_NETWORK_INTERFACES_HTTP_CONNECTION_MOJOM_C_H_

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
#include "mojo/public/interfaces/network/network_error.mojom-c.h"
#include "mojo/services/network/interfaces/http_message.mojom-c.h"
#include "mojo/services/network/interfaces/web_socket.mojom-c.h"


// Forward declarations for structs.
// Forward declarations for unions.
// Top level constants.


// Top level enums.


// Union definitions.


// Struct definitions.


// Interface definitions.
// --- mojo_HttpConnection ---
#define mojo_HttpConnection__ServiceName ((const char*)"")
#define mojo_HttpConnection__CurrentVersion ((uint32_t)0)

// Enums
// Constants


// Message: SetSendBufferSize

#define mojo_HttpConnection_SetSendBufferSize__Ordinal \
    ((uint32_t)0)
#define mojo_HttpConnection_SetSendBufferSize__MinVersion \
    ((uint32_t)0)

struct mojo_HttpConnection_SetSendBufferSize_Request;
// -- mojo_HttpConnection_SetSendBufferSize_Request --
// Enums
// Constants
// Struct definition
struct mojo_HttpConnection_SetSendBufferSize_Request {
  struct MojomStructHeader header_;
  uint32_t size;  // offset,bit = 0,0
  
};

struct mojo_HttpConnection_SetSendBufferSize_Request* mojo_HttpConnection_SetSendBufferSize_Request_New(struct MojomBuffer* in_buffer);

void mojo_HttpConnection_SetSendBufferSize_Request_Init(
  struct mojo_HttpConnection_SetSendBufferSize_Request* in_data);

void mojo_HttpConnection_SetSendBufferSize_Request_CloseAllHandles(
  struct mojo_HttpConnection_SetSendBufferSize_Request* in_data);

struct mojo_HttpConnection_SetSendBufferSize_Request* mojo_HttpConnection_SetSendBufferSize_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_HttpConnection_SetSendBufferSize_Request* in_data);

size_t mojo_HttpConnection_SetSendBufferSize_Request_ComputeSerializedSize(
  const struct mojo_HttpConnection_SetSendBufferSize_Request* in_data);

MojomValidationResult mojo_HttpConnection_SetSendBufferSize_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_HttpConnection_SetSendBufferSize_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_HttpConnection_SetSendBufferSize_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


struct mojo_HttpConnection_SetSendBufferSize_Response;
// -- mojo_HttpConnection_SetSendBufferSize_Response --
// Enums
// Constants
// Struct definition
struct mojo_HttpConnection_SetSendBufferSize_Response {
  struct MojomStructHeader header_;
  union mojo_NetworkErrorPtr result;  // offset,bit = 0,0
  
};

struct mojo_HttpConnection_SetSendBufferSize_Response* mojo_HttpConnection_SetSendBufferSize_Response_New(struct MojomBuffer* in_buffer);

void mojo_HttpConnection_SetSendBufferSize_Response_Init(
  struct mojo_HttpConnection_SetSendBufferSize_Response* in_data);

void mojo_HttpConnection_SetSendBufferSize_Response_CloseAllHandles(
  struct mojo_HttpConnection_SetSendBufferSize_Response* in_data);

struct mojo_HttpConnection_SetSendBufferSize_Response* mojo_HttpConnection_SetSendBufferSize_Response_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_HttpConnection_SetSendBufferSize_Response* in_data);

size_t mojo_HttpConnection_SetSendBufferSize_Response_ComputeSerializedSize(
  const struct mojo_HttpConnection_SetSendBufferSize_Response* in_data);

MojomValidationResult mojo_HttpConnection_SetSendBufferSize_Response_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_HttpConnection_SetSendBufferSize_Response_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_HttpConnection_SetSendBufferSize_Response_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: SetReceiveBufferSize

#define mojo_HttpConnection_SetReceiveBufferSize__Ordinal \
    ((uint32_t)1)
#define mojo_HttpConnection_SetReceiveBufferSize__MinVersion \
    ((uint32_t)0)

struct mojo_HttpConnection_SetReceiveBufferSize_Request;
// -- mojo_HttpConnection_SetReceiveBufferSize_Request --
// Enums
// Constants
// Struct definition
struct mojo_HttpConnection_SetReceiveBufferSize_Request {
  struct MojomStructHeader header_;
  uint32_t size;  // offset,bit = 0,0
  
};

struct mojo_HttpConnection_SetReceiveBufferSize_Request* mojo_HttpConnection_SetReceiveBufferSize_Request_New(struct MojomBuffer* in_buffer);

void mojo_HttpConnection_SetReceiveBufferSize_Request_Init(
  struct mojo_HttpConnection_SetReceiveBufferSize_Request* in_data);

void mojo_HttpConnection_SetReceiveBufferSize_Request_CloseAllHandles(
  struct mojo_HttpConnection_SetReceiveBufferSize_Request* in_data);

struct mojo_HttpConnection_SetReceiveBufferSize_Request* mojo_HttpConnection_SetReceiveBufferSize_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_HttpConnection_SetReceiveBufferSize_Request* in_data);

size_t mojo_HttpConnection_SetReceiveBufferSize_Request_ComputeSerializedSize(
  const struct mojo_HttpConnection_SetReceiveBufferSize_Request* in_data);

MojomValidationResult mojo_HttpConnection_SetReceiveBufferSize_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_HttpConnection_SetReceiveBufferSize_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_HttpConnection_SetReceiveBufferSize_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


struct mojo_HttpConnection_SetReceiveBufferSize_Response;
// -- mojo_HttpConnection_SetReceiveBufferSize_Response --
// Enums
// Constants
// Struct definition
struct mojo_HttpConnection_SetReceiveBufferSize_Response {
  struct MojomStructHeader header_;
  union mojo_NetworkErrorPtr result;  // offset,bit = 0,0
  
};

struct mojo_HttpConnection_SetReceiveBufferSize_Response* mojo_HttpConnection_SetReceiveBufferSize_Response_New(struct MojomBuffer* in_buffer);

void mojo_HttpConnection_SetReceiveBufferSize_Response_Init(
  struct mojo_HttpConnection_SetReceiveBufferSize_Response* in_data);

void mojo_HttpConnection_SetReceiveBufferSize_Response_CloseAllHandles(
  struct mojo_HttpConnection_SetReceiveBufferSize_Response* in_data);

struct mojo_HttpConnection_SetReceiveBufferSize_Response* mojo_HttpConnection_SetReceiveBufferSize_Response_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_HttpConnection_SetReceiveBufferSize_Response* in_data);

size_t mojo_HttpConnection_SetReceiveBufferSize_Response_ComputeSerializedSize(
  const struct mojo_HttpConnection_SetReceiveBufferSize_Response* in_data);

MojomValidationResult mojo_HttpConnection_SetReceiveBufferSize_Response_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_HttpConnection_SetReceiveBufferSize_Response_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_HttpConnection_SetReceiveBufferSize_Response_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);





// --- mojo_HttpConnectionDelegate ---
#define mojo_HttpConnectionDelegate__ServiceName ((const char*)"")
#define mojo_HttpConnectionDelegate__CurrentVersion ((uint32_t)0)

// Enums
// Constants


// Message: OnReceivedRequest

#define mojo_HttpConnectionDelegate_OnReceivedRequest__Ordinal \
    ((uint32_t)0)
#define mojo_HttpConnectionDelegate_OnReceivedRequest__MinVersion \
    ((uint32_t)0)

struct mojo_HttpConnectionDelegate_OnReceivedRequest_Request;
// -- mojo_HttpConnectionDelegate_OnReceivedRequest_Request --
// Enums
// Constants
// Struct definition
struct mojo_HttpConnectionDelegate_OnReceivedRequest_Request {
  struct MojomStructHeader header_;
  union mojo_HttpRequestPtr request;  // offset,bit = 0,0
  
};

struct mojo_HttpConnectionDelegate_OnReceivedRequest_Request* mojo_HttpConnectionDelegate_OnReceivedRequest_Request_New(struct MojomBuffer* in_buffer);

void mojo_HttpConnectionDelegate_OnReceivedRequest_Request_Init(
  struct mojo_HttpConnectionDelegate_OnReceivedRequest_Request* in_data);

void mojo_HttpConnectionDelegate_OnReceivedRequest_Request_CloseAllHandles(
  struct mojo_HttpConnectionDelegate_OnReceivedRequest_Request* in_data);

struct mojo_HttpConnectionDelegate_OnReceivedRequest_Request* mojo_HttpConnectionDelegate_OnReceivedRequest_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_HttpConnectionDelegate_OnReceivedRequest_Request* in_data);

size_t mojo_HttpConnectionDelegate_OnReceivedRequest_Request_ComputeSerializedSize(
  const struct mojo_HttpConnectionDelegate_OnReceivedRequest_Request* in_data);

MojomValidationResult mojo_HttpConnectionDelegate_OnReceivedRequest_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_HttpConnectionDelegate_OnReceivedRequest_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_HttpConnectionDelegate_OnReceivedRequest_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


struct mojo_HttpConnectionDelegate_OnReceivedRequest_Response;
// -- mojo_HttpConnectionDelegate_OnReceivedRequest_Response --
// Enums
// Constants
// Struct definition
struct mojo_HttpConnectionDelegate_OnReceivedRequest_Response {
  struct MojomStructHeader header_;
  union mojo_HttpResponsePtr response;  // offset,bit = 0,0
  
};

struct mojo_HttpConnectionDelegate_OnReceivedRequest_Response* mojo_HttpConnectionDelegate_OnReceivedRequest_Response_New(struct MojomBuffer* in_buffer);

void mojo_HttpConnectionDelegate_OnReceivedRequest_Response_Init(
  struct mojo_HttpConnectionDelegate_OnReceivedRequest_Response* in_data);

void mojo_HttpConnectionDelegate_OnReceivedRequest_Response_CloseAllHandles(
  struct mojo_HttpConnectionDelegate_OnReceivedRequest_Response* in_data);

struct mojo_HttpConnectionDelegate_OnReceivedRequest_Response* mojo_HttpConnectionDelegate_OnReceivedRequest_Response_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_HttpConnectionDelegate_OnReceivedRequest_Response* in_data);

size_t mojo_HttpConnectionDelegate_OnReceivedRequest_Response_ComputeSerializedSize(
  const struct mojo_HttpConnectionDelegate_OnReceivedRequest_Response* in_data);

MojomValidationResult mojo_HttpConnectionDelegate_OnReceivedRequest_Response_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_HttpConnectionDelegate_OnReceivedRequest_Response_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_HttpConnectionDelegate_OnReceivedRequest_Response_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: OnReceivedWebSocketRequest

#define mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest__Ordinal \
    ((uint32_t)1)
#define mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest__MinVersion \
    ((uint32_t)0)

struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request;
// -- mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request --
// Enums
// Constants
// Struct definition
struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request {
  struct MojomStructHeader header_;
  union mojo_HttpRequestPtr request;  // offset,bit = 0,0
  
};

struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request* mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request_New(struct MojomBuffer* in_buffer);

void mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request_Init(
  struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request* in_data);

void mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request_CloseAllHandles(
  struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request* in_data);

struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request* mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request* in_data);

size_t mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request_ComputeSerializedSize(
  const struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request* in_data);

MojomValidationResult mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response;
// -- mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response --
// Enums
// Constants
// Struct definition
struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response {
  struct MojomStructHeader header_;
  MojoHandle web_socket;  // offset,bit = 0,0
  MojoHandle send_stream;  // offset,bit = 4,0
  struct MojomInterfaceData client;  // offset,bit = 8,0
  
};

struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response* mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response_New(struct MojomBuffer* in_buffer);

void mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response_Init(
  struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response* in_data);

void mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response_CloseAllHandles(
  struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response* in_data);

struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response* mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response* in_data);

size_t mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response_ComputeSerializedSize(
  const struct mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response* in_data);

MojomValidationResult mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);







// Type tables declarations for structs and unions.



extern struct MojomPointerTableStructEntry mojo_HttpConnection_SetSendBufferSize_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_HttpConnection_SetSendBufferSize_Response__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_HttpConnection_SetReceiveBufferSize_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_HttpConnection_SetReceiveBufferSize_Response__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_HttpConnectionDelegate_OnReceivedRequest_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_HttpConnectionDelegate_OnReceivedRequest_Response__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_HttpConnectionDelegate_OnReceivedWebSocketRequest_Response__PointerTable[];


#endif  // MOJO_SERVICES_NETWORK_INTERFACES_HTTP_CONNECTION_MOJOM_C_H_