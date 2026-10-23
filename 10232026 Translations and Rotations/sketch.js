// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let speed = 0.05;
let x = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width/2,height/2);
  clock();
}


function clock(){
  circle(0,0,300);
  circle(0,0,1);
  for(let i = 0; i < 360; i+= 6){
    push();
    rotate(i);
    rect(0,120,1,25);
    pop();
  }
  for(let i = 0; i < 360; i+= 30){
    push();
    rotate(i);
    rect(-0.5,100,2,45);
    pop();
  }
}