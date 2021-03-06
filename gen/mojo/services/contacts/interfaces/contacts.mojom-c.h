// This file was auto-generated by the C bindings generator.

#ifndef MOJO_SERVICES_CONTACTS_INTERFACES_CONTACTS_MOJOM_C_H_
#define MOJO_SERVICES_CONTACTS_INTERFACES_CONTACTS_MOJOM_C_H_

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
struct contacts_Contact;
union contacts_ContactPtr {
  struct contacts_Contact* ptr;
  uint64_t offset;
};
MOJO_STATIC_ASSERT(sizeof(union contacts_ContactPtr) == 8,
              "union contacts_ContactPtr must be 8 bytes");

// Forward declarations for unions.
// Top level constants.


// Top level enums.


// Union definitions.


// Struct definitions.
// -- contacts_Contact --
// Enums
// Constants
// Struct definition
struct contacts_Contact {
  struct MojomStructHeader header_;
  int64_t id;  // offset,bit = 0,0
  union MojomStringPtr name;  // offset,bit = 8,0
  
};

struct contacts_Contact* contacts_Contact_New(struct MojomBuffer* in_buffer);

void contacts_Contact_Init(
  struct contacts_Contact* in_data);

void contacts_Contact_CloseAllHandles(
  struct contacts_Contact* in_data);

struct contacts_Contact* contacts_Contact_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct contacts_Contact* in_data);

size_t contacts_Contact_ComputeSerializedSize(
  const struct contacts_Contact* in_data);

MojomValidationResult contacts_Contact_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult contacts_Contact_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult contacts_Contact_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);




// Interface definitions.
// --- contacts_ContactsService ---
#define contacts_ContactsService__ServiceName ((const char*)"contacts::ContactsService")
#define contacts_ContactsService__CurrentVersion ((uint32_t)0)

// Enums
// Constants


// Message: GetEmails

#define contacts_ContactsService_GetEmails__Ordinal \
    ((uint32_t)2)
#define contacts_ContactsService_GetEmails__MinVersion \
    ((uint32_t)0)

struct contacts_ContactsService_GetEmails_Request;
// -- contacts_ContactsService_GetEmails_Request --
// Enums
// Constants
// Struct definition
struct contacts_ContactsService_GetEmails_Request {
  struct MojomStructHeader header_;
  int64_t id;  // offset,bit = 0,0
  
};

struct contacts_ContactsService_GetEmails_Request* contacts_ContactsService_GetEmails_Request_New(struct MojomBuffer* in_buffer);

void contacts_ContactsService_GetEmails_Request_Init(
  struct contacts_ContactsService_GetEmails_Request* in_data);

void contacts_ContactsService_GetEmails_Request_CloseAllHandles(
  struct contacts_ContactsService_GetEmails_Request* in_data);

struct contacts_ContactsService_GetEmails_Request* contacts_ContactsService_GetEmails_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct contacts_ContactsService_GetEmails_Request* in_data);

size_t contacts_ContactsService_GetEmails_Request_ComputeSerializedSize(
  const struct contacts_ContactsService_GetEmails_Request* in_data);

MojomValidationResult contacts_ContactsService_GetEmails_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult contacts_ContactsService_GetEmails_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult contacts_ContactsService_GetEmails_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


struct contacts_ContactsService_GetEmails_Response;
// -- contacts_ContactsService_GetEmails_Response --
// Enums
// Constants
// Struct definition
struct contacts_ContactsService_GetEmails_Response {
  struct MojomStructHeader header_;
  union MojomArrayPtr emails;  // offset,bit = 0,0
  
};

struct contacts_ContactsService_GetEmails_Response* contacts_ContactsService_GetEmails_Response_New(struct MojomBuffer* in_buffer);

void contacts_ContactsService_GetEmails_Response_Init(
  struct contacts_ContactsService_GetEmails_Response* in_data);

void contacts_ContactsService_GetEmails_Response_CloseAllHandles(
  struct contacts_ContactsService_GetEmails_Response* in_data);

struct contacts_ContactsService_GetEmails_Response* contacts_ContactsService_GetEmails_Response_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct contacts_ContactsService_GetEmails_Response* in_data);

size_t contacts_ContactsService_GetEmails_Response_ComputeSerializedSize(
  const struct contacts_ContactsService_GetEmails_Response* in_data);

MojomValidationResult contacts_ContactsService_GetEmails_Response_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult contacts_ContactsService_GetEmails_Response_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult contacts_ContactsService_GetEmails_Response_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: GetPhoto

