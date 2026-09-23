// State Variable / Real Tim
// Chung-Fu Liao
// 9/23/2026
//


// GOobal Variables 
let objectType = 0;
// 0- circle
// 1- triangle
// 2- starburst
let startTime = 0;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  let a = 5;
}

function draw() {
  //repeat at target 60fps
  background(220);
  drawShape();
  let elapsed = millis()-startTime;
  if(elapsed > 2000){
    updateState();
    startTime = millis(); // reset timer
  }
}

function keyPressed(){
  //special ' event' function.Gets
  //called whenever we press a button
  //on the keyboard
  updateState();
}

function updateState(){
  objectType++;
  //add logic to keep variable in
  //range of (0-2)
  if(objectType > 2){
    objectType = 0;
  }
}


function drawShape() {
  // inspect state veariable (objectType)
  // and draw one of three possible
  // shapes on the Canvas.
  //[ALT][SHIFT][F] - autoformat
  let x = width / 2; let y = height / 2;
  switch (objectType) {
    case 0:
      circle(x, y, 150);
      break;
    case 1:
      triangle(x - 80, y + 50, x + 80, y + 50, x, y - 50);
      break;
    case 2:
      // loop var; condition; update
      for(let i = 0; i < 30; i++){
        let x2 = random(x-80,x+80);
        let y2 = random(y-80, y+80);
        line(x, y, x2, y2);
      }
  }
}