// Copyright 2023 mineejo. All rights reserved. MIT license.

import { similarColor } from "./similar_color.ts";
import { assertEquals, assertNotEquals } from "./dev_deps.ts";
import { Rgb } from "./deps.ts";

Deno.test("similar color function correct", () => {
  const components: Rgb = [100, 50, 200];

  const originalComponents: Rgb = similarColor(components, {
    deviation: 0,
  });
  assertEquals(components, originalComponents);

  const similarComponents: Rgb = similarColor(components, {
    deviation: 50,
  });
  assertNotEquals(components, similarComponents);
});
