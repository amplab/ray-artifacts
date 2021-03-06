// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_PUBLIC_INTERFACES_BINDINGS_TESTS_MATH_CALCULATOR_MOJOM_SYNC_H_
#define MOJO_PUBLIC_INTERFACES_BINDINGS_TESTS_MATH_CALCULATOR_MOJOM_SYNC_H_

#include <stdint.h>

#include "mojo/public/cpp/bindings/array.h"
#include "mojo/public/cpp/bindings/callback.h"
#include "mojo/public/cpp/bindings/interface_handle.h"
#include "mojo/public/cpp/bindings/interface_request.h"
#include "mojo/public/cpp/bindings/map.h"
#include "mojo/public/cpp/bindings/message_validator.h"
#include "mojo/public/cpp/bindings/string.h"
#include "mojo/public/cpp/bindings/struct_ptr.h"
#include "mojo/public/cpp/bindings/lib/synchronous_connector.h"
#include "mojo/public/interfaces/bindings/tests/math_calculator.mojom-internal.h"
#include "mojo/public/interfaces/bindings/tests/math_calculator.mojom-common.h"


namespace math {

// --- Synchronous interface declaration ---

class Calculator_SynchronousProxy;
class Calculator_Synchronous
  : public internal::Calculator_Base {
 public:
  virtual ~Calculator_Synchronous() override {}
  
  using Proxy_ = Calculator_SynchronousProxy;
  virtual bool Clear(
      double* out_value)= 0;
  virtual bool Add(
      double in_value, double* out_value)= 0;
  virtual bool Multiply(
      double in_value, double* out_value)= 0;
};

class Calculator_SynchronousProxy
    : public Calculator_Synchronous {
 public:
  explicit Calculator_SynchronousProxy(
      mojo::internal::SynchronousConnector* connector,
      mojo::internal::MessageValidatorList&& validators);
  bool Clear(double* out_value) override;
  bool Add(double in_value, double* out_value) override;
  bool Multiply(double in_value, double* out_value) override;

 private:
  // |connector_| is passed to us, and is not owned by us.
  mojo::internal::SynchronousConnector* const connector_;
  mojo::internal::MessageValidatorList const validators_;
};

}  // namespace math

#endif  // MOJO_PUBLIC_INTERFACES_BINDINGS_TESTS_MATH_CALCULATOR_MOJOM_SYNC_H_
