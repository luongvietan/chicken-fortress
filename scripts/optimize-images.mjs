// scripts/optimize-images.mjs
// Resize + recompress raw client photos into public/images/, then delete the originals.
// Run: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readFile, unlink, mkdir, access } from "node:fs/promises";
import path from "node:path";

const PUBLIC = path.join(process.cwd(), "public");
const OUT = path.join(PUBLIC, "images");

const MAP = {
  "IMG_20260620_170105_630.jpg": "exterior-side.jpg",
  "IMG_20260620_171354_262.jpg": "interior-wide.jpg",
  "IMG_20260620_170122_322.jpg": "exterior-door.jpg",
  "IMG_20260620_171149_575.jpg": "exterior-id.jpg",
  "IMG_20260620_171218_390.jpg": "nesting-rollaway.jpg",
  "IMG_20260620_171234_090.jpg": "interior-framing.jpg",
  "IMG_20260620_171243_542.jpg": "floor-drinkers.jpg",
  "IMG_20260620_170239_687.jpg": "vermiculture-pit.jpg",
  "IMG_20260620_170243_119.jpg": "feed-hopper.jpg",
};

await mkdir(OUT, { recursive: true });

for (const [src, dest] of Object.entries(MAP)) {
  const srcPath = path.join(PUBLIC, src);
  try {
    await access(srcPath);
  } catch {
    console.log(`• skip ${src} (already processed)`);
    continue;
  }
  const input = await readFile(srcPath);
  await sharp(input)
    .rotate() // honor EXIF orientation
    .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(OUT, dest));
  await unlink(srcPath);
  console.log(`✓ ${src} -> images/${dest}`);
}
