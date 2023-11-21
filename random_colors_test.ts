// Copyright 2023 mineejo. All rights reserved. MIT license.

import {
  MAX_ITERATIONS,
  MIN_ITERATIONS,
  randomColors,
} from "./random_colors.ts";
import { assertEquals } from "./dev_deps.ts";
import { Rgb } from "./deps.ts";

Deno.test("random colors function correct", async (t) => {
  const colors: Rgb[] = randomColors({ count: 10 });
  assertEquals(colors.length, 10, `"colors.length"`);

  await t.step("limit of returned colors correct", () => {
    (() => {
      const colors: number[][] = randomColors({
        count: MAX_ITERATIONS,
      });

      assertEquals(colors.length, MAX_ITERATIONS);
    })();

    (() => {
      const colors: number[][] = randomColors({
        count: MAX_ITERATIONS - MAX_ITERATIONS * 2,
      });

      assertEquals(colors.length, MIN_ITERATIONS);
    })();
  });
});
