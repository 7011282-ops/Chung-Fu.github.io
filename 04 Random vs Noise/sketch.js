// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Var / Definitions
let minSize = 5; let maxSize = 200;
let x1; let y1; //declare first
let x2; let y2;
// for noise()
let noiseTime = 10; let noiseSpeed = 0.01;
// noiseTime -> current cordinate on noise graph
// noiseSpeed -> rate a which we move down the graph
let x3 = 400; let y3 = 200;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  y1 = height/2;
  x1 = width*0.3;
  x2 = width*0.7;
  y2 = height /2;
  // frameRate(10);
}

function draw() {
  background(220);
  // randomSeed(0); //use randomSeed to 
                  // stabilize random()
  randomCircle();
  noiseCircle();
}

function moveCircle(){
  //CHALLENGE: using perlin noise(), 
  // draw a 40 px circle that moves left or rihgt randomly, 
  // wrapping around if it leaves the screen.
  let dx = noise(noiseTime); // 0-1
  dx = map(dx, 0, 1, -5, 5);
  x3 += dx;
  circle(x3, y3, 40);

  // wrap around
  if(x3 > width) x3 = 0;
  else if (x3 < 0) x3 = width;
}

function noiseCircle(){
  // another circle, this time the diameter
  // is generated using noise(), smoothly
  fill(255,50,150);
  let d = noise(noiseTime); //yield value b/w 0-1
  d = map(d,0,1,minSize,maxSize);
  noiseTime += noiseSpeed;
  circle(x2, y2, d);

}

function randomCircle(){
  //draw a fixed circle position  
  // randomly changing diameter 
  fill(50,150,250);
  let d = random(minSize, maxSize);
  circle(x1, y1, d);


}
