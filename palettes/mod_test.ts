// Copyright 2023 mineejo. All rights reserved. MIT license.

import * as originalPalettes from "./mod.ts";
import { assert, assertArrayIncludes, assertEquals } from "../dev_deps.ts";

Deno.test("palettes have only required fields", async (t) => {
  const requiredFields: string[] = ["hue", "saturation", "lightness"];

  // deno-lint-ignore no-explicit-any
  const palettes = originalPalettes as any;

  for (const palette in palettes) {
    assertArrayIncludes(requiredFields, Object.keys(palettes[palette]));
  }

  await t.step("field values correct", () => {
    for (const palette in palettes) {
      for (const value of Object.values(palettes[palette])) {
        if (!Array.isArray(value)) {
          assert(
            false,
            `"palette '${palette}' has values (${
              JSON.stringify(value)
            }) that are not arrays"`,
          );
        }

        if (Array.isArray(value) && value.length !== 2) {
          assert(
            false,
            `"palette '${palette}' has arrays with element lengths not equal to two"`,
          );
        }
      }
    }
  });

  await t.step("fields are in order", () => {
    for (const palette in palettes) {
      assertEquals(
        requiredFields,
        Object.keys(palettes[palette]),
        `"palettes.${palette}"`,
      );
    }
  });
});
