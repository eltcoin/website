import React from 'react';
import logo from './images/logo.png';

export default () => (
  <section className="tc mw9 center">
    <img className="w4" src={logo} alt="ELTCOIN" />
    <h1 className="f1 tracked-mega mb1 mt2">ELTCOIN</h1>
    <h4 className="silver f4 mt2">Ethereum Limited Total Coin</h4>
    <div className="ph3 mw6 center">
      <p className="f5 lh-copy">
        A community-driven currency that powers an open-sourced library of cool
        dapps built on Ethereum.
      </p>
    </div>
  </section>
);
