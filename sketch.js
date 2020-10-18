const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var gameengine,gameworld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  gameengine = Engine.create();
  gameworld = gameengine.world;

  var groundoptions = {
    isStatic:true
  }
var ballOptions= {
  restitution:0.5
}
  ground = Bodies.rectangle(200,390,400,20,groundoptions)
  World.add(gameworld,ground);
ball= Bodies.circle(200,100,20,ballOptions);
World.add(gameworld,ball);
  console.log(ball)
  
}

function draw() {
  background("yellow");

  Engine.update(gameengine)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}