class Drops{
    constructor(){
        var Options={
            isStatic:false,
            friction:0.001,
            restitution:0.1

        }
        this.body=Bodies.circle(random(0,700),random(0,10),10,Options)
        this.radious=10;
        World.add(world,this.body)
    }
    display(){
        fill("darkblue")
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.radious,this.radious)
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,700),y:random(0,10)})
        }
    }
}