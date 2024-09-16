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
  .help()
  .alias("help", "h").argv;

const inputDir = path.resolve(argv.input);
const outputDir = argv.output ? path.resolve(argv.output) : null;
const format = argv.format;

compressDirectory(inputDir, outputDir, format)
  .then(() => console.log("Compression completed"))
  .catch((error) => console.error(`Error: ${error.message}`));