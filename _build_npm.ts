// Copyright 2023 mineejo. All rights reserved. MIT license.

import { build, emptyDir } from "https://deno.land/x/dnt@0.38.1/mod.ts";

const outDir = "./.npm";

await emptyDir(outDir);

await build({
  entryPoints: ["./mod.ts"],
  outDir: outDir,
  shims: {
    deno: true,
  },
  test: true,
  package: {
    name: "@chalkpot/random-colors",
    version: Deno.args[0],
    description: "Random colors are tools for generating attractive color, " +
      "similar colors, color palettes or any random colors.",
    author: "mineejo",
    license: "MIT",
    homepage: "https://github.com/chalkpot/random_colors#readme",
    repository: {
      type: "git",
      url: "git+https://github.com/chalkpot/random_colors.git",
    },
    bugs: {
      url: "https://github.com/chalkpot/random_colors/issues",
    },
    keywords: [
      "chalkpot",
      "random",
      "colors",
      "color",
      "similar",
      "palette",
    ],
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", `${outDir}/LICENSE`);
    Deno.copyFileSync("README.md", `${outDir}/README.md`);
  },
});
