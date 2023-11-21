// Copyright 2023 mineejo. All rights reserved. MIT license.

const GOLDEN_RATIO = 0.618033988749895;

/**
 * Generating a random number within a specified range
 * using the [golden ratio]!
 *
 * [golden ratio]: https://en.wikipedia.org/wiki/Golden_ratio
 */
export function randomWithinRange(min: number, max: number): number {
  const random: number = (Math.random() + GOLDEN_RATIO) % 1;
  const number: number = min + random * (max + 1 - min);
  return Math.min(Math.max(number, min), max);
}
