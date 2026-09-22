// Interactive Scene
// Chung-Fu Liao
// 9/21/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//golbal variable
let circleColor = (0,0,0);
let rectcolor = (60,225,90);
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
  fill('black');
  rect(0,0, windowWidth, windowHeight);
}
function Sepctator_Seating(){
  // color set
  noStroke();
  let line = windowHeight/10;
  for (let i = 0; i < 3; i++){
    fill(rectcolor);
    square(int(windowWidth)/2,int(windowHeight)/10,int(windowWidth)/2,int(windowHeight)/10);
  }
}
function randomrect(){
  rectcolor = (random(50,256),random(50,256),random(50,256));
}
