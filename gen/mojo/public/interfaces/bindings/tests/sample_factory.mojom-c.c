// This file was auto-generated by the C bindings generator.

#include "mojo/public/interfaces/bindings/tests/sample_factory.mojom-c.h"

#include <stdbool.h>

#include "mojo/public/c/bindings/lib/type_table.h"
#include "mojo/public/c/system/handle.h"

// Imports.
#include "mojo/public/interfaces/bindings/tests/sample_import.mojom-c.h"


// Type tables definitions for structs, arrays and unions.

// Declarations for array type entries.
static struct MojomPointerTableArrayEntry sample_Request_8_0__PointerEntry;
// Declarations for struct type tables.
struct MojomPointerTableStructEntry sample_Request__PointerTable[];
struct MojomPointerTableStructEntry sample_Response__PointerTable[];
struct MojomPointerTableStructEntry sample_NamedObject_GetName_Request__PointerTable[];
struct MojomPointerTableStructEntry sample_NamedObject_GetName_Response__PointerTable[];
struct MojomPointerTableStructEntry sample_NamedObject_SetName_Request__PointerTable[];
struct MojomPointerTableStructEntry sample_Factory_CreateNamedObject_Request__PointerTable[];
struct MojomPointerTableStructEntry sample_Factory_RequestImportedInterface_Request__PointerTable[];
struct MojomPointerTableStructEntry sample_Factory_RequestImportedInterface_Response__PointerTable[];
struct MojomPointerTableStructEntry sample_Factory_TakeImportedInterface_Request__PointerTable[];
struct MojomPointerTableStructEntry sample_Factory_TakeImportedInterface_Response__PointerTable[];
struct MojomPointerTableStructEntry sample_Factory_DoStuff_Request__PointerTable[];
struct MojomPointerTableStructEntry sample_Factory_DoStuff_Response__PointerTable[];
struct MojomPointerTableStructEntry sample_Factory_DoStuff2_Request__PointerTable[];
struct MojomPointerTableStructEntry sample_Factory_DoStuff2_Response__PointerTable[];
// Declarations for union type tables.
// Array type entry definitions.
static struct MojomPointerTableArrayEntry sample_Request_8_0__PointerEntry = {
  NULL, 0,
  MOJOM_ELEMENT_TYPE_HANDLE, false,
};
// Struct type table definitions.
struct MojomPointerTableStructEntry sample_Request__PointerTable[] = {
  {
    NULL, 4, 0,
    MOJOM_ELEMENT_TYPE_HANDLE, true, true,
  },

  {
    &sample_Request_8_0__PointerEntry, 8, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, true, true,
  },

  {
    NULL, 16, 0,
    MOJOM_ELEMENT_TYPE_INTERFACE, true, false,
  },
};
struct MojomPointerTableStructEntry sample_Response__PointerTable[] = {
  {
    NULL, 4, 0,
    MOJOM_ELEMENT_TYPE_HANDLE, true, false,
  },
};
struct MojomPointerTableStructEntry sample_NamedObject_GetName_Request__PointerTable[] = {};
struct MojomPointerTableStructEntry sample_NamedObject_GetName_Response__PointerTable[] = {
  {
    (void*)&MojomStringPointerEntry, 0, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, false,
  },
};
struct MojomPointerTableStructEntry sample_NamedObject_SetName_Request__PointerTable[] = {
  {
    (void*)&MojomStringPointerEntry, 0, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, false,
  },
};
struct MojomPointerTableStructEntry sample_Factory_CreateNamedObject_Request__PointerTable[] = {
  {
    NULL, 0, 0,
    MOJOM_ELEMENT_TYPE_HANDLE, false, false,
  },
};
struct MojomPointerTableStructEntry sample_Factory_RequestImportedInterface_Request__PointerTable[] = {
  {
    NULL, 0, 0,
    MOJOM_ELEMENT_TYPE_HANDLE, false, false,
  },
};
struct MojomPointerTableStructEntry sample_Factory_RequestImportedInterface_Response__PointerTable[] = {
  {
    NULL, 0, 0,
    MOJOM_ELEMENT_TYPE_HANDLE, false, false,
  },
};
struct MojomPointerTableStructEntry sample_Factory_TakeImportedInterface_Request__PointerTable[] = {
  {
    NULL, 0, 0,
    MOJOM_ELEMENT_TYPE_INTERFACE, false, false,
  },
};
struct MojomPointerTableStructEntry sample_Factory_TakeImportedInterface_Response__PointerTable[] = {
  {
    NULL, 0, 0,
    MOJOM_ELEMENT_TYPE_INTERFACE, false, false,
  },
};
struct MojomPointerTableStructEntry sample_Factory_DoStuff_Request__PointerTable[] = {
  {
    sample_Request__PointerTable, 0, 0,
    MOJOM_ELEMENT_TYPE_STRUCT, false, true,
  },

  {
    NULL, 8, 0,
    MOJOM_ELEMENT_TYPE_HANDLE, true, false,
  },
};
struct MojomPointerTableStructEntry sample_Factory_DoStuff_Response__PointerTable[] = {
  {
    sample_Response__PointerTable, 0, 0,
    MOJOM_ELEMENT_TYPE_STRUCT, false, true,
  },

  {
    (void*)&MojomStringPointerEntry, 8, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, false,
  },
};
struct MojomPointerTableStructEntry sample_Factory_DoStuff2_Request__PointerTable[] = {
  {
    NULL, 0, 0,
    MOJOM_ELEMENT_TYPE_HANDLE, false, false,
  },
};
struct MojomPointerTableStructEntry sample_Factory_DoStuff2_Response__PointerTable[] = {
  {
    (void*)&MojomStringPointerEntry, 0, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, false,
  },
};
// Union type table definitions.




// Definitions for constants.
// Top level constants:
// Struct level constants:
// Interface level constants:
