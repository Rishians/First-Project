var box 

function setup() {
  createCanvas(600,600);

  box = createSprite(300,300,50,50)

}

function draw() 
{
  background(0);


  if( keyDown("left") ){

    box.x = box.x - 3
  }

  if( keyDown("right")){

    box.x = box.x + 3
  }
  
  if (keyDown("up")) {

    box.y = box.y - 3 
  }
  
  if (keyDown ("down")) {

    box.y = box.y + 3
  }
  drawSprites()
}




