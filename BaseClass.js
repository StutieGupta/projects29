class BaseClass {
    constructor(x, y,width,height) {
      var options = {
          'restitution':0.7,
          'friction':0.6,
          'density':0.2
      }
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = width;
      this.height = height;
     // this.image = loadImage("Images/base.png");
      this.Visibility = 255;
      World.add(world, this.body);
    }
    
    display(){
     var angle = this.body.angle;
     push();
     rotate(angle);
     rectMode(CENTER);
     rect(this.body.position.x,this.body.position.y,100,90);
     pop();
    }
};