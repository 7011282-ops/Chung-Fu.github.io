// Simple Object and Arrays
// Chung-Fu Liao
// 10/7/2026


// golbal variabel


let ball;
let ballArray = [];


async function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = { // object notaion. Inside the breackets
  //          set up several property: value pairs
  
    x : 300, y : 400, size: 20,
    c: color(random(255),random(255),random(255)),
    xSpeed: 5, ySpeed: 4
  };
}



function generateBall(x,y){
  //create and RETURN a ball object
  //initial position x, y
  let b = {
    x:x, y:y, size:20,
    c: color(random(255),random(255),random(255)),
    xSpeed: random(-6, 6),
    ySpeed: random(-6, 6),
    lifeTime: 100
  };
  return b;
}



function initObjets(n){
  //create n ball objects in our array
  for(let i = 0; i < n; i++){
    ballArray.push(generateBall(mouseX, mouseY));
  }
}


function keyPressed(){ 
  //trigger ONCE per press event
  initObjets(1000);   
}


 

function moveBall(b){
  //b -> Ball type object
  // update position and draw the ball

  //update
  b.x = b.x + b.xSpeed;   b.y += b.ySpeed;


  //walls
  if(b.x < 0 || b.x > width) b.xSpeed *= -1;
  if(b.y < 0 || b.y > height)b.ySpeed *= -1;

  //draw
  fill(b.c);
  circle(b.x, b.y, b.size);
}


function draw() {
  background(220);
  //Loop hrough an array (traversal)
  for(let i = 0; i < ballArray.length; i++){
    let b = ballArray[i];
    moveBall(b);
    b.lifeTime--;
    if(b.lifeTime<1){
      //.splice(pos, #ofItemToDel, [add]) deletes
      ballArray.splice(i, 1);
    }

  }
  // moveBall(ball);
  if(mouseIsPressed){
    ballArray.push(generateBall(mouseX,mouseY));
  }
}
