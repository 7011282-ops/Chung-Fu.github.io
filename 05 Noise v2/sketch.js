// Noise v2
// Chung-Fu
// 10/1/2026

// golbal variables
let xTime = 5; let xSpeed = 0.02;
let xStart = xTime;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(50);
  // frameRate(10);
}

function draw() {
  background(220);
  xTime = xStart;
  xStart += xSpeed;
  tower();
}

function tower(){
  //create a tower with circles of differe
  //y position, x position will be
  //randomly selected.
  let x = 400;
  for(let y = 0; y < height; y += 20){

    //perlin noise code (3 lines)

    let x = noise(xTime); // 0-1
    x = map(x, 0, 1, 0, width);
    xTime += xSpeed;

    // x = random(0,width);
    
    circle(x,y,20);
  }
}