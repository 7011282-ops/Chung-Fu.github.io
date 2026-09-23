// Interactive Scene
// Chung-Fu Liao
// 9/21/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//golbal variables
let circleColor = (0,0,0);
let rectcolor = ['blue','red',(36, 174, 212)];
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawbackground();
  Sepctator_Seating();
}

// (0,0) to fill al the background color first
function drawbackground(){
  fill(118,21,171);
  rect(0,0, windowWidth, windowHeight);
}
function Sepctator_Seating(){
  // color set
  noStroke();
  let line = windowHeight/10;
  for (let i = 0; i < 3; i++){
    fill(rectcolor);
    square(60,225,90);
  }
}
function randomrect(){
}
