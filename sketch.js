var fixedRect, movingRect;






function setup() {
  createCanvas(1200, 800);
  fixedRect=createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  fixedRect.velocityY=5;
  movingRect=createSprite(400, 800, 80, 30);
  movingRect.shapeColor="red";
  movingRect.debug=true;
  movingRect.velocityY=-5;
  

}

function draw() {
  background(0);
  
  
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 
   
    ){
      fixedRect.shapeColor="red";
      fixedRect.velocityX=fixedRect.velocityX*(-1);
      movingRect.velocityX=movingRect.velocityX*(-1);
      movingRect.shapeColor="green";
    }
    if( movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
      fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
      {
      fixedRect.shapeColor="green";
      fixedRect.velocityY=fixedRect.velocityY*(-1);
      movingRect.shapeColor="red";
      movingRect.velocityY=movingRect.velocityY*(-1);
    }
  
  drawSprites();
}