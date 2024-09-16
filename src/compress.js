const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

async function compressImage(inputPath, outputPath, format, quality) {
  const image = sharp(inputPath);

  const buffer = await image.toFormat(format, { quality }).toBuffer();

  await fs.ensureDir(path.dirname(outputPath));

  await fs.writeFile(outputPath, buffer);
}

async function compressDirectory(inputDir, outputDir, format, quality) {
  const files = await fs.readdir(inputDir);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);

    if (!file.match(/\.(jpg|jpeg|png)$/i)) {
      console.log(`Skipping non-image file: ${file}`);
      continue;
    }

    const outputFileName = `${path.basename(file, path.extname(file))}.${format}`;
    const outputPath = outputDir
      ? path.join(outputDir, outputFileName)
      : path.join(inputDir, outputFileName);

    try {
      await compressImage(inputPath, outputPath, format, quality);
      console.log(`Compressed: ${file} to ${outputFileName}`);
    } catch (error) {
      console.error(`Failed to compress ${file}: ${error.message}`);
    }
  }
}

module.exports = { compressDirectory };