// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//golbal variable

let eastbound = [];
let westbound = [];
let position;
let VehicleType;
let toward;
let way;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  eastbound.push(new Vehicle(50 + 30, height / 2,0));
  westbound.push(new Vehicle(50 + 30, height / 3,1));
}

function draw() {
  background(220);
  drawRoad();
  for(let n of eastbound){
    n.display();
  }
  for(let n of westbound){
    n.display();
  }
  // for(let n of Vehicle){
  //   n.display();
  // }
  // toward = random(0,1);
  // if(toward === 1){
  //   position = random(0,100);
  //   eastbound.push(new Vehicle(0,position));
  //   for(let n of nodes){
  //     n.display();
  //   }
  // }
  // else{
  //   westbound.push(new Vehicle(0,position));
  // }
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
  constructor(x,y,toward){ 
    this.x = x; 
    this.y = y; 
    // this.VehicleType = random(0,1); 
    // this.direction = random(0,1); 
    // this.theImage = random(0,1);
    this.c = color(random(255),random(255),random(255));
    // this.position = map(position, 0, 100, height*0.2, height*0.45);
    // this.derection = derection;
    // this.dx = 5;
    this.height = height*0.2;
    this.toward = toward;
  }

  display(){
    // if(this.theImage === 0){
    //   if(direction === 1){
    if (this.toward === 0){
      for(let i = 0; i < 10; i+= 5){
      fill(this.c);
      rect(this.x,this.y,30,15);
      this.x += 0.1;
    }
    if(this.toward === 1){
      for(let j = 0; j < 10; j+= 5){
      fill(this.c);
      rect(width * 0.8,this.y,30,15);
      this.x += 0.1;
    }
    }
    //   }
    // }
    // else{

    // }
  }
}



