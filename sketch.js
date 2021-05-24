const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var join;
var block1;
var ball;
var ground;

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1600,900);

  block1 = new Block(600,750,50,50);
  block2 = new Block(550,750,50,50);
  block3 = new Block(500,750,50,50);
  block4 = new Block(450,750,50,50);
  block5 = new Block(375,725,100,100);
  block6 = new Block(600,700,50,50);
  block7 = new Block(550,700,50,50);
  block8 = new Block(500,700,50,50);
  block9 = new Block(450,750,50,50);
  block10 = new Block(575,650,50,50);
  block11 = new Block(525,650,50,50);
  block12 = new Block(475,650,50,50);
  block13 = new Block(425,650,50,50);
  block14 = new Block(375,650,50,50);
  block15 = new Block(525,550,50,100);
  block16 = new Block(475,550,50,100);
  block17 = new Block(425,550,50,100);
  block18 = new Block(375,550,50,100);
  block19 = new Block(575,550,50,100);
  block20 = new Block(550,450,100,100);
  block21 = new Block(475,400,50,200);
  block22 = new Block(400,450,100,100);
  block23 = new Block(1400,750,50,50);
  block24 = new Block(1350,750,50,50);
  block25 = new Block(1300,750,50,50);
  block26 = new Block(1250,750,50,50);
  block27 = new Block(1175,725,100,100);
  block28 = new Block(1400,700,50,50);
  block29 = new Block(1350,700,50,50);
  block30 = new Block(1300,700,50,50);
  block31 = new Block(1250,750,50,50);
  block32 = new Block(1375,650,50,50);
  block33 = new Block(1325,650,50,50);
  block34 = new Block(1275,650,50,50);
  block35 = new Block(1225,650,50,50);
  block36 = new Block(1175,650,50,50);
  block37 = new Block(1325,550,50,100);
  block38 = new Block(1275,550,50,100);
  block39 = new Block(1225,550,50,100);
  block40 = new Block(1175,550,50,100);
  block41 = new Block(1375,550,50,100);
  block42 = new Block(1200,450,100,100);
  block43 = new Block(1275,400,50,200);
  block44 = new Block(1350,450,100,100);
  ball = new Ball();
  join = new Rope(ball.body,{x:850,y:100});
  ground = new Ground();
}

function draw() {
  Engine.update(engine);
  background(255,255,255);

  fill(20,10,70);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  fill(30,250,110);
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  fill(255,10,20);
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  fill(110,100,240);
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();
  ball.display();
  join.display();
  ground.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}