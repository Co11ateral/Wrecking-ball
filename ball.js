class Ball{
    constructor() {
        var options = {
            density:4,
            frictionAir:0.005,
            restitution:0.125
        }
        this.body = Bodies.circle(850,200,100,options);
        World.add(world,this.body);
    }
    display() {
        ellipseMode(RADIUS);
        fill(10);
        ellipse(this.body.position.x,this.body.position.y,100,100);
    }
}