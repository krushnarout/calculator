# Image Compressor

A simple command-line interface (CLI) tool that compresses images in a directory using [Sharp](https://sharp.pixelplumbing.com/). You can specify input and output directories, image formats, and compression quality.

## Features

- Compress all images in a directory.
- Supports multiple image formats: `jpg`, `jpeg`, `png`, `webp`.
- Customizable output format and quality (1-100).
- Output images to the same directory or a different one.
- Default quality of 90 if none is specified.

## Installation

First, clone the repository or download the code.

Then, inside the project directory, install the dependencies:

```bash
npm install
```

To make the CLI tool globally accessible, link the package:

```bash
npm install -g .
```

## Usage

Once the package is installed globally, you can use the `compress` command to compress images.

### Command Options

- `--input, -i` (required): Path to the input directory containing images.
- `--output, -o` (optional): Path to the output directory. If not provided, it will compress images in place.
- `--format, -f` (optional): Specify the output image format (`jpg`, `jpeg`, `png`, `webp`). Defaults to the original image format.
- `--quality, -q` (optional): Specify the quality of the compression (1-100). Defaults to 90.

### Example Commands

#### Compress images in the current directory and save them to the same directory

```bash
compress --input ./images
```

#### Compress images in the current directory and output them to a new directory

```bash
compress --input ./images --output ./compressed
```

#### Compress images and convert them to `webp` format

```bash
compress --input ./images --output ./compressed --format webp
```

#### Compress images with a specific quality (e.g., 75)

```bash
compress --input ./images --output ./compressed --quality 75
```

### Sample Output

```bash
Compressing: image1.jpg
Compressing: image2.png
Compression complete.
```

## Supported Formats

- `.jpg`
- `.jpeg`
- `.png`
- `.webp`

## Contributing

If you want to contribute or make modifications to this tool:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Use `npm link` to set up a local symlink for the global `compress` command during development.
