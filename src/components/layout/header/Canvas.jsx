import React, { Component } from "react";
import utils from "./utils";

export default class Canvas extends Component {
  componentDidMount() {
    const canvas = document.querySelector("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 1.5;

    const c = canvas.getContext("2d");
    c.imageSmoothingEnabled = true;

    // Image

    // Objects
    function Star(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = {
        x: utils.randomIntFromRange(-4, 4),
        y: 3
      };
      this.friction = 0.8;
      this.gravity = 1;
    }

    Star.prototype.draw = function() {
      c.save();
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.shadowColor = "#E3EAEF";
      c.shadowBlur = 20;
      c.fill();
      c.closePath();
      c.restore();
    };

    Star.prototype.update = function() {
      this.draw();
      if (
        this.y + this.radius + this.velocity.y >
        canvas.height - groundHeight
      ) {
        this.velocity.y = -this.velocity.y * this.friction;
        this.shatter();
      } else {
        this.velocity.y += this.gravity;
      }

      //hit side of the screen

      if (
        this.x + this.radius + this.velocity.x > canvas.widt ||
        this.x - this.radius <= 0
      ) {
        this.velocity.x = -this.velocity.x * this.friction;
        this.shatter();
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
    };

    Star.prototype.shatter = function() {
      this.radius -= 3;
      for (let i = 0; i < 15; i++) {
        miniStars.push(new MiniStar(this.x, this.y, 2));
      }
    };
    //MINISTAR

    function MiniStar(x, y, radius, color) {
      Star.call(this, x, y, radius, color);
      this.velocity = {
        x: utils.randomIntFromRange(-5, 5),

        y: utils.randomIntFromRange(-15, 15)
      };
      this.friction = 0.8;
      this.gravity = 0.1;
      this.ttl = 100;
      this.opacity = 1;
    }
    MiniStar.prototype.draw = function() {
      c.save();
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = `rgba(227,234 ,239,${this.opacity}`;
      c.shadowColor = "#E3EAEF";
      c.shadowBlur = 20;
      c.fill();
      c.closePath();
      c.restore();
    };

    MiniStar.prototype.update = function() {
      this.draw();

      //star hit the bottom of the screen
      if (
        this.y + this.radius + this.velocity.y >
        canvas.height - groundHeight
      ) {
        this.velocity.y = -this.velocity.y * this.friction;
      } else {
        this.velocity.y += this.gravity;
      }
      this.y += this.velocity.y;
      this.x += this.velocity.x;
      this.ttl -= 1;
      this.opacity -= 1 / this.ttl;
    };

    function createMountainRange(mountainAmount, height, color) {
      for (let i = 0; i < mountainAmount; i++) {
        const mountainWidth = canvas.width / mountainAmount;
        c.beginPath();
        c.moveTo(i * mountainWidth, canvas.height);
        c.lineTo(i * mountainWidth + mountainWidth + 325, canvas.height);
        c.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height);
        c.lineTo(i * mountainWidth - 325, canvas.height);
        c.fillStyle = color;
        c.fill();
        c.closePath();
      }
    }

    // Implementation
    const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
    backgroundGradient.addColorStop(0, "#0E263C");
    backgroundGradient.addColorStop(1, "#3f586b");

    let stars;
    let miniStars;
    let backgroundStars;
    let ticker = 0;
    let randomSpawnRate = 75;
    const groundHeight = 100;
    function init() {
      stars = [];
      miniStars = [];
      backgroundStars = [];

      for (let i = 0; i < 150; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 3;
        backgroundStars.push(new Star(x, y, radius, "white"));
      }
    }

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      c.fillStyle = backgroundGradient;
      c.fillRect(0, 0, canvas.width, canvas.height);

      backgroundStars.forEach(backgroundStar => {
        backgroundStar.draw();
      });
      createMountainRange(1, canvas.height - 50, "#384551");
      createMountainRange(2, canvas.height - 100, "#2B3843");
      createMountainRange(3, canvas.height - 300, "#26333e");
      c.fillStyle = "#182028";
      c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);
      stars.forEach((star, index) => {
        star.update();
        if (star.radius === 0) {
          stars.splice(index, 1);
        }
      });
      miniStars.forEach((miniStar, index) => {
        miniStar.update();
        if (miniStar.ttl === 0) {
          miniStars.splice(index, 1);
        }
      });

      ticker++;
      if (ticker % randomSpawnRate === 0) {
        const radius = 12;
        const x = Math.max(radius, Math.random(7, 20) * canvas.width - radius);
        // const y = Math.random()* canvas.height
        stars.push(new Star(x, -100, 12, "white"));
        randomSpawnRate = utils.randomIntFromRange(75, 200);
      }
    }

    init();
    animate();
  }
  render() {
    return (
      <div className="canvas-container">
        <canvas />
      </div>
    );
  }
}
