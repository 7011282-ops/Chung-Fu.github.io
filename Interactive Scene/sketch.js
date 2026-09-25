// Interactive Scene
// Chung-Fu Liao
// 9/21/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// global variables
let currentBack = 0;
let x = 600;
let y = 700;
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawbackground();
  drawLab();
  drawPortal();
  drawCheater();
  moveCharacter();
  mousePressed();

  if(currentBack === 3){

    fill(255,255,180,80);

    circle(mouseX, mouseY, 250);
  }

  drawName();
}

// (0,0) to fill al the background color first
function drawbackground(){

  noStroke();

  //lab 1
  if(currentBack === 0){
    fill(25,35,50);
  }
  else if(currentBack === 1){ //lab 2
    fill(80, 20, 25);
  }
  else if(currentBack === 2){ //lab 3
    fill(45,20,70);
  }
  else if(currentBack === 3){ //lab 4
    fill(5,8,12);
  }

  rect(0, 0, width, height);

}
function drawLab(){
  // metal floor
  fill(30, 35, 40);
  rect(0, height * 0.78, width, height * 0.22);

  //floor lines
  stroke(80);
  strokeWeight(3);

  line(0, height * 0.88, width, height * 0.88);
  line(width * 0.2, height * 0.78, width * 0.2, height);
  line(width * 0.4, height * 0.78, width * 0.4, height);
  line(width * 0.6, height * 0.78, width * 0.6, height);
  line(width * 0.8, height * 0.78, width * 0.8, height);

  noStroke();

  //light
  fill(80, 200, 255);
  rect(width*0.25, 60, width * 0.5, 15);

  // left machine
  fill(60);
  rect(80,180,180,300,15);
  fill(20,180,220); //blue area
  rect(100,210,140,160,10);

  // right machine
  fill(60);
  rect(width - 260, 180, 180, 300, 15);
  fill(20,180,220); // blue area
  rect(width - 240, 210, 140, 160, 10);

  // warning
  fill(255, 210, 0);
  triangle(width/2, 120, width/2 - 55, 210, width/2 + 55, 210);
  fill(20);
  textSize(60);
  textAlign(CENTER);
  text("!", width/2, 195);

  textAlign(LEFT);

}

function drawPortal(){

  // mouse controls portal size
  let potalSize = map(mouseX, 0, width, 120, 280);

  noFill();
  //out side
  stroke(170, 60, 255);
  strokeWeight(15);
  
  ellipse(width / 2,height * 0.48, potalSize, potalSize * 1.5);
  //in side
  stroke(60, 220, 255);
  strokeWeight(7);
  
  ellipse(width / 2, height * 0.48,potalSize - 30, potalSize * 1.5 - 30);

  noStroke();

}

function drawCheater(){

  //face
  fill('yellow');
  circle(x, y, 200);

  //eyes
  fill('black');

  circle(x + 50, y - 30, 30);
  circle(x - 50, y - 30, 30);
  circle(x ,y , 40);

  fill('gold');

  circle(x + 50,y - 30, 10);
  circle(x - 50,y - 30, 10);

  //Mouth
  rect(x, y + 20, 70, 60, 0, 0, 20);
  rect(x - 70, y + 20, 70, 60, 0, 0, 20);

  fill('yellow');

  noStroke();

  //nose
  circle(x, y + 20, 100);
  fill('red');

}

function moveCharacter(){               
  if(keyIsDown(LEFT_ARROW)){
    x -= 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x += 5;
  }
  if(keyIsDown(UP_ARROW)){
    y -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    y += 5;
  }
}

function mousePressed(){
  if(mouseButton === CENTER){

    currentBack += 1;

    if(currentBack > 3){
      currentBack = 0;
    }
  }
}

function drawName(){
  fill(255);
  textSize(18);
  textAlign(LEFT);
  text("Chung-Fu Liao", 20, height - 20);
}