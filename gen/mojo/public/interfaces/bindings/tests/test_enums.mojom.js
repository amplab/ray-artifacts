// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define("mojo/public/interfaces/bindings/tests/test_enums.mojom", [
    "mojo/public/js/bindings",
    "mojo/public/js/codec",
    "mojo/public/js/connection",
    "mojo/public/js/core",
    "mojo/public/js/validator",
], function(bindings, codec, connection, core, validator) {
  var TestEnum = {};
  TestEnum.TEST = 0;
  TestEnum.V = 1;
  TestEnum.FOO = 2;
  TestEnum.BAR = 3;
  var TestEnum2 = {};
  TestEnum2.TEST = 0;
  TestEnum2.V = 1;
  TestEnum2.FOO = 2;
  TestEnum2.BAR = 3;


  var exports = {};
  exports.TestEnum = TestEnum;
  exports.TestEnum2 = TestEnum2;


  return exports;
});
