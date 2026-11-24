
// Image Manipulation Exercises 4
// Chung-Fu Liao
// 11/16/2026

// Global variable to store the image
let hand;

// Load the image
async function loadAssts() {
  hand = await loadImage('Image/hand.jpg');
}

async function setup() {
  createCanvas(600, 400);
  await loadAssts();

  // Resize the image to fit the canvas
  hand.resize(width, height);

  noLoop();
}

function draw() {
  background(220);

  // Find the center of the canvas
  let halfw = width / 2;

  // image(img, dx, dy, dw, dh, sx, sy, sw, sh);
  // dx, dy: Where to draw the image
  // dw, dh: Display width and height
  // sx, sy: Starting position in the original image
  // sw, sh: Width and height of the copied area

  // Draw the original right half of the image
  image(hand, halfw, 0, halfw, height,halfw, 0, halfw, height);
 
  // Save the current transformation settings
  push();

  // Move the origin to the center of the canvas
  translate(halfw, 0);

  // Flip the image horizontally
  scale(-1, 1);

  // Copy the right half onto the left side as a mirror
  image(hand, 0, 0, halfw, height,halfw, 0, halfw, height);

  // Restore the original transformation settings
  pop();
}
