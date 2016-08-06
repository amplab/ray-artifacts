// This file was auto-generated by the C bindings generator.

#include "mojo/services/files/interfaces/types.mojom-c.h"

#include <stdbool.h>

#include "mojo/public/c/bindings/lib/type_table.h"
#include "mojo/public/c/system/handle.h"

// Imports.


// Type tables definitions for structs, arrays and unions.

// Declarations for array type entries.
// Declarations for struct type tables.
struct MojomPointerTableStructEntry mojo_files_Timespec__PointerTable[];
struct MojomPointerTableStructEntry mojo_files_TimespecOrNow__PointerTable[];
struct MojomPointerTableStructEntry mojo_files_FileInformation__PointerTable[];
struct MojomPointerTableStructEntry mojo_files_DirectoryEntry__PointerTable[];
// Declarations for union type tables.
// Array type entry definitions.
// Struct type table definitions.
struct MojomPointerTableStructEntry mojo_files_Timespec__PointerTable[] = {};
struct MojomPointerTableStructEntry mojo_files_TimespecOrNow__PointerTable[] = {
  {
    mojo_files_Timespec__PointerTable, 8, 0,
    MOJOM_ELEMENT_TYPE_STRUCT, true, false,
  },
};
struct MojomPointerTableStructEntry mojo_files_FileInformation__PointerTable[] = {
  {
    mojo_files_Timespec__PointerTable, 16, 0,
    MOJOM_ELEMENT_TYPE_STRUCT, true, true,
  },

  {
    mojo_files_Timespec__PointerTable, 24, 0,
    MOJOM_ELEMENT_TYPE_STRUCT, true, false,
  },
};
struct MojomPointerTableStructEntry mojo_files_DirectoryEntry__PointerTable[] = {
  {
    (void*)&MojomStringPointerEntry, 8, 0,
    MOJOM_ELEMENT_TYPE_ARRAY, false, false,
  },
};
// Union type table definitions.




// Definitions for constants.
// Top level constants:
const uint32_t mojo_files_kOpenFlagRead = 1;
const uint32_t mojo_files_kOpenFlagWrite = 2;
const uint32_t mojo_files_kOpenFlagCreate = 4;
const uint32_t mojo_files_kOpenFlagExclusive = 8;
const uint32_t mojo_files_kOpenFlagAppend = 16;
const uint32_t mojo_files_kOpenFlagTruncate = 32;
const uint32_t mojo_files_kDeleteFlagFileOnly = 1;
const uint32_t mojo_files_kDeleteFlagDirectoryOnly = 2;
const uint32_t mojo_files_kDeleteFlagRecursive = 4;
// Struct level constants:
// Interface level constants: