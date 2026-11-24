// Image Manipulation Exercises 1
// Chung-Fu Liao
// 11/17/2026

let chip;

async function loadAssts() {
  chip = await loadImage('Image/chip.jpg');
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssts();

  majorityColor(); 
  noLoop();
}

function draw() {
  background(220);

  if (chip) {
    image(chip, 0, 0, 200, 200);
  }
}

function majorityColor() {
  // Load the pixel data
  chip.loadPixels();

  for (let i = 0; i < chip.pixels.length; i += 4) {

    // Get the RGB values of the current pixel
    let r = chip.pixels[i];
    let g = chip.pixels[i + 1];
    let b = chip.pixels[i + 2];

    // If red is the largest, change the pixel to pure red
    if (r >= g && r >= b) {
      chip.pixels[i] = 255;
      chip.pixels[i + 1] = 0;
      chip.pixels[i + 2] = 0;
    }

    // If green is the largest, change the pixel to pure green
    else if (g >= r && g >= b) {
      chip.pixels[i] = 0;
      chip.pixels[i + 1] = 255;
      chip.pixels[i + 2] = 0;
    }

    // Otherwise, change the pixel to pure blue
    else {
      chip.pixels[i] = 0;
      chip.pixels[i + 1] = 0;
      chip.pixels[i + 2] = 255;
    }
  }

  // Update the image with the new pixel colors
  chip.updatePixels();
}
