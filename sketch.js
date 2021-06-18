
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  object = Bodies.rectangle(150, 100, 50, 50);
  World.add(world, object);
  
  console.log(object);

  object2 = Bodies.circle(500, 200, 80);
  World.add(world, object2);
  
  object3 = Bodies.circle(800, 100, 50);
  World.add(world, object3);
  
  object4 = Bodies.circle(1100, 200, 120);
  World.add(world, object4);
}
function draw()
{
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
  
    fill("yellow");
    rect(object.position.x, object.position.y,100,100);
    fill("brown");
    rect(object.position.x+200, object.position.y+80,80,80);
        
    fill("red");
    circle(object2.position.x, object2.position.y, 80);
    
    fill("white");
    circle(object2.position.x, object2.position.y, 45);
    
    fill("green");
    circle(object3.position.x, object3.position.y, 80);
    
    fill("yellow");
    circle(object3.position.x, object3.position.y, 50);
    
    fill("blue");
    rect(object4.position.x, object4.position.y, 100, 100);
    
    fill("white");
    rect(object4.position.x, object4.position.y, 50, 50);




}
