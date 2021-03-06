const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20);
    Pig1 = new Pig(100,100);
    Log1 = new Log(200,300,70,PI/5);
    Bird1 = new Bird(150,250);
}


function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
    Pig1.display();
    Log1.display();
    Bird1.display();
}