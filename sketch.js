const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero, ground, fly, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20
var monster, bg
function preload() {
//preload the images here
 bg = loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  hero = new Hero(550, 100, 30)
  ground = new Ground(650, 550, 1300,40)
  monster = new Monster(1100,100,30)

  box1 = new Box(900, 100, 70, 70);
    box2 = new Box(900, 100, 70, 70);
    box3 = new Box(900, 100, 70, 70);
    box4 = new Box(900, 100, 70, 70);
    box5 = new Box(900, 100, 70, 70);
    box6 = new Box(900, 100, 70, 70);
    box7 = new Box(800, 100, 70, 70);
    box8 = new Box(800, 100, 70, 70);
    box9 = new Box(800, 100, 70, 70);
    box10 = new Box(800, 100, 70, 70);
    box11 = new Box(800, 100, 70, 70);
    box12 = new Box(800, 100, 70, 70);
    box13 = new Box(700, 100, 70, 70);
    box14 = new Box(700, 100, 70, 70);
    box15 = new Box(700, 100, 70, 70);
    box16 = new Box(700, 100, 70, 70);
    box17 = new Box(700, 100, 70, 70);
    box18 = new Box(700, 100, 70, 70);
    box19 = new Box(700, 100, 70, 70);
    box20 = new Box(700, 100, 70, 70);

  fly = new Fly(hero.body, {x: hero.body.position.x, y: 0})
  fly = new Fly(monster.body, {x: monster.body.position.x, y: 0})

}

function draw() {
  background(bg);

  Engine.update(engine);

  ground.display()
  hero.display()
  fly.display()
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  monster.display()
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY})
}


