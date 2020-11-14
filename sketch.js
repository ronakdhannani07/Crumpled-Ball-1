
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world,bin,paper; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	bin = new Bin(720,390,100,10);
	paper = new Paper(100,300,10);
	ground = Bodies.rectangle(width / 2,400,width,10,
{isStatic:true


});
world.add(world,ground);
}


function draw() {
  rectMode(CENTER);
  background(0);

  bin.diplay();
  paper.diplay();
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.Body,paper.Body.position,{
	x: 12,
	y: -13
});


}


}



