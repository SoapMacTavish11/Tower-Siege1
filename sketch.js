const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var block0,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var Ground1,Ground2;

var sling1,polygon1;


function setup (){

    createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    block0=new Block(370,400,30,40)
    block1=new Block(400,400,30,40);
    block2=new Block(430,400,30,40);
    block3=new Block(460,400,30,40);
    block4=new Block(490,400,30,40);
    block5=new Block(520,400,30,40);
    block6=new Block(550,400,30,40);
    block7=new Block(580,400,30,40);

    block8=new Block(550,350,30,40);
    block9=new Block(520,350,30,40);
    block10=new Block(490,350,30,40);
    block11=new Block(460,350,30,40);
    block12=new Block(430,350,30,40);
    block13=new Block(400,350,30,40);

    block14=new Block(430,300,30,40);
    block15=new Block(460,300,30,40);
    block16=new Block(490,300,30,40);
    block17=new Block(520,300,30,40);

    block18=new Block(460,250,30,40);
    block19=new Block(490,250,30,40);

    block20=new Block(475,200,30,40);

    polygon1=new Polygon(100,300,60,60);

    sling1=new SlingShot(polygon1.body,{x:100,y:400});

    Ground1=new Ground(470,500,275,40);
}
    




function draw (){
background("Brown");

   polygon1.display();
 
   block0.display();
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
   block12.display();
   block13.display();

   block14.display();
   block15.display();
   block16.display();
   block17.display();

   block18.display();
   block19.display();

   block20.display();
   sling1.display();

  

   Ground1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x:mouseX , y: mouseY});
}


function mouseReleased(){
 sling1.fly();
}