#define contacts_ContactsService_GetPhoto__Ordinal \
    ((uint32_t)3)
#define contacts_ContactsService_GetPhoto__MinVersion \
    ((uint32_t)0)

struct contacts_ContactsService_GetPhoto_Request;
// -- contacts_ContactsService_GetPhoto_Request --
// Enums
// Constants
// Struct definition
struct contacts_ContactsService_GetPhoto_Request {
  struct MojomStructHeader header_;
  int64_t id;  // offset,bit = 0,0
  bool high_resolution : 1;  // offset,bit = 8,0
  
};

struct contacts_ContactsService_GetPhoto_Request* contacts_ContactsService_GetPhoto_Request_New(struct MojomBuffer* in_buffer);

void contacts_ContactsService_GetPhoto_Request_Init(
  struct contacts_ContactsService_GetPhoto_Request* in_data);

void contacts_ContactsService_GetPhoto_Request_CloseAllHandles(
  struct contacts_ContactsService_GetPhoto_Request* in_data);

struct contacts_ContactsService_GetPhoto_Request* contacts_ContactsService_GetPhoto_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct contacts_ContactsService_GetPhoto_Request* in_data);

size_t contacts_ContactsService_GetPhoto_Request_ComputeSerializedSize(
  const struct contacts_ContactsService_GetPhoto_Request* in_data);

MojomValidationResult contacts_ContactsService_GetPhoto_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult contacts_ContactsService_GetPhoto_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult contacts_ContactsService_GetPhoto_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


struct contacts_ContactsService_GetPhoto_Response;
// -- contacts_ContactsService_GetPhoto_Response --
// Enums
// Constants
// Struct definition
struct contacts_ContactsService_GetPhoto_Response {
  struct MojomStructHeader header_;
  union MojomStringPtr photo_url;  // offset,bit = 0,0
  
};

struct contacts_ContactsService_GetPhoto_Response* contacts_ContactsService_GetPhoto_Response_New(struct MojomBuffer* in_buffer);

void contacts_ContactsService_GetPhoto_Response_Init(
  struct contacts_ContactsService_GetPhoto_Response* in_data);

void contacts_ContactsService_GetPhoto_Response_CloseAllHandles(
  struct contacts_ContactsService_GetPhoto_Response* in_data);

struct contacts_ContactsService_GetPhoto_Response* contacts_ContactsService_GetPhoto_Response_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct contacts_ContactsService_GetPhoto_Response* in_data);

size_t contacts_ContactsService_GetPhoto_Response_ComputeSerializedSize(
  const struct contacts_ContactsService_GetPhoto_Response* in_data);

MojomValidationResult contacts_ContactsService_GetPhoto_Response_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult contacts_ContactsService_GetPhoto_Response_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult contacts_ContactsService_GetPhoto_Response_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: GetCount

#define contacts_ContactsService_GetCount__Ordinal \
    ((uint32_t)0)
#define contacts_ContactsService_GetCount__MinVersion \
    ((uint32_t)0)

struct contacts_ContactsService_GetCount_Request;
// -- contacts_ContactsService_GetCount_Request --
// Enums
// Constants
// Struct definition
struct contacts_ContactsService_GetCount_Request {
  struct MojomStructHeader header_;
  union MojomStringPtr filter;  // offset,bit = 0,0
  
};

struct contacts_ContactsService_GetCount_Request* contacts_ContactsService_GetCount_Request_New(struct MojomBuffer* in_buffer);

void contacts_ContactsService_GetCount_Request_Init(
  struct contacts_ContactsService_GetCount_Request* in_data);

void contacts_ContactsService_GetCount_Request_CloseAllHandles(
  struct contacts_ContactsService_GetCount_Request* in_data);

struct contacts_ContactsService_GetCount_Request* contacts_ContactsService_GetCount_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct contacts_ContactsService_GetCount_Request* in_data);

size_t contacts_ContactsService_GetCount_Request_ComputeSerializedSize(
  const struct contacts_ContactsService_GetCount_Request* in_data);

MojomValidationResult contacts_ContactsService_GetCount_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult contacts_ContactsService_GetCount_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult contacts_ContactsService_GetCount_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


struct contacts_ContactsService_GetCount_Response;
// -- contacts_ContactsService_GetCount_Response --
// Enums
// Constants
// Struct definition
struct contacts_ContactsService_GetCount_Response {
  struct MojomStructHeader header_;
  uint64_t count;  // offset,bit = 0,0
  
};

