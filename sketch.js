const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
var drops=[];
var Max=100;
var thunder1,thunder2,thunder3,thunder4;
var thu=0;
var thunder;
function preload(){
    thunder1=loadImage("1.png")
    thunder2=loadImage("2.png")
    thunder3=loadImage("3.png")
    thunder4=loadImage("4.png")
}

function setup(){
   createCanvas(400,700);
   engine=Engine.create();
   world=engine.world
   boy = new Boy(width/2,400)
   if(frameCount%100===0){
       for(var i = 0;i<Max;i++){
           drops.push(new Drops())
       }
   }
    Engine.run(engine);
}

function draw(){
    background(0);
    boy.display();
    rand=Math.round(random(1,4))
    if(frameCount%80===0){
        thu=frameCount
        thunder=createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
            case 1: thunder.addImage(thunder2)
            break;
            case 2: thunder.addImage(thunder1)
            break;
            case 3: thunder.addImage(thunder3)
            break;
            case 4: thunder.addImage(thunder4)
            break;
        }
        thunder.scale=random(0.3,0.6)
    

    }
    if(thu+10===frameCount && thunder){
        thunder.destroy();
    } 
    for(var i = 0;i<Max;i++){
        drops[i].display();
        drops[i].update();
    }
    drawSprites();
}   

