// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Rgb } from "./deps.ts";
import { randomColor } from "./random_color.ts";

/**
 * Maximum iterations or maximum number
 * of colors per function call.
 */
export const MAX_ITERATIONS = 1000;

/**
 * Minimum iterations or minimum number
 * of colors per function call.
 */
export const MIN_ITERATIONS = 2;

/**
 * ### Example
 *
 * ```ts
 * const colors = randomColors({
 *   hue: [20, 60],
 *   saturation: [10, 80],
 *   lightness: [40, 100],
 *   count: 2
 * });
 *
 * console.log(colors); // [[199.29..., 255, 255], [113.04..., 255, 183.30...]]
 * ```
 */
export function randomColors({
  hue = [0, 100],
  saturation = [0, 100],
  lightness = [0, 100],
  count = MIN_ITERATIONS,
}: {
  hue?: [number, number];
  saturation?: [number, number];
  lightness?: [number, number];
  count?: number;
} = {}): Rgb[] {
  const colors: Rgb[] = [];

  if (count < MIN_ITERATIONS) count = MIN_ITERATIONS;
  for (let i = 0; i < count; i++) {
    colors.push(randomColor({
      hue,
      saturation,
      lightness,
    }));

    if (i === (MAX_ITERATIONS - 1)) break;
  }

  return colors;
}
