// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_PREDICTION_INTERFACES_PREDICTION_MOJOM_H_
#define MOJO_SERVICES_PREDICTION_INTERFACES_PREDICTION_MOJOM_H_

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
#include "mojo/services/prediction/interfaces/prediction.mojom-common.h"
namespace prediction {

// --- Interface Forward Declarations ---

using PredictionServicePtr = mojo::InterfacePtr<PredictionService>;


// --- Interface Proxies ---


class PredictionServiceProxy
    : public PredictionService,
      public mojo::internal::ControlMessageProxy {
 public:
  explicit PredictionServiceProxy(mojo::MessageReceiverWithResponder* receiver);
  void GetPredictionList(
      PredictionInfoPtr prediction_info, const GetPredictionListCallback& callback
  ) override;
};


// --- Interface Stubs ---

class PredictionServiceStub : public mojo::MessageReceiverWithResponderStatus {
 public:
  PredictionServiceStub();
  ~PredictionServiceStub() override;
  void set_sink(PredictionService* sink) { sink_ = sink; }
  PredictionService* sink() { return sink_; }

  bool Accept(mojo::Message* message) override;
  bool AcceptWithResponder(mojo::Message* message,
      mojo::MessageReceiverWithStatus* responder) override;

 private:
  PredictionService* sink_;
  mojo::internal::ControlMessageHandler control_message_handler_;
};

}  // namespace prediction

#endif  // MOJO_SERVICES_PREDICTION_INTERFACES_PREDICTION_MOJOM_H_
