import React, { Component } from 'react';
import logo from './images/logo.png';

import hoodClassic from './images/hood-classic.png';
import hoodHodl from './images/hood-hodl.png';
import hoodHodler from './images/hood-hodler.png';
import hoodMoon from './images/hood-moon.png';
import hoodWolves from './images/hood-wolves.png';

import teeClassic from './images/tee-classic.png';
import teeHodl from './images/tee-hodl.png';
import teeHodler from './images/tee-hodler.png';
import teeMoon from './images/tee-moon.png';
import teeWolves from './images/tee-wolves.png';

class Store extends Component {
  renderImageColumn(imageUrl, productName, productPrice) {
    return (
      <div className="column" style={{ marginBottom: '1rem' }}>
        <figure className="image" style={{ width: '80%', margin: 'auto' }}>
          <img src={imageUrl} alt="" />
        </figure>
        <br />
        <b>{productName}</b>
        <p>{productPrice} ELTCOIN</p>
        <p className="has-text-danger">Out of stock</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <section className="hero">
          <div className="container has-text-centered">
            <img src={logo} width={250} alt="" />
          </div>
        </section>
        <section className="container has-text-centered">
          <div className="columns">
            {this.renderImageColumn(hoodClassic, 'Classic hoodie', 5000)}
            {this.renderImageColumn(teeClassic, 'Classic tee-shirt', 2500)}
            {this.renderImageColumn(hoodHodl, 'Hodl hoodie', 5000)}
          </div>
          <div className="columns">
            {this.renderImageColumn(teeHodl, 'Hodl tee-shirt', 2500)}
            {this.renderImageColumn(hoodHodler, 'Hodler hoodie', 5000)}
            {this.renderImageColumn(teeHodler, 'Hodler tee-shirt', 2500)}
          </div>
          <div className="columns">
            {this.renderImageColumn(hoodMoon, 'Astronaut hoodie', 5000)}
            {this.renderImageColumn(teeMoon, 'Astronaut tee-shirt', 2500)}
            {this.renderImageColumn(hoodWolves, 'Wolves hoodie', 5000)}
          </div>
          <div className="columns">
            <div className="column" />
            {this.renderImageColumn(teeWolves, 'Wolves tee-shirt', 2500)}
            <div className="column" />
          </div>
          <br />
        </section>
      </div>
    );
  }
}

export default Store;
