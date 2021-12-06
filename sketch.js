var Alien1,alien2,Alien5,Ship; 
var Alien1Img,alien2Img,Alien5Img,ShipImg,BackgroundImg
var score=0;
var life=5;
var score=0;
var gamestate=1;
var Background


function preload(){

  Alien1Img = loadImage("Alien-1.png")
  alien2Img = loadImage("alien-2.png")
 
  ShipImg = loadImage("Pixel-Spaceship.png")
  BackroundImg = loadImage("Backround.png")
}

function setup() {
  createCanvas(800,800);
  Alien1=createSprite(0,100,50,50)
 
  
  
  Alien1.addImage(Alien1Img)
  Alien1.scale=0.15
  alien2=createSprite(250,160,50,50)
  alien2.addImage(alien2Img)
  alien2.scale=0.15
  
  //Background= createSprite(0, 0, 800,800);
  //Background.addImage(BackroundImg)
}

function draw(){
  background(BackroundImg)
  if(Alien1.x==0)
  {
  Alien1.velocityX=3
  }
  if(Alien1.x>800)
  { 
  Alien1.velocityX=-3
  }
  if(alien2.x==0)
  {
  alien2.velocityX=3
  }
  if(alien2.x>800) {
  
  alien2.velocityX=-3 
  }
  //Alien1.x=(random(20,800))
  drawSprites()
}
