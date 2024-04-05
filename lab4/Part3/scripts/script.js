// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// ball class which defines the balls flying aroundd the screen
class Ball {
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
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
      
      // checks if the ball has collided with another ball
      collisionDetect() {
        for (const ball of balls) {
          if (this !== ball) {
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

  balls.push(ball);

  
}

// loops to keep the screen updating
function loop() {
    ctx.fillStyle = "rgb(0 0 0 / 25%)";
    ctx.fillRect(0, 0, width, height);
  
    for (const ball of balls) {
      ball.draw();
      ball.update();  
      ball.collisionDetect();
    }
  
    requestAnimationFrame(loop);
  }
  loop();