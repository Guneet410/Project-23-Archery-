class Player{
    constructor (x,y){
        var options = {
     isStatic : true  }
 
    this.body = Bodies.rectangle (x,y,20,60,options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    World.add(world,this.body)
    }
    display(){

        var pos = this.body.position;
    var angle = this.body.angle;

        push ()
    imageMode (CENTER)
    translate (pos.x,pos.y);
    rotate (angle)
    image (this.image,0,0,70,150)
        pop ();

    }
}