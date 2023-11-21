// Copyright 2023 mineejo. All rights reserved. MIT license.

import { randomColor } from "./random_color.ts";
import { assertEquals } from "./dev_deps.ts";
import { Rgb } from "./deps.ts";

export function truncComponents(components: Rgb): Rgb {
  return components.map((component: number) => Math.trunc(component)) as Rgb;
}

Deno.test("random color function correct", () => {
  const startRed: Rgb = randomColor({
    hue: [0, 0],
    saturation: [100, 100],
    lightness: [50, 50],
  });
  assertEquals(truncComponents(startRed), [255, 0, 0], `"startRed"`);

  const green: Rgb = randomColor({
    hue: [33.33, 33.33],
    saturation: [100, 100],
    lightness: [50, 50],
  });
  assertEquals(truncComponents(green), [0, 255, 0], `"green"`);

  const blue: Rgb = randomColor({
    hue: [66.66, 66.66],
    saturation: [100, 100],
    lightness: [50, 50],
  });
  assertEquals(truncComponents(blue), [0, 0, 255], `"blue"`);

  const endRed: Rgb = randomColor({
    hue: [100, 100],
    saturation: [100, 100],
    lightness: [50, 50],
  });
  assertEquals(truncComponents(endRed), [255, 0, 0], `"endRed"`);

  const grey: Rgb = randomColor({
    hue: [100, 100],
    saturation: [0, 0],
    lightness: [50, 50],
  });
  assertEquals(truncComponents(grey), [64, 64, 64], `"grey"`);

  const black: Rgb = randomColor({
    hue: [100, 100],
    saturation: [100, 100],
    lightness: [0, 0],
  });
  assertEquals(truncComponents(black), [0, 0, 0], `"black"`);

  const white: Rgb = randomColor({
    hue: [100, 100],
    saturation: [100, 100],
    lightness: [100, 100],
  });
  assertEquals(truncComponents(white), [255, 255, 255], `"white"`);
});
