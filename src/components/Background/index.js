import React, { Component } from 'react';

const MAX_SPEED = 200;

class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speed: 0.1,
      decreaseInterval: null,
      showNotification: false,
    };

    this.init = this.init.bind(this);
    this.initBackground = this.initBackground.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
    this.drawBg = this.drawBg.bind(this);
    this.createStars = this.createStars.bind(this);
    this.drawStars = this.drawStars.bind(this);
    this.drawSpeed = this.drawSpeed.bind(this);
    this.clearShipBg = this.clearShipBg.bind(this);
    this.draw = this.draw.bind(this);
    this.changeFlameEnd = this.changeFlameEnd.bind(this);
    this.drawRocketship = this.drawRocketship.bind(this);
    this.drawRocketships = this.drawRocketships.bind(this);
  }

  componentDidMount() {
    this.init();
    this.setEventListeners();

    setTimeout(() => {
      this.setState({
        showNotification: true,
      });

      setTimeout(() => {
        this.setState({
          showNotification: false,
        });
      }, 4000);
    }, 2000);
  }

  init() {
    const c = document.getElementById('bg');
    const ctx = c.getContext('2d');
    const s = document.getElementById('ship');
    const ship = s.getContext('2d');
    const s2 = document.getElementById('ship2');
    const ship2 = s.getContext('2d');
    const stars = [];

    c.width = window.innerWidth;
    c.height = window.innerHeight;
    s.width = window.innerWidth;
    s.height = window.innerHeight;
    s2.width = window.innerWidth;
    s2.height = window.innerHeight;

    const shipCenter = { x: s.width / 5, y: s.height / 2 - 100 };
    const shipCenter2 = { x: 4 * s.width / 5, y: s.height / 2 - 100 };

    let flameEndX = shipCenter.x;
    let flame2EndX = shipCenter2.x;

    this.setState(
      {
        c,
        ctx,
        s,
        ship,
        s2,
        ship2,
        stars,
        shipCenter,
        shipCenter2,
        flameEndX,
        flame2EndX,
      },
      () => {
        this.initBackground();
      },
    );
  }

  setEventListeners() {
    window.onkeydown = e => {
      console.log(e.keyCode);
      if (e.keyCode === 32) {
        e.preventDefault();

        clearInterval(this.state.decreaseInterval);

        if (this.state.speed < MAX_SPEED) {
          this.setState({
            speed: this.state.speed + this.state.speed / 10,
          });
        }
      }
    };

    window.onkeyup = () => {
      let decreaseInterval = setInterval(() => {
        if (this.state.speed > 0.1) {
          this.setState({
            speed: this.state.speed - this.state.speed / 10,
          });
        } else {
          clearInterval(this.state.decreaseInterval);
          this.setState({
            speed: 0.1,
          });
        }
      }, 100);

      this.setState({
        decreaseInterval,
      });
    };
  }

  drawBg() {
    const { c, ctx } = this.state;

    ctx.rect(0, 0, c.width, c.height);
    ctx.fillStyle = '#282a3a';
    ctx.fill();
  }

  createStars() {
    for (let i = 0; i < 1000; i++) {
      this.state.stars.push({
        x: Math.random() * 3000,
        y: Math.random() * 3000,
        r: Math.random() * 2,
        o: Math.random(),
        m: Math.random(),
      });
    }
  }

  drawStars() {
    const { ctx, speed, stars } = this.state;

    for (let i = 0; i < stars.length; i++) {
      if (speed > 100) {
        var alpha = (speed - 100) / 100;

        ctx.beginPath();
        ctx.rect(stars[i].x - stars[i].r, stars[i].y, stars[i].r * 2, 150);
        ctx.fillStyle = 'rgba(100, 150, 200, ' + alpha + ')';
        ctx.closePath();
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 221, 157, ' + stars[i].o + ')';
      ctx.closePath();
      ctx.fill();
    }
  }

  moveStars() {
    const { c, speed, stars } = this.state;

    for (let i = 0; i < stars.length; i++) {
      if (stars[i].y + 0.1 > c.height) {
        stars[i].y = -(Math.random() * 1000);
      } else {
        stars[i].y += speed + stars[i].m;
      }
    }
  }

  drawSpeed() {
    const { ctx, speed } = this.state;

    var speedHeight = speed / MAX_SPEED * 100;

    ctx.beginPath();
    ctx.rect(50, 50, 10, 100);
    ctx.fillStyle = 'rgba(255, 255, 255, .2)';
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.rect(50, 150 - speedHeight, 10, speedHeight);
    ctx.fillStyle = '#fafafa';
    ctx.closePath();
    ctx.fill();
  }

  clearShipBg() {
    const { s, s2, ship, ship2 } = this.state;

    ship.clearRect(0, 0, s.width, s.height);
    ship2.clearRect(0, 0, s2.width, s2.height);
  }

  drawShipLeftWing(ship, shipCenter) {
    ship.beginPath();
    ship.moveTo(shipCenter.x, shipCenter.y + 50);
    ship.quadraticCurveTo(
      shipCenter.x - 80,
      shipCenter.y + 80,
      shipCenter.x - 30,
      shipCenter.y + 150,
    );
    ship.quadraticCurveTo(
      shipCenter.x - 40,
      shipCenter.y + 90,
      shipCenter.x,
      shipCenter.y + 100,
    );
    ship.fillStyle = 'rgb(200, 0, 0)';
    ship.closePath();
    ship.fill();
  }

  drawShipRightWing(ship, shipCenter) {
    ship.beginPath();
    ship.moveTo(shipCenter.x, shipCenter.y + 50);
    ship.quadraticCurveTo(
      shipCenter.x + 80,
      shipCenter.y + 80,
      shipCenter.x + 30,
      shipCenter.y + 150,
    );
    ship.quadraticCurveTo(
      shipCenter.x + 40,
      shipCenter.y + 90,
      shipCenter.x,
      shipCenter.y + 100,
    );
    ship.fillStyle = 'rgb(200, 0, 0)';
    ship.closePath();
    ship.fill();
  }

  drawShipBody(ship, shipCenter) {
    ship.beginPath();
    ship.moveTo(shipCenter.x, shipCenter.y);
    ship.bezierCurveTo(
      shipCenter.x - 40,
      shipCenter.y + 50,
      shipCenter.x - 30,
      shipCenter.y + 80,
      shipCenter.x - 20,
      shipCenter.y + 100,
    );
    ship.lineTo(shipCenter.x + 20, shipCenter.y + 100);
    ship.bezierCurveTo(
      shipCenter.x + 30,
      shipCenter.y + 80,
      shipCenter.x + 40,
      shipCenter.y + 50,
      shipCenter.x,
      shipCenter.y,
    );
    ship.fillStyle = 'rgb(200, 200, 200)';
    ship.closePath();
    ship.fill();
  }

  drawShipHead(ship, shipCenter) {
    ship.beginPath();
    ship.moveTo(shipCenter.x, shipCenter.y);
    ship.quadraticCurveTo(
      shipCenter.x - 8,
      shipCenter.y + 10,
      shipCenter.x - 14,
      shipCenter.y + 20,
    );
    ship.lineTo(shipCenter.x + 14, shipCenter.y + 20);
    ship.quadraticCurveTo(
      shipCenter.x + 8,
      shipCenter.y + 10,
      shipCenter.x,
      shipCenter.y,
    );
    ship.fillStyle = 'rgb(200, 0, 0)';
    ship.closePath();
    ship.fill();
  }

  drawWindow(ship, shipCenter) {
    ship.beginPath();
    ship.arc(shipCenter.x, shipCenter.y + 50, 12, 0, Math.PI * 2);
    ship.lineWidth = 4;
    ship.strokeStyle = 'rgb(120, 120, 130)';
    ship.fillStyle = 'rgb(100, 150, 250)';
    ship.closePath();
    ship.fill();
    ship.stroke();
  }

  drawWindowShine(ship, shipCenter) {
    ship.beginPath();
    ship.arc(
      shipCenter.x,
      shipCenter.y + 50,
      10,
      Math.PI * 1.65,
      Math.PI * 0.65,
      true,
    );
    ship.fillStyle = 'rgba(255, 255, 255, .25)';
    ship.closePath();
    ship.fill();
  }

  drawShine(ship, shipCenter) {
    ship.beginPath();
    ship.moveTo(shipCenter.x, shipCenter.y + 15);
    ship.quadraticCurveTo(
      shipCenter.x - 30,
      shipCenter.y + 65,
      shipCenter.x - 10,
      shipCenter.y + 90,
    );
    ship.lineWidth = 6;
    ship.lineCap = 'round';
    ship.strokeStyle = 'rgba(255, 255, 255, .25)';
    ship.stroke();
    ship.closePath();
  }

  drawFlames(ship, shipCenter, flameEndX, flameHeight, color) {
    flameHeight += this.state.speed / 3;

    ship.beginPath();
    ship.moveTo(shipCenter.x, shipCenter.y + 110);
    ship.quadraticCurveTo(
      shipCenter.x - 40,
      shipCenter.y + 110,
      flameEndX,
      flameHeight,
    );
    ship.quadraticCurveTo(
      shipCenter.x + 40,
      shipCenter.y + 110,
      shipCenter.x,
      shipCenter.y + 110,
    );
    ship.fillStyle = color;
    ship.fill();
    ship.closePath();
  }

  changeFlameEnd() {
    this.setState({
      flameEndX: this.state.shipCenter.x + Math.random() * 5,
      flame2EndX: this.state.shipCenter2.x + Math.random() * 5,
    });
  }

  drawRocketship(ship, shipCenter, flameEndX) {
    this.drawShipLeftWing(ship, shipCenter);
    this.drawShipRightWing(ship, shipCenter);
    this.drawShipBody(ship, shipCenter);
    this.drawShipHead(ship, shipCenter);
    this.drawWindow(ship, shipCenter);
    this.drawWindowShine(ship, shipCenter);
    this.drawShine(ship, shipCenter);

    this.drawFlames(
      ship,
      shipCenter,
      flameEndX,
      shipCenter.y + 200,
      'rgba(230, 110, 0, .8)',
    );
    this.drawFlames(
      ship,
      shipCenter,
      flameEndX,
      shipCenter.y + 180,
      'rgba(240, 150, 0, .9)',
    );
    this.drawFlames(
      ship,
      shipCenter,
      flameEndX,
      shipCenter.y + 160,
      'rgba(250, 170, 0, 1)',
    );

    this.changeFlameEnd();

    ship.translate(shipCenter.x, shipCenter.y + 50);
    ship.translate(-shipCenter.x, -shipCenter.y - 50);
  }

  drawRocketships() {
    const {
      flameEndX,
      flame2EndX,
      ship,
      ship2,
      shipCenter,
      shipCenter2,
    } = this.state;

    this.drawRocketship(ship, shipCenter, flameEndX);
    this.drawRocketship(ship2, shipCenter2, flame2EndX);
  }

  draw() {
    this.drawBg();
    this.drawStars();
    this.moveStars();

    this.clearShipBg();

    if (window.innerWidth >= 1024) {
      this.drawSpeed();
      this.drawRocketships();
    }

    window.requestAnimationFrame(this.draw);
  }

  initBackground() {
    this.draw();
    this.createStars();
  }

  renderNotification() {
    return (
      <div
        className="container has-text-centered"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          className="notification"
          style={{
            transition: 'opacity .5s ease-in-out',
            opacity: this.state.showNotification ? 1 : 0,
            position: 'absolute',
            top: '1rem',
            zIndex: 2,
            color: '#a0a0a0',
            maxWidth: '30rem',
          }}
        >
          Have you tried to <b>HODL</b> your spacebar?
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderNotification()}
        <canvas
          id="bg"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <canvas
          id="ship"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <canvas
          id="ship2"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    );
  }
}

export default Background;
