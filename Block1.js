class Block1 extends BaseClass {
  constructor(x,y){
    super(x,y,100,60);
    //this.image = loadImage("Images/yellow.png");
    this.Visibility = 255;
  }

  display(){
    if(this.body.speed<3){
      super.display();
      rect(this.body.position.x,this.body.position.y,60,60);    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      rect(this.body.position.x,this.body.position.y,60,60);
      pop();
    }
  }

  score(){
    if(this.Visibility<0 && this.Visibility>-1005){
      score++;
    }
  }
};
