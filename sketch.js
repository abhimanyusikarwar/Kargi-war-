const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var soldier;
var enemy;
var img;
var ground;
var flag;
var fl;

function preload(){
  img=loadImage("images/mount.png");
  fl=loadImage("images/Indianflag.png");
}

function setup() {
  createCanvas(1200,750);
  engine=Engine.create();
  world=engine.world;
  soldier= new Soldier(400,550,150,150);
  enemy= new Enemy(870,80,200,100);
  ground=new Mountains(600,650,1200,10); 
  flag=createSprite(550,550,20,20);
  flag.addImage(fl);
  flag.scale=0.5;
}

function draw() {
  background(img);
  Engine.update(engine);
  soldier.display(); 
  enemy.display(); 
 //ground.display();
  drawSprites();
  textSize(20);
  fill("white");
  text("point 4574",830,60);
  fill("green");
text("13 JAK rifles have been targeted to recapture the point 4574 click on this button to start the game ",200,375);
}