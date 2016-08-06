// This file was auto-generated by the C bindings generator.

#include "mojo/public/interfaces/application/application.mojom-c.h"

#include <stdbool.h>

#include "mojo/public/c/bindings/lib/type_table.h"
#include "mojo/public/c/system/handle.h"

// Imports.
#include "mojo/public/interfaces/application/service_provider.mojom-c.h"
#include "mojo/public/interfaces/application/shell.mojom-c.h"


// Type tables definitions for structs, arrays and unions.

// Declarations for array type entries.
static struct MojomPointerTableArrayEntry mojo_Application_Initialize_Request_8_0__PointerEntry;
// Declarations for struct type tables.
struct MojomPointerTableStructEntry mojo_Application_Initialize_Request__PointerTable[];
struct MojomPointerTableStructEntry mojo_Application_AcceptConnection_Request__PointerTable[];
struct MojomPointerTableStructEntry mojo_Application_RequestQuit_Request__PointerTable[];
// Declarations for union type tables.
// Array type entry definitions.
static struct MojomPointerTableArrayEntry mojo_Application_Initialize_Request_8_0__PointerEntry = {
  (void*)&MojomStringPointerEntry, 0,
  MOJOM_ELEMENT_TYPE_ARRAY, false,
};
// Struct type table definitions.
struct MojomPointerTableStructEntry mojo_Application_Initialize_Request__PointerTable[] = {
  {
    NULL, 0, 0,
    MOJOM_ELEMENT_TYPE_INTERFACE, false, true,
  },

  {
    &mojo_Application_Initialize_Request_8_0__PointerEntry, 8, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, true, true,
  },

  {
    (void*)&MojomStringPointerEntry, 16, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, false,
  },
};
struct MojomPointerTableStructEntry mojo_Application_AcceptConnection_Request__PointerTable[] = {
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
struct MojomPointerTableStructEntry mojo_Application_RequestQuit_Request__PointerTable[] = {};
// Union type table definitions.




// Definitions for constants.
// Top level constants:
// Struct level constants:
// Interface level constants: