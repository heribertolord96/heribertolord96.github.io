import { mkdir, copyFile, rm, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await copyFile(path.join(root, "index.html"), path.join(dist, "index.html"));

const publicDir = path.join(root, "public");
if (existsSync(publicDir)) {
  await cp(publicDir, path.join(dist), {
    recursive: true,
    filter: (src) => !/\.original\.(png|jpe?g|webp)$/i.test(src),
  });
}

console.log("Built static site → dist/index.html");
