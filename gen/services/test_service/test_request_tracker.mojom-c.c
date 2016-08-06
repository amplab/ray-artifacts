// This file was auto-generated by the C bindings generator.

#include "services/test_service/test_request_tracker.mojom-c.h"

#include <stdbool.h>

#include "mojo/public/c/bindings/lib/type_table.h"
#include "mojo/public/c/system/handle.h"

// Imports.


// Type tables definitions for structs, arrays and unions.

// Declarations for array type entries.
static struct MojomPointerTableArrayEntry mojo_test_TestTrackedRequestService_GetReport_Response_0_0__PointerEntry;
// Declarations for struct type tables.
struct MojomPointerTableStructEntry mojo_test_ServiceStats__PointerTable[];
struct MojomPointerTableStructEntry mojo_test_ServiceReport__PointerTable[];
struct MojomPointerTableStructEntry mojo_test_TestTrackedRequestService_GetReport_Request__PointerTable[];
struct MojomPointerTableStructEntry mojo_test_TestTrackedRequestService_GetReport_Response__PointerTable[];
struct MojomPointerTableStructEntry mojo_test_TestRequestTracker_SetNameAndReturnId_Request__PointerTable[];
struct MojomPointerTableStructEntry mojo_test_TestRequestTracker_SetNameAndReturnId_Response__PointerTable[];
struct MojomPointerTableStructEntry mojo_test_TestRequestTracker_RecordStats_Request__PointerTable[];
// Declarations for union type tables.
// Array type entry definitions.
static struct MojomPointerTableArrayEntry mojo_test_TestTrackedRequestService_GetReport_Response_0_0__PointerEntry = {
  mojo_test_ServiceReport__PointerTable, 0,
  MOJOM_ELEMENT_TYPE_STRUCT, true,
};
// Struct type table definitions.
struct MojomPointerTableStructEntry mojo_test_ServiceStats__PointerTable[] = {};
struct MojomPointerTableStructEntry mojo_test_ServiceReport__PointerTable[] = {
  {
    (void*)&MojomStringPointerEntry, 0, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, true, false,
  },
};
struct MojomPointerTableStructEntry mojo_test_TestTrackedRequestService_GetReport_Request__PointerTable[] = {};
struct MojomPointerTableStructEntry mojo_test_TestTrackedRequestService_GetReport_Response__PointerTable[] = {
  {
    &mojo_test_TestTrackedRequestService_GetReport_Response_0_0__PointerEntry, 0, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, true, false,
  },
};
struct MojomPointerTableStructEntry mojo_test_TestRequestTracker_SetNameAndReturnId_Request__PointerTable[] = {
  {
    (void*)&MojomStringPointerEntry, 0, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, false,
  },
};
struct MojomPointerTableStructEntry mojo_test_TestRequestTracker_SetNameAndReturnId_Response__PointerTable[] = {};
struct MojomPointerTableStructEntry mojo_test_TestRequestTracker_RecordStats_Request__PointerTable[] = {
  {
    mojo_test_ServiceStats__PointerTable, 8, 0,
    MOJOM_ELEMENT_TYPE_STRUCT, true, false,
  },
};
// Union type table definitions.




// Definitions for constants.
// Top level constants:
// Struct level constants:
// Interface level constants: