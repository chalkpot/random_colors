// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "./dev_deps.ts";
import { similarColors } from "./similar_colors.ts";
import { MAX_ITERATIONS, MIN_ITERATIONS } from "./random_colors.ts";
import { Rgb } from "./deps.ts";

Deno.test("similar colors function correct", async (t) => {
  const colors: Rgb[] = similarColors([0, 0, 0], { count: 10 });
  assertEquals(colors.length, 10, `"colors.length"`);

  await t.step("limit of returned colors correct", () => {
    (() => {
      const colors: Rgb[] = similarColors([0, 0, 0], {
        count: MAX_ITERATIONS,
      });

      assertEquals(colors.length, MAX_ITERATIONS);
    })();

    (() => {
      const colors: Rgb[] = similarColors([0, 0, 0], {
        count: MAX_ITERATIONS - MAX_ITERATIONS * 2,
      });

      assertEquals(colors.length, MIN_ITERATIONS);
    })();
  });
});
