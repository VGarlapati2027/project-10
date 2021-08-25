var ship,sea,  ;


function preload(){
 Sea = loadImage("sea.png");
 Ship1 =  loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);


  ship.createSprite(100,100,20,20);
  ship.addAnimation("Ship1");

  sea.createSprite (90,200,200,20);
  sea.addImage("Sea");
  
}

function draw() {
  background("Blue");

  if (sea.x < 0) {
    sea,width/2;
  }
  drawSprites();
 
}