// Cars Cars Cars!
// Chung-Fu Liao
// October 29, 2026
//
// Added wheels, windows, headlights, and taillights.
// Added mouse controls to create new vehicles.
// Added a traffic light.

//golbal variable

let eastbound = [];
let westbound = [];
let trafficLight;

// Create 40 Cars and add trafficlight
async function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create 20 eastbound vehicles
  for(let i = 0; i < 20; i++){
    let x = random(width);
    let y = random(height * 0.45, height * 0.65);
    let type = floor(random(2));

    eastbound.push(new Vehicle(x, y, type, 1, random(2, 5)));
  }

  // Create 20 westbound vehicles
  for(let i = 0; i < 20; i++){
    let x = random(width);
    let y = random(height * 0.2, height * 0.4);
    let type = floor(random(2));

    westbound.push(new Vehicle(x, y, type, 0, random(-5, -2)));
  }

  trafficLight = new TrafficLight();
}

// Update and display both direction cars and trafficlight
function draw(){
  background(220);
  drawRoad();

  trafficLight.display();

  for(let n of eastbound){
    n.action();
  }

  for(let n of westbound){
    n.action();
  }

  trafficLight.update();
}

// Draw the road and dashed white center line
function drawRoad(){
  fill('black');
  rect(0, height*0.2, width, height*0.5);
  fill('white');
  noStroke();
  for(let i = 0; i < width; i+= 40){
    rect(i , height*0.45, 20, 3);
  }
}


// Add a new vehicle when the mouse is clicked
function mousePressed(event){

  if(mouseButton.left){

    let type = floor(random(2));

    if(event.shiftKey){
      westbound.push(new Vehicle(mouseX, random(height*0.2, height*0.4),type, 0, random(-5,-2)));
    }
    else{
      eastbound.push(new Vehicle(mouseX, random(height*0.45, height*0.65),type, 1, random(2,5)));
    }
  }
}


// Turn the light red when spacebar is pressed
function keyPressed(){
  if(key === ' '){
    trafficLight.timer = 120;
  }
  return false;
}

// Vehicle class controls each car's behavior
class Vehicle{
  constructor(x, y, type, direction, xSpeed){ 
    this.x = x;
    this.y = y;
    this.type = type;
    this.direction = direction;
    this.xSpeed = xSpeed;
    this.c = color(random(255), random(255), random(255));
  }

  // Change vehicle random color
  changeColor(){
    this.c = color(random(255), random(255), random(255));
  }

  // Draw the vehicle based on its type and direction
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
  
  // Move the vehicle and measure at least has 40 cars
  move(){
    this.x += this.xSpeed;
    if(this.x > width){
      this.x = -50;
    }
    if(this.x < -50){
      this.x = width;
    }
  }

  // Increase speed and without exceeding the speed limit
  speedUp(){
    if(this.direction === 1){
      this.xSpeed = min(this.xSpeed + 0.1, 15);
    }
    else{
      this.xSpeed = max(this.xSpeed - 0.1, -15);
    }
  }

  // Decrease speed and without changing direction
  speedDown(){
    if(this.direction === 1){
      this.xSpeed = max(this.xSpeed - 0.1, 0);
    }
    else{
      this.xSpeed = min(this.xSpeed + 0.1, 0);
    }
  }

  // Control vehicle movement and random actions
  action(){

    // Only move when the light is green
    if(trafficLight.timer === 0){
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
    }

    this.display();
  }
}



// Control the traffic light
class TrafficLight{
  constructor(){
    this.timer = 0;
  }

  // Count down the red light timer
  update(){
    if(this.timer > 0){
      this.timer--;
    }
  }

  // Display the red ad green traffic lights
  display(){
    noStroke();
    fill(30);
    rect(10, 10, 45, 85);

    // Red light
    if(this.timer > 0){
      fill("red");
    }
    else{
      fill("darkred");
    }
    circle(32, 32, 25);

    // Green light
    if(this.timer === 0){
      fill('lime');
    }
    else{
      fill('darkgreen');
    }
    circle(32, 72, 25);
  }
}