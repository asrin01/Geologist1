const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;
var ground;
var hammer;
var rubber;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	stone=new Stone(500,320,80,80);
	ground=new Ground(430,height,1150,30);
	hammer = new Hammer(10,100);
	rubber = new Rubber(300,120,55)
	sand1 = new Sand(370,120,15);
	sand2 = new Sand(380,150,15);
	sand3 = new Sand(390,130,15);
    sand4 = new Sand(400,110,15);
	sand5 = new Sand(410,100,15);
	sand6 = new Sand(420,170,15);
	sand7 = new Sand(430,180,15);
	sand8 = new Sand(440,140,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);
  stone.display();
  ground.display();
  hammer.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  drawSprites();
 
}



