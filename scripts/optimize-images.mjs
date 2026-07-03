import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import os from "os";

const DESK = path.join(os.homedir(), "Desktop");
const PHOTOS = "public/photos";
const ORIG = path.join(PHOTOS, "_originals");

async function size(p) {
  const s = await fs.stat(p);
  return (s.size / 1024).toFixed(0) + " KB";
}

// PART 1 — new photos from Desktop: longest edge 1400, JPEG q80
const NEW = [
  ["finshed service.jpeg", "work-finished-service.jpg"],
  ["image 2.jpeg", "work-panel-install-02.jpg"],
  ["image 3.jpeg", "work-panel-install-03.jpg"],
  // SPAN pair intentionally skipped — source files not present on Desktop.
];

// PART 2 — compress existing in place (back up original first)
const COMPRESS = [
  ["work-service-upgrade-victorian.jpg", 1200, 78],
  ["work-service-upgrade-white.jpg", 1200, 78],
  ["micah-portrait.jpg", null, 78], // keep dims
  ["work-solar-enphase.jpg", null, 78],
  ["company-van.jpg", null, 78],
];

async function run() {
  console.log("=== PART 1: new photos ===");
  for (const [src, dst] of NEW) {
    const from = path.join(DESK, src);
    const to = path.join(PHOTOS, dst);
    await sharp(from)
      .resize({ width: 1400, height: 1400, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(to);
    console.log(`  ${dst}  ->  ${await size(to)}`);
  }

  console.log("=== PART 2: compress existing (JPEG) ===");
  for (const [name, width, q] of COMPRESS) {
    const file = path.join(PHOTOS, name);
    const backup = path.join(ORIG, name);
    const before = await size(file);
    await fs.copyFile(file, backup); // backup original
    const buf = await fs.readFile(backup); // read from backup, write to original
    let img = sharp(buf);
    if (width) img = img.resize({ width, height: width, fit: "inside", withoutEnlargement: true });
    await img.jpeg({ quality: q, mozjpeg: true }).toFile(file);
    console.log(`  ${name}  ${before}  ->  ${await size(file)}`);
  }

  console.log("=== PART 2: logo.png (palette) ===");
  {
    const file = "public/logo.png";
    const backup = path.join(ORIG, "logo.png");
    const before = await size(file);
    await fs.copyFile(file, backup);
    const buf = await fs.readFile(backup);
    await sharp(buf).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(file);
    console.log(`  logo.png  ${before}  ->  ${await size(file)}`);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
