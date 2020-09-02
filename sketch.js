var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, box_l, box_r, box_b;
var box_lS, box_rS, box_bS;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup(){
	createCanvas(800, 700);
	rectMode(CENTER);
	
	box_bS = createSprite(width/2, 650, 200, 20);
	box_bS.shapeColor = ("red");

	box_lS = createSprite(290, 600, 20, 100);
	box_lS.shapeColor = ("red");

	box_rS = createSprite(500, 600, 20, 100);
	box_rS.shapeColor = ("red");

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.48, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);

	box_l = Bodies.rectangle(290, 600, 20, 100, {isStatic:true});
	World.add(world, box_l);
	fill("red");
	 
	box_r = Bodies.rectangle(500, 600, 20, 100, {isStatic:true});
	World.add(world, box_r);
	 
	box_b = Bodies.rectangle(width/2, 635, 200, 20, {isStatic:true});
 	World.add(world, box_b);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
  }
}



