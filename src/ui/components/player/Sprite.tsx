export class Sprite {
    position: { x: number, y: number };
    velocity: { x: number, y: number };
    context: CanvasRenderingContext2D | null;
    
    constructor(position: { x: number, y: number }, velocity: { x: number, y: number }, context: CanvasRenderingContext2D | null) {
      this.position = position;
      this.velocity = velocity;
      this.context = context;
    }
  
    public draw() {
      if (this.context) {
        this.context.fillStyle = 'blue'; // Example color
        this.context.fillRect(this.position.x, this.position.y, 50, 150); // Example size
      }
    }

    public update(){
        this.draw()
        this.position.y += this.position.y+1

    }


  }