var fixedrect,movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200,200,40,80);
  fixedrect.shapeColor="red";
  movingrect=createSprite(300,500,80,40);
  movingrect.shapeColor="red";
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2){
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
  }else{
  fixedrect.shapeColor="red";
  movingrect.shapeColor="red";
  }
  drawSprites();
}