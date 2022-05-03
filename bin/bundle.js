import { build } from "esbuild";
build({
  entryPoints: ["src/app.ts"],
  bundle: true,
  outdir: "dist",
  platform: "node",
  target: "node16",
}).catch(() => process.exit(1));
