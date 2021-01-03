class Ground{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,300,10,{isStatic:true});
        this.width=300;
        this.height=10;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill(255);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}