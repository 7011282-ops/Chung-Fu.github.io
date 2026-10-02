// Perlin Noise Project (Terrain Generation)
// Chung-Fu Liao
// 10/1/2026


//galbol variable
let width_x = 2;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);
  generateTerrain();
}

function generateTerrain(){
  for(let i = 0; i <= width; i += width_x){
    let y = random(0,height);
    rect(i,height,2, -y);
  }
}

