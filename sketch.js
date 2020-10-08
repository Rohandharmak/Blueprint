const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var box2;

var engine,world,ground,boxl;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  box1=new Box(200,100,50,70);
  box2=new Box(230,50,30,30);
  ground=new Ground();
}

function draw() {
  background(0); 
  Engine.update(engine);
 
  box1.display();
  box2.display();
  ground.display();
}