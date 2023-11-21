// Copyright 2023 mineejo. All rights reserved. MIT license.

import { randomPalette } from "./random_palette.ts";
import { truncComponents } from "./random_color_test.ts";
import { Rgb } from "./deps.ts";

const palette: Rgb[] = randomPalette();

for (let i = 0; i < palette.length; i++) {
  const component: Rgb = truncComponents(palette[i]);
  const color: string = `${component}`.replace(/,/g, ";");

  console.log(
    `${i + 1}.`.padEnd(2),
    `[${component}]`.padEnd(13),
    `\x1b[48;2;${color}m          \x1b[0m`,
  );
}
