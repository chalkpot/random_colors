// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Rgb } from "./deps.ts";
import * as palettes from "./palettes/mod.ts";
import { randomColors } from "./random_colors.ts";

const palettesOptions: [number, number][][] = [];
for (const palette in palettes) {
  palettesOptions.push(
    Object.values(palettes[palette as keyof typeof palettes]),
  );
}

/**
 * ### Example
 *
 * ```ts
 * const palette = randomPalette();
 * console.log(palette);
 * // [
 * //   [114.90..., 255, 255],
 * //   [126.65..., 255, 255],
 * //   [255, 122.43..., 240.57...],
 * //   [142.88..., 128.04..., 255],
 * //   [255, 127.67..., 177.44...]
 * // ]
 *
 * const pastelPalette = randomPalette({
 *   palette: "pastel",
 * });
 *
 * console.log(pastelPalette);
 * // [
 * //   [172.83..., 129.42..., 255],
 * //   [138.22..., 255, 255],
 * //   [255, 116.43..., 155.02...],
 * //   [114.46..., 119.88..., 255],
 * //   [133.54..., 255, 212.66...]
 * // ]
 * ```
 *
 * @param colorCount
 * Number of colors in the palette.
 *
 * @param palette
 * The name of a palette category, to generate similar palettes.
 */
export function randomPalette({
  colorCount = 5,
  palette,
}: {
  colorCount?: number;
  palette?: keyof typeof palettes;
} = {}): Rgb[] {
  let index: number;
  if (palette) index = Object.keys(palettes).indexOf(palette);
  else index = Math.floor(Math.random() * palettesOptions.length);

  return randomColors({
    hue: palettesOptions[index][0] as [number, number],
    saturation: palettesOptions[index][1],
    lightness: palettesOptions[index][2],
    count: colorCount,
  });
}
