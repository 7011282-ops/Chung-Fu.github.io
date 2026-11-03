// 2D Aeeays(Puzzle Starter)
// Chung-Fu Liao
// 11/3/2026

// grid sized 6 x 5 
// 0 (black)    255 (white)

let grid = [
  [0,   255, 0,   255, 0,   255],
  [255, 0,   255, 0,   588, 0  ],
  [255, 255, 255, 255, 255, 255],
  [0,   0,   0,   0,   0,   0  ],
  [255, 255, 0,   255, 255, 0  ]
];
let rows = grid.length;
let cols = grid[0].length;
let tileSize = 60;


async function setup() {
  createCanvas(cols*tileSize, rows*tileSize);
}

function draw() {
  background(220);
  renderGrid();
}


function renderGrid(){
  // interpret the data sted in 2D array
  //and draw a matrix to square to relfect
  // it.
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*tileSize, y*tileSize, tileSize);
      // y  x
      // 0  0
      // 0  1
      //03
      //
      //
      //
      //
      //
    }
  }
    
  

}