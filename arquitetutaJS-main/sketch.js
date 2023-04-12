var box;


function preload(){
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  s = createSprite(windowWidth / 2, windowHeight / 2, 80 , 80);
  s.shapeColor = "green";

  

}

function draw() {
  background(255,255,255); 
  
  
  if(keyIsDown(UP_ARROW)){
  s.position.y= s.position.y -4
    background("orange")
  }

  if(keyIsDown(LEFT_ARROW)){
    s.position.x = s.position.x -4
      background("yellow")
    }

  if(keyIsDown(DOWN_ARROW)){
      s.position.y= s.position.y +4
        background("blue")
      }

  if(keyIsDown(RIGHT_ARROW)){
        s.position.x= s.position.x +4
          background("purple")
        }  
  

  drawSprites();
}
