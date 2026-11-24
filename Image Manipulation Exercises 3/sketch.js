
// Image Manipulation Exercises 3
// Chung-Fu
// 2026/11/23

// Global variable to store the image
let nuit;

// Load the image
async function loadAssts() {
  nuit = await loadImage('Image/nuit.jpg');
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssts();

  // Apply the five-color effect
  fiveColorPosterize();
  noLoop();
}

function draw() {
  background(220);

  // Display the modified image
  if (nuit) {
    image(nuit, 0, 0, 200, 200);
  }
}

function fiveColorPosterize() {
  // Load the pixel data
  nuit.loadPixels();

  // Loop through every pixel (RGBA)
  for (let i = 0; i < nuit.pixels.length; i += 4) {

    // Get the RGB values
    let r = nuit.pixels[i];
    let g = nuit.pixels[i + 1];
    let b = nuit.pixels[i + 2];

    // Calculate the average intensity
    let avg = (r + g + b) / 3;

    // Choose a new color based on brightness
    if (avg >= 205) {
      r = 170;
      g = 230;
      b = 220;
    }
    else if (avg >= 155) {
      r = 105;
      g = 150;
      b = 210;
    }
    else if (avg >= 105) {
      r = 120;
      g = 180;
      b = 60;
    }
    else if (avg >= 55) {
      r = 130;
      g = 30;
      b = 130;
    }
    else {
      r = 90;
      g = 10;
      b = 50;
    }

    // Replace the original RGB values
    nuit.pixels[i] = r;
    nuit.pixels[i + 1] = g;
    nuit.pixels[i + 2] = b;
  }

  // Update the image
  nuit.updatePixels();
}
