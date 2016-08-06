// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_INPUT_EVENTS_INTERFACES_INPUT_EVENT_CONSTANTS_MOJOM_COMMON_H_
#define MOJO_SERVICES_INPUT_EVENTS_INTERFACES_INPUT_EVENT_CONSTANTS_MOJOM_COMMON_H_

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
#include "mojo/services/input_events/interfaces/input_event_constants.mojom-internal.h"
namespace mojo {

// --- Interface Forward Declarations ---

// --- Struct Forward Declarations ---

// --- Union Forward Declarations ---

// --- Enums Declarations ---
  
enum class EventType : int32_t {
  UNKNOWN,
  KEY_PRESSED,
  KEY_RELEASED,
  POINTER_CANCEL,
  POINTER_DOWN,
  POINTER_MOVE,
  POINTER_UP,
};

bool EventType_IsValidValue(EventType value);
  
std::ostream& operator<<(std::ostream& stream, const EventType& val);
  
enum class EventFlags : int32_t {
  NONE = 0,
  CAPS_LOCK_DOWN = 1,
  SHIFT_DOWN = 2,
  CONTROL_DOWN = 4,
  ALT_DOWN = 8,
  LEFT_MOUSE_BUTTON = 16,
  MIDDLE_MOUSE_BUTTON = 32,
  RIGHT_MOUSE_BUTTON = 64,
  COMMAND_DOWN = 128,
  EXTENDED = 256,
  IS_SYNTHESIZED = 512,
  ALTGR_DOWN = 1024,
  MOD3_DOWN = 2048,
};

bool EventFlags_IsValidValue(EventFlags value);
  
std::ostream& operator<<(std::ostream& stream, const EventFlags& val);
  
enum class MouseEventFlags : int32_t {
  IS_DOUBLE_CLICK = 65536,
  IS_TRIPLE_CLICK = 131072,
  IS_NON_CLIENT = 262144,
};

bool MouseEventFlags_IsValidValue(MouseEventFlags value);
  
std::ostream& operator<<(std::ostream& stream, const MouseEventFlags& val);
  
enum class PointerKind : int32_t {
  TOUCH,
  MOUSE,
};

bool PointerKind_IsValidValue(PointerKind value);
  
std::ostream& operator<<(std::ostream& stream, const PointerKind& val);

// --- Constants ---

// --- Interface declarations ---
}  // namespace mojo

// --- Internal Template Specializations ---

namespace mojo {
namespace internal {

}  // internal
}  // mojo
namespace mojo {

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
}  // namespace mojo

#endif  // MOJO_SERVICES_INPUT_EVENTS_INTERFACES_INPUT_EVENT_CONSTANTS_MOJOM_COMMON_H_