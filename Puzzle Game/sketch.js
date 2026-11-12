// Puzzle Game
// Chung-Fu Liao
// 11/5/2026

// Global variables
let grid = [
  [255, 255, 0, 255, 0],
  [255, 0, 255, 0, 0],
  [255, 255, 255, 255, 0],
];

let rows = grid.length;
let cols = grid[0].length;

let type = 0;
let clickCount = 0;
let startTime = 0;
let finalTime = 0;
let gameStarted = false;    
let gameWon = false;
let history = [];

const tileSize = 60;
const tileHeight = 100;


// Setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  randomizeGrid();
}


// Randomize starting arrangement
function randomizeGrid() {
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){

      let a = int(random(1, 3));

      if(a !== 1){
        grid[y][x] = 255;
      }
      else{
        grid[y][x] = 0;
      }
    }
  }
}


// Main draw function
function draw() {
  background(220);
  renderGrid();
  checkgrid();
  drawOverlay();
  displayInfo();
}


// Get current column of mouse
function getCurrentX() {
  let constrainedX = constrain(mouseX, 0, cols * tileSize - 1);
  return int(constrainedX / tileSize);
}


// Get current row of mouse
function getCurrentY() {
  let constrainedY = constrain(mouseY, 0, rows * tileHeight - 1);
  return int(constrainedY / tileHeight);
}


// Flip a tile
function flip(x, y) {
  if(grid[y][x] === 255){
    grid[y][x] = 0;
  }
  else{
    grid[y][x] = 255;
  }
}


function savemove(){
  let oldGrid = [];

  for(let y = 0; y < rows; y++){
    oldGrid.push(grid[y].slice());
  }

  history.push(oldGrid);

  // save last 5 moves
  if(history.length > 5){
    history.shift();
  }
}


function undoMove(){

  if(history.length > 0){

    // Resume timer if the player already won
    if(gameWon){
      startTime = millis() + finalTime * 1000;
    }

    // Restore previous board
    grid = history.pop();

    clickCount--;

    gameWon = false;
    finalTime = 0;

    // Reset timer if no moves remain
    if(clickCount === 0){
      gameStarted = false;
      startTime = 0;
    }
  }
}


// Mouse controls
function mousePressed() {

  // Do not allow clicking outside the grid
  if(mouseX < 0 || mouseX >= cols * tileSize ||
     mouseY < 0 || mouseY >= rows * tileHeight){
    return;
  }

  // Stop clicking after winning
  if(gameWon){
    return;
  }

  // Start timer on first click
  if(!gameStarted){
    startTime = millis();
    gameStarted = true;
  }

  savemove(); //save the board before flipping

  clickCount++;

  let x = getCurrentX();
  let y = getCurrentY();

  // Shift + Click: Flip one tile
  if(keyIsDown(SHIFT)){
    flip(x, y);
    return;
  }

  // Flip selected tile
  flip(x, y);

  if(type === 0){

    // Cross pattern 
    if(x - 1 >= 0){
      flip(x - 1, y); // LEFT
    }

    if(x + 1 < cols){
      flip(x + 1, y); // RIGHT
    }

    if(y - 1 >= 0){
      flip(x, y - 1); // UP
    }

    if(y + 1 < rows){
      flip(x, y + 1); // DOWN
    }
  }

  else{

    // Square pattern
    if(x + 1 < cols){
      flip(x + 1, y); // RIGHT
    }

    if(y + 1 < rows){
      flip(x, y + 1); // DOWN
    }

    if(x + 1 < cols && y + 1 < rows){
      flip(x + 1, y + 1); // RIGHT AND DOWN
    }
  }
}


// Keyboard controls
function keyPressed(){

  // Press Z to undo
  if(key === 'z' || key === 'Z'){
    undoMove();
  }

  // Press R to restart
  if(key === 'r' || key === 'R'){
    restartGame();
  }

  // Press Space to change pattern
  if(key === ' ' && !gameWon){

    if(type === 0){
      type = 1;
    }
    else{
      type = 0;
    }

    return false;
  }
}

// Restart the game
function restartGame() {
  randomizeGrid();

  clickCount = 0;
  startTime = 0;
  finalTime = 0;

  gameStarted = false;
  gameWon = false;
  type = 0;
  history = [];
}


// Check win condition
function checkgrid() {
  let count = 0;

  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){

      if(grid[y][x] === 0){
        count += 1;
      }
      else{
        count -= 1;
      }
    }
  }

  // All tiles must have the same color
  if(gameStarted &&(count === rows * cols || count === -rows * cols)){

    if(!gameWon){
      gameWon = true;
      finalTime = int((millis() - startTime) / 1000);
    }

    fill(0, 180, 0);
    textSize(32);
    text("You Win!", 20, rows * tileHeight + 45);
  }
}


// Display moves, time, and current mode
function displayInfo() {
  let elapsedTime = 0;

  if(gameWon){
    elapsedTime = finalTime;
  }
  else if(gameStarted){
    elapsedTime = int((millis() - startTime) / 1000);
  }

  fill(0);
  textSize(20);

  text("Moves: " + clickCount, 20, rows * tileHeight + 90);

  text("Time: " + elapsedTime + " s", 20, rows * tileHeight + 120);

  if(type === 0){
    text("Mode: Cross", 20, rows * tileHeight + 150);
  }
  else{
    text("Mode: Square", 20, rows * tileHeight + 150);
  }

  textSize(15);
  text("Space: Change Mode | R: Restart", 20, rows * tileHeight + 185);
}


// Draw the grid
function renderGrid() {

  // Draw each tile based on the 2D array
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){

      fill(grid[y][x]);

      rect(x * tileSize, y * tileHeight, tileSize, tileHeight);
    }
  }
}


// Draw colored overlay
function drawOverlay() {

  // Do not show overlay after winning
  if(gameWon){
    return;
  }

  // Check if mouse is inside the grid
  if(mouseX >= 0 && mouseX < cols * tileSize &&
     mouseY >= 0 && mouseY < rows * tileHeight){

    let x = getCurrentX();
    let y = getCurrentY();

    push();

    noStroke();
    fill(100, 255, 100, 100);

    // Draw overlay on current tile
    rect(x * tileSize, y * tileHeight, tileSize, tileHeight);

    // Shift: Only preview one tile
    if(keyIsDown(SHIFT)){
      pop();
      return;
    }

    if(type === 0){

      // Cross pattern
      if(x - 1 >= 0){
        rect((x - 1) * tileSize, y * tileHeight, tileSize, tileHeight);
      }

      if(x + 1 < cols){
        rect((x + 1) * tileSize, y * tileHeight, tileSize, tileHeight);
      }

      if(y - 1 >= 0){
        rect(x * tileSize, (y - 1) * tileHeight, tileSize, tileHeight);
      }

      if(y + 1 < rows){
        rect(x * tileSize, (y + 1) * tileHeight, tileSize, tileHeight);
      }
    }

    else{

      // Square pattern
      if(x + 1 < cols){
        rect((x + 1) * tileSize, y * tileHeight, tileSize, tileHeight);
      }

      if(y + 1 < rows){
        rect(x * tileSize, (y + 1) * tileHeight, tileSize, tileHeight);
      }

      if(x + 1 < cols && y + 1 < rows){
        rect((x + 1) * tileSize, (y + 1) * tileHeight, tileSize, tileHeight);
      }
    }

    pop();
  }
}