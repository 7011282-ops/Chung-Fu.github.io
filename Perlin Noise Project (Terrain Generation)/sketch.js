// Perlin Noise Project (Terrain Generation)
// Chung-Fu Liao
// 10/1/2026


//galbol variable


// width of each terrain rectangle
let width_x = 10; 


// control the speed and each value of noise change
// inc more bigger the graph more rough
let inc = 0.005;  


// starting position in the perlin noise sequence
let startTime = 0; 


async function setup() {
  createCanvas(windowWidth, windowHeight);
  
}


function draw() {
  background(220);
  generateTerrain();
}


function generateTerrain(){
  // start at a slightly different noise position each frame
  let time = startTime; // keep increasing
  let height_y = 0;
  let height_x = 0;


  // variables for calculating average height
  let totalHeight = 0;
  let count = 0;


  // Generate terrain from left to right
  for(let i = 0; i <= width; i += width_x){


    // the Perlin Noise get a smooth terrain height
    let y = map(noise(time), 0, 1, 0, height);
    totalHeight += y;
    count += 1;
    if (height_y < y){
      height_y = y;
      height_x = i;
    }


    //drawFlag(i,y);
    rect(i, height, width_x, -y);
    time += inc;
  }


  // the average of height
  let averageHeight = totalHeight / count;




  // draw the average line
  // strokeWeight(4);
  // stroke('red');

  // used height - averageHeight because (0,0) is on left top cornor
  // and height make y go down
  // so we need - averageHeight let y go up
  // line(0, height - averageHeight, width, height - averageHeight);





  // Draw average height band
  noStroke();
  fill(255, 0, 0, 100);
  rect(0, height - averageHeight -5, width, 10);
  stroke(0);


  // restore setting
  strokeWeight(1);
  fill(255);


  // draw the flag
  drawFlag(height_x + width_x/2, height - height_y);


  // startTime let noise(time) increasing every single time when the graph done
  // so looks like the mountain are moveing
  startTime += inc;
}


function drawFlag(x,y){


  // flag pole
  stroke(0);
  strokeWeight(2);
  line(x, y, x, y - 50);


  // flag
  fill('red');
  triangle(x, y -50,
          x + 30, y - 40,
          x, y - 30);


  // restore setting
  strokeWeight(1);
  fill(255); 
      
}


// control the graph more width or less width
function keyPressed(){
  if(keyIsDown(RIGHT_ARROW)){
    width_x += 1;
    redraw();
  }
  if(keyIsDown(LEFT_ARROW) && width_x > 1){
    width_x -= 1;
    redraw();
  }
}