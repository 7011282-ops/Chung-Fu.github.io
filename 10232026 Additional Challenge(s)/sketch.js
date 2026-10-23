// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  rectMode(LEFT);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width/2,height/2);
  drawcircle();
}

function drawcircle(){
  for(let i = 0; i <= 360; i += 10){
    push();
    rotate(i);
    rect(0,0,200,10);
    rect();
    pop();
  }

}
