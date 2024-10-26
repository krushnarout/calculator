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

## 1. Install the CLI Tool Globally

If you've built your CLI tool and want to use it globally, you need to install it globally via npm:

Navigate to your project’s root directory (where package.json is located), and run this command to install your tool globally:

```bash
npm install -g .
```

After installing globally, you can use the img-compress command from anywhere in your terminal.

## 2. Use the CLI Tool Without Installation (via npx)

You can also run the CLI tool directly using npx without installing it globally. This avoids the need for a global installation.

## Usage

Once the package is installed globally or used via npx, you can use the `img-compress` command to compress images.

## Command Options

- `--input, -i` (required): Path to the input directory containing images.
- `--output, -o` (optional): Path to the output directory. If not provided, it will compress images in place.
- `--format, -f` (optional): Specify the output image format (`jpg`, `jpeg`, `png`, `webp`). Defaults to the original image format.
- `--quality, -q` (optional): Specify the quality of the compression (1-100). Defaults to 90.

## Example Commands

### 1. Using the CLI Tool After Global Installation

#### Compress images in the current directory and save them to the same directory

```bash
img-compress --input ./images
```

#### Compress images in the current directory and output them to a new directory

```bash
img-compress --input ./images --output ./compressed
```

#### Compress images and convert them to `webp` format

```bash
img-compress --input ./images --output ./compressed --format webp
```

#### Compress images with a specific quality (e.g., 75)

```bash
img-compress --input ./images --output ./compressed --quality 75
```

### 2. Using the CLI Tool Without Installation (via `npx`)

#### If you haven’t installed the tool globally, you can use `npx` to run the same commands

```bash
npx img-compress --input ./images
```

```bash
npx img-compress --input ./images --output ./compressed --format webp
```

### Sample Output

```bash
Compressing: image1.jpg to image1.webp
Compressing: image2.png to image2.webp
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
3. Use `npm link` to set up a local symlink for the global `img-compress` command during development.
