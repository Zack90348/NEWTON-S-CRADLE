
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
  
  
  bobObj1=new Bob(300,350,50);
  bobObj2=new Bob(350,350,50);
  bobObj3=new Bob(400,350,50);
  bobObj4=new Bob(450,350,50);
  bobObj5=new Bob(500,350,50);

  ground1 = new Ground(400,100,300,40);
  
  
  sling1= new Suspender(bobObj1.body,ground1.body,-50*2,0);
  sling2= new Suspender(bobObj2.body,ground1.body,-25*2,0);
  sling3= new Suspender(bobObj3.body,ground1.body,-0*2,0);
  sling4= new Suspender(bobObj4.body,ground1.body,25*2,0);
  sling5= new Suspender(bobObj5.body,ground1.body,50*2,0);
  
Engine.run(engine);
  
}


function draw() {
  background("lightBlue");

  rectMode(CENTER);
  Engine.update(engine);

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  ground1.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites ();
}






