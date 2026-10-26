// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//golbal variable

let eastbound = [];
let westbound = [];


async function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 40; i++){
    let direction = floor(random(2));
    let CarType = floor(random(2));
    let XSpeed = random(6);
    if(direction === 0){
      let x = random(width);
      let y = random(height*0.2,height*0.50);
      eastbound.push(new Vehicle(x,y,CarType,XSpeed));
    }
    else{
      let x = random(width);
      let y = random(height*0.50,height*0.80);
      westbound.push(new Vehicle(-x,y,CarType,XSpeed));
    }
  }
}

function draw() {
  background(220);
  drawRoad();
  for(let n of Vehicle){
    n.display();
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
  constructor(x,y,CarType,XSpeed){ 
    this.x = x; 
    this.y = y; 
    this.XSpeed = XSpeed;
    this.CarType = CarType;
    this.c = color(random(255),random(255),random(255));
  }

  display(){
    if(this.CarType === 0){
      rect(this.x,this.y,10,5);
    }
    else{
      rect(this.x,this.y,15,6);
    }
  }
}