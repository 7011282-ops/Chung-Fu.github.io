// Image Manipulation Exercises
// Chung-Fu Liao
// 11/16/2026


let hand;


async function loadAssts(){
  hand = await loadImage('/Image/hand.jpg');
}

async function setup() {
  
  createCanvas(600, 400);
  
  await loadAssts();
  
  hand.resize(width, height);
  
  noLoop();
}

function draw() {
  let halfw = width / 2;
  //image(img, dx, dy, dw, dh, sx, sy, sw, sh);
  //dx, dy where to draw
  //dw, dh Display size
  //sx, sy Where to copy from the original image
  //sw, sh Size of the copied area
  image(hand, halfw, 0, halfw, height, halfw, 0, halfw, height);
  
  push();
  
  translate(halfw, 0);
  
  scale(-1,1);
  
  image(hand, 0, 0, halfw, height, halfw, 0, halfw, height);
  
  pop();
}



























