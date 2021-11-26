var bg,bgImg;
var  swordMan,swordManImg;
var demonKing,demonKingImg;
var swordCount=3;
var swordManRunning,swordManJumping,swordManAttacking
var swordManLefty
var sword,sword_Demon
var swordImg ,swordDImg
function preload(){
  
  swordManImg = loadAnimation("assets/s1.png")
  swordManRunning= loadAnimation("assets/s1.png","assets/s2.png","assets/s3.png","assets/s4.png","assets/s5.png")
  swordManAttacking = loadAnimation("assets/s8.png","assets/s9.png","assets/s10.png","assets/s11.png","assets/s12.png","assets/s13.png")
  //demonKingImg = loadImage("assets/shooter_3.png")
  swordManLefty = loadAnimation("assets/s1Rev.png" ,"assets/s2Rev.png","assets/s3Rev.png","assets/s4Rev.png")
  swordImg = loadImage ("assets/Sword.png")
  bgImg = loadImage("assets/bg3.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 2.5
  


//creating the player sprite
  swordMan = createSprite(displayWidth-1150, displayHeight-200, 50, 50);
 swordMan.addAnimation("Normal",swordManImg)
 swordMan.addAnimation("Running",swordManRunning)
 swordMan.addAnimation ("Runningleft",swordManLefty)
 swordMan.addAnimation("Attack",swordManAttacking)
 
   swordMan.scale = 0.7
  // swordMan.debug = true
   //swordMan.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
/*if(keyDown("UP_ARROW")||touches.length>0){
  swordMan.y = swordMan.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 swordMan.y = swordMan.y+30
}*/
if(keyWentDown("RIGHT_ARROW")){
     
      swordMan.changeAnimation("Running")
      swordMan.velocityX = 2
}

if(keyWentUp("RIGHT_ARROW")){
     
  swordMan.changeAnimation("Normal")
   swordMan.velocityX = 0
}
if(keyWentDown("LEFT_ARROW")&& swordMan.x > 200 ){
     
  swordMan.changeAnimation("Runningleft")
  swordMan.velocityX = -2
  console.log(swordMan.x)
}

if(keyWentUp("LEFT_ARROW")){
 
swordMan.changeAnimation("Normal")
swordMan.velocityX = 0

}



//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  swordMan.changeAnimation("Attack")
 createSword()
 
}

//player goes back to original standing image once we stop pressing the space bar
 if(keyWentUp("space")){
  swordMan.changeAnimation("Normal")

}

drawSprites();

}
function createSword(){
sword = createSprite (swordMan.x+30,swordMan.y,30,30)
sword.addImage ("Sword",swordImg)
sword.velocityX = 2;
sword.scale = 0.5
}