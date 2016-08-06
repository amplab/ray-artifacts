// This file was auto-generated by the C bindings generator.

#include "mojo/services/network/interfaces/web_socket.mojom-c.h"

#include <stdbool.h>

#include "mojo/public/c/bindings/lib/type_table.h"
#include "mojo/public/c/system/handle.h"

// Imports.
#include "mojo/public/interfaces/network/network_error.mojom-c.h"


// Type tables definitions for structs, arrays and unions.

// Declarations for array type entries.
static struct MojomPointerTableArrayEntry mojo_WebSocket_Connect_Request_8_0__PointerEntry;
// Declarations for struct type tables.
struct MojomPointerTableStructEntry mojo_WebSocket_Connect_Request__PointerTable[];
struct MojomPointerTableStructEntry mojo_WebSocket_Send_Request__PointerTable[];
struct MojomPointerTableStructEntry mojo_WebSocket_FlowControl_Request__PointerTable[];
struct MojomPointerTableStructEntry mojo_WebSocket_Close_Request__PointerTable[];
struct MojomPointerTableStructEntry mojo_WebSocketClient_DidConnect_Request__PointerTable[];
struct MojomPointerTableStructEntry mojo_WebSocketClient_DidReceiveData_Request__PointerTable[];
struct MojomPointerTableStructEntry mojo_WebSocketClient_DidReceiveFlowControl_Request__PointerTable[];
struct MojomPointerTableStructEntry mojo_WebSocketClient_DidFail_Request__PointerTable[];
struct MojomPointerTableStructEntry mojo_WebSocketClient_DidClose_Request__PointerTable[];
// Declarations for union type tables.
// Array type entry definitions.
static struct MojomPointerTableArrayEntry mojo_WebSocket_Connect_Request_8_0__PointerEntry = {
  (void*)&MojomStringPointerEntry, 0,
  MOJOM_ELEMENT_TYPE_ARRAY, false,
};
// Struct type table definitions.
struct MojomPointerTableStructEntry mojo_WebSocket_Connect_Request__PointerTable[] = {
  {
    (void*)&MojomStringPointerEntry, 0, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, true,
  },

  {
    &mojo_WebSocket_Connect_Request_8_0__PointerEntry, 8, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, true,
  },

  {
    (void*)&MojomStringPointerEntry, 16, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, true,
  },

  {
    NULL, 24, 0,
    MOJOM_ELEMENT_TYPE_HANDLE, false, true,
  },

  {
    NULL, 28, 0,
    MOJOM_ELEMENT_TYPE_INTERFACE, false, false,
  },
};
struct MojomPointerTableStructEntry mojo_WebSocket_Send_Request__PointerTable[] = {};
struct MojomPointerTableStructEntry mojo_WebSocket_FlowControl_Request__PointerTable[] = {};
struct MojomPointerTableStructEntry mojo_WebSocket_Close_Request__PointerTable[] = {
  {
    (void*)&MojomStringPointerEntry, 8, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, false,
  },
};
struct MojomPointerTableStructEntry mojo_WebSocketClient_DidConnect_Request__PointerTable[] = {
  {
    (void*)&MojomStringPointerEntry, 0, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, true,
  },

  {
    (void*)&MojomStringPointerEntry, 8, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, true,
  },

  {
    NULL, 16, 0,
    MOJOM_ELEMENT_TYPE_HANDLE, false, false,
  },
};
struct MojomPointerTableStructEntry mojo_WebSocketClient_DidReceiveData_Request__PointerTable[] = {};
struct MojomPointerTableStructEntry mojo_WebSocketClient_DidReceiveFlowControl_Request__PointerTable[] = {};
struct MojomPointerTableStructEntry mojo_WebSocketClient_DidFail_Request__PointerTable[] = {
  {
    (void*)&MojomStringPointerEntry, 0, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, false,
  },
};
struct MojomPointerTableStructEntry mojo_WebSocketClient_DidClose_Request__PointerTable[] = {
  {
    (void*)&MojomStringPointerEntry, 8, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, false,
  },
};
// Union type table definitions.




// Definitions for constants.
// Top level constants:
// Struct level constants:
// Interface level constants:
const uint16_t mojo_WebSocket_kAbnormalCloseCode = 1006;