import React, { Component } from 'react';
import logo from './images/logo.png';

class Hero extends Component {
  render() {
    return (
      <section
        className="hero"
        style={{
          minHeight: 'calc(100vh - 40px)',
          width: '100vw',
          margin: 'auto',
        }}
      >
        <div
          className="hero-body"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <img src={logo} width={350} alt="" />
            <h1 className="subtitle is-size-2">Welcome to our universe!</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
