var mr,fr;



function setup() {
  createCanvas(1200,800);
 fr = createSprite(200, 200, 50, 80);
 mr = createSprite(400, 200, 80, 30);
 fr.shapeColor="green";
 mr.shapeColor="green";
}

function draw() {
  background(0,0,0);
  mr.x=World.mouseX;
  mr.y=World.mouseY;
  console.log(mr.x-fr.x); 
  if (mr.x-fr.x<fr.width/2+mr.width/2 && fr.x-mr.x<fr.width/2+mr.width/2 && mr.y-fr.y<fr.width/2+mr.width/2 && fr.y-mr.y<fr.width/2+mr.width/2){
    fr.shapeColor="red";
    mr.shapeColor="red";
  }
  else{
    fr.shapeColor="green";
    mr.shapeColor="green";
  }
  drawSprites();
}