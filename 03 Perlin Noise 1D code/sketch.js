// let xoff1 = 0;
// let xoff2 = 10000;

let inc = 0.01;
let start = 0;
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  stroke(255);
  noFill();
  beginShape();

  let xoff = start;
  for (let x = 0; x < width ; x++){
    stroke(255);
    // let y = random(height);
    let y = map(noise(xoff), 0, 1, 0, height);
    vertex(x,y);
    

    xoff += inc;
  }
  start += inc;
  endShape();

  // noLoop();
  // let x = map(noise(xoff1), 0, 1, 0, width);
  // let y = map(noise(xoff2), 0, 1, 0, height);


  // xoff2 += 0.02;
  // xoff1 += 0.02;


  // ellipse(x, y, 24, 24);





}



