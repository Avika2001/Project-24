const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bird;
var ground;
var stone;
var bgImage;
var rubber;

function preload() {
	
}


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)
	hammer = new Hammer(100,50)
	stone = new Stone(560,350,70,70)
	rubber = new Rubber(260,350,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(175, 238, 238);
  Engine.update(engine);

  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
 
  drawSprites();
 
}
