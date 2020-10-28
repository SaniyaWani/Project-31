
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var particles=[];
var plinko=[];
var division=[];
function setup() {
	createCanvas(480, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (240,690,480,20);
	
	for(var i=0; i<480; i=i+79){
		division.push(new Division(i,550));
	}
	
	
	for (var a=0; a<480; a=a+50){
		particles.push(new Particle(a,50));
	}

	for (var a=25; a<480; a=a+50){
		particles.push(new Particle(a,125));
	}

	
	for (var a=0; a<480; a=a+50){
		particles.push(new Particle(a,200));
	}

	for (var a=25; a<480; a=a+50){
		particles.push(new Particle(a,275));
	}

	
	Engine.run(engine);
  
}


function draw() {
    background(0);
   Engine.update(engine);
 
	ground.display();
	
	for (var x = 0; x <division .length; x++) {
   
		division[x].display();
	  }
	
	for (var a = 0; a < particles.length; a++) {
   
		particles[a].display();
	  }
	
	  if(frameCount%80==0){
		plinko.push(new Plinko(random(20,460),10));
	   }

	   
  for (var s = 0; s < plinko.length; s++) {
   
	plinko[s].display();
  }

  	   
  
  drawSprites();
 
}



