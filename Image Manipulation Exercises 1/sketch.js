// Image Manipulation Exercises 1
// Chung-Fu Liao
// 11/17/2026

let chip;

async function loadAssts(){
  chip = await loadImage('Image/chip.jpg');
}


async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssts();
}

function draw() {
  background(220);
  if(chip){
    image(chip,0,0,200,200);
  }
}
