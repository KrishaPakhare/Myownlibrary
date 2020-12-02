var movingRect,fixedRect,newObject;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(300,50);
  fixedRect=createSprite(400,200);
  newObject=createSprite(250,100);
}

function draw() {
  background(200); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
 
  if(isTouching(movingRect,newObject)===true){
     movingRect.shapeColor = "red";
     newObject.shapeColor = "red";
  }
  else{
     movingRect.shapeColor = "blue";
     newObject.shapeColor = "blue";
  }

  drawSprites();
}
