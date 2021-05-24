class Ground{
    constructor() {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(800,800,1600,50,options);
        this.width = 1600;
        this.height = 50;
        World.add(world,this.body);
    }
    display() {
        rectMode(CENTER);
        fill(30,30,1)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }

}