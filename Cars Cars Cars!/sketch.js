// Cars Cars Cars!
// Chung-Fu Liao

//golbal variable

let eastbound = [];
let westbound = [];


async function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create 20 eastbound vehicles
  for(let i = 0; i < 20; i++){
    let x = random(width);
    let y = random(height * 0.45, height * 0.65);
    let type = floor(random(2));

    eastbound.push(new Vehicle(x, y, type, 1, 3));
  }

  // Create 20 westbound vehicles
  for(let i = 0; i < 20; i++){
    let x = random(width);
    let y = random(height * 0.2, height * 0.4);
    let type = floor(random(2));

    westbound.push(new Vehicle(x, y, type, 0, -3));
  }
}

function draw(){
  background(220);
  drawRoad();

  for(let n of eastbound){
    n.action();
  }

  for(let n of westbound){
    n.action();
  }
}

function drawRoad(){
  fill('black');
  rect(0, height*0.2, width, height*0.5);
  fill('white');
  noStroke();
  for(let i = 0; i < width; i+= 40){
    rect(i , height*0.45, 20, 3);
  }
}


class Vehicle{
  constructor(x, y, type, direction, xSpeed){ 
    this.x = x;
    this.y = y;
    this.type = type;
    this.direction = direction;
    this.xSpeed = xSpeed;
    this.c = color(random(255), random(255), random(255));
  }

  changeColor(){
    this.c = color(random(255), random(255), random(255));
  }

  display(){
    noStroke();

    let carWidth = 30;
    let carHeight = 15;

    if(this.type === 1){
      carWidth = 45;
      carHeight = 20;
    }

    // Wheels
    fill(130);

    // Top wheels
    rect(this.x + 5, this.y - 3, 7, 4);
    rect(this.x + carWidth - 12, this.y - 3, 7, 4);

    // Bottom wheels
    rect(this.x + 5, this.y + carHeight - 1, 7, 4);
    rect(this.x + carWidth - 12, this.y + carHeight - 1, 7, 4);

    // Body
    fill(this.c);
    rect(this.x, this.y, carWidth, carHeight);

    // Windows
    fill(150, 210, 240);

    if(this.type === 0){
      // Car
      if(this.direction === 1){
        // Facing right
        rect(this.x + carWidth - 10, this.y + 3, 6, carHeight - 6);
        rect(this.x + 5, this.y + 4, 4, carHeight - 8);
      }
      else{
        // Facing left
        rect(this.x + 4, this.y + 3, 6, carHeight - 6);
        rect(this.x + carWidth - 9, this.y + 4, 4, carHeight - 8);
      }
    }
    else{
      // Truck
      if(this.direction === 1){
        // Cargo area
        fill(100, 100, 100, 100);
        rect(this.x + 3, this.y + 3, carWidth - 17, carHeight - 6);

        // Front window
        fill(150, 210, 240);
        rect(this.x + carWidth - 9, this.y + 3, 5, carHeight - 6);
      }
      else{
        // Cargo area
        fill(100, 100, 100, 100);
        rect(this.x + 14, this.y + 3, carWidth - 17, carHeight - 6);

        // Front window
        fill(150, 210, 240);
        rect(this.x + 4, this.y + 3, 5, carHeight - 6);
      }
    }

    // Headlights and taillights
    if(this.direction === 1){
      // Yellow headlights on right
      fill(255, 240, 100);
      rect(this.x + carWidth - 2, this.y + 2, 2, 3);
      rect(this.x + carWidth - 2, this.y + carHeight - 5, 2, 3);

      // Red taillights on left
      fill(255, 60, 60);
      rect(this.x, this.y + 2, 2, 3);
      rect(this.x, this.y + carHeight - 5, 2, 3);
    }
    else{
      // Yellow headlights on left
      fill(255, 240, 100);
      rect(this.x, this.y + 2, 2, 3);
      rect(this.x, this.y + carHeight - 5, 2, 3);

      // Red taillights on right
      fill(255, 60, 60);
      rect(this.x + carWidth - 2, this.y + 2, 2, 3);
      rect(this.x + carWidth - 2, this.y + carHeight - 5, 2, 3);
    }
  }
  
  move(){
    this.x += this.xSpeed;
    if(this.x > width){
      this.x = -50;
    }
    if(this.x < -50){
      this.x = width;
    }
  }

  speedUp(){
    if(this.direction === 1){
      this.xSpeed = min(this.xSpeed + 0.1, 15);
    }
    else{
      this.xSpeed = max(this.xSpeed - 0.1, -15);
    }
  }

  speedDown(){
    if(this.direction === 1){
      this.xSpeed = max(this.xSpeed - 0.1, 0);
    }
    else{
      this.xSpeed = min(this.xSpeed + 0.1, 0);
    }
  }

  action(){
    this.move();

    if(random(100) < 1){
      this.speedUp();
    }

    if(random(100) < 1){
      this.speedDown();
    }

    if(random(100) < 1){
      this.changeColor();
    }

    this.display();
  }
}



