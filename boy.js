class Boy {
    constructor(x,y){
        var Options={
           isStatic : true
        }
        this.body = Bodies.circle(x,y,20,Options);
        this.radious = 20
        this.image = loadAnimation("walking_1.png","walking_2.png","walking_3.png",  
        "walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    }
    display(){
        var Pos = this.body.position
        push();
        translate(Pos.x,Pos.y)
        animation(this.image,0,0,100,100)
        pop();
    }
}    