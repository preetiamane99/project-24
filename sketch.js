
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 900);

  
	engine = Engine.create();
	world = engine.world;

	dusbin=new Dusbin(1200,650);
	ball=new Ball(200,450,40);
	ground=new Ground(width/2,670,width,20);
	
	

	

	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);

  
  ball.display();
  ground.display();
   dusbin.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y: -85})
	}
}


