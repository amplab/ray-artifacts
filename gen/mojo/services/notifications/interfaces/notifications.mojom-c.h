// This file was auto-generated by the C bindings generator.

#ifndef MOJO_SERVICES_NOTIFICATIONS_INTERFACES_NOTIFICATIONS_MOJOM_C_H_
#define MOJO_SERVICES_NOTIFICATIONS_INTERFACES_NOTIFICATIONS_MOJOM_C_H_

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
struct notifications_NotificationData;
union notifications_NotificationDataPtr {
  struct notifications_NotificationData* ptr;
  uint64_t offset;
};
MOJO_STATIC_ASSERT(sizeof(union notifications_NotificationDataPtr) == 8,
              "union notifications_NotificationDataPtr must be 8 bytes");

// Forward declarations for unions.
// Top level constants.


// Top level enums.


// Union definitions.


// Struct definitions.
// -- notifications_NotificationData --
// Enums
// Constants
// Struct definition
struct notifications_NotificationData {
  struct MojomStructHeader header_;
  union MojomStringPtr title;  // offset,bit = 0,0
  union MojomStringPtr text;  // offset,bit = 8,0
  bool play_sound : 1;  // offset,bit = 16,0
  bool vibrate : 1;  // offset,bit = 16,1
  bool set_lights : 1;  // offset,bit = 16,2
  
};

struct notifications_NotificationData* notifications_NotificationData_New(struct MojomBuffer* in_buffer);

void notifications_NotificationData_Init(
  struct notifications_NotificationData* in_data);

void notifications_NotificationData_CloseAllHandles(
  struct notifications_NotificationData* in_data);

struct notifications_NotificationData* notifications_NotificationData_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct notifications_NotificationData* in_data);

size_t notifications_NotificationData_ComputeSerializedSize(
  const struct notifications_NotificationData* in_data);

MojomValidationResult notifications_NotificationData_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult notifications_NotificationData_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult notifications_NotificationData_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);




// Interface definitions.
// --- notifications_NotificationClient ---
#define notifications_NotificationClient__ServiceName ((const char*)"")
#define notifications_NotificationClient__CurrentVersion ((uint32_t)0)

// Enums
// Constants


// Message: OnSelected

#define notifications_NotificationClient_OnSelected__Ordinal \
    ((uint32_t)0)
#define notifications_NotificationClient_OnSelected__MinVersion \
    ((uint32_t)0)

struct notifications_NotificationClient_OnSelected_Request;
// -- notifications_NotificationClient_OnSelected_Request --
// Enums
// Constants
// Struct definition
struct notifications_NotificationClient_OnSelected_Request {
  struct MojomStructHeader header_;
  
};

struct notifications_NotificationClient_OnSelected_Request* notifications_NotificationClient_OnSelected_Request_New(struct MojomBuffer* in_buffer);

void notifications_NotificationClient_OnSelected_Request_Init(
  struct notifications_NotificationClient_OnSelected_Request* in_data);

void notifications_NotificationClient_OnSelected_Request_CloseAllHandles(
  struct notifications_NotificationClient_OnSelected_Request* in_data);

struct notifications_NotificationClient_OnSelected_Request* notifications_NotificationClient_OnSelected_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct notifications_NotificationClient_OnSelected_Request* in_data);

size_t notifications_NotificationClient_OnSelected_Request_ComputeSerializedSize(
  const struct notifications_NotificationClient_OnSelected_Request* in_data);

MojomValidationResult notifications_NotificationClient_OnSelected_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult notifications_NotificationClient_OnSelected_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult notifications_NotificationClient_OnSelected_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: OnDismissed

#define notifications_NotificationClient_OnDismissed__Ordinal \
    ((uint32_t)1)
#define notifications_NotificationClient_OnDismissed__MinVersion \
    ((uint32_t)0)

struct notifications_NotificationClient_OnDismissed_Request;
// -- notifications_NotificationClient_OnDismissed_Request --
// Enums
// Constants
// Struct definition
struct notifications_NotificationClient_OnDismissed_Request {
  struct MojomStructHeader header_;
  
};

struct notifications_NotificationClient_OnDismissed_Request* notifications_NotificationClient_OnDismissed_Request_New(struct MojomBuffer* in_buffer);

void notifications_NotificationClient_OnDismissed_Request_Init(
  struct notifications_NotificationClient_OnDismissed_Request* in_data);

void notifications_NotificationClient_OnDismissed_Request_CloseAllHandles(
  struct notifications_NotificationClient_OnDismissed_Request* in_data);

struct notifications_NotificationClient_OnDismissed_Request* notifications_NotificationClient_OnDismissed_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct notifications_NotificationClient_OnDismissed_Request* in_data);

size_t notifications_NotificationClient_OnDismissed_Request_ComputeSerializedSize(
  const struct notifications_NotificationClient_OnDismissed_Request* in_data);

MojomValidationResult notifications_NotificationClient_OnDismissed_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult notifications_NotificationClient_OnDismissed_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult notifications_NotificationClient_OnDismissed_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);





// --- notifications_Notification ---
#define notifications_Notification__ServiceName ((const char*)"")
#define notifications_Notification__CurrentVersion ((uint32_t)0)

// Enums
// Constants


// Message: Cancel

#define notifications_Notification_Cancel__Ordinal \
    ((uint32_t)1)
