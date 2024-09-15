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
  .help()
  .alias("help", "h").argv;

const inputDir = path.resolve(argv.input);
const outputDir = argv.output ? path.resolve(argv.output) : null;

compressDirectory(inputDir, outputDir)
  .then(() => console.log("Compression completed"))
  .catch((error) => console.error(`Error: ${error.message}`));