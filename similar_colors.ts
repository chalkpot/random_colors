// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Rgb } from "./deps.ts";
import { similarColor } from "./similar_color.ts";

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
 * const someBlueColors = similarColors([0, 0, 255], { count: 2, deviation: 20 });
 * console.log(someBlueColors); // [[ 6.87..., 0, 252.68...], [ 0, 7.53..., 255 ]]
 * ```
 *
 * @param color
 * The source color from which a random similar color will be created.
 *
 * @param deviation
 * A color deviation is an [RGB component] in the numeric range `0` to `255`,
 * the range that will be added to the original color range.
 *
 * [RGB component]: https://en.wikipedia.org/wiki/RGB_color_model
 *
 * @param count
 */
export function similarColors(color: Rgb, {
  deviation = 20,
  count = MIN_ITERATIONS,
}: {
  deviation?: number;
  count?: number;
} = {}) {
  const colors: Rgb[] = [];

  if (count < MIN_ITERATIONS) count = MIN_ITERATIONS;
  for (let i = 0; i < count; i++) {
    colors.push(similarColor(color, { deviation }));

    if (i === (MAX_ITERATIONS - 1)) break;
  }

  return colors;
}
