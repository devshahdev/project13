var garden,rabbit,apple,edges;
var gardenImg,rabbitImg,appleImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("orangeleaf.png");
  orangeLeaf = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
var rand =  Math.round(random(1,200))
  console.log(rand)
}


function draw() {
  background(0);
  console.log(frameCount)
  console.log(rabbit.y)
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  spawnleaves();
  spawnapples();
  drawSprites();
}
function spawnapples(){
  if(frameCount%80===0)
  {
 apple=createSprite(random(50,350),40,10,10);
 apple.addImage(appleImage);
 apple.y =  Math.round(random(1,200))
 apple.scale=0.1;
 apple.velocityY=4;
 console.log(rabbit.depth)
 console.log(apple.depth)
 apple.lifetime=100
}
}
function spawnleaves(){
  if(frameCount%80===0)
  {
   leaf=createSprite(random(50,400),40,10,10);
   leaf.addImage(leafImage);
   leaf.y =  Math.round(random(1,400))
   leaf.scale=0.1;
   leaf.velocityY=4;
   console.log(leaf.depth)
   leaf.lifetime=100
  }
}