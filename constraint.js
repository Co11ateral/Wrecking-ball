class Rope{
    constructor(ball,point) {
        var options = {
            bodyA:ball,
            pointB:point,
            length:550,
            stiffness:1.5
        }
        this.rope = Constraint.create(options);
        this.pointB = point;
        World.add(world,this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        stroke(3);
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}