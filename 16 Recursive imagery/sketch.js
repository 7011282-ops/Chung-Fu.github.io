// Recursive Imagery
// Chung-Fu Liao
// 11/24/2026



async function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}


function concentric(x,y,d){
  circle(x,y,d);
  if(d>10){ //recursive case
    
    concentric(x,y,d/1.2);
  }
  //implicit base case
  // if d =< 10, end function and unravel
}



function draw() {
  background(220);
  // concentric(width/2, height/2, width/2);
  circlefractal(width/2, height/2, width/2);
}


function circlefractal(x,y,d){
  circle(x,y,d);
  if(d>1){ //recursive calls (3)
    let newX = x - d/2;
    circlefractal(x - d/2, y, d/2);
    circlefractal(x + d/2, y, d/2);
    circlefractal(x, y - d/2, d/2);
  }
  //implicit base case (d =< 1)
}