#define notifications_Notification_Cancel__MinVersion \
    ((uint32_t)0)

struct notifications_Notification_Cancel_Request;
// -- notifications_Notification_Cancel_Request --
// Enums
// Constants
// Struct definition
struct notifications_Notification_Cancel_Request {
  struct MojomStructHeader header_;
  
};

struct notifications_Notification_Cancel_Request* notifications_Notification_Cancel_Request_New(struct MojomBuffer* in_buffer);

void notifications_Notification_Cancel_Request_Init(
  struct notifications_Notification_Cancel_Request* in_data);

void notifications_Notification_Cancel_Request_CloseAllHandles(
  struct notifications_Notification_Cancel_Request* in_data);

struct notifications_Notification_Cancel_Request* notifications_Notification_Cancel_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct notifications_Notification_Cancel_Request* in_data);

size_t notifications_Notification_Cancel_Request_ComputeSerializedSize(
  const struct notifications_Notification_Cancel_Request* in_data);

MojomValidationResult notifications_Notification_Cancel_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult notifications_Notification_Cancel_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult notifications_Notification_Cancel_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);



// Message: Update

#define notifications_Notification_Update__Ordinal \
    ((uint32_t)0)
#define notifications_Notification_Update__MinVersion \
    ((uint32_t)0)

struct notifications_Notification_Update_Request;
// -- notifications_Notification_Update_Request --
// Enums
// Constants
// Struct definition
struct notifications_Notification_Update_Request {
  struct MojomStructHeader header_;
  union notifications_NotificationDataPtr notification_data;  // offset,bit = 0,0
  
};

struct notifications_Notification_Update_Request* notifications_Notification_Update_Request_New(struct MojomBuffer* in_buffer);

void notifications_Notification_Update_Request_Init(
  struct notifications_Notification_Update_Request* in_data);

void notifications_Notification_Update_Request_CloseAllHandles(
  struct notifications_Notification_Update_Request* in_data);

struct notifications_Notification_Update_Request* notifications_Notification_Update_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct notifications_Notification_Update_Request* in_data);

size_t notifications_Notification_Update_Request_ComputeSerializedSize(
  const struct notifications_Notification_Update_Request* in_data);

MojomValidationResult notifications_Notification_Update_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult notifications_Notification_Update_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult notifications_Notification_Update_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);





// --- notifications_NotificationService ---
#define notifications_NotificationService__ServiceName ((const char*)"notifications::NotificationService")
#define notifications_NotificationService__CurrentVersion ((uint32_t)0)

// Enums
// Constants


// Message: Post

#define notifications_NotificationService_Post__Ordinal \
    ((uint32_t)0)
#define notifications_NotificationService_Post__MinVersion \
    ((uint32_t)0)

struct notifications_NotificationService_Post_Request;
// -- notifications_NotificationService_Post_Request --
// Enums
// Constants
// Struct definition
struct notifications_NotificationService_Post_Request {
  struct MojomStructHeader header_;
  union notifications_NotificationDataPtr notification_data;  // offset,bit = 0,0
  struct MojomInterfaceData client;  // offset,bit = 8,0
  MojoHandle notification;  // offset,bit = 16,0
  
};

struct notifications_NotificationService_Post_Request* notifications_NotificationService_Post_Request_New(struct MojomBuffer* in_buffer);

void notifications_NotificationService_Post_Request_Init(
  struct notifications_NotificationService_Post_Request* in_data);

void notifications_NotificationService_Post_Request_CloseAllHandles(
  struct notifications_NotificationService_Post_Request* in_data);

struct notifications_NotificationService_Post_Request* notifications_NotificationService_Post_Request_DeepCopy(
  struct MojomBuffer* in_buffer,
  struct notifications_NotificationService_Post_Request* in_data);

size_t notifications_NotificationService_Post_Request_ComputeSerializedSize(
  const struct notifications_NotificationService_Post_Request* in_data);

MojomValidationResult notifications_NotificationService_Post_Request_EncodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size, MojoHandle* inout_handles,
  uint32_t in_num_handles, uint32_t* out_num_handles);

MojomValidationResult notifications_NotificationService_Post_Request_DecodePointersAndHandles(
  void* inout_buf, uint32_t in_buf_size,
  MojoHandle* inout_handles, uint32_t in_num_handles);

MojomValidationResult notifications_NotificationService_Post_Request_Validate(
  const void* in_buf, uint32_t in_buf_size,
  const MojoHandle* in_handles, uint32_t in_num_handles);







// Type tables declarations for structs and unions.



extern struct MojomPointerTableStructEntry notifications_NotificationData__PointerTable[];
extern struct MojomPointerTableStructEntry notifications_NotificationClient_OnSelected_Request__PointerTable[];
extern struct MojomPointerTableStructEntry notifications_NotificationClient_OnDismissed_Request__PointerTable[];
extern struct MojomPointerTableStructEntry notifications_Notification_Update_Request__PointerTable[];
extern struct MojomPointerTableStructEntry notifications_Notification_Cancel_Request__PointerTable[];
extern struct MojomPointerTableStructEntry notifications_NotificationService_Post_Request__PointerTable[];


#endif  // MOJO_SERVICES_NOTIFICATIONS_INTERFACES_NOTIFICATIONS_MOJOM_C_H_