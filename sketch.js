
var trex ,trex_running;
var ground,ground_image;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_image = loadImage("ground1.png","ground2.png");
}

function setup(){
  createCanvas(600,200)
  ground = createSprite(200,180,400,20)
  ground.addImage("ground",ground_image);
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;
}

function draw(){
  background("white");
  if(keyDown("space")) {
    trex.velocityY=-8; 
  }
  trex.velocityY=trex.velocityY+1
  trex.collide(ground);
  drawSprites();

}
