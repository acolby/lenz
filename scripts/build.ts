// scripts/build.js
import { build } from "esbuild";
import { rmSync } from "fs";

rmSync("dist", { recursive: true, force: true });

build({
  entryPoints: ["src/index.tsx"],
  bundle: false,
  outdir: "dist",
  format: "esm",
  target: ["esnext"],
  jsx: "automatic",
  sourcemap: true,
  splitting: false,
  minify: false,
  tsconfig: "tsconfig.json",
}).catch(() => process.exit(1));
