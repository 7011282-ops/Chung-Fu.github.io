// Interactive Scene
// Chung-Fu Liao
// 9/21/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  write();
  drawbackground();
}

// (0,0) to fill al the background color first
function drawbackground(){
  fill('black');
  rect(0,0, windowWidth, windowHeight);
}


function chearacter(){
  
}