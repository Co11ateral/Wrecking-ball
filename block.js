class Block{
    constructor(x,y,width,height) {
        var options = {
            restitution:0.5,
            friction:0.5,
            density:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display() {
        rectMode(CENTER);
        //fill(150);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}