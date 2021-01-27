class Ground {
    constructor(x,y,width,height) {
      var options = {
          density :1.4,
          isStatic :true,
          friction : 0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("purple");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };