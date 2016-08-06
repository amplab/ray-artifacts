// This file was auto-generated by the C bindings generator.

#ifndef MOJO_SERVICES_NETWORK_INTERFACES_TCP_SERVER_SOCKET_MOJOM_C_H_
#define MOJO_SERVICES_NETWORK_INTERFACES_TCP_SERVER_SOCKET_MOJOM_C_H_

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
#include "mojo/services/network/interfaces/net_address.mojom-c.h"
#include "mojo/services/network/interfaces/tcp_connected_socket.mojom-c.h"


// Forward declarations for structs.
// Forward declarations for unions.
// Top level constants.


// Top level enums.


// Union definitions.


// Struct definitions.


// Interface definitions.
// --- mojo_TCPServerSocket ---
#define mojo_TCPServerSocket__ServiceName ((const char*)"")
#define mojo_TCPServerSocket__CurrentVersion ((uint32_t)0)

// Enums
// Constants


// Message: Accept

#define mojo_TCPServerSocket_Accept__Ordinal \
    ((uint32_t)0)
#define mojo_TCPServerSocket_Accept__MinVersion \
    ((uint32_t)0)

struct mojo_TCPServerSocket_Accept_Request;
// -- mojo_TCPServerSocket_Accept_Request --
// Enums
// Constants
// Struct definition
struct mojo_TCPServerSocket_Accept_Request {
  struct MojomStructHeader header_;
  MojoHandle send_stream;  // offset,bit = 0,0
  MojoHandle receive_stream;  // offset,bit = 4,0
  MojoHandle client_socket;  // offset,bit = 8,0
  
};

struct mojo_TCPServerSocket_Accept_Request* mojo_TCPServerSocket_Accept_Request_New(struct MojomBuffer* in_buffer);

void mojo_TCPServerSocket_Accept_Request_Init(
  struct mojo_TCPServerSocket_Accept_Request* in_data);

void mojo_TCPServerSocket_Accept_Request_CloseAllHandles(
  struct mojo_TCPServerSocket_Accept_Request* in_data);

struct mojo_TCPServerSocket_Accept_Request* mojo_TCPServerSocket_Accept_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_TCPServerSocket_Accept_Request* in_data);

size_t mojo_TCPServerSocket_Accept_Request_ComputeSerializedSize(
  const struct mojo_TCPServerSocket_Accept_Request* in_data);

MojomValidationResult mojo_TCPServerSocket_Accept_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_TCPServerSocket_Accept_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_TCPServerSocket_Accept_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


struct mojo_TCPServerSocket_Accept_Response;
// -- mojo_TCPServerSocket_Accept_Response --
// Enums
// Constants
// Struct definition
struct mojo_TCPServerSocket_Accept_Response {
  struct MojomStructHeader header_;
  union mojo_NetworkErrorPtr result;  // offset,bit = 0,0
  union mojo_NetAddressPtr remote_address;  // offset,bit = 8,0
  
};

struct mojo_TCPServerSocket_Accept_Response* mojo_TCPServerSocket_Accept_Response_New(struct MojomBuffer* in_buffer);

void mojo_TCPServerSocket_Accept_Response_Init(
  struct mojo_TCPServerSocket_Accept_Response* in_data);

void mojo_TCPServerSocket_Accept_Response_CloseAllHandles(
  struct mojo_TCPServerSocket_Accept_Response* in_data);

struct mojo_TCPServerSocket_Accept_Response* mojo_TCPServerSocket_Accept_Response_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct mojo_TCPServerSocket_Accept_Response* in_data);

size_t mojo_TCPServerSocket_Accept_Response_ComputeSerializedSize(
  const struct mojo_TCPServerSocket_Accept_Response* in_data);

MojomValidationResult mojo_TCPServerSocket_Accept_Response_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult mojo_TCPServerSocket_Accept_Response_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult mojo_TCPServerSocket_Accept_Response_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);







// Type tables declarations for structs and unions.



extern struct MojomPointerTableStructEntry mojo_TCPServerSocket_Accept_Request__PointerTable[];
extern struct MojomPointerTableStructEntry mojo_TCPServerSocket_Accept_Response__PointerTable[];


#endif  // MOJO_SERVICES_NETWORK_INTERFACES_TCP_SERVER_SOCKET_MOJOM_C_H_