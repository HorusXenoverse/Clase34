class Ground{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,5000,20,options);
        this.width=1200;
        this.height=20;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        rectMode(CENTER);
        stroke("green");
        fill("black");
        rect(pos.x,pos.y,this.width,this.height);
    }
}