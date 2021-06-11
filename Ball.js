class Ball{
    constructor(x,y,width,height,angle){
     var options = {
         frictionAir : 0.005,
         desnity: 1.0
     }
     this.ball = Bodies.rectangle(x,y,width,height,options)
     this.width=width;
     this.height=height;
     World.add(world,this.ball)

    }
    display(){
      var pos = this.ball.position
      var angle = this.ball.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      ellipse(0,0,this.width,this.height)
      pop()
    }

}