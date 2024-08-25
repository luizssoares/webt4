const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);
  
  function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomRGB() {
      return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
  }
  
  function formato(x, y, velX, velY, color, size, type) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
      this.type = type; 
  }
  
  formato.prototype.draw = function () {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      
      if (this.type === "circulo") {
          ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      } else if (this.type === "quadrado") {
          ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
      } else if (this.type === "triangulo") {
          ctx.moveTo(this.x, this.y - this.size);
          ctx.lineTo(this.x - this.size, this.y + this.size);
          ctx.lineTo(this.x + this.size, this.y + this.size);
          ctx.closePath();
      }
      
      ctx.fill();
  };
  
  formato.prototype.update = function () {
      if (this.type === "circulo") {
          if (this.x + this.size >= width || this.x - this.size <= 0) {
              this.velX = -this.velX;
          }
          if (this.y + this.size >= height || this.y - this.size <= 0) {
              this.velY = -this.velY;
          }
      } else if (this.type === "quadrado") {
          if (this.x + this.size / 2 >= width || this.x - this.size / 2 <= 0) {
              this.velX = -this.velX;
          }
          if (this.y + this.size / 2 >= height || this.y - this.size / 2 <= 0) {
              this.velY = -this.velY;
          }
      } else if (this.type === "triangulo") {
          if (this.x + this.size >= width || this.x - this.size <= 0) {
              this.velX = -this.velX;
          }
          if (this.y + this.size >= height || this.y - this.size <= 0) {
              this.velY = -this.velY;
          }
      }
      
      this.x += this.velX;
      this.y += this.velY;
  };
  
  formato.prototype.collisionDetect = function () {
      for (let j = 0; j < shapes.length; j++) {
          if (!(this === shapes[j])) {
              const dx = this.x - shapes[j].x;
              const dy = this.y - shapes[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (this.type === "circulo" && shapes[j].type === "circulo") {
                  if (distance < this.size + shapes[j].size) {
                      shapes[j].color = this.color =
                          `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
                  }
              } else if (this.type === "circulo" || shapes[j].type === "circulo") {
                  if (distance < this.size + shapes[j].size) {
                      shapes[j].color = this.color =
                          `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
                  }
              } else if (this.type === "quadrado" && shapes[j].type === "quadrado") {
                  if (Math.abs(dx) < (this.size + shapes[j].size) / 2 && Math.abs(dy) < (this.size + shapes[j].size) / 2) {
                      shapes[j].color = this.color =
                          `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
                  }
              } else if (this.type === "triangulo" && shapes[j].type === "triangulo") {
                  if (Math.abs(dx) < (this.size + shapes[j].size) / 2 && Math.abs(dy) < (this.size + shapes[j].size) / 2) {
                      shapes[j].color = this.color =
                          `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
                  }
              }
          }
      }
  };
  
  let shapes = [];
  
  while (shapes.length < 100) {
      let size = random(10, 20);
      let type = ["circulo", "quadrado", "triangulo"][random(0, 2)];
      let shape = new formato(
          random(size, width - size),
          random(size, height - size),
          random(-7, 7),
          random(-7, 7),
          `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`,
          size,
          type
      );
  
      shapes.push(shape);
  }
  
  function loop() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, width, height);
    
      for (let i = 0; i < shapes.length; i++) {
          shapes[i].draw();
          shapes[i].update();
          shapes[i].collisionDetect();
      }
    
      requestAnimationFrame(loop);
  }
  
  loop();
   

/* 
const botao = document.getElementById("botao").value;
}

botao.addEventListener("input", (event) => {
});
 */