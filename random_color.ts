// Copyright 2023 mineejo. All rights reserved. MIT license.

import { AdvancedColor, Rgb } from "./deps.ts";
import { randomWithinRange } from "./util.ts";

/**
 * ### Example
 *
 * ```ts
 * const someRedColor = randomColor({
 *   hue: [0, 10],
 *   saturation: [10, 80],
 *   lightness: [40, 100],
 * });
 *
 * console.log(someRedColor); // [255, 243.84..., 145.08...]
 * ```
 */
export function randomColor({
  hue = [0, 100],
  saturation = [0, 100],
  lightness = [0, 100],
}: {
  hue?: [number, number];
  saturation?: [number, number];
  lightness?: [number, number];
} = {}): Rgb {
  return new AdvancedColor(
    randomWithinRange(...hue),
    randomWithinRange(...saturation),
    randomWithinRange(...lightness),
  ).components;
}
