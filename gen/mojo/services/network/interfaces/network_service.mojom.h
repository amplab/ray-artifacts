// NOTE: This file was generated by the Mojo bindings generator.
#ifndef MOJO_SERVICES_NETWORK_INTERFACES_NETWORK_SERVICE_MOJOM_H_
#define MOJO_SERVICES_NETWORK_INTERFACES_NETWORK_SERVICE_MOJOM_H_

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
#include "mojo/services/network/interfaces/network_service.mojom-common.h"
#include "mojo/public/interfaces/network/network_error.mojom.h"
#include "mojo/services/network/interfaces/cookie_store.mojom.h"
#include "mojo/services/network/interfaces/host_resolver.mojom.h"
#include "mojo/services/network/interfaces/http_server.mojom.h"
#include "mojo/services/network/interfaces/net_address.mojom.h"
#include "mojo/services/network/interfaces/tcp_bound_socket.mojom.h"
#include "mojo/services/network/interfaces/tcp_connected_socket.mojom.h"
#include "mojo/services/network/interfaces/udp_socket.mojom.h"
#include "mojo/services/network/interfaces/url_loader.mojom.h"
#include "mojo/services/network/interfaces/url_loader_interceptor.mojom.h"
#include "mojo/services/network/interfaces/web_socket.mojom.h"
namespace mojo {

// --- Interface Forward Declarations ---

using NetworkServicePtr = mojo::InterfacePtr<NetworkService>;


// --- Interface Proxies ---


class NetworkServiceProxy
    : public NetworkService,
      public mojo::internal::ControlMessageProxy {
 public:
  explicit NetworkServiceProxy(mojo::MessageReceiverWithResponder* receiver);
  void CreateURLLoader(
      mojo::InterfaceRequest<mojo::URLLoader> loader
  ) override;
  void GetCookieStore(
      mojo::InterfaceRequest<mojo::CookieStore> cookie_store
  ) override;
  void CreateWebSocket(
      mojo::InterfaceRequest<mojo::WebSocket> socket
  ) override;
  void CreateTCPBoundSocket(
      mojo::NetAddressPtr local_address, mojo::InterfaceRequest<mojo::TCPBoundSocket> bound_socket, const CreateTCPBoundSocketCallback& callback
  ) override;
  void CreateTCPConnectedSocket(
      mojo::NetAddressPtr remote_address, mojo::ScopedDataPipeConsumerHandle send_stream, mojo::ScopedDataPipeProducerHandle receive_stream, mojo::InterfaceRequest<mojo::TCPConnectedSocket> client_socket, const CreateTCPConnectedSocketCallback& callback
  ) override;
  void CreateUDPSocket(
      mojo::InterfaceRequest<mojo::UDPSocket> socket
  ) override;
  void CreateHttpServer(
      mojo::NetAddressPtr local_address, mojo::InterfaceHandle<mojo::HttpServerDelegate> delegate, const CreateHttpServerCallback& callback
  ) override;
  void RegisterURLLoaderInterceptor(
      mojo::InterfaceHandle<mojo::URLLoaderInterceptorFactory> factory
  ) override;
  void CreateHostResolver(
      mojo::InterfaceRequest<mojo::HostResolver> host_resolver
  ) override;
};


// --- Interface Stubs ---

class NetworkServiceStub : public mojo::MessageReceiverWithResponderStatus {
 public:
  NetworkServiceStub();
  ~NetworkServiceStub() override;
  void set_sink(NetworkService* sink) { sink_ = sink; }
  NetworkService* sink() { return sink_; }

  bool Accept(mojo::Message* message) override;
  bool AcceptWithResponder(mojo::Message* message,
      mojo::MessageReceiverWithStatus* responder) override;

 private:
  NetworkService* sink_;
  mojo::internal::ControlMessageHandler control_message_handler_;
};

}  // namespace mojo

#endif  // MOJO_SERVICES_NETWORK_INTERFACES_NETWORK_SERVICE_MOJOM_H_
