
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper1;
var dustbin1, dustbin2, dustbin3;
var ground1;
var dustbinobj, dustbinobjp,Launcher;

function preload(){
  dustbinobjp = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1 = new Paper(50, height - 90, 40);

	
  dustbinObj=new Dustbin(900,650);

  
  ground1 = new Ground(width/2, 670, width, 20);
  Launcher=new launcher(paper1,{x:300,y:300});
  Engine.run(engine);

  
	
  
}

function draw() {
  rectMode(CENTER);
  background(180);
  
  ground1.display();
  dustbinObj.display();
  
  
  paper1.display();
  

}

