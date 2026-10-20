// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//golbal variable

let eastbound = [];
let westbound = [];
let VehicleType, toward, position;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
  VehicleType = random(0,1); toward = random(0,1); position = random(0,100);
  position = map(position, 0,100,height*0.2);
  if (VehicleType !== 1){
    if(toward !== 1){
      eastbound.push(new Vehicle(0,));
    }
  }
}

function drawRoad(){
  fill('black');
  rect(0, height*0.2, width, height*0.5);
  fill('white');
  noStroke();
  for(let i = 0; i <= width; i+= width/21){
    rect(i + 10, height/2.15, 20, 2);
  }
}

class Vehicle{
  constructor(x,y,theImage,derection){
    this.x = x; this.y = y;
    this.c = color(random(255),random(255),random(255));
    this.derection = derection;
    this.theImage = theImage;
  }

  display(){
    if(this.theImage === 0){
      rect(this.x, this.y, )
    }
    else{

    }
  }
}



