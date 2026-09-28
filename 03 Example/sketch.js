// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function drawcircle(){
  fill('black');
  for(let x = 0; x <= 11; x += 1){
    circle(x*width/11, 0, 60);
    line(x*width/11,0, mouseX,mouseY);
    circle(x*width/11,height,60);
    line(x*width/11,height, mouseX,mouseY);
    circle(mouseX,mouseY,25);
  }
  for(let y = 0; y < 12; y++){
    circle(0,y*height/11,60);
    line(0,y*height/11,mouseX,mouseY);
    circle(width,y*height/11,60);
    line(width,y*height/11,mouseX,mouseY);
    circle(mouseX,mouseY,25);
  }
}
function draw() {
  background(220);
  drawcircle();
}
