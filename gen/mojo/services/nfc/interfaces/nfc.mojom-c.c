// This file was auto-generated by the C bindings generator.

#include "mojo/services/nfc/interfaces/nfc.mojom-c.h"

#include <stdbool.h>

#include "mojo/public/c/bindings/lib/type_table.h"
#include "mojo/public/c/system/handle.h"

// Imports.


// Type tables definitions for structs, arrays and unions.

// Declarations for array type entries.
static struct MojomPointerTableArrayEntry nfc_NfcData_0_0__PointerEntry;
// Declarations for struct type tables.
struct MojomPointerTableStructEntry nfc_NfcData__PointerTable[];
struct MojomPointerTableStructEntry nfc_NfcTransmission_Cancel_Request__PointerTable[];
struct MojomPointerTableStructEntry nfc_NfcReceiver_OnReceivedNfcData_Request__PointerTable[];
struct MojomPointerTableStructEntry nfc_Nfc_Unregister_Request__PointerTable[];
struct MojomPointerTableStructEntry nfc_Nfc_TransmitOnNextConnection_Request__PointerTable[];
struct MojomPointerTableStructEntry nfc_Nfc_TransmitOnNextConnection_Response__PointerTable[];
struct MojomPointerTableStructEntry nfc_Nfc_Register_Request__PointerTable[];
// Declarations for union type tables.
// Array type entry definitions.
static struct MojomPointerTableArrayEntry nfc_NfcData_0_0__PointerEntry = {
  NULL, 0,
  MOJOM_ELEMENT_TYPE_POD, false,
};
// Struct type table definitions.
struct MojomPointerTableStructEntry nfc_NfcData__PointerTable[] = {
  {
    &nfc_NfcData_0_0__PointerEntry, 0, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, true, false,
  },
};
struct MojomPointerTableStructEntry nfc_NfcTransmission_Cancel_Request__PointerTable[] = {};
struct MojomPointerTableStructEntry nfc_NfcReceiver_OnReceivedNfcData_Request__PointerTable[] = {
  {
    nfc_NfcData__PointerTable, 0, 0,
    MOJOM_ELEMENT_TYPE_STRUCT, false, false,
  },
};
struct MojomPointerTableStructEntry nfc_Nfc_Unregister_Request__PointerTable[] = {};
struct MojomPointerTableStructEntry nfc_Nfc_TransmitOnNextConnection_Request__PointerTable[] = {
  {
    nfc_NfcData__PointerTable, 0, 0,
    MOJOM_ELEMENT_TYPE_STRUCT, false, true,
  },

  {
    NULL, 8, 0,
    MOJOM_ELEMENT_TYPE_HANDLE, true, false,
  },
};
struct MojomPointerTableStructEntry nfc_Nfc_TransmitOnNextConnection_Response__PointerTable[] = {};
struct MojomPointerTableStructEntry nfc_Nfc_Register_Request__PointerTable[] = {};
// Union type table definitions.




// Definitions for constants.
// Top level constants:
// Struct level constants:
// Interface level constants:
