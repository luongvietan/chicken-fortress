import sharp from "sharp";
import path from "node:path";

const images = path.join(process.cwd(), "public", "images");
const files = {
  "New Design.jpg": "new-design.webp",
  "New Plastic Nesting Boxes are safer for chickens.jpg": "new-plastic-nesting.webp",
  "New Larger Feed Pipe prevents clogs.jpg": "new-feed-pipe.webp",
  "New Floor discharge port removes excess worm castings.jpg": "new-castings-outlet.webp",
};

for (const [source, output] of Object.entries(files)) {
  await sharp(path.join(images, source))
    .rotate()
    .resize({ width: 1800, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(images, output));
  console.log(`${source} -> ${output}`);
}
