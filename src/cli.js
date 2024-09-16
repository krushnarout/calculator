#!/usr/bin/env node

const path = require("path");
const yargs = require("yargs");
const { compressDirectory } = require("./compress");

const argv = yargs
  .option("input", {
    alias: "i",
    description: "Input directory path",
    type: "string",
    demandOption: true,
  })
  .option("output", {
    alias: "o",
    description: "Output directory path (Optional)",
    type: "string",
  })
  .option("format", {
    alias: "f",
    description: "Output format (jpg, jpeg, png, webp)",
    type: "string",
    choices: ["jpg", "jpeg", "png", "webp"],
    default: "jpg",
  })
  .option("quality", {
    alias: "q",
    description: "Image compression quality (1-100)",
    type: "number",
    default: 90,
    coerce: (value) => {
      if (value < 1 || value > 100) {
        throw new Error("Quality must be between 1 and 100");
      }
      return value;
    },
  })
  .help()
  .alias("help", "h").argv;

const inputDir = path.resolve(argv.input);
const outputDir = argv.output ? path.resolve(argv.output) : null;
const format = argv.format;
const quality = argv.quality;

compressDirectory(inputDir, outputDir, format, quality)
  .then(() => console.log("Compression completed"))
  .catch((error) => console.error(`Error: ${error.message}`));