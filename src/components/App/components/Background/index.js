import React, { Component } from 'react';
import Particle from './particle';

class Background extends Component {
  componentDidMount() {
    this.initBackground();
  }

  lineToAngle(x1, y1, length, radians) {
    const x2 = x1 + length * Math.cos(radians);
    const y2 = y1 + length * Math.sin(radians);
    return { x: x2, y: y2 };
  }

  randomRange(min, max) {
    return min + Math.random() * (max - min);
  }

  degreesToRads(degrees) {
    return degrees / 180 * Math.PI;
  }

  initBackground() {
    const canvas = document.getElementById('canvas');
    const width = (canvas.width = window.innerWidth);
    const context = canvas.getContext('2d');
    const height = (canvas.height = window.innerHeight);
    const stars = [];
    const shootingStars = [];
    const layers = [
      { speed: 0.015, scale: 0.2, count: 320 },
      { speed: 0.03, scale: 0.5, count: 50 },
      { speed: 0.05, scale: 0.75, count: 30 },
    ];
    const starsAngle = 145;
    const shootingStarSpeed = {
      min: 15,
      max: 20,
    };
    const shootingStarOpacityDelta = 0.01;
    const trailLengthDelta = 0.01;
    const shootingStarEmittingInterval = 2000;
    const shootingStarLifeTime = 500;
    const maxTrailLength = 300;
    const starBaseRadius = 2;
    const shootingStarRadius = 3;
    let paused = false;

    //Create all stars
    layers.forEach(layer => {
      for (let i = 0; i < layer.count; i += 1) {
        const star = new Particle(
          this.randomRange(0, width),
          this.randomRange(0, height),
          0,
          0,
        );
        star.radius = starBaseRadius * layer.scale;
        star.setSpeed(layer.speed);
        star.setHeading(this.degreesToRads(starsAngle));
        stars.push(star);
      }
    });

    const createShootingStar = () => {
      const shootingStar = new Particle(
        this.randomRange(width / 2, width),
        this.randomRange(0, height / 2),
        0,
        0,
      );
      shootingStar.setSpeed(
        this.randomRange(shootingStarSpeed.min, shootingStarSpeed.max),
      );
      shootingStar.setHeading(this.degreesToRads(starsAngle));
      shootingStar.radius = shootingStarRadius;
      shootingStar.opacity = 0;
      shootingStar.trailLengthDelta = 0;
      shootingStar.isSpawning = true;
      shootingStar.isDying = false;
      shootingStars.push(shootingStar);
    };

    const killShootingStar = shootingStar => {
      setTimeout(function() {
        shootingStar.isDying = true;
      }, shootingStarLifeTime);
    };

    const update = () => {
      if (!paused) {
        context.clearRect(0, 0, width, height);
        context.fillStyle = '#0a0a0a';
        context.fillRect(0, 0, width, height);
        context.fill();

        stars.forEach(star => {
          star.update();
          drawStar(star);
          if (star.x > width) {
            star.x = 0;
          }
          if (star.x < 0) {
            star.x = width;
          }
          if (star.y > height) {
            star.y = 0;
          }
          if (star.y < 0) {
            star.y = height;
          }
        });

        shootingStars.forEach(shootingStar => {
          if (shootingStar.isSpawning) {
            shootingStar.opacity += shootingStarOpacityDelta;
            if (shootingStar.opacity >= 1.0) {
              shootingStar.isSpawning = false;
              killShootingStar(shootingStar);
            }
          }
          if (shootingStar.isDying) {
            shootingStar.opacity -= shootingStarOpacityDelta;
            if (shootingStar.opacity <= 0.0) {
              shootingStar.isDying = false;
              shootingStar.isDead = true;
            }
          }
          shootingStar.trailLengthDelta += trailLengthDelta;

          shootingStar.update();
          if (shootingStar.opacity > 0.0) {
            drawShootingStar(shootingStar);
          }
        });

        //Delete dead shooting shootingStars
        for (var i = shootingStars.length - 1; i >= 0; i--) {
          if (shootingStars[i].isDead) {
            shootingStars.splice(i, 1);
          }
        }
      }

      requestAnimationFrame(update);
    };

    const drawStar = star => {
      context.fillStyle = 'rgb(255, 221, 157)';
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
      context.fill();
    };

    const drawShootingStar = p => {
      const x = p.x;
      const y = p.y;
      const currentTrailLength = maxTrailLength * p.trailLengthDelta;
      const pos = this.lineToAngle(x, y, -currentTrailLength, p.getHeading());

      context.fillStyle = 'rgba(255, 255, 255, ' + p.opacity + ')';
      const starLength = 5;
      context.beginPath();
      context.moveTo(x - 1, y + 1);

      context.lineTo(x, y + starLength);
      context.lineTo(x + 1, y + 1);

      context.lineTo(x + starLength, y);
      context.lineTo(x + 1, y - 1);

      context.lineTo(x, y + 1);
      context.lineTo(x, y - starLength);

      context.lineTo(x - 1, y - 1);
      context.lineTo(x - starLength, y);

      context.lineTo(x - 1, y + 1);
      context.lineTo(x - starLength, y);

      context.closePath();
      context.fill();

      context.fillStyle = 'rgba(255, 221, 157, ' + p.opacity + ')';
      context.beginPath();
      context.moveTo(x - 1, y - 1);
      context.lineTo(pos.x, pos.y);
      context.lineTo(x + 1, y + 1);
      context.closePath();
      context.fill();
    };

    update();

    //Shooting stars
    setInterval(() => {
      if (paused) return;
      createShootingStar();
    }, shootingStarEmittingInterval);

    window.onfocus = function() {
      paused = false;
    };

    window.onblur = function() {
      paused = true;
    };
  }

  render() {
    return (
      <canvas
        id="canvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    );
  }
}

export default Background;
