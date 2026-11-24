// Image Manipulation Exercises 2
// Chung-Fu
// 2026/11/23

// Global variable to store the image
let race;

// Load the image
async function loadAssts() {
  race = await loadImage('Image/race.jpg');
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssts();

  // Remove green from the right half
  noGreenRightSide();
  noLoop();
}

function draw() {
  background(220);

  // Display the modified image
  if (race) {
    image(race, 0, 0, 200, 200);
  }
}

function noGreenRightSide() {
  // Load the pixel data
  race.loadPixels();

  // Loop through every row and column
  for (let y = 0; y < race.height; y++) {
    for (let x = 0; x < race.width; x++) {

      // Only change pixels on the right half
      if (x >= race.width / 2) {

        // Find the pixel's position in the array
        let index = (y * race.width + x) * 4;

        // Set the green value to zero
        race.pixels[index + 1] = 0;
      }
    }
  }

  // Update the image with new pixel values
  race.updatePixels();
}