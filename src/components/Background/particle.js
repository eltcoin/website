class Particle {
  constructor(x, y, speed, direction) {
    this.x = x;
    this.y = y;
    this.vx = Math.cos(direction) * speed;
    this.vy = Math.sin(direction) * speed;
    this.radius = 0;
  }

  getSpeed() {
    return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
  }

  setSpeed(speed) {
    const heading = this.getHeading();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  }

  getHeading() {
    return Math.atan2(this.vy, this.vx);
  }

  setHeading(heading) {
    const speed = this.getSpeed();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
}

export default Particle;
