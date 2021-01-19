var bullet,wall,thickness;
var speed,weight;
var world;

function setup() {
  createCanvas(1600,400); 

  thickness=random(22,83);
  bullet=createSprite(200,200,30,30);
  wall=createSprite(1200, 200, 10, thickness, height/2);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  wall.shapeColor="red" ;

  
  
}

function draw() {
  background(255,255,255);  
  bullet.shapeColor=color("white");
  wall.shapeColor=color(80,80,80);
  
  

  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5*speed*speed/(thickness *thickness *thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge=bullet.x+bullet,width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
      return false;
}