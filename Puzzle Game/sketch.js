// Puzzle Game
// Chung-Fu Liao
// 11/5/2026

let grid = [
  [255,    255,  0,    255, 0],
  [255,  0,    255,  0, 0],
  [255,  255,  255,  255, 0],
];
let rows = grid.length;
let cols = grid[0].length;
let type = 0;
let clickCount = 0;
let startTime = 0;
let gameStarted = false;
const tileSize = 60;
const Sizeheight = 100;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let y = 0; y < rows; y++){//y:01234
    for(let x = 0; x < cols; x++){//x:012345
      let a = int(random(1,3));
      if(a !== 1){
        grid[y][x] = 255;
      }
      else{
        grid[y][x] = 0;
      }
    }
  } 
}

function draw() {
  background(220);
  renderGrid();
  checkgrid();
}

function getCurrentX(){
  //determine current col pos of mouse
  fill(255,0,0);
  let constrainedX = constrain(mouseX,0, width-1);
  return int (constrainedX/tileSize);
}

function getCurrentY(){
  //determin current row pos of mouse
  let constrainedY = constrain(mouseY,0, height-1);
  return int(constrainedY/Sizeheight);
}

function filp(x,y){
  //flip the tile at position (x,y);
  if(grid[y][x] === 255){
    grid[y][x] = 0;
  }
  else {
    grid[y][x] = 255;
  }
}

function mousePressed(){
  if(!gameStarted){
    startTime = millis();
    gameStarted = true;
  }

  clickCount++;

  if(keyIsDown(SHIFT)){
    let x = getCurrentX();
    let y = getCurrentY();
    filp(x,y);
    return;
  }

  if(type === 0){
    //only do a flip if mouse is on the Canvas
    if(mouseX < cols * tileSize && mouseY < rows * Sizeheight){

      let x = getCurrentX();
      let y = getCurrentY();

      filp(x,y);

      //IF THEY EXIST:
      //flip the cardinal neighbours (NSEW)
      if(x - 1 >= 0){
        filp(x - 1, y); // LEFT
      }
      if(x + 1 < cols){
        filp(x + 1, y); // RIGHT
      }
      if(y - 1 >= 0){
        filp(x, y - 1);// UP
      }
      if(y + 1 < rows){
        filp(x, y + 1);// DOWN
      }
    }
  }

  else{
    if(mouseX < cols * tileSize && mouseY < rows * Sizeheight){

      let x = getCurrentX();
      let y = getCurrentY();

      filp(x,y);

      //IF THEY EXIST:
      //flip the cardinal neighbours (NSEW)
      if(x + 1 < cols){
        filp(x + 1, y); // RIGHT
      }
      if(y + 1 < rows){
        filp(x, y + 1);// DOWN
      }
      if(x + 1 < cols && y + 1 < rows){
        filp(x + 1, y + 1);// RIGHE && DOWN
      }
    }
  }
}

function keyPressed(){
  if(key === ' '){
    if(type === 0){
      type = 1;
    }
    else{
      type = 0;
    }
  }
}

function checkgrid(){
  let count = 0;
  for(let y = 0; y < rows; y++){//y:01234
    for(let x = 0; x < cols; x++){//x:012345
      if(grid[y][x] === 0){
        count += 1;
      }
      else{
        count -= 1;
      }
    } 
  }
  if(count === rows*cols || count === -rows*cols){
    print("You Win");
  }
}


function displayInfo(){
  let elapsedTime = 0;

  if(gameStarted){
    elapsedTime = int((millis() - startTime) / 1000);
  }

  fill(0);

}

function renderGrid(){
  // interpret the data stored in 2D array
  // and draw a matrix to square to reflect
  // it.
  for(let y = 0; y < rows; y++){//y:01234
    for(let x = 0; x < cols; x++){//x:012345
      let fillColor = grid[y][x];
      fill(fillColor);
      rect(x*tileSize, y*Sizeheight, tileSize, Sizeheight);
    }
  } 
}