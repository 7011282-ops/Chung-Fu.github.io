// The Balloon Tree
// Chung-Fu
// 11/25/2026

// Global variable
let scale = 15;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  // Control the branch angle using the mouse position
  let branchAngle = map(mouseX, 0, width, 5, 45);

  // Start drawing the tree 
  drawTree(width / 2, height * 0.9, 90, 6, branchAngle);
}

// Draw a line connecting two points
function drawLine(x1, y1, x2, y2, depth) {
  line(x1, y1, x2, y2);
}

// Recursively draw the branches of the tree
function drawTree(x1, y1, angle, depth, branchAngle) {
  if (depth > 0) {

    // Calculate the endpoints of the current branch
    // Branches become shorter as the depth decreases
    let x2 = x1 + cos(radians(angle)) * depth * scale;
    let y2 = y1 - sin(radians(angle)) * depth * scale;

    // Make branches thicker near the trunk
    stroke(0);
    strokeWeight(depth * 1.5);

    // Draw the current branch
    drawLine(x1, y1, x2, y2, depth);

    // Draw leaves only on branches with a depth below 5
    if (depth < 5) {
      drawLeaf(x2, y2, depth);
    }

    // Left branch
    drawTree(x2, y2, angle - branchAngle, depth - 1, branchAngle);

    // Middle branch
    drawTree(x2, y2, angle, depth - 1, branchAngle);

    // Right branch
    drawTree(x2, y2, angle + branchAngle, depth - 1, branchAngle);
  }
}

// Draw a randomly colored leaf at the end of a branch
function drawLeaf(x, y, depth) {

  // Random color
  fill(random(255), random(255), random(255));
  noStroke();

  // Random leaf size based on depth
  // Leaves become smaller toward the outside of the tree
  let size = random(depth * 3, depth * 6);

  // Draw the circular leaf
  circle(x, y, size);
}


