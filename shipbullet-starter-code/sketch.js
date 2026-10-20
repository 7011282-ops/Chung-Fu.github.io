// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;
let other;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
  other = new Bullet(width/2, height/2, width/2, height/2, bulletImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
  other.update();
  other.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    // define the variables needed for this ship
    this.x = x;
    this.y = y;
    this.theImage = theImage;
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if(keyIsDown(LEFT_ARROW)){
      this.x -=4;
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.x +=5;
    }
    if(keyIsDown(UP_ARROW)){
      this.y -=6;
    }
    if(keyIsDown(DOWN_ARROW)){
      this.y +=7;
    }

    // if doing extra for experts, show bullet(s)
  }

  display() {
    // show the ship
    image(this.theImage, this.x - 50,this.y);
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.theImage = theImage;
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    
    this.y -= 5;
    // if (this.y < 0){
    //   remove(image(this.theImage, this.x, this.y));
    // }
  }

  display() {
    // show the bullet
    image(this.theImage, this.x, this.y);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
  }
}

