// Copyright 2023 mineejo. All rights reserved. MIT license.

import { ColorComponent, Rgb } from "./deps.ts";

/**
 * ### Example
 *
 * ```ts
 * const someBlueColor = similarColor([0, 0, 255], { deviation: 20 });
 * console.log(someBlueColor); // [1.19..., 0, 255]
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
 */
export function similarColor(color: Rgb, {
  deviation = 20,
}: {
  deviation?: number;
} = {}): Rgb {
  return color.map((component: number) => {
    component = new ColorComponent(component).lightness;
    deviation = new ColorComponent(deviation).lightness;

    const randomDeviation: number = Math.random() * deviation * 2 - deviation;
    return new ColorComponent(component + randomDeviation).lightness;
  }) as Rgb;
}
