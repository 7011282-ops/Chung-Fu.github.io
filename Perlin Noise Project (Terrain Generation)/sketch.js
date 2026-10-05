// Perlin Noise Project (Terrain Generation)
// Chung-Fu Liao
// 10/1/2026


//galbol variable
let width_x = 10;
let height_y = 0;
let height_x = 0;
async function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);
  generateTerrain();
  // drawFlag(i,y);
}

function generateTerrain(){
  let time = 0;
  for(let i = 0; i <= width; i += width_x){
    let y = map(noise(time), 0, 1, 0, height);
    let x = i;
    drawFlag(x,y);
    //drawFlag(i,y);
    rect(i, height, width_x, -y);
    time += 0.01;
  }
}

function drawFlag(x,y){
  if (height_y < y){
    height_y = y;
    height_x = x;
    if(x >= width){
      rect(height_x, height, width_x, -height_y-100);
      // triangle(height_x, -y -10, height_x + 5, -y -3, height_x, -y-6);
    }
  }
}

function keyPressed(){
  if(keyIsDown(LEFT_ARROW)){
    width_x += 1;
    redraw();
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(width_x <= 1){
      width_X = 1;
    }
    else{
      width_x -= 1;
    }
    generateTerrain();
    redraw();
  }
}