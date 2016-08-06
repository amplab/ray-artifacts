// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/services/files/interfaces/ioctl.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {
  var kIoctlInvalid = 0;
  var kIoctlTerminal = 1;


  var exports = {};
  exports.kIoctlInvalid = kIoctlInvalid;
  exports.kIoctlTerminal = kIoctlTerminal;


  return exports;
});
