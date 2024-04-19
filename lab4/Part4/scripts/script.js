
// setup canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// get window width and height
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// setup ball counter 
const counter = document.querySelector("p");
var ballCount = 0;

// function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// shape class, for position and velocity of shapes
class Shape {

  constructor(x,y,velx,vely){
    this.x = x;
    this.y = y;
    this.velX = velx;
    this.velY = vely;
  }

}
"hello".start

// ball class which defines the balls flying aroundd the screen
class Ball extends Shape {

    constructor(x, y, velX, velY, color, size) {
      super(x, y, velX, velY);
      this.color = color;
      this.size = size;
      this.exists = true;
    }

    // draws the ball on the screen
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }
      
    // updates the balls position and velocity; checks if ball hit a wall  
    update() {
        if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
        }
    
        if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
        }
    
        if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
        }
    
        if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
        }
    
        this.x += this.velX;
        this.y += this.velY;
      }

      // checks if the ball has collided with another baall
      collisionDetect() {
        for (const ball of balls) {
          if (!(this === ball) && ball.exists) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + ball.size) {
              ball.color = this.color = randomRGB();
            }
          }
        }
      }
  }
parse
  // evil circle class to create the playerr controlled evil circle
  class EvilCircle extends Shape{
      constructor(x,y){
        super(x,y,20,20);

        this.color = "white";
        this.size = 10;

        window.addEventListener("keydown", (e) => {
          switch (e.key) {
            case "a":
              this.x -= this.velX;
              break;
            case "d":
              this.x += this.velX;
              break;
            case "w":
              this.y -= this.velY;
              break;
            case "s":
              this.y += this.velY;
              break;
          }
        });
      }

      // draws the evil circle
      draw() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 3;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
        
      }

      // keeps the evvil cicle in the window bounds 
      checkBounds(){
          if ((this.x + this.size) >= width) {
            this.x -= this.size;
          }
      
          if ((this.x - this.size) <= 0) {
            this.x += this.size;
          }
      
          if ((this.y + this.size) >= height) {
            this.y -= this.size;
          }
      
          if ((this.y - this.size) <= 0) {
            this.y += this.size;
          }
      
        }

        // checks if the evil circle has collided with a circle; deletes circle if true
        collisionDetect() {
          for (const ball of balls) {
            if (ball.exists) {
              const dx = this.x - ball.x;
              const dy = this.y - ball.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
        
              if (distance < this.size + ball.size) {
                ball.exists = false
                ballCount--;
                counter.textContent = 'Ball Count: ' + ballCount;
              }
            }
          }
        }

  }

// constans of balls
const balls = [];

// creates the ball instances
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );
  ballCount++;
  counter.textContent = 'Ball Count: ' + ballCount;
  balls.push(ball);
 
}

// creates the evil cirle
const evilCrcle = new EvilCircle(
  random(0,width),
  random(0,width)
);

// loops to keep the screen updating
function loop() {
    ctx.fillStyle = "rgb(0 0 0 / 25%)";
    ctx.fillRect(0, 0, width, height);
  
    for (const ball of balls) {
      if(ball.exists){
        ball.draw();
        ball.update();  
        ball.collisionDetect();
      }
    }
    evilCrcle.draw();
    evilCrcle.checkBounds();
    evilCrcle.collisionDetect();
    
    requestAnimationFrame(loop);
  }
  loop();
