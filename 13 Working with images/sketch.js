// Working with images
// Chung-Fu Liao
// 10/30/2026

let lionL, lionR;
let dir = "left";

let pinImages = [];
let pinIndex = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  //pinwheel images
  for(let i = 0; i < 9; i++){
    pinImages.push(await loadImage("/assets/pin-0" + i +  ".png"));
  }



  //lion images
  lionL = await loadImage("assets/lion-left.png");
  lionR = await loadImage("assets/lion-right.png");
}

function draw() {
  background(220);
  drawLion();
  drawPin();
  // if (frameCount > 3){
  //   image(lionL, mouseX, mouseY, lionL.width/2, 
  //     lionL.height/2);
  
  // }
}



function drawPin(){
  // frameRate(10);
  image(pinImages[pinIndex], width/2, height*.75);
  if(frameCount % 2 === 0){
    pinIndex++; //0,1,2,3,4,5,6,7,8, image(undefined, 100,100)
    if(pinIndex > 8) pinIndex = 0;
  }
}









function drawLion() {
  //update direction
  if(movedX > 0){
    dir = "right";
  }
  else if (movedX < 0){
    dir = "left";
  }
  switch(dir){
  case "left": 
    image(lionL, mouseX, mouseY, 
      lionL.width/2, lionL.height/2);
    break;
  case "right": 
    image(lionR, mouseX, mouseY, 
      lionL.width/2, lionL.height/2);
    break;
  }





}