struct contacts_ContactsService_GetCount_Response* contacts_ContactsService_GetCount_Response_New(struct MojomBuffer* in_buffer);

void contacts_ContactsService_GetCount_Response_Init(
  struct contacts_ContactsService_GetCount_Response* in_data);

void contacts_ContactsService_GetCount_Response_CloseAllHandles(
  struct contacts_ContactsService_GetCount_Response* in_data);

struct contacts_ContactsService_GetCount_Response* contacts_ContactsService_GetCount_Response_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct contacts_ContactsService_GetCount_Response* in_data);

size_t contacts_ContactsService_GetCount_Response_ComputeSerializedSize(
  const struct contacts_ContactsService_GetCount_Response* in_data);

MojomValidationResult contacts_ContactsService_GetCount_Response_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult contacts_ContactsService_GetCount_Response_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult contacts_ContactsService_GetCount_Response_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: Get

#define contacts_ContactsService_Get__Ordinal \
    ((uint32_t)1)
#define contacts_ContactsService_Get__MinVersion \
    ((uint32_t)0)

struct contacts_ContactsService_Get_Request;
// -- contacts_ContactsService_Get_Request --
// Enums
// Constants
// Struct definition
struct contacts_ContactsService_Get_Request {
  struct MojomStructHeader header_;
  union MojomStringPtr filter;  // offset,bit = 0,0
  uint32_t offset;  // offset,bit = 8,0
  uint32_t limit;  // offset,bit = 12,0
  uint8_t pad2_[4];  // padding
  
};

struct contacts_ContactsService_Get_Request* contacts_ContactsService_Get_Request_New(struct MojomBuffer* in_buffer);

void contacts_ContactsService_Get_Request_Init(
  struct contacts_ContactsService_Get_Request* in_data);

void contacts_ContactsService_Get_Request_CloseAllHandles(
  struct contacts_ContactsService_Get_Request* in_data);

struct contacts_ContactsService_Get_Request* contacts_ContactsService_Get_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct contacts_ContactsService_Get_Request* in_data);

size_t contacts_ContactsService_Get_Request_ComputeSerializedSize(
  const struct contacts_ContactsService_Get_Request* in_data);

MojomValidationResult contacts_ContactsService_Get_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult contacts_ContactsService_Get_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult contacts_ContactsService_Get_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);


struct contacts_ContactsService_Get_Response;
// -- contacts_ContactsService_Get_Response --
// Enums
// Constants
// Struct definition
struct contacts_ContactsService_Get_Response {
  struct MojomStructHeader header_;
  union MojomArrayPtr contacts;  // offset,bit = 0,0
  
};

struct contacts_ContactsService_Get_Response* contacts_ContactsService_Get_Response_New(struct MojomBuffer* in_buffer);

void contacts_ContactsService_Get_Response_Init(
  struct contacts_ContactsService_Get_Response* in_data);

void contacts_ContactsService_Get_Response_CloseAllHandles(
  struct contacts_ContactsService_Get_Response* in_data);

struct contacts_ContactsService_Get_Response* contacts_ContactsService_Get_Response_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct contacts_ContactsService_Get_Response* in_data);

size_t contacts_ContactsService_Get_Response_ComputeSerializedSize(
  const struct contacts_ContactsService_Get_Response* in_data);

MojomValidationResult contacts_ContactsService_Get_Response_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult contacts_ContactsService_Get_Response_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult contacts_ContactsService_Get_Response_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);







// Type tables declarations for structs and unions.



extern struct MojomPointerTableStructEntry contacts_Contact__PointerTable[];
extern struct MojomPointerTableStructEntry contacts_ContactsService_GetCount_Request__PointerTable[];
extern struct MojomPointerTableStructEntry contacts_ContactsService_GetCount_Response__PointerTable[];
extern struct MojomPointerTableStructEntry contacts_ContactsService_Get_Request__PointerTable[];
extern struct MojomPointerTableStructEntry contacts_ContactsService_Get_Response__PointerTable[];
extern struct MojomPointerTableStructEntry contacts_ContactsService_GetEmails_Request__PointerTable[];
extern struct MojomPointerTableStructEntry contacts_ContactsService_GetEmails_Response__PointerTable[];
extern struct MojomPointerTableStructEntry contacts_ContactsService_GetPhoto_Request__PointerTable[];
extern struct MojomPointerTableStructEntry contacts_ContactsService_GetPhoto_Response__PointerTable[];


#endif  // MOJO_SERVICES_CONTACTS_INTERFACES_CONTACTS_MOJOM_C_H_