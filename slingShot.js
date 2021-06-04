class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            polygon:polygon,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
fly(){
this.sling.polygon=null


}
    display(){
        if (this.sling. polygon){
        var  polygon = this.sling. polygon.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(polygon.x,polygon.y, pointB.x, pointB.y);
        }
    }
    
}