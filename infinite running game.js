var road,girl,jwellery,chocolate,ghost;
var roadImg,girlImg,jwelleryImg,chocolateImg,ghostImg;
var treasureCollection = 0;
var roadG,girlG,jwelleryG,chocolateG,ghostGroup;

//Game States
var PLAY = 1;
var END = 0;
var gameStates = 1;

function preload(){
roadImg = loadImage("Road.png");
girlImg = loadAnimation("girl.png");
jwelleryImg = loadImage("jwell.png");
chocolateImg = loadImage("chocolate.png");
ghostImg = loadImage("ghost.png");
endImg = loadAnimation("gameOver.png");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
road=createSprite(width/2,200);
road.addImage(roadImg);
road.velocityY=4;

girl=createSprite(width/2,height-20,20,20);
girl.addAnimation("RiyaRunning",girlImg);
girl.scale=0.08,

jwelleryG=new Group();
chocolateG=new Group();
ghostGroup=new Group();

}

function draw() {
 
if(gameStates===PLAY){
    background=(0);
girl.x=World.mouseX;

edges=createEdgeSprites();
girl.collide(edges);

if(road.y>height){
    road.y=height/2
};
createJwellery();
createChocolate();
createGhost();

if(jwelleryG.isTouching(girl)){
    jwelleryG.destroyEach();
    treasureCollection=treasureCollection+50;

}else
if(chocolateG.isTouching(girl)){
    chocolateG.destroyEach();
    treasureCollection=treasureCollection+100;
}else{
    if(ghostGroup.isTouching(girl))
gameState=END;

girl.addAnimation("RiyaRunning",endImg);
girl.x=width/2;
girl.y=height/2;
girl.scale=0.6;

jwelleryG=destroyEach();
chocolateG=destroyEach();
ghostGroup=destroyEach();

jwelleryG.setVelocityEach(0);
chocolateG.setVelocityEach(0);
ghostGroup.setVelocityEach(0);
}

}
drawSprites();
textSize();
fill(255);
text("Treasure:"+treasureCollection,width-150,30);

}

function createJwellery(){
if(World.frameCount % 200 == 0){
var jwellery =createSprite(Math.round(random(50,width-50),40,10,10));
jwellery.addImage(jwelleryImg);
jwellery.scale=0.12;
jwellery.velocityY= 5;
jwellery.lifetime=200;
jwelleryG.add(jwellery)
}
}
function createChocolate(){
if(World.frameCount % 320 == 0){
    var chocolate =createSprite(Math.round(random(50,width-50),40,10,10));
    chocolate.addImage(chocolateImg);
    chocolate.scale=0.03;
    chocolate.velocityY= 5;
    chocolate.lifetime=200;
    chocolateG.add(chocolate)
    }
}
function createGhost(){
    if(World.frameCount % 410 == 0){
        var ghost =createSprite(Math.round(random(50,width-50),40,10,10));
        ghost.addImage(ghostImg);
        ghost.scale=0.1;
        ghost.velocityY= 4;
        ghost.lifetime=200;
        ghostGroup.add(ghost)
        }
    }





















