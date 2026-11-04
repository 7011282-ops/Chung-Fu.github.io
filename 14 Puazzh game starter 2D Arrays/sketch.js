// 2D Aeeays(Puzzle Starter)
// Chung-Fu Liao
// 11/3/2026

// grid sized 6 x 5 
// 0 (black)    255 (white)

let grid = [
  [0,    255,  0,    255,   0,    255],
  [255,  0,    255,  0,     255,  0  ],
  [255,  255,  255,  255,   255,  255],
  [0,    0,    0,    0,     0,    0  ],
  [255,  255,  0,    255,   255,  0  ] 
];
let rows = grid.length;
let cols = grid[0].length;
const tileSize = 60;

async function setup() {
  createCanvas(cols*tileSize, rows*tileSize);
}

function draw() {
  background(220);
  renderGrid();
  getCurrentX();
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
  return int(constrainedY/tileSize);
}

function filp(x,y){
  //flip the tile at position (x,y);
  if(grid[y][x] === 255) grid[y][x] = 0;
  else grid[y][x] = 255;
}

function mousePressed(){
  //only do a flip if mouse is on the Canvas
  if(mouseX < width && mouseY < height){

    let x = getCurrentX();
    let y = getCurrentY();

    filp(x,y);

    //IF THEY EXIST:
    //flip the cardinal neighbours (NSEW)
    if(x-1 >= 0){
      filp(x- 1, y); // LEFT
      if(y - 1 >= 0){
        filp(x, y-1);// UP
      }
    }
  }
}


function renderGrid(){
  // interpret the data stored in 2D array
  // and draw a matrix to square to reflect
  // it.
  for(let y = 0; y < rows; y++){//y:01234
    for(let x = 0; x < cols; x++){//x:012345
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*tileSize, y*tileSize, tileSize);
    }
  } 
}