const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
var Drops;
function preload(){
    
}

function setup(){
   createCanvas(400,700);
   boy = new Boy(width/2,300)
    
}

function draw(){
    background(0);
    boy.display();
}   

