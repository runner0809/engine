// Copyright 2013 The Flutter Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

precision mediump float;

#include <impeller/types.glsl>

IMPELLER_MAYBE_FLAT in f16vec4 v_color;

out f16vec4 frag_color;

void main() {
  frag_color = v_color;
}
