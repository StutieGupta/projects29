class Hero{
    constructor(x, y, r)
    {
        var options={
            density: 1,
            frictionAir: 0.01
        }
        this.body = Bodies.circle(x, y, r, options)
        this.radius = r
        this.image = loadImage("Superhero-01.png")
        this.scale = 12
        World.add(world, this.body)
    }
    display()
    {
        var pos = this.body.position
        push()
        fill("pink")
        translate(pos.x, pos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.radius)
        pop()
    }
}