const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

async function compressImage(inputPath, outputPath) {
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const format = metadata.format;

  const buffer = await image.toFormat(format, { quality: 90 }).toBuffer();

  await fs.ensureDir(path.dirname(outputPath));

  await fs.writeFile(outputPath, buffer);
}

async function compressDirectory(inputDir, outputDir) {
  const files = await fs.readdir(inputDir);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);

    if (!file.match(/\.(jpg|jpeg|png)$/i)) {
      console.log(`Skipping non-image file: ${file}`);
      continue;
    }

    const outputFileName = file;
    const outputPath = outputDir
      ? path.join(outputDir, outputFileName)
      : inputPath;

    try {
      await compressImage(inputPath, outputPath);
      console.log(`Compressed: ${file}`);
    } catch (error) {
      console.error(`Failed to compress ${file}: ${error.message}`);
    }
  }
}

module.exports = { compressDirectory };