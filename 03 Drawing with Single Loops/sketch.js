// Drawing with Single Loops
// Chung-Fu Liao
// 9/25/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function worm(y, size){
  // use this function to draw a line of circles
  // y -> (number) height at which to draw line
  // size -> (number) diameter of each circle
  for(let x = size/2; x < width; x += size){ //X+= SIZE /2 CAN CREAT DOUBLE CIRCLE
    circle(x, y, size);
  }

}

function greadientBackground(){
  // create a gradient to use as background
  let h = 20; // rectangle height
  noStroke();
  //could use FOR or WHILE loop here...
  let y = 0;
  while (y < height){
    let mappedY = map(y, 0, height, 0, 255);

    // fill(mappedy); //fill(n) -> greyscale
    fill(mappedY, mouseX/10, 255-mappedY); //fill(r,g,b);
    rect(0, y, width, h);
    y += h;
  }

}
function draw() {
  background(220);
  greadientBackground();
  worm(50, 30);
  worm(height*0.5, 20);
}//screen updated here
