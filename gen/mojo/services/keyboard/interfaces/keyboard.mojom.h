// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_KEYBOARD_INTERFACES_KEYBOARD_MOJOM_H_
#define MOJO_SERVICES_KEYBOARD_INTERFACES_KEYBOARD_MOJOM_H_

#include <iosfwd>
#include <stdint.h>

#include "mojo/public/cpp/bindings/array.h"
#include "mojo/public/cpp/bindings/callback.h"
#include "mojo/public/cpp/bindings/interface_ptr.h"
#include "mojo/public/cpp/bindings/interface_handle.h"
#include "mojo/public/cpp/bindings/interface_request.h"
#include "mojo/public/cpp/bindings/lib/control_message_handler.h"
#include "mojo/public/cpp/bindings/lib/control_message_proxy.h"
#include "mojo/public/cpp/bindings/map.h"
#include "mojo/public/cpp/bindings/message_validator.h"
#include "mojo/public/cpp/bindings/no_interface.h"
#include "mojo/public/cpp/bindings/string.h"
#include "mojo/public/cpp/bindings/struct_ptr.h"
#include "mojo/public/cpp/system/buffer.h"
#include "mojo/public/cpp/system/data_pipe.h"
#include "mojo/public/cpp/system/handle.h"
#include "mojo/public/cpp/system/message_pipe.h"
#include "mojo/services/keyboard/interfaces/keyboard.mojom-common.h"
#include "mojo/services/native_viewport/interfaces/native_viewport_event_dispatcher.mojom.h"
namespace keyboard {

// --- Interface Forward Declarations ---

using KeyboardClientPtr = mojo::InterfacePtr<KeyboardClient>;

using KeyboardServicePtr = mojo::InterfacePtr<KeyboardService>;

using KeyboardServiceFactoryPtr = mojo::InterfacePtr<KeyboardServiceFactory>;


// --- Interface Proxies ---


class KeyboardClientProxy
    : public KeyboardClient,
      public mojo::internal::ControlMessageProxy {
 public:
  explicit KeyboardClientProxy(mojo::MessageReceiverWithResponder* receiver);
  void CommitCompletion(
      CompletionDataPtr completion
  ) override;
  void CommitCorrection(
      CorrectionDataPtr correction
  ) override;
  void CommitText(
      const mojo::String& text, int32_t newCursorPosition
  ) override;
  void DeleteSurroundingText(
      int32_t beforeLength, int32_t afterLength
  ) override;
  void SetComposingRegion(
      int32_t start, int32_t end
  ) override;
  void SetComposingText(
      const mojo::String& text, int32_t newCursorPosition
  ) override;
  void SetSelection(
      int32_t start, int32_t end
  ) override;
  void Submit(
      SubmitAction action
  ) override;
};


class KeyboardServiceProxy
    : public KeyboardService,
      public mojo::internal::ControlMessageProxy {
 public:
  explicit KeyboardServiceProxy(mojo::MessageReceiverWithResponder* receiver);
  void Show(
      mojo::InterfaceHandle<KeyboardClient> client, KeyboardType type
  ) override;
  void ShowByRequest(
      
  ) override;
  void Hide(
      
  ) override;
  void SetText(
      const mojo::String& text
  ) override;
  void SetSelection(
      int32_t start, int32_t end
  ) override;
};


class KeyboardServiceFactoryProxy
    : public KeyboardServiceFactory,
      public mojo::internal::ControlMessageProxy {
 public:
  explicit KeyboardServiceFactoryProxy(mojo::MessageReceiverWithResponder* receiver);
  void CreateKeyboardService(
      mojo::InterfaceRequest<mojo::NativeViewportEventDispatcher> keyEventDispatcher, mojo::InterfaceRequest<KeyboardService> serviceRequest
  ) override;
};


// --- Interface Stubs ---

class KeyboardClientStub : public mojo::MessageReceiverWithResponderStatus {
 public:
  KeyboardClientStub();
  ~KeyboardClientStub() override;
  void set_sink(KeyboardClient* sink) { sink_ = sink; }
  KeyboardClient* sink() { return sink_; }

  bool Accept(mojo::Message* message) override;
  bool AcceptWithResponder(mojo::Message* message,
      mojo::MessageReceiverWithStatus* responder) override;

 private:
  KeyboardClient* sink_;
  mojo::internal::ControlMessageHandler control_message_handler_;
};

class KeyboardServiceStub : public mojo::MessageReceiverWithResponderStatus {
 public:
  KeyboardServiceStub();
  ~KeyboardServiceStub() override;
  void set_sink(KeyboardService* sink) { sink_ = sink; }
  KeyboardService* sink() { return sink_; }

  bool Accept(mojo::Message* message) override;
  bool AcceptWithResponder(mojo::Message* message,
      mojo::MessageReceiverWithStatus* responder) override;

 private:
  KeyboardService* sink_;
  mojo::internal::ControlMessageHandler control_message_handler_;
};

class KeyboardServiceFactoryStub : public mojo::MessageReceiverWithResponderStatus {
 public:
  KeyboardServiceFactoryStub();
  ~KeyboardServiceFactoryStub() override;
  void set_sink(KeyboardServiceFactory* sink) { sink_ = sink; }
  KeyboardServiceFactory* sink() { return sink_; }

  bool Accept(mojo::Message* message) override;
  bool AcceptWithResponder(mojo::Message* message,
      mojo::MessageReceiverWithStatus* responder) override;

 private:
  KeyboardServiceFactory* sink_;
  mojo::internal::ControlMessageHandler control_message_handler_;
};

}  // namespace keyboard

#endif  // MOJO_SERVICES_KEYBOARD_INTERFACES_KEYBOARD_MOJOM_H_
