// Drawing with Shapes Exercise
// Chung-Fu Liao
// 9/18/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 500; let y = 500;
let headSize = 100;
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawAlien();
}

function drawAlien(){
  noStroke();
  //Draw body
  fill('green');
  circle(x,y,headSize);
  rect(x-50,y,100,70);
  rect(x - headSize/2, y,headSize/10,headSize);
  rect(x + headSize/2 - headSize /10, y, headSize/10,headSize);
  fill('black')
  circle(x - (x/20), y - (y/100), headSize / 10);
  circle(x + (x/20), y - (y/100), headSize / 10);
  rect((x+x/2), y + (y/100), 100, 20);
  //Draw Face
  circle(x,y, 50)
}