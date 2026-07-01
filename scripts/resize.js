import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = path.resolve('public/og-image.png');
const tempPath = path.resolve('public/og-image-temp.png');

if (!fs.existsSync(inputPath)) {
  console.error("Input file not found at", inputPath);
  process.exit(1);
}

sharp(inputPath)
  .resize({
    width: 1200,
    height: 630,
    fit: 'cover',
    position: 'centre'
  })
  .toFile(tempPath)
  .then(() => {
    fs.renameSync(tempPath, inputPath);
    console.log("Image successfully resized and cropped.");
  })
  .catch(err => {
    console.error("Error processing image", err);
    process.exit(1);
  });
