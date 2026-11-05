#!/usr/bin/env node
// Runs every check of the content model v1 draft:
//   node content-model-v1-draft/check.mjs
// 1. type-checks the adapters against the real SITE-FOUNDRY props (and everything else here)
// 2. bundles checks/run.ts with esbuild and runs it: template, validator, renders, migration
// It borrows SITE-FOUNDRY's installed packages (typescript, esbuild, react, ajv, lucide) and
// writes nothing there; temp files go to the OS temp folder. SITEFOUNDRY_DIR overrides where it is.
import { spawnSync } from "node:child_process";
import { mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const SF = resolve(process.env.SITEFOUNDRY_DIR ?? join(here, "..", "..", "SITEFOUNDRY"));
const nm = join(SF, "node_modules");
const posix = (p) => p.replace(/\\/g, "/");
const req = createRequire(join(SF, "package.json"));

const ajvDir = (() => {
  const hit = readdirSync(join(nm, ".pnpm")).find((d) => /^ajv@8\./.test(d));
  if (!hit) throw new Error(`ajv 8 not found under ${nm}/.pnpm`);
  return join(nm, ".pnpm", hit, "node_modules", "ajv");
})();

const sfPaths = JSON.parse(readFileSync(join(SF, "tsconfig.paths.json"), "utf8")).compilerOptions.paths;
const foundry = Object.fromEntries(Object.entries(sfPaths).map(([k, [v]]) => [k, posix(join(SF, v))]));

const tmp = mkdtempSync(join(tmpdir(), "content-model-check-"));
let failed = false;

try {
  // 1. type-check
  const tsconfig = {
    compilerOptions: {
      target: "ES2022",
      module: "ESNext",
      moduleResolution: "Bundler",
      jsx: "react-jsx",
      strict: true,
      noEmit: true,
      skipLibCheck: true,
      resolveJsonModule: true,
      isolatedModules: true,
      types: ["node"],
      typeRoots: [posix(join(nm, "@types"))],
      paths: {
        ...Object.fromEntries(Object.entries(foundry).map(([k, v]) => [k, [v]])),
        react: [posix(join(nm, "@types", "react"))],
        "react/*": [posix(join(nm, "@types", "react", "*"))],
        "react-dom/*": [posix(join(nm, "@types", "react-dom", "*"))],
        "lucide-react": [posix(join(nm, "lucide-react"))],
        ajv: [posix(ajvDir)],
      },
    },
    include: [`${posix(here)}/**/*.ts`, `${posix(here)}/**/*.tsx`],
  };
  writeFileSync(join(tmp, "tsconfig.json"), JSON.stringify(tsconfig, null, 2));
  console.log("— type-check (tsc, against SITE-FOUNDRY props)");
  const tsc = spawnSync(process.execPath, [req.resolve("typescript/bin/tsc"), "-p", join(tmp, "tsconfig.json"), "--pretty", "false"], { encoding: "utf8" });
  const out = (tsc.stdout + tsc.stderr).trim();
  if (tsc.status === 0) console.log("PASS  type-check: 0 errors");
  else {
    failed = true;
    console.log(out);
    console.log(`FAIL  type-check: ${out.split("\n").filter((l) => /error TS/.test(l)).length} errors`);
  }

  // 2. bundle and run the runtime checks
  const esbuild = req("esbuild");
  const bundle = join(tmp, "run.cjs");
  await esbuild.build({
    entryPoints: [join(here, "checks", "run.ts")],
    outfile: bundle,
    bundle: true,
    platform: "node",
    format: "cjs",
    jsx: "automatic",
    nodePaths: [nm],
    logLevel: "error",
    loader: { ".css": "empty", ".png": "dataurl", ".jpg": "dataurl", ".svg": "dataurl", ".woff2": "empty" },
    plugins: [
      {
        name: "resolve-from-sitefoundry",
        setup(build) {
          build.onResolve({ filter: /^@foundry\// }, (a) => (foundry[a.path] ? { path: resolve(foundry[a.path]) } : { errors: [{ text: `unknown item ${a.path}` }] }));
          build.onResolve({ filter: /^ajv$/ }, () => ({ path: createRequire(join(ajvDir, "package.json")).resolve("ajv") }));
        },
      },
    ],
  });
  console.log("— runtime checks (validator, renders, migration)");
  const run = spawnSync(process.execPath, [bundle], { stdio: "inherit", env: { ...process.env, CHECK_ROOT: here } });
  if (run.status !== 0) failed = true;
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

console.log(failed ? "\nSOME CHECKS FAILED" : "\nALL CHECKS PASSED");
process.exit(failed ? 1 : 0);
