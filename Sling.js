class Sling {
 constructor(bodyA,pointB){
    var options = {
        bodyA: bird.body,
        pointB: pointB,
        stiffness:0.01,
        length: 0
    }
    this.pointB = pointB
    this.chain = Constraint.create(options);
    World.add (world,this.chain)

 }

    fly(){
    this.chain.bodyA = null



    }
    display(){

    if(this.chain.bodyA){
    

    
    strokeWeight(3);
    line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.pointB.x, this.pointB.y);
    }
    }

}