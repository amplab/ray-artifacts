// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_FILES_INTERFACES_IOCTL_TERMINAL_MOJOM_COMMON_H_
#define MOJO_SERVICES_FILES_INTERFACES_IOCTL_TERMINAL_MOJOM_COMMON_H_

#include <stdint.h>
#include <iosfwd>

#include "mojo/public/cpp/bindings/array.h"
#include "mojo/public/cpp/bindings/callback.h"
#include "mojo/public/cpp/bindings/interface_handle.h"
#include "mojo/public/cpp/bindings/interface_request.h"
#include "mojo/public/cpp/bindings/map.h"
#include "mojo/public/cpp/bindings/message_validator.h"
#include "mojo/public/cpp/bindings/string.h"
#include "mojo/public/cpp/bindings/struct_ptr.h"
#include "mojo/public/cpp/system/buffer.h"
#include "mojo/public/cpp/system/data_pipe.h"
#include "mojo/public/cpp/system/handle.h"
#include "mojo/public/cpp/system/message_pipe.h"
#include "mojo/services/files/interfaces/ioctl_terminal.mojom-internal.h"
namespace mojo {
namespace files {

// --- Interface Forward Declarations ---

// --- Struct Forward Declarations ---

// --- Union Forward Declarations ---

// --- Enums Declarations ---

// --- Constants ---
const uint32_t kIoctlTerminalInvalid = 0U;
const uint32_t kIoctlTerminalGetSettings = 1U;
const uint32_t kIoctlTerminalSetSettings = 2U;
const uint32_t kIoctlTerminalGetWindowSize = 3U;
const uint32_t kIoctlTerminalSetWindowSize = 4U;
const uint32_t kIoctlTerminalTermiosBaseFieldCount = 6U;
const uint32_t kIoctlTerminalTermiosIFlagIndex = 0U;
const uint32_t kIoctlTerminalTermiosOFlagIndex = 1U;
const uint32_t kIoctlTerminalTermiosCFlagIndex = 2U;
const uint32_t kIoctlTerminalTermiosLFlagIndex = 3U;
const uint32_t kIoctlTerminalTermiosISpeedIndex = 4U;
const uint32_t kIoctlTerminalTermiosOSpeedIndex = 5U;
const uint32_t kIoctlTerminalTermiosCtrlCharCount = 17U;
const uint32_t kIoctlTerminalTermiosCtrlCharVINTRIndex = 17U;
const uint32_t kIoctlTerminalTermiosCtrlCharVQUITIndex = 18U;
const uint32_t kIoctlTerminalTermiosCtrlCharVERASEIndex = 19U;
const uint32_t kIoctlTerminalTermiosCtrlCharVKILLIndex = 20U;
const uint32_t kIoctlTerminalTermiosCtrlCharVEOFIndex = 21U;
const uint32_t kIoctlTerminalTermiosCtrlCharVTIMEIndex = 22U;
const uint32_t kIoctlTerminalTermiosCtrlCharVMINIndex = 23U;
const uint32_t kIoctlTerminalTermiosCtrlCharVSWTCIndex = 24U;
const uint32_t kIoctlTerminalTermiosCtrlCharVSTARTIndex = 25U;
const uint32_t kIoctlTerminalTermiosCtrlCharVSTOPIndex = 26U;
const uint32_t kIoctlTerminalTermiosCtrlCharVSUSPIndex = 27U;
const uint32_t kIoctlTerminalTermiosCtrlCharVEOLIndex = 28U;
const uint32_t kIoctlTerminalTermiosCtrlCharVREPRINTIndex = 29U;
const uint32_t kIoctlTerminalTermiosCtrlCharVDISCARDIndex = 30U;
const uint32_t kIoctlTerminalTermiosCtrlCharVWERASEIndex = 31U;
const uint32_t kIoctlTerminalTermiosCtrlCharVLNEXTIndex = 32U;
const uint32_t kIoctlTerminalTermiosCtrlCharVEOL2Index = 33U;
const uint32_t kIoctlTerminalTermiosIFlagIGNBRK = 1U;
const uint32_t kIoctlTerminalTermiosIFlagBRKINT = 2U;
const uint32_t kIoctlTerminalTermiosIFlagIGNPAR = 4U;
const uint32_t kIoctlTerminalTermiosIFlagPARMRK = 8U;
const uint32_t kIoctlTerminalTermiosIFlagINPCK = 16U;
const uint32_t kIoctlTerminalTermiosIFlagISTRIP = 32U;
const uint32_t kIoctlTerminalTermiosIFlagINLCR = 64U;
const uint32_t kIoctlTerminalTermiosIFlagIGNCR = 128U;
const uint32_t kIoctlTerminalTermiosIFlagICRNL = 256U;
const uint32_t kIoctlTerminalTermiosIFlagIUCLC = 512U;
const uint32_t kIoctlTerminalTermiosIFlagIXON = 1024U;
const uint32_t kIoctlTerminalTermiosIFlagIXANY = 2048U;
const uint32_t kIoctlTerminalTermiosIFlagIXOFF = 4096U;
const uint32_t kIoctlTerminalTermiosIFlagIMAXBEL = 8192U;
const uint32_t kIoctlTerminalTermiosIFlagIUTF8 = 16384U;
const uint32_t kIoctlTerminalTermiosOFlagOPOST = 1U;
const uint32_t kIoctlTerminalTermiosOFlagOLCUC = 2U;
const uint32_t kIoctlTerminalTermiosOFlagONLCR = 4U;
const uint32_t kIoctlTerminalTermiosOFlagOCRNL = 8U;
const uint32_t kIoctlTerminalTermiosOFlagONOCR = 16U;
const uint32_t kIoctlTerminalTermiosOFlagONLRET = 32U;
const uint32_t kIoctlTerminalTermiosOFlagOFILL = 64U;
const uint32_t kIoctlTerminalTermiosOFlagOFDEL = 128U;
const uint32_t kIoctlTerminalTermiosOFlagNLDLY = 256U;
const uint32_t kIoctlTerminalTermiosOFlagNL0 = 0U;
const uint32_t kIoctlTerminalTermiosOFlagNL1 = 256U;
const uint32_t kIoctlTerminalTermiosOFlagCRDLY = 1536U;
const uint32_t kIoctlTerminalTermiosOFlagCR0 = 0U;
const uint32_t kIoctlTerminalTermiosOFlagCR1 = 512U;
const uint32_t kIoctlTerminalTermiosOFlagCR2 = 1024U;
const uint32_t kIoctlTerminalTermiosOFlagCR3 = 1536U;
const uint32_t kIoctlTerminalTermiosOFlagTABDLY = 6144U;
const uint32_t kIoctlTerminalTermiosOFlagTAB0 = 0U;
const uint32_t kIoctlTerminalTermiosOFlagTAB1 = 2048U;
const uint32_t kIoctlTerminalTermiosOFlagTAB2 = 4096U;
const uint32_t kIoctlTerminalTermiosOFlagTAB3 = 6144U;
const uint32_t kIoctlTerminalTermiosOFlagBSDLY = 8192U;
const uint32_t kIoctlTerminalTermiosOFlagBS0 = 0U;
const uint32_t kIoctlTerminalTermiosOFlagBS1 = 8192U;
const uint32_t kIoctlTerminalTermiosOFlagVTDLY = 16384U;
const uint32_t kIoctlTerminalTermiosOFlagVT0 = 0U;
const uint32_t kIoctlTerminalTermiosOFlagVT1 = 16384U;
const uint32_t kIoctlTerminalTermiosOFlagFFDLY = 32768U;
const uint32_t kIoctlTerminalTermiosOFlagFF0 = 0U;
const uint32_t kIoctlTerminalTermiosOFlagFF1 = 32768U;
const uint32_t kIoctlTerminalTermiosCFlagCSIZE = 3U;
const uint32_t kIoctlTerminalTermiosCFlagCS5 = 0U;
const uint32_t kIoctlTerminalTermiosCFlagCS6 = 1U;
const uint32_t kIoctlTerminalTermiosCFlagCS7 = 2U;
const uint32_t kIoctlTerminalTermiosCFlagCS8 = 3U;
const uint32_t kIoctlTerminalTermiosCFlagCSTOPB = 4U;
const uint32_t kIoctlTerminalTermiosCFlagCREAD = 8U;
const uint32_t kIoctlTerminalTermiosCFlagPARENB = 16U;
const uint32_t kIoctlTerminalTermiosCFlagPARODD = 32U;
const uint32_t kIoctlTerminalTermiosCFlagHUPCL = 64U;
const uint32_t kIoctlTerminalTermiosCFlagCLOCAL = 128U;
const uint32_t kIoctlTerminalTermiosLFlagISIG = 1U;
const uint32_t kIoctlTerminalTermiosLFlagICANON = 2U;
const uint32_t kIoctlTerminalTermiosLFlagXCASE = 4U;
const uint32_t kIoctlTerminalTermiosLFlagECHO = 8U;
const uint32_t kIoctlTerminalTermiosLFlagECHOE = 16U;
const uint32_t kIoctlTerminalTermiosLFlagECHOK = 32U;
const uint32_t kIoctlTerminalTermiosLFlagECHONL = 64U;
const uint32_t kIoctlTerminalTermiosLFlagNOFLSH = 128U;
const uint32_t kIoctlTerminalTermiosLFlagTOSTOP = 256U;

// --- Interface declarations ---
}  // namespace files
}  // namespace mojo

// --- Internal Template Specializations ---

namespace mojo {
namespace internal {

}  // internal
}  // mojo
namespace mojo {
namespace files {

// --- Interface Request Validators ---

// --- Interface Response Validators ---

// --- Interface enum operators ---

// --- Unions ---
// Unions must be declared first because they can be members of structs.

// --- Inlined structs ---

// --- Non-inlined structs ---

// --- Struct serialization helpers ---

// --- Union serialization helpers ---

// --- Request and response parameter structs for Interface methods ---
}  // namespace files
}  // namespace mojo

#endif  // MOJO_SERVICES_FILES_INTERFACES_IOCTL_TERMINAL_MOJOM_COMMON_H_