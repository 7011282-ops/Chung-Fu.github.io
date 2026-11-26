// The Balloon Tree
// Chung-Fu
// 11/25/2026

let scale = 15;
let color;

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  background(255);
  let branchAngle = map(mouseX, 0, width, 5, 45);
  stroke(0);
  drawTree(width/2, height*.9, 90, 6, branchAngle);
}

function drawLine(x1,  y1,  x2,  y2,  depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth, branchAngle) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale);     //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale);     //using trig ratios. Get shorter based on depth

    stroke(0);
    strokeWeight(depth * 1.5);
    drawLine(x1, y1, x2, y2, depth);
    // angle = map[scale,0,mouseX,0,50];

    if(depth < 5){
      drawLeaf(x2, y2, depth);
    }
    //for a 2-branch tree:
    drawTree(x2, y2, angle-branchAngle, depth-1, branchAngle);
    drawTree(x2, y2, angle, depth-1, branchAngle);
    drawTree(x2, y2, angle+branchAngle, depth-1, branchAngle);
    // drawTree(x2, y2, angle-scale - 10, depth-1);
  }

}



function drawLeaf(x, y, depth){
  fill(random(255),random(255),random(255));
  noStroke();
  let size = random(5, 10);
  circle(x, y, size);
}



