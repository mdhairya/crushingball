class Rope{
  constructor(bodyA,pointB){
   
var options = {
    bodyA : bodyA,
    pointB : pointB,
    stiffness : 1.2,
    length : 250
}
this.pointB = pointB;
this.rope = Constraint.create(options);

World.add(world,this.rope)
console.log(this.rope)

  }

  fly(){
   this.rope.bodyA = null;


  }
  attach(body){
     this.rope.bodyA = body


  }
   display(){
     if(this.rope.bodyA){
    var pointA = this.rope.bodyA.position
    var pointB = this.pointB
    stroke(48,22,8)
    strokeWeight(3)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
   }
  }
   
}